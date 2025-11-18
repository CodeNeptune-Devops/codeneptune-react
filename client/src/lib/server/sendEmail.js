// src/lib/server/sendEmail.js
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

/**
 * Send contact email via SMTP
 * @param {string} templateType - Template type (e.g., 'contact')
 * @param {object} templateData - Data for template placeholders
 * @param {object} emailOptions - Email configuration (to, subject, replyTo)
 */
export async function sendContactEmail(templateType, templateData, emailOptions) {
  try {
    // Validate template type
    if (templateType !== 'contact') {
      throw new Error(`Unsupported template type: ${templateType}`);
    }

    // Path to email template
    const templatePath = path.join(
      process.cwd(), 
      "src", 
      "lib", 
      "email-templates", 
      `${templateType}.html`
    );

    if (!fs.existsSync(templatePath)) {
      throw new Error(`Email template not found: ${templatePath}`);
    }

    let html = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders with actual data
    html = html
      .replace(/{{fullName}}/g, templateData.fullName || "")
      .replace(/{{email}}/g, templateData.email || "")
      .replace(/{{phoneNumber}}/g, templateData.phoneNumber || "")
      .replace(/{{message}}/g, templateData.message || "No message")
      .replace(/{{service}}/g, templateData.service || "None")
      .replace(/{{foundUs}}/g, templateData.foundUs || "Not specified")
      .replace(/{{formType}}/g, templateData.formType || "")
      .replace(/{{submittedFrom}}/g, templateData.submittedFrom || "");

    // Validate SMTP configuration
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error("Missing SMTP configuration. Check environment variables.");
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { 
        rejectUnauthorized: false // Only use this for testing, remove in production
      }
    });

    // Verify connection
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    // Send email
    const info = await transporter.sendMail({
      from: emailOptions.from || process.env.SENDER_EMAIL || process.env.SMTP_USER,
      to: emailOptions.to || process.env.RECEIVER_EMAIL,
      subject: emailOptions.subject || `New Contact Form Submission`,
      html,
      replyTo: emailOptions.replyTo || templateData.email,
    });

    console.log("📧 SMTP Email sent successfully:", {
      messageId: info.messageId,
      to: emailOptions.to,
      name: templateData.fullName
    });

    return { success: true, messageId: info.messageId, provider: 'smtp' };

  } catch (err) {
    console.error("❌ SMTP Email Error:", err.message);
    throw err; // Re-throw so fallback can catch it
  }
}
// src/lib/server/sendEmail.js
import nodemailer from "nodemailer";
import { getEmailTemplate } from "./emailTemplates.js";

export async function sendContactEmail(templateType, templateData, emailOptions) {
  try {
    console.log("=========== 📩 EMAIL DEBUG START ===========");

    // Log incoming payload
    console.log("➡️ Template Type:", templateType);
    console.log("➡️ Template Data:", templateData);
    console.log("➡️ Email Options:", emailOptions);

    // Validate template type
    if (templateType !== 'contact') {
      throw new Error(`Unsupported template type: ${templateType}`);
    }

    // Load template
    let html = getEmailTemplate(templateType);

    if (!html) {
      throw new Error(`Email template not found: ${templateType}`);
    }

    // Replace placeholders
    html = html
      .replace(/{{fullName}}/g, templateData.fullName || "")
      .replace(/{{email}}/g, templateData.email || "")
      .replace(/{{phoneNumber}}/g, templateData.phoneNumber || "")
      .replace(/{{message}}/g, templateData.message || "No message")
      .replace(/{{service}}/g, templateData.service || "None")
      .replace(/{{foundUs}}/g, templateData.foundUs || "Not specified")
      .replace(/{{formType}}/g, templateData.formType || "")
      .replace(/{{submittedFrom}}/g, templateData.submittedFrom || "");

    console.log("📄 HTML Template Loaded");

    // Log SMTP ENV VALUES (critical)
    console.log("=========== 🔐 SMTP ENV CHECK ===========");
    console.log("SMTP_HOST      =>", process.env.SMTP_HOST);
    console.log("SMTP_PORT      =>", process.env.SMTP_PORT);
    console.log("SMTP_SECURE    =>", process.env.SMTP_SECURE);
    console.log("SMTP_USER      =>", process.env.SMTP_USER);
    console.log("SMTP_PASS LEN  =>", process.env.SMTP_PASS ? process.env.SMTP_PASS.length : "MISSING");
    console.log("SENDER_EMAIL   =>", process.env.SENDER_EMAIL);
    console.log("NODE_ENV       =>", process.env.NODE_ENV);

    // Validate SMTP ENV
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error("Missing SMTP configuration. Check environment variables.");
    }

    console.log("=========== 📤 CREATING TRANSPORTER ===========");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      ...(process.env.NODE_ENV === 'development' && {
        tls: { rejectUnauthorized: false }
      })
    });

    console.log("🔧 Transporter Config:", {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      user: process.env.SMTP_USER,
      passLength: process.env.SMTP_PASS?.length,
    });

    console.log("=========== 🧪 VERIFYING SMTP CONNECTION ===========");

    // Verify with timeout
    await Promise.race([
      transporter.verify().then(() => {
        console.log("✅ SMTP VERIFY SUCCESS");
      }).catch((err) => {
        console.error("❌ SMTP VERIFY ERROR:", err);
        throw err;
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('SMTP connection timeout')), 10000)
      )
    ]);

    console.log("=========== 📧 SENDING EMAIL ===========");

    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL || process.env.SMTP_USER,
      to: emailOptions.to || process.env.RECEIVER_EMAIL,
      subject: emailOptions.subject || `New Contact Form Submission`,
      html,
      replyTo: emailOptions.replyTo || templateData.email,
    });

    console.log("📨 EMAIL SENT:", {
      messageId: info.messageId,
      to: emailOptions.to,
      name: templateData.fullName
    });

    console.log("=========== 🎉 EMAIL PROCESS DONE ===========");

    return { success: true, messageId: info.messageId, provider: 'smtp' };

  } catch (err) {
    console.error("=========== ❌ EMAIL ERROR ===========");
    console.error("Error Message:", err.message);
    console.error("Full Error:", err);
    console.error("======================================");
    throw err;
  }
}

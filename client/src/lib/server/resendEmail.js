// src/lib/server/resendEmail.js
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send email using Resend with HTML template
 * @param {string} templateName - Template file name (e.g., 'contact')
 * @param {object} variables - Template variables (fullName, email, etc.)
 * @param {object} options - Email options (to, subject, replyTo)
 * @returns {Promise<object>} - Resend response with messageId
 */
export async function resendEmailWithTemplate(templateName, variables, options = {}) {
  try {
    // Validate Resend API key
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }

    // Load HTML template
    const templatePath = path.join(
      process.cwd(),
      "src",
      "lib",
      "email-templates",
      `${templateName}.html`
    );

    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template not found: ${templatePath}`);
    }

    let html = fs.readFileSync(templatePath, "utf8");

    // Replace all placeholders like {{fullName}}, {{email}}, etc.
    Object.keys(variables || {}).forEach((key) => {
      const safeVal = variables[key] ?? "";
      html = html.replace(new RegExp(`{{${key}}}`, "g"), safeVal);
    });

    // Get email configuration
    const from = process.env.RESEND_FROM_EMAIL;
    const to = options.to || process.env.RESEND_RECEIVER_EMAIL || process.env.RECEIVER_EMAIL;
    const subject = options.subject || "No subject";
    const replyTo = options.replyTo || undefined;

    // Validate required fields
    if (!from) {
      throw new Error("Missing RESEND_FROM_EMAIL environment variable");
    }
    if (!to) {
      throw new Error("Missing recipient email (RECEIVER_EMAIL or options.to)");
    }

    console.log("📨 Sending Resend email:", {
      from,
      to,
      subject,
      hasReplyTo: !!replyTo
    });

    // Send email via Resend
    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo, // Correct property name (not reply_to)
    });

    // Check for errors in response
    if (result.error) {
      console.error("❌ Resend API Error:", result.error);
      throw new Error(`Resend API Error: ${JSON.stringify(result.error)}`);
    }

    console.log("✅ Resend email sent successfully:", {
      messageId: result.data?.id,
      to,
      subject
    });

    return { 
      success: true, 
      messageId: result.data?.id, 
      provider: 'resend',
      data: result.data 
    };

  } catch (err) {
    console.error("❌ Resend Email Error:", {
      message: err.message,
      stack: err.stack,
      resendError: err.error || err
    });
    
    // IMPORTANT: Re-throw the error so fallback mechanism works
    throw err;
  }
}

/**
 * Test Resend connection and configuration
 * Use this to verify your setup before going live
 */
export async function testResendConnection() {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      throw new Error("Missing RESEND_FROM_EMAIL");
    }

    console.log("✅ Resend configuration validated");
    console.log("📧 From email:", process.env.RESEND_FROM_EMAIL);
    
    // Note: Resend doesn't have a verify endpoint like nodemailer
    // The only way to test is to actually send an email
    
    return true;
  } catch (err) {
    console.error("❌ Resend configuration error:", err.message);
    throw err;
  }
}
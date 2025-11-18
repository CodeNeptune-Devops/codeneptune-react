// lib/server/emailService.js
import EmailSettings from '@/models/EmailSettings';
import { sendContactEmail } from './sendEmail';
import { resendEmailWithTemplate } from './resendEmail';

/**
 * Dynamically send email based on active provider from database
 * @param {string} templateType - Type of email template ('contact', 'newsletter', etc.)
 * @param {object} templateData - Data to populate the template
 * @param {object} emailOptions - Email options (to, subject, replyTo, etc.)
 * @returns {Promise<object>} - Result of email send operation
 */
export async function sendEmail(templateType, templateData, emailOptions) {
  try {
    // Fetch active provider from database (returns 'smtp' or 'resend')
    const activeProvider = await EmailSettings.getActiveProvider();
    
    console.log(`📧 Using email provider: ${activeProvider}`);

    if (activeProvider === 'smtp') {
      // Use SMTP
      return await sendContactEmail(templateType, templateData, emailOptions);
    } else if (activeProvider === 'resend') {
      // Use Resend
      return await resendEmailWithTemplate(templateType, templateData, emailOptions);
    } else {
      // Fallback to SMTP if invalid provider
      console.warn(`⚠️ Invalid provider "${activeProvider}", falling back to SMTP`);
      return await sendContactEmail(templateType, templateData, emailOptions);
    }
  } catch (error) {
    console.error('❌ Email Service Error:', error);
    throw error;
  }
}

/**
 * Send email with fallback mechanism
 * Tries active provider first, falls back to alternate if it fails
 */
export async function sendEmailWithFallback(templateType, templateData, emailOptions) {
  try {
    const activeProvider = await EmailSettings.getActiveProvider();

    console.log(`📧 Attempting email with: ${activeProvider}`);

    // Choose receiver email based on provider
    const primaryTo =
      activeProvider === "smtp"
        ? process.env.RECEIVER_EMAIL
        : process.env.RESEND_RECEIVER_EMAIL;

    console.log(`📨 Primary TO set as: ${primaryTo}`);

    try {
      // Try primary provider
      if (activeProvider === "smtp") {
        return await sendContactEmail(templateType, templateData, {
          ...emailOptions,
          to: primaryTo,
        });
      } else {
        return await resendEmailWithTemplate(templateType, templateData, {
          ...emailOptions,
          to: primaryTo,
        });
      }
    } catch (primaryError) {
      console.warn(`⚠️ Primary provider (${activeProvider}) failed:`, primaryError.message);
      console.log("🔄 Trying fallback provider...");

      // Switch provider
      const fallbackProvider = activeProvider === "smtp" ? "resend" : "smtp";

      // Choose fallback receiver
      const fallbackTo =
        fallbackProvider === "smtp"
          ? process.env.RECEIVER_EMAIL
          : process.env.RESEND_RECEIVER_EMAIL;

      console.log(`📨 Fallback TO set as: ${fallbackTo}`);
      console.log(`📧 Fallback provider: ${fallbackProvider}`);

      if (fallbackProvider === "smtp") {
        return await sendContactEmail(templateType, templateData, {
          ...emailOptions,
          to: fallbackTo,
        });
      } else {
        return await resendEmailWithTemplate(templateType, templateData, {
          ...emailOptions,
          to: fallbackTo,
        });
      }
    }

  } catch (err) {
    console.error("❌ All email providers failed:", err);
    throw err;
  }
}

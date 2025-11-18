// src/lib/server/resendEmail.js
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function resendEmailWithTemplate(templateName, variables, options = {}) {
  try {
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

    // Replace placeholders like {{fullName}}
    Object.keys(variables || {}).forEach((key) => {
      const safeVal = variables[key] ?? "";
      html = html.replace(new RegExp(`{{${key}}}`, "g"), safeVal);
    });

    const from = process.env.RESEND_FROM_EMAIL;
    const to = options.to || process.env.RECEIVER_EMAIL;
    const subject = options.subject || "No subject";
    const replyTo = options.replyTo || undefined;

    if (!from) throw new Error("Missing RESEND_FROM_EMAIL env variable");
    if (!to) throw new Error("Missing RECEIVER_EMAIL (or options.to)");

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      reply_to: replyTo,
    });

    if (error) throw error;

    console.log("📨 Resend email sent successfully:", { to, subject });
    return true;
  } catch (err) {
    console.error("❌ Resend Template Email Error:", err);
    return false;
  }
}

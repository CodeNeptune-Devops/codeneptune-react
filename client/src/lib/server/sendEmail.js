// src/lib/server/sendEmail.js
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function sendContactEmail({ name, email, mobile, message, service, foundUs, formType, submittedFrom }) {
  try {
    // Path to email template
    const templatePath = path.join(process.cwd(), "src", "lib", "email-templates", "contact.html");

    if (!fs.existsSync(templatePath)) {
      console.warn("Email template not found:", templatePath);
      return;
    }

    let html = fs.readFileSync(templatePath, "utf8");

    // Replace placeholders
    html = html
      .replace(/{{fullName}}/g, name)
      .replace(/{{email}}/g, email)
      .replace(/{{phoneNumber}}/g, mobile || "")
      .replace(/{{message}}/g, message || "No message")
      .replace(/{{service}}/g, service || "None")
      .replace(/{{foundUs}}/g, foundUs || "Not specified")
      .replace(/{{formType}}/g, formType || "")
      .replace(/{{submittedFrom}}/g, submittedFrom || "");

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false }
    });

    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission - ${name}`,
      html,
      replyTo: email,
    });

    console.log("📧 Email sent for:", name);

  } catch (err) {
    console.error("Email sending error:", err);
  }
}

import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// LOAD TEMPLATE FROM FILE
function loadTemplate(templateName) {
  const filePath = path.join(
    process.cwd(),
    "src/lib/email-templates",
    `${templateName}.html`
  );

  return fs.readFileSync(filePath, "utf8");
}

export async function sendContactEmail(templateType, templateData, emailOptions) {
  try {
    console.log("=========== 📩 EMAIL DEBUG START ===========");
    console.log("➡️ Template Type:", templateType);
    console.log("➡️ Template Data:", templateData);
    console.log("➡️ Email Options:", emailOptions);

    // VALIDATE TEMPLATE TYPE
    if (templateType !== "contact") {
      throw new Error(`Unsupported template type: ${templateType}`);
    }

    // LOAD HTML TEMPLATE FILE
    let html = loadTemplate("contact");
    if (!html) throw new Error("Email template not found: contact");

    console.log("📄 HTML Template Loaded");

    // TIMESTAMP FOR EMAIL (no JS allowed inside email)
    const timestamp = new Date().toLocaleString("en-IN", {
      dateStyle: "full",
      timeStyle: "short",
    });

    // REPLACE PLACEHOLDERS
    html = html
      .replace(/{{fullName}}/g, templateData.fullName || "")
      .replace(/{{email}}/g, templateData.email || "")
      .replace(/{{phoneNumber}}/g, templateData.phoneNumber || "")
      .replace(/{{message}}/g, templateData.message || "No message")
      .replace(/{{service}}/g, templateData.service || "None")
      .replace(/{{foundUs}}/g, templateData.foundUs || "Not specified")
      .replace(/{{formType}}/g, templateData.formType || "")
      .replace(/{{submittedFrom}}/g, templateData.submittedFrom || "")
      .replace(/{{timestamp}}/g, timestamp);

    // ENV CHECK LOGS
    console.log("=========== 🔐 SMTP ENV CHECK ===========");
    console.log("SMTP_HOST      =>", process.env.SMTP_HOST);
    console.log("SMTP_PORT      =>", process.env.SMTP_PORT);
    console.log("SMTP_SECURE    =>", process.env.SMTP_SECURE);
    console.log("SMTP_USER      =>", process.env.SMTP_USER);
    console.log(
      "SMTP_PASS LEN  =>",
      process.env.SMTP_PASS ? process.env.SMTP_PASS.length : "MISSING"
    );
    console.log("SENDER_EMAIL   =>", process.env.SENDER_EMAIL);
    console.log("NODE_ENV       =>", process.env.NODE_ENV);

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error("Missing SMTP configuration. Check environment variables.");
    }

    console.log("=========== 📤 CREATING TRANSPORTER ===========");

    // CREATE SMTP TRANSPORTER
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      ...(process.env.NODE_ENV === "development" && {
        tls: { rejectUnauthorized: false },
      }),
    });

    console.log("🔧 Transporter Config:", {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      user: process.env.SMTP_USER,
      passLength: process.env.SMTP_PASS?.length,
    });

    console.log("=========== 🧪 VERIFYING SMTP CONNECTION ===========");

    // VERIFY SMTP
    await Promise.race([
      transporter.verify().then(() => {
        console.log("✅ SMTP VERIFY SUCCESS");
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("SMTP connection timeout")), 10000)
      ),
    ]);

    console.log("=========== 📧 SENDING EMAIL ===========");

    // SEND EMAIL
    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL || process.env.SMTP_USER,
      to: emailOptions.to || process.env.RECEIVER_EMAIL,
      subject: emailOptions.subject || "New Contact Form Submission",
      html,
      replyTo: emailOptions.replyTo || templateData.email,
    });

    console.log("📨 EMAIL SENT:", {
      messageId: info.messageId,
      to: emailOptions.to,
      name: templateData.fullName,
    });

    console.log("=========== 🎉 EMAIL PROCESS DONE ===========");

    return { success: true, messageId: info.messageId, provider: "smtp" };
  } catch (err) {
    console.error("=========== ❌ EMAIL ERROR ===========");
    console.error("Error Message:", err.message);
    console.error("Full Error:", err);
    console.error("======================================");
    throw err;
  }
}

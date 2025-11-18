export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import ContactForm from "@/models/ContactForm";
import connectDB from "@/lib/db";
import { sendEmailWithFallback } from "@/lib/server/emailService";

// -----------------------------------------------------
// VERIFY RECAPTCHA
// -----------------------------------------------------
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("❌ Missing RECAPTCHA_SECRET_KEY");
    throw new Error("Server misconfigured");
  }

  const params = new URLSearchParams();
  params.append("secret", secretKey);
  params.append("response", token);

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    }
  );

  const result = await response.json();
  console.log("🔐 RECAPTCHA RESULT:", result);
  return result;
}

// -----------------------------------------------------
//  POST: SUBMIT CONTACT FORM
// -----------------------------------------------------
export async function POST(request) {
  try {
    console.log("\n==============================");
    console.log("📥 NEW CONTACT FORM SUBMISSION");
    console.log("==============================");

    await connectDB();
    console.log("🔗 MongoDB Connected");

    const body = await request.json();

    const {
      name,
      mobile,
      email,
      foundUs,
      message,
      formType,
      submittedFrom,
      recaptchaToken,
      service,
    } = body;

    console.log("📩 Form Received:", {
      name,
      email,
      mobile,
      formType,
      submittedFrom,
      hasRecaptchaToken: !!recaptchaToken,
    });

    // -----------------------------
    // VALIDATION SECTION
    // -----------------------------
    if (!name || !mobile || !email) {
      console.warn("⚠️ Missing required fields");
      return NextResponse.json(
        { error: "Name, mobile & email are required." },
        { status: 400 }
      );
    }

    if (!recaptchaToken) {
      console.warn("⚠️ No reCAPTCHA token received");
      return NextResponse.json(
        { error: "reCAPTCHA is required." },
        { status: 400 }
      );
    }

    console.log("🔐 Verifying reCAPTCHA...");
    const result = await verifyRecaptcha(recaptchaToken);

    if (!result.success) {
      console.error("❌ reCAPTCHA FAILED:", result);
      return NextResponse.json(
        { error: "Failed reCAPTCHA verification." },
        { status: 400 }
      );
    }
    console.log("🟢 reCAPTCHA Passed");

    // -----------------------------
    // SAVE TO DATABASE
    // -----------------------------
    console.log("💾 Saving form to database...");
    const newEntry = await ContactForm.create({
      name,
      mobile,
      email,
      message: message || "",
      foundUs: foundUs || "not_specified",
      formType: formType || "contact-form",
      submittedFrom: submittedFrom || "/",
      service: service || null,
      recaptchaVerified: true,
      status: 1,
      submittedAt: new Date(),
    });

    console.log("✅ Form Saved to DB:", newEntry._id);

    // -----------------------------
    // SEND EMAIL (NOW SYNCHRONOUS)
    // -----------------------------
    console.log("📨 Sending email BEFORE sending response...");

    try {
      const emailResult = await sendEmailWithFallback(
        "contact",
        {
          fullName: name,
          email,
          phoneNumber: mobile,
          message: message || "",
          service: service || "",
          foundUs: foundUs || "",
          formType: formType || "",
          submittedFrom: submittedFrom || "",
        },
        {
          to: process.env.RECEIVER_EMAIL,
          subject: `New Contact Form Submission - ${name}`,
          replyTo: email,
        }
      );

      console.log("📬 EMAIL SENT SUCCESSFULLY");
      console.log("📦 Provider:", emailResult?.provider || "smtp");
    } catch (emailErr) {
      console.error("❌ EMAIL SENDING FAILED");
      console.error("Error:", emailErr.message);
    }

    // -----------------------------
    // RESPONSE TO FRONTEND
    // -----------------------------
    console.log("🎉 Response sent to client");
    console.log("==============================\n");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received.",
        id: newEntry._id,
      },
      { status: 201 }
    );

  } catch (err) {
    console.error("❌ UNEXPECTED SERVER ERROR:", err);
    console.log("==============================\n");
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}


// -----------------------------------------------------
//  GET: FETCH SUBMISSIONS
// -----------------------------------------------------
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const formType = searchParams.get("formType");
    const submittedFrom = searchParams.get("submittedFrom");
    const limit = parseInt(searchParams.get("limit")) || 50;
    const page = parseInt(searchParams.get("page")) || 1;

    const query = {};
    if (status) query.status = status;
    if (formType) query.formType = formType;
    if (submittedFrom) query.submittedFrom = submittedFrom;

    const submissions = await ContactForm.find(query)
      .sort({ submittedAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit);

    const total = await ContactForm.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: submissions,
      pagination: { total, page, limit, pages: Math.ceil(total / limit) },
    });
  } catch (err) {
    console.error("❌ Get submissions error:", err);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
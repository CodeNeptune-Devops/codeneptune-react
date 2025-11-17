export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from 'next/server';
import ContactForm from '@/models/ContactForm';
import connectDB from '@/lib/db';
import { sendContactEmail } from "@/lib/server/sendEmail";



async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("❌ Missing RECAPTCHA_SECRET_KEY");
    throw new Error("Server misconfigured");
  }

  const params = new URLSearchParams();
  params.append("secret", secretKey);
  params.append("response", token);

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params,
  });

  const result = await response.json();
  console.log("🔐 RECAPTCHA RESULT:", result);
  return result;
}

// -----------------------------------------------------
//  POST CONTROLLER
// -----------------------------------------------------
export async function POST(request) {
  try {
    await connectDB();
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
      service
    } = body;

    console.log("📩 Received contact form:", {
      name,
      email,
      formType,
      hasRecaptchaToken: !!recaptchaToken
    });

    // -------------------------
    // BASIC VALIDATION
    // -------------------------
    if (!name || !mobile || !email)
      return NextResponse.json(
        { error: "Name, mobile & email are required." },
        { status: 400 }
      );

    if (formType !== "contact-modal" && !message)
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );

    if (formType === "contact-page-form" && !service)
      return NextResponse.json(
        { error: "Service selection is required." },
        { status: 400 }
      );

    // -------------------------
    //  RECAPTCHA VALIDATION (Local + Prod)
    // -------------------------
    if (!recaptchaToken)
      return NextResponse.json(
        { error: "reCAPTCHA is required." },
        { status: 400 }
      );

    const result = await verifyRecaptcha(recaptchaToken);

    if (!result.success) {
      console.error("❌ reCAPTCHA FAILED:", result);
      return NextResponse.json(
        { error: "Failed reCAPTCHA verification." },
        { status: 400 }
      );
    }

    // -------------------------
    //  EMAIL & PHONE VALIDATION
    // -------------------------
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });

    if (!/^[0-9]{10,15}$/.test(mobile.replace(/[^\d]/g, "")))
      return NextResponse.json({ error: "Invalid mobile number." }, { status: 400 });

    // -------------------------
    // CREATE DB ENTRY
    // -------------------------
    const newEntry = await ContactForm.create({
      name,
      mobile,
      email,
      message: message || "",
      foundUs: foundUs || "not_specified",
      formType: formType || "contact-form",
      submittedFrom: submittedFrom || "/",
      service: service || null,
      recaptchaVerified: true, // Always true here since verification passed
      status: 1,
      submittedAt: new Date(),
    });

    console.log("✅ Form saved:", newEntry._id);

    // -------------------------
    // SEND EMAIL NON-BLOCKING
    // -------------------------
    setImmediate(() => {
      sendContactEmail({
        name,
        email,
        mobile,
        message,
        foundUs,
        service,
        formType,
        submittedFrom,
      }).catch((err) => console.error("Email Error:", err));
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received.",
        id: newEntry._id,
      },
      { status: 201 }
    );

  } catch (err) {
    console.error("❌ Contact Form Error:", err);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}


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
    return NextResponse.json({ 
      error: "Failed to fetch submissions" 
    }, { status: 500 });
  }
}

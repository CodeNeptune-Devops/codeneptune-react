export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from 'next/server';
import ContactForm from '@/models/ContactForm';
import connectDB from '@/lib/db';
import { sendContactEmail } from "@/lib/server/sendEmail"; //  ✅ new import

// Verify reCAPTCHA
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    }
  );

  return response.json();
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, mobile, email, foundUs, message, formType, submittedFrom, recaptchaToken, service } = body;

    // Basic validation
    if (!name || !mobile || !email) {
      return NextResponse.json({ error: "Name, mobile & email are required" }, { status: 400 });
    }

    if (formType !== "contact-modal" && !message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (formType === "contact-page-form" && !service) {
      return NextResponse.json({ error: "Service selection is required" }, { status: 400 });
    }

    // ReCAPTCHA
    const isDev = process.env.NODE_ENV === "development";
    const hasRecaptcha = process.env.RECAPTCHA_SECRET_KEY;

    if (!isDev && hasRecaptcha) {
      const result = await verifyRecaptcha(recaptchaToken);

      if (!result.success) {
        return NextResponse.json({ error: "Failed reCAPTCHA" }, { status: 400 });
      }
    }

    // Email + Phone validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!/^[0-9]{10,15}$/.test(mobile.replace(/[\s+()-]/g, ""))) {
      return NextResponse.json({ error: "Invalid mobile number" }, { status: 400 });
    }

    // Create submission
    const newEntry = await ContactForm.create({
      name,
      mobile,
      email,
      message,
      service,
      foundUs: foundUs || "not_specified",
      formType: formType || "contact-form",
      submittedFrom: submittedFrom || "/",
      submittedAt: new Date(),
      status: 1,
    });

    // ⚡ Send email in background (does NOT delay response)
    setImmediate(() => {
      sendContactEmail({
        name,
        email,
        mobile,
        message,
        service,
        foundUs,
        formType,
        submittedFrom,
      });
    });

    // Return fast response
    return NextResponse.json(
      { success: true, message: "Form submitted!", id: newEntry._id },
      { status: 201 }
    );

  } catch (err) {
    console.error("❌ Contact Error:", err);

    if (err.code === 11000) {
      return NextResponse.json({ error: "Email already submitted" }, { status: 409 });
    }

    return NextResponse.json({ error: "Server error" }, { status: 500 });
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
    console.error("Get error:", err);
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 });
  }
}

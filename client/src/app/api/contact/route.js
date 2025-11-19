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
//  GET: FETCH SUBMISSIONS WITH ALL FILTERS
// -----------------------------------------------------
export async function GET(request) {
  try {
    await connectDB();

    // Parse all query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 15;
    const status = searchParams.get('status');
    const formType = searchParams.get('formType');
    const submittedFrom = searchParams.get('submittedFrom');
    const service = searchParams.get('service');
    const foundUs = searchParams.get('foundUs');
    const sortBy = searchParams.get('sortBy') || 'newest';
    const searchTerm = searchParams.get('searchTerm');

    console.log('🔍 GET Request Params:', {
      page,
      limit,
      status,
      formType,
      submittedFrom,
      service,
      foundUs,
      sortBy,
      searchTerm
    });

    // Build MongoDB filter object
    const filter = {};

    // Status filter (convert string to number)
    if (status !== null && status !== '' && status !== undefined) {
      filter.status = parseInt(status);
    }

    // Form type filter (exact match)
    if (formType) {
      filter.formType = formType;
    }

    // Submitted from filter (partial match, case-insensitive)
    if (submittedFrom) {
      filter.submittedFrom = { $regex: submittedFrom, $options: 'i' };
    }

    // Service filter (exact match)
    if (service) {
      filter.service = service;
    }

    // Found us filter (exact match)
    if (foundUs) {
      filter.foundUs = foundUs;
    }

    // Search term filter (searches across multiple fields)
    if (searchTerm && searchTerm.trim() !== '') {
      filter.$or = [
        { name: { $regex: searchTerm, $options: 'i' } },
        { email: { $regex: searchTerm, $options: 'i' } },
        { mobile: { $regex: searchTerm, $options: 'i' } },
        { message: { $regex: searchTerm, $options: 'i' } }
      ];
    }

    console.log('📋 MongoDB Filter:', JSON.stringify(filter, null, 2));

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Determine sort order
    const sortOrder = sortBy === 'oldest' ? 1 : -1;

    // Execute queries in parallel for better performance
    const [submissions, total] = await Promise.all([
      ContactForm.find(filter)
        .sort({ submittedAt: sortOrder })
        .skip(skip)
        .limit(limit)
        .lean(), // Use .lean() for better performance
      ContactForm.countDocuments(filter)
    ]);

    const totalPages = Math.ceil(total / limit);

    console.log('✅ Query Results:', {
      found: submissions.length,
      total,
      totalPages,
      currentPage: page
    });

    return NextResponse.json({
      success: true,
      data: submissions,
      pagination: {
        page,
        limit,
        total,
        pages: totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });

  } catch (err) {
    console.error("❌ Get submissions error:", err);
    return NextResponse.json(
      { error: "Failed to fetch submissions", message: err.message },
      { status: 500 }
    );
  }
}
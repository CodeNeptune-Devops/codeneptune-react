export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from 'next/server';
import ContactForm from '@/models/ContactForm';
import connectDB from '@/lib/db';
import { sendContactEmail } from "@/lib/server/sendEmail";

// ✅ Verify reCAPTCHA with Google
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('❌ RECAPTCHA_SECRET_KEY not configured');
    throw new Error('Server configuration error');
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const result = await response.json();
    console.log('🔐 reCAPTCHA verification result:', result);
    
    return result;
  } catch (error) {
    console.error('❌ reCAPTCHA verification error:', error);
    throw error;
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, mobile, email, foundUs, message, formType, submittedFrom, recaptchaToken, service } = body;

    console.log('📥 Received form submission:', {
      name,
      email,
      formType,
      hasRecaptchaToken: !!recaptchaToken,
      environment: process.env.NODE_ENV
    });

    // ============================================================
    // ✅ BASIC VALIDATION
    // ============================================================
    if (!name || !mobile || !email) {
      return NextResponse.json({ error: "Name, mobile & email are required" }, { status: 400 });
    }

    if (formType !== "contact-modal" && !message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (formType === "contact-page-form" && !service) {
      return NextResponse.json({ error: "Service selection is required" }, { status: 400 });
    }

    // ============================================================
    // ✅ RECAPTCHA VERIFICATION (PRODUCTION ONLY)
    // ============================================================
    const isDev = process.env.NODE_ENV === "development";
    const hasRecaptchaSecret = !!process.env.RECAPTCHA_SECRET_KEY;

    if (!isDev) {
      // Production mode - reCAPTCHA is REQUIRED
      if (!recaptchaToken) {
        console.error('❌ No reCAPTCHA token provided in production');
        return NextResponse.json({ 
          error: "reCAPTCHA verification is required" 
        }, { status: 400 });
      }

      if (!hasRecaptchaSecret) {
        console.error('❌ RECAPTCHA_SECRET_KEY not configured');
        return NextResponse.json({ 
          error: "Server configuration error. Please contact support." 
        }, { status: 500 });
      }

      try {
        const verificationResult = await verifyRecaptcha(recaptchaToken);

        if (!verificationResult.success) {
          console.error('❌ reCAPTCHA verification failed:', verificationResult);
          return NextResponse.json({ 
            error: "reCAPTCHA verification failed. Please try again." 
          }, { status: 400 });
        }

        console.log('✅ reCAPTCHA verified successfully');
      } catch (error) {
        console.error('❌ reCAPTCHA verification error:', error);
        return NextResponse.json({ 
          error: "Failed to verify reCAPTCHA. Please try again." 
        }, { status: 500 });
      }
    } else {
      console.log('⚠️ Development mode - skipping reCAPTCHA verification');
    }

    // ============================================================
    // ✅ EMAIL & PHONE VALIDATION
    // ============================================================
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (!/^[0-9]{10,15}$/.test(mobile.replace(/[\s+()-]/g, ""))) {
      return NextResponse.json({ error: "Invalid mobile number format" }, { status: 400 });
    }

    // ============================================================
    // ✅ CREATE DATABASE ENTRY
    // ============================================================
    const newEntry = await ContactForm.create({
      name,
      mobile,
      email,
      message: message || '',
      service: service || null,
      foundUs: foundUs || "not_specified",
      formType: formType || "contact-form",
      submittedFrom: submittedFrom || "/",
      submittedAt: new Date(),
      status: 1,
    });

    console.log('✅ Form saved to database:', newEntry._id);

    // ============================================================
    // ⚡ SEND EMAIL IN BACKGROUND (NON-BLOCKING)
    // ============================================================
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
      }).catch(err => {
        console.error('❌ Email sending failed:', err);
      });
    });

    // ============================================================
    // ✅ RETURN SUCCESS RESPONSE
    // ============================================================
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! Your message has been received.", 
        id: newEntry._id 
      },
      { status: 201 }
    );

  } catch (err) {
    console.error("❌ Contact Form Error:", err);

    // Handle duplicate email error
    if (err.code === 11000) {
      return NextResponse.json({ 
        error: "This email has already been submitted recently." 
      }, { status: 409 });
    }

    return NextResponse.json({ 
      error: "Server error. Please try again later." 
    }, { status: 500 });
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
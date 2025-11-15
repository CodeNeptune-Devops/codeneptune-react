// app/api/contact/route.js
import { NextResponse } from 'next/server';
import ContactForm from '@/models/ContactForm';
import { connectDB } from "@/lib/db";
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Verify reCAPTCHA v2 token
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();
  return data;
}

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();

    const body = await request.json();

    // Extract fields
    const { name, mobile, email, foundUs, message, formType, submittedFrom, recaptchaToken, service } = body;

    // Basic required fields for all forms
    if (!name || !mobile || !email) {
      return NextResponse.json(
        { error: 'Name, mobile, and email are required' },
        { status: 400 }
      );
    }

    // Form type specific validations
    if (formType === 'contact-modal') {
      // For contact-modal, only name, email, and mobile are required
      // message, service, and foundUs are optional
    } else {
      // For other form types, message is required
      if (!message) {
        return NextResponse.json(
          { error: 'Message is required' },
          { status: 400 }
        );
      }

      // Service is required only for contact-page-form
      if (formType === 'contact-page-form' && !service) {
        return NextResponse.json(
          { error: 'Service selection is required' },
          { status: 400 }
        );
      }
    }

    // Verify reCAPTCHA token (v2)
    let recaptchaResult = { success: true };

    // Skip reCAPTCHA in development if not configured
    const isDevelopment = process.env.NODE_ENV === 'development';
    const hasRecaptchaKey = process.env.RECAPTCHA_SECRET_KEY && process.env.RECAPTCHA_SECRET_KEY !== 'YOUR_RECAPTCHA_SECRET_KEY';

    if (!isDevelopment || hasRecaptchaKey) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'Please complete the reCAPTCHA verification' },
          { status: 400 }
        );
      }

      recaptchaResult = await verifyRecaptcha(recaptchaToken);

      if (!recaptchaResult.success) {
        console.error('reCAPTCHA verification failed:', recaptchaResult['error-codes']);
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    } else {
      console.warn('⚠️  reCAPTCHA bypassed in development mode. Configure RECAPTCHA_SECRET_KEY for production.');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate mobile number
    const mobileRegex = /^[0-9]{10,15}$/;
    if (!mobileRegex.test(mobile.replace(/[\s-+()]/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid mobile number format' },
        { status: 400 }
      );
    }

    // Get additional request metadata
    const userAgent = request.headers.get('user-agent') || null;
    const referer = request.headers.get('referer') || null;

    // Create new contact form submission with conditional fields
    const submissionData = {
      name,
      mobile,
      email,
      foundUs: foundUs || 'not_specified',
      formType: formType || 'contact-form',
      submittedFrom: submittedFrom || '/',
      submittedAt: new Date(),
      status: 'new',
      userAgent,
      referrer: referer,
      recaptchaVerified: recaptchaResult.success,
    };

    // Add optional fields only if they exist
    if (message) {
      submissionData.message = message;
    }
    if (service) {
      submissionData.service = service;
    }

    const contactSubmission = await ContactForm.create(submissionData);

    console.log('✅ Contact form submission saved:', {
      id: contactSubmission._id,
      formType: contactSubmission.formType,
      submittedFrom: contactSubmission.submittedFrom,
      recaptchaVerified: recaptchaResult.success
    });

    // ✅ SEND EMAIL NOTIFICATION (after successful database save)
    try {
      console.log("\n---------------- EMAIL PROCESS START ----------------");

      const templatePath = path.join(process.cwd(), 'src', 'lib', 'email-templates', 'contact.html');
      console.log("📄 Loading template from:", templatePath);

      if (!fs.existsSync(templatePath)) {
        console.warn('⚠️ Email template file not found.');
        throw new Error('Email template missing');
      }

      let emailHtml = fs.readFileSync(templatePath, 'utf8');

      // Replace placeholders
      emailHtml = emailHtml
        .replace(/{{fullName}}/g, name)
        .replace(/{{email}}/g, email)
        .replace(/{{phoneNumber}}/g, mobile || 'Not Provided')
        .replace(/{{message}}/g, message || 'No message provided')
        .replace(/{{service}}/g, service || 'Not specified')
        .replace(/{{foundUs}}/g, foundUs || 'Not specified')
        .replace(/{{formType}}/g, formType || 'contact-form')
        .replace(/{{submittedFrom}}/g, submittedFrom || '/');

      // Check SMTP env variables
      console.log("🔍 Checking SMTP environment variables...");
      console.log("SMTP_HOST:", process.env.SMTP_HOST);
      console.log("SMTP_PORT:", process.env.SMTP_PORT);
      console.log("SMTP_USER:", process.env.SMTP_USER);
      console.log("SENDER_EMAIL:", process.env.SENDER_EMAIL);
      console.log("RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL);

      if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        throw new Error('SMTP configuration is incomplete');
      }

      const transportConfig = {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
        debug: true,
        logger: true,
      };

      console.log("📡 Creating transporter with config:", transportConfig);

      const transporter = nodemailer.createTransport(transportConfig);

      console.log("⏳ Verifying SMTP connection...");
      await transporter.verify();
      console.log("✅ SMTP Verified Successfully!");

      const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Contact Form Submission - ${formType} from ${name}`,
        html: emailHtml,
        replyTo: email,
      };

      console.log("📩 Attempting to send email with options:", mailOptions);

      const info = await transporter.sendMail(mailOptions);

      console.log("🎉 EMAIL SENT SUCCESSFULLY!");
      console.log("📧 Message ID:", info.messageId);
      console.log("📨 Server Response:", info.response);
      console.log("---------------- EMAIL PROCESS END ----------------\n");

    } catch (emailError) {
      console.error("\n❌ EMAIL ERROR (but form saved)");
      console.error("Error NAME:", emailError.name);
      console.error("Error MESSAGE:", emailError.message);
      console.error("Error CODE:", emailError.code);
      console.error("Error STACK:", emailError.stack);
      console.error("SMTP Response:", emailError.response);
      console.error("Full Error Object:", emailError);
      console.error("---------------- EMAIL ERROR END ----------------\n");
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully! We will get back to you soon.',
        id: contactSubmission._id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error);

    // Handle duplicate email submissions
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'A submission with this email already exists' },
        { status: 409 }
      );
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Validation error: ' + error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve contact form submissions
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const formType = searchParams.get('formType');
    const submittedFrom = searchParams.get('submittedFrom');
    const limit = parseInt(searchParams.get('limit')) || 50;
    const page = parseInt(searchParams.get('page')) || 1;

    // Build query
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
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('❌ Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
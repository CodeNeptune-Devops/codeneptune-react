// app/api/contact/route.js
import { NextResponse } from 'next/server';
import ContactForm from '@/models/ContactForm';
import { connectDB } from "@/lib/db";

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();

    const body = await request.json();
    
    // Validate required fields
    const { name, mobile, email, foundUs, message, formType, submittedFrom } = body;
    
    if (!name || !mobile || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate mobile number (basic validation)
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
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      null;

    // Create new contact form submission
    const contactSubmission = await ContactForm.create({
      name,
      mobile,
      email,
      foundUs: foundUs || 'not_specified',
      message,
      formType: formType || 'contact-form',
      submittedFrom: submittedFrom || '/',
      submittedAt: new Date(),
      status: 'new',
      ipAddress,
      userAgent,
      referrer: referer
    });

    console.log('Contact form submission saved:', {
      id: contactSubmission._id,
      formType: contactSubmission.formType,
      submittedFrom: contactSubmission.submittedFrom
    });

    // Here you can add additional logic:
    // 1. Send email notification to admin
    // 2. Send confirmation email to user
    // 3. Integrate with CRM
    // 4. Send Slack/Discord notification
    // etc.

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully! We will get back to you soon.',
        id: contactSubmission._id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle duplicate email submissions
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'A submission with this email already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve contact form submissions (optional - for admin panel)
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
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
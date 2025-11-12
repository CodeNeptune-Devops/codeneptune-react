// app/api/auth/signup/route.js
import { NextResponse } from 'next/server';
import { 
  hashPassword, 
  isValidEmail, 
  validatePassword, 
  generateAccessToken, 
  generateRefreshToken 
} from '@/lib/auth';
import Admin from '@/models/Admin';
import { connectDB } from '@/lib/db';

export async function POST(request) {
  try {
    const { email, password, name } = await request.json();

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { error: passwordValidation.message },
        { status: 400 }
      );
    }

    // Validate name length
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ 
      email: email.toLowerCase() 
    });
    
    if (existingAdmin) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create admin user using model
    const admin = await Admin.create({
      email: email.toLowerCase(),
      password: hashedPassword,
      name: name.trim(),
      role: 'admin'
    });

    const adminId = admin._id.toString();

    // Generate tokens
    const accessToken = generateAccessToken(adminId, admin.email);
    const refreshToken = generateRefreshToken(adminId, admin.email);

    const response = NextResponse.json({
      success: true,
      message: 'Account created successfully',
      accessToken,
      user: {
        id: adminId,
        email: admin.email,
        name: admin.name
      }
    }, { status: 201 });

    // Set cookies
    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/'
    });

    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60, // 15 minutes
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Signup error:', error);
    
    // Handle duplicate key error (MongoDB code 11000)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: messages[0] || 'Validation error' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
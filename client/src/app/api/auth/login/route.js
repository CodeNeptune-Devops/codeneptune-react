// app/api/auth/login/route.js
// Updated to return tokens in response body (no cookies)
import { NextResponse } from 'next/server';
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  isValidEmail
} from '@/lib/auth';
import { connectDB } from '@/lib/db';
import Admin from '@/models/Admin';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Find admin user
    const admin = await Admin.findOne({
      email: email.toLowerCase()
    });

    if (!admin) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isPasswordValid = await comparePassword(password, admin.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const adminId = admin._id.toString();

    // Generate tokens
    const accessToken = generateAccessToken(adminId, admin.email);
    const refreshToken = generateRefreshToken(adminId, admin.email);

    // Update last login
    await Admin.updateOne(
      { _id: admin._id },
      { $set: { lastLogin: new Date() } }
    );

    console.log('✅ Login successful for:', admin.email);

    // Return tokens in response body (Redux will handle storage)
    return NextResponse.json({
      success: true,
      accessToken,
      refreshToken, // Include refresh token
      user: {
        id: adminId,
        email: admin.email,
        name: admin.name
      }
    });
  } catch (error) {
    console.error('Login error:', error);

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
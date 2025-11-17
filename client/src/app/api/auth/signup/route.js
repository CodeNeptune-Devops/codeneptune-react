import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { generateAccessToken, generateRefreshToken } from '@/lib/jwt';
import { setRefreshTokenCookie } from '@/utils/cookies';
import { validateEmail, validatePassword, sanitizeInput } from '@/utils/validation';

export async function POST(request) {
  try {
    await connectDB();

    const { email, password, name, role } = await request.json();

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!validatePassword(password)) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 409 }
      );
    }

    // Create user
    const user = await User.create({
      email: sanitizeInput(email.toLowerCase()),
      password,
      name: sanitizeInput(name),
      role: role ? sanitizeInput(role) : 'user'
    });

    // Generate tokens
    const accessToken = generateAccessToken({
      userId: user._id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user._id,
    });

    // Set refresh token in HTTP-only cookie
    const response = NextResponse.json(
      {
        success: true,
        message: 'User created successfully',
        accessToken,
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
      { status: 201 }
    );

    setRefreshTokenCookie(response, refreshToken);

    return response;
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
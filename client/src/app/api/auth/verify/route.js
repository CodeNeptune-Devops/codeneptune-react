// app/api/auth/verify/route.js
import { NextResponse } from 'next/server';
import { verifyAccessToken } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import Admin from '@/models/Admin';

export async function GET(request) {
  try {
    const token = request.cookies.get('accessToken')?.value;

    if (!token) {
      return NextResponse.json(
        { valid: false, error: 'No token found' },
        { status: 401 }
      );
    }

    const decoded = verifyAccessToken(token);

    // Connect to database
    await connectDB();

    // Fetch fresh user data using model
    const admin = await Admin.findById(decoded.userId).select('-password');

    if (!admin) {
      return NextResponse.json(
        { valid: false, error: 'User not found' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      valid: true,
      user: {
        id: admin._id.toString(),
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Verify token error:', error);
    return NextResponse.json(
      { valid: false, error: error.message },
      { status: 401 }
    );
  }
}
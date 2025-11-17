import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { verifyRefreshToken } from '@/lib/jwt';

export async function GET(request) {
  try {
    await connectDB();
    console.log('✅ MongoDB connected successfully');

    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('cnrefreshtoken')?.value;

    console.log('🔍 Refresh token exists:', !!refreshToken);

    if (!refreshToken) {
      return NextResponse.json(
        { success: false, isAuthenticated: false, message: 'No refresh token' },
        { status: 401 }
      );
    }

    const decoded = verifyRefreshToken(refreshToken);
    console.log('🔍 Token decoded:', !!decoded);

    if (!decoded) {
      return NextResponse.json(
        { success: false, isAuthenticated: false, message: 'Invalid token' },
        { status: 401 }
      );
    }

    const user = await User.findById(decoded.userId);
    console.log('🔍 User found:', !!user);

    if (!user || !user.isActive) {
      return NextResponse.json(
        { success: false, isAuthenticated: false, message: 'User not found' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        isAuthenticated: true,
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Verify error:', error);
    return NextResponse.json(
      { 
        success: false, 
        isAuthenticated: false,
        error: error.message 
      },
      { status: 500 }
    );
  }
}
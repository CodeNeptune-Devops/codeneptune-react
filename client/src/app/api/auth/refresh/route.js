import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import connectDB from '@/lib/db';
import User from '@/models/User';
import { generateAccessToken, verifyRefreshToken } from '@/lib/jwt';

export async function POST(request) {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('cnrefreshtoken')?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { success: false, message: 'Refresh token not found' },
        { status: 401 }
      );
    }

    const decoded = verifyRefreshToken(refreshToken);
    if (!decoded) {
      return NextResponse.json(
        { success: false, message: 'Invalid refresh token' },
        { status: 401 }
      );
    }

    const user = await User.findById(decoded.userId);
    if (!user || !user.isActive) {
      return NextResponse.json(
        { success: false, message: 'User not found or inactive' },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({
      userId: user._id,
      email: user.email,
      role: user.role,
    });

    return NextResponse.json(
      {
        success: true,
        accessToken,
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
    console.error('Refresh token error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
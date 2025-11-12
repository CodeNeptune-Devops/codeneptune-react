// app/api/auth/refresh/route.js
import { NextResponse } from 'next/server';
import { verifyRefreshToken, generateAccessToken } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import Admin from '@/models/Admin';

export async function POST(request) {
  try {
    const refreshToken = request.cookies.get('refreshToken')?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'Refresh token not found' },
        { status: 401 }
      );
    }

    let decoded;
    try {
      decoded = verifyRefreshToken(refreshToken);
    } catch (error) {
      console.error('Invalid refresh token:', error);
      const response = NextResponse.json(
        { error: 'Invalid or expired refresh token' },
        { status: 401 }
      );
      
      // Clear cookies on invalid refresh token
      response.cookies.delete('refreshToken');
      response.cookies.delete('accessToken');
      
      return response;
    }

    // Connect to database
    await connectDB();

    // Verify user still exists
    const admin = await Admin.findById(decoded.userId);

    if (!admin) {
      const response = NextResponse.json(
        { error: 'User not found' },
        { status: 401 }
      );
      
      // Clear cookies if user doesn't exist
      response.cookies.delete('refreshToken');
      response.cookies.delete('accessToken');
      
      return response;
    }

    const newAccessToken = generateAccessToken(decoded.userId, decoded.email);

    const response = NextResponse.json({
      success: true,
      accessToken: newAccessToken
    });

    // Update access token cookie
    response.cookies.set('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60, // 15 minutes
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Refresh token error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
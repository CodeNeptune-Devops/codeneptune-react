// lib/apiAuth.js
import { NextResponse } from 'next/server';
import { verifyAccessToken } from './auth';

export function withAuth(handler) {
  return async (request, context) => {
    try {
      // Check both Authorization header and cookie (in that order)
      const authHeader = request.headers.get('authorization');
      let token = null;
      
      if (authHeader?.startsWith('Bearer ')) {
        token = authHeader.substring(7);
      } else {
        // Fall back to cookie
        token = request.cookies.get('accessToken')?.value;
      }

      if (!token) {
        return NextResponse.json(
          { error: 'Unauthorized - No token provided' },
          { status: 401 }
        );
      }

      let decoded;
      try {
        decoded = verifyAccessToken(token);
      } catch (error) {
        return NextResponse.json(
          { error: 'Unauthorized - Invalid or expired token' },
          { status: 401 }
        );
      }
      
      // Attach user info to request
      request.user = {
        userId: decoded.userId,
        email: decoded.email
      };

      return handler(request, context);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return NextResponse.json(
        { error: 'Unauthorized - Authentication failed' },
        { status: 401 }
      );
    }
  };
}
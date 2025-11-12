// middleware.js
import { verifyAccessToken } from '@/lib/auth';
import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // Protected admin routes (except login and signup)
  if (path.startsWith('/admin') && !path.startsWith('/admin/login') && !path.startsWith('/admin/signup')) {
    const token = request.cookies.get('accessToken')?.value;
    
    if (!token) {
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      // Clear any stale cookies
      response.cookies.delete('accessToken');
      response.cookies.delete('refreshToken');
      return response;
    }

    try {
      verifyAccessToken(token);
      return NextResponse.next();
    } catch (error) {
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      // Clear invalid cookies
      response.cookies.delete('accessToken');
      response.cookies.delete('refreshToken');
      return response;
    }
  }

  // Redirect to dashboard if already logged in
  if (path === '/admin/login' || path === '/admin/signup') {
    const token = request.cookies.get('accessToken')?.value;
    
    if (token) {
      try {
        verifyAccessToken(token);
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      } catch (error) {
        // Token invalid, allow access to login/signup
        const response = NextResponse.next();
        response.cookies.delete('accessToken');
        response.cookies.delete('refreshToken');
        return response;
      }
    }
  }

  // Redirect /admin to appropriate page
  if (path === '/admin' || path === '/admin/') {
    const token = request.cookies.get('accessToken')?.value;
    
    if (token) {
      try {
        verifyAccessToken(token);
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      } catch (error) {
        const response = NextResponse.redirect(new URL('/admin/login', request.url));
        response.cookies.delete('accessToken');
        response.cookies.delete('refreshToken');
        return response;
      }
    }
    
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
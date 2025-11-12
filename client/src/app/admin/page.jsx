// app/admin/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/lib/api/auth';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Verify if user is logged in
        const response = await authAPI.verifyToken();
        
        if (response.valid) {
          // User is logged in, redirect to dashboard
          router.replace('/admin/dashboard');
        } else {
          // Not logged in, redirect to login
          router.replace('/admin/login');
        }
      } catch (error) {
        // Token verification failed, redirect to login
        router.replace('/admin/login');
      }
    };

    checkAuth();
  }, [router]);

  // Show loading state while checking authentication
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '@/store/slices/authSlice';
import axiosInstance from '@/lib/axios';

export default function AdminPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    const checkAuthAndRedirect = async () => {
      try {
        // If already authenticated, redirect to dashboard
        if (isAuthenticated && user) {
          if (mounted) router.replace('/admin/dashboard');
          return;
        }

        // Try to refresh token to check if user has valid session
        const { data } = await axiosInstance.post('/auth/refresh');
        
        if (!mounted) return;

        if (data?.success && data?.user) {
          dispatch(setCredentials({
            user: data.user,
            accessToken: data.accessToken,
          }));
          router.replace('/admin/dashboard');
        } else {
          router.replace('/admin/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        if (mounted) {
          router.replace('/admin/login');
        }
      } finally {
        if (mounted) {
          setChecking(false);
        }
      }
    };

    checkAuthAndRedirect();

    return () => {
      mounted = false;
    };
  }, []); // Empty deps to run only once

  // Show loading state while checking authentication
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting...</p>
        </div>
      </div>
    );
  }

  return null;
}
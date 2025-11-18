'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '@/store/slices/authSlice';
import axiosInstance from '@/lib/axios';

export default function PublicRoute({ children, redirectTo = '/admin/dashboard' }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      // If already authenticated, redirect to dashboard
      if (isAuthenticated && user) {
        router.replace(redirectTo);
        return;
      }

      // Try to refresh token to check if user has valid session
      try {
        const { data } = await axiosInstance.post('/auth/refresh');
        
        if (data.success && data.user) {
          dispatch(setCredentials({
            user: data.user,
            accessToken: data.accessToken,
          }));
          
          // User is authenticated, redirect away from public page
          router.replace(redirectTo);
        } else {
          // No valid session, allow access to public page
          setChecking(false);
        }
      } catch (error) {
        // Token refresh failed, allow access to public page
        setChecking(false);
      }
    };

    checkAuthAndRedirect();
  }, [isAuthenticated, user, router, dispatch, redirectTo]);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Only render children if user is NOT authenticated
  return !isAuthenticated ? children : null;
}
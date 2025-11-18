'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '@/components/admin/LoginForm';
import axiosInstance from '@/lib/axios';
import { setCredentials } from '@/store/slices/authSlice';

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // If Redux says we're authenticated, redirect immediately
      if (isAuthenticated) {
        router.replace('/admin/dashboard');
        return;
      }

      // Otherwise, try to refresh token to check for valid session
      try {
        const { data } = await axiosInstance.post('/auth/refresh');
        
        if (data?.success && data?.user) {
          // User has valid session, update Redux and redirect
          dispatch(setCredentials({
            user: data.user,
            accessToken: data.accessToken,
          }));
          router.replace('/admin/dashboard');
        } else {
          // No valid session, show login form
          setIsChecking(false);
        }
      } catch (error) {
        // Token refresh failed, user needs to login
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [isAuthenticated, router, dispatch]);

  // Show loading while checking authentication
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return <LoginForm />;
}
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, logout } from '@/store/slices/authSlice';
import axiosInstance from '@/lib/axios'; // Use axiosInstance, not axios

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      if (isAuthenticated && user) {
        // Already authenticated, just check roles
        if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
          router.push('/admin/login');
        }
        setChecking(false);
        return;
      }

      try {
        const { data } = await axiosInstance.post('/auth/refresh');
        
        if (data.success) {
          dispatch(setCredentials({
            user: data.user,
            accessToken: data.accessToken,
          }));
          
          if (allowedRoles.length > 0 && !allowedRoles.includes(data.user.role)) {
            router.push('/admin/login');
          }
        }
      } catch (error) {
        dispatch(logout());
        router.push('/admin/login');
      } finally {
        setChecking(false);
      }
    };

    verifyAuth();
  }, [isAuthenticated, user?.role]); // Add dependencies

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

  return isAuthenticated ? children : null;
}
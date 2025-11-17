'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, logout, setLoading } from '@/store/slices/authSlice';
import axios from 'axios';

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        // Try to refresh token (this will verify the refresh token cookie)
        const response = await axios.post('/api/auth/refresh', {}, {
          withCredentials: true,
        });
        
        if (response.data.success) {
          dispatch(
            setCredentials({
              user: response.data.user,
              accessToken: response.data.accessToken,
            })
          );
          
          // Check role permissions
          if (allowedRoles.length > 0 && !allowedRoles.includes(response.data.user.role)) {
            router.push('/admin/login');
          }
        } else {
          throw new Error('Auth failed');
        }
      } catch (error) {
        console.error('Auth verification failed:', error);
        dispatch(logout());
        router.push('/admin/login');
      } finally {
        setChecking(false);
      }
    };

    if (!isAuthenticated) {
      verifyAuth();
    } else {
      // Already authenticated, just check roles
      if (allowedRoles.length > 0 && user && !allowedRoles.includes(user.role)) {
        router.push('/admin/login');
      }
      setChecking(false);
    }
  }, []);

  if (checking || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
// components/ProtectedRoute.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { verifyToken } from '@/store/slices/authSlice';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, loading, accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    // If we have a token, verify it
    if (accessToken && !isAuthenticated) {
      dispatch(verifyToken());
    }
    
    // If not authenticated and not loading, redirect to login
    if (!isAuthenticated && !loading && !accessToken) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, loading, accessToken, router, dispatch]);

  // Show loading state
  if (loading || (!isAuthenticated && accessToken)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, show nothing (redirect will happen)
  if (!isAuthenticated) {
    return null;
  }

  // User is authenticated, show the protected content
  return <>{children}</>;
}
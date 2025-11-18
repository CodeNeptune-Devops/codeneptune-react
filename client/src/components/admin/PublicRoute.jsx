'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function PublicRoute({ children, redirectTo = '/admin/dashboard' }) {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      // Simply check Redux state - no API calls needed
      if (isAuthenticated && user) {
        router.replace(redirectTo);
      } else {
        setChecking(false);
      }
    };

    checkAuth();
  }, [isAuthenticated, user, router, redirectTo]);

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
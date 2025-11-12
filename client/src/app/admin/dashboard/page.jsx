// app/admin/dashboard/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/lib/api/auth';
import { adminAPI } from '@/lib/api/admin';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verify authentication
        const authResponse = await authAPI.verifyToken();
        
        if (!authResponse.valid) {
          router.replace('/admin/login');
          return;
        }

        // Fetch user profile
        const profileResponse = await adminAPI.getProfile();
        setUser(profileResponse.user);

        // Fetch dashboard stats (optional - handle if endpoint doesn't exist)
        try {
          const statsResponse = await adminAPI.getDashboardStats();
          setStats(statsResponse);
        } catch (statsError) {
          console.log('Stats endpoint not available:', statsError);
        }
      } catch (error) {
        console.error('Dashboard data fetch error:', error);
        router.replace('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await authAPI.logout();
      localStorage.removeItem('accessToken');
      router.replace('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Force logout even if API call fails
      localStorage.removeItem('accessToken');
      router.replace('/admin/login');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 disabled:bg-gray-400 transition-colors"
          >
            {loggingOut ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Welcome back, {user?.name || 'Admin'}!
          </h2>
          <p className="text-gray-600">Email: {user?.email}</p>
          {user?.role && <p className="text-gray-600">Role: {user?.role}</p>}
        </div>

        {/* Stats Grid */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-sm font-medium text-gray-600 uppercase">
                  {key.replace(/_/g, ' ')}
                </h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Manage Users
            </button>
            <button className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
              View Reports
            </button>
            <button className="bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
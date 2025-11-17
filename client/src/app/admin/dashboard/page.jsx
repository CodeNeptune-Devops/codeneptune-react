'use client';

import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/slices/authSlice';
import axiosInstance from '@/lib/axios';

export default function DashboardPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, accessToken } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/auth/logout');
      dispatch(logout());
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
      dispatch(logout());
      router.push('/admin/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h2>
          <p className="text-gray-600">
            You're logged in as <span className="font-medium">{user?.role}</span>
          </p>
        </div>

        {/* User Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
            <p className="text-lg font-semibold text-gray-900">{user?.email}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Role</h3>
            <p className="text-lg font-semibold text-gray-900 capitalize">
              {user?.role}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">User ID</h3>
            <p className="text-lg font-semibold text-gray-900 truncate">
              {user?.id}
            </p>
          </div>
        </div>

        {/* Token Info (For Development - Remove in Production) */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Session Information
          </h3>
          <div className="space-y-2">
            <div>
              <span className="text-sm font-medium text-blue-700">
                Access Token Status:
              </span>
              <span className="ml-2 text-sm text-blue-900">
                {accessToken ? '✓ Active' : '✗ Not Available'}
              </span>
            </div>
            <div>
              <span className="text-sm font-medium text-blue-700">
                Refresh Token:
              </span>
              <span className="ml-2 text-sm text-blue-900">
                Stored in HTTP-only cookie
              </span>
            </div>
            <p className="text-xs text-blue-600 mt-4">
              Access tokens automatically refresh when expired using the refresh token
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition text-left">
            <h4 className="font-semibold text-gray-900 mb-1">Manage Users</h4>
            <p className="text-sm text-gray-600">View and manage user accounts</p>
          </button>

          <button className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition text-left">
            <h4 className="font-semibold text-gray-900 mb-1">Settings</h4>
            <p className="text-sm text-gray-600">Configure system settings</p>
          </button>

          <button className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition text-left">
            <h4 className="font-semibold text-gray-900 mb-1">Reports</h4>
            <p className="text-sm text-gray-600">View analytics and reports</p>
          </button>
        </div>
      </main>
    </div>
  );
}
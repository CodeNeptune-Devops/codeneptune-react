"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Home,
  ShoppingBag,
  BarChart3,
  Building2,
  Calendar,
  FileText,
  GraduationCap,
  ScrollText,
  Users,
  Package,
  ShoppingCart,
  Menu,
  X,
  Search,
  Bell,
  Settings,
  ChevronRight,
  ExternalLink, 
  LogOut
} from "lucide-react";

import ProtectedRoute from "@/components/admin/ProtectedRoute";
import Image from "next/image";
import axiosInstance from "@/lib/axios";
import { logout } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import PublicRoute from "@/components/admin/PublicRoute";

const navigation = {
  overview: [
    { name: "Dashboard", icon: Home, href: "/admin/dashboard" },
    { name: "Forms", icon: ScrollText, href: "/admin/form-submissions", requiresSuperAdmin: true },
  ],
  management: [
    { name: "User", icon: Users, href: "/admin/user", hasSubmenu: true },
    { name: "Product", icon: Package, href: "/admin/product", hasSubmenu: true },
    { name: "Order", icon: ShoppingCart, href: "/admin/order", hasSubmenu: true },
  ],
};

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Get user role from Redux store
  const userRole = useSelector((state) => state.auth.user?.role);
  const isSuperAdmin = userRole === 'superadmin';

  // Don't show layout on login page - just render with PublicRoute protection
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return <PublicRoute>{children}</PublicRoute>;
  }

  // Filter navigation items based on role
  const filteredOverview = navigation.overview.filter(item => {
    if (item.requiresSuperAdmin) {
      return isSuperAdmin;
    }
    return true;
  });

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
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40">
          <div className="flex items-center justify-between h-full px-4">
            {/* Left side */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-28 h-28 flex items-center justify-center text-white font-bold">
                  <Image
                    src={'/cn-logo.svg'}
                    alt="Logo"
                    height={200}
                    width={200}
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <Link 
                href={'/'}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-purple-100 text-purple-600 hover:bg-purple-200 transition-all duration-300 cursor-pointer"
              >
                <ExternalLink size={16} />
                View Site
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-300 cursor-pointer"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Fixed Sidebar */}
        <aside
          className={`fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 z-30 transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="h-full overflow-y-auto p-4">
            {/* Overview Section */}
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Overview
              </h3>
              <nav className="space-y-1">
                {filteredOverview.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <button
                      key={item.name}
                      onClick={() => router.push(item.href)}
                      className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-emerald-50 text-emerald-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Management Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Management
              </h3>
              <nav className="space-y-1">
                {navigation.management.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname.startsWith(item.href);
                  return (
                    <button
                      key={item.name}
                      onClick={() => router.push(item.href)}
                      className={`w-full cursor-pointer flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-emerald-50 text-emerald-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} />
                        <span>{item.name}</span>
                      </div>
                      {item.hasSubmenu && <ChevronRight size={16} />}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="pt-16 lg:pl-64 min-h-screen">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
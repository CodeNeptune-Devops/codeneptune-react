"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
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
  ChevronRight
} from "lucide-react";

import ProtectedRoute from "@/components/admin/ProtectedRoute";

const navigation = {
  overview: [
    { name: "Dashboard", icon: Home, href: "/admin/dashboard" },
    { name: "Forms", icon: ScrollText, href: "/admin/form-submissions" },
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Don't show layout on login page
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return children;
  }

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
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">
                  M
                </div>
                <span className="font-semibold text-gray-900 hidden sm:block">Team 1</span>
                <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded hidden sm:block">
                  Free
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Search size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings size={20} className="text-gray-600" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full ml-2"></div>
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
                {navigation.overview.map((item) => {
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
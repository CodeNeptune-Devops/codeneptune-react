"use client";

import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Loader from "../loader/Loader";

// dynamic imports with a Loader shown while the chunk downloads
const Header = dynamic(() => import("../layout/Header"), {
  loading: () => <Loader />,
  // ssr: false, // <-- uncomment if you want Header to be client-only (shows loader even on first load)
});

const Footer = dynamic(() => import("../layout/Footer"), {
  loading: () => <Loader />,
  // ssr: false, // <-- same caveat as above
});

export default function Layout({ children }) {
  const pathname = usePathname();
  const isAdminRoute =
    pathname?.startsWith("/admin") || pathname?.startsWith("/dashboard");

  return (
    // keep Suspense if you have other suspenseful children; dynamic() loading prop handles header/footer load UI
    <Suspense fallback={<Loader />}>
      <>
        {!isAdminRoute && <Header />}
        {/* <Whatsapp isAdminRoute={isAdminRoute} /> */}
        <ToastContainer position="top-center" />
        <main className="flex-1 w-full bg-white text-black">{children}</main>
        {/* <ScrollToTop /> */}
        {!isAdminRoute && <Footer />}
      </>
    </Suspense>
  );
}
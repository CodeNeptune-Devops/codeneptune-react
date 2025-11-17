"use client";

import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Loader from "../loader/Loader";
import WhatsappPopUp from "../WhatsappPopUp";

const Header = dynamic(() => import("./Header"), {
  loading: () => <Loader />,
});

const Footer = dynamic(() => import("../layout/Footer"), {
  loading: () => <Loader />,
});

export default function Layout({ children }) {
  const pathname = usePathname();
  const isAdminRoute =
    pathname?.startsWith("/admin") || pathname?.startsWith("/dashboard");

  return (
    <>
      {/* ToastContainer OUTSIDE Suspense — highest Z-index priority */}
      <ToastContainer
        position="top-right"
        className="!z-[9999999999]"
        toastClassName="!z-[99999999999]"
      />

      <Suspense fallback={<Loader />}>
        <>
          {!isAdminRoute && <Header />}

          <main className="flex-1 w-full bg-white text-black">{children}</main>

          {!isAdminRoute && <WhatsappPopUp />}

          {!isAdminRoute && <Footer />}
        </>
      </Suspense>
    </>
  );
}

"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80">
      <div className="w-14 h-14 border-4 border-gray-300 border-t-[#0072FF] rounded-full animate-spin"></div>
    </div>
  );
}

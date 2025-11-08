"use client";
import React from "react";
import dynamic from "next/dynamic";

// ✅ Dynamically import Lottie only on the client side
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center w-screen h-screen bg-white bg-opacity-80">
      <Lottie
        animationData={require("../../../public/loader/loader.json")}
        className="w-32 h-32"
        style={{ filter: "hue-rotate(45deg) brightness(1.2)" }}
        loop
        autoplay
      />
    </div>
  );
}

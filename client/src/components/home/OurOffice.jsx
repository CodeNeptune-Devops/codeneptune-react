"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import img1 from '../../assets/our-team/img1.webp'
import img2 from '../../assets/our-team/img2.webp'
import img3 from '../../assets/our-team/img3.webp'
import Image from "next/image";
import ContactModal from "@/modals/ContactModal";


// Simple blur text animation component
function BlurText({ text, delay, onAnimationComplete, className }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, onAnimationComplete]);

  return (
    <span className={`inline-block animate-fade-in ${className}`}>
      {text}
    </span>
  );
}

function OurOffice() {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationStarted(true);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div className="bg-black pb-8 pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="font-bold text-white leading-tight">
              <div className="flex w-full justify-center items-center pb-2 sm:pb-4">
                <div className="flex w-full justify-center items-center">
                  <BlurText
                    text="Our Office is a"
                    delay={150}
                    onAnimationComplete={handleAnimationComplete}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-center text-white font-extrabold"
                  />
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
                <div
                  className={`transition-all duration-700 ${animationStarted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                    }`}
                  style={{
                    transitionDelay: "200ms",
                    willChange: "transform, opacity",
                  }}
                >
                  hub of{" "}
                  <span className="bg-green-400 text-black px-2 sm:px-3 py-1 inline-block rounded text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
                    talent
                  </span>{" "}
                  and
                </div>
                <div
                  className={`transition-all duration-700 ${animationStarted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                    }`}
                  style={{
                    transitionDelay: "400ms",
                    willChange: "transform, opacity",
                  }}
                >
                  <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 inline-block rounded text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl">
                    client success.
                  </span>
                </div>
              </div>
            </h3>
          </div>

          {/* Bento Grid Layout */}
          <div className="mb-12 sm:mb-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
              {/* Large left box */}
              <div className="sm:col-span-2 lg:col-span-4 lg:row-span-2">
                <div
                  className={`relative w-full h-64 sm:h-80 lg:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                    }`}
                  style={{
                    transitionDelay: "600ms",
                    willChange: "transform, opacity",
                  }}
                >
                  <Image
                    src={img3}
                    alt="Office space"
                    loading="lazy"
                    height={200}
                    width={200}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Middle column */}
              <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
                <div
                  className={`relative w-full h-48 sm:h-56 lg:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-20 opacity-0"
                    }`}
                  style={{
                    transitionDelay: "800ms",
                    willChange: "transform, opacity",
                  }}
                >
                  <Image
                    src={img1}
                    alt="Office space"
                    loading="lazy"
                    height={200}
                    width={200}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>

                <div
                  className={`relative w-full h-48 sm:h-56 lg:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                    }`}
                  style={{
                    transitionDelay: "1000ms",
                    willChange: "transform, opacity",
                  }}
                >
                  <Image
                    src={img2}
                    alt="Office space"
                    loading="lazy"
                    height={200}
                    width={200}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>

                <div
                  className={`flex justify-center pt-2 sm:pt-3 transition-all duration-700 ${animationStarted
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0"
                    }`}
                  style={{
                    transitionDelay: "1200ms",
                    willChange: "transform, opacity",
                  }}
                >
                  <button onClick={() => setIsModalOpen(true)} className="hidden cursor-pointer lg:flex items-center gap-2 sm:gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
                    <MessageCircle size={18} className="sm:w-[22px] sm:h-[22px]" />
                    <span>Reach Out, We're Ready</span>
                  </button>
                </div>
              </div>

              {/* Right column */}
              <div className="sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
                <div
                  className={`relative w-full h-48 sm:h-56 lg:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                      ? "translate-x-0 opacity-100"
                      : "translate-x-20 opacity-0"
                    }`}
                  style={{
                    transitionDelay: "1400ms",
                    willChange: "transform, opacity",
                  }}
                >
                  <Image
                    src={img3}
                    alt="Office space"
                    loading="lazy"
                    height={200}
                    width={200}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>

                <div
                  className={`relative w-full h-48 sm:h-56 lg:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                      ? "translate-x-0 opacity-100"
                      : "translate-x-20 opacity-0"
                    }`}
                  style={{
                    transitionDelay: "1600ms",
                    willChange: "transform, opacity",
                  }}
                >
                  <Image
                    src={img3}
                    alt="Office space"
                    loading="lazy"
                    height={200}
                    width={200}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => setIsModalOpen(true)} className="flex lg:hidden cursor-pointer items-center justify-center w-full gap-2 sm:gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
            <MessageCircle size={18} className="sm:w-[22px] sm:h-[22px]" />
            <span>Reach Out, We're Ready</span>
          </button>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default OurOffice;
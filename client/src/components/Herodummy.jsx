"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: "500" });

// ✅ Lazy-load all animated text components
const BlurText = dynamic(() => import("@/animatedTexts/blurText/BlurText"), {
  ssr: false,
});
const GradientText = dynamic(
  () => import("@/animatedTexts/gradientText/GradientText"),
  { ssr: false }
);
const ShinyText = dynamic(() => import("@/animatedTexts/ShinyText/ShinyText"), {
  ssr: false,
});

export default function Hero({
  text1='Add Text 1', 
  text2 = "Add Text 2",
  description = "Description",
  buttonText="Start Your Project"
}) {
  const scrollRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const [headingFadeComplete, setHeadingFadeComplete] = useState(false);
  const [headingScaleComplete, setHeadingScaleComplete] = useState(false);
  const [headingPositionComplete, setHeadingPositionComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Sequential transitions
    const timers = [
      setTimeout(() => setHeadingFadeComplete(true), 500),
      setTimeout(() => setHeadingPositionComplete(true), 1800),
      setTimeout(() => setHeadingScaleComplete(true), 2800),
      setTimeout(() => setIsLoaded(true), 2000),
    ];

    const interval = setInterval(() => {
      setTranslateY((prev) => prev - 80);
    }, 3000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center overflow-hidden bg-[#090412] text-white pt-24 pb-10">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute inset-0 bg-black/28 z-10 pointer-events-none" />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center gap-3 px-4 py-12">
        {/* Badge */}
        <div
          className={`transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ willChange: "transform, opacity" }}
        >
          <button className="flex flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Image
              src="/home/hero-icon-1.svg"
              alt="icon"
              height={20}
              width={20}
              priority
            />
            <span className="text-sm sm:text-md font-medium text-white/90">
              Best mobile app development company in India and USA
            </span>
          </button>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-2 min-h-[200px]">
          <div className="flex flex-col w-full justify-center items-center gap-2">
            <h2
              className={`text-xl md:text-4xl lg:text-5xl text-center font-extrabold transition-all ease-out ${!headingFadeComplete
                  ? "scale-150 opacity-0"
                  : "scale-150 opacity-100"
                } ${headingPositionComplete ? "translate-y-0" : "translate-y-[10vh]"}`}
              style={{
                transitionDuration: "800ms",
                willChange: "transform, opacity",
              }}
            >
              <div className="flex justify-center items-center pb-2">
                <BlurText
                  text={text1}
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className={`text-xl md:text-4xl lg:text-5xl text-center leading-relaxed text-white font-extrabold ${plus_jakarta_sans.className}`}
                />
              </div>
            </h2>

            <h2
              className={`text-3xl md:text-5xl lg:text-5xl text-center scale-150 leading-tight bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ willChange: "transform, opacity" }}
            >
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="text-3xl md:text-5xl lg:text-5xl"
              >
                {text2}
              </GradientText>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-[18px] font-medium mt-2 text-center max-w-6xl text-white/90 leading-relaxed transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "150ms", willChange: "transform, opacity" }}
        >
          {description}
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col md:flex-row justify-center items-center gap-5 mt-4 transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "300ms", willChange: "transform, opacity" }}
        >
          <button className="px-6 py-3 rounded-full text-lg font-semibold bg-[#B8BBBF] text-[#0F1116] w-52 hover:bg-white transition-colors cursor-pointer">
           {buttonText}
          </button>

          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
            <ShinyText text="Call Us Now" speed={3} className="text-lg" />
          </button>
        </div>

        {/* Labels */}
        <div
          className={`w-full flex justify-center items-center gap-4 mt-12 transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          style={{ transitionDelay: "450ms", willChange: "transform, opacity" }}
        >
          {[
            {
              icon: "/home/label-1.svg",
              text1: "Custom",
              text2: "Web Development",
            },
            {
              icon: "/home/label-2.svg",
              text1: "Scalable",
              text2: "Mobile Apps",
            },
            {
              icon: "/home/label-3.svg",
              text1: "UI/UX",
              text2: "Design & Branding"
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              style={{
                transitionDelay: `${250 + index * 100}ms`,
                willChange: "transform, opacity",
              }}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Image src={item.icon} alt={item.text1} height={24} width={24} />
              </div>
              <div className="text-white/90">
                <p className="font-semibold text-sm leading-tight">{item.text1}</p>
                <p className="text-xs text-white/70 leading-tight">{item.text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

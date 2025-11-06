

'use client'

import BlurText from '@/animatedTexts/blurText/BlurText';
import React, { useEffect, useRef, useState } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import GradientText from '@/animatedTexts/gradientText/GradientText';
import ShinyText from '@/animatedTexts/ShinyText/ShinyText';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: '500' });

export default function Hero() {
  const scrollRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const [headingFadeComplete, setHeadingFadeComplete] = useState(false);
  const [headingScaleComplete, setHeadingScaleComplete] = useState(false);
  const [headingPositionComplete, setHeadingPositionComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);



  const scrollText = [
    'Measurable Client Success.',
    'Sustainable Business Growth',
    'Results That Drive Impact.'
  ];

  const labels = [
    { icon: '/home/label-1.svg', text1: 'Custom', text2: 'Web Development' },
    { icon: '/home/label-2.svg', text1: 'Scalable', text2: 'Mobile Apps' },
    { icon: '/home/label-3.svg', text1: 'UI/UX', text2: 'Design & Branding' },
  ]
  const stats = [
    { name: 'Digital transformation drives success', percentage: 70 },
    { name: 'First impressions are design-based', percentage: 94 },
    { name: 'Prefer apps over mobile sites', percentage: 85 },
    { name: 'Credibility tied to web design', percentage: 48 },
    { name: 'Online presence boosts revenue', percentage: 60 },
  ];

  useEffect(() => {
    // Step 1: Fade in the heading at scale 150% (centered on screen)
    setTimeout(() => setHeadingFadeComplete(true), 500);

    // Step 2: Move heading to original position - wait for fade to complete
    setTimeout(() => setHeadingPositionComplete(true), 1800);

    // Step 3: Scale down to normal size (100%) - wait for position to complete
    setTimeout(() => setHeadingScaleComplete(true), 2800);

    // Step 4: Trigger rest of the animations - wait for scale to complete
    setTimeout(() => setIsLoaded(true), 2000);

    const interval = setInterval(() => {
      setTranslateY(prev => prev - 80);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center h-fit overflow-hidden bg-[#090412] text-white pt-24 pb-10">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute inset-0 bg-black/28 z-10 pointer-events-none" />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-center gap-3 px-4 py-12">

        {/* Badge - Animation after everything else */}
        <div
          className={`transition-all duration-700 ease-out ${isLoaded
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
            }`}
          style={{ transitionDelay: '0ms' }}
        >
          <button className="flex flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Image
              src={'/home/hero-icon-1.svg'}
              alt='Image'
              height={20}
              width={20}
            />
            <span className="text-sm sm:text-md font-medium text-white/90">
              Best mobile app development company in India and USA
            </span>
          </button>
        </div>

        {/* Main Heading - Sequential animation: fade → scale → position */}
        <div className='flex flex-col items-center justify-center w-full gap-4 mt-2 min-h-[200px]'>
          <div className='flex flex-col w-full justify-center items-center gap-2'>
            {/* First heading - Fade in at 150% scale, then move to position, then scale to 100% */}
            <h2
              className={`text-2xl md:text-4xl lg:text-5xl text-center leading-relaxed text-white font-extrabold transition-all ease-out ${!headingFadeComplete
                ? 'scale-150 opacity-0'
                : headingScaleComplete
                  ? 'scale-150 opacity-100'
                  : 'scale-150 opacity-100'
                } ${headingPositionComplete ? 'translate-y-0' : 'translate-y-[10vh]'
                }`}
              style={{
                transitionDuration: !headingFadeComplete ? '800ms' : headingPositionComplete && !headingScaleComplete ? '1000ms' : '800ms',
                transitionProperty: 'all'
              }}
            >
              <div className='flex w-full justify-center items-center pb-2'>
                <BlurText
                  text="Crafting Websites, Mobile Apps &"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className={`text-2xl md:text-4xl lg:text-5xl text-center leading-relaxed text-white font-extrabold ${plus_jakarta_sans.className}`}
                />
              </div>
            </h2>

            {/* Second heading - Only appears after first heading completes its animation */}
            <h2
              className={`text-3xl md:text-5xl lg:text-5xl text-center scale-150 leading-tight bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent  transition-all duration-700 ease-out ${isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: '0ms' }}
            >
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class text-3xl md:text-5xl lg:text-5xl"
              >
                AI Agents That Redefine Possibility

              </GradientText>
            </h2>
          </div>
        </div>

        {/* Description - Animation delay 150ms */}
        <p
          className={`text-[18px] font-medium mt-2 text-center max-w-6xl text-white/90 leading-relaxed transition-all duration-700 ease-out ${isLoaded
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
            }`}
          style={{ transitionDelay: '150ms' }}
        >
          As a leading website development company and mobile app development company, we craft intelligent, AI-driven digital products that transform ideas into scalable, future ready growth.
        </p>

        {/* Buttons - Animation delay 300ms */}
        <div
          className={`flex flex-col justify-start md:flex-row md:justify-center items-center gap-5 mt-4 transition-all duration-700 ease-out ${isLoaded
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
            }`}
          style={{ transitionDelay: '300ms' }}
        >
          <button className="px-6 py-3 rounded-full text-lg font-semibold bg-[#B8BBBF] text-[#0F1116] z-30 cursor-pointer w-52 hover:bg-white transition-colors">
            Start Your Project
          </button>

          <button className="flex flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
            <ShinyText
              text="Call Us Now"
              disabled={false}
              speed={3}
              className='custom-class'
            />
          </button>
        </div>

        {/* Labels - Animation delay 450ms */}
        <div
          className={`w-full flex justify-around items-center gap-5 mt-12 transition-all duration-700 ease-out ${isLoaded
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
            }`}
          style={{ transitionDelay: '450ms' }}
        >
          {labels.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-start items-start gap-2 transition-all duration-700 ease-out ${isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${450 + (index * 100)}ms` }}
            >
              <div className="text-4xl">
                <Image
                  src={item.icon}
                  alt={item.text1}
                  height={50}
                  width={50}
                />
              </div>
              <div className="text-white/90">
                <p className="font-semibold">{item.text1}</p>
                <p className="text-sm">{item.text2}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
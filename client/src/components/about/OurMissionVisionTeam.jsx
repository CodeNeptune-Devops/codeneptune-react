'use client'

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { ImLinkedin } from "react-icons/im";
import { Bebas_Neue } from 'next/font/google';
import mission from '../../assets/our-team/mission.webp';
import vission from '../../assets/our-team/vission.webp';
import Image from 'next/image';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

function OurMissionVisionTeam() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 3D Card Component with mobile optimizations
  const TeamCard3D = ({ firstName, lastName, title, imagePath, href }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
      if (!cardRef.current || isMobile) return;
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateXValue = (y - centerY) / 10;
      const rotateYValue = (centerX - x) / 10;

      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    // Mobile touch handlers
    const handleTouchMove = (e) => {
      if (!cardRef.current || !isMobile) return;
      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateXValue = (y - centerY) / 15; // Less intense on mobile
      const rotateYValue = (centerX - x) / 15;

      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    };

    const handleTouchEnd = () => {
      setRotateX(0);
      setRotateY(0);
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full  sm:w-64 md:w-80 h-52 sm:h-80 md:h-96 mx-auto "
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ease-out relative"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Full Card Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blue-500"
            style={{
              backgroundImage: `url(${imagePath})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          />

          {/* Card Content Overlay */}
          <div className="relative w-full h-full flex flex-col items-start justify-end px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 z-10">
            {/* White Bottom Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 bg-gradient-to-b from-transparent via-black/30 to-black/60 rounded-b-2xl"
              style={{ transform: 'translateZ(20px)' }}
            />

            <div className='flex justify-between items-end gap-2 sm:gap-3 w-full'>
              <div>
                {/* Name */}
                <div className={`flex flex-col justify-start items-start text-white ${bebas.className}`}>
                  <h3
                    className="text-xl sm:text-2xl md:text-4xl font-bold text-start"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    {firstName}
                  </h3>
                  <h5
                    className="text-xl sm:text-2xl md:text-4xl font-bold text-start"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    {lastName}
                  </h5>
                </div>

                {/* Title */}
                <p
                  className="text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md mb-1 text-start"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {title}
                </p>
              </div>
              <Link target='_blank' className='cursor-pointer z-[99999] touch-none' href={href}>
                <ImLinkedin size={isMobile ? 30 : 40} className="text-white hover:text-blue-400 transition-colors"/>
              </Link>
            </div>
          </div>

          {/* 3D Shine Effect */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `linear-gradient(${rotateY * 2}deg, rgba(255,255,255,0.3) 0%, transparent 60%)`,
              transform: 'translateZ(60px)',
            }}
          />
        </div>
      </div>
    );
  };

  // Team members data
  const teamMembers = [
    {
      firstName: 'KARTHICK',
      lastName: 'Muthu',
      title: 'Co-Founder',
      imagePath: '/our-team/member-1.webp',
      href: 'https://www.linkedin.com/in/karthick09/'
    },
    {
      firstName: 'Vivek',
      lastName: 'Swaminathan',
      title: 'Co-Founder',
      imagePath: '/our-team/member-2.webp',
      href: 'https://www.linkedin.com/in/vivek-swaminathan-374891a6/'
    }
  ];

  const sections = [
    {
      title: 'OUR MISSION',
      quote: 'To provide superior quality products and services that customers recommend to family and friends, partners select Patriot for their customers and our employees are proud of the product they deliver.',
      model: mission,
      type: 'emoji'
    },
    {
      title: 'OUR VISION',
      quote: 'To be the most trusted and innovative leader in our industry, creating lasting value for all stakeholders through excellence, integrity, and sustainable growth.',
      model: vission,
      type: 'emoji'
    },
    {
      title: 'THE DUO',
      quote: 'A diverse group of passionate individuals united by a common purpose, driving innovation and excellence through collaboration, creativity, and unwavering commitment.',
      model: null,
      type: '3dcard'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      const startScroll = rect.top;
      const scrollRange = elementHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - startScroll) / scrollRange));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSectionTransform = (index) => {
    const sectionProgress = scrollProgress * sections.length;
    const sectionStart = index;
    const sectionEnd = index + 1;

    let sectionPos = 0;
    if (sectionProgress < sectionStart) {
      sectionPos = 1;
    } else if (sectionProgress > sectionEnd) {
      sectionPos = -1;
    } else {
      sectionPos = 1 - (sectionProgress - sectionStart);
    }

    const translateY = sectionPos * 100;
    const opacity = Math.max(0, 1 - Math.abs(sectionPos) * 1.2);
    const scale = Math.max(0.8, 1 - Math.abs(sectionPos) * 0.2);

    return { translateY, opacity, scale };
  };

  return (
    <div ref={containerRef} className='w-full min-h-[400vh] relative bg-black text-white'>
      <div className='sticky top-0 h-screen flex items-center justify-center overflow-hidden'>
        <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 relative'>
          {sections.map((section, index) => {
            const { translateY, opacity, scale } = getSectionTransform(index);

            return (
              <div
                key={index}
                className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8'
                style={{
                  opacity,
                  transform: `translateY(${translateY}%) scale(${scale})`,
                  transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
                  pointerEvents: opacity > 0.5 ? 'auto' : 'none'
                }}
              >
                {/* Quote */}
                <div
                  className='mb-4 sm:mb-6 md:mb-8 max-w-4xl px-2'
                  style={{
                    opacity: opacity * 0.8,
                    transform: `translateY(${translateY * 0.3}%)`
                  }}
                >
                  <p className='text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed italic'>
                    "{section.quote}"
                  </p>
                </div>

                {/* Title */}
                <h2
                  className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-12 tracking-wider ${
                    section.title === 'THE DUO' ? 'text-white' : 'text-blue-500'
                  }`}
                  style={{
                    textShadow: '0 4px 20px rgba(251, 191, 36, 0.3)'
                  }}
                >
                  {section.title}
                </h2>

                {/* 3D Model or Cards */}
                <div
                  className={`relative mb-4 sm:mb-6 md:mb-8 w-full ${
                    section.title === 'THE DUO' ? 'mt-0' : '-mt-12 sm:-mt-20 md:-mt-28'
                  }`}
                  style={{
                    transform: section.type === 'emoji'
                      ? `translateY(${translateY * 0.2}%) rotateY(${scrollProgress * 180}deg) rotateX(${Math.sin(scrollProgress * Math.PI * 4) * 10}deg)`
                      : 'none',
                    transformStyle: 'preserve-3d',
                    transition: section.type === 'emoji' ? 'transform 0.1s ease-out' : 'none'
                  }}
                >
                  {section.type === 'emoji' ? (
                    <>
                      <div className='flex justify-center items-center'>
                        <Image
                          src={section.model}
                          alt={section.title}
                          height={isMobile ? 120 : 200}
                          width={isMobile ? 120 : 200}
                          className="filter drop-shadow-2xl"
                        />
                      </div>

                      {/* Glow effect */}
                      <div
                        className='absolute inset-0 blur-3xl opacity-40'
                        style={{
                          background: `radial-gradient(circle, ${
                            index === 0 ? '#fbbf24' : index === 1 ? '#60a5fa' : '#f472b6'
                          } 0%, transparent 70%)`,
                          transform: 'translateZ(-50px)'
                        }}
                      />
                    </>
                  ) : (
                    /* Two Cards Side by Side */
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-xs sm:max-w-none mx-auto'>
                      {teamMembers.map((member, idx) => (
                        <TeamCard3D
                          key={idx}
                          firstName={member.firstName}
                          lastName={member.lastName}
                          title={member.title}
                          imagePath={member.imagePath}
                          href={member.href}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        {scrollProgress < 0.2 && (
          <div className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce'>
            <svg className='w-5 h-5 sm:w-6 sm:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
            </svg>
            <p className='text-xs mt-2'>Scroll</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OurMissionVisionTeam;

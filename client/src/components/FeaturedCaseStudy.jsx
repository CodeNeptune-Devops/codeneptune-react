'use client'

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function SectionTitle({ textColor, title, description }) {
  return (
    <div className="mb-4 sm:mb-8">
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 ${textColor}`}>{title}</h2>
      <p className={`text-base sm:text-lg ${textColor} opacity-80 hidden sm:block`}>{description}</p>
    </div>
  );
}

function FeaturedCaseStudy() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardsRef.current) return;

      const section = sectionRef.current;
      const cards = cardsRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;

      const scrollStart = sectionTop - window.innerHeight / 4;
      const scrollEnd = sectionTop + sectionHeight - window.innerHeight;

      if (scrollY >= scrollStart && scrollY <= scrollEnd) {
        const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      } else if (scrollY < scrollStart) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const caseStudies = [
    {
      logo: 'client-logo/logo-10.svg',
      title: 'Tolk2Go - Translation Made Simple',
      description: 'Tolk2Go enables human-powered translations for businesses, healthcare, and travelers, ensuring multilingual communication.',
      tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Nodejs', 'MongoDB'],
      location: 'Europe, Russia',
      platform: 'Web & Mobile',
      userServed: '500K+ Translations/month',
      industry: 'Language & Communication',
      bgImage: '/featured-case-study/bg-6.webp',
      mobBgImg:'/featured-case-study/bg-6-mob.webp'
    },
    {
      logo: 'client-logo/logo-3.svg',
      title: 'Getshifts Employee Management Software',
      description: 'Get Shifts is an employee scheduling software designed specifically to process information optimally and accelerate decision-making processes.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Reactjs', 'Nodejs', 'MongoDB'],
      location: 'United Kingdom',
      platform: 'Web & Mobile',
      userServed: '10K+ Agency',
      industry: 'Staffing Agency',
      bgImage: '/featured-case-study/bg-7.webp',
       mobBgImg:'/featured-case-study/bg-7-mob.webp'
    },
    {
      logo: 'client-logo/logo-4.svg',
      title: 'Hushh',
      description: 'A one of a kind social networking platform designed exclusively for fashion and fashion lovers.',
      tech: ['Machine Learning & AI', 'Redis', 'DevOps', 'Elastic Search'],
      location: 'USA',
      platform: 'Web & Mobile',
      userServed: '50K+ Downloads',
      industry: 'AI Based Personal Data Assistance',
      bgImage: '/featured-case-study/bg-3.webp',
       mobBgImg:'/featured-case-study/bg-3-mob.webp'
    },
  ];

  // Calculate scroll based on viewport size and card count
  const getCardWidth = () => {
    if (typeof window === 'undefined') return 80;
    if (window.innerWidth < 640) return 98; // sm - increased to 98
    if (window.innerWidth < 768) return 85; // md
    return 80; // lg+
  };
  
  const cardWidthPercent = getCardWidth();
  const gapPercent = typeof window !== 'undefined' && window.innerWidth < 640 ? 1.5 : 2;
  const maxScroll = (caseStudies.length - 1) * (cardWidthPercent + gapPercent);
  const horizontalOffset = scrollProgress * maxScroll;

  return (
    <div className="w-full bg-slate-950 pt-4 sm:pt-8 md:pt-10">
      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${250 + caseStudies.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden pb-8 sm:pb-14 md:pb-16">

          {/* Section Title */}
          <div className='max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-4 md:py-6'>
            <SectionTitle
              textColor='text-white'
              title='How We Build Intelligent Solutions'
              description='Every successful product begins with a clear vision. Our process is designed to understand your goals, refine your ideas, and deliver intelligent, scalable outcomes that align with your business objectives.'
            />
          </div>

          <div className="w-full h-full flex items-start pb-2 sm:pb-5 md:pb-6">
            {/* Horizontal scrolling cards */}
            <div className="w-full overflow-hidden px-2 sm:px-6 lg:px-8 pb-2 sm:pb-5">
              <div className="max-w-7xl mx-auto h-full">
                <div
                  ref={cardsRef}
                  className="hidden sm:flex gap-4 sm:gap-6 transition-transform duration-100 ease-out"
                  style={{
                    transform: `translateX(-${horizontalOffset}%)`,
                  }}
                >
                  {caseStudies.map((study, index) => (
                    <div
                      key={index}
                      className=" flex-shrink-0 w-[98%] sm:w-[85%] md:w-[80%] h-[85vh] sm:h-[65vh] md:h-[60vh] lg:h-[70vh] relative rounded-xl sm:rounded-2xl overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.2) 100%), url('${study.bgImage}')`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      {/* Content directly on background */}
                      <div className="absolute inset-0 p-4 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start max-w-2xl overflow-y-auto">
                        <div className='h-auto w-28 sm:w-36 md:w-40 mb-4 flex-shrink-0'>
                          <Image
                            src={study.logo}
                            alt={study.title}
                            height={200}
                            width={200}
                            className='w-full h-full'
                          />
                        </div>
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-3">{study.title}</h3>

                        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 leading-relaxed max-w-xl">
                          {study.description}
                        </p>

                        {/* Project info */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-4 mb-5 sm:mb-6 max-w-xl">
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Industry</p>
                            <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{study.industry}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Platform</p>
                            <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{study.platform}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Regions Covered</p>
                            <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{study.location}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Users Served</p>
                            <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{study.userServed}</p>
                          </div>
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 sm:gap-2.5 max-w-xl">
                          {study.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 sm:px-3 md:px-4 py-1.5 sm:py-1.5 md:py-2 rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium backdrop-blur-sm bg-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  ref={cardsRef}
                  className="flex sm:hidden gap-4 sm:gap-6 transition-transform duration-100 ease-out"
                  style={{
                    transform: `translateX(-${horizontalOffset}%)`,
                  }}
                >
                  {caseStudies.map((study, index) => (
                    <div
                      key={index}
                      className=" flex-shrink-0 w-[98%] sm:w-[85%] md:w-[80%] h-[85vh] sm:h-[65vh] md:h-[60vh] lg:h-[70vh] relative rounded-2xl sm:rounded-2xl overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.2) 100%), url('${study.bgImage}')`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      {/* Content directly on background */}
                      <div className="absolute inset-0 p-4 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start max-w-2xl overflow-y-auto">
                        <div className='h-auto w-28 sm:w-36 md:w-40 mb-4 flex-shrink-0'>
                          <Image
                            src={study.logo}
                            alt={study.title}
                            height={200}
                            width={200}
                            className='w-full h-full'
                          />
                        </div>
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-3">{study.title}</h3>

                        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 leading-relaxed max-w-xl">
                          {study.description}
                        </p>

                        {/* Project info */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-4 mb-5 sm:mb-6 max-w-xl">
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Industry</p>
                            <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{study.industry}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Platform</p>
                            <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{study.platform}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Regions Covered</p>
                            <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{study.location}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Users Served</p>
                            <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{study.userServed}</p>
                          </div>
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 sm:gap-2.5 max-w-xl">
                          {study.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 sm:px-3 md:px-4 py-1.5 sm:py-1.5 md:py-2 rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium backdrop-blur-sm bg-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCaseStudy;
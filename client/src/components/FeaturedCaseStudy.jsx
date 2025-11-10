'use client'

import React, { useEffect, useRef, useState } from 'react';

function SectionTitle({ textColor, title, description }) {
  return (
    <div className="mb-8">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>{title}</h2>
      <p className={`text-lg ${textColor} opacity-80`}>{description}</p>
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudies = [
    {
      title: 'Entrex',
      subtitle: 'CashiPe',
      description: 'A unified enterprise management platform that simplifies workflow automation, analytics, and communication for growing businesses.',
      tech: ['React','Node.js',' AWS','MongoDB'],
      location: 'India',
      duration: '2 Years+',
      industry: ' SaaS / Enterprise Solutions',
      features: [
        'Centralized Dashboard for Operations',
        'Role-Based Access Management',
        'Real-Time Analytics and Reporting',
        'Seamless Team Collaboration'
      ],
      bgImage: '/featured-case-study/bg-6.webp',
    },
    {
      title: 'EV Mobility',
      subtitle: 'EV Mobility',
      description: 'EV Mobility is a luxury amenity for apartments or office buildings',
      tech: ['AWS', 'PHP', 'DevOps', 'MongoDB'],
      location: 'USA',
      duration: '3 Years+',
      industry: 'EV care',
      features: [
        'Provides electric vehicles (Teslas) at upscale hotels',
        'Full vehicle access through EV Mobility mobile app',
        'EV Mobility Valet - Service for hassle-free vehicle pickup'
      ],
      bgImage: '/featured-case-study/bg-7.webp',
    },
    {
      title: 'FreshCart',
      subtitle: 'Grocery Delivery',
      description: 'Revolutionary grocery delivery platform with farm-to-table freshness guarantee and 30-minute delivery.',
      tech: ['React Native', 'Python', 'Redis', 'PostgreSQL'],
      location: 'UK',
      duration: '2 Years+',
      industry: 'E-Commerce',
      features: [
        'Real-time Inventory Management',
        'AI-powered Product Recommendations',
        'Subscription-based Delivery',
        'Farm Partnership Integration'
      ],
      bgImage: '/featured-case-study/bg-3.webp',
    },
  ];

  // Calculate scroll based on card width (80% + gap)
  const cardWidthPercent = 80; // This matches md:w-[80%]
  const gapPercent = 2; // Approximate gap as percentage
  const maxScroll = (caseStudies.length - 1) * (cardWidthPercent + gapPercent);
  const horizontalOffset = scrollProgress * maxScroll;

  return (
    <div className="w-full bg-slate-950 pt-8 sm:pt-12 md:pt-10">
      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${300 + caseStudies.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden pb-16">
          
          {/* Section Title */}
          <div className='max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
            <SectionTitle 
            textColor='text-white'
            title='How We Build Intelligent Solutions'
            description='Every successful product begins with a clear vision. Our process is designed to understand your goals, refine your ideas, and deliver intelligent, scalable outcomes that align with your business objectives.'
            />
          </div>

          <div className="w-full h-full flex items-start pb-6">
            {/* Horizontal scrolling cards */}
            <div className="w-full overflow-hidden h-[80%] px-4 sm:px-6 lg:px-8 pb-5">
              <div className="max-w-7xl mx-auto h-full">
                <div
                  ref={cardsRef}
                  className="flex gap-4 sm:gap-6 transition-transform duration-100 ease-out h-full"
                  style={{
                    transform: `translateX(-${horizontalOffset}%)`,
                  }}
                >
                  {caseStudies.map((study, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[90%] sm:w-[85%] md:w-[80%] h-full relative rounded-xl sm:rounded-2xl overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.2) 100%), url('${study.bgImage}')`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      {/* Content directly on background */}
                      <div className="absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center max-w-2xl">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">{study.title}</h3>
                        <p className="text-emerald-300 text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">{study.subtitle}</p>

                        <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl">
                          {study.description}
                        </p>

                        {/* Project info */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-xl">
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Location</p>
                            <p className="text-white font-semibold text-sm sm:text-base">{study.location}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Duration</p>
                            <p className="text-white font-semibold text-sm sm:text-base">{study.duration}</p>
                          </div>
                          <div>
                            <p className="text-white/60 text-xs sm:text-sm mb-1">Industry</p>
                            <p className="text-white font-semibold text-sm sm:text-base">{study.industry}</p>
                          </div>
                        </div>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 sm:gap-2.5 max-w-xl">
                          {study.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium backdrop-blur-sm bg-white/10"
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
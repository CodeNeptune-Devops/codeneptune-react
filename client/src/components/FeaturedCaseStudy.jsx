'use client'

import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from './titles/SectionTitle';

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
      bgImage: '/featured-case-study/bg-1.webp',
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
      bgImage: '/featured-case-study/bg-2.webp',
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

  const maxScroll = (caseStudies.length - 1) * 100;
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
                      className="flex-shrink-0 w-full h-full"
                    >
                      <div
                        className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden bg-cover bg-center"
                        style={{
                          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%), url('${study.bgImage}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        {/* Content Container */}
                        <div className="flex flex-col md:flex-row h-full">
                          {/* Left side - Text content */}
                          <div className="w-full md:w-[55%] lg:w-[50%] p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                            <div>
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{study.title}</h3>
                              <p className="text-emerald-300 text-base sm:text-lg mb-3 sm:mb-4">{study.subtitle}</p>

                              <p className="text-white/90 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                                {study.description}
                              </p>

                              {/* Tech stack */}
                             

                              {/* Project info */}
                              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <div>
                                  <p className="text-white/60 text-[10px] sm:text-xs mb-1">Location</p>
                                  <p className="text-white font-semibold text-xs sm:text-sm">{study.location}</p>
                                </div>
                                <div>
                                  <p className="text-white/60 text-[10px] sm:text-xs mb-1">Duration</p>
                                  <p className="text-white font-semibold text-xs sm:text-sm">{study.duration}</p>
                                </div>
                                <div>
                                  <p className="text-white/60 text-[10px] sm:text-xs mb-1">Industry</p>
                                  <p className="text-white font-semibold text-xs sm:text-sm">{study.industry}</p>
                                </div>
                              </div>

                               <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                {study.tech.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/30 text-white text-[10px] sm:text-xs font-medium backdrop-blur-sm bg-white/5"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            

                            {/* Features */}
                            {/* <div className="space-y-1.5 sm:space-y-2">
                              {study.features.map((feature, i) => (
                                <div
                                  key={i}
                                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
                                >
                                  <p className="text-white text-[10px] sm:text-xs">{feature}</p>
                                </div>
                              ))}
                            </div> */}
                          </div>

                          {/* Right side - Image area (visible on larger screens) */}
                          <div className="hidden md:block md:w-[45%] lg:w-[50%]">
                            {/* Background image shows through here */}
                          </div>
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
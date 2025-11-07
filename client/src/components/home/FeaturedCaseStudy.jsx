'use client'


import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../titles/SectionTitle';
import bg1 from '../../assets/featured-case-study/bg-1.webp';

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
      phoneScreen: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80'
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
      phoneScreen: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80'
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
      phoneScreen: 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=400&q=80'
    },

  ];

  const maxScroll = (caseStudies.length - 1) * 100;
  const horizontalOffset = scrollProgress * maxScroll;

  return (
    <div className="w-full bg-slate-950 pt-16">
      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${300 + caseStudies.length * 100}vh` }}
      >


        <div className="sticky top-0 h-screen overflow-hidden">

          <div className='max-w-7xl mx-auto w-full '>
            <SectionTitle textColor='text-white' />

          </div>
          <div className="max-w-7xl mx-auto w-full h-full flex items-start pb-6  ">


            {/* Horizontal scrolling cards - Centered */}
            <div className="w-full max-w-7xl overflow-hidden h-[80%]">
              <div
                ref={cardsRef}
                className="flex gap-6 transition-transform duration-100 ease-out h-full"
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
                      className="relative h-full rounded-2xl overflow-hidden bg-cover bg-center"
                      style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%), url('${study.bgImage}')`
                      }}
                    >
                      {/* Content Container */}
                      <div className="flex h-full">
                        {/* Left side - Text content */}
                        <div className="w-[55%] p-8 flex flex-col justify-between">
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{study.title}</h3>
                            <p className="text-emerald-300 text-lg mb-4">{study.subtitle}</p>

                            <p className="text-white/90 text-sm mb-6 leading-relaxed">
                              {study.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {study.tech.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1.5 rounded-full border border-white/30 text-white text-xs font-medium backdrop-blur-sm bg-white/5"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Project info */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                              <div>
                                <p className="text-white/60 text-xs mb-1">Location</p>
                                <p className="text-white font-semibold text-sm">{study.location}</p>
                              </div>
                              <div>
                                <p className="text-white/60 text-xs mb-1">Duration</p>
                                <p className="text-white font-semibold text-sm">{study.duration}</p>
                              </div>
                              <div>
                                <p className="text-white/60 text-xs mb-1">Industry</p>
                                <p className="text-white font-semibold text-sm">{study.industry}</p>
                              </div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="space-y-2">
                            {study.features.map((feature, i) => (
                              <div
                                key={i}
                                className="px-4 py-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
                              >
                                <p className="text-white text-xs">{feature}</p>
                              </div>
                            ))}
                          </div>
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
  );
}

export default FeaturedCaseStudy;
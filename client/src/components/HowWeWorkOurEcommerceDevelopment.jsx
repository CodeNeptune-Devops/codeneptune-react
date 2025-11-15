'use client'

import React, { useState, useEffect } from 'react';
import { Search, Target, Package, TestTube, Rocket, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

function SectionTitle({ textColor, title, description }) {
  return (
    <div className="mb-8">
      <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>{title}</h2>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
  );
}

function HowWeWorkOurEcommerceDevelopment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const processes = [
    {
      number: "1",
      icon: <Search className="w-8 h-8" />,
      title: "Discovery & Strategy",
      description: "We begin by understanding your business, audience, and market to lay the foundation for a successful eCommerce solution.",
      points: [
        "Conduct detailed consultations to define business goals and user needs",
        "Analyze competitors to identify market opportunities",
        "Select the appropriate technology stack and platform",
        "Outline project scope, timelines, and milestones"
      ],
      outcome: "A clear project roadmap and strategic direction tailored to your business objectives"
    },
    {
      number: "2",
      icon: <Target className="w-8 h-8" />,
      title: "UI/UX Design & Prototyping",
      description: "We translate strategy into engaging, intuitive design that aligns with your brand and optimizes user experience.",
      points: [
        "Develop wireframes and design key user flows",
        "Create responsive and mobile-friendly UI designs",
        "Build interactive prototypes for feedback and iteration",
        "Refine designs based on usability insights and stakeholder input"
      ],
      outcome: "A user-focused interface that increases engagement and enhances the shopping experience"
    },
    {
      number: "3",
      icon: <Package className="w-8 h-8" />,
      title: "Development & Integration",
      description: "Once the design is approved, we move into development to bring your eCommerce platform to life.",
      points: [
        "Code frontend and backend using modern frameworks",
        "Integrate secure payment gateways and third-party APIs",
        "Ensure SEO-friendly development and mobile optimization",
        "Configure backend systems for inventory, orders, and user management"
      ],
      outcome: "A fully functional, reliable eCommerce platform ready for real-world use"
    },
    {
      number: "4",
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing & Quality Assurance",
      description: "Before going live, we thoroughly test the platform to ensure it is robust, secure, and error-free.",
      points: [
        "Perform functionality, performance, and load testing",
        "Test across devices, browsers, and screen sizes",
        "Conduct security reviews and compliance checks",
        "Fix bugs and refine UX based on test results"
      ],
      outcome: "A high-quality, stable eCommerce site ready for launch"
    },
    {
      number: "5",
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch and Deployment",
      description: "We ensure a smooth and well-coordinated go-live process for your new eCommerce platform.",
      points: [
        "Deploy the application to the live environment",
        "Configure hosting, domain, SSL, and performance tools",
        "Monitor system behavior during the initial rollout",
        "Provide launch-day support and oversight"
      ],
      outcome: "A professional, timely launch that ensures stability and reliability"
    },
    {
      number: "6",
      icon: <Headphones className="w-8 h-8" />,
      title: "Ongoing Support and Maintenance",
      description: "After launch, we provide continuous support to ensure long-term performance and growth.",
      points: [
        "Monitor application performance and uptime",
        "Provide regular updates, security patches, and backups",
        "Offer support for new feature implementation",
        "Assist with marketing and analytics tools integration"
      ],
      outcome: "Reliable post-launch support that keeps your platform secure, updated, and aligned with business goals"
    }
  ];

  const maxIndex = processes.length - cardsPerView;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const getTranslatePercentage = () => {
    return (currentIndex * 100) / cardsPerView;
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle
            textColor='text-white'
            title='How We Work: Our Ecommerce Development Process'
            description='From Idea to Execution – A Streamlined Approach for Success'
          />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${getTranslatePercentage()}%)`
              }}
            >
              {processes.map((process, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-6">
                      <div className='flex w-full items-center gap-3'>
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-14 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg">
                          {process.icon}
                        </div>
                        <h3 className="text-xl w-full font-bold text-white mb-3">
                          {process.number}. {process.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {process.description}
                      </p>
                    </div>

                    {/* Points */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {process.points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-blue-400 mr-3 mt-1 flex-shrink-0">◆</span>
                          <span className="leading-relaxed text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Outcome */}
                    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 mt-auto border border-gray-600">
                      <h4 className="text-lg font-bold text-white mb-2">Outcome</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {process.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWorkOurEcommerceDevelopment;
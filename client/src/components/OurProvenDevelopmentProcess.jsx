import React from 'react';
import SectionTitle from './titles/SectionTitle';

function OurProvenDevelopmentProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business, goals, and audience. This ensures we're fully aligned on your vision and strategy.",
      bgColor: "bg-slate-700"
    },
    {
      number: "02",
      title: "Wireframe & Design",
      description: "Next, we create wireframes and design mockups that bring your ideas to life. You'll review and approve before we move forward.",
      bgColor: "bg-blue-600"
    },
    {
      number: "03",
      title: "Development",
      description: "Our team builds your site's functionality, integrating all the necessary features to deliver an exceptional user experience.",
      bgColor: "bg-emerald-500"
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "We rigorously test your site across multiple devices and browsers to ensure everything works flawlessly before launch.",
      bgColor: "bg-amber-400"
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "Once everything is polished, we launch your site and provide ongoing support to ensure smooth operation and growth.",
      bgColor: "bg-slate-800"
    }
  ];

  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-10">
          <SectionTitle 
          title=' Our Proven 5-Step Development Process'
          description=' Building your dream website is faster and easier than you might think. Our proven 5-step process takes your site from concept to launch seamlessly, without the stress.'
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`${step.bgColor} text-white rounded-2xl p-6 sm:p-8 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl`}
            >
              {/* Number */}
              <div className="text-5xl sm:text-6xl font-bold mb-4 opacity-90">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-md leading-relaxed opacity-95">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer">
            READY TO GET STARTED?
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-base sm:text-md text-gray-700">
            Let's Build Your Website Together. Fill out the{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold underline">
              contact form
            </a>
            {' '}and let's bring your vision to life today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurProvenDevelopmentProcess;
import React from 'react';
import { Briefcase, ShoppingCart, FileText, Zap, Code } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function WhatWeBuild({isOpen}) {
  const reasons = [
    {
      icon: Briefcase,
      title: "Business Websites",
      description: "For service providers, startups, local shops, and personal brands — websites that build trust and convert leads."
    },
    {
      icon: ShoppingCart,
      title: "eCommerce Stores",
      description: "From small shops to full-featured product catalogs — we create online stores that are simple to manage and built to sell."
    },
    {
      icon: FileText,
      title: "Landing Pages",
      description: "Targeted pages for ad campaigns, lead generation, or single product/service highlights."
    },
    {
      icon: Zap,
      title: "Redesign & Speed Optimization",
      description: "Already have a website but it's slow, clunky, or outdated? We help you modernize and improve performance.",
      fullWidth: true
    },
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Dashboards, portals, LMS platforms — for when you need something beyond the basics.",
      fullWidth: true
    }
  ];
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle
            textColor='text-white'
            descriptionColor='text-white'
            title='Why Choose Code Neptune'
            description='Product design partners built for speed, scale and real-world business impact.'
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12 max-w-6xl mx-auto">
          {/* Row 1 - 3 equal cards */}
          {reasons.slice(0, 3).map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 col-span-3 md:col-span-2"
              >
                {/* Icon with Gradient Background */}
                <div className="mb-6 flex justify-center">
                  <div className={` rounded-2xl  flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                    <Icon className="w-10 h-10 text-white transition-colors duration-300" />

                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {reason.title}
                </h3>
                <p className="text-purple-200 leading-relaxed text-center text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}

          {/* Row 2 - 2 larger cards */}
          {reasons.slice(3, 5).map((reason, index) => {
            const Icon = reason.icon;
            const actualIndex = index + 3;
            return (
              <div
                key={actualIndex}
                className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 md:col-span-1 lg:col-span-2"
                style={{ gridColumn: index === 0 ? 'span 3' : 'span 3' }}
              >
                {/* Icon with Gradient Background */}
                <div className="mb-6 flex justify-center">
                  <div className={`rounded-2xl  flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                    <Icon className="w-10 h-10 text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {reason.title}
                </h3>
                <p className="text-purple-200 leading-relaxed text-center text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button onClick={isOpen} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 cursor-pointer rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Get a Free Quote →
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatWeBuild;
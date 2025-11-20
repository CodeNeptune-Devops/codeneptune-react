import React from 'react';
import { Shield, Tag, Smartphone, Target } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function YourWebsiteIsABusinessAsset() {
  const features = [
  {
    icon: Shield,
    title: "Builds Instant Trust",
    description: "A clean and modern website design helps establish credibility and trust from the first visit."
  },
  {
    icon: Tag,
    title: "Boosts Conversions",
    description: "Thoughtful layouts and calls-to-action guide users to make decisions."
  },
  {
    icon: Smartphone,
    title: "Optimized for All Devices",
    description: "Our mobile-first development ensures perfect viewing across smartphones, tablets, and desktops."
  },
  {
    icon: Target,
    title: "Search Engine Friendly",
    description: "Structured for visibility, your website performs better on search engines and attracts relevant traffic."
  }
];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-10">
          <SectionTitle 
          textColor='text-white'
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-start text-start p-6 rounded-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 p-4 bg-blue-600 rounded-full">
                <feature.icon className="w-8 h-8 " strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-md text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourWebsiteIsABusinessAsset;
import React from 'react';
import { Shield, Tag, Smartphone, Target } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function WhyYourWebsite() {
  const features = [
    {
      icon: Shield,
      title: "Builds Instant Brand Trust",
      description: "A polished, professional website sets the tone and builds credibility from the very first click."
    },
    {
      icon: Tag,
      title: "Drives More Conversions",
      description: "Seamless design and navigation guide users naturally toward taking action."
    },
    {
      icon: Smartphone,
      title: "Expands Mobile Reach",
      description: "A mobile-first experience ensures your site works flawlessly across all devices."
    },
    {
      icon: Target,
      title: "Increases Organic Visibility",
      description: "SEO-friendly structure helps your site rank higher and attract quality traffic."
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

export default WhyYourWebsite;
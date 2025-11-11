import React from 'react';
import { Globe, DollarSign, Smartphone, User } from "lucide-react";
import img1 from '../../assets/mobile-app-development/why-client-choose-us.webp'
import Image from 'next/image';

function WhyClientChooseUs() {
  const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Quick Turnaround",
    description: "Most websites are completed within 7–14 working days.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Affordable & Transparent",
    description:
      "We work with startups and small teams — so we keep pricing clear, fair, and scalable.",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile & SEO-Ready by Default",
    description:
      "Every site we deliver is fast-loading, mobile-responsive, and optimized for search from Day One.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Human Communication",
    description:
      "No bots, no vague emails. You’ll get real replies from real people — fast.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10 text-black">
        <div className='space-y-2'>
          <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
           Why clients choose us
          </p>
          <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6">
           Why Businesses Love Working with Code Neptune
          </h3>
        </div>
        <div className="flex items-center">
          <p className="text-base md:text-lg leading-relaxed">
           We’re not just developers. We’re collaborators. Clients work with us because we keep things simple, move fast, and genuinely care about the outcome.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  {/* Icon */}
                  <div className={`${feature.bgColor} ${feature.iconColor} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative   order-first lg:order-last">
            <div className="sticky top-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-600 to-teal-800 aspect-square lg:aspect-auto lg:h-[400px]">
                {/* Placeholder for image - Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
                  <Image 
                  src={img1}
                  alt='Why Client Choose Us'
                  height={300}
                  width={300}
                  className='h-full w-full object-cover'
                  />
                </div>

                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyClientChooseUs;
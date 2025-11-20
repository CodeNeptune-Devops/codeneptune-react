import React from 'react';
import { Globe, DollarSign, MessageSquare, Users } from 'lucide-react';
import img1 from '../../assets/mobile-app-development/why-client-choose-us.webp'
import Image from 'next/image';

function WhyClientChooseUs() {
 const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Experience",
    description:
      "We have helped startups, agencies, and established enterprises with scalable, secure, and SEO-friendly websites.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Expertise",
    description:
      "Our team consists of senior developers, UI/UX experts, SEO specialists, and digital strategists who understand your business.",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Authority",
    description:
      "With a portfolio of successful launches and partnerships across industries, we have proven our ability to deliver results.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Trust",
    description:
      "We build long-term relationships with our clients through transparency, support, and consistently delivered outcomes.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];


  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10 text-black">
        <div className='space-y-2'>
          <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
            Why Choose Us
          </p>
          <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6">
            Why MVP is the Smart Choice
          </h3>
        </div>
        <div className="flex items-center">
          <p className="text-base md:text-lg leading-relaxed">
            An MVP (Minimum Viable Product) is the first version of your mobile app that includes
            only the core features needed to solve a real problem. It helps you test your idea with
            users, get feedback, and make smart updates, before investing in full development.
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
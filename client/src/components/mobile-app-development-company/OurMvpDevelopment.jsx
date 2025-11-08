import React from 'react';
import { Globe, DollarSign, Code, Users } from 'lucide-react';

function OurMvpDevelopment() {
  const processes = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Idea & Goal Discovery",
      description: "We work closely with you to understand your app goals and define the essential features.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Planning & Strategy",
      description: "Our experts create a clear MVP roadmap that aligns with your business needs.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Agile Development",
      description: "We build and test your MVP fast, using the best tools and frameworks.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Post-Launch Support",
      description: "Once your MVP is live, we help you improve it based on user feedback.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10 text-black">
        <div className='space-y-2'>

          <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6">
            Our MVP Development Process
          </h3>
        </div>
        <div className="flex items-center">
          <p className="text-base md:text-lg leading-relaxed">
            As a trusted mobile app development company, we help start-ups and businesses
            take this crucial first step with confidence.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image Section */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden   aspect-[4/3] lg:h-[400px]">
              {/* Placeholder for image - Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-gray-800 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-5xl font-bold mb-4">code neptune</div>
                  <div className="text-xl opacity-80 mb-8">Team Collaboration</div>
                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm">IDEA</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm">STRATEGY</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm">FEEDBACK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-8">

            {/* Process Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {processes.map((process, index) => (
                <div key={index} className="space-y-3">
                  {/* Icon */}
                  <div className={`${process.bgColor} ${process.iconColor} w-14 h-14 rounded-2xl flex items-center justify-center`}>
                    {process.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {process.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMvpDevelopment;
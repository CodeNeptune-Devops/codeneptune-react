import React from 'react';
import { Globe, DollarSign, MessageSquare, Users } from 'lucide-react';

function WhyClientChooseUs() {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Faster Launch",
      description: "Bring your app idea to life quickly and start learning from real users.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost-Effective",
      description: "Save budget by building only what's necessary to test your idea.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Real Market Feedback",
      description: "See how users respond and make changes based on real data.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lower Risk",
      description: "Know what works (and what doesn't) before scaling.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Header Badge */}
            <div className="inline-block">
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-6 py-2 rounded-full">
                WHY CLIENTS CHOOSE US
              </span>
            </div>

            {/* Main Heading */}
            <h3 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why MVP is the Smart Choice
            </h3>

            {/* Description */}
            <p className="text-md text-gray-600 leading-relaxed">
              An MVP (Minimum Viable Product) is the first version of your mobile app that includes 
              only the core features needed to solve a real problem. It helps you test your idea with 
              users, get feedback, and make smart updates, before investing in full development.
            </p>

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
          <div className="relative lg:h-full min-h-[400px] order-first lg:order-last">
            <div className="sticky top-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-600 to-teal-800 aspect-[4/3] lg:aspect-auto lg:h-[600px]">
                {/* Placeholder for image - Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl font-bold mb-4">code neptune</div>
                    <div className="text-2xl opacity-80">Developer Workspace</div>
                  </div>
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
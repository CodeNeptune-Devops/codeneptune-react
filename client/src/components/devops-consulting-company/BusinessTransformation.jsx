import React from 'react';
import { Rocket, Headphones, Grid3x3 } from 'lucide-react';

function BusinessTransformation() {
  const features = [
    {
      icon: Rocket,
      title: "Designed for Growth and Agility",
      description: "Our DevOps consulting approach ensures faster deployments, unified environments, and cost optimization. We blend technical expertise with business objectives to craft customized solutions that enhance operational efficiency and foster innovation. From assessment to continuous improvement, we align DevOps practices with your strategic vision and drive measurable growth. Our focus on quick wins and visible ROI diminishes uncertainty and ensures lasting business value.",
      bgColor: "bg-cyan-400/20",
      iconColor: "text-blue-500"
    },
    {
      icon: Headphones,
      title: "Agile and Transparent Consulting Process",
      description: "We embed speed, adaptability, and transparency into our DevOps consulting process. Leveraging agile principles and continuous feedback, we deliver iterative improvements with clear milestones and metrics. Our structured yet flexible methodology maximizes risks, ensures stakeholder, and maintains open communication throughout deployment cycles. Significantly compared to traditional operations, we help businesses gain a competitive advantage in dynamic markets.",
      bgColor: "bg-cyan-400/20",
      iconColor: "text-blue-500"
    },
    {
      icon: Grid3x3,
      title: "Optimization Driven DevOps Flows",
      description: "We transform DevOps pipelines into engines of growth and resilience. Through strategic automation, continuous monitoring, and data-driven insights, we ensure every component—from code commits to production releases. Our consulting methodology prioritizes efficiency at every stage, fostering streamlined workflows, reducing friction, and robust infrastructure designed for long-term scalability and operational excellence.",
      bgColor: "bg-cyan-400/20",
      iconColor: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Business Transformation Through Expert DevOps Consulting
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-5xl mx-auto leading-relaxed">
            Accelerating growth with strategic DevOps consulting for sustainable success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={` backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/20 transition-all duration-300`}>
                      <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-blue-500 mb-4 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BusinessTransformation;
import React from 'react';
import { Rocket, Headphones, Grid3x3 } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function BusinessTransformation() {
  const features = [
    {
      icon: Rocket,
      title: "Designed for Growth and Agility",
      description: "Our DevOps consulting approach ensures faster deployments, unified environments, and cost optimization. We blend technical expertise with business objectives to craft customized solutions that enhance operational efficiency and foster innovation. From assessment to continuous improvement, we align DevOps practices with your strategic vision and drive measurable growth. Our focus on quick wins and visible ROI diminishes uncertainty and ensures lasting business value.",
      bgColor: "bg-cyan-400/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: Headphones,
      title: "Agile and Transparent Consulting Process",
      description: "We embed speed, adaptability, and transparency into our DevOps consulting process. Leveraging agile principles and continuous feedback, we deliver iterative improvements with clear milestones and metrics. Our structured yet flexible methodology maximizes risks, ensures stakeholder, and maintains open communication throughout deployment cycles. Significantly compared to traditional operations, we help businesses gain a competitive advantage in dynamic markets.",
      bgColor: "bg-cyan-400/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: Grid3x3,
      title: "Optimization Driven DevOps Flows",
      description: "We transform DevOps pipelines into engines of growth and resilience. Through strategic automation, continuous monitoring, and data-driven insights, we ensure every component—from code commits to production releases. Our consulting methodology prioritizes efficiency at every stage, fostering streamlined workflows, reducing friction, and robust infrastructure designed for long-term scalability and operational excellence.",
      bgColor: "bg-cyan-400/20",
      iconColor: "text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <SectionTitle 
          textColor='text-white'
          descriptionColor='text-white'
          title='Business Transformation Through Expert DevOps Consulting'
          description='Accelerating growth with strategic DevOps consulting for sustainable success.'
          />
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
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`${feature.bgColor} backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/20 group-hover:border-blue-400/40 transition-all duration-300 group-hover:scale-110`}>
                      <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
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
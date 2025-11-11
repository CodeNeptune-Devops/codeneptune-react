import React from 'react';
import { Zap, Shield, TrendingUp, Clock } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function WhyChooseOurDevopsConsultingSolutions() {
  const benefits = [
    {
      icon: Clock,
      title: "Accelerated Time-to-Market",
      description: "As a leading DevOps consulting company with a proven track record, we streamline development and deployment pipelines for rapid releases and faster market entry. Our approach delivers an unmatched competitive advantage by significantly reducing time-to-market.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "We optimize infrastructure and workflows to eliminate bottlenecks, reduce manual efforts, and boost resource utilization. Through strategic adoption of Infrastructure as Code (IaC), CI/CD pipelines, and containerization, our DevOps consulting expertise ensures operational excellence across your software lifecycle.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enhanced Reliability & Security",
      description: "Our DevOps consulting company based in Chennai integrates robust security and compliance measures, making your systems stable, secure, and compliant with regulations. By embedding DevSecOps from the ground up, we protect against vulnerabilities, safeguard data, and deliver secure innovation at speed.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Higher Business Agility",
      description: "We empower businesses to adapt quickly to market shifts and seize new opportunities. Our DevOps consulting services facilitate growth through continuous delivery, automated workflows, and adaptive processes, enabling resilience and responsiveness in a dynamic business environment.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm font-medium">DevOps Excellence</span>
          </div>

          <SectionTitle 
          textColor='text-white'
          descriptionColor='text-white'
          title='Why Choose Our DevOps Consulting'
          description="We deliver high-performing DevOps strategies that combine automation, speed, and collaboration to accelerate product development, enhance efficiency, and ensure security across the entire software lifecycle."
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                {/* Gradient overlay on hover */}
              
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 relative">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed relative">
                  {benefit.description}
                </p>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${benefit.gradient} opacity-10 blur-2xl rounded-full`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"></div>
          <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build a DevOps Strategy That Scales Your Business?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Get Your Free DevOps Audit
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 cursor-pointer">
              <span className="relative z-10">CONTACT US</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseOurDevopsConsultingSolutions;
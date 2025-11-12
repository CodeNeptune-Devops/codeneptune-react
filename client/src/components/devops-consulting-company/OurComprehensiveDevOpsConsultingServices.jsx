'use client'

import React, { useState } from 'react';
import SectionTitle from '../titles/SectionTitle';
import Image from 'next/image';

const servicesData = [
  {
    id: 1,
    title: 'Custom DevOps Strategy & Implementation',
    icon: '/devops-development/img1.svg',
    description: 'We design tailored strategies that align with your business goals. From assessment to implementation, we ensure faster cycles, cost efficiency, and improved collaboration.'
  },
  {
    id: 2,
    title: 'CI/CD Pipeline Automation',
   icon: '/devops-development/img2.svg',
    description: 'Streamline your development workflow with automated continuous integration and deployment pipelines. Reduce manual errors, accelerate releases, and maintain consistent quality across all environments.'
  },
  {
    id: 3,
    title: 'Cloud Infrastructure & Management',
   icon: '/devops-development/img3.svg',
    description: 'Optimize your cloud resources with scalable infrastructure solutions. We help you architect, deploy, and manage cloud environments that grow with your business needs.'
  },
  {
    id: 4,
    title: 'DevOps Toolchain Integration',
    icon: '/devops-development/img4.svg',
    description: 'Seamlessly integrate best-in-class DevOps tools to create a unified workflow. From version control to monitoring, we connect your entire software delivery pipeline.'
  },
  {
    id: 5,
    title: 'DevSecOps for Enhanced Security',
    icon: '/devops-development/img5.svg',
    description: 'Build security into every stage of your development process. We implement automated security testing, compliance monitoring, and vulnerability management to protect your applications.'
  },
  {
    id: 6,
    title: 'Docker & Kubernetes',
    icon: '/devops-development/img6.svg',
    description: 'Containerize your applications and orchestrate them at scale. We implement Docker and Kubernetes solutions for consistent deployment across any environment.'
  },
  {
    id: 7,
    title: 'Infrastructure as Code Solutions',
   icon: '/devops-development/img7.svg',
    description: 'Manage your infrastructure through code for reproducible, version-controlled deployments. Reduce configuration drift and accelerate infrastructure provisioning.'
  },
  {
    id: 8,
    title: 'Continuous Monitoring & Logging',
    icon: '/devops-development/img8.svg',
    description: 'Gain real-time visibility into your systems with comprehensive monitoring and logging solutions. Identify issues before they impact users and optimize performance continuously.'
  },
  {
    id: 9,
    title: 'Multi-Cloud & Hybrid Cloud Strategy',
    icon: '/devops-development/img9.svg',
    description: 'Navigate complex multi-cloud environments with strategic guidance. We help you leverage multiple cloud providers while maintaining flexibility and avoiding vendor lock-in.'
  }
];

function OurComprehensiveDevOpsConsultingServices() {
  const [activeTab, setActiveTab] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const visibleServices = 5;
  const maxScroll = Math.max(0, servicesData.length - visibleServices);
  
  const handleScroll = (direction) => {
    if (direction === 'up' && scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
    } else if (direction === 'down' && scrollPosition < maxScroll) {
      setScrollPosition(scrollPosition + 1);
    }
  };
  
  const handleTabClick = (id) => {
    setIsTransitioning(true);
    setActiveTab(id);
    setTimeout(() => setIsTransitioning(false), 300);
  };
  
  const visibleItems = servicesData.slice(scrollPosition, scrollPosition + visibleServices);
  
  const activeService = servicesData.find(service => service.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle 
          title='Our Comprehensive DevOps Consulting Services'
          description='Our DevOps consultant professionals design business-focused solutions that maximize automation, improve scalability, and deliver measurable results. As an experienced DevOps consulting company, we offer a full spectrum of services that streamline workflows, enhance scalability, and ensure robust security across your software delivery lifecycle.'
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Tabs */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Scroll Up Button */}
              {scrollPosition > 0 && (
                <button
                  onClick={() => handleScroll('up')}
                  className="w-full py-3 bg-white text-blue-600 hover:bg-blue-100 border border-blue-300 rounded-t-lg transition-all duration-300 flex items-center justify-center  cursor-pointer"
                >
                  <span className="text-xl transition-transform duration-300 hover:-translate-y-1">↑</span>
                </button>
              )}
              
              {/* Tabs */}
              <div className="divide-y divide-gray-200">
                {visibleItems.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(service.id)}
                    style={{
                      transitionDelay: `${index * 50}ms`
                    }}
                    className={`w-full text-left px-6 py-5 transition-all duration-500 ease-in-out transform cursor-pointer ${
                      activeTab === service.id
                        ? 'bg-blue-600 text-white scale-105'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:scale-102'
                    }`}
                  >
                    <span className="text-md font-semibold">{service.title}</span>
                  </button>
                ))}
              </div>
              
              {/* Scroll Down Button */}
              {scrollPosition < maxScroll && (
                <button
                  onClick={() => handleScroll('down')}
                  className="w-full py-3 bg-white text-blue-600 hover:bg-blue-100 border border-blue-300 rounded-b-lg transition-all duration-300 flex items-center justify-center  cursor-pointer"
                >
                  <span className="text-xl">↓</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-black text-white rounded-lg shadow-lg p-10 min-h-96 relative overflow-hidden">
              {/* Animated Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 animate-pulse"></div>
              
              <div className={`relative z-10 transition-all duration-500 ease-out ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                <div className="mb-6 transform transition-all duration-700 ease-out">
                  <span className="text-6xl inline-block hover:scale-110 transition-transform duration-300">
                   <Image 
                   src={activeService.icon}
                   alt={activeService.title}
                   height={50}
                   width={50}
                   />
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-6 transition-all duration-500">
                  {activeService.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 transition-all duration-500">
                  {activeService.description}
                </p>
                <button className="px-6 py-3 cursor-pointer border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-500 font-semibold transform hover:scale-105 hover:shadow-xl">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h2 className="text-xl md:text-3xl font-medium text-gray-900 mb-4">
            Let's Build Your DevOps Future Together
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Design tailored strategies that align with your business goals. From assessment to implementation, we ensure faster cycles, cost efficiency, and improved collaboration.
          </p>
          <button className="px-6 py-3 cursor-pointer bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurComprehensiveDevOpsConsultingServices;
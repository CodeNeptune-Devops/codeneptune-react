'use client'

import React, { useState, useEffect } from 'react';
import { TrendingUp, FileText, Zap, Layers, Gauge, Rocket } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function OurDevopsConsultingProcess() {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const processes = [
    {
      id: 0,
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Strategy and Current State Mapping',
      buttonText: 'Strategy and Current State Mapping',
      description: 'We begin with in-depth discovery workshops, meticulously analyzing your business objectives and current infrastructure. This crucial stage allows our DevOps consultant to craft a precise DevOps roadmap and strategy that aligns with your goals and sets the foundation for operational excellence.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: 1,
      icon: <FileText className="w-8 h-8" />,
      title: 'Blueprint and Automation Design',
      buttonText: 'Blueprint and Automation Design',
      description: 'Our team designs comprehensive automation blueprints that outline CI/CD pipelines, infrastructure as code, and deployment strategies. We create detailed architectural diagrams and documentation that serve as the foundation for your DevOps transformation.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      icon: <Zap className="w-8 h-8" />,
      title: 'Agile Implementation of DevOps Practices',
      buttonText: 'Agile Implementation of DevOps Practices',
      description: 'We implement DevOps practices using agile methodologies, ensuring rapid iterations and continuous feedback. Our approach includes setting up automated testing, continuous integration, and deployment pipelines that accelerate your development cycle.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      icon: <Layers className="w-8 h-8" />,
      title: 'Integration and Advanced Features',
      buttonText: 'Integration and Advanced Features',
      description: 'We integrate advanced monitoring, logging, and security features into your DevOps pipeline. This includes implementing observability tools, automated security scanning, and compliance checks to ensure your systems are robust and secure.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      icon: <Gauge className="w-8 h-8" />,
      title: 'Multi-Layer Testing and Performance Optimization',
      buttonText: 'Multi-Layer Testing and Performance Optimization',
      description: 'Our comprehensive testing strategy includes unit, integration, and performance testing at every layer. We optimize your infrastructure for maximum efficiency, ensuring fast deployments and reliable system performance under any load.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      icon: <Rocket className="w-8 h-8" />,
      title: 'Launch and Continuous Improvement',
      buttonText: 'Launch and Continuous Improvement',
      description: 'We manage the production launch and provide ongoing support to continuously improve your DevOps processes. Our team monitors metrics, gathers feedback, and implements optimizations to ensure your systems evolve with your business needs.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
    }
  ];

  return (
    <div className='w-full py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-8'>
          
          <SectionTitle 
          title=' Our DevOps Consulting Process'
          description=' We follow a strategy-led, agile methodology that ensures your DevOps consulting implementation is not just functional but highly efficient, scalable, and business-ready from day one.'
          />
        </div>

        {/* Tab Buttons */}
        <div className='mb-8 -mx-4 sm:mx-0'>
          <div className='overflow-x-auto px-4 sm:px-0 scrollbar-hide'>
            <div className='flex sm:flex-wrap sm:justify-center gap-3 min-w-max sm:min-w-0'>
              {processes.map((process) => (
                <button
                  key={process.id}
                  onClick={() => setActiveTab(process.id)}
                  className={`px-6 py-3 rounded-lg text-xs sm:text-md font-medium transition-all duration-300 border-2 whitespace-nowrap cursor-pointer ${
                    activeTab === process.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  {process.buttonText}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Image */}
          <div className='order-2 lg:order-1'>
            <div 
              className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out ${
                fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <img
                src={processes[activeTab].image}
                alt={processes[activeTab].title}
                className='w-full h-[200px] lg:h-[300px] object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
            </div>
          </div>

          {/* Text Content */}
          <div className='order-1 lg:order-2'>
            <div 
              className={`transition-all duration-1000 ease-out ${
                fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <div className='bg-white p-2 rounded-2xl inline-block mb-6'>
                <div className='text-gray-900'>
                  {processes[activeTab].icon}
                </div>
              </div>
              <h3 className='text-3xl sm:text-4xl font-bold text-blue-600 mb-6'>
                {processes[activeTab].title}
              </h3>
              <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
                {processes[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurDevopsConsultingProcess;
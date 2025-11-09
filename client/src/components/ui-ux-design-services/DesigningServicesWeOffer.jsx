import React from 'react';
import { Figma, Smile, Layers, Eye, MapPin, GitBranch, ArrowRight } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function DesigningServicesWeOffer() {
  const services = [
    {
      icon: Figma,
      title: 'UI Design Services',
      description: 'We create visually polished, conversion-ready interfaces that reflect your brand and make customers smile.',
      iconBg: 'bg-blue-600'
    },
    {
      icon: Smile,
      title: 'UX Design Services',
      description: 'Our team designs intuitive flows and user journeys that reduce friction and keep people engaged with your product.',
      iconBg: 'bg-blue-600'
    },
    {
      icon: Eye,
      title: 'Design Audits & UX Reviews',
      description: 'We analyze your existing product, uncover hidden usability issues and deliver action-focused recommendations.',
      iconBg: 'bg-blue-600'
    },
    {
      icon: MapPin,
      title: 'Interactive Prototyping',
      description: 'Clickable mockups validate ideas early, helping teams test, refine and align before any code is written.',
      iconBg: 'bg-blue-600'
    },
    {
      icon: Layers,
      title: 'Design System creation',
      description: 'We build scalable component libraries and style guides so your product stays consistent as it grows.',
      iconBg: 'bg-blue-600'
    },
    {
      icon: GitBranch,
      title: 'Product Design Consulting',
      description: 'Acting as strategic partners, we support roadmap decisions, feature planning and long-term product evolution.',
      iconBg: 'bg-blue-600'
    }
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
    
          <SectionTitle 
          title='Designing Services We Offer'
          description='Comprehensive digital design services that improve products, enhance experiences, and drive results for ambitious brands.'
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`${service.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DesigningServicesWeOffer;
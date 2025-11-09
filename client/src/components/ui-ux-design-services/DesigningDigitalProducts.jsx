import React from 'react';
import { Lightbulb, TrendingUp, Zap, Building2 } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function DesigningDigitalProducts() {
  const features = [
    {
      icon: Zap,
      title: 'Complexity Simplified',
      description: 'We turn intricate, technical ideas into clean, intuitive interfaces users instantly understand and love.',
      bgColor: 'bg-amber-200',
      iconColor: 'text-amber-900'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused Design',
      description: 'Our product design decisions are rooted in data, improving activation, retention, and long-term scalability.',
      bgColor: 'bg-cyan-200',
      iconColor: 'text-cyan-900'
    },
    {
      icon: Lightbulb,
      title: 'Built for Startups',
      description: 'We support fast-moving SaaS teams with agile processes engineered for speed, clarity, and flexibility.',
      bgColor: 'bg-orange-300',
      iconColor: 'text-orange-900'
    },
    {
      icon: Building2,
      title: 'Enterprise Ready UX',
      description: 'Design systems and user experiences crafted to satisfy demanding enterprise customers and stakeholders globally.',
      bgColor: 'bg-indigo-200',
      iconColor: 'text-indigo-900'
    }
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          
          <SectionTitle 
          title='Designing Digital Products That Drive Growth'
          description='We create conversion driven digital products that engage users, accelerate growth, and outperform your toughest competitors'
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${feature.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DesigningDigitalProducts;
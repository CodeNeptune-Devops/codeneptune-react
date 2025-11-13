import React from 'react';
import img1 from '../../assets/uiux/img1.webp';
import img2 from '../../assets/uiux/img2.webp';
import img3 from '../../assets/uiux/img3.webp';
import img4 from '../../assets/uiux/img4.webp';
import Image from 'next/image';

function WhyUiUxMatters() {
  const benefits = [
    {
      number: '01',
      title: 'Improves Time-to-Value',
      description: 'Streamlined workflows help new users reach "aha!" moments faster'
    },
    {
      number: '02',
      title: 'Reduces Drop-off',
      description: 'Frictionless experience design prevents onboarding fatigue and churn'
    },
    {
      number: '03',
      title: 'Builds Brand Trust',
      description: 'Polished visuals and logical journeys elevate product credibility'
    },
    {
      number: '04',
      title: 'Increases Conversions',
      description: 'User centric design lays the foundation for trial-to-paid upgrades.'
    }
  ];

  const images = [
    {label:'Image 1',src:img1},
    {label:'Image 2',src:img2},
    {label:'Image 3',src:img3},
    {label:'Image 4',src:img4},
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10">
                    <div>
                        <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6">
                           Why UI/UX Matters Before Development
                        </h3>
                    </div>
                    <div className="flex items-center">
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                             Smart UX transforms design into a growth engine, helping products win, retain and delight demanding users
                        </p>
                    </div>
                </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Images */}
          <div className="grid grid-cols-2 gap-4">
  
            {images.map((item,index) => (
              <div key={index} className="bg-red-800 rounded-2xl h-[13rem] overflow-hidden shadow-lg">
              <Image
                src={item.src}
                alt={item.label}
                height={400}
                width={400}
                className="w-full h-full object-cover"
              />
            </div>
            ))}
            
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-gray-200 group-hover:text-blue-200 transition-colors">
                    {benefit.number}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                {index < benefits.length - 1 && (
                  <div className="mt-6 border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUiUxMatters;
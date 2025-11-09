import React from 'react';

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
            {/* Top Left - Woman with alarm clock */}
            <div className="bg-red-800 rounded-2xl h-[13rem] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
                alt="Professional woman with clock"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Top Right - Growth chart */}
            <div className="bg-gray-300 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center p-6">
              <div className="relative w-full h-full flex items-end justify-center gap-2">
                {/* Bar chart visualization */}
                <div className="w-8 h-12 bg-teal-400 rounded-t"></div>
                <div className="w-8 h-20 bg-red-500 rounded-t"></div>
                <div className="w-8 h-32 bg-blue-500 rounded-t"></div>
                <div className="w-8 h-40 bg-orange-500 rounded-t"></div>
                {/* Arrow */}
                <div className="absolute -top-8 right-4">
                  <svg width="60" height="80" viewBox="0 0 60 80" className="text-red-500">
                    <path d="M30 10 L30 60 M30 10 L15 25 M30 10 L45 25" 
                          stroke="currentColor" 
                          strokeWidth="8" 
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Bottom Left - Building blocks */}
            <div className="bg-white rounded-2xl h-[13rem] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" 
                alt="Business planning with blocks"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Right - Woman with arrow */}
            <div className="bg-gray-400 rounded-2xl h-[13rem] overflow-hidden shadow-lg flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-white text-8xl mb-4">↑</div>
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop" 
                  alt="Happy professional"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white"
                />
              </div>
            </div>
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
import React from 'react';

const WhyCodeNeptuneIsTheRightChoice = () => {
  const features = [
    {
      number: 1,
      title: "Business-Focused Approach",
      description: "We understand your business objectives and translate them into digital outcomes."
    },
    {
      number: 2,
      title: "Collaborative Process",
      description: "We keep you involved and informed from start to finish."
    },
    {
      number: 3,
      title: "Trust-Centered Design",
      description: "Your brand credibility is reinforced with clean design and engaging layouts."
    },
    {
      number: 4,
      title: "Flexible Budget Options",
      description: "We offer scalable plans that match your budget and goals."
    },
    {
      number: 5,
      title: "Performance-First Development",
      description: "We build websites that are optimized for speedUX, and conversions."
    }
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why Code Neptune<br />
                Is the Right Choice?
              </h2>
              <p className="mt-4 text-gray-600 text-base sm:text-lg">
                Our approach is built around results, transparency, and genuine support.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div 
                  key={feature.number}
                  className="flex gap-4 bg-gray-50 rounded-lg p-4 sm:p-5 hover:bg-gray-100 transition-colors duration-200"
                >
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg sm:text-xl">
                        {feature.number}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/api/placeholder/600/700" 
                alt="Professional business meeting" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCodeNeptuneIsTheRightChoice;

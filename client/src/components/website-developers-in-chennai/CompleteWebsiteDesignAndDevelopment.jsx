import React from 'react';

const CompleteWebsiteDesignAndDevelopment = () => {
  const services = [
    {
      title: "Business Website Development.",
      description: "We create responsive, fast-loading websites for small businesses, professionals, and new ventures."
    },
    {
      title: "WordPress Website Design",
      description: "Custom WordPress websites built using Elementor or block editor for flexibility and performance."
    },
    {
      title: "SEO-Centric Development",
      description: "We use SEO best practices like optimized code, mobile responsiveness, and metadata to ensure search engines can easily understand and rank your site."
    },
    {
      title: "eCommerce Development",
      description: "We develop secure online stores using WooCommerce or Shopify with integrated payments and streamlined checkouts."
    },
    {
      title: "Ad-Optimized Landing Pages",
      description: "Landing pages built for Google Ads, Meta Ads, and lead generation campaigns with high load speed and conversion rates."
    },
    {
      title: "Website Redesign and Optimization",
      description: "We improve existing websites with a fresh design, faster load times, and a better user experience."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 sm:w-80">
                <img 
                  src="/api/placeholder/320/240" 
                  alt="Website Development Illustration" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Heading */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Complete Website
              </h1>
              <div className="inline-block mt-4">
                <span className="bg-blue-600 text-white px-8 py-3 sm:px-12 sm:py-4 rounded-full text-2xl sm:text-3xl lg:text-4xl font-bold shadow-lg">
                  Design & Development
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
                Services
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              As trusted web developers in Chennai, we offer complete, future-ready solutions aligned with your growth.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-full text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Start Your Project
              </button>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteWebsiteDesignAndDevelopment;
;

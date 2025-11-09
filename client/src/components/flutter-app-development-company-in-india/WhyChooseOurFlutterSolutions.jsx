import React from 'react'
import { Code, Palette, Zap } from 'lucide-react'
import SectionTitle from '../titles/SectionTitle'

function WhyChooseOurFlutterSolutions() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Platform Agnostic Brilliance',
      description: 'Create apps for mobile, web, and desktop from one codebase for faster delivery and consistent user experience.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Pixel Perfect Design',
      description: "We craft visually stunning UI/UX using Flutter's Material and Cupertino widgets, animations, and responsive layouts tailored to your audience."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance at 60 FPS',
      description: 'Our apps are optimized to deliver smooth, fast, and responsive performance without sacrificing quality or user experience.'
    }
  ]

  return (
    <div className='w-full py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-5'>
        {/* Title Section */}
        <div className="text-center max-w-5xl">
          <SectionTitle 
          title='  Why Choose Our Flutter Solutions'
          description=' We build high performing Flutter apps that merge design, speed, and seamless user experience.'
          />
        </div>

        {/* Cards Grid */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300'
            >
              {/* Icon */}
              <div className='bg-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6'>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <p className="text-gray-900 text-lg font-medium mb-6">
            Ready to Build an App That Scales Your Business? Get Your Free Flutter App Audit.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 cursor-pointer rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseOurFlutterSolutions
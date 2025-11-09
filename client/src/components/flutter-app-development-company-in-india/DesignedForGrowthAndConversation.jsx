import React from 'react'
import { Layers, Code2, TrendingUp } from 'lucide-react'
import SectionTitle from '../titles/SectionTitle'

function DesignedForGrowthAndConversion() {
  const features = [
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'ROI Focused UI and UX for Real Results',
      description: 'Our design approach combines beauty with purpose. Every screen, interaction, and animation is crafted to guide users toward engagement and conversion. From onboarding to checkout, we create intuitive flows that increase retention and drive revenue.'
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'Agile and Transparent Development Process',
      description: "Speed and flexibility are built into our process. Using Flutter's hot reload and an agile methodology, we deliver frequent iterations, real-time updates, and faster releases. On average, our clients launch 40% quicker compared to traditional development cycles."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Conversion Optimized App Flows',
      description: 'Your app should be a growth engine. We strategically integrate onboarding, micro-interactions, and smart CTAs that encourage action at the right time. This ensures every user journey is designed to maximize lifetime value and build customer loyalty.'
    }
  ]

  return (
    <div className='w-full py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-5'>
        {/* Title Section */}
        <div className="text-center max-w-5xl">
          
          <SectionTitle 
          title=' Designed for Growth and Conversion'
          description="Flutter's single codebase enables faster development, consistent user experiences across platforms, and significant cost savings. Imagine your app delighting users on every device while accelerating your time-to-market."
          />
        </div>

        {/* Cards Grid */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-3xl p-8 flex flex-col hover:shadow-xl transition-shadow duration-300'
            >
              {/* Icon */}
              <div className='bg-blue-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6'>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className='text-xl font-semibold text-gray-900 mb-4 leading-tight'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 leading-relaxed text-base'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DesignedForGrowthAndConversion
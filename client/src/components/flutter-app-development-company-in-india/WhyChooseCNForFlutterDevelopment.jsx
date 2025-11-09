import React from 'react'
import { Paintbrush, Code, Package, Hourglass } from 'lucide-react'
import SectionTitle from '../titles/SectionTitle'

function WhyChooseCNForFlutterDevelopment() {
  const reasons = [
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: 'Design-First Approach',
      description: 'Every project starts with UI and UX at the core, ensuring intuitive navigation and visually engaging experiences that keep users coming back.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Skilled Flutter Development Team',
      description: "Our developers specialize in creating high-performance, cross-platform apps using the full potential of Flutter's framework and widgets."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Faster Delivery Without Compromise',
      description: "With Flutter's single codebase and agile workflows, we deliver faster results without sacrificing quality or security."
    },
    {
      icon: <Hourglass className="w-8 h-8" />,
      title: 'Long Term Reliability and Support',
      description: 'From launch to scaling, we provide continuous maintenance, updates, and expert support so your app stays future-ready.'
    }
  ]

  return (
    <div className='w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500 to-blue-600'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Left Side - Title and CTA */}
          <div className='flex flex-col justify-start items-start'>
            {/* Flutter Logo */}
            <div className='bg-white rounded-3xl p-6 mb-8 shadow-lg'>
              <svg className="w-20 h-20" viewBox="0 0 256 256" fill="none">
                <path d="M157.665 0L0 157.665l48.535 48.535L206.2 48.535z" fill="#42A5F5"/>
                <path d="M157.665 48.535L48.535 157.665l48.535 48.535 157.73-157.73z" fill="#0277BD"/>
                <path d="M206.2 48.535l-48.535 48.535 48.535 48.535L256 97.07z" fill="#42A5F5" opacity="0.8"/>
              </svg>
            </div>

            <SectionTitle 
            textColor='text-white'
            descriptionColor='text-white'
            align='text-start'
            title=' Why Choose Code Neptune for Flutter App Development?'
            description='Because you deserve more than an app, you deserve a growth-focused solution.'
            />

            {/* CTA Button */}
            <button className='border-2 cursor-pointer border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 uppercase tracking-wide'>
              Talk to Our Experts Today
            </button>
          </div>

          {/* Right Side - Features Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {reasons.map((reason, index) => (
              <div
                key={index}
                className='flex flex-col items-start'
              >
                {/* Icon */}
                <div className='bg-white/20 backdrop-blur-sm text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-4'>
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className='text-xl font-bold text-white mb-3 leading-tight'>
                  {reason.title}
                </h3>

                {/* Description */}
                <p className='text-blue-100 leading-relaxed text-base'>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseCNForFlutterDevelopment
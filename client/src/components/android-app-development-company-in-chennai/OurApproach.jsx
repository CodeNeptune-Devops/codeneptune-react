import React from 'react'
import { Target, Users, Package, Lock, Settings } from 'lucide-react'
import SectionTitle from '../titles/SectionTitle'

function OurApproach() {
  const steps = [
    {
      icon: <Target className="w-8 h-8" />,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-500',
      title: 'Understanding Your Vision',
      description: 'We align every app with your business goals to ensure long-term value and measurable results.',
      step: 'STEP 1',
      stepColor: 'text-pink-400'
    },
    {
      icon: <Users className="w-8 h-8" />,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-500',
      title: 'Designing for Users',
      description: 'We focus on seamless user experiences that drive engagement, retention, and brand trust.',
      step: 'STEP 2',
      stepColor: 'text-purple-400'
    },
    {
      icon: <Package className="w-8 h-8" />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-500',
      title: 'Scalable Development',
      description: 'Our apps are built to grow with your business, handling increased users and future requirements.',
      step: 'STEP 3',
      stepColor: 'text-green-500'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-500',
      title: 'Robust Security',
      description: 'We integrate advanced security practices to protect user data and ensure safe digital interactions.',
      step: 'STEP 4',
      stepColor: 'text-cyan-500'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-500',
      title: 'Continuous Support',
      description: 'From updates to bug fixes, we ensure your app stays reliable, efficient, and competitive.',
      step: 'STEP 5',
      stepColor: 'text-gray-400'
    }
  ]

  return (
    <div className='w-full pt-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-5'>
        {/* Section Title */}
        <div className="text-center max-w-4xl">
          <SectionTitle 
          title='Our Approach to Building High Impact Android Apps'
          description='We combine strategy, design, and technology to create Android apps that drive measurable business results.'
          />
        </div>

        {/* Steps Grid */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300'
            >
              {/* Icon */}
              <div className={`${step.iconBg} ${step.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                {step.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 text-sm leading-relaxed mb-6 flex-grow'>
                {step.description}
              </p>

              {/* Step Label */}
              <span className={`${step.stepColor} font-bold text-sm tracking-wide`}>
                {step.step}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-4">
          <p className="text-gray-900 text-xl font-semibold mb-6">
            Ready to bring your Android app idea to life?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurApproach
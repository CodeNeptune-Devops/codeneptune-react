import React from 'react'
import { BarChart3, Smartphone, Shield } from 'lucide-react'
import SectionTitle from '../titles/SectionTitle'

function BreakingDownTheBarriers() {
  const barriers = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Apps That Fail to Scale',
      description: 'An app that works for 100 users often slows or crashes with 10,000. Without scalable architecture, businesses lose opportunities when growth arrives.',
      transition: 'Transition: This is where expert development ensures your app grows with your business instead of holding it back.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Poor UI/UX and Low Retention',
      description: 'If users cannot navigate easily or enjoy the experience, they uninstall. Bad design leads to poor engagement and missed revenue.',
      transition: 'Transition: A well crafted interface transforms frustrated users into loyal customers who keep coming back.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Gaps Costing Businesses',
      description: 'Weak security puts customer data at risk. Breaches not only damage trust but also create compliance and legal challenges.',
      transition: 'Transition: With the right approach, strong security turns into a competitive advantage rather than a liability.'
    }
  ]

  return (
    <div className='w-full py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-5'>
        {/* Title Section */}
        <div className="text-center max-w-5xl">
          <SectionTitle 
          title='Breaking Down the Barriers to Android App Success'
          description=' Every business wants an app that attracts users, scales with growth, and builds loyalty. But many face roadblocks that stop them from reaching those goals.'
          />
        </div>

        {/* Cards Grid */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {barriers.map((barrier, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-xl transition-shadow duration-300'
            >
              {/* Icon and Title */}
              <div className='flex items-start gap-4 mb-4'>
                <div className='flex-shrink-0 text-gray-700'>
                  {barrier.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 leading-tight'>
                  {barrier.title}
                </h3>
              </div>

              {/* Description */}
              <p className='text-gray-700 leading-relaxed mb-6'>
                {barrier.description}
              </p>

              {/* Transition Box */}
              <div className='border-2 border-dashed border-gray-300 rounded-xl p-4 mt-auto'>
                <p className='text-gray-600 text-sm italic leading-relaxed'>
                  {barrier.transition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BreakingDownTheBarriers
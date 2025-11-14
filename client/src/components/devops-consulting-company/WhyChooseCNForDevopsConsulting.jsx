'use client'

import React, { useState } from 'react'
import SectionTitle from '../titles/SectionTitle'
import ContactModal from '@/modals/ContactModal';

function WhyChooseCNForDevopsConsulting() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='w-full py-16 bg-black text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>

          <SectionTitle
            textColor='text-white'
            descriptionColor='text-white'
            title='Why Choose Code Neptune for DevOps Consulting'
            description='Because you deserve more than just a setup. You deserve a growth focused solution from a trusted DevOps consulting company.'
          />
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16'>
          {/* Feature 001 */}
          <div className='border-t border-gray-700 pt-8'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='text-gray-500 font-mono text-md'>001</span>
              <h2 className='text-xl sm:text-2xl font-semibold'>
                Strategy-First Approach
              </h2>
            </div>
            <p className='text-gray-400 leading-relaxed ml-0 sm:ml-12'>
              Every project starts with an in-depth understanding of your unique business and technical needs, ensuring intuitive workflows and efficient operations that drive continuous delivery and measurable results. We define a phased strategy complete with measurable outcomes and quick wins.
            </p>
          </div>

          {/* Feature 002 */}
          <div className='border-t border-gray-700 pt-8'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='text-gray-500 font-mono text-md'>002</span>
              <h2 className='text-xl sm:text-2xl font-semibold'>
                Skilled DevOps Consultant Team
              </h2>
            </div>
            <p className='text-gray-400 leading-relaxed ml-0 sm:ml-12'>
              Our DevOps consultant team specializes in creating high-performance, automated pipelines using the full potential of leading tools and methodologies, ensuring your solutions are built to last. The breadth and depth of tools and platforms listed implicitly suggest that we possess a large, highly skilled, and diverse team of experts.
            </p>
          </div>

          {/* Feature 003 */}
          <div className='border-t border-gray-700 pt-8'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='text-gray-500 font-mono text-md'>003</span>
              <h2 className='text-xl sm:text-2xl font-semibold'>
                Faster Implementation Without Compromise
              </h2>
            </div>
            <p className='text-gray-400 leading-relaxed ml-0 sm:ml-12'>
              With agile workflows and deep expertise, we deliver faster results without sacrificing quality, security, or the long-term integrity of your systems. Our agile DevOps approach is specifically designed to accelerate the development cycle and facilitate the rapid incorporation of feedback loops.
            </p>
          </div>

          {/* Feature 004 */}
          <div className='border-t border-gray-700 pt-8'>
            <div className='flex items-center gap-4 mb-4'>
              <span className='text-gray-500 font-mono text-md'>004</span>
              <h2 className='text-xl sm:text-2xl font-semibold'>
                Long-Term Reliability and Support
              </h2>
            </div>
            <p className='text-gray-400 leading-relaxed ml-0 sm:ml-12'>
              From setup to continuous improvement, we provide 24/7 support, essential updates, and real-time incident resolution to keep your infrastructure future-ready and running at peak performance.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className='flex justify-center'>
          <button onClick={() => setIsModalOpen(true)} className='px-6 py-3 cursor-pointer border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105'>
            TALK TO OUR EXPERTS TODAY
          </button>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default WhyChooseCNForDevopsConsulting
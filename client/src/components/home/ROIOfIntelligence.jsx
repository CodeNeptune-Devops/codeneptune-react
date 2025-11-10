'use client'

import React, { useState } from 'react'
import img1 from '../../assets/roi/img-1.webp'
import img2 from '../../assets/roi/img-2.webp'
import img3 from '../../assets/roi/img-3.webp'
import Image from 'next/image'

function ROIOfIntelligence() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      label: 'Efficiency',
      title: 'Streamline Operations and Drive Cost-Effective Performance',
      description: 'Automate complex workflows and reduce manual efforts. Our AI Agents streamline operations and help businesses cut costs by up to 30 percent.',
      image: img1
    },
    {
      id: 2,
      label: 'Growth',
      title: 'Empower Data-Driven Decisions for Sustainable Expansion',
      description: 'Automate repetitive tasks with AI-powered workflows. Save time and reduce errors across your entire organization.',
      image: img2
    },
    {
      id: 3,
      label: 'Innovation',
      title: 'Accelerate Ideas into Impact with Generative Intelligence',
      description: 'Accelerate product development with Generative AI and adaptive automation that shortens R&D cycles and delivers faster time to market.',
      image: img3
    },
  ]

  const currentStep = steps.find(step => step.id === activeStep)

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slide-in-left {
            animation: slideInLeft 0.5s ease-out;
          }

          .animate-slide-in-left-delayed {
            animation: slideInLeft 0.6s ease-out;
          }

          .animate-slide-in-left-more-delayed {
            animation: slideInLeft 0.7s ease-out;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out;
          }

          .animate-fade-in-up-1 {
            animation: fadeInUp 0.8s ease-out;
          }

          .animate-fade-in-up-2 {
            animation: fadeInUp 0.9s ease-out;
          }

          /* Hide scrollbar but keep functionality */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />

      <div className='w-full pt-16'>
        <div className='w-full py-8 bg-slate-950'>
          <div className='max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12'>

            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8 lg:mb-10">
              <div className='flex flex-col justify-center items-start gap-3'>
                <p className='uppercase text-xs sm:text-sm text-blue-500 font-bold leading-relaxed tracking-wider sm:[letter-spacing:4px]'>
                  ROI of Intelligence
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-4 lg:mb-6 text-white">
                  The Smarter You Build, the Faster You Grow
                </h3>
              </div>
              <div className="flex items-center">
                <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                  Discover how intelligent automation and AI Agents deliver measurable results across industries. Every solution we create combines innovation and strategy to unlock efficiency, accelerate growth, and reduce operational costs.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className='flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12'>

              {/* Content Section */}
              <div className='flex-1 w-full'>
                <div key={activeStep} className='space-y-4 sm:space-y-6'>
                  
                  {/* Tabs - Horizontal scroll on mobile */}
                  <div className='w-full overflow-x-auto hide-scrollbar'>
                    <div className='flex justify-start items-center gap-2 sm:gap-3 lg:gap-4 min-w-max p-2'>
                      {steps.map((step) => (
                        <button
                          key={step.id}
                          onClick={() => setActiveStep(step.id)}
                          className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base ${
                            activeStep === step.id
                              ? 'bg-gradient-to-r from-[#4A3AFF] to-[#744EDF] text-white shadow-lg scale-105'
                              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                          }`}
                        >
                          {step.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div className='animate-slide-in-left-delayed'>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6'>
                      {currentStep.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <div className='animate-slide-in-left-more-delayed'>
                    <p className='text-gray-400 text-base sm:text-lg max-w-2xl'>
                      {currentStep.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Images Section */}
              <div key={`images-${activeStep}`} className='flex-1 w-full'>
                <div className='grid grid-cols-1 gap-4 sm:gap-6'>
                  <div className='rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up-1'>
                    <Image
                      src={currentStep.image}
                      alt={currentStep.title}
                      height={400}
                      width={400}
                      className='w-full h-64 sm:h-80 object-cover'
                    />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ROIOfIntelligence
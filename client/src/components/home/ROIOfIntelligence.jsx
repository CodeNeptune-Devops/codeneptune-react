'use client'

import React, { useState } from 'react'
import SectionTitle from '../titles/SectionTitle'

function ROIOfIntelligence() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      label: 'Efficiency',
      title: 'Seamless Integration',
      description: 'Automate complex workflows and reduce manual efforts. Our AI Agents streamline operations and help businesses cut costs by up to 30 percent.',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 2,
      label: 'Growth',
      title: 'Intelligent Automation',
      description: 'Automate repetitive tasks with AI-powered workflows. Save time and reduce errors across your entire organization.',
      images: [
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
      ]
    },
    {
      id: 3,
      label: 'Innovation',
      title: 'Real-time Analytics',
      description: 'Accelerate product development with Generative AI and adaptive automation that shortens R&D cycles and delivers faster time to market.',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
      ]
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
        `
      }} />

      <div className='w-full pt-16'>
        <div className='w-full py-8  bg-gray-900 '>
          <div className='max-w-7xl mx-auto w-full px-6 py-12'>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10">
              <div className='flex flex-col justify-center items-start gap-3'>
                <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
                  ROI of Intelligence
                </p>
                <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6 text-white">
                 The Smarter You Build, the Faster You Grow
                </h3>
              </div>
              <div className="flex items-center">
                <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                 Discover how intelligent automation and AI Agents deliver measurable results across industries. Every solution we create combines innovation and strategy to unlock efficiency, accelerate growth, and reduce operational costs.
                </p>
              </div>
            </div>

            <div className='flex justify-center items-start gap-5 lg:gap-12'>

              {/* Content Section */}
              <div className='flex-1'>
                <div key={activeStep} className='space-y-6'>
                  {/* Step Label - Slide in from left */}
                  <div >
                    <div className='flex justify-start items-center gap-4'>
                      {steps.map((step) => (
                        <button
                          key={step.id}
                          onClick={() => setActiveStep(step.id)}
                          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${activeStep === step.id
                            ? 'bg-gradient-to-r from-[#4A3AFF] to-[#744EDF] text-white shadow-lg  scale-105'
                            : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                            }`}
                        >
                          {/* <span className='mr-2'>{step.id}</span> */}
                          {step.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Title - Slide in from left with delay */}
                  <div className='animate-slide-in-left-delayed'>
                    <h2 className='text-5xl font-bold text-white mb-6'>
                      {currentStep.title}
                    </h2>
                  </div>

                  {/* Description - Slide in from left with more delay */}
                  <div className='animate-slide-in-left-more-delayed'>
                    <p className='text-gray-400 text-lg max-w-2xl'>
                      {currentStep.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Images Section - Fade in and slide up */}
              <div key={`images-${activeStep}`} className=' flex-1'>
                <div className='grid grid-cols-1 gap-6'>
                  {currentStep.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl overflow-hidden shadow-2xl ${idx === 0 ? 'animate-fade-in-up-1' : 'animate-fade-in-up-2'}`}
                    >
                      <img
                        src={img}
                        alt={`${currentStep.title} ${idx + 1}`}
                        className='w-full h-80 object-cover'
                      />
                    </div>
                  ))}
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
'use client'

import React, { useState } from 'react'
import { CheckCircle, Puzzle, Users } from 'lucide-react'
import SectionTitle from '../titles/SectionTitle'

function FlutterDevelopmentTechStack() {
  const [activeTab, setActiveTab] = useState(5)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveTab(tabId)
        setIsAnimating(false)
      }, 150)
    }
  }

  const tabs = [
    { id: 0, title: '01. Framework and Language' },
    { id: 1, title: '02. Design and UI Tools' },
    { id: 2, title: '03. State Management Solutions' },
    { id: 3, title: '04. Backend and APIs' },
    { id: 4, title: '05. Database Options' },
    { id: 5, title: '06. Testing and Quality Assurance' },
    { id: 6, title: '07. Deployment and CI/CD' }
  ]

  const tabContent = {
    0: {
      title: 'Framework and Language',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Flutter SDK',
          description: 'Flutter SDK provides the complete toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Dart Programming',
          description: 'Dart is a client-optimized language for fast apps on any platform, offering strong typing and ahead-of-time compilation for optimal performance.'
        }
      ]
    },
    1: {
      title: 'Design and UI Tools',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Material Design',
          description: 'Material Design components provide a comprehensive UI toolkit for creating beautiful and consistent user interfaces across platforms.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Cupertino Widgets',
          description: 'Cupertino widgets offer iOS-styled components for creating native-looking apps on Apple platforms.'
        }
      ]
    },
    2: {
      title: 'State Management Solutions',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Provider',
          description: 'Provider is a wrapper around InheritedWidget to make state management easier and more reusable.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Bloc Pattern',
          description: 'Bloc helps implement the BLoC design pattern, separating business logic from UI for better testability and maintainability.'
        }
      ]
    },
    3: {
      title: 'Backend and APIs',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'REST APIs',
          description: 'RESTful APIs provide standardized communication between your Flutter app and backend services.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'GraphQL',
          description: 'GraphQL offers efficient data fetching with flexible queries for modern app requirements.'
        }
      ]
    },
    4: {
      title: 'Database Options',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'SQLite',
          description: 'SQLite provides a lightweight, reliable local database solution for storing structured data offline.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Firebase',
          description: 'Firebase offers real-time cloud database, authentication, and backend services for rapid development.'
        }
      ]
    },
    5: {
      title: 'Testing and Quality Assurance',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Flutter Test',
          description: 'Flutter Test is a testing framework built into Flutter that allows developers to write unit, widget, and integration tests to ensure app reliability and performance.'
        },
        {
          icon: <Puzzle className="w-8 h-8" />,
          name: 'Integration Testing',
          description: 'Integration Testing in Flutter verifies the complete workflow of an app by testing multiple widgets and services together, ensuring that all components interact as expected in real-world scenarios.'
        },
        {
          icon: <Users className="w-8 h-8" />,
          name: 'Appium',
          description: 'Appium is an open-source automation tool for testing mobile applications, allowing cross-platform testing of native, hybrid, and web apps using standard WebDriver protocols.'
        }
      ]
    },
    6: {
      title: 'Deployment and CI/CD',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'GitHub Actions',
          description: 'GitHub Actions automates your build, test, and deployment pipeline directly from your repository.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Fastlane',
          description: 'Fastlane automates the process of releasing your iOS and Android apps, handling screenshots, signing, and deployment.'
        }
      ]
    }
  }

  return (
    <div className='w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <style>{`
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
      `}</style>
      
      <div className='max-w-7xl mx-auto'>
        {/* Title Section */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <SectionTitle 
          title='Our Flutter Development Tech Stack'
          description='Building world class Flutter apps requires the right combination of tools and technologies. At Code Neptune, we use the latest Flutter ecosystem components to deliver high performance, visually stunning, and scalable apps.'
          />
        </div>

        {/* Main Content Area */}
        <div className='bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl overflow-hidden shadow-2xl'>
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            {/* Left Side - Navigation Tabs */}
            <div className='lg:col-span-1 bg-blue-600/40 backdrop-blur-sm p-6 sm:p-8'>
              <div className='space-y-3'>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-white text-blue-700 font-bold shadow-lg'
                        : 'text-blue-100 hover:bg-blue-600/50 font-medium'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Content Display */}
            <div className='lg:col-span-2 p-8 sm:p-12 text-white'>
              <div 
                className={`transition-all duration-1000 ${
                  isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
                
              >
                <h3 className='text-3xl font-bold mb-8'>
                  {tabContent[activeTab].title}
                </h3>

                <div className='space-y-8'>
                  {tabContent[activeTab].items.map((item, index) => (
                    <div 
                      key={index} 
                      className='flex gap-4'
                      style={{
                        animation: isAnimating ? 'none' : `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {/* Icon */}
                      <div className='flex-shrink-0 text-white'>
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className='text-xl font-bold mb-2'>
                          {item.name}
                        </h4>
                        <p className='text-blue-100 leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlutterDevelopmentTechStack
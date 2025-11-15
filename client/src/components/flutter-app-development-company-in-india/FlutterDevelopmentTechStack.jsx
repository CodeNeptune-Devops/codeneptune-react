'use client'

import React, { useState } from 'react'
import { CheckCircle, Puzzle, Users } from 'lucide-react'
import SectionTitle from '../titles/SectionTitle'
import '../../styles/flutterTechStack.css'

function FlutterDevelopmentTechStack() {
  const [activeTab, setActiveTab] = useState(0)
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
          description:
            'Flutter SDK is an open-source UI toolkit by Google used to build natively compiled applications for mobile, web, and desktop from a single codebase.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Dart Programming Language',
          description:
            'Dart is a modern, object-oriented programming language developed by Google, optimized for building fast and scalable applications.'
        }
      ]
    },

    1: {
      title: 'Design and UI Tools',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Figma for Prototyping',
          description:
            'Figma is a cloud-based design tool that enables teams to create, prototype, and collaborate on user interfaces in real time.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Adobe XD for Interface Design',
          description:
            'Adobe XD is a powerful UI/UX design tool by Adobe, used for designing and prototyping user interfaces for websites and mobile apps.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Material Design and Cupertino Widgets',
          description:
            'Material Design and Cupertino Widgets are UI frameworks in Flutter that provide native design components for Android and iOS, ensuring consistent user experiences.'
        }
      ]
    },

    2: {
      title: 'State Management Solutions',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Provider',
          description:
            'Provider is a popular state management solution in Flutter that allows efficient data sharing and UI updates across the widget tree using a simple and scalable approach.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Riverpod',
          description:
            'Riverpod is a robust and type-safe state management library for Flutter, offering improved performance, testability, and flexibility over traditional solutions like Provider.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Bloc and Cubit',
          description:
            'Bloc and Cubit are Flutter state management libraries that help manage complex application logic using events and states, enabling clear separation of UI and business logic.'
        }
      ]
    },

    3: {
      title: 'Backend and APIs',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Firebase',
          description:
            'Firebase is a comprehensive app development platform by Google that offers tools like real-time databases, authentication, and cloud functions to build and scale web and mobile apps.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Node.js',
          description:
            'Node.js is a fast, event-driven JavaScript runtime built on Chrome’s V8 engine, ideal for developing scalable server-side applications and real-time services.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'REST and GraphQL APIs',
          description:
            'REST and GraphQL are API architectures used to communicate between client and server — REST uses fixed endpoints, while GraphQL offers flexible, client-defined queries for efficient data fetching.'
        }
      ]
    },

    4: {
      title: 'Database Options',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'SQLite',
          description:
            'SQLite is a lightweight, serverless relational database engine embedded into applications, ideal for local data storage on mobile and desktop platforms.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Hive',
          description:
            'Hive is a lightweight, NoSQL database for Flutter that offers fast, secure, and offline data storage without relying on native dependencies.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Firebase Realtime Database',
          description:
            'Firebase Realtime Database is a cloud-hosted NoSQL database that stores and syncs data in real time across all connected clients, enabling seamless collaboration and live updates.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Cloud Firestore',
          description:
            'Cloud Firestore is a scalable, cloud-based NoSQL database from Firebase that supports real-time syncing, flexible data structures, and powerful querying for mobile and web apps.'
        }
      ]
    },

    5: {
      title: 'Testing and Quality Assurance',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Flutter Test',
          description:
            'Flutter Test is a testing framework built into Flutter that allows developers to write unit, widget, and integration tests to ensure app reliability and performance.'
        },
        {
          icon: <Puzzle className="w-8 h-8" />,
          name: 'Integration Testing',
          description:
            'Integration testing in Flutter verifies the complete workflow of an app by testing multiple widgets and services together in real-world scenarios.'
        },
        {
          icon: <Users className="w-8 h-8" />,
          name: 'Appium',
          description:
            'Appium is an open-source automation tool for testing mobile applications, allowing cross-platform testing of native, hybrid, and web apps using standard WebDriver protocols.'
        }
      ]
    },

    6: {
      title: 'Deployment and CI/CD',
      items: [
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Fastlane',
          description:
            'Fastlane is an open-source automation tool that streamlines the build and release process for mobile apps, handling tasks like code signing, testing, and app store deployment.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'Codemagic',
          description:
            'Codemagic is a CI/CD platform tailored for Flutter apps, enabling automated testing, building, and deployment across Android, iOS, and web with seamless integration and fast delivery.'
        },
        {
          icon: <CheckCircle className="w-8 h-8" />,
          name: 'GitHub Actions',
          description:
            'GitHub Actions is a CI/CD tool integrated into GitHub that automates workflows like building, testing, and deploying code directly from your repositories.'
        }
      ]
    }
  };


  return (
    <div className='w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>

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
                    className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer ${activeTab === tab.id
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
                className={`transition-all duration-1000 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
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
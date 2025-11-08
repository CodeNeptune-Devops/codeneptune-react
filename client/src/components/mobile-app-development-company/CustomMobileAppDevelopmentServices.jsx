'use client'

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import ShinyText from '@/animatedTexts/ShinyText/ShinyText';

function CustomMobileAppDevelopmentServices() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 1,
            title: 'Android Application Development',
            description: 'At Code Neptune, we design and develop feature-rich Android applications that cater to businesses of all sizes. Our Android app development services ensure your app is:',
            features: [
                'Scalable and high-performing, optimized for millions of users.',
                'Secure and reliable, following best practices in data protection.',
                'Compatible with all Android devices, from smartphones to tablets, TVs, and wearables.'
            ],
            additionalText: 'We leverage Kotlin and Java to build native Android apps, ensuring they are fast, responsive, and tailored to your business needs. From MVPs to enterprise solutions, our Android apps are built to engage users and drive growth',
            bgGradient: 'from-blue-500 via-blue-600 to-blue-800',
            contentGradient: 'from-blue-700 to-blue-900'
        },
        {
            id: 2,
            title: 'iOS Application Development',
            description: 'We create elegant and powerful iOS applications that deliver exceptional user experiences across all Apple devices. Our iOS development services ensure:',
            features: [
                'Native performance with Swift and Objective-C for seamless functionality.',
                'Intuitive interfaces following Apple\'s Human Interface Guidelines.',
                'Full integration with iOS ecosystem including Apple Watch, iPad, and Apple TV.'
            ],
            additionalText: 'Our iOS apps are designed to meet App Store standards while providing innovative features that set your business apart in the competitive Apple marketplace.',
            bgGradient: 'from-purple-500 via-purple-600 to-purple-800',
            contentGradient: 'from-purple-700 to-purple-900'
        },
        {
            id: 3,
            title: 'Flutter Application Development',
            description: 'Build cross-platform applications with Flutter that work beautifully on both iOS and Android. Our Flutter development services provide:',
            features: [
                'Single codebase for multiple platforms, reducing development time and costs.',
                'Native-like performance with beautiful, customizable UI components.',
                'Hot reload feature for rapid development and instant updates.'
            ],
            additionalText: 'Using Flutter\'s powerful framework, we create visually stunning apps with smooth animations and responsive designs that feel native on every platform.',
            bgGradient: 'from-cyan-500 via-cyan-600 to-cyan-800',
            contentGradient: 'from-cyan-700 to-cyan-900'
        },
        {
            id: 4,
            title: 'React Native Application Development',
            description: 'Leverage the power of React Native to build efficient cross-platform mobile applications. Our React Native services deliver:',
            features: [
                'JavaScript-based development with native performance capabilities.',
                'Reusable components that accelerate development across platforms.',
                'Strong community support and extensive third-party library ecosystem.'
            ],
            additionalText: 'We build React Native apps that combine the best of web and mobile development, ensuring fast deployment and easy maintenance for your business.',
            bgGradient: 'from-indigo-500 via-indigo-600 to-indigo-800',
            contentGradient: 'from-indigo-700 to-indigo-900'
        },
        {
            id: 5,
            title: 'Custom Application Development',
            description: 'Every business is unique, and so are its mobile app requirements. Our custom application development services offer:',
            features: [
                'Tailored solutions designed specifically for your business needs.',
                'Flexible architecture that scales with your growing requirements.',
                'Integration with existing systems and third-party services.'
            ],
            additionalText: 'Whether you need a specialized industry solution or a unique consumer app, we build custom applications from the ground up to match your exact specifications.',
            bgGradient: 'from-emerald-500 via-emerald-600 to-emerald-800',
            contentGradient: 'from-emerald-700 to-emerald-900'
        },
        {
            id: 6,
            title: 'eCommerce App Development',
            description: 'Transform your retail business with powerful eCommerce mobile applications. Our eCommerce app development includes:',
            features: [
                'Secure payment gateway integration with multiple payment options.',
                'Intuitive product browsing with advanced search and filters.',
                'Real-time inventory management and order tracking capabilities.'
            ],
            additionalText: 'We create feature-rich eCommerce apps with shopping cart functionality, user reviews, push notifications, and analytics to help you maximize sales and customer satisfaction.',
            bgGradient: 'from-orange-500 via-orange-600 to-orange-800',
            contentGradient: 'from-orange-700 to-orange-900'
        }
    ];

    const menuItems = [
        'Android Application Development',
        'iOS Application Development',
        'Flutter Application Development',
        'React Native Application Development',
        'Custom Application Development',
        'eCommerce App Development'
    ];

    return (
        <div className={`min-h-screen bg-gradient-to-br ${services[activeService].bgGradient} p-4 md:p-8 lg:p-12 transition-all duration-700`}>
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10 text-white">
                <div className='space-y-2'>
                    <p className='uppercase text-md text-white font-bold leading-relaxed [letter-spacing:4px]'>
                        ROI of Intelligence
                    </p>
                    <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6">
                        Custom Mobile App Development Services Driving Digital Success
                    </h3>
                </div>
                <div className="flex items-center">
                    <p className="text-base md:text-lg leading-relaxed">
                        At Code Neptune, we specialize in developing high-performance, scalable, and user-centric mobile applications that redefine industry standards. Our expert team ensures that businesses stay ahead in the ever-evolving mobile-first landscape by delivering tailor-made solutions that maximize growth and ROI.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="  overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Sidebar Navigation */}
                        <div className="lg:w-2/5 p-6 md:p-8 lg:p-10 space-y-3">
                            {menuItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer ${activeService === index
                                        ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <span className="text-sm md:text-base font-medium">
                                        {String(index + 1).padStart(2, '0')}. {item}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className={`lg:w-3/5 bg-gradient-to-br ${services[activeService].contentGradient} p-6 md:p-10 lg:p-12 text-white transition-all duration-700`}>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                    {services[activeService].title}
                                </h2>

                                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                                    {services[activeService].description}
                                </p>

                                <div className="space-y-4">
                                    {services[activeService].features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="bg-green-400 rounded p-1">
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                            <p className="text-white/90 text-sm md:text-base leading-relaxed">
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-base md:text-lg text-white/90 leading-relaxed pt-4">
                                    {services[activeService].additionalText}
                                </p>

                                <button className="flex uppercase flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                                    <ShinyText
                                        text="Lets Build Together"
                                        disabled={false}
                                        speed={3}
                                        className='custom-class'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomMobileAppDevelopmentServices;
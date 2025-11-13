'use client'

import React, { useState } from 'react';
import { CheckCheck } from 'lucide-react';
import ShinyText from '@/animatedTexts/ShinyText/ShinyText';

function CustomMobileAppDevelopmentServices() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 1,
            title: "Android Application Development",
            description:
                "At Code Neptune, we design and develop feature-rich Android applications that cater to businesses of all sizes. Our Android app development services ensure your app is:",
            features: [
                "Scalable and high-performing, optimized for millions of users.",
                "Secure and reliable, following best practices in data protection.",
                "Compatible with all Android devices, from smartphones to tablets, TVs, and wearables.",
            ],
            additionalText:
                "We leverage Kotlin and Java to build native Android apps, ensuring they are fast, responsive, and tailored to your business needs. From MVPs to enterprise solutions, our Android apps are built to engage users and drive growth.",
            bgGradient: "from-blue-500 via-blue-600 to-blue-800",
            contentGradient: "from-blue-700 to-blue-900",
        },

        // 2. iOS – rewritten exactly like screenshot
        {
            id: 2,
            title: "iOS Application Development",
            description:
                "We create custom iOS applications that work flawlessly across all Apple devices. As a leading mobile app development company, we build secure, high-performance apps using Swift and Objective-C.",
            features: [
                "Optimized for iPhones, iPads, Apple Watches, and Apple TVs.",
                "Built with clean, scalable code for smooth performance.",
                "Follows Apple’s strict design and security guidelines.",
            ],
            additionalText:
                "Whether it’s a startup MVP or a full-featured enterprise solution, our iOS app development services help you reach Apple users with confidence. Let’s build your iOS app.",
            bgGradient: "from-purple-500 via-purple-600 to-purple-800",
            contentGradient: "from-purple-700 to-purple-900",
        },

        // 3. Flutter – rewritten exactly like screenshot
        {
            id: 3,
            title: "Flutter Application Development",
            description:
                "Our Flutter app development team at Code Neptune builds beautiful, fast apps that run on both Android and iOS from a single codebase. This means faster delivery and reduced costs—without compromising quality.",
            features: [
                "One codebase, two platforms.",
                "Stunning UI with native performance.",
                "Scalable for MVPs and enterprise-level apps.",
            ],
            additionalText:
                "As a trusted mobile app development company, we help you save time and money with cross-platform Flutter development. Let’s turn your idea into a Flutter-powered app.",
            bgGradient: "from-cyan-500 via-cyan-600 to-cyan-800",
            contentGradient: "from-cyan-700 to-cyan-900",
        },

        // 4. React Native – rewritten exactly like screenshot
        {
            id: 4,
            title: "React Native Application Development",
            description:
                "React Native lets you reach both Android and iOS users with a single app. Our team builds flexible and responsive apps using this popular framework from Meta (Facebook).",
            features: [
                "Faster development with reusable components.",
                "Real-time updates and smoother animations.",
                "Lower development cost, quicker launch time.",
            ],
            additionalText:
                "If you’re looking for a reliable mobile app development company to build scalable cross-platform apps, React Native is a top choice. Build a powerful app with React Native.",
            bgGradient: "from-indigo-500 via-indigo-600 to-indigo-800",
            contentGradient: "from-indigo-700 to-indigo-900",
        },

        // 5. Custom Apps – rewritten exactly like screenshot
        {
            id: 5,
            title: "Custom Application Development",
            description:
                "Your business is unique—your app should be too. We offer custom app development services to match your exact business goals, whether it’s a new startup or an existing brand going mobile.",
            features: [
                "Built for your unique needs, not one-size-fits-all.",
                "Designed with users and scalability in mind.",
                "Integration-ready with your existing tools and systems.",
            ],
            additionalText:
                "Code Neptune is the mobile app development company you can trust to build tailor-made digital products that grow with your business. Let’s customize your app to success.",
            bgGradient: "from-emerald-500 via-emerald-600 to-emerald-800",
            contentGradient: "from-emerald-700 to-emerald-900",
        },

        // 6. eCommerce Apps – rewritten exactly like screenshot
        {
            id: 6,
            title: "eCommerce App Development",
            description:
                "We develop high-performance eCommerce apps that drive engagement and boost conversions. Whether you sell fashion, food, or electronics, our apps help you sell more—faster.",
            features: [
                "Smooth user experience with fast checkout.",
                "Built-in payment gateway integration.",
                "Real-time inventory, cart, and order management.",
            ],
            additionalText:
                "As a top-rated mobile app development company, we know how to design apps that grow your online business. Start your eCommerce app journey with us.",
            bgGradient: "from-orange-500 via-orange-600 to-orange-800",
            contentGradient: "from-orange-700 to-orange-900",
        },
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
                        Who we are
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

                                                <CheckCheck className="w-4 h-4 text-white" />

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
import React from 'react';
import { MapPin, Target, Database, Package } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function WhyChooseCN() {
    const features = [
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Custom & Scalable Web Solutions",
            description: "Flexible, high-performance websites built to adapt and grow with your business needs.",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "SEO & Mobile Friendly",
            description: "Optimized for search engines and mobile-first users, ensuring faster loading, better rankings, and higher conversions.",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "E-Commerce & Business Websites",
            description: "Seamless, user-friendly websites designed to maximize engagement, drive leads, and grow your business.",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            icon: <Package className="w-8 h-8" />,
            title: "Fast & Secure",
            description: "Lightning-fast websites with top-tier security measures to protect your data and enhance user experience.",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600"
        }
    ];

    return (
        <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    <div className="space-y-8">

                        {/* Title and Description */}
                        <div className="text-center lg:text-left">
                            
                            <SectionTitle
                            align='text-start' 
                            title=' Why Choose Code Neptune?'
                            description=" Your website is more than an online presence—it's a powerful tool that can drive
                                leads, increase brand trust, and accelerate business growth. At Code Neptune, we
                                ensure every website is built with performance, scalability, and user experience in
                                mind."
                            />
                        </div>
                        {/* Browser Mockup Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-md">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 sm:p-12">
                                    <div className="relative">
                                        {/* Browser Window Mockup */}
                                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                            {/* Browser Header */}
                                            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                                </div>
                                                <div className="flex-1 mx-4">
                                                    <div className="bg-white rounded px-3 py-1 text-xs text-gray-400">
                                                        www.codeneptune.com
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Browser Content */}
                                            <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 bg-blue-600 rounded-lg"></div>
                                                        <div className="space-y-2">
                                                            <div className="w-20 h-2 bg-gray-200 rounded"></div>
                                                            <div className="w-16 h-2 bg-gray-200 rounded"></div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-yellow-300 rounded-lg p-4 shadow-md">
                                                        <div className="w-full h-3 bg-yellow-400 rounded mb-2"></div>
                                                        <div className="w-3/4 h-3 bg-yellow-400 rounded"></div>
                                                    </div>

                                                    <div className="bg-red-300 rounded-lg px-6 py-3 text-center shadow-md">
                                                        <div className="w-20 h-3 bg-red-400 rounded mx-auto"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Floating Elements */}
                                        <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full shadow-lg animate-bounce"></div>
                                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-400 rounded-lg shadow-lg transform rotate-12"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    {/* RIGHT SIDE - Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-gray-100"
                            >
                                {/* Icon */}
                                <div
                                    className={`${feature.bgColor} ${feature.iconColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WhyChooseCN;
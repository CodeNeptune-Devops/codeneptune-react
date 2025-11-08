'use client'

import React, { useRef } from 'react';
import { Rocket, ShoppingCart, LayoutDashboard, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function WebsiteSolutionsForEveryNeed() {
    const scrollRef = useRef(null);

    const solutions = [
        {
            icon: Rocket,
            title: "I'm Starting a New Business and Need a Website",
            description: "Whether you're a startup, solo entrepreneur, or local service provider — we'll build you a professional website that earns trust from Day One."
        },
        {
            icon: ShoppingCart,
            title: "I Want to Sell Products or Services Online",
            description: "Need an online store or booking system? We build eCommerce, service-based, and hybrid platforms with easy checkout and management."
        },
        {
            icon: LayoutDashboard,
            title: "I Need a Custom Platform Like LMS, Portal, or Dashboard",
            description: "Looking for something beyond a standard site? We develop scalable solutions like learning platforms, internal portals, and admin dashboards."
        },
        {
            icon: Globe,
            title: "I Want to Expand My Digital Presence",
            description: "Already have a website? We'll help you scale with advanced features, integrations, and optimizations to reach more customers and grow your business."
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            const newScrollPosition = direction === 'left'
                ? scrollRef.current.scrollLeft - scrollAmount
                : scrollRef.current.scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <p className='uppercase text-xs sm:text-sm text-blue-500 font-bold leading-relaxed tracking-wider sm:[letter-spacing:4px]'>
                        Who We Help
                    </p>
                    <SectionTitle
                        textColor='text-white'
                        title='Website Solutions for Every Need'
                        description='Whether youre launching your first website, selling products online, or building something custom like an LMS — we craft the right solution for your goals.'
                    />
                </div>

                {/* Carousel Container */}
                <div className="relative mb-16">
                    {/* Previous Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700 shadow-lg cursor-pointer"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-700 shadow-lg cursor-pointer"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Solutions Cards Carousel */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12 pt-20"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105 relative group flex-shrink-0 w-full sm:w-96"
                            >
                                {/* Icon - positioned outside on top, behind the card */}
                                <div className="absolute -top-16 right-8 w-32 h-32 transform group-hover:scale-110 transition-transform duration-300 -z-10">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <solution.icon className="w-20 h-20 text-blue-500 opacity-80" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Subtle glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-5"></div>

                                <div className="relative z-10">
                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight pr-32">
                                        {solution.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 uppercase cursor-pointer">
                        Start Your Project
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WebsiteSolutionsForEveryNeed;
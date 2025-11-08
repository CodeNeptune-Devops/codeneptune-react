'use client'

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Bot, BrainCircuit, Globe, Smartphone, Layers, Zap, BarChart3, Code2, Cloud } from 'lucide-react';

function OurServices() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        {
            title: "AI Agent Development",
            text: "We create intelligent AI Agents capable of understanding context, automating workflows, and making decisions independently to enhance productivity and user interaction.",
            icon: Bot
        },
        {
            title: "AI Development Services",
            text: "Our AI and ML development includes predictive analytics, NLP automation, and LLM fine tuning to help businesses scale with intelligent automation.",
            icon: BrainCircuit
        },
        {
            title: "Web Design & Development",
            text: "We build powerful, responsive, and SEO optimized websites using the latest frameworks and AI-driven insights to improve engagement and conversions.",
            icon: Globe
        },
        {
            title: "Native App Development",
            text: "Our expert team crafts high-performance native applications with smooth user experiences and seamless integration for iOS and Android platforms.",
            icon: Smartphone
        },
        {
            title: "Hybrid App Development",
            text: "We deliver cross-platform hybrid applications designed for speed, scalability, and performance — optimized to reduce development time and cost.",
            icon: Layers
        },
        {
            title: "Digital Transformation",
            text: "From modernizing legacy systems to automating workflows, we help businesses embrace AI-driven transformation across every process.",
            icon: Zap
        },
        {
            title: "Data Analytics",
            text: "We transform complex data into actionable insights through AI-powered analytics that support smarter decisions and measurable growth.",
            icon: BarChart3
        },
        {
            title: "Web & Software Engineering",
            text: "We architect scalable software systems and enterprise web platforms powered by AI-augmented SDLC methodologies for maximum efficiency.",
            icon: Code2
        },
        {
            title: "DevOps & Cloud Management",
            text: "We automate deployment, monitoring, and scaling using AIOps and intelligent cloud frameworks for secure, cost-efficient operations.",
            icon: Cloud
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const items = containerRef.current.querySelectorAll('.service-item');
            const containerTop = containerRef.current.getBoundingClientRect().top;
            const viewportMiddle = window.innerHeight / 2;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const itemMiddle = rect.top + rect.height / 2;

                if (Math.abs(itemMiddle - viewportMiddle) < rect.height) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                    {/* Left Side - Sticky Content */}
                    <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-8 sm:py-12 lg:py-20">
                        <div className="space-y-6 sm:space-y-8">
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-start leading-tight'>
                                Engineering the Future with AI Innovation.
                            </h2>

                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold leading-tight">Turn Your Vision into an AI-Driven Reality</h3>
                                </div>
                                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                                    We merge artificial intelligence, full-stack development, and automation to build transformative digital experiences that redefine how businesses innovate and scale.
                                </p>
                                <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer text-sm sm:text-base font-medium">
                                    Innovate with us
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Scrollable Services */}
                    <div ref={containerRef} className="py-8 sm:py-12 lg:py-20 space-y-3 sm:space-y-4">
                        {data.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={index}
                                    className={`service-item group cursor-pointer transition-all duration-300 ${
                                        isActive ? 'scale-100' : 'scale-95 sm:scale-95 opacity-70 sm:opacity-60'
                                    }`}
                                >
                                    <div className={`relative border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 ${
                                        isActive
                                            ? 'border-blue-500 bg-gradient-to-br from-blue-950/50 to-gray-900/50'
                                            : 'border-gray-700 bg-gray-900/30 hover:border-gray-600'
                                    }`}>
                                        <div className="flex items-start justify-between gap-3 sm:gap-4">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${
                                                        isActive ? 'bg-blue-600' : 'bg-gray-800'
                                                    }`}>
                                                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                                    </div>
                                                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">{item.title}</h3>
                                                </div>
                                                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.text}</p>
                                            </div>
                                            <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-all mt-1 ${
                                                isActive ? 'text-blue-500 translate-x-1' : 'text-gray-500'
                                            }`} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
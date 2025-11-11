import React from 'react';
import { Zap, Users, Target, Package, Plane, RefreshCw } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function WhatDrivesUs() {
    const values = [
        {
            icon: Zap,
            title: "Clarity Over Complexity",
            description: "We keep things simple — no jargon, no hidden steps, just honest communication.",
            bgColor: "bg-cyan-100",
            iconColor: "text-cyan-600"
        },
        {
            icon: Users,
            title: "Human-Focused Support",
            description: "We talk like real people. Fast responses, no bots, and actual follow-through.",
            bgColor: "bg-yellow-100",
            iconColor: "text-yellow-600"
        },
        {
            icon: Target,
            title: "Purpose-Driven Design",
            description: "We don't build websites to 'just look nice' — we build them to convert and perform",
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600"
        },
        {
            icon: Package,
            title: "Only What You Need",
            description: "We won't upsell you things you don't need. If a simple site works, we'll tell you.",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            icon: Plane,
            title: "Launch-Ready from Day One",
            description: "Every site is mobile-ready, SEO-friendly, and tested before going live.",
            bgColor: "bg-sky-100",
            iconColor: "text-sky-600"
        },
        {
            icon: RefreshCw,
            title: "Iterate and Improve",
            description: "We believe in progress, not perfection. We test, learn, and refine to keep your site performing better over time.",
            bgColor: "bg-yellow-100",
            iconColor: "text-yellow-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10 space-y-4">

                    <p className='uppercase text-xs sm:text-sm text-blue-500 font-bold leading-relaxed tracking-wider sm:[letter-spacing:4px]'>
                        OUR VALUES
                    </p>
                    <SectionTitle
                        align='text-start'
                        title='What Drives Us at Code Neptune'
                        description=" Behind every website we build is a set of values that guide how we work, communicate, and deliver results. These aren't just words. They shape every project we take on."
                    />
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <div key={index} className="flex flex-col">
                                {/* Icon */}
                                <div className={`w-14 h-14 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                                    <IconComponent className={`w-8 h-8 ${value.iconColor}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-base md:text-md text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default WhatDrivesUs;
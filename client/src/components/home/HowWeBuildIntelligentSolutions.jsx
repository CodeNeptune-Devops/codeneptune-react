'use client'

import React, { useState } from 'react';
import { FileText, Lightbulb, Monitor, Code } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';
import Image from 'next/image';

function HowWeBuildIntelligentSolutions() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            id: 1,
            icon: FileText,
            frontImg:'/home/how-we-build/front-img-1.svg',
            backImg:'/home/how-we-build/back-img-1.svg',
            title: 'Project Discovery',
            description: 'We start by exploring your concept, gathering every key detail to ensure clarity and precision before development begins.'
        },
        {
            id: 2,
            icon: Lightbulb,
            frontImg:'/home/how-we-build/front-img-2.svg',
            backImg:'/home/how-we-build/back-img-2.svg',
            title: 'Expert Evaluation',
            description: 'Our team analyzes your idea’s potential, identifying opportunities for innovation and performance enhancement.'
        },
        {
            id: 3,
            icon: Monitor,
            frontImg:'/home/how-we-build/front-img-3.svg',
            backImg:'/home/how-we-build/back-img-3.svg',
            title: 'Accurate Estimation',
            description: 'We assess the project’s scope, timeline, and complexity to provide a transparent estimate tailored to your needs.'
        },
        {
            id: 4,
            icon: Code,
            frontImg:'/home/how-we-build/front-img-4.svg',
            backImg:'/home/how-we-build/back-img-4.svg',
            title: 'Project Blueprint in 72 Hours',
            description: 'Within 72 hours, you receive a detailed project roadmap outlining cost, milestones, and timelines. Helping you move forward with confidence.'
        }
    ];

    return (
        <div className="w-full pt-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                <SectionTitle 
                title=' How We Build Intelligent Solutions'
                description=' Every successful product begins with a clear vision. Our process is designed to understand your goals, refine your ideas, and deliver intelligent, scalable outcomes that align with your business objectives.'
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card) => {
                        const Icon = card.icon;
                        const isHovered = hoveredCard === card.id;

                        return (
                            <div
                                key={card.id}
                                className="h-80 perspective-1000"
                                onMouseEnter={() => setHoveredCard(card.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className="relative w-full h-full transition-transform duration-700 preserve-3d"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                    }}
                                >
                                    {/* Front Side - Black Card */}
                                    <div
                                        className="absolute w-full h-full backface-hidden rounded-2xl bg-white p-8 flex flex-col items-center justify-center text-center"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)"
                                        }}

                                    >
                                        <div className="mb-6">
                                            <Image 
                                            src={card.frontImg}
                                            alt={card.title}
                                            height={50}
                                            width={50}
                                            />
                                        </div>
                                        <h3 className="text-black text-xl font-semibold leading-tight">
                                            {card.title}
                                        </h3>
                                    </div>

                                    {/* Back Side - Blue Card */}
                                    <div
                                        className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-r from-[#4A3AFF] to-[#744EDF] text-white p-8 flex flex-col items-center justify-center text-center"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            transform: 'rotateY(180deg)'
                                        }}
                                    >
                                        <div className="mb-6">
                                           <Image 
                                            src={card.backImg}
                                            alt={card.title}
                                            height={50}
                                            width={50}
                                            />
                                        </div>
                                        <h3 className="text-white text-xl font-bold mb-4">
                                            {card.title}
                                        </h3>
                                        <p className="text-white text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default HowWeBuildIntelligentSolutions;
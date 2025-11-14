'use client'

import React, { useState, useEffect, useRef } from 'react';

function OurImpactInNumbers() {
    const [counts, setCounts] = useState({});
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        {
            number: 12,
            suffix: '+',
            title: 'Industries',
            description: 'AI-driven solutions empowering diverse sectors'
        },
        {
            number: 50,
            suffix: '+',
            title: 'Projects',
            description: 'Custom-built digital products for growth and performance'
        },
        {
            number: 100,
            suffix: '+',
            title: 'AI Integrations',
            description: "Intelligent automation enhancing business efficiency"
        },
        {
            number: 50,
            suffix: '+',
            title: 'Cloud Deployments',
            description: 'Scalable infrastructure ensuring seamless operations'
        },
        {
            number: 10,
            suffix: '+',
            title: ' Countries',
            description: 'Global partnerships driving digital evolution'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateNumbers();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateNumbers = () => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.number / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.number) {
                    current = stat.number;
                    clearInterval(timer);
                }
                setCounts(prev => ({
                    ...prev,
                    [index]: Math.floor(current)
                }));
            }, stepDuration);
        });
    };

    return (
        <div className="bg-white text-black min-h-screen px-6 pt-16 md:px-12 lg:px-24" ref={sectionRef}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col justify-start items-start sm:items-center gap-2  mb-10">
                    <div>
                        <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight">
                            Our Impact in Numbers
                        </h3>
                    </div>
                    <div className="flex items-center">
                        <p className="text-base md:text-lg text-start sm:text-center text-gray-500 leading-relaxed">
                            Delivering intelligent digital transformation through innovation, scalability, and measurable results.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="pl-6 py-4 relative w-full"
                        >
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-20 bg-blue-500"></div>
                            <h2 className="text-5xl md:text-6xl font-bold text-blue-500 mb-4 ">
                                {counts[index] || 0}{stat.suffix}
                            </h2>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">
                                {stat.title}
                            </h3>
                            {stat.description && (
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                    {stat.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurImpactInNumbers;
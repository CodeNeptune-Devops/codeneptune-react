import React from 'react';
import img1 from '../../assets/home/dev-journey-1.webp'
import img2 from '../../assets/home/dev-journey-2.webp'
import img3 from '../../assets/home/dev-journey-3.webp'
import Image from 'next/image';
import SectionTitle from '../titles/SectionTitle';
import ShinyText from '@/animatedTexts/ShinyText/ShinyText';

function YourAppDevelopmentJourneyBeginsHere() {
    const services = [
        {
            id: 1,
            title: 'Ideate & Launch',
            subtitle: 'Transform Ideas into Digital Reality',
            description: "Your concept deserves more than code, it deserves intelligence. We help you plan, design, and launch AI-augmented web and mobile apps that are scalable, secure, and experience-driven.",
            tags: [
                'Product Strategy and MVP Design',
                'AI-Integrated UI and UX',
                'Native and Hybrid App Development',
                'Cloud Ready Launch Support'

            ],
            buttonText: 'Let’s Build Together',
            imageUrl: img1
        },
        {
            id: 2,
            title: 'Scale with Intelligence',
            subtitle: 'Empower Growth with Expert Teams',
            description: ' Whether you need a dedicated developer or a full engineering unit, our experts bring AI-powered tools and agile workflows to accelerate innovation and product delivery.',
            tags: [
                'Dedicated Developers and Agile Squads',
                'Full Time or Flexible Hiring Models',
                'AI and Automation-Enabled Development',
                'End-to-End Project Management'
            ],
            buttonText: 'Hire Your Team',
            imageUrl: img2
        },
        {
            id: 3,
            title: 'Enhance & Evolve',
            subtitle: 'Upgrade What You Have Already Built',
            description: ' We help existing apps perform smarter. From speed optimization to intelligent user insights, our process ensures your app stays adaptive, efficient, and future ready.',
            tags: [
                'AI-Driven Performance Optimization',
                'UI and UX Revamp and Feature Upgrades',
                'Predictive Maintenance',
                'Continuous Improvement Cycles'
            ],
            buttonText: 'Enhance My App',
            imageUrl: img3
        }
    ];

    return (
        <div className="w-full pt-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                <SectionTitle
                    title='Your App Development Journey Begins Here'
                    description='No matter where you stand, from concept to scale or optimization, we turn your ideas into intelligent, high-performing digital experiences. Every stage is powered by AI, automation, and engineering precision to deliver real impact.
'
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-3xl border border-gray-200 p-8 pt-6 flex flex-col transition-all duration-300 relative overflow-visible cursor-pointer hover:shadow-sm"
                        >
                            {/* Image - Absolute positioned */}
                            <div className="absolute top-0 right-3 w-20 h-auto md:w-24">
                                <Image
                                    src={service.imageUrl}
                                    alt={service.title}
                                    height={500}
                                    width={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-blue-600 text-md font-semibold mb-2 pr-0 md:pr-20">
                                {service.title}
                            </h3>

                            {/* Subtitle */}
                            <h4 className="text-gray-900 text-xl font-bold mb-4 pr-16 sm:pr-32">
                                {service.subtitle}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow sm:pr-20">
                                {service.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-2 bg-blue-50 text-gray-700 text-xs md:text-sm rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Button */}
                            <button className="w-full py-3 px-6 border-2 border-gray-300 rounded-full text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                                
                                {service.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default YourAppDevelopmentJourneyBeginsHere;
'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import SectionTitle from './titles/SectionTitle';

function TechStack() {

    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { label: 'All', value: 'all' },
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'CMS & Platforms', value: 'cms-and-platform' },
        { label: 'Databases', value: 'databases' },
        { label: 'Mobile', value: 'mobile' },
        { label: 'Devops', value: 'devops' },
    ];

    const techStackData = [
        { id: 1, name: 'React', category: 'frontend', logo: '/tech-stack/html.svg' },
        { id: 2, name: 'Vue.js', category: 'frontend', logo: '/tech-stack/html.svg' },
        { id: 3, name: 'Angular', category: 'frontend', logo: '/tech-stack/html.svg' },
        { id: 4, name: 'HTML', category: 'frontend', logo: '/tech-stack/html.svg' },
        { id: 5, name: 'Node.js', category: 'backend', logo: '/tech-stack/html.svg' },
        { id: 6, name: 'Django', category: 'backend', logo: '/tech-stack/html.svg' },
        { id: 7, name: 'Ruby on Rails', category: 'backend', logo: '/tech-stack/html.svg' },
        { id: 8, name: 'Flutter', category: 'mobile', logo: '/tech-stack/html.svg' },
        { id: 9, name: 'React Native', category: 'mobile', logo: '/tech-stack/html.svg' },
        { id: 10, name: 'Swift', category: 'mobile', logo: '/tech-stack/html.svg' },
        { id: 11, name: 'PostgreSQL', category: 'database', logo: '/tech-stack/html.svg' },
        { id: 12, name: 'MongoDB', category: 'database', logo: '/tech-stack/html.svg' },
        { id: 13, name: 'MySQL', category: 'database', logo: '/tech-stack/html.svg' },
        { id: 14, name: 'AWS', category: 'cloud', logo: '/tech-stack/html.svg' },
        { id: 15, name: 'Azure', category: 'cloud', logo: '/tech-stack/html.svg' },
        { id: 16, name: 'Google Cloud', category: 'cloud', logo: '/tech-stack/html.svg' },
    ];

    const filteredTechStack = activeTab === 'all' ? techStackData : techStackData.filter(tech => tech.category === activeTab);

    return (
        <div className='w-full py-16 '>
            <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-2 '>
                <div className='flex flex-col justify-start items-center gap-3'>
                    <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
                        Technology Stack
                    </p>
                    <SectionTitle
                        title='Innovative Tech for Seamless Digital Transformation'
                        description='Leveraging technology to accelerate growth, efficiency, and innovation for businesses worldwide.'
                    />
                </div>
                <div className='flex justify-center items-center gap-2 w-full'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`flex flex-col justify-center items-center px-1 py-4 border border-[#0072FF] text-[#0072FF] rounded-lg  w-[8rem] hover:bg-[#0072FF] hover:text-white transition-all duration-300 cursor-pointer ${activeTab === tab.value ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-[#0072FF]'}`}
                            onClick={() => setActiveTab(tab.value)}
                        >
                            <h3 className='text-xs font-semibold text-center'>{tab.label}</h3>
                        </button>
                    ))}
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-5 sm:gap-y-8 justify-center justify-items-center items-stretch mt-5'>
                    {filteredTechStack.map((tech) => (
                        <div
                            key={tech.id}
                            className='flex flex-col justify-center items-center px-1 py-4  rounded-lg border border-gray-200 w-[8rem]  hover:-translate-y-1 transition-all duration-300 cursor-pointer'
                        >
                            <Image
                                src={tech.logo}
                                alt={tech.name}
                                height={200}
                                width={200}
                                className='w-8 h-8 mb-2'
                            />
                            <h3 className='text-xs font-semibold text-center'>{tech.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack
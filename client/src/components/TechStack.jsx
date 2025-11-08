'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import SectionTitle from './titles/SectionTitle';

function TechStack() {

    const [activeTab, setActiveTab] = useState('frontend');

    const tabs = [
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'CMS & Platforms', value: 'cms-and-platform' },
        { label: 'Databases', value: 'databases' },
        { label: 'Mobile', value: 'mobile' },
        { label: 'Devops', value: 'devops' },
    ];

    const techStackData = [
        // 🖥️ Frontend
        { id: 1, name: 'React', category: 'frontend', logo: '/tech-stack/react.webp' },
        { id: 2, name: 'Next.js', category: 'frontend', logo: '/tech-stack/next-js.webp' },
        { id: 3, name: 'Angular', category: 'frontend', logo: '/tech-stack/angular.webp' },
        { id: 4, name: 'TypeScript', category: 'frontend', logo: '/tech-stack/typescript.webp' },
        { id: 5, name: 'JavaScript', category: 'frontend', logo: '/tech-stack/javascript.webp' },
        { id: 6, name: 'HTML', category: 'frontend', logo: '/tech-stack/html.webp' },
        { id: 7, name: 'CSS', category: 'frontend', logo: '/tech-stack/css.webp' },
        { id: 8, name: 'Bootstrap', category: 'frontend', logo: '/tech-stack/bootstrap.webp' },

        // ⚙️ Backend
        { id: 9, name: 'Node.js', category: 'backend', logo: '/tech-stack/node-js.webp' },
        { id: 10, name: 'Express.js', category: 'backend', logo: '/tech-stack/express_js.webp' },
        { id: 11, name: 'Laravel', category: 'backend', logo: '/tech-stack/laravel.webp' },
        { id: 12, name: 'PHP', category: 'backend', logo: '/tech-stack/php.webp' },
        { id: 13, name: 'Firebase', category: 'backend', logo: '/tech-stack/firebase.webp' },
        { id: 14, name: 'REST API', category: 'backend', logo: '/tech-stack/rest-api.webp' },

        // 🧩 CMS & Platforms
        { id: 15, name: 'WordPress', category: 'cms-and-platform', logo: '/tech-stack/wordpress.webp' },
        { id: 16, name: 'WooCommerce', category: 'cms-and-platform', logo: '/tech-stack/woocommerce.webp' },

        // 🗄️ Databases
        { id: 17, name: 'MongoDB', category: 'databases', logo: '/tech-stack/mongodb.webp' },
        { id: 18, name: 'MySQL', category: 'databases', logo: '/tech-stack/mysql.webp' },
        { id: 19, name: 'PostgreSQL', category: 'databases', logo: '/tech-stack/postgresql.webp' },
        { id: 20, name: 'Firebase', category: 'databases', logo: '/tech-stack/firebase.webp' },

        // 📱 Mobile
        { id: 21, name: 'Android', category: 'mobile', logo: '/tech-stack/android.webp' },
        { id: 22, name: 'iOS', category: 'mobile', logo: '/tech-stack/ios.webp' },
        { id: 23, name: 'Flutter', category: 'mobile', logo: '/tech-stack/flutter.webp' },
        { id: 24, name: 'React Native', category: 'mobile', logo: '/tech-stack/react-native.webp' },

        // ⚙️ DevOps
        { id: 25, name: 'AWS', category: 'devops', logo: '/tech-stack/aws.webp' },
        { id: 26, name: 'Azure', category: 'devops', logo: '/tech-stack/azure.webp' },
        { id: 27, name: 'CI/CD', category: 'devops', logo: '/tech-stack/ci-cd.webp' },
        { id: 28, name: 'Docker', category: 'devops', logo: '/tech-stack/docker.webp' },
        { id: 29, name: 'Elasticsearch', category: 'devops', logo: '/tech-stack/elasticsearch.webp' },
        { id: 30, name: 'Jenkins', category: 'devops', logo: '/tech-stack/jenkins.webp' },
        { id: 31, name: 'Kubernetes', category: 'devops', logo: '/tech-stack/kubernetes.webp' },
        { id: 32, name: 'Nag', category: 'devops', logo: '/tech-stack/nag.svg' },
        { id: 33, name: 'Puppets', category: 'devops', logo: '/tech-stack/puppets.webp' },
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
                <div className='flex justify-start sm:justify-center items-center gap-2 w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-2'>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`flex flex-col justify-center items-center px-4 py-4 border border-[#0072FF] text-[#0072FF] rounded-lg w-fit whitespace-nowrap hover:bg-[#0072FF] hover:text-white transition-all duration-300 cursor-pointer flex-shrink-0 ${activeTab === tab.value ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-[#0072FF]'}`}
                            onClick={() => setActiveTab(tab.value)}
                        >
                            <h3 className='text-xs font-semibold text-center'>{tab.label}</h3>
                        </button>
                    ))}
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-5 sm:gap-y-8 justify-center justify-items-center items-stretch mt-5'>
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
                                className='w-12 h-12 mb-2'
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
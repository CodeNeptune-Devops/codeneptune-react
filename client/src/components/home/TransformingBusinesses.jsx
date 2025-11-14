'use client'

import SpotlightCard from '@/animatedComponents/SpotLightCard';
import ShinyText from '@/animatedTexts/ShinyText/ShinyText';
import ContactModal from '@/modals/ContactModal';
import Image from 'next/image';
import React, { useState } from 'react'
import { SiCodemagic } from 'react-icons/si';

function TransformingBusinesses() {

    const [isModalOpen,setIsModalOpen] = useState(false);

    const data = [
        {
            label: "Innovating with Purpose",
            text: "We believe innovation begins with purpose. Every product we build is designed to create impact, solve challenges, and drive measurable growth.",
            imgSrc:'/home/transform-1.svg'
        },
        {
            label: "Intelligence in Action",
            text: "We turn data into decisions through AI-driven thinking that makes businesses more adaptive, insightful, and future-focused.",
            imgSrc:'/home/transform-2.svg'
        },
        {
            label: "Human Centered Design",
            text: "Technology works best when it feels natural. Our products are crafted around user experiences that inspire trust and connection.",
            imgSrc:'/home/transform-3.svg'
        },
        {
            label: "Scalable Engineering",
            text: "From startups to enterprises, we develop digital architectures that grow effortlessly with your vision and goals.",
            imgSrc:'/home/transform-4.svg'
        },
        {
            label: "Collaborative Vision",
            text: "Partnership is at the heart of progress. We work closely with clients to transform ideas into real, intelligent solutions.",
            imgSrc:'/home/transform-5.svg'
        },
        {
            label: "Continuous Evolution",
            text: "We evolve with technology to ensure that every solution we create remains relevant, agile, and performance-driven.",
            imgSrc:'/home/transform-6.svg'
        }
    ];


    return (
        <div className='w-full py-16 bg-black'>
            {/* <div className='w-full max-w-7xl mx-auto'>
            <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
            />
        </div> */}
            <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-10 text-white px-4'>

              

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10">
                    <div>
                        <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6">
                           Transforming Businesses with <br className='hidden lg:block' />AI-Powered Innovation That <br className='hidden lg:block' /> Connects People and <br className='hidden lg:block' /> Technology
                        </h3>
                    </div>
                    <div className="flex items-center">
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                            Code Neptune is a forward thinking technology company transforming ideas into intelligent digital experiences. We combine innovation and AI-driven strategy to build solutions that help businesses grow, adapt, and lead in a connected world. Every product we create is designed to deliver performance, scalability, and meaningful impact where technology meets human ambition.
                        </p>
                    </div>
                </div>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center justify-items-center gap-5'>
                    {data.map((item, index) => (
                        <SpotlightCard key={index} className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className='flex flex-col justify-start items-start gap-3 text-white h-[12rem]'>
                                <Image 
                                src={item.imgSrc}
                                alt={item.label}
                                height={40}
                                width={40}
                                />
                                <h5 className='text-xl'>{item.label}</h5>
                                <p className='text-gray-500'>{item.text}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                <div className='w-full flex justify-center items-center '>

                    <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                        <ShinyText
                            text="Let’s Collaborate"
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />
                    </button>


                </div>


            </div>

            <ContactModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default TransformingBusinesses
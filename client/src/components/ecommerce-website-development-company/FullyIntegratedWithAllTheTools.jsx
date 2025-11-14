'use client'

import React, { useState } from 'react'
import top from '../../assets/e-commerce-development/top.webp';
import bottom from '../../assets/e-commerce-development/bottom.webp';
import Image from 'next/image';
import ContactModal from '@/modals/ContactModal';

function FullyIntegratedWithAllTheTools() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='w-full pt-48 pb-60'>
            <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-5 relative'>


                <div className='absolute -top-40 left-auto right-auto'>
                    <Image
                        src={top}
                        alt='Top'
                        height={200}
                        width={600}
                    />
                </div>

                <div className='absolute -bottom-48 left-auto right-auto z-10'>
                    <Image
                        src={bottom}
                        alt='Bottom'
                        height={200}
                        width={600}
                    />
                </div>


                <div className='flex flex-col justify-start items-center gap-5'>
                    <span className='px-4 py-3 bg-[#e1f7df] text-black uppercase font-medium rounded-full'>
                        Integrations
                    </span>

                    <div className='flex flex-col justify-start items-center gap-3'>
                        <h3 className={`text-2xl md:text-4xl lg:text-4xl font-medium leading-tight text-center  w-full`}>
                            Fully integrated with all the tools <br className='hidden md:block' /> you're already familiar with
                        </h3>
                        <p className={`text-base md:text-lg  leading-relaxed text-center`}>
                            We connect your online store with trusted tools for payments, shipping, messaging, and <br className='hidden md:block' /> more — based on what your business needs.
                        </p>
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className='px-6 py-3 z-20 cursor-pointer bg-[#27b39b] text-white uppercase font-medium rounded-full'>
                        Explore integrations
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

export default FullyIntegratedWithAllTheTools
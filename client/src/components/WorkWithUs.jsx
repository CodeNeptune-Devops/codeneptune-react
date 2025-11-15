'use client'

import React, { useState } from 'react'
import ShinyText from '@/animatedTexts/ShinyText/ShinyText'
import ContactModal from '@/modals/ContactModal';

function WorkWithUs({ padding }) {

    const [isModalOpen,setIsModalOpen] = useState(false);

    return (
        <div className={`w-full pt-16 bg-black ${padding}`}>
            
            {/* Wrapper with responsive background images */}
            <div
                className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-start items-center lg:justify-center gap-4 text-white rounded-xl py-14 px-5 lg:px-12 bg-black bg-[url('/cta2.webp')] sm:bg-[url('/cta1.webp')]         bg-cover bg-center bg-no-repeat"
            >

                {/* LEFT TEXT */}
                <div className="flex-1 flex flex-col justify-start items-start gap-6  lg:pr-32 mt-56 sm:mt-0">
                    <h5 className="text-xl sm:text-3xl font-semibold leading-9 pt-8">
                        Together, we design smarter digital experiences and help businesses achieve sustainable growth through intelligent technology.
                    </h5>

                    <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                        <ShinyText
                            text="Start Your Success Journey"
                            disabled={false}
                            speed={3}
                            className="custom-class"
                        />
                    </button>
                </div>

                <div className="flex-1"></div>
            </div>
            <ContactModal 
            isOpen={isModalOpen}
            onClose={()=>setIsModalOpen(false)}
            />
        </div>
    )
}

export default WorkWithUs

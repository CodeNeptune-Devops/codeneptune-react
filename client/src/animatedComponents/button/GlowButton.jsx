'use client';
import React, { useState } from 'react';
import { Github, Star } from 'lucide-react';
import { Liquid } from '@/components/ui/button-1';
import Link from 'next/link';
import ContactModal from '@/modals/ContactModal';

const COLORS = {
    color1: '#FFFFFF',
    color2: '#1E10C5',
    color3: '#9089E2',
    color4: '#FCFCFE',
    color5: '#F9F9FD',
    color6: '#B2B8E7',
    color7: '#0E2DCB',
    color8: '#0017E9',
    color9: '#4743EF',
    color10: '#7D7BF4',
    color11: '#0B06FC',
    color12: '#C5C1EA',
    color13: '#1403DE',
    color14: '#B6BAF6',
    color15: '#C1BEEB',
    color16: '#290ECB',
    color17: '#3F4CC0',
};

const ContactButton = ({isScrolled, isModalOpen, setIsModalOpen}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div className="hidden lg:flex justify-center ">
            <div
                className={`relative inline-block mx-auto group bg-white rounded-full ${
                    isScrolled ? 'h-[3em] sm:w-36 w-14' : 'h-[3.5em] sm:w-36 w-14'
                }`}>
                <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
                    <span className="absolute inset-0 rounded-full bg-[#d9d9d9] filter blur-[6.5px]"></span>
                    <div className="relative w-full h-full overflow-hidden rounded-full">
                        <Liquid isHovered={isHovered} colors={COLORS} />
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-full bg-[#010128] filter blur-[30px]"></div>
                <div className="relative w-full h-full overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[#d9d9d9]"></span>
                    <span className="absolute inset-0 rounded-full bg-black"></span>
                    <Liquid isHovered={isHovered} colors={COLORS} />
                    {[1, 2, 3, 4, 5].map((i) => (
                        <span
                            key={i}
                            className={`absolute inset-0 rounded-full border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[4px]'}`}></span>
                    ))}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-full filter blur-[15px] bg-[#006]"></span>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute inset-0 rounded-full bg-transparent cursor-pointer"
                    aria-label="Contact Us"
                    type="button"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <span className="flex items-center justify-center gap-2 rounded-full text-md text-white font-semibold tracking-wide whitespace-nowrap">
                        <span className="">Get A Quote</span>
                    </span>
                </button>
            </div>
            
        </div>
    );
};

export default ContactButton;
'use client'

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './titles/SectionTitle';

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const testimonials = [
        {
            id: 1,
            text: "The AI mobility system developed by the Code Neptune team completely redefined our logistics. It made fleet tracking and performance monitoring faster and smarter.",
            name: " Ravi T",
            position: "Operations Head",
            company: "Entrex Mobility",
            logo: "../assets/trusted-partners/partner-1.webp",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
        },
        {
            id: 2,
            text: "Their AI-powered eCommerce solution helped us enhance customer experience. Smart analytics and automation made it easier to personalize product recommendations and boost sales.",
            name: " Pooja G",
            position: " Pooja G",
            company: " Pooja G",
            logo: "https://via.placeholder.com/150x50/1a1a1a/ffffff?text=edufundo",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
        },
        {
            id: 3,
            text: "The intelligent learning platform they built transformed our teaching experience. Interactive AI feedback tools made learning more adaptive and enjoyable for students.",
            name: "Ananya M",
            position: "Founder",
            company: "The UX School",
            logo: "https://via.placeholder.com/150x50/1a1a1a/ffffff?text=TechVenture",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
        }
    ];

    const nextTestimonial = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const prevTestimonial = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const getPrevIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length;
    const getNextIndex = () => (currentIndex + 1) % testimonials.length;

    return (
        <div className="w-full bg-black text-white min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="">
                    <div className="flex justify-between items-stretch ">

                        <div className=' flex items-end max-w-3xl '>
                            <SectionTitle
                            title='Our Clients Are the Center of Our Innovation'
                            description='We partner with forward-thinking brands to create measurable impact through intelligent solutions. Every testimonial represents our dedication to combining creativity, AI, and technology for real business transformation.'
                            align='text-start'
                            textColor='text-white'
                        />
                        </div>


                        {/* Navigation Buttons - Desktop */}
                        <div className="hidden lg:flex items-end pb-10 gap-3 ">
                            <button
                                onClick={prevTestimonial}
                                disabled={isTransitioning}
                                className="w-12 h-12 cursor-pointer rounded-full border border-gray-700 hover:border-gray-400 hover:bg-zinc-900 flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                disabled={isTransitioning}
                                className="w-12 h-12 cursor-pointer rounded-full border border-gray-700 hover:border-gray-400 hover:bg-zinc-900 flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Testimonials Container */}
                <div className="relative w-full overflow-hidden">
                    <div className="flex items-stretch justify-center gap-4">
                        {/* Left Card - Previous (20% visible, rest clipped) */}
                        <div
                            className="hidden lg:block w-[55%] cursor-pointer group transition-all duration-500 -ml-[35%]"
                            onClick={prevTestimonial}
                        >
                            <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 lg:p-10 border border-zinc-800 h-full flex flex-col shadow-2xl shadow-black/50 opacity-40 group-hover:opacity-60 transition-all duration-300">
                                <p className="text-base sm:text-lg  leading-relaxed text-white mb-auto">
                                    {testimonials[getPrevIndex()].text}
                                </p>

                                <div className="mt-8 pt-6 border-t border-zinc-800">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={testimonials[getPrevIndex()].image}
                                                alt={testimonials[getPrevIndex()].name}
                                                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-base text-white mb-1">
                                                    {testimonials[getPrevIndex()].name}
                                                </h4>
                                                <p className="text-gray-400 text-sm">
                                                    {testimonials[getPrevIndex()].position}
                                                </p>
                                                <p className="text-gray-500 text-xs">
                                                    {testimonials[getPrevIndex()].company}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="hidden sm:flex items-center justify-center bg-white rounded-lg px-6 py-3 flex-shrink-0">
                                            <img
                                                src={testimonials[getPrevIndex()].image}
                                                alt={`${testimonials[getPrevIndex()].company} logo`}
                                                className="h-10 w-auto object-contain max-w-[120px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Card - Active (larger width) */}
                        <div className="w-full lg:w-[55%] transition-all duration-500 z-10">
                            <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 lg:p-10 border border-zinc-800 h-full flex flex-col shadow-2xl shadow-black/50">
                                <p className="text-base sm:text-lg leading-relaxed text-white mb-auto">
                                    {testimonials[currentIndex].text}
                                </p>

                                <div className="mt-8 pt-6 border-t border-zinc-800">
                                    {/* Author Info and Logo */}
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-base text-white mb-1">
                                                    {testimonials[currentIndex].name}
                                                </h4>
                                                <p className="text-gray-400 text-sm">
                                                    {testimonials[currentIndex].position}
                                                </p>
                                                <p className="text-gray-500 text-xs">
                                                    {testimonials[currentIndex].company}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Company Logo */}
                                        <div className="hidden sm:flex items-center justify-center bg-white rounded-lg px-6 py-3 flex-shrink-0">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={`${testimonials[currentIndex].company} logo`}
                                                className="h-10 w-auto object-contain max-w-[120px]"
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile Logo */}
                                    <div className="sm:hidden flex justify-center mt-6 pt-6 border-t border-zinc-800">
                                        <div className="bg-white rounded-lg px-6 py-3">
                                            <img
                                                src={testimonials[currentIndex].logo}
                                                alt={`${testimonials[currentIndex].company} logo`}
                                                className="h-8 w-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Card - Next (20% visible, rest clipped) */}
                        <div
                            className="hidden lg:block w-[55%] cursor-pointer group transition-all duration-500 -mr-[35%]"
                            onClick={nextTestimonial}
                        >
                            <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 lg:p-10 border border-zinc-800 h-full flex flex-col shadow-2xl shadow-black/50 opacity-40 group-hover:opacity-60 transition-all duration-300">
                                <p className="text-base sm:text-lg  leading-relaxed text-white mb-auto">
                                    {testimonials[getNextIndex()].text}
                                </p>

                                <div className="mt-8 pt-6 border-t border-zinc-800">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={testimonials[getNextIndex()].image}
                                                alt={testimonials[getNextIndex()].name}
                                                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-base text-white mb-1">
                                                    {testimonials[getNextIndex()].name}
                                                </h4>
                                                <p className="text-gray-400 text-sm">
                                                    {testimonials[getNextIndex()].position}
                                                </p>
                                                <p className="text-gray-500 text-xs">
                                                    {testimonials[getNextIndex()].company}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="hidden sm:flex items-center justify-center bg-white rounded-lg px-6 py-3 flex-shrink-0">
                                            <img
                                                src={testimonials[getNextIndex()].image}
                                                alt={`${testimonials[getNextIndex()].company} logo`}
                                                className="h-10 w-auto object-contain max-w-[120px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons - Mobile */}
                    <div className="flex lg:hidden justify-center gap-3 mt-6">
                        <button
                            onClick={prevTestimonial}
                            disabled={isTransitioning}
                            className="w-12 h-12 rounded-full border border-gray-700 hover:border-gray-400 hover:bg-zinc-900 flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            disabled={isTransitioning}
                            className="w-12 h-12 rounded-full border border-gray-700 hover:border-gray-400 hover:bg-zinc-900 flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isTransitioning) {
                                        setIsTransitioning(true);
                                        setCurrentIndex(index);
                                        setTimeout(() => setIsTransitioning(false), 500);
                                    }
                                }}
                                disabled={isTransitioning}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-gray-600 hover:bg-gray-500'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
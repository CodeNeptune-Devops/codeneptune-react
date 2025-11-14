'use client'

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './titles/SectionTitle';
import Image from 'next/image';
import avatar1 from '../assets/testimonials/avatar-1.webp';
import avatar2 from '../assets/testimonials/avatar-2.webp';

function Testimonials() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState('');
    const containerRef = useRef(null);
    
    // Mouse drag state
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    
    // Touch state
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const testimonials = [
        {
            id: 1,
            text: "Code Neptune transformed the way we present our company online.Our new website reflects the quality and reliability we stand for in the construction industry.I recommend code neptune for website development.",
            name: "Karthick Marimuthu",
            position: "Managing Director",
            company: "ER Civil Planners",
            logo: '/testimonials/er.svg',
            image: avatar1
        },
        {
            id: 2,
            text: "We needed an online store, and Code Neptune delivered that as we expected. The checkout flow, product filters, and mobile experience were all good in terms of design. Sales have noticeably improved since the revamp.",
            name: "Ayyappan Ramesh",
            position: "Founder ",
            company: "Shoptune",
            logo: '/testimonials/shoptune.svg',
            image: avatar1
        },
        {
            id: 3,
            text: "I was looking for a salon booking platform that looked premium and worked flawlessly on mobile. Code Neptune delivered a stunning website that reflects our brand’s personality and makes appointment scheduling super easy for our clients.",
            name: "Amelia Harper",
            position: "Founder",
            company: "Harper Glow Studio",
            logo: '/testimonials/harper.svg',
            image: avatar2
        }
    ];

    const [orderedTestimonials, setOrderedTestimonials] = useState([...testimonials]);

    const nextTestimonial = () => {
        if (!isTransitioning) {
            setDirection('next');
            setIsTransitioning(true);
            
            setTimeout(() => {
                setOrderedTestimonials(prev => {
                    const newOrder = [...prev];
                    const first = newOrder.shift();
                    newOrder.push(first);
                    return newOrder;
                });
                setDirection('');
                setIsTransitioning(false);
            }, 600);
        }
    };

    const prevTestimonial = () => {
        if (!isTransitioning) {
            setDirection('prev');
            setIsTransitioning(true);
            
            setTimeout(() => {
                setOrderedTestimonials(prev => {
                    const newOrder = [...prev];
                    const last = newOrder.pop();
                    newOrder.unshift(last);
                    return newOrder;
                });
                setDirection('');
                setIsTransitioning(false);
            }, 600);
        }
    };

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        if (isTransitioning) return;
        setIsDragging(true);
        setStartX(e.pageX);
        setCurrentX(e.pageX);
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging || isTransitioning) return;
        setCurrentX(e.pageX);
        const offset = e.pageX - startX;
        setDragOffset(offset);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);
        
        const dragDistance = currentX - startX;
        const threshold = 50; // minimum drag distance to trigger slide

        if (Math.abs(dragDistance) > threshold) {
            if (dragDistance < 0) {
                // Dragged left (right to left) = next
                nextTestimonial();
            } else {
                // Dragged right (left to right) = prev
                prevTestimonial();
            }
        }
        
        setDragOffset(0);
        setStartX(0);
        setCurrentX(0);
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleMouseUp();
        }
    };

    // Mouse wheel scroll handler
    useEffect(() => {
        const handleWheel = (e) => {
            if (!containerRef.current || isTransitioning) return;
            
            const delta = e.deltaY || e.deltaX;
            
            if (Math.abs(delta) > 30) {
                e.preventDefault();
                
                if (delta > 0) {
                    nextTestimonial();
                } else {
                    prevTestimonial();
                }
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, [isTransitioning]);

    // Touch/Swipe handlers
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        
        const distance = touchStartX.current - touchEndX.current;
        const threshold = 50;

        if (Math.abs(distance) > threshold) {
            if (distance > 0) {
                nextTestimonial();
            } else {
                prevTestimonial();
            }
        }

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    const getPrevItem = () => orderedTestimonials[2];
    const getCurrentItem = () => orderedTestimonials[0];
    const getNextItem = () => orderedTestimonials[1];

    // Render testimonial card
    const TestimonialCard = ({ item, position }) => (
        <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 lg:p-10 border border-zinc-800 h-full flex flex-col shadow-2xl shadow-black/50 select-none">
            <p className="text-base sm:text-lg leading-relaxed text-white mb-auto">
                {item.text}
            </p>

            <div className="mt-8 pt-6 border-t border-zinc-800">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className={`${position === 'center' ? 'hidden sm:flex' : ''} ${position !== 'center' ? 'w-14 h-14' : 'w-16 h-16'} items-center justify-center bg-white rounded-full overflow-hidden flex-shrink-0`}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                height={200}
                                width={200}
                                className="w-full h-full object-cover pointer-events-none"
                                draggable="false"
                            />
                        </div>
                        <div>
                            <h4 className="font-semibold text-base text-white mb-1">
                                {item.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                                {item.position}
                            </p>
                            <p className="text-gray-500 text-xs">
                                {item.company}
                            </p>
                        </div>
                    </div>

                    <div className={`${position === 'center' ? 'hidden sm:flex' : 'hidden sm:flex'} items-center justify-center ${position === 'center' ? '' : ''} rounded-lg px-6 py-3 flex-shrink-0`}>
                        <Image
                            src={item.logo}
                            alt={item.company}
                            height={200}
                            width={200}
                            className="w-40 h-14 rounded-lg object-contain flex-shrink-0 pointer-events-none"
                            draggable="false"
                        />
                    </div>
                </div>

                {position === 'center' && (
                    <div className="sm:hidden flex justify-center mt-6 pt-6 border-t border-zinc-800">
                        <div className=" px-6 py-3">
                            <Image
                                src={item.logo}
                                alt={item.company}
                                height={200}
                                width={200}
                                className="w-40 h-14 rounded-lg object-contain flex-shrink-0 pointer-events-none"
                                draggable="false"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full bg-black text-white min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8">
            <style dangerouslySetInnerHTML={{
                __html: `
                    .carousel-container {
                        position: relative;
                    }

                    .carousel-track {
                        display: flex;
                        align-items: stretch;
                        justify-content: center;
                        gap: 1rem;
                        position: relative;
                        transition: transform 0.1s ease-out;
                    }

                    .carousel-track.dragging {
                        cursor: grabbing;
                        user-select: none;
                    }

                    /* Slide animations for NEXT */
                    @keyframes slideOutLeft {
                        from {
                            transform: translateX(0);
                            opacity: 1;
                        }
                        to {
                            transform: translateX(-120%);
                            opacity: 0;
                        }
                    }

                    @keyframes slideInFromRight {
                        from {
                            transform: translateX(120%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    /* Slide animations for PREV */
                    @keyframes slideOutRight {
                        from {
                            transform: translateX(0);
                            opacity: 1;
                        }
                        to {
                            transform: translateX(120%);
                            opacity: 0;
                        }
                    }

                    @keyframes slideInFromLeft {
                        from {
                            transform: translateX(-120%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    /* Apply animations based on direction and position */
                    .transitioning-next .card-center {
                        animation: slideOutLeft 0.6s ease-out forwards;
                    }

                    .transitioning-next .card-right {
                        animation: slideInFromRight 0.6s ease-out forwards;
                    }

                    .transitioning-prev .card-center {
                        animation: slideOutRight 0.6s ease-out forwards;
                    }

                    .transitioning-prev .card-left {
                        animation: slideInFromLeft 0.6s ease-out forwards;
                    }
                `
            }} />

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
                <div 
                    ref={containerRef}
                    className="carousel-container relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div 
                        className={`carousel-track ${direction === 'next' ? 'transitioning-next' : ''} ${direction === 'prev' ? 'transitioning-prev' : ''} ${isDragging ? 'dragging' : ''}`}
                        style={{
                            transform: isDragging ? `translateX(${dragOffset}px)` : 'translateX(0)',
                            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                        }}
                    >
                        {/* Left Card - Previous */}
                        <div
                            className="hidden lg:block w-[55%] cursor-pointer group -ml-[35%] flex-shrink-0 card-left pointer-events-none"
                        >
                            <div className="opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                                <TestimonialCard item={getPrevItem()} position="left" />
                            </div>
                        </div>

                        {/* Center Card - Active */}
                        <div className="w-full lg:w-[55%] z-10 flex-shrink-0 card-center">
                            <TestimonialCard item={getCurrentItem()} position="center" />
                        </div>

                        {/* Right Card - Next */}
                        <div
                            className="hidden lg:block w-[55%] cursor-pointer group -mr-[35%] flex-shrink-0 card-right pointer-events-none"
                        >
                            <div className="opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                                <TestimonialCard item={getNextItem()} position="right" />
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons - Mobile */}
                    {/* <div className="flex lg:hidden justify-center gap-3 mt-6">
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
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div> */}

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((item, index) => (
                            <button
                                key={item.id}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    getCurrentItem().id === item.id ? 'w-8 bg-white' : 'w-2 bg-gray-600 hover:bg-gray-500'
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

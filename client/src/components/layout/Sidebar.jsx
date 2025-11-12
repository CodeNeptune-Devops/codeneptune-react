'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Sidebar({
    mobileMenuRef,
    isMobileMenuOpen,
    isMobileServicesOpen,
    setIsMobileMenuOpen,
    setIsMobileServicesOpen,
    shouldUseScrolledColors,
    appDevelopment,
    webDevelopment,
    creativeCloud
}) {
    return (
        <div
            ref={mobileMenuRef}
            className={`lg:hidden z-[9999] fixed right-0 top-0 h-full w-[85%] max-w-sm shadow-2xl transition-transform duration-300 ease-in-out z-50 flex flex-col bg-white text-black ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            {/* Fixed Header with Close Button */}
            <div className={`flex justify-between items-center px-4 py-5 border-b flex-shrink-0 border-gray-200`}>

                 <Link href='/'>
                    <Image
                        className={`h-auto transition-all duration-300 w-20 lg:w-28`}
                        src={`/cn-logo.svg`}
                        alt="Code Neptune Logo"
                        height={200}
                        width={200}
                    />
                </Link>

                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={` rounded-full transition-colors ${shouldUseScrolledColors ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
                        }`}
                    aria-label="Close menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            {/* Scrollable Navigation Links */}
            <nav className='flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
                <Link href='/' className='hover:text-blue-500 py-2 block'>Home</Link>
                <Link href='/about' className='hover:text-blue-500 py-2 block'>About</Link>

                {/* Mobile Services Dropdown */}
                <div className='flex flex-col'>
                    <button
                        className='hover:text-blue-500 flex items-center justify-between py-2'
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                        Services
                        <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Mobile Services Submenu */}
                    <div className={`pl-4 space-y-2 transition-all duration-200 ${isMobileServicesOpen
                        ? 'max-h-[2000px] opacity-100'
                        : 'max-h-0 opacity-0 overflow-hidden'
                        }`}>
                        <div className='py-2'>
                            <h4 className='text-blue-500 font-semibold text-sm mb-2'>App Development</h4>
                            {appDevelopment.map((service) => (
                                <Link key={service.name} href={service.href} className="block py-1 text-sm hover:text-blue-500">
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                        <div className='py-2'>
                            <h4 className='text-blue-500 font-semibold text-sm mb-2'>Web Development</h4>
                            {webDevelopment.map((service) => (
                                <Link key={service.name} href={service.href} className="block py-1 text-sm hover:text-blue-500">
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                        <div className='py-2'>
                            <h4 className='text-blue-500 font-semibold text-sm mb-2'>Creative & Cloud</h4>
                            {creativeCloud.map((service) => (
                                <Link key={service.name} href={service.href} className="block py-1 text-sm hover:text-blue-500">
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* <Link href='/about' className='hover:text-blue-500 py-2 block'>Solutions</Link> */}
                <Link href='/about' className='hover:text-blue-500 py-2 block'>Blog</Link>
                <Link href='/about' className='hover:text-blue-500 py-2 block'>Contact Us</Link>
            </nav>

            {/* Fixed Footer with Contact Button */}
            <div className={`p-4 border-t flex-shrink-0 ${shouldUseScrolledColors ? 'border-gray-200' : 'border-gray-700'
                }`}>
                <button
                    className='text-white px-6 py-3 rounded-full font-bold text-sm w-full transition-all duration-300 ease-in-out'
                    style={{
                        background: 'linear-gradient(to right,#4A3AFF 0%, #744EDF 100%)',
                        border: '0.67px solid #897FFF',
                        boxShadow: '0px 4px 5.33px rgba(223, 229, 255, 0.3), 0px 1.33px 1.33px rgba(255, 255, 255, 0.35%)'
                    }}
                >
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Sidebar
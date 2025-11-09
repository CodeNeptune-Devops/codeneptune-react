import ContactButton from '@/animatedComponents/button/GlowButton';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { GrLinkUp } from "react-icons/gr"
import { IoIosArrowDown } from "react-icons/io"
import { usePathname } from 'next/navigation';

function Header() {
    const pathname = usePathname();
    const isUIUXPage = pathname === '/ui-ux-design-services';
    
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClickedOpen, setIsClickedOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Solutions', href: '/about' },
        { name: 'Blog', href: '/about' },
    ];

    const servicesDropdown = [
        { name: 'Mobile App Development', href: '/mobile-app-development-company' },
        { name: 'Android App Development', href: '/android-app-development-company-in-chennai' },
        { name: 'Flutter App', href: '/flutter-app-development-company-in-india' },
        { name: 'Web Development', href: '/website-development-company' },
        { name: 'Ecommerce Web Development', href: '/mobile-app-development-company' },
        { name: 'Devops', href: '/mobile-app-development-company' },
        { name: 'UI UX', href: '/ui-ux-design-services' },
    ];

    const appDevelopment = servicesDropdown.slice(0, 3);
    const webDevelopment = servicesDropdown.slice(3, 5);
    const creativeCloud = servicesDropdown.slice(5, 7);

    // Handle clicks outside dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Handle desktop dropdown
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsServicesOpen(false);
                setIsClickedOpen(false);
            }

            // Handle mobile menu
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                // Don't close mobile services dropdown if clicking within mobile menu
                const isClickingHamburger = event.target.closest('.hamburger-button');
                if (!isClickingHamburger) {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine if we should use "scrolled" color styles (white bg, black text)
    const shouldUseScrolledColors = isUIUXPage || isScrolled;

    return (
        <header className={`fixed top-0 w-full z-[999999] bg-transparent transition-all duration-300 py-2`}>
            <div className={`max-w-7xl mx-auto w-full flex justify-between items-center border rounded-full transition-all duration-300 ${
                    isScrolled
                        ? 'py-3 px-2 shadow-lg bg-white/80 backdrop-blur-md border-white/20 text-black'
                        : 'py-3 px-3 border-[#D8D8D8]'
                } ${shouldUseScrolledColors ? 'text-black bg-white/80 backdrop-blur-md border-white/20' : 'text-white'}`}>
                <Link href='/'>
                    <Image
                        className={`h-auto transition-all duration-300 ${
                                isScrolled
                                    ? 'w-20 lg:w-28'
                                    : 'w-24 lg:w-40'
                            }`}
                        src={`${shouldUseScrolledColors ? '/cn-logo.svg' : '/cn-footer-logo.svg'}`}
                        alt="Code Neptune Logo"
                        height={200}
                        width={200}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex justify-center items-center gap-5 md:gap-10'>
                    <Link href='/' className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent'>Home</Link>
                    <Link href='/about' className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent'>About</Link>

                    {/* Services Dropdown - Third Position */}
                    <div
                        ref={dropdownRef}
                        className='relative group cursor-pointer'
                        onMouseEnter={() => !isClickedOpen && setIsServicesOpen(true)}
                        onMouseLeave={() => !isClickedOpen && setIsServicesOpen(false)}
                    >
                        <button
                            className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent flex items-center gap-1 cursor-pointer'
                            onClick={(e) => {
                                e.preventDefault();
                                const newState = !isServicesOpen;
                                setIsServicesOpen(newState);
                                setIsClickedOpen(newState);
                            }}
                        >
                            Services
                            <IoIosArrowDown className={`w-4 h-4 transition-transform duration-200 ${shouldUseScrolledColors ? 'text-black' : 'text-white'} ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu - Centered */}
                        <div className={`fixed top-[70px] left-1/2 transform -translate-x-1/2 max-w-3xl mx-auto w-full border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 ${isServicesOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                            } ${shouldUseScrolledColors ? 'bg-white text-black' : 'bg-black text-white'}`}>
                            <div className="flex flex-col md:flex-row md:items-stretch w-full gap-4">
                                <div className="flex-1 flex flex-col justify-start items-start gap-6 p-4">
                                    <div className="flex flex-col justify-start items-start gap-3">
                                        <h3 className='font-semibold text-lg text-blue-500'>App Development</h3>
                                        <div className="flex flex-col gap-3">
                                            {appDevelopment.map((service) => (
                                                <Link key={service.name} href={service.href} className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent text-sm">
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-start items-start gap-3">
                                        <h3 className='font-semibold text-lg text-blue-500'>Creative & Cloud</h3>
                                        <div className="flex flex-col gap-3">
                                            {creativeCloud.map((service) => (
                                                <Link key={service.name} href={service.href} className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent text-sm">
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col gap-3 p-4">
                                    <h3 className='font-semibold text-lg text-blue-500'>Design Services</h3>
                                    <div className="flex flex-col gap-3">
                                        {webDevelopment.map((service) => (
                                            <Link key={service.name} href={service.href} className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent text-sm">
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col justify-start items-start gap-3 bg-[#020796] text-white p-6 rounded-r-lg">
                                    <h3 className='font-semibold text-2xl'>WHAT WE DO</h3>
                                    <p className="mb-4 text-sm">
                                        Next-generation assessments to increase self-awareness and drive behavior change.
                                    </p>

                                    {/* push button to bottom so layout feels balanced */}
                                    <div className="mt-auto">
                                        <button className="px-4 py-2 bg-green-500 text-white rounded flex justify-start items-center gap-3 cursor-pointer">
                                            Get a free quote
                                            <GrLinkUp className='rotate-45' />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Link href='/about' className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent'>Solutions</Link>
                    <Link href='/about' className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent'>Blog</Link>
                </nav>

                <ContactButton isScrolled={shouldUseScrolledColors}/>

                {/* Mobile Hamburger Menu */}
                <button
                    className='md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 hamburger-button'
                    onClick={() => {
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                        // Reset mobile services dropdown when toggling mobile menu
                        if (!isMobileMenuOpen) {
                            setIsMobileServicesOpen(false);
                        }
                    }}
                >
                    <span className={`w-6 h-0.5 transition-all duration-300 ${shouldUseScrolledColors ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 transition-all duration-300 ${shouldUseScrolledColors ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 transition-all duration-300 ${shouldUseScrolledColors ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`md:hidden fixed left-0 w-full border-t border-gray-200 shadow-lg rounded-b-lg transition-all duration-300 ${shouldUseScrolledColors ? 'top-[60px] bg-white text-black' : 'top-[80px] bg-black text-white shadow-gray-900'
                    } ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                style={{
                    maxHeight: 'calc(100vh - 100px)',
                    overflowY: 'auto'
                }}>
                <nav className='flex flex-col p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
                    <Link href='/' className='hover:text-blue-500 py-2'>Home</Link>
                    <Link href='/about' className='hover:text-blue-500 py-2'>About</Link>

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
                                ? 'max-h-screen opacity-100 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'
                                : 'max-h-0 opacity-0 overflow-hidden'
                            }`}
                            style={{
                                maxHeight: isMobileServicesOpen ? 'calc(100vh - 200px)' : '0'
                            }}>
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

                    <Link href='/about' className='hover:text-blue-500 py-2'>Solutions</Link>
                    <Link href='/about' className='hover:text-blue-500 py-2'>Blog</Link>

                    {/* Mobile Contact Button */}
                    <button
                        className='text-white px-6 py-3 rounded-full font-bold text-sm mt-4 w-full transition-all duration-300 ease-in-out'
                        style={{
                            background: 'linear-gradient(to right,#4A3AFF 0%, #744EDF 100%)',
                            border: '0.67px solid #897FFF',
                            boxShadow: '0px 4px 5.33px rgba(223, 229, 255, 0.3), 0px 1.33px 1.33px rgba(255, 255, 255, 0.35%)'
                        }}
                    >
                        Contact Us
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
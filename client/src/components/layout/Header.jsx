import ContactButton from '@/animatedComponents/button/GlowButton';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { GrLinkUp } from "react-icons/gr"
import { IoIosArrowDown } from "react-icons/io"
import { usePathname } from 'next/navigation';
import { ArrowRight, Star } from 'lucide-react';
import Sidebar from './Sidebar';
import ContactModal from '@/modals/ContactModal';

function Header() {
    const pathname = usePathname();
    const isUIUXPage = pathname === '/ui-ux-design-services';

    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClickedOpen, setIsClickedOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        { name: 'Flutter App Development', href: '/flutter-app-development-company-in-india' },
        { name: 'Web Development', href: '/website-development-company' },
        { name: 'Ecommerce Web Development', href: '/ecommerce-website-development-company' },
        { name: 'Devops', href: '/devops-consulting-company' },
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

    const closeDropdown = () => {
        setIsServicesOpen(false);
        setIsClickedOpen(false);
    };

    // Determine if we should use "scrolled" color styles (white bg, black text)
    const shouldUseScrolledColors = isUIUXPage || isScrolled;

    return (
        <header className={`fixed top-0 w-full z-[99999999] bg-transparent transition-all duration-300 py-2 px-2 lg:px-0`}>
            <div className={`max-w-7xl mx-auto w-full flex justify-between items-center border rounded-full transition-all duration-300 ${isScrolled
                ? 'py-3 px-2 shadow-lg bg-white/80 backdrop-blur-md border-white/20 text-black'
                : 'py-3 px-3 border-[#D8D8D8]'
                } ${shouldUseScrolledColors ? 'text-black bg-white/80 backdrop-blur-md border-white/20' : 'text-white'}`}>
                <Link href='/'>
                    <Image
                        className={`h-auto transition-all duration-300 ${isScrolled
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
                <nav className='hidden lg:flex justify-center items-center gap-5 md:gap-10'>
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
                        <div className={`fixed top-[60px] left-1/2 transform -translate-x-1/2 max-w-7xl mx-auto w-full  z-[999] transition-all duration-200 ${isScrolled ? 'py-4' : 'py-7'} ${isServicesOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                            } `}>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white text-black border border-gray-200 rounded-lg shadow-lg">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                                    {/* Left Column - Stats Cards */}
                                    <div className="lg:col-span-3 space-y-4">
                                        {/* 100+ Clients Card */}
                                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                                                100+ Clients
                                            </h2>
                                            <p className="text-gray-600 text-sm mb-4">
                                                Our aim is to make products that bring people closer through digital.
                                            </p>
                                            <button onClick={() => setIsModalOpen(true)} className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all group cursor-pointer">
                                                Work with us
                                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>

                                        {/* Global Presence Card */}
                                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                                                Global Presence
                                            </h2>
                                            <p className="text-gray-600 text-sm mb-4">
                                                Serving clients in India, UK, USA
                                            </p>
                                            <Link onClick={closeDropdown} href={'#locations'} className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all group cursor-pointer">
                                                View Locations
                                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Middle Column - Services */}
                                    <div className="lg:col-span-5 space-y-4">
                                        {/* Row 1: Mobile Apps and Creative & Cloud */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Mobile Apps Section */}
                                            <div className=" rounded-xl p-5">
                                                <h3 className="text-lg font-bold text-blue-600 mb-3">Mobile Apps</h3>
                                                <ul className="space-y-2">
                                                    {appDevelopment.map((item, index) => (
                                                        <li key={index}>
                                                            <Link onClick={closeDropdown} href={item.href} className="text-gray-700 text-sm hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Creative & Cloud Section */}
                                            <div className=" rounded-xl p-5">
                                                <h3 className="text-lg font-bold text-blue-600 mb-3">Creative & Cloud</h3>
                                                <ul className="space-y-2">
                                                    {creativeCloud.map((item, index) => (
                                                        <li key={index}>
                                                            <Link onClick={closeDropdown} href={item.href} className="text-gray-700 text-sm hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Row 2: Web Development (full width) */}
                                        <div className=" rounded-xl p-5">
                                            <h3 className="text-lg font-bold text-blue-600 mb-3">Web Development</h3>
                                            <ul className="space-y-2">
                                                {webDevelopment.map((item, index) => (
                                                    <li key={index}>
                                                        <Link onClick={closeDropdown} href={item.href} className="text-gray-700 text-sm hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Right Column - Hero Card */}
                                    <div className="lg:col-span-4 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-xl p-6 text-white flex flex-col justify-between">
                                        {/* Badge/Logo */}
                                        <div className="flex justify-center mb-0">
                                            <div className=" bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                                                <div className="flex items-center gap-1">
                                                    <Image
                                                        src={'/star-header.svg'}
                                                        alt='Star'
                                                        height={70}
                                                        width={70}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Heading */}
                                        <div className="text-center mb-4">
                                            <h2 className="text-2xl font-bold mb-3">
                                                Work with Code Neptune
                                            </h2>
                                            <p className="text-white text-opacity-90 text-sm leading-relaxed">
                                                Experience the excellence of our dedicated professionals who are adept in delivering top-notch solutions.
                                            </p>
                                        </div>

                                        {/* CTA Button */}
                                        <button onClick={() => setIsModalOpen(true)} className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full flex items-center justify-center gap-2 hover:gap-3 transition-all hover:shadow-lg group mx-auto cursor-pointer">
                                            Connect with us
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* <Link href='/about' className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent'>Solutions</Link> */}
                    <Link href='https://www.codeneptune.com/blog/' className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent'>Blog</Link>
                    <Link href='/contact' className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent'>Contact Us</Link>
                </nav>

                <ContactButton
                    isScrolled={shouldUseScrolledColors}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />

                {/* Mobile Hamburger Menu */}
                <button
                    className='lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 hamburger-button'
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

            {/* Mobile Offcanvas Menu */}
            {/* Mobile Menu Overlay */}
            <div
                className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${isMobileMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Offcanvas Menu */}
            <Sidebar
                mobileMenuRef={mobileMenuRef}
                isMobileMenuOpen={isMobileMenuOpen}
                isMobileServicesOpen={isMobileServicesOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                setIsMobileServicesOpen={setIsMobileServicesOpen}
                shouldUseScrolledColors={shouldUseScrolledColors}
                appDevelopment={appDevelopment}
                webDevelopment={webDevelopment}
                creativeCloud={creativeCloud}
            />

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </header>
    )
}

export default Header
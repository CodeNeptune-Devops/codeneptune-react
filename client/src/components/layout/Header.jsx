import ContactButton from '@/animatedComponents/button/GlowButton';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation';
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('./Sidebar'), {
  ssr: false,
  loading: () => null, // optional
});

const ContactModal = dynamic(() => import('@/modals/ContactModal'), {
  ssr: false,
  loading: () => null, // optional
});

const ServicesDropdown = dynamic(() => import('./ServicesDropDown'), {
  ssr: false,
  loading: () => null, // optional
});

function Header() {
    const pathname = usePathname();
    const specialPages = ['/ui-ux-design-services', '/privacy-policy', '/terms-and-conditions'];
    const isUIUXPage = specialPages.includes(pathname);


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

        // 🔥 FIX: Run once on mount (for refresh mid-scroll)
        handleScroll();

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
                            ? 'w-24 lg:w-28'
                            : 'w-28 lg:w-40'
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
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${shouldUseScrolledColors ? 'text-black' : 'text-white'} ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu - Centered */}
                         <ServicesDropdown 
                        isScrolled={isScrolled}
                        isServicesOpen={isServicesOpen}
                        setIsModalOpen={setIsModalOpen}
                        closeDropdown={closeDropdown}
                        appDevelopment={appDevelopment}
                        webDevelopment={webDevelopment}
                        creativeCloud={creativeCloud}
                        />
                    </div>

                    {/* <Link href='/about' className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent'>Solutions</Link> */}
                    <Link href='/blog' className='hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent'>Blog</Link>
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
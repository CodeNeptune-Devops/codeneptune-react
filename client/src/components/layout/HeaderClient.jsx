// src/components/layout/HeaderClient.jsx
'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Lazy load ALL heavy components with no SSR
const ContactButton = dynamic(() => import('@/animatedComponents/button/GlowButton'), { 
  ssr: false, 
  loading: () => <div className="w-24 h-10" /> // placeholder to prevent layout shift
});
const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });
const ContactModal = dynamic(() => import('@/modals/ContactModal'), { ssr: false });
const ServicesDropdown = dynamic(() => import('./ServicesDropDown'), { ssr: false });

// Simple SVG chevron instead of lucide-react (saves ~50KB)
const ChevronDown = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const HeaderClient = ({ navLinks = [], appDevelopment = [], webDevelopment = [], creativeCloud = [] }) => {
  const pathname = usePathname();

  const specialPages = useMemo(() => ['/ui-ux-design-services', '/privacy-policy', '/terms-and-conditions'], []);
  const isUIUXPage = useMemo(() => specialPages.includes(pathname), [pathname, specialPages]);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClickedOpen, setIsClickedOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Delay loading heavy components until after initial render
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const scrollTimeout = useRef(null);

  const closeDropdown = useCallback(() => {
    setIsServicesOpen(false);
    setIsClickedOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      const next = !prev;
      if (!next) {
        setIsMobileServicesOpen(false);
      }
      if (next && !showSidebar) {
        setShowSidebar(true);
      }
      return next;
    });
  }, [showSidebar]);

  // Optimized scroll handler with debouncing
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handlers - optimized
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsServicesOpen(false);
        setIsClickedOpen(false);
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        const isClickingHamburger = target.closest?.('.hamburger-button');
        if (!isClickingHamburger) {
          setIsMobileMenuOpen(false);
          setIsMobileServicesOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Load dropdown on hover/interaction
  const handleServicesHover = useCallback(() => {
    if (!showDropdown) setShowDropdown(true);
    if (!isClickedOpen) setIsServicesOpen(true);
  }, [showDropdown, isClickedOpen]);

  const shouldUseScrolledColors = isUIUXPage || isScrolled;

  return (
    <header className="fixed top-0 w-full z-[99999999] bg-transparent transition-all duration-300 py-2 px-2 lg:px-0">
      <div className={`max-w-7xl mx-auto w-full flex justify-between items-center border rounded-full transition-all duration-300
        ${isScrolled ? 'py-3 px-2 shadow-lg bg-white/80 backdrop-blur-md border-white/20 text-black' : 'py-3 px-3 border-[#D8D8D8]'}
        ${shouldUseScrolledColors ? 'text-black bg-white/80 backdrop-blur-md border-white/20' : 'text-white'}`}>
        
        <Link href="/" aria-label="Home">
          <Image
            className={`h-auto transition-all duration-300 ${isScrolled ? 'w-24 lg:w-28' : 'w-28 lg:w-40'}`}
            src={shouldUseScrolledColors ? '/cn-logo.svg' : '/cn-footer-logo.svg'}
            alt="Code Neptune Logo"
            height={200}
            width={200}
            priority
            fetchPriority="high"
          />
        </Link>

        <nav className="hidden lg:flex justify-center items-center gap-5 md:gap-10" aria-label="Primary">
          <Link href="/" className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent">
            Home
          </Link>
          <Link href="/about-us" className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent">
            About
          </Link>

          <div
            ref={dropdownRef}
            className="relative group cursor-pointer"
            onMouseEnter={handleServicesHover}
            onMouseLeave={() => !isClickedOpen && setIsServicesOpen(false)}
          >
            <button
              className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent flex items-center gap-1 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                if (!showDropdown) setShowDropdown(true);
                const newState = !isServicesOpen;
                setIsServicesOpen(newState);
                setIsClickedOpen(newState);
              }}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${shouldUseScrolledColors ? 'text-black' : 'text-white'} ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <ServicesDropdown
                isScrolled={isScrolled}
                isServicesOpen={isServicesOpen}
                setIsModalOpen={setIsModalOpen}
                closeDropdown={closeDropdown}
                appDevelopment={appDevelopment}
                webDevelopment={webDevelopment}
                creativeCloud={creativeCloud}
              />
            )}
          </div>

          <Link href="/blog" className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent">
            Blog
          </Link>
          <Link href="/contact-us" className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent">
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:block">
          <ContactButton 
            isScrolled={shouldUseScrolledColors} 
            isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
          />
        </div>

        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 hamburger-button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${shouldUseScrolledColors ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${shouldUseScrolledColors ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${shouldUseScrolledColors ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${isMobileMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      {showSidebar && (
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
      )}

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default React.memo(HeaderClient);
// src/components/layout/HeaderClient.jsx
'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactButton from '@/animatedComponents/button/GlowButton';

// dynamic imports for heavy components (already used in your code)
const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false, loading: () => null });
const ContactModal = dynamic(() => import('@/modals/ContactModal'), { ssr: false, loading: () => null });
const ServicesDropdown = dynamic(() => import('./ServicesDropDown'), { ssr: false, loading: () => null });

// Lazy-load icon to reduce initial parse cost (small micro-optim)
const ChevronDown = dynamic(() => import('lucide-react').then(mod => mod.ChevronDown), { ssr: false, loading: () => null });

// Keep z-index values and styles stable (no inline object recreation)
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

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown helper (stable reference)
  const closeDropdown = useCallback(() => {
    setIsServicesOpen(false);
    setIsClickedOpen(false);
  }, []);

  // Toggle mobile menu (memoized)
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      const next = !prev;
      if (!next) {
        setIsMobileServicesOpen(false);
      }
      return next;
    });
  }, []);

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;

      // Desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsServicesOpen(false);
        setIsClickedOpen(false);
      }

      // Mobile menu (only close when click outside mobile menu and not on hamburger)
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        const isClickingHamburger = target.closest && target.closest('.hamburger-button');
        if (!isClickingHamburger) {
          setIsMobileMenuOpen(false);
          setIsMobileServicesOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll detection (mounted only)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link href="/" className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent">Home</Link>
          <Link href="/about" className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent">About</Link>

          <div
            ref={dropdownRef}
            className="relative group cursor-pointer"
            onMouseEnter={() => !isClickedOpen && setIsServicesOpen(true)}
            onMouseLeave={() => !isClickedOpen && setIsServicesOpen(false)}
          >
            <button
              className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent flex items-center gap-1 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
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

          <Link href="/blog" className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent">Blog</Link>
          <Link href="/contact" className="hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent">Contact Us</Link>
        </nav>

        {/* Contact button - keep as imported component */}
        <div>
          {/* Keep this component as-is, it can be dynamic too if heavy */}
          <React.Suspense fallback={null}>
            <ContactButton isScrolled={shouldUseScrolledColors} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </React.Suspense>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${isMobileMenuOpen ? 'opacity-50 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

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

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default React.memo(HeaderClient);

import ShinyText from '@/animatedTexts/ShinyText/ShinyText';
import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';

function Footer() {

  const socialLinks = [
    { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com" },
    { icon: <FaFacebookF />, label: "Instagram", url: "https://www.facebook.com" },
    { icon: <FaXTwitter />, label: "Instagram", url: "https://www.twitter.com" },
    { icon: <FaYoutube />, label: "Instagram", url: "https://www.youtube.com" },
  ];

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/about' },
    { label: 'Privacy Policy', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const services = [
    { label: 'Mobile App Development', href: '/mobile-app-development-company' },
    { label: 'Android App Development', href: '/android-app-development-company-in-chennai' },
    { label: 'Flutter App Development', href: '/flutter-app-development-company-in-india' },
    { label: 'Web Development', href: '/website-development-company' },
    { label: 'UI UX', href: '/ui-ux-design-services' },
    { label: 'Ecommerce Web Development', href: '/ecommerce-website-development-company' },
    { label: 'Devops', href: '/devops-consulting-company' },
    
  ];
  const educationData = [
    { name: "Email Marketing", href: "#" },
    { name: "Social Media Marketing", href: "#" },
    { name: "Search Engine Optimization", href: "#" },
    { name: "Product Development", href: "#" },
    { name: "Web Development", href: "#" },
  ];

  const businessData = [
    { name: "Digital Marketing Agency", href: "#" },
    { name: "SEO Agency", href: "#" },
    { name: "PPC Agency", href: "#" },
    { name: "Content Marketing Agency", href: "#" },
    { name: "Internet Marketing Agency", href: "#" },
    { name: "Locations", href: "#" },
    { name: "Industries We Serve", href: "#" },
  ];

  const developerAndItData = [
    { name: "Internet Marketing", href: "#" },
    { name: "Content Marketing", href: "#" },
    { name: "Social Media", href: "#" },
    { name: "Web Design", href: "#" },
    { name: "SEO", href: "#" },
    { name: "PPC", href: "#" },
    { name: "Amazon", href: "#" },
  ];

  const companyData = [
    { name: "About us", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "SEO Checker", href: "#" },
    { name: "Tools", href: "#" },
    { name: "Marketing Guides", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <footer className="w-full flex flex-col justify-center items-center z-[52] ">


      <div className="w-full bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto w-full px-4 pt-20 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center items-start justify-items-center gap-5">

            <div className="flex col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-1 flex-col justify-start items-start gap-8 w-full">
              <img src="/cn-footer-logo.svg" alt="Logo" className="w-48 h-full" />
              <div className="flex flex-col justify-start items-start text-[#CCCCCC] gap-5">

                <p className='text-sm'>
                  Code Neptune is a leading web and mobile app development company in Chennai offering UI/UX design, DevOps, eCommerce, and digital transformation services.
                </p>

              </div>
              {/* <div className="flex justify-start items-center gap-1">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2 rounded-full hover:bg-white hover:text-black text-xl transition-colors duration-300"
                    aria-label={`Open ${link.url}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div> */}
            </div>

            <div className="flex col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 flex-col justify-start items-start gap-5 w-full lg:w-fit">
              <h5 className="text-lg">Quick Links</h5>
              <div className="flex flex-col justify-start text-[#CCCCCC] items-start gap-3">
                {quickLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 flex-col justify-start items-start gap-5 w-full">
              <h5 className="text-lg">Services</h5>
              <div className="flex flex-col justify-start items-start text-[#CCCCCC] gap-3">
                {services.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 flex-col justify-start items-start gap-5 w-full">
              <h5 className="text-lg">Reach Us</h5>
              <div className="flex flex-col justify-start items-start text-[#CCCCCC] gap-3">
                <Link
                  className="text-sm"
                  href="https://maps.app.goo.gl/r6XPgFke25c1gTdk9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  No. 624, 3rd Floor – S2, Khivraj Building, Anna Salai, Chennai – 600 006
                </Link>

                <div className="flex flex-col justify-start items-start gap-3">

                  <Link
                    href="mailto:info@codeneptune.com"
                    className="cursor-pointer hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent"
                  >
                    info@codeneptune.com
                  </Link>

                  <Link className="text-sm hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent" href="tel:+916382958105">
                    +91 63829 58105
                  </Link>
                  <Link className="text-sm hover:bg-gradient-to-r hover:from-[#4A3AFF] hover:to-[#744EDF] hover:bg-clip-text hover:text-transparent" href="tel:+919841600980">
                    +91 98416 00980
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full bg-[#1D1D1D] text-white flex justify-center items-center py-8">
        <p className="text-xs">© Copyright <span className='font-bold'>CodeNeptune 2025</span>. All Rights Reserved </p>
      </div>
    </footer>
  )
}

export default Footer
"use client"

import React from 'react'
import partner1 from '../assets/trusted-partners/partner-1.webp'
import partner2 from '../assets/trusted-partners/partner-2.webp'
import partner3 from '../assets/trusted-partners/partner-3.webp'
import partner4 from '../assets/trusted-partners/partner-4.webp'
import partner5 from '../assets/trusted-partners/partner-5.webp'
import partner6 from '../assets/trusted-partners/partner-6.webp'
import partner7 from '../assets/trusted-partners/partner-7.webp'
import partner8 from '../assets/trusted-partners/partner-8.webp'
import partner9 from '../assets/trusted-partners/partner-9.webp'
import partner10 from '../assets/trusted-partners/partner-10.webp'
import Image from 'next/image';
import SectionTitle from './titles/SectionTitle'

function OurTrustedPartners({ infiniteScroll = true }) {
  const companies = [
    { name: 'Company 1', logo: partner1 },
    { name: 'Company 1', logo: partner2 },
    { name: 'Company 1', logo: partner3 },
    { name: 'Company 1', logo: partner4 },
    { name: 'Company 1', logo: partner5 },
    { name: 'Company 1', logo: partner6 },
    { name: 'Company 1', logo: partner7 },
    { name: 'Company 1', logo: partner8 },
    { name: 'Company 1', logo: partner9 },
    { name: 'Company 1', logo: partner10 },
  ];

  return (
    <section className="px-4 pt-16">
      <div className="max-w-7xl w-full mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <SectionTitle 
          title='Trusted by Global Businesses and Emerging Startups Alike'
          description='At Code Neptune, our success grows with the trust of our clients. We work closely with leading enterprises and fast-growing startups to create solutions that inspire progress and innovation. Each partnership is built on collaboration, creativity, and measurable impact that lasts.'
          />
        </div>

        {/* Single Row Infinite Scroll */}
        {infiniteScroll ? (
          <div className="overflow-hidden w-full">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scroll-infinite {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .scroll-container {
                animation: scroll-infinite 30s linear infinite;
                will-change: transform;
              }
              .scroll-container:hover {
                animation-play-state: paused;
              }
            `}} />
            <div
              className="scroll-container inline-flex items-center whitespace-nowrap"
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 px-8"
                  style={{ minWidth: '240px' }}
                >
                  <div className="flex items-center justify-center w-48 h-24 p-4  transition-shadow duration-300">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                      width={200}
                      height={100}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center max-w-7xl mx-auto">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300"
              >
                <div className="w-32 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-3">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                    width={128}
                    height={80}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default OurTrustedPartners
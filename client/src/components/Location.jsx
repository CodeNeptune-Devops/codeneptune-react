"use client";

import React, { useState } from "react";
import india from '../assets/locations/india.webp'
import canada from '../assets/locations/canada.webp'
import uk from '../assets/locations/uk.webp'
import Image from "next/image";

function Location() {
  const [activeTab, setActiveTab] = useState("India");

  const data = [
    {
      label: "India",
      addressLine:
        "No. 624, 3rd Floor – S2, Khivraj Building, Anna Salai, Chennai – 600 006",
      numbers: ["+91 63829 58105", "+91 98416 00980"],
      jobs: "careers@codeneptune.com",
      image: india,
    },
    {
      label: "Canada",
      addressLine: "110 Parkway Forest Dr Suite #707 Toronto ON M2J 1L7",
      jobs: "careers@codeneptune.com",
      image: canada,
    },
    {
      label: "United Kingdom",
      addressLine: "128, City Road, London, EC1V 2NX, UNITED KINGDOM",
      numbers: ["+44 74231 34945"],
      jobs: "careers@codeneptune.com",
     image: uk,
    },
  ];

  const activeLocation = data.find((item) => item.label === activeTab);

  const formatPhoneForHref = (num) => num.replace(/\s+/g, "");

  return (
    <div id="locations" className="w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-start items-stretch lg:justify-center gap-5 lg:gap-8">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[50%] flex flex-col justify-start lg:justify-center items-start gap-2 text-xs sm:text-sm">
          {/* Tabs */}
          <div className="w-full flex justify-start items-end gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-5 h-[3.5rem] sm:h-[4rem] md:h-[5rem] overflow-x-auto pb-2">
            {data.map((item, index) => (
              <h3
                onClick={() => setActiveTab(item.label)}
                key={index}
                className={`font-bold uppercase cursor-pointer transition-all duration-400 whitespace-nowrap flex-shrink-0 ${
                  activeTab === item.label
                    ? "text-3xl sm:text-4xl md:text-5xl text-[#0072FF]"
                    : "text-base sm:text-lg md:text-xl text-gray-400 hover:text-black"
                }`}
              >
                {item.label}
              </h3>
            ))}
          </div>

          {/* Address */}
          <p className="text-gray-700 mb-2 text-sm sm:text-base">{activeLocation.addressLine}</p>

          {/* Phone numbers */}
          {activeLocation.numbers && activeLocation.numbers.length > 0 && (
            <div className="w-full flex flex-wrap justify-start items-center gap-2">
              <p className="font-medium uppercase text-xs sm:text-sm">Call :</p>
              {activeLocation.numbers.map((num, index) => (
                <a
                  key={index}
                  href={`tel:${formatPhoneForHref(num)}`}
                  className="hover:text-[#0072FF] text-xs sm:text-sm"
                >
                  {num}
                </a>
              ))}
            </div>
          )}

          {/* Jobs */}
          <div className="w-full flex flex-wrap justify-start items-center gap-2">
            <p className="font-medium uppercase text-xs sm:text-sm">Jobs :</p>
            <a
              href={`mailto:${activeLocation.jobs}`}
              className="hover:text-[#0072FF] text-xs sm:text-sm break-all"
            >
              {activeLocation.jobs}
            </a>
          </div>

          {/* Enquiry */}
          <div className="w-full flex flex-wrap justify-start items-center gap-2">
            <p className="font-medium uppercase text-xs sm:text-sm">Enquiry :</p>
            <a
              href="mailto:info@codeneptune.com"
              className="hover:text-[#0072FF] text-xs sm:text-sm break-all"
            >
              info@codeneptune.com
            </a>
          </div>
        </div>

         {/* RIGHT SIDE IMAGE */}
        <div className="w-full flex justify-center items-center lg:w-1/2 relative overflow-hidden mt-4 lg:mt-0">
          <div 
            key={activeTab}
            className="w-full flex justify-center"
            style={{
              animation: 'fadeInUp 0.7s ease-out',
            }}
          >
            <Image
              src={activeLocation.image}
              alt={activeLocation.label}
              height={300}
              width={300}
              className="rounded-lg w-full h-[14rem] sm:h-[16rem] md:h-[18rem] object-cover"
            />
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}} />
      </div>
    </div>
  );
}

export default Location;
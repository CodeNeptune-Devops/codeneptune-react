"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import india from "../assets/locations/india.webp";
import canada from "../assets/locations/canada.webp";
import uk from "../assets/locations/uk.webp";

// ✅ Dynamically import Framer Motion only on the client
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

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
      addressLine: "Rockingham House, Broad Ln, Sheffield Postcode: S1 3PD",
      numbers: ["+44 74231 34945"],
      jobs: "careers@codeneptune.com",
      image: uk,
    },
  ];

  const activeLocation = data.find((item) => item.label === activeTab);

  const formatPhoneForHref = (num) => num.replace(/\s+/g, "");

  return (
    <div className="w-full pt-24">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-start items-stretch lg:justify-center gap-3">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-start gap-2 text-sm">
          {/* Tabs */}
          <div className="w-full flex justify-start items-end gap-6 mb-5 h-[5rem]">
            {data.map((item, index) => (
              <h3
                onClick={() => setActiveTab(item.label)}
                key={index}
                className={`font-bold uppercase cursor-pointer transition-all duration-400 ${
                  activeTab === item.label
                    ? "text-5xl text-[#0072FF]"
                    : "text-xl text-gray-400 hover:text-black"
                }`}
              >
                {item.label}
              </h3>
            ))}
          </div>

          {/* Address */}
          <p className="text-gray-700 mb-2">{activeLocation.addressLine}</p>

          {/* Phone numbers */}
          {activeLocation.numbers && activeLocation.numbers.length > 0 && (
            <div className="w-full flex flex-wrap justify-start items-center gap-2">
              <p className="font-medium uppercase">Call :</p>
              {activeLocation.numbers.map((num, index) => (
                <Link
                  key={index}
                  href={`tel:${formatPhoneForHref(num)}`}
                  className="hover:text-[#0072FF]"
                >
                  {num}
                </Link>
              ))}
            </div>
          )}

          {/* Jobs */}
          <div className="w-full flex justify-start items-center gap-2">
            <p className="font-medium uppercase">Jobs :</p>
            <Link
              href={`mailto:${activeLocation.jobs}`}
              className="hover:text-[#0072FF]"
            >
              {activeLocation.jobs}
            </Link>
          </div>

          {/* Enquiry */}
          <div className="w-full flex justify-start items-center gap-2">
            <p className="font-medium uppercase">Enquiry :</p>
            <Link
              href="mailto:info@codeneptune.com"
              className="hover:text-[#0072FF]"
            >
              info@codeneptune.com
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE (Animated) */}
        <div className="w-full flex justify-center items-center lg:w-1/2 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeLocation.label}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <Image
                src={activeLocation.image}
                alt={activeLocation.label}
                width={600}
                height={400}
                className="rounded-lg h-[18rem] object-cover"
                priority
              />
            </MotionDiv>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Location;

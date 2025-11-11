"use client";

import React from "react";
import {  Linkedin } from "lucide-react";

function MeetTheTeam() {
  const team = [
    {
      name: "MARY BROWN",
      role: "creative leader",
      image: "/team/member1.jpg", // Replace with actual path in /public
      description:
        "Glavi amet ritnsi libero molestie ante ut fringilla purus eros quis glavid from dolor amet iquam lorem bibendum",
    },
    {
      name: "ANN RICHMOND",
      role: "creative leader",
      image: "/team/member2.jpg", // Replace with actual path in /public
      description:
        "Glavi amet ritnsi libero molestie ante ut fringilla purus eros quis glavid from dolor amet iquam lorem bibendum",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-center">
        
        {/* Left Section */}
        <div className="lg:w-1/3">
          <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 leading-tight mb-3">
            Meet The <br /> Team
          </h2>
        </div>

        {/* Right Section - Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-2/3">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition duration-300"
            >
              <div className="w-28 h-28 mx-auto mb-6 bg-gray-200 rounded-full">
                {/* <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-full h-full object-cover"
                /> */}
              </div>
              <h3 className="text-lg font-bold text-gray-800 uppercase">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold text-sm mb-4">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {member.description}
              </p>
              <div className="flex justify-center space-x-4 text-gray-600">
                <a href="#" className="hover:text-blue-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeam;

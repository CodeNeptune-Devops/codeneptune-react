import React from 'react';
import { Award } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';
import img1 from '../../assets/web-development/team.webp';
import Image from 'next/image';

function SkilledWebDevelopmentTeam() {
  return (
    <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src={img1} 
                alt="Team working together"
                height={400}
                width={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            
            <SectionTitle 
            align='text-start'
            title='A Friendly, Skilled Web Team You Can Count On'
            description=' At Code Neptune, we help small businesses, start-ups, and entrepreneurs build websites that are clean, modern, and ready to grow.'
            />

            {/* Blue Card with Brand Story */}
            <div className="bg-blue-600 rounded-3xl p-4 md:p-6 text-white">
              {/* Award Icon */}
              <div className='flex justify-start items-center gap-3'>
                <div className="flex items-center justify-center w-20 h-20 mb-3">
                <div className="relative">
                  <Award className="w-16 h-16" strokeWidth={2} />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                    1
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Short Brand Story
              </h2>
              </div>

              {/* Description */}
              <p className="text-base sm:text-md leading-relaxed opacity-95">
                We're a close-knit team of designers and developers who care about doing good work for good businesses. We don't believe in shortcuts, flashy jargon, or pushing clients into things they don't need. Instead, we focus on building websites that make sense for your business — whether you're starting small or scaling up. With a mix of creative thinking and technical skills, we help you go online the right way — without the stress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkilledWebDevelopmentTeam;
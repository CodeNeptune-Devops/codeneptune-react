'use client'

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import BlurText from '@/animatedTexts/blurText/BlurText';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: '500' });

function OurOffice() {
  const [animationStarted, setAnimationStarted] = useState(false);

  const images = [
    { id: 1, url: 'https://picsum.photos/seed/office1/400/400' },
    { id: 2, url: 'https://picsum.photos/seed/office2/400/400' },
    { id: 3, url: 'https://picsum.photos/seed/office3/400/400' },
    { id: 4, url: 'https://picsum.photos/seed/office4/400/400' },
    { id: 5, url: 'https://picsum.photos/seed/office5/400/400' },
  ];

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
    setAnimationStarted(true);
  };


  return (
    <div className='w-full'>
      <div className="bg-black pb-5 pt-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-white leading-tight">

              <div className='flex w-full justify-center items-center pb-0'>
                <div className='flex w-full justify-center items-center -mb-3'>
                  <BlurText
                    text="Our Office is a"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className={`text-2xl md:text-4xl lg:text-8xl text-center leading-relaxed text-white font-extrabold `}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div
                  className={`transition-all duration-700 ${animationStarted
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                    }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  hub of <span className="bg-green-400 text-black px-3 py-1 inline-block rounded">talent</span> and
                </div>
                <div
                  className={`transition-all duration-700 ${animationStarted
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                    }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  <span className="bg-blue-600 text-white px-3 py-1 inline-block rounded">client success.</span>
                </div>
              </div>
            </h3>

          </div>

          {/* Bento Grid Layout */}
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
              {/* Large left box - takes full height of 2 rows */}
              <div className="md:col-span-4 md:row-span-2">
                <div
                  className={`relative w-full h-80 md:h-[620px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-20 opacity-0'
                    }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  <img
                    src={images[0].url}
                    alt="Office"
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>

              <div className='md:col-span-4 space-y-4'>
                {/* Top middle box */}
                <div className="w-full">
                  <div
                    className={`relative w-full h-56 md:h-[250px] bg-gray-300 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-20 opacity-0'
                      }`}
                    style={{ transitionDelay: '800ms' }}
                  >
                    <img
                      src={images[1].url}
                      alt="Office"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Second middle box */}
                <div className="w-full">
                  <div
                    className={`relative w-full h-56 md:h-[250px] bg-gray-300 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-20 opacity-0'
                      }`}
                    style={{ transitionDelay: '1000ms' }}
                  >
                    <img
                      src={images[2].url}
                      alt="Office"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>

                <div
                  className={`flex justify-center pt-3 transition-all duration-700 ${animationStarted
                      ? 'scale-100 opacity-100'
                      : 'scale-90 opacity-0'
                    }`}
                  style={{ transitionDelay: '1200ms' }}
                >
                  <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    <MessageCircle size={22} />
                    <span>Reach Out, We're Ready</span>
                  </button>
                </div>
              </div>

              {/* Bottom right column */}
              <div className='md:col-span-4 space-y-4'>
                {/* Bottom right top box */}
                <div className="w-full">
                  <div
                    className={`relative w-full h-56 md:h-[300px] bg-gray-300 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-20 opacity-0'
                      }`}
                    style={{ transitionDelay: '1400ms' }}
                  >
                    <img
                      src={images[3].url}
                      alt="Office"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Bottom right bottom box */}
                <div className="w-full">
                  <div
                    className={`relative w-full h-56 md:h-[300px] bg-gray-300 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] ${animationStarted
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-20 opacity-0'
                      }`}
                    style={{ transitionDelay: '1600ms' }}
                  >
                    <img
                      src={images[4].url}
                      alt="Office"
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OurOffice;
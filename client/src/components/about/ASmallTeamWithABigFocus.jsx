import Image from 'next/image';
import React from 'react';

function ASmallTeamWithABigFocus() {
  return (
    <div className='w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto w-full'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:gap-0'>
          
          {/* Blue Card - Mobile: Top, Desktop: Left with overlap */}
          <div className='w-full lg:w-1/2 lg:pr-8 z-10 order-2 lg:order-1'>
            <div className='bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10  h-full flex flex-col justify-center lg:translate-x-12'>
              <h6 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight'>
                A Small Team with a Big Focus: Building Websites That Just Make Sense
              </h6>
              
              <div className='space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed'>
                <p>
                  Code Neptune was founded with a simple mission: to make professional websites accessible for startups, small businesses, and solo founders without the fluff, upsells, or agency drama.
                </p>
                <p>
                  We avoid tech jargon and focus on clean design, fast loading, mobile first layouts, and websites that truly help your business grow. Whether you are building your first site or refreshing an old one, we keep the process simple, collaborative, and clear from start to finish.
                </p>
              </div>
            </div>
          </div>

          {/* Image Container - Mobile: Bottom, Desktop: Right */}
          <div className='w-full lg:w-1/2 order-1 lg:order-2'>
            <div className='relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl lg:rounded-3xl overflow-hidden  bg-gradient-to-br from-blue-100 to-blue-200'>
              {/* Uncomment when you have the image */}
              {/* <Image
                src={img1}
                alt='Team'
                fill
                className='object-cover'
              /> */}
              
              {/* Placeholder content */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center p-8'>
                  <div className='w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
                    <div className='w-16 h-16 bg-blue-500 rounded-full'></div>
                  </div>
                  <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900'>
                    Code Neptune
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ASmallTeamWithABigFocus;
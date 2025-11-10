import React from 'react'

function WhatYourOnlineStoreWillInclude() {
  return (
    <div className='w-full py-16'>
        <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-5'>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8 lg:mb-10">
              <div className='flex flex-col justify-center items-start gap-3'>
                {/* <p className='uppercase text-xs sm:text-sm text-blue-500 font-bold leading-relaxed tracking-wider sm:[letter-spacing:4px]'>
                  ROI of Intelligence
                </p> */}
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-4 lg:mb-6 text-black">
                  The Smarter You Build, the Faster You Grow
                </h3>
              </div>
              <div className="flex items-center">
                <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                  Discover how intelligent automation and AI Agents deliver measurable results across industries. Every solution we create combines innovation and strategy to unlock efficiency, accelerate growth, and reduce operational costs.
                </p>
              </div>
            </div>

           <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Product Catalog */}
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Product Catalog with Variants</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Support for size, color, and custom attributes — ideal for clothing, electronics, and more.</p>
                  </div>

                  {/* Integrated Cart */}
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Integrated Cart & Checkout</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">A seamless buying experience that reduces cart abandonment.</p>
                  </div>

                  {/* Payment Gateway */}
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Payment Gateway Setup</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">We integrate Razorpay, Stripe, UPI, or wallets — whatever your audience uses.</p>
                  </div>

                  {/* Mobile Responsive */}
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Mobile-Responsive Design</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Optimized for mobile-first shoppers scroll-friendly and conversion-driven.</p>
                  </div>

                  {/* Coupon Management */}
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Coupon & Discount Management</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Set up codes, offers, and timed deals without needing a developer.</p>
                  </div>

                  {/* Order Notifications */}
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Order Notifications & Emails</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Automated confirmation emails and admin alerts — so you never miss a sale.</p>
                  </div>

                  {/* WhatsApp Integration */}
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">WhatsApp & Social Integration</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Let buyers reach out directly or share products easily.</p>
                  </div>

                  {/* SEO Setup */}
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Basic SEO Setup</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Optimized URLs, meta tags, and image alt texts to help you rank from Day One.</p>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                      alt="Woman with shopping bags using laptop"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

        </div>
    </div>
  )
}

export default WhatYourOnlineStoreWillInclude
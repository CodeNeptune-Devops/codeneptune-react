import React from 'react';
import { ShoppingCart, Layout, CreditCard, MessageCircle, Mail, Smartphone, Tag, Users, BookOpen, Calendar } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function WhatsIncludedInEveryOnlineStore() {
  const features = [
    {
      icon: Layout,
      text: 'Custom homepage & product layout'
    },
    {
      icon: ShoppingCart,
      text: 'Category-based product catalog'
    },
    {
      icon: CreditCard,
      text: 'Cart + checkout (Razorpay/Stripe)'
    },
    {
      icon: MessageCircle,
      text: 'WhatsApp or call-to-buy option'
    },
    {
      icon: Mail,
      text: 'Order emails to admin & customer'
    },
    {
      icon: Smartphone,
      text: 'Mobile-friendly & SEO-ready design'
    },
    {
      icon: Tag,
      text: 'Coupon/discount code support'
    },
    {
      icon: Users,
      text: 'Social media links'
    },
    {
      icon: BookOpen,
      text: 'Product & order management training'
    },
    {
      icon: Calendar,
      text: '30 days of support after launch'
    }
  ];

  const visualFeatures = [
    { icon: ShoppingCart, label: 'Cart + checkout', top: '10%', left: '2%' },
    { icon: MessageCircle, label: 'WhatsApp or\ncall-to-buy', top: '42%', left: '2%', isWhatsApp: true },
    { icon: Layout, label: 'Custom homepage\n& product', top: '8%', right: '2%' },
    { icon: Smartphone, label: 'Mobile-friendly\n& SEO design', top: '38%', right: '2%' },
    { icon: Tag, label: 'Coupon/discount\ncode', top: '60%', right: '2%' },
    { icon: Calendar, label: '30 days of\nsupport', top: '75%', right: '2%' }
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <SectionTitle 
          title=" What's Included in Every Online Store We Build"
          description="We keep it practical and focused — no bloated add-ons, no tech overload. Just what you need to start selling online with confidence."
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Feature Pills */}
          <div className="order-2 lg:order-1 ">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start ">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-3 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:border-gray-400 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-gray-600 flex-shrink-0" />
                    <span className="text-sm sm:md text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Visual Mockup */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Background rounded rectangle */}
              <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-3xl overflow-hidden shadow-xl">
                {/* Person Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="absolute inset-0 flex items-end justify-center pb-0">
                    <div className="w-full h-[85%] bg-gradient-to-b from-transparent via-blue-600/20 to-blue-700/40 rounded-t-full"></div>
                  </div>
                  
                  {/* Feature callouts */}
                  <div className="absolute inset-0">
                    {visualFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      const style = {
                        top: feature.top,
                        left: feature.left,
                        right: feature.right
                      };
                      
                      return (
                        <div
                          key={index}
                          className="absolute"
                          style={style}
                        >
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200 hover:scale-105 transition-transform">
                            <div className="flex items-center gap-1.5">
                              {feature.isWhatsApp ? (
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <MessageCircle className="w-4 h-4 text-white" />
                                </div>
                              ) : (
                                <Icon className="w-4 h-4 text-gray-700 flex-shrink-0" />
                              )}
                              <span className="text-[10px] font-medium text-gray-800 whitespace-pre-line leading-tight">
                                {feature.label}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Checkmark badge */}
                    <div className="absolute" style={{ top: '60%', left: '2%' }}>
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Centered person illustration */}
                  <div className="absolute inset-0 flex items-end justify-center pb-0">
                    <div className="w-[70%] h-[75%] bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-[40%] flex items-center justify-center">
                      <div className="w-[90%] h-[85%] bg-blue-500/30 rounded-t-[35%] flex items-center justify-center">
                        {/* Face */}
                        <div className="absolute top-[20%] w-32 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full">
                          {/* Eyes */}
                          <div className="absolute top-[40%] left-[25%] w-2 h-3 bg-gray-800 rounded-full"></div>
                          <div className="absolute top-[40%] right-[25%] w-2 h-3 bg-gray-800 rounded-full"></div>
                          {/* Smile */}
                          <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 w-12 h-6 border-b-2 border-gray-800 rounded-b-full"></div>
                          {/* Hair */}
                          <div className="absolute -top-2 left-0 right-0 h-16 bg-gray-900 rounded-t-full"></div>
                        </div>
                      </div>
                      {/* Laptop */}
                      <div className="absolute bottom-[10%] w-24 h-16 bg-gray-300 rounded-t-lg border-2 border-gray-400">
                        <div className="w-full h-3/4 bg-gray-400 rounded-t-md"></div>
                      </div>
                    </div>
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

export default WhatsIncludedInEveryOnlineStore;
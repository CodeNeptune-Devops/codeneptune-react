import React from 'react';
import { ShoppingCart, Layout, CreditCard, MessageCircle, Mail, Smartphone, Tag, Users, BookOpen, Calendar } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';
import img1 from '../../assets/e-commerce-development/every-online-store-we-build.webp';
import Image from 'next/image';

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
            <div className="relative w-full max-w-sm lg:max-w-xl rounded-lg">
              <Image 
              src={img1}
              alt='every-online-store-we-build'
              height={500}
              width={500}
              className='h-full w-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsIncludedInEveryOnlineStore;
import React from 'react';
import { Package, ShoppingCart, DollarSign, Smartphone, Tag, Bell, MessageCircle, Search } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

const FeatureCard = ({ icon: Icon, title, description, bgColor }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function FeaturesLayout() {
  const topFeatures = [
    {
      icon: Package,
      title: "Product Catalog with Variants",
      description: "Support for size, color, and custom attributes — ideal for clothing, electronics, and more.",
      bgColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: ShoppingCart,
      title: "Integrated Cart & Checkout",
      description: "A seamless buying experience that reduces cart abandonment.",
      bgColor: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: DollarSign,
      title: "Payment Gateway Setup",
      description: "We integrate Razorpay, Stripe, UPI, or wallets — whatever your audience uses.",
      bgColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-Responsive Design",
      description: "Optimized for mobile-first shoppers scroll-friendly and conversion-driven.",
      bgColor: "bg-purple-100 text-purple-600"
    }
  ];

  const bottomFeatures = [
    {
      icon: Tag,
      title: "Coupon & Discount Management",
      description: "Set up codes, offers, and timed deals without needing a developer.",
      bgColor: "bg-green-100 text-green-600"
    },
    {
      icon: Bell,
      title: "Order Notifications & Emails",
      description: "Automated confirmation emails and admin alerts — so you never miss a sale.",
      bgColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp & Social Integration",
      description: "Let buyers reach out directly or share products easily.",
      bgColor: "bg-pink-100 text-pink-600"
    },
    {
      icon: Search,
      title: "Basic SEO Setup",
      description: "Optimized URLs, meta tags, and image alt texts to help you rank from Day One.",
      bgColor: "bg-gray-800 text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className='max-w-7xl mx-auto w-full'>
        <SectionTitle
          title='What Your Online Store Will Include'
          description='Every eCommerce website we build comes with the features you actually need to run and grow your business — nothing extra, nothing missing.'
        />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Cards + Image */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {topFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Right: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
              alt="E-commerce workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section: Full Width Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bottomFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
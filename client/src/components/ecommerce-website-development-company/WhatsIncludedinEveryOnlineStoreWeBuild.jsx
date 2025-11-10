import React from 'react';
import SectionTitle from '../titles/SectionTitle';

function WhatsIncludedinEveryOnlineStoreWeBuild() {
  const features = [
    {
      title: "Low Cost",
      description: "We provide affordable solutions without compromising on quality — perfect for startups and growing businesses."
    },
    {
      title: "Custom Designs",
      description: "Get a store that matches your brand perfectly with unique and user-friendly design."
    },
    {
      title: "Multiple Payment Methods",
      description: "We support all major payment gateways like UPI, Razorpay, Stripe, and more — for smoother checkouts."
    },
    {
      title: "Seamless Integrations",
      description: "Easily connect with CRMs, shipping tools, and inventory systems — everything works together smoothly."
    },
    {
      title: "SEO Optimized",
      description: "Your store will be built with SEO best practices, helping more customers find you on Google."
    },
    {
      title: "High Performance",
      description: "Fast-loading websites that offer a smooth experience on both mobile and desktop."
    },
    {
      title: "Easy Inventory Management",
      description: "Add, edit, or remove products anytime — no coding required."
    },
    {
      title: "Easy to Maintain",
      description: "Your site will be simple to update and manage, with our ongoing support whenever you need it."
    }
  ];

  return (
    <div className='w-full py-16 bg-slate-800'>
      <div className='max-w-7xl mx-auto w-full'>
        <SectionTitle 
        textColor='text-white'
        descriptionColor='text-white'
        title='What’s Included in Every Online Store We Build'
        description='We keep it practical and focused — no bloated add-ons, no tech overload. Just what you need to start selling online with confidence.'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <div 
              key={index}
              className='bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-lg p-6 hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300 h-[13rem]'
            >
              <h3 className='text-white text-lg font-semibold mb-3'>
                {feature.title}
              </h3>
              
              <p className='text-slate-300 text-sm leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatsIncludedinEveryOnlineStoreWeBuild;
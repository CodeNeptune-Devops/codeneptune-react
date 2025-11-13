import Blogs from '@/components/Blogs'
import CustomHomePageAndProductLayout from '@/components/ecommerce-website-development-company/CustomHomePageAndProductLayout'
import CustomWebsiteVsTemplate from '@/components/ecommerce-website-development-company/CustomWebsiteVsTemplate'
import FullyIntegratedWithAllTheTools from '@/components/ecommerce-website-development-company/FullyIntegratedWithAllTheTools'
import OnDemandeCommerceWebsiteDevelopment from '@/components/ecommerce-website-development-company/OnDemandeCommerceWebsiteDevelopment'
import WhatsIncludedinEveryOnlineStoreWeBuild from '@/components/ecommerce-website-development-company/WhatsIncludedinEveryOnlineStoreWeBuild'
import WhatYourOnlineStoreWillInclude from '@/components/ecommerce-website-development-company/WhatYourOnlineStoreWillInclude'
import WhoWeBuildOnlineStoresFor from '@/components/ecommerce-website-development-company/WhoWeBuildOnlineStoresFor'
import Faqs from '@/components/Faqs'
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy'
import ContactForm from '@/components/forms/ContactForm'
import Hero from '@/components/Hero'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import OurProvenDevelopmentProcess from '@/components/OurProvenDevelopmentProcess'
import TechStack from '@/components/TechStack'
import SectionTitle from '@/components/titles/SectionTitle'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import WorkWithUs from '@/components/WorkWithUs'
import React from 'react'
import {
  Smartphone,
  Package,
  Workflow,
  CreditCard,
  Rocket,
  LifeBuoy,
  Search,
  TrendingUp,
} from "lucide-react";

function page() {

  const initialFeatures = [
    {
      title: "Mobile-First, Always",
      description:
        "Over 80% of customers shop on phones — your store will be fast, clean, and fully responsive.",
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Easy to Manage Products",
      description:
        "Add, edit, and manage your products without touching code — we’ll show you how.",
      icon: <Package className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Smooth Checkout Flow",
      description:
        "We design for real-world buyers — clear navigation, no confusion, fewer drop-offs.",
      icon: <Workflow className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Secure Payments Built-In",
      description:
        "We integrate trusted gateways like Razorpay or Stripe so your payments are safe and seamless.",
      icon: <CreditCard className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Launch-Ready in Shorter Time",
      description:
        "We deliver your store fast — without cutting corners. You go live quickly, confidently.",
      icon: <Rocket className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Support That Doesn’t Disappear After Launch",
      description:
        "We’re available post-launch for updates, changes, or just guiding you when you get stuck.",
      icon: <LifeBuoy className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "SEO Ready from Day One",
      description:
        "We set up your store with smart SEO basics, so search engines (and customers) can find you easily.",
      icon: <Search className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Built to Scale with Your Business",
      description:
        "Whether you’re starting small or expanding fast, your store will grow with you — no need to rebuild later.",
      icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
    },
  ];

  const ecommerceFaqs = [
    {
      id: 1,
      question: "What does Code Neptune do for eCommerce businesses?",
      answer:
        "Code Neptune helps eCommerce businesses grow by building user-friendly online stores, developing mobile apps, and offering services like SEO, digital marketing, and custom web design. We provide complete eCommerce solutions for all types of businesses.",
    },
    {
      id: 2,
      question: "Do you offer full eCommerce website development services?",
      answer:
        "Yes. We handle everything from eCommerce website design and development to payment gateway setup, product pages, shipping options, and more so your online store is ready to sell.",
    },
    {
      id: 3,
      question: "Can I get a custom eCommerce solution for my business needs?",
      answer:
        "Of course. Every business is unique, and we create custom eCommerce websites based on your brand, products, and customer needs. We also make sure it’s scalable for future growth.",
    },
    {
      id: 4,
      question: "Can you upgrade or redesign my current eCommerce site?",
      answer:
        "Yes. If your website is outdated or not performing well, we can redesign it with a fresh look, faster loading speed, better user experience, and modern features to improve your sales.",
    },
    {
      id: 5,
      question: "Will my eCommerce website be mobile-friendly and SEO-ready?",
      answer:
        "Yes. All eCommerce websites we create work smoothly on mobile phones, tablets, and desktops. We also include SEO features so your store can be found easily on search engines.",
    },
    {
      id: 6,
      question: "Can you redesign my existing website?",
      answer:
        "Yes! We can revamp your website for better design, performance, and conversions. Whether a minor refresh or a complete overhaul, we’ve got you covered!",
    },
    {
      id: 7,
      question: "How long does it take to launch an eCommerce website?",
      answer:
        "Most eCommerce projects take about 2 to 4 weeks, depending on features and content. We work closely with you to deliver fast, high-quality results.",
    },
    {
      id: 8,
      question: "How do I get started with my website project?",
      answer:
        "It’s simple! Contact us, share your requirements, and we’ll guide you through the process. Let’s bring your vision to life!",
    },
    {
      id: 9,
      question: "Can I manage my products, orders, and customers easily?",
      answer:
        "Yes. We build easy-to-use admin panels so you can add products, track orders, view customer details, and manage your store without needing technical skills.",
    },
    {
      id: 10,
      question: "Do you also build eCommerce mobile apps?",
      answer:
        "Yes. We develop Android and iOS mobile apps for eCommerce businesses, so your customers can shop on the go. Our apps are fast, secure, and user-friendly.",
    },
  ];

  return (
    <div>
      <Hero
        text1='Build a Store That Looks '
        text2='Great and Sells Better'
        description='We specialize in building high performance, mobile first eCommerce websites that captivate users and turn clicks into customers. As a trusted eCommerce website development company with technical expertise, we’ve helped businesses succeed online by integrating intelligent chatbots, voice search, and AI-driven personalization to enhance discovery and boost conversions.'
      />
      <div className='pt-16 max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-4'>
        {/* <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
          More Than Apps, We Build Success
        </p> */}
        <div className='-mb-12 flex flex-col justify-start items-center gap-3'>

          <SectionTitle
            title='Why Business Owners Choose Our E-commerce Setup'
            description='We don’t just build websites — we build online stores that are conversion-ready, smooth to manage, and made for everyday sellers, not just big brands.'
          />

        </div>

        <FeaturesSectionWithHoverEffects data={initialFeatures} />
      </div>
      <WhatYourOnlineStoreWillInclude />
      <OnDemandeCommerceWebsiteDevelopment />
      <WhatsIncludedinEveryOnlineStoreWeBuild />
      <WorkWithUs padding={'pb-16'} />
      <CustomWebsiteVsTemplate />
      <IndustriesWeServe padding='pb-16' />
      <WhoWeBuildOnlineStoresFor />
      <CustomHomePageAndProductLayout />
      <FullyIntegratedWithAllTheTools />
      <OurProvenDevelopmentProcess
        title='Our Simple Process to Launch Your Store'
        description='From idea to launch, we make building your online store easy and hassle-free.'
      />
      <TechStack />
      <FeaturedCaseStudy />
      <Blogs />
      <Faqs faqs={ecommerceFaqs}/>
      <ContactForm />
      <Location />
    </div>
  )
}

export default page
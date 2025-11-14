import Blogs from '@/components/Blogs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Faqs from '@/components/Faqs'
import ContactForm from '@/components/forms/ContactForm'
import Hero from '@/components/Hero'
import HowWeBuildIntelligentSolutions from '@/components/home/HowWeBuildIntelligentSolutions'
import OurServices from '@/components/home/OurServices'
import HowWeWorkOurEcommerceDevelopment from '@/components/HowWeWorkOurEcommerceDevelopment'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import CustomMobileAppDevelopmentServices from '@/components/mobile-app-development-company/CustomMobileAppDevelopmentServices'
import OurMvpDevelopment from '@/components/mobile-app-development-company/OurMvpDevelopment'
import WhyClientChooseUs from '@/components/mobile-app-development-company/WhyClientChooseUs'
import TechStack from '@/components/TechStack'
import SectionTitle from '@/components/titles/SectionTitle'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import {
    ShieldCheck,
    RefreshCw,
    AlertTriangle,
    Gauge,
    BarChart2,
    LifeBuoy
} from "lucide-react"
import React from 'react'

// Server Metadata (SEO + Sitelinks support)
export const metadata = {
  title: "Mobile App Development Company ",
  description:
    "Code Neptune builds high-performance mobile apps for startups, enterprises, and growing businesses. We deliver intuitive UI/UX, scalable architecture, and next-gen mobile experiences.",
  alternates: {
    canonical: "https://www.codeneptune.com/mobile-app-development-company",
  },
};

function MobileAppDevelopmentCompany() {

  const dataSet = [
    {
      title: "Proactive Monitoring & Fast Issue Fixes",
      text: "We continuously monitor your app to catch and fix problems before they impact your users.",
    },
    {
      title: "Regular Updates & New Features",
      text: "We keep your app updated with OS changes and user feedback.",
    },
    {
      title: "Top Security & Protection",
      text: "We ensure strong security, compliance, and user data protection.",
    },
    {
      title: "Performance Optimization for Speed",
      text: "We make sure your app loads fast and works smoothly on all devices.",
    },
    {
      title: "Scaling for Business Growth",
      text: "Your app grows effortlessly with your business needs.",
    },
    {
      title: "Ongoing Support After Launch",
      text: "We continue supporting your app even after deployment.",
    },
  ];

  const mobileAppfaqs = [
    {
      id: 1,
      question: "Why does my business need a mobile app?",
      answer: "A mobile app helps you connect with your customers anytime and increases conversions.",
    },
    {
      id: 2,
      question: "Can I update or improve the app after it is launched?",
      answer: "Yes, we offer full post-launch support.",
    },
    {
      id: 3,
      question: "Do you build apps for both Android and iOS?",
      answer: "Yes, we support Android, iOS, and cross-platform frameworks.",
    },
    {
      id: 4,
      question: "Will you publish the app to Google Play and Apple App Store?",
      answer: "Yes, we handle complete app store submission.",
    },
    {
      id: 5,
      question: "How much does it cost to develop a mobile app?",
      answer: "Cost depends on app complexity. We provide flexible pricing.",
    },
    {
      id: 6,
      question: "Can you help me build the app from scratch?",
      answer: "Absolutely, even if you have only an idea.",
    },
    {
      id: 7,
      question: "How long does it take to build a mobile app?",
      answer: "A standard app usually takes 4–6 weeks.",
    },
    {
      id: 8,
      question: "Will the app be fast and secure?",
      answer: "Yes, we follow high security and performance standards.",
    },
  ];

  return (
    <div>

      {/* Breadcrumb Schema for sitelinks */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.codeneptune.com" },
          { name: "Mobile App Development", url: "https://www.codeneptune.com/mobile-app-development-company" },
        ]}
      />

      <Hero 
        text1='Building Apps,'
        text2='Transforming Your Business'
        description='At Code Neptune, we specialize in mobile app development that drives business growth with intuitive UI, long-term scalability, and seamless performance.'
        buttonText='Lets Build Together'
      />

      <div className='pt-16 max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-4'>
        <div className='-mb-12 flex flex-col justify-start items-center gap-3'>
          <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
            More Than Apps, We Build Success
          </p>
          <SectionTitle
            title='Why Code Neptune? Here’s Why!'
            description='We create powerful, user-focused apps that stand out in a mobile-first world.'
          />
        </div>
        <FeaturesSectionWithHoverEffects />
      </div>

      <CustomMobileAppDevelopmentServices />
      <IndustriesWeServe padding={'pb-16'} />
      <HowWeBuildIntelligentSolutions />
      <TechStack />
      <WhyClientChooseUs />
      <OurMvpDevelopment />
      <HowWeWorkOurEcommerceDevelopment />
      <OurServices data={dataSet} />
      <Faqs faqs={mobileAppfaqs} />
      <Blogs />
      <ContactForm />
      <Location />
    </div>
  );
}

export default MobileAppDevelopmentCompany;
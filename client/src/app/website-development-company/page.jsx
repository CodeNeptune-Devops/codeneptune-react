import Blogs from '@/components/Blogs'
import Faqs from '@/components/Faqs'
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy'
import ContactForm from '@/components/forms/ContactForm'
import HowWeWorkOurEcommerceDevelopment from '@/components/HowWeWorkOurEcommerceDevelopment'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import OurProvenDevelopmentProcess from '@/components/OurProvenDevelopmentProcess'
import TechStack from '@/components/TechStack'
import SectionTitle from '@/components/titles/SectionTitle'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import AffordablePlansForEveryBusiness from '@/components/website-development-company/AffordablePlansForEveryBusiness'
import EveryWebsiteWeBuild from '@/components/website-development-company/EveryWebsiteWeBuild'
import Hero from '@/components/website-development-company/Hero'
import SkilledWebDevelopmentTeam from '@/components/website-development-company/SkilledWebDevelopmentTeam'
import WebsiteSolutionsForEveryNeed from '@/components/website-development-company/WebisteSolutionsForEveryNeed'
import WhyYourWebsite from '@/components/website-development-company/WhyYourWebsite'
import YourReliableWebDevelopmentPartner from '@/components/website-development-company/YourReliableWebDevelopmentPartner'
import WorkWithUs from '@/components/WorkWithUs'
import React from 'react'

function page() {

  const websiteFaqs = [
    {
      id: 1,
      question: "I already use social media. Do I still need a website?",
      answer:
        "Yes. A website gives your business a permanent online presence. Unlike social media, you have full control, and it helps you look more professional and trustworthy.",
    },
    {
      id: 2,
      question: "What if I want changes after the website goes live?",
      answer:
        "We make websites that are easy to update. You can make changes yourself, or you can ask us for support anytime you need updates or improvements.",
    },
    {
      id: 3,
      question: "How much does it cost to develop a website for my business?",
      answer:
        "The cost depends on the features and design you need. At Code Neptune, we offer affordable website development services for startups, small businesses, and growing companies.",
    },
    {
      id: 4,
      question: "Can you create a website that looks different from others?",
      answer:
        "Yes. We offer custom web development. That means we design your website based on your brand, your ideas, and what makes your business unique.",
    },
    {
      id: 5,
      question: "Will my website work on phones, tablets, and desktops?",
      answer:
        "Yes. Every website we build is fully responsive. That means your site will look and work great on all screen sizes and devices.",
    },
    {
      id: 6,
      question: "Will my website be ready for search engines like Google?",
      answer:
        "Yes. All websites we build are SEO friendly. We set up the right structure, and speed to help your site show up on search engines.",
    },
    {
      id: 7,
      question: "I don’t know anything about websites. Can you help me?",
      answer:
        "Yes. We guide you through the full process. You do not need any technical skills. We handle the design, development, setup, and support.",
    },
    {
      id: 8,
      question: "How long will it take to build my website?",
      answer:
        "A standard business website usually takes 2 to 3 weeks. If you need more features, it may take a little more time. We always deliver on time and keep you updated.",
    },
  ];

  return (
    <div>
      <Hero />
      <WhyYourWebsite />
      <div className='pt-16 max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-4'>
        {/* <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
          More Than Apps, We Build Success
        </p> */}
        <div className='-mb-12 flex flex-col justify-start items-center gap-3'>

          <SectionTitle
            title='Custom Website Design & Development Services'
            description='From business websites to online stores, we build fast, responsive, and SEO-ready websites tailored to your goals.'
          />

        </div>

        <FeaturesSectionWithHoverEffects />
      </div>
      <OurProvenDevelopmentProcess
        title='Our Proven 5-Step Development Process'
        description='Building your dream website is faster and easier than you might think. Our proven 5-step process takes your site from concept to launch seamlessly, without the stress.'
      />
      <YourReliableWebDevelopmentPartner />
      <WebsiteSolutionsForEveryNeed />
      <AffordablePlansForEveryBusiness />
      <SkilledWebDevelopmentTeam />
      <EveryWebsiteWeBuild />
      <WorkWithUs />
      <IndustriesWeServe padding='pb-16' />
      <TechStack />
      <HowWeWorkOurEcommerceDevelopment />
      <FeaturedCaseStudy />
      <Faqs faqs={websiteFaqs}/>
      <Blogs />
      <ContactForm />
      <Location />
    </div >
  )
}

export default page
import Blogs from '@/components/Blogs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
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

// -------------------------------
// SEO Metadata + Canonical + Sitelinks
// -------------------------------
export const metadata = {
  title: "Website Development Company | Custom Business Websites ",
  description:
    "We build fast, responsive, and SEO-friendly websites tailored for businesses, startups, eCommerce, and enterprises. Code Neptune delivers high-converting, fully customized websites.",
  alternates: {
    canonical: "https://www.codeneptune.com/website-development-company",
  },
};

function Page() {

  const websiteFaqs = [
    {
      id: 1,
      question: "I already use social media. Do I still need a website?",
      answer:
        "Yes. A website gives your business a permanent online presence and makes you look trustworthy and professional.",
    },
    {
      id: 2,
      question: "What if I want changes after the website goes live?",
      answer:
        "We build flexible websites. You can update them or we can handle updates for you anytime.",
    },
    {
      id: 3,
      question: "How much does it cost to build a website?",
      answer:
        "Cost depends on features and complexity. We provide affordable plans for small businesses and startups.",
    },
    {
      id: 4,
      question: "Can you design a unique website for my business?",
      answer:
        "Yes, we offer custom website development tailored to your brand identity and goals.",
    },
    {
      id: 5,
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes. Every website we build works perfectly on mobiles, tablets, and desktops.",
    },
    {
      id: 6,
      question: "Is the website SEO-friendly?",
      answer:
        "Yes. We follow SEO best practices to help your website rank better on Google.",
    },
    {
      id: 7,
      question: "I don’t know anything about websites. Can you help?",
      answer:
        "Of course. We handle everything from design to development and ongoing support.",
    },
    {
      id: 8,
      question: "How long does it take to build a website?",
      answer:
        "A standard business website takes 2–3 weeks. More advanced websites may take longer.",
    },
  ];

  return (
    <div>

      {/* Breadcrumb Schema for Google Sitelinks */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.codeneptune.com" },
          { name: "Website Development", url: "https://www.codeneptune.com/website-development-company" },
        ]}
      />

      <Hero />

      <WhyYourWebsite />

      <div className='pt-16 max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-4'>
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
        description='Our 5-step web development process takes your website from idea to launch—smoothly and stress-free.'
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

      <Faqs faqs={websiteFaqs} />

      <Blogs />
      <ContactForm />
      <Location />
    </div>
  )
}

export default Page;
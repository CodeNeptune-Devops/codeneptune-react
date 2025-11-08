import Blogs from '@/components/Blogs'
import Faqs from '@/components/Faqs'
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
  return (
    <div>
      <Hero />
      <WhyYourWebsite />
      <div className='pt-16 max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-4'>
        {/* <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
          More Than Apps, We Build Success
        </p> */}
        <SectionTitle
          title='Custom Website Design & Development Services'
          description='From business websites to online stores, we build fast, responsive, and SEO-ready websites tailored to your goals.'
        />
        <FeaturesSectionWithHoverEffects />
      </div>
      <OurProvenDevelopmentProcess />
      <YourReliableWebDevelopmentPartner />
      <WebsiteSolutionsForEveryNeed />
      <AffordablePlansForEveryBusiness />
      <SkilledWebDevelopmentTeam />
      <EveryWebsiteWeBuild />
      <WorkWithUs />
      <IndustriesWeServe padding='pb-16' />
      <TechStack />
      <HowWeWorkOurEcommerceDevelopment />
      <Faqs />
      <Blogs />
      <ContactForm />
      <Location />
    </div >
  )
}

export default page
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

function page() {
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

        <FeaturesSectionWithHoverEffects />
      </div>
      <WhatYourOnlineStoreWillInclude />
      <OnDemandeCommerceWebsiteDevelopment />
      <WhatsIncludedinEveryOnlineStoreWeBuild />
      <WorkWithUs padding={'pb-16'}/>
      <CustomWebsiteVsTemplate />
      <IndustriesWeServe padding='pb-16'/>
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
      <Faqs />
      <ContactForm />
      <Location />
    </div>
  )
}

export default page
import Blogs from '@/components/Blogs'
import Faqs from '@/components/Faqs'
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy'
import ContactForm from '@/components/forms/ContactForm'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import DesigningDigitalProducts from '@/components/ui-ux-design-services/DesigningDigitalProducts'
import DesigningServicesWeOffer from '@/components/ui-ux-design-services/DesigningServicesWeOffer'
import DesignPartner from '@/components/ui-ux-design-services/DesignPartner'
import DesignStackWeHave from '@/components/ui-ux-design-services/DesignStackWeHave'
import Hero from '@/components/ui-ux-design-services/Hero'
import HowSmartUiUxDesign from '@/components/ui-ux-design-services/HowSmartUiUxDesign'
import WhyChooseCodeNeptune from '@/components/ui-ux-design-services/WhyChooseCodeNeptune'
import WhyUiUxMatters from '@/components/ui-ux-design-services/WhyUiUxMatters'
import React from 'react'

function page() {
  return (
    <div>
        <Hero />
        <DesigningDigitalProducts />
        <DesigningServicesWeOffer />
        <DesignPartner />
        <WhyUiUxMatters />
        <DesignStackWeHave />
        <IndustriesWeServe padding='pb-16'/>
        <WhyChooseCodeNeptune />
        <HowSmartUiUxDesign />
        <FeaturedCaseStudy />
        <Faqs />
        <Blogs />
        <ContactForm />
        <Location />
    </div>
  )
}

export default page
import Blogs from '@/components/Blogs'
import Faqs from '@/components/Faqs'
import ContactForm from '@/components/forms/ContactForm'
import HowWeBuildIntelligentSolutions from '@/components/home/HowWeBuildIntelligentSolutions'
import OurServices from '@/components/home/OurServices'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import CustomMobileAppDevelopmentServices from '@/components/mobile-app-development-company/CustomMobileAppDevelopmentServices'
import Hero from '@/components/mobile-app-development-company/Hero'
import HowWeWorkOurEcommerceDevelopment from '@/components/mobile-app-development-company/HowWeWorkOurEcommerceDevelopment'
import OurMvpDevelopment from '@/components/mobile-app-development-company/OurMvpDevelopment'
import WhyClientChooseUs from '@/components/mobile-app-development-company/WhyClientChooseUs'
import TechStack from '@/components/TechStack'
import SectionTitle from '@/components/titles/SectionTitle'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import React from 'react'

function MobileAppDevelopmentCompany() {
    return (
        <div>
            <Hero />
            <div className='pt-16 max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-4'>
                <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
                  More Than Apps, We Build Success
                </p>
                <SectionTitle 
                title='Why Code Neptune? Here’s Why!'
                description='At Code Neptune, we don’t just build apps—we create impactful mobile experiences that drive business growth. With a focus on innovation, performance, and user engagement, we ensure your app stands out in a competitive market.'
                />
                <FeaturesSectionWithHoverEffects />
            </div>
            <CustomMobileAppDevelopmentServices />
            <IndustriesWeServe padding={'pb-16'}/>
            <HowWeBuildIntelligentSolutions />
            <TechStack />
            <WhyClientChooseUs />
            <OurMvpDevelopment />
            <HowWeWorkOurEcommerceDevelopment />
            <OurServices />
            <Faqs />
            <Blogs />
            <ContactForm />
            <Location />
        </div>
    )
}

export default MobileAppDevelopmentCompany
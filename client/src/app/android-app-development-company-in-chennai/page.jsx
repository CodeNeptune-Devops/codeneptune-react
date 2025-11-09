import AndroidAppDevelopmentServices from '@/components/android-app-development-company-in-chennai/AndroidAppDevelopmentServices'
import BreakingDownTheBarriers from '@/components/android-app-development-company-in-chennai/BreakingDownTheBarriers'
import MobileAsTheCoreOfModernBusiness from '@/components/android-app-development-company-in-chennai/MobileAsTheCoreOfModernBusiness'
import OurAndroidDevelopmentCompany from '@/components/android-app-development-company-in-chennai/OurAndroidDevelopmentCompany'
import OurApproach from '@/components/android-app-development-company-in-chennai/OurApproach'
import Blogs from '@/components/Blogs'
import Faqs from '@/components/Faqs'
import ContactForm from '@/components/forms/ContactForm'
import Hero from '@/components/Hero'
import HowWeBuildIntelligentSolutions from '@/components/home/HowWeBuildIntelligentSolutions'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import React from 'react'

function page() {
  return (
    <div>
        <Hero 
        text1={'Turning Concepts into'}
        text2={'Market Ready Apps'}
        description={'We are a leading Android app development company in Chennai, helping businesses build fast, secure, and user-friendly mobile apps. Our expert Android app developers create solutions that combine great design with powerful performance to deliver real business impact.'}
        />
        <OurAndroidDevelopmentCompany />
        <AndroidAppDevelopmentServices />
        <MobileAsTheCoreOfModernBusiness />
        <OurApproach />
        <BreakingDownTheBarriers />
        <IndustriesWeServe padding='pb-16'/>
        <HowWeBuildIntelligentSolutions />
        <Faqs />
        <Blogs />
        <ContactForm />
        <Location />
    </div>
  )
}

export default page
import Blogs from '@/components/Blogs'
import Faqs from '@/components/Faqs'
import ContactForm from '@/components/forms/ContactForm'
import HowWeWorkOurEcommerceDevelopment from '@/components/HowWeWorkOurEcommerceDevelopment'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import TechStack from '@/components/TechStack'
import Hero from '@/components/website-development-company/Hero'
import WorkWithUs from '@/components/WorkWithUs'
import React from 'react'

function page() {
  return (
    <div>
        <Hero />
        <WorkWithUs />
        <IndustriesWeServe padding='pb-16'/>
        <TechStack />
        <HowWeWorkOurEcommerceDevelopment />
        <Faqs />
        <Blogs />
        <ContactForm />
        <Location />
    </div>
  )
}

export default page
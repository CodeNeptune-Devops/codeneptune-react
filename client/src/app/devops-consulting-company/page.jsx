import BusinessTransformation from '@/components/devops-consulting-company/BusinessTransformation'
import DevopsConsultingAcrossIndustries from '@/components/devops-consulting-company/DevopsConsultingAcrossIndustries'
import OurComprehensiveDevOpsConsultingServices from '@/components/devops-consulting-company/OurComprehensiveDevOpsConsultingServices'
import OurDevopsConsultingProcess from '@/components/devops-consulting-company/OurDevopsConsultingProcess'
import WhyChooseCNForDevopsConsulting from '@/components/devops-consulting-company/WhyChooseCNForDevopsConsulting'
import WhyChooseOurDevopsConsultingSolutions from '@/components/devops-consulting-company/WhyChooseOurDevopsConsultingSolutions'
import Faqs from '@/components/Faqs'
import ContactForm from '@/components/forms/ContactForm'
import Hero from '@/components/Hero'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import WorkWithUs from '@/components/WorkWithUs'
import React from 'react'

function page() {
  return (
    <div>
      <Hero 
      text1='Automation That Scales.'
      text2='Efficiency That Lasts.'
      description='We are a leading DevOps consulting company based in Chennai, serving international clients with end-to-end DevOps solutions. Our mission is to deliver seamless, automated workflows that drive efficiency and accelerate software delivery. As a trusted transformation partner, we guide organizations from adoption to advanced DevOps maturity.'
      buttonText='Request A Quote'
      />
      <WhyChooseOurDevopsConsultingSolutions />
      <BusinessTransformation />
      <OurComprehensiveDevOpsConsultingServices />
      <WhyChooseCNForDevopsConsulting />
      <DevopsConsultingAcrossIndustries />
      <WorkWithUs padding={'pb-16'}/>
      <OurDevopsConsultingProcess />
      <Testimonials />
      <IndustriesWeServe padding='pb-16'/>
      <TechStack />
      <Faqs />
      <ContactForm />
      <Location />
    </div>
  )
}

export default page
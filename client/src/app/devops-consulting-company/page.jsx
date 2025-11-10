import BusinessTransformation from '@/components/devops-consulting-company/BusinessTransformation'
import OurComprehensiveDevOpsConsultingServices from '@/components/devops-consulting-company/OurComprehensiveDevOpsConsultingServices'
import WhyChooseOurDevopsConsultingSolutions from '@/components/devops-consulting-company/WhyChooseOurDevopsConsultingSolutions'
import Hero from '@/components/Hero'
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
    </div>
  )
}

export default page
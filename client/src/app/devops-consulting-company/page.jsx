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

  const devopsFaqs = [
    {
      id: 1,
      question: "What is DevOps consulting and why is it popular?",
      answer:
        "DevOps consulting helps organizations streamline their software development and operations through automation, collaboration, and continuous delivery. It reduces development time, lowers operational costs, and delivers more reliable software."
    },
    {
      id: 2,
      question: "Which industries benefit the most from DevOps consulting services?",
      answer:
        "Industries like fintech, healthcare, e-commerce, SaaS, logistics, and manufacturing benefit the most because DevOps offers scalability, efficient operations, and continuous innovation."
    },
    {
      id: 3,
      question: "How does DevOps consulting benefit businesses?",
      answer:
        "DevOps consulting enables faster deployments, consistent environments, smoother performance, quicker market entry, reduced risks, and higher ROI—all contributing to increased business agility."
    },
    {
      id: 4,
      question: "Does DevOps consulting support advanced features like AI or real-time data?",
      answer:
        "Yes. DevOps integrates seamlessly with AI tools, real-time monitoring systems, cloud infrastructure, and analytics, enabling intelligent, data-driven applications."
    },
    {
      id: 5,
      question: "How much does it cost to implement DevOps with a DevOps consulting company?",
      answer:
        "Costs vary depending on infrastructure complexity, service scope, and required integrations. Custom quotes are provided to match your business goals and budget."
    },
    {
      id: 6,
      question: "How does Code Neptune ensure great operational efficiency with DevOps solutions?",
      answer:
        "Code Neptune uses a strategy-first approach with in-depth assessments, automation blueprints, CI/CD optimization, and continuous monitoring to ensure flawless operational performance."
    },
    {
      id: 7,
      question: "How long does it take to see results from DevOps consulting?",
      answer:
        "Most organizations begin seeing improvements in 8 to 12 weeks. Full DevOps transformation may take longer, but agile processes ensure steady progress and quality outcomes."
    },
    {
      id: 8,
      question: "Does Code Neptune provide post-implementation DevOps support?",
      answer:
        "Yes. We provide complete post-implementation support including bug fixes, performance monitoring, updates, security improvements, and scalability planning."
    },
    {
      id: 9,
      question: "Can DevOps be used for enterprise-grade applications?",
      answer:
        "Yes. DevOps supports advanced architectures suitable for large-scale enterprise apps in finance, healthcare, retail, logistics, and many other industries."
    },
    {
      id: 10,
      question: "How can I start my DevOps consulting project with Code Neptune?",
      answer:
        "You can start by booking a free consultation. Our experts will discuss your goals, analyze your systems, and create a custom roadmap for your DevOps transformation."
    }
  ];


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
      <WorkWithUs padding={'pb-16'} />
      <OurDevopsConsultingProcess />
      <Testimonials />
      <IndustriesWeServe padding='pb-16' />
      <TechStack />
      <Faqs faqs={devopsFaqs}/>
      <ContactForm />
      <Location />
    </div>
  )
}

export default page
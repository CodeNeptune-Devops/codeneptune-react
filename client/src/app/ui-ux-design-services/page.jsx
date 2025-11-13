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

  const uiuxFaqs = [
    {
      id: 1,
      question: "What does a UI/UX design company do for startups?",
      answer:
        "We help companies design visually appealing interfaces and seamless user experiences that increase sign-ups, reduce churn, and enhance customer loyalty."
    },
    {
      id: 2,
      question: "Do you create UX design systems for scaling products?",
      answer:
        "Yes. We build modular design systems with reusable components to ensure scaling products maintain consistency and speed during new feature rollouts."
    },
    {
      id: 3,
      question: "Why is UX research important before designing a tech product?",
      answer:
        "UX research reveals real user behaviours and pain-points, allowing SaaS product teams to prioritise features, craft intuitive navigation, and increase usability before development."
    },
    {
      id: 4,
      question: "What tools do you use for UI/UX design?",
      answer:
        "Our design tech-stack includes Figma, FigJam, Adobe XD, Sketch, Maze, Whimsical, and Zeplin for smooth collaboration with developers."
    },
    {
      id: 5,
      question: "How long does it take to design a dashboard?",
      answer:
        "On average, UI/UX design for a dashboard takes 1 week, including research, prototyping, testing, and final design delivery."
    },
    {
      id: 6,
      question: "Do you provide post-launch design optimization support?",
      answer:
        "Absolutely. We offer iterative UX optimisation, feature design, and A/B test variants to continuously improve product metrics after launch."
    },
    {
      id: 7,
      question: "Can better UI design help my product rank higher on Google?",
      answer:
        "Improved UX leads to lower bounce rates and longer dwell time — behavioural signals Google uses to evaluate page quality and improve rankings."
    },
    {
      id: 8,
      question: "What makes your UX design approach unique?",
      answer:
        "We blend startup agility with enterprise-grade research. The result? Designs that look premium and perform even better."
    },
    {
      id: 9,
      question: "What industries do you design UI/UX for?",
      answer:
        "We specialise in UI/UX design for technology verticals such as fintech, health-tech, cloud SaaS, on-demand platforms, AI products, cybersecurity tools, and enterprise software."
    },
    {
      id: 10,
      question: "How do I get started with your UI/UX services?",
      answer:
        "Simply schedule a free consultation. We’ll understand your product goals and propose a tailored roadmap for UX/UI engagement."
    }
  ];


  return (
    <div>
      <Hero />
      <DesigningDigitalProducts />
      <DesigningServicesWeOffer />
      <DesignPartner />
      <WhyUiUxMatters />
      <DesignStackWeHave />
      <IndustriesWeServe padding='pb-16' />
      <WhyChooseCodeNeptune />
      <HowSmartUiUxDesign />
      <FeaturedCaseStudy />
      <Faqs faqs={uiuxFaqs}/>
      <Blogs />
      <ContactForm />
      <Location />
    </div>
  )
}

export default page
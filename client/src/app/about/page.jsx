'use client'

import ASmallTeamWithABigFocus from '@/components/about/ASmallTeamWithABigFocus'
import MeetTheTeam from '@/components/about/MeetTheTeam'
import OurMissionVisionTeam from '@/components/about/OurMissionVisionTeam'
import WhatDrivesUs from '@/components/about/WhatDrivesUs'
import WhatWeBuild from '@/components/about/WhatWeBuild'
import WhyClientChooseUs from '@/components/about/WhyClientChooseUs'
import Faqs from '@/components/Faqs'
import ContactForm from '@/components/forms/ContactForm'
import Hero from '@/components/Hero'
import Location from '@/components/Location'
import ContactModal from '@/modals/ContactModal'
import React, { useState } from 'react'

function page() {

  const [isModalOpen,setIsModalOpen] = useState(false);

  const staticfaqs = [
    {
      id: 1,
      question: "What services does Code Neptune offer?",
      answer:
        "We offer website development, mobile app development, eCommerce solutions, SEO services, custom design, and complete digital transformation for your business.",
    },
    {
      id: 2,
      question: "How long does it take to finish a project?",
      answer:
        "Timelines vary by project. A website usually takes 2–3 weeks. A mobile app takes 4–6 weeks. We always share a clear timeline before starting.",
    },
    {
      id: 3,
      question: "I have a small business. Can I still work with Code Neptune?",
      answer:
        "Yes. We work with businesses of all sizes. From startups to enterprises. We offer affordable packages tailored to your needs and budget.",
    },
    {
      id: 4,
      question: "I don’t have any technical knowledge. Can I still manage my site or app?",
      answer:
        "Yes. We create user-friendly dashboards that are easy to manage. We also offer training and support if you ever need help.",
    },
    {
      id: 5,
      question: "How do I know which service is right for me?",
      answer:
        "You can contact us anytime. Our team will understand your goals and suggest the best digital solution. Whether it’s a website, app, or SEO service.",
    },
    {
      id: 6,
      question: "Can I get a custom design instead of using templates?",
      answer:
        "Yes. We specialize in custom design and development. Every project is built to match your brand and business goals.",
    },
    {
      id: 7,
      question: "Can you create a full eCommerce website for my online store?",
      answer:
        "Yes. We build complete eCommerce websites with product pages, payment gateways, shipping options, and mobile friendly designs ready for sales.",
    },
    {
      id: 8,
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "Yes. We offer ongoing support, maintenance, and updates to keep your website or app running smoothly.",
    },
    {
      id: 9,
      question: "Do you build mobile apps for Android and iOS?",
      answer:
        "Yes. We develop custom mobile apps for Android, iOS, and even cross-platform apps that work on both using a single codebase.",
    },
    {
      id: 10,
      question: "What makes Code Neptune different from others?",
      answer:
        "We focus on delivering quality, speed, and value. We listen to your needs, offer honest advice, and build powerful digital solutions that work.",
    },
    {
      id: 11,
      question: "Will my website or app be SEO-friendly and fast?",
      answer:
        "Absolutely. We follow SEO best practices and speed optimization techniques to make sure your site or app performs well and ranks on search engines.",
    },
    {
      id: 12,
      question: "How do I get started with Code Neptune?",
      answer:
        "Getting started is easy. You can fill out the contact form on our website, send us a message on WhatsApp, or give us a call. Our team will quickly get in touch, understand your needs, and guide you through the next steps.",
    },
  ];


  return (
    <div>
      <Hero
        text1='Websites That Work, Built'
        text2='by People Who Care'
        description='We’re Code Neptune. A team of thinkers, designers, and developers who believe great websites don’t need to be complicated or expensive. We keep things simple, personal, and results-driven.'
      />
      <OurMissionVisionTeam />
      {/* <MeetTheTeam /> */}
      <ASmallTeamWithABigFocus />
      <WhatDrivesUs />
      <WhatWeBuild isOpen={() => setIsModalOpen(true)}/>
      <WhyClientChooseUs />
      <Faqs faqs={staticfaqs} />
      <ContactForm />
      <Location />
      <ContactModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default page
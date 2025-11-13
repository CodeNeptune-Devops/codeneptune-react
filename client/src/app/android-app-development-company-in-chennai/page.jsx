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

  const androidFaqs = [
    {
      id: 1,
      question: "What are Android app development services?",
      answer:
        "Android app development services cover designing, building, and maintaining apps for the Android platform. They ensure your app works seamlessly across devices, meets business needs, and provides a great user experience.",
    },
    {
      id: 2,
      question: "How do Android app development services ensure security?",
      answer:
        "Developers follow best practices like encrypted APIs, secure coding, and regular updates to reduce vulnerabilities, keeping your Android app safe from breaches.",
    },
    {
      id: 3,
      question:
        "Why should I choose custom Android app development over ready-made solutions?",
      answer:
        "Custom Android app development is tailored to your business model, ensuring unique features, scalability, and long-term flexibility compared to off-the-shelf apps.",
    },
    {
      id: 4,
      question:
        "Can existing apps be upgraded through Android app development services?",
      answer:
        "Yes, existing apps can be redesigned, optimized, or migrated with new features and tech support through professional Android app development services.",
    },
    {
      id: 5,
      question: "How long does it take to develop an Android app?",
      answer:
        "The timeline depends on complexity, features, and integrations. A simple app may take weeks, while advanced Android app development services for enterprise apps may take a few months.",
    },
    {
      id: 6,
      question: "What is the cost of custom Android app development?",
      answer:
        "The cost depends on features, complexity, and integrations. Custom Android app development may be higher initially but delivers better ROI over time.",
    },
    {
      id: 7,
      question:
        "What industries benefit most from custom Android app development?",
      answer:
        "Custom Android app development works well across industries like e-commerce, healthcare, education, finance, and logistics, as apps are built to match specific business goals.",
    },
    {
      id: 8,
      question: "Do you provide post-launch support for Android apps?",
      answer:
        "Yes, reliable Android app development services include maintenance, bug fixing, and updates to keep apps functional and market-ready after launch.",
    }
  ];


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
      <IndustriesWeServe padding='pb-16' />
      <HowWeBuildIntelligentSolutions />
      <Faqs faqs={androidFaqs} />
      <Blogs />
      <ContactForm />
      <Location />
    </div>
  )
}

export default page
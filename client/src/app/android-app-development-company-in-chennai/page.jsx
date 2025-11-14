import AndroidAppDevelopmentServices from '@/components/android-app-development-company-in-chennai/AndroidAppDevelopmentServices'
import BreakingDownTheBarriers from '@/components/android-app-development-company-in-chennai/BreakingDownTheBarriers'
import MobileAsTheCoreOfModernBusiness from '@/components/android-app-development-company-in-chennai/MobileAsTheCoreOfModernBusiness'
import OurAndroidDevelopmentCompany from '@/components/android-app-development-company-in-chennai/OurAndroidDevelopmentCompany'
import OurApproach from '@/components/android-app-development-company-in-chennai/OurApproach'
import Blogs from '@/components/Blogs'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import Faqs from '@/components/Faqs'
import ContactForm from '@/components/forms/ContactForm'
import Hero from '@/components/Hero'
import HowWeBuildIntelligentSolutions from '@/components/home/HowWeBuildIntelligentSolutions'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import React from 'react'

export const metadata = {
  title: "Android App Development Company in Chennai ",
  description:
    "Code Neptune is a top Android app development company in Chennai offering custom Android app development, UI/UX design, performance optimization, and scalable mobile solutions.",
  alternates: {
    canonical: "https://www.codeneptune.com/android-app-development-company-in-chennai",
  },
};

function Page() {

  const androidFaqs = [
    {
      id: 1,
      question: "What are Android app development services?",
      answer:
        "Android app development includes designing, building, testing, and maintaining mobile apps for Android devices.",
    },
    {
      id: 2,
      question: "How do Android app development services ensure security?",
      answer:
        "Industry-best practices, secure coding, encrypted APIs, and regular updates ensure high security.",
    },
    {
      id: 3,
      question: "Why choose custom Android app development?",
      answer:
        "Custom apps provide unique features, scalability, and branding tailored to your business goals.",
    },
    {
      id: 4,
      question: "Can existing apps be upgraded?",
      answer:
        "Yes, we redesign, optimize, and migrate apps with advanced features and improvements.",
    },
    {
      id: 5,
      question: "How long does Android app development take?",
      answer:
        "Simple apps take a few weeks, while enterprise-grade apps may take a few months.",
    },
    {
      id: 6,
      question: "What is the cost of Android app development?",
      answer:
        "Cost depends on the features, complexity, and integrations required.",
    },
    {
      id: 7,
      question: "Which industries benefit most?",
      answer:
        "E-commerce, healthcare, finance, logistics, education, and more benefit from Android apps.",
    },
    {
      id: 8,
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer maintenance, bug fixes, updates, and feature enhancements.",
    },
  ];

  return (
    <div>

      {/* Breadcrumb Schema for Google Sitelinks */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.codeneptune.com" },
          { name: "Android App Development", url: "https://www.codeneptune.com/android-app-development-company-in-chennai" },
        ]}
      />

      <Hero
        text1={'Turning Concepts into'}
        text2={'Market Ready Android Apps'}
        description={
          'We are a leading Android app development company in Chennai, helping businesses build fast, secure, and user-friendly mobile apps. Our expert Android developers create robust solutions designed for performance and long-term growth.'
        }
        buttonText='Lets Build Together'
      />

      <OurAndroidDevelopmentCompany />
      <AndroidAppDevelopmentServices />
      <MobileAsTheCoreOfModernBusiness />
      <OurApproach />
      <BreakingDownTheBarriers />
      <IndustriesWeServe padding="pb-16" />
      <HowWeBuildIntelligentSolutions />
      <Faqs faqs={androidFaqs} />
      <Blogs />
      <ContactForm />
      <Location />
    </div>
  );
}

export default Page;
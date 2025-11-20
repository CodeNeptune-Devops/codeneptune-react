import Blogs from '@/components/Blogs';
import Faqs from '@/components/Faqs';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import ContactForm from '@/components/forms/ContactForm';
import Hero from '@/components/Hero'
import HowWeWorkOurEcommerceDevelopment from '@/components/HowWeWorkOurEcommerceDevelopment';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import Location from '@/components/Location';
import OurProvenDevelopmentProcess from '@/components/OurProvenDevelopmentProcess'
import TechStack from '@/components/TechStack';
import CompleteWebsiteDesignAndDevelopment from '@/components/website-developers-in-chennai/CompleteWebsiteDesignAndDevelopment';
import SolutionsForAllBusinessNeed from '@/components/website-developers-in-chennai/SolutionsForAllBusinessNeed';
import WhyClientChooseUs from '@/components/website-developers-in-chennai/WhyClientChooseUs';
import WhyCodeNeptuneIsTheRightChoice from '@/components/website-developers-in-chennai/WhyCodeNeptuneIsTheRightChoice';
import YourWebsiteIsABusinessAsset from '@/components/website-developers-in-chennai/YourWebsiteIsABusinessAsset'
import AffordablePlansForEveryBusiness from '@/components/website-development-company/AffordablePlansForEveryBusiness';
import EveryWebsiteWeBuild from '@/components/website-development-company/EveryWebsiteWeBuild';
import SkilledWebDevelopmentTeam from '@/components/website-development-company/SkilledWebDevelopmentTeam';
import WorkWithUs from '@/components/WorkWithUs';
import { Package, Search, Target, TestTube } from 'lucide-react';
import React from 'react'

function page() {

  const stepsList = [
    {
      number: "01",
      icon: "/proven-development-process/e-1.svg",
      title: "Strategy & Planning",
      description: "We understand your business, your audience, and your goals to plan the right approach."
    },
    {
      number: "02",
      icon: "/proven-development-process/e-2.svg",
      title: "Wireframing & Design",
      description: "We develop layouts and visuals to ensure your ideas are brought to life with user-focused design."
    },
    {
      number: "03",
      icon: "/proven-development-process/e-3.svg",
      title: "Development",
      description: "Our experienced website developers in Chennai build your site using modern, scalable technologies."
    },
    {
      number: "04",
      icon: "/proven-development-process/e-4.svg",
      title: "Testing Across Devices",
      description: "We ensure flawless functionality on browsers and devices through rigorous testing."
    },
    {
      number: "05",
      icon: "/proven-development-process/e-5.svg",
      title: "Launch & After-Support",
      description: "After your site goes live, we provide support to maintain performance and handle updates."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What makes Code Neptune one of the top website developers in Chennai?",
      answer:
        "At Code Neptune, we combine modern design, fast performance, and strategic SEO implementation to create websites that not only look great but also deliver results. As experienced website developers in Chennai, we focus on user experience, conversion optimization, and mobile-first design to meet the needs of growing businesses."
    },
    {
      id: 2,
      question: "Do you offer website redesign services for outdated websites?",
      answer:
        "Yes, we specialize in website redesign and optimization. If your current site is slow, hard to navigate, or not generating leads, we can revamp it with a modern look, improved performance, and better user flow to meet today’s digital standards."
    },
    {
      id: 3,
      question: "Can your team handle both business websites and eCommerce platforms?",
      answer:
        "Yes, we offer full-service web solutions for both business websites and online stores. Whether you’re a small business or a product-based company, our team of web developers in Chennai builds responsive, secure, and SEO-ready websites tailored to your specific goals."
    },
    {
      id: 4,
      question: "Can you integrate payment gateways for my online store?",
      answer:
        "Yes, we can integrate secure payment gateways like Razorpay, Stripe, or PayPal into your eCommerce website. Our developers ensure smooth checkout experiences and compliance with all safety protocols, making online transactions hassle-free for your customers."
    },
    {
      id: 5,
      question: "How long does it take to complete a website development project?",
      answer:
        "Project timelines vary depending on the scope. A standard business website typically takes 2–3 weeks, while a feature-rich eCommerce site may take 4–6 weeks. As a trusted website creation company in Chennai, we follow a structured development process with clear milestones and regular updates."
    },
    {
      id: 6,
      question: "What industries do you serve with your web development services?",
      answer:
        "We work with clients across various industries, including healthcare, retail, education, real estate, finance, logistics, travel, and more. Our experience allows us to tailor websites that match each industry’s unique customer journey."
    },
    {
      id: 7,
      question: "Will my website be mobile-friendly and optimized for SEO?",
      answer:
        "Absolutely. Every website we deliver is fully responsive and built with SEO best practices. Our team ensures that your site loads fast, works across all devices, and includes proper meta tags, structured data, and on-page SEO—making us a reliable website development company in Chennai."
    },
    {
      id: 8,
      question: "How do I get started with your website development services?",
      answer:
        "Getting started is easy. Just fill out our contact form or call us directly. Our experts will schedule a consultation to understand your requirements and recommend the best solution. As a leading website development company in Chennai, we make the process seamless from discovery to launch."
    }
  ];

  const approach = [
    {
      number: "1",
      icon: <Search className="w-8 h-8" />,
      title: "Discovery and Planning",
      description:
        "We begin by learning about your business, target audience, and market landscape. Our team conducts collaborative sessions to map user journeys, clarify goals, and define the features your website needs to succeed online.",
      outcome: "A strategic roadmap that aligns technology, goals, and user needs."
    },
    {
      number: "2",
      icon: <Target className="w-8 h-8" />,
      title: "UI/UX Design & Prototyping",
      description:
        "Our designers create wireframes and visual prototypes that are easy to navigate and visually aligned with your brand. Every element is planned with purpose, encouraging user interaction while ensuring consistency across devices.",
      outcome: "A user-centric interface blueprint ready for development."
    },
    {
      number: "3",
      icon: <Package className="w-8 h-8" />,
      title: "Custom Development",
      description:
        "With the design finalized, our developers build your website using secure, scalable, and modern technologies. Whether it’s a business website, eCommerce store, or custom dashboard, we code each feature to perform efficiently and grow with your needs.",
      outcome: "A fully functional eCommerce platform tailored to your needs."
    },
    {
      number: "4",
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing and Launch",
      description:
        "Before your website goes live, we carry out detailed testing across browsers and devices. This ensures smooth functionality, fast loading, and a flawless user experience. After launch, we remain available for updates, performance enhancements, and long-term support.",
      outcome: "A stable, secure, and high-performing application."
    }
  ];



  return (
    <div>
      <Hero
        text1='Websites Built to'
        text2='Perform and Convert'
        description="We don’t just create websites. We deliver digital platforms built to perform. As a leading website development company in Chennai, our team builds high-converting, mobile-ready websites that strengthen your online presence and help you grow faster."
      />
      <YourWebsiteIsABusinessAsset />
      <CompleteWebsiteDesignAndDevelopment />
      <OurProvenDevelopmentProcess
        title='Our 5-Step Website Development Workflow'
        description='Working with a web site development company in Chennai should be simple, efficient, and goal-focused.'
        data={stepsList}
      />
      <WhyCodeNeptuneIsTheRightChoice />
      <SolutionsForAllBusinessNeed />
      <AffordablePlansForEveryBusiness />
      <SkilledWebDevelopmentTeam />
      <WorkWithUs />
      <IndustriesWeServe padding='pb-16' />
      <EveryWebsiteWeBuild />
      <TechStack />
      <HowWeWorkOurEcommerceDevelopment processes={approach}/>
      <WhyClientChooseUs />
      <FeaturedCaseStudy />
      <Faqs faqs={faqs} />
      <Blogs />
      <ContactForm />
      <Location />
    </div>
  )
}

export default page
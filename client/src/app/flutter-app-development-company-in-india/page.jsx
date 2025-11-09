import FeaturedCaseStudy from '@/components/FeaturedCaseStudy'
import DesignedForGrowthAndConversion from '@/components/flutter-app-development-company-in-india/DesignedForGrowthAndConversation'
import FlutterDevelopmentTechStack from '@/components/flutter-app-development-company-in-india/FlutterDevelopmentTechStack'
import OurFlutterAppDevelopmentServices from '@/components/flutter-app-development-company-in-india/OurFlutterAppDevelopmentServices'
import WhyChooseCNForFlutterDevelopment from '@/components/flutter-app-development-company-in-india/WhyChooseCNForFlutterDevelopment'
import WhyChooseOurFlutterSolutions from '@/components/flutter-app-development-company-in-india/WhyChooseOurFlutterSolutions'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/titles/SectionTitle'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import WorkWithUs from '@/components/WorkWithUs'
import React from 'react'
import {
    Wallet,
    HeartPulse,
    School,
    ShoppingBag,
    Truck,
    Clapperboard,
    Plane,
    Landmark,
} from "lucide-react";
import OurProvenDevelopmentProcess from '@/components/OurProvenDevelopmentProcess'
import Testimonials from '@/components/Testimonials'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import TechStack from '@/components/TechStack'
import Faqs from '@/components/Faqs'
import Blogs from '@/components/Blogs'
import ContactForm from '@/components/forms/ContactForm'
import Location from '@/components/Location'

function page() {

    const data = [
        {
            title: "Fintech",
            description:
                "We develop secure digital wallets, UPI enabled payment systems, budgeting tools, and trading apps. Built for compliance and seamless user experiences.",
            icon: <Wallet />,
        },
        {
            title: "Healthcare",
            description:
                "Our HIPAA compliant solutions include patient management systems, virtual consultations, and wearable integrations, enhancing care and accessibility.",
            icon: <HeartPulse />,
        },
        {
            title: "Education",
            description:
                "We create mobile-first learning platforms, interactive eLearning apps, and assessment tools for engaging, effective digital education.",
            icon: <School />,
        },
        {
            title: "Retail & eCommerce",
            description:
                "Our apps offer real-time inventory, secure payments, personalized shopping, and loyalty programs to boost engagement and sales.",
            icon: <ShoppingBag />,
        },
        {
            title: "Logistics & Transportation",
            description:
                "We deliver GPS-enabled fleet tracking, route optimization, and automated dispatch systems for faster, cost-efficient logistics.",
            icon: <Truck />,
        },
        {
            title: "Entertainment",
            description:
                "Our Flutter-based apps include OTT platforms, music players, and social video tools, optimized for engagement and scalability.",
            icon: <Clapperboard />,
        },
        {
            title: "Travel & Hospitality",
            description:
                "We build booking platforms, itinerary planners, and digital check-in apps for seamless travel experiences.",
            icon: <Plane />,
        },
        {
            title: "Government & Public Services",
            description:
                "We create grievance systems, digital identity solutions, and utility management tools for efficient service delivery.",
            icon: <Landmark />,
        },
    ];

    const stepsList = [
        {
            number: "01",
            title: "Discovery & User Journey",
            description:
                "We start with workshops, analyze goals, and define personas to design a strategic user journey aligned with business objectives.",
            bgColor: "bg-slate-700",
        },
        {
            number: "02",
            title: "Design & Prototyping",
            description:
                "Our UI/UX team creates a custom design system and interactive prototypes to ensure smooth navigation and high user engagement.",
            bgColor: "bg-indigo-500",
        },
        {
            number: "03",
            title: "Agile Development",
            description:
                "Using Flutter’s single codebase, we build cross-platform apps quickly, maintaining top performance, security, and continuous feedback throughout development.",
            bgColor: "bg-emerald-500",
        },
        {
            number: "04",
            title: "Integration & Features",
            description:
                "We integrate APIs, payments, chat, and AI features to deliver a future-ready app with real-time updates and smart functionality.",
            bgColor: "bg-amber-400",
        },
        {
            number: "05",
            title: "Launch & Optimization",
            description:
                "From app store submission to post-launch monitoring, we provide updates, feature enhancements, and ongoing support for continuous growth.",
            bgColor: "bg-neutral-800",
        },
    ];

    return (
        <div>
            <Hero
                text1='Build High Quality,'
                text2='Multi-Platform Apps with Flutter'
                description='We are a leading Flutter app development company based in India, specializing in end to end Flutter solutions that combine exceptional UI and UX with measurable business impact. Our mission is clear: to deliver stunning apps that provide a native like experience on iOS, Android, web, and desktops.'
            />
            <WhyChooseOurFlutterSolutions />
            <DesignedForGrowthAndConversion />
            <OurFlutterAppDevelopmentServices />
            <WhyChooseCNForFlutterDevelopment />
            <FlutterDevelopmentTechStack />
            <WorkWithUs />
            <FeaturedCaseStudy />
            <div className='pt-16 max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-4'>
                <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
                    Our Services
                </p>
                <SectionTitle
                    title='Flutter App Development Across Industries'
                    description='At Code Neptune, our Flutter expertise spans multiple industries, delivering customized solutions that address real business challenges and deliver measurable impact.'
                />
                <FeaturesSectionWithHoverEffects data={data} />
            </div>
            <OurProvenDevelopmentProcess
                title='Our Flutter App Development Process'
                description='We follow a design-led, agile methodology that ensures your Flutter app is not just functional but engaging, scalable, and business-ready from day one.'
                data={stepsList}
                padding='pb-16'
            />
            <Testimonials />
            <IndustriesWeServe padding='pb-16'/>
            <TechStack />
            <Faqs />
            <Blogs />
            <ContactForm />
            <Location />
        </div>
    )
}

export default page
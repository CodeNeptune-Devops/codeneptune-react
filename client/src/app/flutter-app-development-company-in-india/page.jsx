import FeaturedCaseStudy from '@/components/FeaturedCaseStudy'
import DesignedForGrowthAndConversion from '@/components/flutter-app-development-company-in-india/DesignedForGrowthAndConversation'
import FlutterDevelopmentTechStack from '@/components/flutter-app-development-company-in-india/FlutterDevelopmentTechStack'
import OurFlutterAppDevelopmentServices from '@/components/flutter-app-development-company-in-india/OurFlutterAppDevelopmentServices'
import WhyChooseCNForFlutterDevelopment from '@/components/flutter-app-development-company-in-india/WhyChooseCNForFlutterDevelopment'
import WhyChooseOurFlutterSolutions from '@/components/flutter-app-development-company-in-india/WhyChooseOurFlutterSolutions'
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
import Hero from '@/components/Hero'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

// -------------------------------
// SEO Metadata + Canonical + Sitelinks
// -------------------------------
export const metadata = {
    title: "Flutter App Development Company in India ",
    description:
        "We build high-performance, cross-platform Flutter apps for startups and enterprises. Code Neptune delivers native-like performance across iOS, Android, Web, and Desktop using a single codebase.",
    alternates: {
        canonical: "https://www.codeneptune.com/flutter-app-development-company-in-india",
    },
};

function Page() {

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
                "HIPAA compliant patient management systems, virtual consultations, and wearable integrations.",
            icon: <HeartPulse />,
        },
        {
            title: "Education",
            description:
                "Mobile-first learning platforms, interactive eLearning apps, and assessment tools.",
            icon: <School />,
        },
        {
            title: "Retail & eCommerce",
            description:
                "Real-time inventory, secure payments, personalized shopping & loyalty programs.",
            icon: <ShoppingBag />,
        },
        {
            title: "Logistics & Transportation",
            description:
                "GPS-enabled fleet tracking, route optimization, and automated dispatch systems.",
            icon: <Truck />,
        },
        {
            title: "Entertainment",
            description:
                "OTT platforms, music players, and social video apps built using Flutter.",
            icon: <Clapperboard />,
        },
        {
            title: "Travel & Hospitality",
            description:
                "Booking apps, itinerary planners, and digital check-in apps.",
            icon: <Plane />,
        },
        {
            title: "Government & Public Services",
            description:
                "Grievance systems, digital identity apps & utility management tools.",
            icon: <Landmark />,
        },
    ];

    const stepsList = [
        {
            number: "01",
            icon: '/proven-development-process/e-1.svg',
            title: "Discovery & User Journey",
            description:
                "Workshops + persona development to map user journeys and goals.",
            bgColor: "bg-slate-700",
        },
        {
            number: "02",
            icon: '/proven-development-process/e-2.svg',
            title: "Design & Prototyping",
            description:
                "Custom UI system + prototypes to validate experience & navigation.",
            bgColor: "bg-indigo-500",
        },
        {
            number: "03",
            icon: '/proven-development-process/f-1.svg',
            title: "Agile Development",
            description:
                "Single codebase Flutter development with performance and security.",
            bgColor: "bg-emerald-500",
        },
        {
            number: "04",
            icon: '/proven-development-process/f-2.svg',
            title: "Integration & Features",
            description:
                "API integrations, payments, chat, real-time updates & AI features.",
            bgColor: "bg-amber-400",
        },
        {
            number: "05",
            icon: '/proven-development-process/f-3.svg',
            title: "Launch & Optimization",
            description:
                "App Store submission + ongoing monitoring + updates & enhancements.",
            bgColor: "bg-neutral-800",
        },
    ];

    const flutterFaqs = [
        {
            id: 1,
            question: "What is Flutter and why is it popular?",
            answer:
                "Flutter is Google’s cross-platform UI toolkit used to develop apps for iOS, Android, Web, and Desktop with a single codebase.",
        },
        {
            id: 2,
            question: "Which industries use Flutter?",
            answer:
                "Fintech, healthcare, education, logistics, eCommerce, entertainment & more.",
        },
        {
            id: 3,
            question: "How does Flutter benefit businesses?",
            answer:
                "Faster development, fewer bugs, lower cost, high performance & native UI feel.",
        },
        {
            id: 4,
            question: "Can Flutter integrate AI & real-time systems?",
            answer:
                "Yes — AI, chat, payments, maps, analytics, live tracking & more.",
        },
        {
            id: 5,
            question: "How much does Flutter development cost?",
            answer:
                "Cost depends on features and complexity. We offer custom pricing.",
        },
        {
            id: 6,
            question: "Does Code Neptune provide post-launch support?",
            answer:
                "Yes — maintenance, monitoring, updates & feature scaling.",
        },
        {
            id: 7,
            question: "Is Flutter good for enterprise apps?",
            answer:
                "Yes — Flutter supports advanced architecture, security, and scaling.",
        },
        {
            id: 8,
            question: "How long does it take to build a Flutter app?",
            answer:
                "Basic apps take 8–12 weeks; complex apps may take longer.",
        },
        {
            id: 9,
            question: "Can I start my Flutter project with Code Neptune?",
            answer:
                "Yes — book a free consultation with our Flutter experts.",
        },
    ];

    return (
        <div>

            {/* Breadcrumb Schema for Google Sitelinks */}
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.codeneptune.com" },
                    { name: "Flutter App Development", url: "https://www.codeneptune.com/flutter-app-development-company-in-india" },
                ]}
            />

            <Hero
                text1='Build High Quality,'
                text2='Multi-Platform Apps with Flutter'
                description='We are a leading Flutter app development company in India, specializing in end-to-end solutions that combine stunning UI, lightning performance, and measurable business results.'
                buttonText='Start Your Project'
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

                <div className='-mb-12 flex flex-col justify-start items-center gap-3'>
                    <SectionTitle
                        title='Flutter App Development Across Industries'
                        description='We deliver Flutter solutions tailored to different industries, solving real business problems with high-performance apps.'
                    />
                </div>

                <FeaturesSectionWithHoverEffects data={data} />
            </div>

            <OurProvenDevelopmentProcess
                title='Our Flutter App Development Process'
                description='A design-led, agile workflow that ensures your Flutter app is scalable, fast, and business-ready.'
                data={stepsList}
                padding='pb-16'
            />

            <Testimonials />
            <IndustriesWeServe padding='pb-16' />
            <TechStack />
            <Faqs faqs={flutterFaqs} />
            <Blogs />
            <ContactForm />
            <Location />
        </div>
    );
}

export default Page;
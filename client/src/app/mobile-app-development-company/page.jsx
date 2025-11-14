import Blogs from '@/components/Blogs'
import Faqs from '@/components/Faqs'
import ContactForm from '@/components/forms/ContactForm'
import Hero from '@/components/Hero'
import HowWeBuildIntelligentSolutions from '@/components/home/HowWeBuildIntelligentSolutions'
import OurServices from '@/components/home/OurServices'
import HowWeWorkOurEcommerceDevelopment from '@/components/HowWeWorkOurEcommerceDevelopment'
import IndustriesWeServe from '@/components/IndustriesWeServe'
import Location from '@/components/Location'
import CustomMobileAppDevelopmentServices from '@/components/mobile-app-development-company/CustomMobileAppDevelopmentServices'
import OurMvpDevelopment from '@/components/mobile-app-development-company/OurMvpDevelopment'
import WhyClientChooseUs from '@/components/mobile-app-development-company/WhyClientChooseUs'
import TechStack from '@/components/TechStack'
import SectionTitle from '@/components/titles/SectionTitle'
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects'
import {
    ShieldCheck,
    RefreshCw,
    AlertTriangle,
    Gauge,
    BarChart2,
    LifeBuoy
} from "lucide-react"
import React from 'react'

function MobileAppDevelopmentCompany() {

    const dataSet = [
        {
            title: "Proactive Monitoring & Fast Issue Fixes",
            text: "We continuously monitor your app to catch and fix problems before they impact your users. Our team works quickly to resolve issues, making sure your app runs smoothly and reliably at all times.",
        },
        {
            title: "Regular Updates & New Features",
            text: "To keep your app up-to-date, we provide regular updates and new features. Our team ensures that your app works well with the latest phone operating systems, and we make improvements based on user feedback and new trends.",
        },
        {
            title: "Top Security & Protection",
            text: "We make sure your app is secure. Regular security checks and updates protect your app from threats and help keep user data safe. We also ensure your app follows privacy laws and stays compliant.",
        },
        {
            title: "Performance Optimization for Speed",
            text: "A fast app is a successful app. We optimize your app to improve speed and performance, making sure it loads quickly and works smoothly on all devices and networks.",
        },
        {
            title: "Scaling for Business Growth",
            text: "As your business grows, your app should too. We make sure your app can handle more users, more data, and more features without slowing down.",
        },
        {
            title: "Ongoing Support After Launch",
            text: "We don’t stop after your app is live. Our team provides ongoing support, including fixing any problems, updating features, and making sure your app performs well over time.",
        },
    ];

    const mobileAppfaqs = [
        {
            id: 1,
            question: "Why does my business need a mobile app?",
            answer:
                "A mobile app helps you connect with your customers anytime, increases sales, and builds brand loyalty. It makes your business more reachable and easy to access.",
        },
        {
            id: 2,
            question: "Can I update or improve the app after it is launched?",
            answer:
                "Yes. We offer ongoing support and maintenance. You can add new features or make changes to improve the app anytime after launch.",
        },
        {
            id: 3,
            question: "Do you build apps for both Android and iOS?",
            answer:
                "Yes. We develop apps for Android, iOS, and even cross-platform apps that work on both using one single codebase. You can reach more users with one app.",
        },
        {
            id: 4,
            question: "Will you publish the app to Google Play and Apple App Store?",
            answer:
                "Yes. We handle the complete app submission process for both stores, making sure your app meets all the rules and is approved quickly.",
        },
        {
            id: 5,
            question: "How much does it cost to develop a mobile app?",
            answer:
                "The cost depends on what features you need. At Code Neptune, we offer flexible pricing for startups, small businesses, and large enterprises. We always keep your budget in mind.",
        },
        {
            id: 6,
            question: "I have only an idea. Can you help me build the app from scratch?",
            answer:
                "Absolutely. Even if you don’t have a design or plan, we’ll help you with everything from idea validation, design, development, and launch.",
        },
        {
            id: 7,
            question: "How long does it take to build a mobile app?",
            answer:
                "It usually takes 4 to 6 weeks for a standard app. If your app needs advanced features, it may take longer. We always share a clear timeline before we start.",
        },
        {
            id: 8,
            question: "Will the app be fast, secure, and user-friendly?",
            answer:
                "Yes. At Code Neptune, we focus on creating apps that are easy to use, load fast, and keep your data safe. We use the latest technology and follow best practices.",
        },
    ];

    return (
        <div>
            <Hero 
            text1='Building Apps,'
            text2='Transforming Your Business'
            description='At Code Neptune, we specialize in mobile app development that not only meets your business needs but drives real growth. From intuitive ui/ux design to seamless performance, our solutions help businesses stand out in a mobile first world.'
            buttonText='Lets Build Together'
            />
            <div className='pt-16 max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-4'>
                <div className='-mb-12 flex flex-col justify-start items-center gap-3'>
                    <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
                        More Than Apps, We Build Success
                    </p>
                    <SectionTitle
                        title='Why Code Neptune? Here’s Why!'
                        description='At Code Neptune, we don’t just build apps—we create impactful mobile experiences that drive business growth. With a focus on innovation, performance, and user engagement, we ensure your app stands out in a competitive market.'
                    />
                </div>
                <FeaturesSectionWithHoverEffects />
            </div>
            <CustomMobileAppDevelopmentServices />
            <IndustriesWeServe padding={'pb-16'} />
            <HowWeBuildIntelligentSolutions />
            <TechStack />
            <WhyClientChooseUs />
            <OurMvpDevelopment />
            <HowWeWorkOurEcommerceDevelopment />
            <OurServices data={dataSet} />
            <Faqs faqs={mobileAppfaqs} />
            <Blogs />
            <ContactForm />
            <Location />
        </div>
    )
}

export default MobileAppDevelopmentCompany
import Faqs from "@/components/Faqs";
import ContactForm from "@/components/forms/ContactForm";
import BuildIntelligentValue from "@/components/home/BuildIntelligentValue";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import Hero from "@/components/home/Hero";
import HowWeBuildIntelligentSolutions from "@/components/home/HowWeBuildIntelligentSolutions";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import OurImpactInNumbers from "@/components/home/OurImpactInNumbers";
import OurOffice from "@/components/home/OurOffice";
import OurServices from "@/components/home/OurServices";
import ROIOfIntelligence from "@/components/home/ROIOfIntelligence";
import TransformingBusinesses from "@/components/home/TransformingBusinesses";
import WorkWithUs from "@/components/home/WorkWithUs";
import YourAppDevelopmentJourneyBeginsHere from "@/components/home/YourAppDevelopmentJourneyBeginsHere";
import Location from "@/components/Location";
import OurTrustedPartners from "@/components/OutTrustedPartners";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero />
    <BuildIntelligentValue />
    <OurImpactInNumbers />
    <TransformingBusinesses />
    <OurServices />
    <HowWeBuildIntelligentSolutions />
    <YourAppDevelopmentJourneyBeginsHere />
    <ROIOfIntelligence />
    <FeaturedCaseStudy />
    <OurTrustedPartners infiniteScroll={true}/>
    <WorkWithUs />
    <IndustriesWeServe />
    <Testimonials />
    <TechStack />
     <OurOffice />
    <Faqs />
    <ContactForm />
    <Location />
   </div>
  );
}

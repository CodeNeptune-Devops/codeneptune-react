import BuildIntelligentValue from "@/components/home/BuildIntelligentValue";
import Hero from "@/components/home/Hero";
import HowWeBuildIntelligentSolutions from "@/components/home/HowWeBuildIntelligentSolutions";
import OurImpactInNumbers from "@/components/home/OurImpactInNumbers";
import OurServices from "@/components/home/OurServices";
import ROIOfIntelligence from "@/components/home/ROIOfIntelligence";
import TransformingBusinesses from "@/components/home/TransformingBusinesses";
import YourAppDevelopmentJourneyBeginsHere from "@/components/home/YourAppDevelopmentJourneyBeginsHere";
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
    {/* <ROIOfIntelligence /> */}
   </div>
  );
}

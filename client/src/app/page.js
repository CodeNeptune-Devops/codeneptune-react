import Faqs from "@/components/Faqs";
import ContactForm from "@/components/forms/ContactForm";
import BuildIntelligentValue from "@/components/home/BuildIntelligentValue";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import HowWeBuildIntelligentSolutions from "@/components/home/HowWeBuildIntelligentSolutions";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import OurImpactInNumbers from "@/components/home/OurImpactInNumbers";
import OurOffice from "@/components/home/OurOffice";
import OurServices from "@/components/home/OurServices";
import ROIOfIntelligence from "@/components/home/ROIOfIntelligence";
import TransformingBusinesses from "@/components/home/TransformingBusinesses";
import WorkWithUs from "@/components/WorkWithUs";
import YourAppDevelopmentJourneyBeginsHere from "@/components/home/YourAppDevelopmentJourneyBeginsHere";
import Location from "@/components/Location";
import OurTrustedPartners from "@/components/OutTrustedPartners";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Script from "next/script";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Code Neptune Technologies Pvt Ltd",
            "url": "https://www.codeneptune.com/",
            "logo": "",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-63829 58105",
              "contactType": "sales",
              "areaServed": [
                "US","GB","CA","AU","FR","DE","IN","MY","NL","NZ",
                "NG","RU","LK","AE","ZW","002","150"
              ],
              "availableLanguage": "en"
            }
          })
        }}
      />

      {/* LocalBusiness Schema */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Code Neptune Technologies Pvt Ltd",
            "image": "",
            "@id": "",
            "url": "https://www.codeneptune.com/",
            "telephone": "+91-63829 58105",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 624, 3rd Floor – S2, Khivraj Building",
              "addressLocality": "Anna Salai, Chennai",
              "postalCode": "600006",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.0653908,
              "longitude": 80.2599582
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday","Tuesday","Wednesday",
                "Thursday","Friday","Saturday"
              ],
              "opens": "10:00",
              "closes": "19:15"
            }
          })
        }}
      />
    <div>

      <Hero />
      <BuildIntelligentValue />
      <OurImpactInNumbers />
      <OurServices />
      <TransformingBusinesses />
      <HowWeBuildIntelligentSolutions />
      <YourAppDevelopmentJourneyBeginsHere />
      <ROIOfIntelligence />
      <FeaturedCaseStudy />
      <OurTrustedPartners infiniteScroll={true} />
      <WorkWithUs />
      <IndustriesWeServe />
      <Testimonials />
      <TechStack /> 
      {/* <OurOffice />  */}
      <Faqs />
      <ContactForm /> 
      <Location /> 
    </div>
    </>
  );
}

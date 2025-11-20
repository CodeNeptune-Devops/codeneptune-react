import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import DiscoverUs from '@/components/contact/DiscoverUs'
import Hero from '@/components/contact/Hero'
import WhyChooseCN from '@/components/contact/WhyChooseCN'
import Location from '@/components/Location'
import React from 'react'

// Server metadata (Required for sitelinks)
export const metadata = {
  title: "Contact Us | Let's Build Something Amazing",
  description:
    "Get in touch with Code Neptune for mobile app development, web development, UI UX design, and digital solutions. Our team is ready to discuss your project and support you.",
  alternates: {
    canonical: "https://www.codeneptune.com/contact-us",
  },
};

// Server Component
export default function ContactPage() {
  return (
    <div>

      {/* Breadcrumbs for sitelink eligibility */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.codeneptune.com" },
          { name: "Contact", url: "https://www.codeneptune.com/contact-us" },
        ]}
      />

      <Hero />
      <WhyChooseCN />
      <DiscoverUs />
      <Location />

    </div>
  );
}
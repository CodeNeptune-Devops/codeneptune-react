import DiscoverUs from '@/components/contact/DiscoverUs'
import Hero from '@/components/contact/Hero'
import WhyChooseCN from '@/components/contact/WhyChooseCN'
import Location from '@/components/Location'
import React from 'react'

function page() {
  return (
    <div>
        <Hero />
        <WhyChooseCN />
        <DiscoverUs />
        <Location />
    </div>
  )
}

export default page
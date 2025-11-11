import ASmallTeamWithABigFocus from '@/components/about/ASmallTeamWithABigFocus'
import MeetTheTeam from '@/components/about/MeetTheTeam'
import OurMissionVisionTeam from '@/components/about/OurMissionVisionTeam'
import WhatDrivesUs from '@/components/about/WhatDrivesUs'
import WhatWeBuild from '@/components/about/WhatWeBuild'
import WhyClientChooseUs from '@/components/about/WhyClientChooseUs'
import Faqs from '@/components/Faqs'
import ContactForm from '@/components/forms/ContactForm'
import Hero from '@/components/Hero'
import Location from '@/components/Location'
import React from 'react'

function page() {
  return (
    <div>
        <Hero 
        text1='Websites That Work, Built'
        text2='by People Who Care'
        description='We’re Code Neptune. A team of thinkers, designers, and developers who believe great websites don’t need to be complicated or expensive. We keep things simple, personal, and results-driven.'
        />
        <OurMissionVisionTeam />
        {/* <MeetTheTeam /> */}
        <ASmallTeamWithABigFocus />
        <WhatDrivesUs />
        <WhatWeBuild />
        <WhyClientChooseUs />
        <Faqs />
        <ContactForm />
        <Location />
    </div>
  )
}

export default page
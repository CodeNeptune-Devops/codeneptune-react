import ScrollReveal from '@/animatedTexts/scroll-reveal/ScrollReveal'
import React from 'react'

function BuildIntelligentValue() {
    return (
        <div className='max-w-7xl mx-auto w-full px-6 '>
            {/* <h5 className='w-full text-center text-5xl font-medium leading-relaxed'>Building Intelligent Value, Not Just Software</h5> */}

            <ScrollReveal
                baseOpacity={100}
                enableBlur={true}
                baseRotation={5}
                blurStrength={40}
                containerClassName=''
            >
                
                We focus on creating measurable impact through technology that learns, adapts, and delivers lasting value. Every project we build reflects our commitment to innovation, scalability, and real-world results.

            </ScrollReveal>
        </div>
    )
}

export default BuildIntelligentValue
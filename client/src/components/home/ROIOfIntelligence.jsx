import MagicBento from '@/animatedComponents/MagicBento'
import React from 'react'

function ROIOfIntelligence() {
  return (
    <div className='w-full pt-16'>
      <div className='w-full py-10 bg-black'>
        <div className='max-w-7xl mx-auto w-full'
      >
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
      </div>
    </div>
  )
}

export default ROIOfIntelligence
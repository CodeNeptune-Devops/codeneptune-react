import React from 'react'
import Image from 'next/image'
import ShinyText from '@/animatedTexts/ShinyText/ShinyText'

function WorkWithUs({padding}) {
    return (
        <div className={`w-full pt-16 bg-black ${padding}`}>
            <div className='max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-start items-center lg:justify-center gap-4 bg-black text-white rounded-xl py-14 px-12'
                style={{
                    backgroundImage: "url('/cta1.webp')", // 🔁 your image path here
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >

                {/* <div className='flex-1  flex justify-center items-center'>

                    <Image
                        src={founder}
                        alt='Founder'
                        height={300}
                        width={300}
                    />

                </div> */}

               

                <div className='flex-1 flex flex-col justify-start items-start gap-6 lg:pr-32'>
                    <h5 className='text-3xl font-semibold leading-9'>
                        Together, we design smarter digital experiences and help businesses achieve sustainable growth through intelligent technology.
                    </h5>

                    <button className="flex flex-col sm:flex-row items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                        <ShinyText
                            text="Work With Us"
                            disabled={false}
                            speed={3}
                            className='custom-class'
                        />
                    </button>
                </div>

                 <div className='flex-1'></div>

            </div>
        </div>
    )
}

export default WorkWithUs
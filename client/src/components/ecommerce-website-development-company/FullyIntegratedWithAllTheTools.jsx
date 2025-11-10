import React from 'react'
import SectionTitle from '../titles/SectionTitle'

function FullyIntegratedWithAllTheTools() {
    return (
        <div className='w-full pt-16'>
            <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-5'>

                <span className='px-4 py-3 bg-[#e1f7df] text-black uppercase font-medium rounded-full'>
                    Integrations
                </span>
               
               <div className='flex flex-col justify-start items-center gap-3'>
                 <h3 className={`text-2xl md:text-4xl lg:text-4xl font-medium leading-tight text-center  w-full`}>
                    Fully integrated with all the tools <br className='hidden md:block'/> you're already familiar with
                </h3>
                <p className={`text-base md:text-lg  leading-relaxed text-center`}>
                    We connect your online store with trusted tools for payments, shipping, messaging, and <br className='hidden md:block'/> more — based on what your business needs.
                </p>
               </div>
                <button className='px-6 py-3 bg-[#27b39b] text-white uppercase font-medium rounded-full'>
                    Explore integrations
                </button>
            </div>
        </div>
    )
}

export default FullyIntegratedWithAllTheTools
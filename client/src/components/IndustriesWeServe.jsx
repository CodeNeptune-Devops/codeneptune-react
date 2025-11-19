import React from 'react'
import SectionTitle from './titles/SectionTitle'
import Image from 'next/image';

function IndustriesWeServe({padding = 'pb-0'}) {

    const industries = [
        { id: 1, name: 'Health Care', icon: '/industries-we-serve/healthCare.svg' },
        { id: 2, name: 'Entertainment', icon: '/industries-we-serve/entertainment.svg' },
        { id: 3, name: 'Government', icon: '/industries-we-serve/government.svg' },
        { id: 4, name: 'Restaurant', icon: '/industries-we-serve/restaurant.svg' },
        { id: 5, name: 'E-commerce', icon: '/industries-we-serve/ecommerce.svg' },
        { id: 6, name: 'Travel', icon: '/industries-we-serve/travel.svg' },
        { id: 7, name: 'Social Media', icon: '/industries-we-serve/socialMedia.svg' },
        { id: 8, name: 'Agriculture', icon: '/industries-we-serve/agriculture.svg' },
        { id: 9, name: 'Education', icon: '/industries-we-serve/education.svg' },
        { id: 10, name: 'Real Estate', icon: '/industries-we-serve/realEstate.svg' },
        { id: 11, name: 'Logistics', icon: '/industries-we-serve/logistics.svg' },
        { id: 12, name: 'Aviation', icon: '/industries-we-serve/aviation.svg' },
        { id: 13, name: 'Finance', icon: '/industries-we-serve/finance.svg' },
        { id: 14, name: 'On Demand', icon: '/industries-we-serve/onDemand.svg' },
        { id: 15, name: 'Cyber Security', icon: '/industries-we-serve/cyberSecurity.svg' },
        { id: 16, name: 'Energy & Utilities', icon: '/industries-we-serve/energyUtilities.svg' },
        { id: 17, name: 'Retail', icon: '/industries-we-serve/retail.svg' },
        { id: 18, name: 'Sports & Fitness', icon: '/industries-we-serve/sportsFitness.svg' },
    ];


    return (
        <div className='w-full'>
            <div className={`w-full bg-black pt-16 ${padding}`}>
                <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-4 px-4'>

                    <div className='flex flex-col justify-start items-center gap-4'>
                        <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
                            Industries We Serve
                        </p>

                        <SectionTitle
                            textColor='text-white'
                            title='A Single Vision, Meeting Diverse Industry Demands'
                            description='Empowering businesses across industries with innovative, scalable, and tailored digital solutions.'
                        />
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-5 sm:gap-y-8 justify-center justify-items-center items-stretch mt-5'>
                        {industries.map((industry) => (
                            <div
                                key={industry.id}
                                className='flex flex-col justify-center items-center gap-3 px-1 py-3 border border-[#353535] rounded-lg shadow-md w-[8rem]  hover:bg-[#353535] transition-all duration-300 cursor-pointer'
                            >
                                <Image src={industry.icon} alt={industry.name} height={40} width={40} unoptimized/>
                                <h3 className='text-xs font-semibold text-center text-white  '>{industry.name}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IndustriesWeServe
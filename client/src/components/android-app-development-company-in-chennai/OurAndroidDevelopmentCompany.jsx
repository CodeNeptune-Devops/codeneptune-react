import React from 'react'
import SectionTitle from '../titles/SectionTitle'

function OurAndroidDevelopmentCompany() {
    const features = [
        {
            number: '01',
            title: 'Scalable App Architecture',
            description: 'We build apps designed to handle growth, ensuring smooth performance even as your user base expands.'
        },
        {
            number: '02',
            title: 'Engaging User Experience',
            description: 'Our Android app developers focus on intuitive designs that keep users engaged and coming back.'
        },
        {
            number: '03',
            title: 'On-Time Project Delivery',
            description: 'Using agile methods, we deliver every project within schedule without compromising on quality standards.'
        },
        {
            number: '04',
            title: 'Dedicated Ongoing Support',
            description: 'We provide continuous updates, maintenance, and improvements to keep your Android app future ready.'
        }
    ]

    return (
        <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Badge */}
                <div className="flex justify-center mb-4">
                    <p className='uppercase text-xs sm:text-sm text-blue-500 font-bold leading-relaxed tracking-wider sm:[letter-spacing:4px]'>
                        Why Choose Us
                    </p>
                </div>

                <SectionTitle
                    title='Our Android App Development Company in Chennai?'
                    description=' At Code Neptune, we focus on creating apps that deliver value beyond the screen. Our team of expert Android app developers in Chennai brings together innovation, design thinking, and the latest technology to craft solutions tailored to your goals.'
                />

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="relative group cursor-pointer">
                            {/* Top Border */}
                            <div className="h-1 w-full mb-6 bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></div>

                            {/* Number */}
                            <h3 className="text-4xl font-bold text-gray-900 mb-4">
                                {feature.number}
                            </h3>

                            {/* Title */}
                            <h4 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {feature.title}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-600 text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurAndroidDevelopmentCompany
import React from 'react';
import SectionTitle from '../titles/SectionTitle';

function AffordablePlansForEveryBusiness() {
    const plans = [
        {
            title: "Starter Website",
            price: "₹30,000",
            subtitle: "Starting from",
            description: "Perfect for small businesses and personal websites that need a clean, responsive site with essential features.",
            buttonText: "Get started"
        },
        {
            title: "eCommerce Site",
            price: "₹60,000",
            subtitle: "Starting from",
            description: "Get your online store up and running with secure payment gateways, product listings, and a user-friendly shopping experience.",
            buttonText: "Get started"
        },
        {
            title: "Custom Solutions",
            price: "Pricing",
            subtitle: "on request",
            description: "Tailored solutions for businesses looking for a unique, feature-rich website built with Angular, React, or any other custom technology. Pricing based on scope and complexity.",
            buttonText: "Get started"
        }
    ];

    return (
        <div className=" py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 space-y-3">
                    <p className='uppercase text-xs sm:text-sm text-blue-500 font-bold leading-relaxed tracking-wider sm:[letter-spacing:4px]'>
                        Pricing
                    </p>
                    <SectionTitle
                        title='Affordable Plans for Every Business'
                        description='We believe in transparency, so you will know exactly what youre getting. Our pricing is competitive and tailored to fit businesses of all sizes.'
                    />
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 border border-gray-200  transition-all duration-300 hover:shadow-lg flex flex-col"
                        >
                            {/* Plan Title */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6">
                                {plan.title}
                            </h3>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                    {plan.price}
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {plan.subtitle}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                                {plan.description}
                            </p>

                            {/* CTA Button */}
                            <button className="w-full py-3 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-md cursor-pointer">
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AffordablePlansForEveryBusiness;
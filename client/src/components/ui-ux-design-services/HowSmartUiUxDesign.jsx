import React from 'react';
import { ShoppingCart, MousePointer, AlertTriangle } from 'lucide-react';
import img1 from '../../assets/uiux/img5.webp';
import img2 from '../../assets/uiux/img6.webp';
import img3 from '../../assets/uiux/img7.webp';
import Image from 'next/image';

function HowSmartUiUxDesign() {
    const outcomes = [
        {
            icon: ShoppingCart,
            title: 'Faster Checkout Flow',
            description: 'We rebuilt a slow five step checkout into a clean three-step journey that felt effortless.',
            emoji: img3
        },
        {
            icon: MousePointer,
            title: 'Confidence at Every Click',
            description: 'Simple design, clear actions and helpful guidance made shoppers feel secure throughout the experience.',
            emoji: img2
        },
        {
            icon: AlertTriangle,
            title: 'Cart Drop-off Solved',
            description: 'After the redesign, the brand saw zero users abandoning their carts during a full 30-day campaign.',
            emoji: img1
        }
    ];

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-2">
                    <p className='uppercase text-xs sm:text-sm text-blue-500 font-bold leading-relaxed tracking-wider sm:[letter-spacing:4px]'>
                        Case Study
                    </p>
                    <h2 className={`text-2xl md:text-4xl lg:text-4xl font-medium leading-tight`}>
                        How Smart UI/UX Design Eliminated Cart Abandonment
                    </h2>
                </div>

                {/* Outcomes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {outcomes.map((outcome, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300"
                        >
                            {/* Icon Container */}
                            <div className="mb-6 flex justify-center">
                                <div className="relative">
                                    <Image 
                                    src={outcome.emoji}
                                    alt={outcome.title}
                                    height={200}
                                    width={200}
                                    className='h-full w-full'
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                                {outcome.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                {outcome.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HowSmartUiUxDesign;
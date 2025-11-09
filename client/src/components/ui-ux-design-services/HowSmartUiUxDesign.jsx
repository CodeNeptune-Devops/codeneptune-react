import React from 'react';
import { ShoppingCart, MousePointer, AlertTriangle } from 'lucide-react';

function HowSmartUiUxDesign() {
    const outcomes = [
        {
            icon: ShoppingCart,
            title: 'Faster Checkout Flow',
            description: 'We rebuilt a slow five step checkout into a clean three-step journey that felt effortless.',
            emoji: '🛒'
        },
        {
            icon: MousePointer,
            title: 'Confidence at Every Click',
            description: 'Simple design, clear actions and helpful guidance made shoppers feel secure throughout the experience.',
            emoji: '🖱️'
        },
        {
            icon: AlertTriangle,
            title: 'Cart Drop-off Solved',
            description: 'After the redesign, the brand saw zero users abandoning their carts during a full 30-day campaign.',
            emoji: '⚠️'
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
                                    {/* Main Illustration */}
                                    {index === 0 ? (
                                        // Shopping cart with steps
                                        <div className="w-48 h-48 flex items-center justify-center">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                {/* Cart */}
                                                <path d="M40 60 L50 60 L70 140 L150 140 L170 60 L60 60"
                                                    stroke="#3b82f6"
                                                    strokeWidth="6"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <rect x="55" y="70" width="50" height="50" fill="#3b82f6" opacity="0.2" rx="4" />
                                                {/* Wheels */}
                                                <circle cx="85" cy="155" r="10" fill="#6b7280" />
                                                <circle cx="135" cy="155" r="10" fill="#6b7280" />
                                                {/* Handle */}
                                                <path d="M50 60 L50 40 Q50 30 60 30"
                                                    stroke="#f97316"
                                                    strokeWidth="6"
                                                    fill="none"
                                                    strokeLinecap="round" />
                                                {/* Steps */}
                                                <text x="125" y="45" fontSize="24" fontWeight="bold" fill="#3b82f6">1</text>
                                                <line x1="145" y1="42" x2="175" y2="42" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" />
                                                <text x="125" y="75" fontSize="24" fontWeight="bold" fill="#3b82f6">2</text>
                                                <line x1="145" y1="72" x2="175" y2="72" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" />
                                                <text x="125" y="105" fontSize="24" fontWeight="bold" fill="#3b82f6">3</text>
                                                <line x1="145" y1="102" x2="175" y2="102" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                    ) : index === 1 ? (
                                        // Mouse with hand and shield
                                        <div className="w-48 h-48 flex items-center justify-center">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                {/* Shield */}
                                                <path d="M100 30 L130 40 L130 70 Q130 90 100 110 Q70 90 70 70 L70 40 Z"
                                                    fill="#3b82f6"
                                                    opacity="0.8" />
                                                <path d="M90 65 L98 75 L115 55"
                                                    stroke="white"
                                                    strokeWidth="5"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                {/* Mouse */}
                                                <ellipse cx="70" cy="130" rx="18" ry="25" fill="#9ca3af" />
                                                <line x1="70" y1="110" x2="70" y2="125" stroke="#6b7280" strokeWidth="3" />
                                                <ellipse cx="70" cy="112" rx="8" ry="6" fill="#6b7280" />
                                                {/* Hand */}
                                                <path d="M110 140 Q100 120 115 115 L120 120 Q125 110 130 115 L132 125 Q137 120 140 125 L142 135 Q147 132 148 137 L150 160 Q152 180 135 185 L120 185 Q105 180 105 165 Z"
                                                    fill="#fbbf77"
                                                    opacity="0.9" />
                                                {/* Sparkles */}
                                                <circle cx="150" cy="60" r="3" fill="#fbbf24" />
                                                <circle cx="165" cy="75" r="4" fill="#fbbf24" />
                                                <circle cx="145" cy="85" r="2.5" fill="#fbbf24" />
                                            </svg>
                                        </div>
                                    ) : (
                                        // Cart with warning
                                        <div className="w-48 h-48 flex items-center justify-center">
                                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                                {/* Cart */}
                                                <path d="M40 60 L50 60 L70 140 L150 140 L170 60 L60 60"
                                                    stroke="#3b82f6"
                                                    strokeWidth="6"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round" />
                                                <rect x="55" y="70" width="50" height="50" fill="#3b82f6" opacity="0.2" rx="4" />
                                                {/* Wheels */}
                                                <circle cx="85" cy="155" r="10" fill="#6b7280" />
                                                <circle cx="135" cy="155" r="10" fill="#6b7280" />
                                                {/* Handle */}
                                                <path d="M50 60 L50 40 Q50 30 60 30"
                                                    stroke="#3b82f6"
                                                    strokeWidth="6"
                                                    fill="none"
                                                    strokeLinecap="round" />
                                                {/* Warning Triangle */}
                                                <path d="M140 30 L175 90 L105 90 Z"
                                                    fill="#fbbf24"
                                                    stroke="#f97316"
                                                    strokeWidth="3" />
                                                <text x="137" y="72" fontSize="32" fontWeight="bold" fill="#78350f">!</text>
                                            </svg>
                                        </div>
                                    )}
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
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function DiscoverUs() {
    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "LOCATION",
            content: "Chennai, TN, INDIA"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "EMAIL US",
            content: "info@codeneptune.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "CALL US",
            content: ["+91 6382 958 105", "+91 93636 40633"]
        }
    ];

    // Placeholder images - replace with actual office images
    const images = [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop"
    ];

    return (
        <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* LEFT SIDE - Contact Information */}
                    <div className="space-y-8 lg:space-y-12">
                        {/* Header */}
                        <div className='space-y-4'>

                            <p className='uppercase text-xs sm:text-sm text-blue-500 font-bold leading-relaxed tracking-wider sm:[letter-spacing:4px]'>
                                Code Neptune is here to help you
                            </p>

                            <SectionTitle
                                align='text-start'
                                title='DISCOVER US'
                                description=" Our experts are available to answer any questions you might have. We've got the answers."
                            />
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                                {item.title}
                                            </h3>
                                            {Array.isArray(item.content) ? (
                                                <div className="space-y-1">
                                                    {item.content.map((phone, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={`tel:${phone.replace(/\s+/g, '')}`}
                                                            className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                                        >
                                                            {phone}
                                                        </a>
                                                    ))}
                                                </div>
                                            ) : item.title === "EMAIL US" ? (
                                                <a
                                                    href={`mailto:${item.content}`}
                                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                                >
                                                    {item.content}
                                                </a>
                                            ) : (
                                                <p className="text-gray-600">{item.content}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE - Image Gallery with Alternative Design */}
                    <div className="relative">
                        {/* Masonry-style Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Large Image - Top Left */}
                            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                                <img
                                    src={images[0]}
                                    alt="Office space 1"
                                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Two Small Images - Top Right */}
                            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                                <img
                                    src={images[1]}
                                    alt="Office space 2"
                                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                                <img
                                    src={images[2]}
                                    alt="Office space 3"
                                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>


                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DiscoverUs;
import React from 'react';
import { Briefcase, TrendingUp, Pencil, Monitor, ShoppingCart, Wrench } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function OnDemandeCommerceWebsiteDevelopment() {
    const services = [
        {
            icon: Briefcase,
            title: "eCommerce Website Consultation",
            description: "We guide you from start to finish. Whether you are planning, growing, or rebuilding your online store, we suggest the right features and tools to match your business goals."
        },
        {
            icon: TrendingUp,
            title: "eCommerce Store Upgrade",
            description: "We help you upgrade your old website into a fast, mobile-friendly, and modern eCommerce store. This brings better customer experience and helps you stay ahead of the competition."
        },
        {
            icon: Pencil,
            title: "Easy-to-Use UI/UX Design",
            description: "We create designs that are easy to use and nice to look at. From layout to colors and navigation, we make sure your website looks great and works smoothly on all devices."
        },
        {
            icon: Monitor,
            title: "Custom eCommerce Development",
            description: "We build your online store just the way you want it. From adding special features like AI or APIs to creating a strong backend, our experts make sure your store is ready to grow."
        },
        {
            icon: ShoppingCart,
            title: "Hassle-Free Platform Migration",
            description: "If your current platform is outdated, we help you move to a better one. We make sure there is no data loss and your store design and features stay safe during the shift."
        },
        {
            icon: Wrench,
            title: "Ongoing Support and Maintenance",
            description: "After your website is live, we don't disappear. We offer full support and regular updates so your website stays secure, fast, and ready for customers all the time."
        }
    ];

    return (
        <div className='w-full pt-16 bg-[#1879f0]'>
            <div className='max-w-7xl w-full mx-auto px-6 py-12'>
                <SectionTitle
                    textColor='text-white'
                    descriptionColor='text-white'
                    title='On-Demand eCommerce Website Development Services to Help Your Business Grow'
                    description='The online market is full of competition. We offer eCommerce website services that help improve speed, design, and user experience. So your store performs better and sells more.'
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='bg-blue-500/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-blue-500/50 transition-all duration-300'
                        >
                            <div className='mb-6'>
                                <div className='w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center'>
                                    <service.icon className='w-7 h-7 text-white' strokeWidth={2} />
                                </div>
                            </div>

                            <h3 className='text-white text-xl font-semibold mb-4'>
                                {service.title}
                            </h3>

                            <p className='text-white/90 text-sm leading-relaxed'>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OnDemandeCommerceWebsiteDevelopment;
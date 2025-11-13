'use client'

import React, { useState } from 'react'
import { TiTick } from "react-icons/ti"
import { IoArrowForwardCircle } from 'react-icons/io5'
import { FaRegStar } from "react-icons/fa"
import { useContactForm } from '@/hooks/useContactForm'
import { usePathname } from 'next/navigation'
import { toast } from 'react-toastify'

function ContactForm() {
    const pathname = usePathname();

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        foundUs: null,
        message: '',
    });

    const { mutate: submitForm, isPending } = useContactForm();

    const options = [
        { label: 'Google', value: 'google' },
        { label: 'Social Media', value: 'social_media' },
        { label: 'Friends', value: 'friends' },
        { label: 'Referral', value: 'referral' },
        { label: 'Others', value: 'others' },
    ];

    const aboutUs = [
        { title: 'Tell us about your project', description: 'Let us know everything you want to achieve!' },
        { title: 'We\'ll set up an informal chat', description: 'A quick, no-pressure call to understand your needs.' },
        { title: 'Receive a competitive quote', description: 'Enjoy transparent pricing with potential discounts!' }
    ];

    const socialLinks = [
        { platform: 'LinkedIn', icon: '/contact-form/linkedin.svg', url: 'https://www.linkedin.com/company/codeneptune/' },
        { platform: 'Instagram', icon: '/contact-form/instagram.svg', url: 'https://www.instagram.com/codeneptune/' },
        { platform: 'Dribbble', icon: '/contact-form/dribbble.svg', url: 'https://dribbble.com/codeneptune' },
        { platform: 'Pinterest', icon: '/contact-form/pinterest.svg', url: 'https://in.pinterest.com/codeneptune/_saved/' },
        { platform: 'Facebook', icon: '/contact-form/facebook.svg', url: 'https://www.facebook.com/codeneptune' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOptionSelect = (value) => {
        setFormData(prev => ({
            ...prev,
            foundUs: value
        }));
    };

    const isFormValid = formData.name && formData.mobile && formData.email && formData.message;

    const handleSubmit = (e) => {
        e.preventDefault();

        submitForm(
            {
                ...formData,
                formType: 'contact-form',
                submittedFrom: pathname || '/',
            },
            {
                onSuccess: (data) => {
                    toast.success(data.message || "Form submitted successfully!");

                    setFormData({
                        name: '',
                        mobile: '',
                        email: '',
                        foundUs: null,
                        message: '',
                    });
                },
                onError: (error) => {
                    toast.error(error?.message || "Failed to submit form.");
                }
            }
        );
    };

    return (
        <div className='w-full pt-12 sm:pt-16 md:pt-24 px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-start items-start gap-5 sm:gap-8 lg:gap-5 relative'>

                <span className='hidden md:block absolute top-[1px] right-0 w-[50%] lg:w-[70%] h-1 bg-[#0072FF]'></span>

                {/* LEFT SIDE FORM */}
                <div className='w-full lg:basis-[55%] flex flex-col justify-start items-start gap-3 pt-[7px]'>

                    <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900'>
                        Your Next
                        <span className='bg-[#0072FF] rounded-t-md rounded-br-md px-2 ml-2'>
                            Big
                        </span>
                        <br />
                        Move
                        <span className='bg-[#0072FF] rounded-b-md rounded-tl-md ml-2'>
                            Starts
                        </span>
                        {' '}Here!
                    </h3>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-6 py-5'>

                        {/* NAME + MOBILE */}
                        <div className='flex flex-col sm:flex-row gap-4 w-full'>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder='Name'
                                required
                                className='w-full sm:w-[48%] border-b border-[#BEBEBE] p-2 focus:outline-none'
                            />

                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                placeholder='Your Mobile Number'
                                required
                                className='w-full sm:w-[48%] border-b border-[#BEBEBE] p-2 focus:outline-none'
                            />
                        </div>

                        {/* EMAIL */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email'
                            required
                            className='w-full border-b border-[#BEBEBE] p-2 focus:outline-none'
                        />

                        {/* FOUND US */}
                        <div className='flex flex-col gap-3'>
                            <label className='text-sm text-[#2D2D2D]'>Where did you find us?</label>

                            <div className='flex flex-wrap gap-4'>
                                {options.map((option) => (
                                    <div key={option.value} className='flex items-center gap-2 cursor-pointer'>
                                        <span
                                            className={`w-4 h-4 border border-[#DADADA] rounded-sm flex justify-center items-center
                                            ${formData.foundUs === option.value ? 'bg-[#02BC7D]' : ''}`}
                                            onClick={() => handleOptionSelect(option.value)}
                                        >
                                            {formData.foundUs === option.value && (
                                                <TiTick className='text-white text-sm' />
                                            )}
                                        </span>
                                        <span
                                            className='text-xs sm:text-sm text-[#2D2D2D]'
                                            onClick={() => handleOptionSelect(option.value)}
                                        >
                                            {option.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* MESSAGE */}
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder='Message'
                            required
                            rows={3}
                            className='w-full border-b border-[#BEBEBE] p-2 resize-none focus:outline-none'
                        />

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            disabled={!isFormValid || isPending}
                            className={`px-6 py-3 w-60 cursor-pointer rounded-lg flex items-center gap-3 text-sm sm:text-base transition-all 
                                ${isFormValid && !isPending
                                    ? 'bg-[#0072FF] text-white hover:bg-blue-600'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            <IoArrowForwardCircle className='text-xl sm:text-2xl' />
                            {isPending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE (STATIC DETAILS) */}
                <div className='w-full lg:basis-[45%] flex flex-col gap-0 mt-1'>

                    {/* STEPS */}
                    <div className='flex flex-col sm:flex-row w-full bg-black text-white px-4 sm:px-6 gap-3'>
                        <div className='flex flex-col w-full sm:w-[60%] gap-7 py-6'>
                            {aboutUs.map((item, index) => (
                                <div key={index} className='flex gap-3'>
                                    <p className='text-4xl md:text-5xl font-medium text-[#0072FF]'>
                                        0{index + 1}
                                    </p>
                                    <div>
                                        <h3 className='text-sm font-light'>{item.title}</h3>
                                        <p className='text-xs'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex w-full sm:w-[40%] justify-end py-4'>
                            <div className='flex flex-col text-[#0072FF] gap-1 ps-5'>
                                <FaRegStar size={45} />
                                <h2 className='text-5xl font-extrabold uppercase leading-tight'>
                                    We<br />keep<br />things<br />simple
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT BOXES */}
                    <div className='border border-[#0072FF]'>

                        {/* ENQUIRY + CAREERS */}
                        <div className='p-4 flex flex-col gap-4'>
                            <div className='flex flex-col sm:flex-row gap-4'>

                                <div className='w-full border-b border-[#BEBEBE] pb-2'>
                                    <p className='uppercase font-medium'>Enquiry</p>
                                    <div className='flex gap-2 text-xs'>
                                        <a href="tel:+916382958105">+91 63829 58105</a>
                                        <span>|</span>
                                        <a href="tel:+919363640633">+91 93636 40633</a>
                                    </div>
                                </div>

                                <div className='w-full border-b border-[#BEBEBE] pb-2'>
                                    <p className='uppercase font-medium'>Careers</p>
                                    <a className='text-xs' href="tel:+919841600980">+91 98416 00980</a>
                                </div>

                            </div>
                        </div>

                        {/* EMAIL + VISIT */}
                        <div className='p-4 flex flex-col gap-4'>
                            <div className='flex flex-col sm:flex-row gap-4'>

                                <div className='w-full border-b border-[#BEBEBE] pb-2'>
                                    <p className='uppercase font-medium'>Email</p>
                                    <a className='text-xs break-all' href="mailto:info@codeneptune.com">
                                        info@codeneptune.com
                                    </a>
                                </div>

                                <div className='w-full border-b border-[#BEBEBE] pb-2'>
                                    <p className='uppercase font-medium'>Visit</p>
                                    <p className='text-xs'>
                                        No. 624, 3rd Floor – S2, Khivraj Building, Anna Salai, Chennai – 600 006
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* SOCIAL LINKS */}
                        <div className='p-4 flex gap-3'>
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                                   className='hover:scale-105 transition'>
                                    <img src={link.icon} alt={link.platform} className='w-6 h-6' />
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm

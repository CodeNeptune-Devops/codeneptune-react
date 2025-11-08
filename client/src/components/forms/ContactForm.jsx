'use client'

import React, { useState } from 'react'
import { TiTick } from "react-icons/ti"
import { IoArrowForwardCircle } from 'react-icons/io5'
import { FaRegStar } from "react-icons/fa"

function ContactForm() {

    const [selectedOption, setSelectedOption] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);

    const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

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
        {platform:'Instagram', icon: '/contact-form/instagram.svg' ,url:'https://www.instagram.com/codeneptune/'},
        {platform:'Dribbble', icon: '/contact-form/dribbble.svg' , url:'https://dribbble.com/codeneptune'},
        {platform:'Pinterest', icon: '/contact-form/pinterest.svg' ,url:'https://in.pinterest.com/codeneptune/_saved/'},
        {platform:'Facebook', icon: '/contact-form/facebook.svg' ,url:'https://www.facebook.com/codeneptune'},
    ];

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
        setIsFormValid(!!token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recaptchaToken) {
            alert('Please complete the reCAPTCHA verification');
            return;
        }
        console.log('Form submitted with reCAPTCHA token:', recaptchaToken);
    };

    return (
        <div className='w-full pt-12 sm:pt-16 md:pt-24 px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-start items-start gap-5 sm:gap-8 lg:gap-5 relative'>

                <span className='hidden md:block absolute top-[1px] right-0 w-[50%] lg:w-[70%] h-1 bg-[#0072FF]'></span>

                <div className='w-full lg:basis-[55%] flex flex-col justify-start items-start gap-3'>
                    <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900'>
                        Your Next
                        <span className='bg-[#0072FF] rounded-t-md rounded-br-md px-2 leading-tight ml-2'>
                            Big
                        </span>
                        <br />
                        Move
                        <span className='bg-[#0072FF] rounded-b-md rounded-tl-md relative ml-2'>
                            Starts
                        </span>
                        {' '}Here!
                    </h3>
                    
                    {/* form */}
                    <div className='w-full flex flex-col justify-start items-center gap-4 sm:gap-6 py-3 sm:py-5'>
                        <div className='w-full flex flex-col sm:flex-row justify-start items-center sm:justify-between gap-4'>
                            <input
                                type="text"
                                placeholder='Name'
                                className='w-full sm:w-[48%] focus:outline-none border-b border-b-[#BEBEBE] p-2 text-sm sm:text-base'
                            />
                            <input
                                type="text"
                                placeholder='Your Mobile Number'
                                className='w-full sm:w-[48%] focus:outline-none border-b border-b-[#BEBEBE] p-2 text-sm sm:text-base'
                            />
                        </div>

                        <div className='w-full flex flex-col sm:flex-row justify-start items-center sm:justify-between gap-4'>
                            <input
                                type="text"
                                placeholder='Email'
                                className='w-full focus:outline-none border-b border-b-[#BEBEBE] p-2 text-sm sm:text-base'
                            />
                        </div>

                        <div className='w-full flex flex-col justify-start items-start gap-3 sm:gap-4'>
                            <label className='text-sm sm:text-md text-[#2D2D2D]'>Where did you find us?</label>
                            <div className='w-full flex flex-wrap justify-start items-center gap-3 sm:gap-4 md:gap-6'>
                                {options.map((option) => (
                                    <div key={option.value} className='flex justify-center items-center gap-2'>
                                        <span
                                            className={`w-4 h-4 border border-[#DADADA] rounded-sm cursor-pointer flex justify-center items-center ${selectedOption === option.value ? 'bg-[#02BC7D]' : ''}`}
                                            onClick={() => setSelectedOption(option.value)}
                                        >
                                            {selectedOption === option.value && <TiTick className='text-white text-sm' />}
                                        </span>
                                        <label htmlFor={option.value} className='text-xs sm:text-sm text-[#2D2D2D] cursor-pointer'>{option.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full flex flex-col sm:flex-row justify-start items-center sm:justify-between gap-4'>
                            <input
                                type="text"
                                placeholder='Message'
                                className='w-full focus:outline-none border-b border-b-[#BEBEBE] p-2 text-sm sm:text-base'
                            />
                        </div>

                        <div className='w-full flex flex-col sm:flex-row justify-start items-start sm:items-center sm:justify-between gap-4'>
                            <div className='flex justify-between items-center gap-3 w-full'>
                                <div className='flex justify-start items-center gap-4 w-full'>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!isFormValid}
                                        className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base ${isFormValid
                                            ? 'bg-[#0072FF] text-white hover:bg-blue-600 cursor-pointer'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        <IoArrowForwardCircle className='text-xl sm:text-2xl' /> Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:basis-[45%] flex flex-col justify-start items-start gap-0 mt-1'>
                    <div className='flex flex-col sm:flex-row justify-between items-stretch w-full gap-3 bg-[#000000] text-white px-4 sm:px-6'>
                        <div className='flex flex-col justify-start items-start w-full sm:w-[60%] gap-5 sm:gap-7 py-4 sm:py-6'>
                            {aboutUs.map((item, index) => (
                                <div key={index} className='flex justify-start items-start gap-2 sm:gap-3 w-full'>
                                    <p className='text-3xl sm:text-4xl md:text-5xl font-medium text-[#0072FF] w-[40px] sm:w-[50px] md:w-[60px] flex-shrink-0'>0{index + 1}</p>
                                    <div className='flex flex-col justify-start items-start gap-1'>
                                        <h3 className='text-sm sm:text-md font-light text-start'>{item.title}</h3>
                                        <p className='text-xs'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex w-full sm:w-[40%] items-stretch py-4 sm:py-0'>
                            <div className='flex flex-col w-full items-start sm:justify-end sm:ps-5 text-[#0072FF] gap-1'>
                                <FaRegStar size={40} className='sm:w-[50px] sm:h-[50px]' />
                                <h2 className='text-4xl sm:text-5xl font-extrabold uppercase leading-8 sm:leading-10 ps-0 sm:ps-3'>
                                    We<br /> keep<br /> things<br />simple
                                </h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col w-full items-stretch border-b border-l border-e border-[#0072FF]'>
                        <div className='flex flex-col w-full items-start justify-end text-black gap-1 p-3 sm:p-4'>
                            <div className='w-full flex flex-col sm:flex-row justify-start items-start sm:items-center sm:justify-between gap-3 sm:gap-4'>
                                <div className='flex flex-col justify-start items-start gap-2 border-b border-[#BEBEBE] p-1 w-full sm:w-[55%]'>
                                    <p className='uppercase font-medium text-base sm:text-lg'>Enquiry</p>
                                    <div className='flex flex-wrap justify-start items-center gap-2 w-full text-xs'>
                                        <a className='' href="tel:+916382958105">+91 63829 58105</a>
                                        <span>|</span>
                                        <a className='' href="tel:+919363640633">+91 93636 40633</a>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-start items-start gap-2 border-b border-[#BEBEBE] p-1 w-full sm:w-[50%]'>
                                    <p className='uppercase font-medium text-base sm:text-lg'>Careers</p>
                                    <div className='flex justify-start items-center gap-2 w-full text-xs'>
                                        <a className='' href="tel:+919841600980">+91 98416 00980</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-col w-full items-start justify-end text-black gap-1 p-3 sm:p-4'>
                            <div className='w-full flex flex-col sm:flex-row justify-start items-start sm:items-stretch sm:justify-between gap-3 sm:gap-4'>
                                <div className='flex flex-col justify-start items-start gap-2 border-b border-[#BEBEBE] p-1 w-full sm:w-[55%]'>
                                    <p className='uppercase font-medium text-base sm:text-lg'>Email</p>
                                    <div className='flex justify-start items-center gap-2 w-full text-xs break-all'>
                                        <a className='' href="mailto:info@codeneptune.com">info@codeneptune.com</a>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-start items-start gap-2 border-b border-[#BEBEBE] p-1 w-full sm:w-[50%]'>
                                    <p className='uppercase font-medium text-base sm:text-lg'>Visit</p>
                                    <div className='flex justify-start items-center gap-2 w-full text-xs'>
                                        <a className='' href="tel:+919841600980">
                                            No. 624, 3rd Floor – S2, Khivraj Building, Anna Salai,
                                            Chennai – 600 006
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-col w-full items-start justify-end text-black gap-1 p-3 sm:p-4'>
                            <div className='flex flex-wrap items-center gap-3 sm:gap-2'>
                                {socialLinks.map((link, index) => (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className='inline-block hover:scale-105 transition-transform'>
                                        <img 
                                            src={link.icon} 
                                            alt={link.platform} 
                                            className='w-5 h-5 sm:w-6 sm:h-6' 
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
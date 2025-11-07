'use client'

import React, { useState, useEffect } from 'react'
import { TiTick } from "react-icons/ti"
// import ReCAPTCHA from 'react-google-recaptcha'
import { IoArrowForwardCircle } from 'react-icons/io5'
import { FaRegStar } from "react-icons/fa"
import Image from 'next/image'
import ReCAPTCHA from 'react-google-recaptcha'
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap", 
});

function ContactForm() {

    const [selectedOption, setSelectedOption] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);

    // Replace with your actual reCAPTCHA site key from Google Cloud Consoles
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
        // Handle form submission here
        console.log('Form submitted with reCAPTCHA token:', recaptchaToken);
    };

    return (
        <div className='w-full pt-24'>
            <div className=' w-full flex flex-col lg:flex-row justify-start items-center md:justify-end md:items-start gap-5 relative'>

                <span className='absolute top-[1px] right-0  w-[70%] h-1 bg-[#0072FF]'></span>

                <div className='basis-[100%] lg:basis-[55%] flex flex-col justify-start items-start gap-3 max-w-2xl'>
                    <h3
                        className='text-4xl md:text-6xl  font-medium text-gray-900 '
                    >Your Next
                        <span className='bg-[#0072FF] rounded-t-md rounded-br-md px-2  leading-tight'>
                            Big
                        </span>
                        <br />
                        Move
                        <span className='bg-[#0072FF] rounded-b-md rounded-tl-md relative'>
                            Starts
                            
                        </span>
                        Here!
                    </h3>
                    {/* form */}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col justify-start items-center gap-6 py-5'>
                        <div className='w-full flex flex-col md:flex-row justify-start items-center md:justify-between gap-4'>
                            <input
                                type="text"
                                placeholder='Name'
                                className='w-[45%] focus:outline-none border-b border-b-[#BEBEBE] p-2'
                            />
                            <input
                                type="text"
                                placeholder='Your Mobile Number'
                                className='w-[45%] focus:outline-none border-b border-b-[#BEBEBE] p-2'
                            />
                        </div>

                        <div className='w-full flex flex-col md:flex-row justify-start items-center md:justify-between gap-4'>
                            
                            <input
                                type="text"
                                placeholder='Email'
                                className='w-full focus:outline-none border-b border-b-[#BEBEBE] p-2'
                            />
                        </div>

                        <div className='w-full flex flex-col justify-start items-start gap-4'>
                            <label className='text-md text-[#2D2D2D]'>Where did you find us?</label>
                            <div className='w-full flex flex-wrap justify-start items-center gap-6'>
                                {options.map((option) => (
                                    <div key={option.value} className='flex justify-center items-center gap-2'>
                                        <span
                                            className={`w-4 h-4 border border-[#DADADA] rounded-sm cursor-pointer flex justify-center items-center ${selectedOption === option.value ? 'bg-[#02BC7D] ' : ''}`}
                                            onClick={() => setSelectedOption(option.value)}
                                        >
                                            {selectedOption === option.value && <TiTick className='text-white' />}
                                        </span>
                                        <label htmlFor={option.value} className='text-sm text-[#2D2D2D] cursor-pointer'>{option.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full flex flex-col md:flex-row justify-start items-center md:justify-between gap-4'>
                            <input
                                type="text"
                                placeholder='Message'
                                className='w-full focus:outline-none border-b border-b-[#BEBEBE] p-2'
                            />
                        </div>

                        <div className='w-full flex flex-col md:flex-row justify-start items-center md:justify-between gap-4'>

                            <div className='flex justify-between items-center gap-3 w-full'>
                                <div className='flex justify-start items-center gap-4 w-full'>
                                    {/* reCAPTCHA */}
                                    {/* <ReCAPTCHA
                                        sitekey={RECAPTCHA_SITE_KEY}
                                        onChange={handleRecaptchaChange}
                                        onExpired={() => setRecaptchaToken(null)}
                                        className='cursor-pointer'
                                    /> */}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={!isFormValid}
                                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex justify-center items-center gap-3 ${isFormValid
                                            ? 'bg-[#0072FF] text-white hover:bg-blue-600 cursor-pointer'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        <IoArrowForwardCircle className='text-2xl' /> Send Message
                                    </button>
                                </div>
                            </div>

                        </div>

                    </form>
                </div>

                <div className='basis-[100%] lg:basis-[45%] flex flex-col justify-start items-start gap-0 px-4 lg:px-0 mt-1'>
                    <div className='flex justify-between items-stretch w-full gap-3 bg-[#000000] text-white px-6'>
                        <div className='flex flex-col justify-start items-start w-[60%] gap-7 py-6'>
                            {aboutUs.map((item, index) => (
                                <div key={index} className='flex  justify-start items-center gap-3 w-full'>
                                    <p className='text-5xl font-medium text-[#0072FF] w-[60px]'>0{index + 1}</p>
                                    <div className='flex flex-col justify-start items-start gap-1 '>
                                        <h3 className='text-md font-light text-start'>{item.title}</h3>
                                        <p className='text-xs'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex w-[40%] items-stretch  '>
                            <div className='flex flex-col w-full items-start justify-end ps-5 text-[#0072FF] gap-1'>
                                <FaRegStar size={50} className='' />
                                <h2 className={`text-5xl font-extrabold uppercase leading-10 ps-3 ${bebasNeue.className}`}>
                                    We<br /> keep<br /> things<br />simple
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full items-stretch border-b border-l border-e border-[#0072FF]'>
                        <div className='flex flex-col w-full items-start justify-end ps-5 text-black gap-1  p-4 '>
                            <div className='w-full flex flex-col md:flex-row justify-start items-center md:justify-between gap-4'>
                                <div className='flex flex-col justify-start items-start gap-2 border-b border-[#BEBEBE] p-1 w-[55%]'>
                                    <p className='uppercase font-medium text-lg'>Enquiry</p>
                                    <div className='flex justify-start items-center gap-2 w-full text-xs'>
                                        <a className='' href="tel:+916382958105">+91 63829 58105</a>
                                        <span>|</span>
                                        <a className='' href="tel:+919363640633"> +91 93636 40633</a>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-start items-start gap-2 border-b border-[#BEBEBE] p-1 w-[50%]'>
                                    <p className='uppercase font-medium text-lg'>Careers</p>
                                    <div className='flex justify-start items-center gap-2 w-full text-xs'>
                                        <a className='' href="tel:+919841600980">+91 98416 00980</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col w-full items-start justify-end ps-5 text-black gap-1  p-4 '>
                            <div className='w-full flex flex-col md:flex-row justify-start items-stretch md:justify-between gap-4'>
                                <div className='flex flex-col justify-start items-start gap-2 border-b border-[#BEBEBE] p-1 w-[55%]'>
                                    <p className='uppercase font-medium text-lg'>Email</p>
                                    <div className='flex justify-start items-center gap-2 w-full text-xs'>
                                        <a className='' href="mailto:info@codeneptune.com">info@codeneptune.com</a>

                                    </div>
                                </div>

                                <div className='flex flex-col justify-start items-start gap-2 border-b border-[#BEBEBE] p-1 w-[50%]'>
                                    <p className='uppercase font-medium text-lg'>Visit</p>
                                    <div className='flex justify-start items-center gap-2 w-full text-xs'>
                                        <a className='' href="tel:+919841600980">
                                            No. 624, 3rd Floor – S2, Khivraj Building, Anna Salai,
                                            Chennai – 600 006
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col w-full items-start justify-end ps-5 text-black gap-1  p-4 '>
                            {/* Social Links */}
                            <div className='flex items-center gap-2'>
                                {socialLinks.map((link,index) => (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className='inline-block me-3 hover:scale-105 transition-transform'>
                                        <Image 
                                        src={link.icon} 
                                        alt={link.platform} 
                                        height={200}
                                        width={200}
                                        className='w-6 h-6' 
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
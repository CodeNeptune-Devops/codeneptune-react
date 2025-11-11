'use client'

import React, { useState } from 'react';
import InputField from '../inputs/InputField';
import ModernSelect from '../inputs/ModernSelect';
import TextareaInput from '../inputs/TextAreaInput';

function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    source: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const serviceOptions = [
    { value: 'web-design', label: 'Web Design' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Consulting' }
  ];

  const sourceOptions = [
    { value: 'google', label: 'Google' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'ai-search', label: 'AI Search Engine' },
    { value: 'friends', label: 'Friends' },
    { value: 'referral', label: 'Referral' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container max-w-7xl w-full mx-auto px-4 pt-28 pb-12 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-start items-center lg:justify-center gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 basis-full lg:basis-[55%]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let's Build<br />
              Something Amazing<br />
              Together
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Whether you have an idea or need expert advice, we are here to help. Contact us and let's create something extraordinary!
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
              TRANSFORM MY BUSINESS
            </button>
          </div>

          {/* Right Form */}
          <div className="bg-blue-500 rounded-3xl p-6 md:p-8 mt-6 xl:mt-10 basis-full lg:basis-[45%]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Transform Ideas Into Digital Reality
            </h2>

            <div className="space-y-4">
              {/* Full Name & Phone */}
              <div className="grid md:grid-cols-2 gap-3">
                <InputField
                  label="Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              {/* Service & Source */}
              <div className="grid md:grid-cols-2 gap-3">
                <ModernSelect
                  label="Service you need"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  options={serviceOptions}
                />
                <ModernSelect
                  label="Where Did You Find?"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  options={sourceOptions}
              
                />
              </div>

              {/* Message */}
              <TextareaInput
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your project..."
              /> 

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
              >
                LET'S BUILD TOGETHER →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

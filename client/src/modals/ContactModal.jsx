
"use client";

import React, { useEffect, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Contact Modal Component
function ContactModal({ isOpen, onClose }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectDescription: '',
    countryCode: '+91',
    contactNumber: '',
    captcha: ''
  });

  const testimonials = [
    {
      name: "Bela Gupta D'Souza",
      role: "Founder, Edamama",
      image: "https://ui-avatars.com/api/?name=Bela+Gupta&background=E91E63&color=fff&size=120",
      quote: "We took a big leap of faith with Appinventiv who helped us translate our vision into reality with the perfectly comprehensive Edamama eCommerce solution. We are counting to get Edamama to launch on time and within budget, while rolling out the next phase of the platform with Appinventiv."
    },
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      image: "https://ui-avatars.com/api/?name=John+Smith&background=2196F3&color=fff&size=120",
      quote: "Outstanding service and dedication. The team delivered beyond our expectations and helped transform our business digitally."
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, InnovateLab",
      image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=4CAF50&color=fff&size=120",
      quote: "Professional, efficient, and always available. They understood our needs perfectly and delivered a solution that exceeded our goals."
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Disable body scroll when modal opens
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when modal closes
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is re-enabled
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 transition-all duration-300 ${
        isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-2xl max-w-5xl w-full h-[73vh] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row transition-all duration-300 ease-out transform ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={() => {
          if (!isOpen) setIsAnimating(false);
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[999999] bg-white rounded-full p-2 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Left Section - Testimonial */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-8 lg:w-1/2 hidden lg:flex flex-col justify-around">
          <div>
            <h2 className="text-lg  font-bold text-gray-800 mb-2">
              Leaving already?
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Hear from our clients and why 3000+ businesses trust CodeNeptune
            </p>

            {/* Testimonial Indicators */}
            <div className="flex gap-2 mb-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    index === currentTestimonial
                      ? 'bg-blue-600 w-8'
                      : 'bg-blue-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-10 h-10 rounded-full mb-4"
              />
              <h3 className="text-md font-bold text-gray-800 mb-1">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-gray-600 text-sm mb-3 italic">
                {testimonials[currentTestimonial].role}
              </p>
              
              <p className="text-gray-700 text-sm leading-relaxed break-words line-clamp-3">
                {testimonials[currentTestimonial].quote}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="p-8 lg:p-8 w-full lg:w-1/2 overflow-y-auto  flex justify-center itemms-start">
          

          <div className="mt-5 space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full text-sm border-b-2 border-gray-300 focus:border-blue-600 outline-none pb-2 text-gray-800 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail ID*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-sm border-b-2 border-gray-300 focus:border-blue-600 outline-none pb-2 text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <textarea
                name="projectDescription"
                placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)"
                value={formData.projectDescription}
                onChange={handleInputChange}
                rows={3}
                className="w-full text-sm border-b-2 border-gray-300 focus:border-blue-600 outline-none pb-2 text-gray-800 placeholder-gray-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-full text-sm border-b-2 border-gray-300 focus:border-blue-600 outline-none pb-2 text-gray-800 bg-transparent"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
              </div>
              <div className="col-span-2">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number*"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full text-sm border-b-2 border-gray-300 focus:border-blue-600 outline-none pb-2 text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="captcha"
                  placeholder="4 + 3 ="
                  value={formData.captcha}
                  onChange={handleInputChange}
                  className="w-full text-sm border-b-2 border-gray-300 focus:border-blue-600 outline-none pb-2 text-gray-800 placeholder-gray-500"
                />
              </div>
             
            </div>

            <div>
               <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-sm text-white font-semibold px-4 py-3 rounded-full transition-colors whitespace-nowrap cursor-pointer"
              >
                Schedule Free Consultation
              </button>
            </div>

            <div className="space-y-2 text-xs text-gray-600">
              <p>• In just <span className="font-semibold">2 mins</span> you will get a response</p>
              <p>• Your idea is 100% protected by our <span className="font-semibold">Non Disclosure Agreement</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal
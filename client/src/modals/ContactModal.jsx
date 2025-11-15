"use client";

import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from "react-toastify";

function ContactModal({ isOpen, onClose }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ⭐ reCAPTCHA v2 state
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectDescription: '',
    countryCode: '+91',
    contactNumber: '',
    foundUs: ''
  });

  const [errors, setErrors] = useState({});

  const testimonials = [
    {
      name: "Karthick Marimuthu",
      role: "Managing Director ER Civil Planners",
      color: 'bg-[#e81e61]',
      quote:
        "Code Neptune transformed the way we present our company online.Our new website reflects the quality and reliability we stand for in the construction industry.I recommend code neptune for website development"
    },
    {
      name: "Ayyappan Ramesh",
      role: "Founder Shoptune",
      color: 'bg-[#2196f3]',
      quote: "We needed an online store, and Code Neptune delivered that as we expected. The checkout flow, product filters, and mobile experience were all good in terms of design. Sales have noticeably improved since the revamp."
    },
    {
      name: "Amelia Harper",
      role: "Founder Harper Glow Studio",
      color: 'bg-[#4caf50]',
      quote: "I was looking for a salon booking platform that looked premium and worked flawlessly on mobile. Code Neptune delivered a stunning website that reflects our brand's personality and makes appointment scheduling super easy for our clients."
    }
  ];

  // ======================================================
  // 🚀 Load reCAPTCHA v2 when modal opens
  // ======================================================
  useEffect(() => {
    if (!isOpen || recaptchaLoaded) return;

    if (window.grecaptcha) {
      setRecaptchaLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "recaptcha-script-modal";
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);

    document.body.appendChild(script);
  }, [isOpen]);

  // Set up reCAPTCHA v2 callbacks and render widget
  useEffect(() => {
    // Define global callback functions
    window.onRecaptchaSuccessModal = (token) => {
      setRecaptchaToken(token);
    };

    window.onRecaptchaExpiredModal = () => {
      setRecaptchaToken(null);
      toast.warning('reCAPTCHA expired. Please verify again.');
    };

    // Render reCAPTCHA when script is loaded and modal is open
    if (recaptchaLoaded && isOpen && window.grecaptcha && window.grecaptcha.render) {
      const recaptchaContainer = document.getElementById('recaptcha-container-modal');
      if (recaptchaContainer && !recaptchaContainer.hasChildNodes()) {
        try {
          window.grecaptcha.render('recaptcha-container-modal', {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            callback: 'onRecaptchaSuccessModal',
            'expired-callback': 'onRecaptchaExpiredModal',
            theme: 'light'
          });
        } catch (error) {
          console.error('reCAPTCHA render error:', error);
        }
      }
    }

    return () => {
      delete window.onRecaptchaSuccessModal;
      delete window.onRecaptchaExpiredModal;
    };
  }, [recaptchaLoaded, isOpen]);

  // ======================================================
  // Modal Animation Handling
  // ======================================================
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ======================================================
  // Form Validation
  // ======================================================
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const cleanedNum = formData.contactNumber.replace(/[\s-+()]/g, "");
    if (!cleanedNum) newErrors.contactNumber = "Phone number required";
    else if (!/^[0-9]{10,15}$/.test(cleanedNum))
      newErrors.contactNumber = "Invalid phone number";

    if (!formData.foundUs) {
      newErrors.foundUs = "Please select how you found us";
    }

    if (!recaptchaToken) {
      newErrors.recaptcha = "Please complete the reCAPTCHA verification";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ======================================================
  // Submit Handler
  // ======================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          mobile: `${formData.countryCode}${formData.contactNumber}`,
          message: formData.projectDescription || "No message provided",
          foundUs: formData.foundUs || "not_specified",
          formType: "contact-modal",
          submittedFrom: window.location.pathname,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Thanks! We'll contact you shortly.");
        setFormData({
          fullName: "",
          email: "",
          projectDescription: "",
          countryCode: "+91",
          contactNumber: "",
          foundUs: ""
        });
        setRecaptchaToken(null);
        
        // Reset reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
        
        onClose();
      } else {
        toast.error(data.error || "Failed to submit form");
        
        // Reset reCAPTCHA on error
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
        setRecaptchaToken(null);
      }
    } catch (err) {
      toast.error("Something went wrong. Try again.");
      console.error(err);
      
      // Reset reCAPTCHA on error
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
      setRecaptchaToken(null);
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-[99999999999] transition-all duration-300 ${isOpen ? "bg-opacity-50" : "bg-opacity-0"
        }`}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className={`bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row transition-all duration-300 ease-out transform ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={() => !isOpen && setIsAnimating(false)}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[9999] bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* LEFT SIDE - TESTIMONIALS */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:w-1/2 hidden lg:flex flex-col justify-around">
          <div>
            <h2 className="font-bold text-gray-800 text-lg">Hear from our clients</h2>
            <p className="text-gray-600 text-sm mb-4">Why 3000+ businesses trust us</p>

            <div className="flex gap-2 mb-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 rounded-full transition-all cursor-pointer ${index === currentTestimonial ? "bg-blue-600 w-8" : "bg-blue-300 w-3"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl relative">
            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-gray-500 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-50"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white text-gray-500 p-2 rounded-full shadow cursor-pointer hover:bg-gray-50"
            >
              <ChevronRight />
            </button>

            <div className="text-center">

              <div className={`w-10 h-10 rounded-full mx-auto  flex justify-center items-center mb-3 text-white ${testimonials[currentTestimonial].color}`}>
                {testimonials[currentTestimonial].name
                  .split(" ")
                  .map(word => word[0])
                  .join("")
                  .toUpperCase()}
              </div>


              <h3 className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</h3>
              <p className="text-gray-500 text-sm italic">
                {testimonials[currentTestimonial].role}
              </p>

              <p className="text-gray-700 text-sm mt-3 line-clamp-3">
                {testimonials[currentTestimonial].quote}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-8 w-full lg:w-1/2 overflow-y-auto">
          <div className="space-y-5 mt-6">

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name*"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full text-sm border-b-2 text-gray-600 placeholder:text-gray-500 ${errors.fullName ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-600 outline-none pb-2`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full text-sm border-b-2 text-gray-600 placeholder:text-gray-500 ${errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-600 outline-none pb-2`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* MESSAGE */}
            <textarea
              name="projectDescription"
              rows={3}
              placeholder="Describe your project / idea (optional)"
              value={formData.projectDescription}
              onChange={handleInputChange}
              className="w-full text-sm border-b-2 text-gray-600 border-gray-300 pb-2 focus:border-blue-600 outline-none placeholder:text-gray-500"
            />

            {/* COUNTRY + PHONE */}
            <div>
              <div className="grid grid-cols-3 gap-4">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="border-b-2 text-gray-500 border-gray-300 focus:border-blue-600 pb-2 outline-none"
                >
                  <option className="text-gray-500" value="+91">+91</option>
                  <option className="text-gray-500" value="+1">+1</option>
                  <option className="text-gray-500" value="+44">+44</option>
                  <option className="text-gray-500" value="+61">+61</option>
                </select>

                <div className="col-span-2">
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact number*"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className={`w-full text-sm border-b-2 text-gray-600 placeholder:text-gray-500 ${errors.contactNumber ? "border-red-500" : "border-gray-300"
                      } pb-2 focus:border-blue-600 outline-none`}
                  />
                </div>
              </div>
              {errors.contactNumber && (
                <p className="text-red-500 text-xs mt-2">{errors.contactNumber}</p>
              )}
            </div>

            {/* WHERE DID YOU FIND US */}
            <div>
              <label className="block text-sm text-gray-700 mb-3 font-medium">
                Where did you find us?*
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Google', value: 'google' },
                  { label: 'Social Media', value: 'social_media' },
                  { label: 'Friends', value: 'friends' },
                  { label: 'Referral', value: 'referral' },
                  { label: 'Others', value: 'others' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="foundUs"
                      value={option.value}
                      checked={formData.foundUs === option.value}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-blue-600 cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.foundUs && (
                <p className="text-red-500 text-xs mt-2">{errors.foundUs}</p>
              )}
            </div>

            {/* reCAPTCHA v2 CHECKBOX */}
            <div className="flex justify-start py-2">
              <div id="recaptcha-container-modal"></div>
              {!recaptchaLoaded && (
                <div className="bg-gray-200 rounded p-4 animate-pulse w-[304px] h-[78px]"></div>
              )}
            </div>
            {errors.recaptcha && (
              <p className="text-red-500 text-xs text-center">{errors.recaptcha}</p>
            )}

            {/* SUBMIT BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 disabled:bg-blue-400 text-sm w-full cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
            </button>

            <div className="text-xs text-gray-500 space-y-1">
              <p>• You will receive a response within <b>2 minutes</b></p>
              <p>• Your idea is protected under our <b>NDA policy</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
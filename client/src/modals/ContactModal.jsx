"use client";

import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from "react-toastify";

function ContactModal({ isOpen, onClose }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ⭐ Optimized reCAPTCHA state
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 4, num2: 3 });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectDescription: '',
    countryCode: '+91',
    contactNumber: '',
    captcha: ''
  });

  const [errors, setErrors] = useState({});

  const testimonials = [
    {
      name: "Bela Gupta D'Souza",
      role: "Founder, Edamama",
      image:
        "https://ui-avatars.com/api/?name=Bela+Gupta&background=E91E63&color=fff&size=120",
      quote:
        "We took a big leap of faith with Appinventiv who helped us translate our vision into reality with the perfectly comprehensive Edamama eCommerce solution."
    },
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      image:
        "https://ui-avatars.com/api/?name=John+Smith&background=2196F3&color=fff&size=120",
      quote: "Outstanding service. The team delivered beyond expectations!"
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, InnovateLab",
      image:
        "https://ui-avatars.com/api/?name=Sarah+Johnson&background=4CAF50&color=fff&size=120",
      quote: "Professional, efficient and always available!"
    }
  ];

  // ======================================================
  // 🚀 Optimized reCAPTCHA Loader (loads only when modal opens)
  // ======================================================
  useEffect(() => {
    if (!isOpen || recaptchaLoaded) return;

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.warn("Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
      return;
    }

    if (window.grecaptcha) {
      setRecaptchaLoaded(true);
      window.grecaptcha.ready(() => setRecaptchaReady(true));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setRecaptchaLoaded(true);
      window.grecaptcha.ready(() => setRecaptchaReady(true));
    };

    document.body.appendChild(script);
  }, [isOpen]);

  // Basic captcha generator (your custom math fallback)
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2 });
  };

  useEffect(() => generateCaptcha(), []);

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

    const correct = captchaQuestion.num1 + captchaQuestion.num2;
    if (formData.captcha !== correct.toString())
      newErrors.captcha = "Incorrect answer";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ======================================================
  // reCAPTCHA v3 Execution
  // ======================================================
  const getRecaptchaToken = async () => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!window.grecaptcha || !recaptchaReady) return null;

    return await window.grecaptcha.execute(siteKey, { action: "contact_modal" });
  };

  // ======================================================
  // Submit Handler
  // ======================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const recaptchaToken = await getRecaptchaToken();

      if (!recaptchaToken) {
        toast.warn("Security verification failed. Try again.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          mobile: `${formData.countryCode}${formData.contactNumber}`,
          message: formData.projectDescription || "No message provided",
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
          captcha: "",
        });
        generateCaptcha();
        onClose();
      } else {
        toast.error(data.error || "Failed to submit form");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again.");
      console.error(err);
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
      className={`fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 transition-all duration-300 ${
        isOpen ? "bg-opacity-50" : "bg-opacity-0"
      }`}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className={`bg-white rounded-2xl max-w-5xl w-full h-[73vh] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row transition-all duration-300 ease-out transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
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
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:w-1/2 hidden lg:flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-gray-800 text-lg">Hear from our clients</h2>
            <p className="text-gray-600 text-sm mb-4">Why 3000+ businesses trust us</p>

            <div className="flex gap-2 mb-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 rounded-full transition-all cursor-pointer ${
                    index === currentTestimonial ? "bg-blue-600 w-8" : "bg-blue-300 w-3"
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-50"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-50"
            >
              <ChevronRight />
            </button>

            <div className="text-center">
              <img
                src={testimonials[currentTestimonial].image}
                className="w-10 h-10 rounded-full mx-auto mb-3"
              />

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
          <form onSubmit={handleSubmit} className="space-y-5 mt-6">

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name*"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full text-sm border-b-2 ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } focus:border-blue-600 outline-none pb-2`}
                />
                {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full text-sm border-b-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-blue-600 outline-none pb-2`}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
            </div>

            {/* MESSAGE */}
            <textarea
              name="projectDescription"
              rows={3}
              placeholder="Describe your project / idea (optional)"
              value={formData.projectDescription}
              onChange={handleInputChange}
              className="w-full text-sm border-b-2 border-gray-300 pb-2 focus:border-blue-600 outline-none"
            />

            {/* COUNTRY + PHONE */}
            <div className="grid grid-cols-3 gap-4">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                className="border-b-2 border-gray-300 focus:border-blue-600 pb-2 outline-none"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
              </select>

              <div className="col-span-2">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact number*"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className={`w-full text-sm border-b-2 ${
                    errors.contactNumber ? "border-red-500" : "border-gray-300"
                  } pb-2 focus:border-blue-600 outline-none`}
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-xs">{errors.contactNumber}</p>
                )}
              </div>
            </div>

            {/* CAPTCHA */}
            <div>
              <input
                name="captcha"
                type="text"
                placeholder={`${captchaQuestion.num1} + ${captchaQuestion.num2} = ?`}
                value={formData.captcha}
                onChange={handleInputChange}
                className={`w-full text-sm border-b-2 ${
                  errors.captcha ? "border-red-500" : "border-gray-300"
                } pb-2 focus:border-blue-600 outline-none`}
              />
              {errors.captcha && <p className="text-red-500 text-xs">{errors.captcha}</p>}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 disabled:bg-blue-400 text-sm"
            >
              {isSubmitting ? "Submitting..." : "Schedule Free Consultation"}
            </button>

            <div className="text-xs text-gray-500 space-y-1">
              <p>• You will receive a response within <b>2 minutes</b></p>
              <p>• Your idea is protected under our <b>NDA policy</b></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;

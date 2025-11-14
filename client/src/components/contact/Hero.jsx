'use client';

import React, { useState, useEffect } from 'react';
import InputField from '../inputs/InputField';
import ModernSelect from '../inputs/ModernSelect';
import TextareaInput from '../inputs/TextAreaInput';
import { useContactForm } from '@/hooks/useContactForm';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';
import ContactModal from '@/modals/ContactModal';

function Hero() {
  const pathname = usePathname();
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    source: '',
    message: ''
  });

  const { mutate: submitForm, isPending } = useContactForm();

  // === ⚡ FIXED & OPTIMIZED RECAPTCHA LOADER ===
  useEffect(() => {
    let observer;
    let scriptLoaded = false;

    const loadRecaptcha = () => {
      if (scriptLoaded || window.grecaptcha) {
        setRecaptchaLoaded(true);
        return;
      }

      scriptLoaded = true;
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaLoaded(true);
      document.body.appendChild(script);
    };

    // Ensure DOM is ready & element exists
    const timeout = setTimeout(() => {
      const formElement = document.getElementById('contact-form');

      // Fallback: If element not found, load immediately
      if (!formElement) {
        console.warn("contact-form not found. Loading recaptcha directly.");
        loadRecaptcha();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadRecaptcha();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(formElement);
    }, 300);

    return () => {
      clearTimeout(timeout);
      observer && observer.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.service) {
      toast.error('Please select a service');
      return;
    }

    if (!recaptchaLoaded && !window.grecaptcha) {
      toast.error('Loading security checks... please try again.');
      return;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: 'submit_contact_page_form' }
      );

      submitForm(
        {
          name: formData.fullName,
          mobile: formData.phone,
          email: formData.email,
          foundUs: formData.source || 'not_specified',
          message: formData.message,
          service: formData.service,
          formType: 'contact-page-form',
          submittedFrom: pathname || '/',
          recaptchaToken: token,
        },
        {
          onSuccess: (data) => {
            toast.success(data.message || 'Form submitted successfully!');
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              service: '',
              source: '',
              message: ''
            });
          },
          onError: (error) => {
            toast.error(error?.message || 'Failed to submit form.');
          }
        }
      );
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      toast.error('Failed to verify reCAPTCHA. Please try again.');
    }
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
    { value: 'social_media', label: 'Social Media' },
    { value: 'ai_search', label: 'AI Search Engine' },
    { value: 'friends', label: 'Friends' },
    { value: 'referral', label: 'Referral' }
  ];

  // 🔥 FIXED FORM VALIDATION
  const isFormValid =
    formData.fullName &&
    formData.phone &&
    formData.email &&
    formData.service &&
    formData.message &&
    (recaptchaLoaded || window.grecaptcha);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container max-w-7xl w-full mx-auto px-4 pt-28 pb-12 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-start items-center lg:justify-center gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 basis-full lg:basis-[55%]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let's Build<br />
              Something Amazing<br />
              Together
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Whether you have an idea or need expert advice, we are here to help. Contact us and let's create something extraordinary!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            >
              TRANSFORM MY BUSINESS
            </button>
          </div>

          {/* RIGHT FORM */}
          <div
            id="contact-form"
            className="bg-blue-500 rounded-3xl p-6 md:p-8 mt-6 xl:mt-10 basis-full lg:basis-[45%]"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Transform Ideas Into Digital Reality
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME + PHONE */}
              <div className="grid md:grid-cols-2 gap-3">
                <InputField
                  label="Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* EMAIL */}
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              {/* SERVICE + SOURCE */}
              <div className="grid md:grid-cols-2 gap-3">
                <ModernSelect
                  label="Service you need"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  options={serviceOptions}
                  required
                />
                <ModernSelect
                  label="Where Did You Find?"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  options={sourceOptions}
                />
              </div>

              {/* MESSAGE */}
              <TextareaInput
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your project..."
                required
              />

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={!isFormValid || isPending}
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 cursor-pointer ${
                  isFormValid && !isPending
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isPending ? 'SUBMITTING...' : "LET'S BUILD TOGETHER →"}
              </button>

              {/* RECAPTCHA NOTICE */}
              <p className="text-xs text-gray-200 text-center">
                This site is protected by reCAPTCHA and the Google{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="text-white hover:underline"
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  className="text-white hover:underline"
                >
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </form>
          </div>

        </div>
      </div>
      <ContactModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Hero;

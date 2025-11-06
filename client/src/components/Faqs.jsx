"use client";

import React, { useState } from 'react'
import SectionTitle from './titles/SectionTitle';

function Faqs({ faqs: fq }) {
  const [openFaq, setOpenFaq] = useState(0) // First FAQ open by default

  const staticfaqs = [
  {
    id: 1,
    question: "What is Webflow and why is it the best website builder?",
    answer: "Webflow is a powerful web design tool that allows users to build responsive websites visually, without needing to write code. It combines the flexibility of traditional coding with the ease of a drag-and-drop interface, making it accessible to designers and developers alike."
  },
  {
    id: 2,
    question: "What is your favorite template from BRIX Templates?",
    answer: "My favorite template is the 'Corporate' template because of its clean design and versatility. It works well for a variety of businesses and is easy to customize."
  },
  {
    id: 3,
    question: "How do you clone a template from the Showcase?",
    answer: "To clone a template from the Showcase, simply click on the 'Clone' button associated with the template. This will create a copy of the template in your account, allowing you to customize it as needed."
  },
  {
    id: 4,
    question: "Why is BRIX Templates the best Webflow agency?",
    answer: "BRIX Templates is the best Webflow agency because of our expertise in creating high-quality, customizable templates that cater to various industries. Our team of skilled designers and developers ensures that each template is built with best practices, responsiveness, and user experience in mind. Additionally, we offer excellent customer support and regular updates to keep our templates up-to-date with the latest Webflow features."
  },
  {
    id: 5,
    question: "When was Webflow officially launched?",
    answer: "Webflow was officially launched in 2013."
  },
  {
    id: 6,
    question: "How do you integrate Jetboost with Webflow?",
    answer: "To integrate Jetboost with Webflow, you need to add the Jetboost script to your Webflow project and configure the desired features through the Jetboost dashboard. This allows you to enable real-time search, filtering, and other dynamic functionalities on your Webflow site."
  },
  {
    id: 7,
    question: "What is your favorite template from BRIX Templates?",
    answer: "My favorite template is the 'Corporate' template because of its clean design and versatility. It works well for a variety of businesses and is easy to customize."
  },
  {
    id: 8,
    question: "How do you clone a template from the Showcase?",
    answer: "To clone a template from the Showcase, simply click on the 'Clone' button associated with the template. This will create a copy of the template in your account, allowing you to customize it as needed."
  },
  {
    id: 9,
    question: "What is Webflow and why is it the best website builder?",
    answer: "Webflow is a powerful web design tool that allows users to build responsive websites visually, without needing to write code. It combines the flexibility of traditional coding with the ease of a drag-and-drop interface, making it accessible to designers and developers alike."
  },
  {
    id: 10,
    question: "Why is BRIX Templates the best Webflow agency?",
    answer: "BRIX Templates is the best Webflow agency because of our expertise in creating high-quality, customizable templates that cater to various industries. Our team of skilled designers and developers ensures that each template is built with best practices, responsiveness, and user experience in mind. Additionally, we offer excellent customer support and regular updates to keep our templates up-to-date with the latest Webflow features."
  },
  {
    id: 11,
    question: "When was Webflow officially launched?",
    answer: "Webflow was officially launched in 2013."
  },
  {
    id: 12,
    question: "How do you integrate Jetboost with Webflow?",
    answer: "To integrate Jetboost with Webflow, you need to add the Jetboost script to your Webflow project and configure the desired features through the Jetboost dashboard. This allows you to enable real-time search, filtering, and other dynamic functionalities on your Webflow site."
  }
]


  const toggleFaq = (id) => {
    setOpenFaq(prev => prev === id ? null : id)
  }
  const faqs = fq || staticfaqs;
  return (
    <section className="px-4 pt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Orange Question Marks */}
          <div className="flex justify-center items-center mb-4">
            <span className="text-orange-500 text-xl font-bold mr-1">?</span>
            <span className="text-orange-500 text-xl font-bold mr-1">?</span>
            <span className="text-orange-500 text-xl font-bold">?</span>
          </div>
          
          {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              
          </h2> */}
         <SectionTitle 
         title='Frequently Asked Questions'
         description=''
         />
        </div>  

        {/* FAQ Grid - Two Columns, 50/50 width on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-12">
          {/* Left Column */}
          <div className="w-full">
            {faqs?.filter((_, i) => i % 2 === 0).map((faq) => (
              <div key={faq.id} className="border-b border-gray-200 pb-2 px-3">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left flex items-center justify-between py-4 "
                >
                  <h3 className={`text-lg cursor-pointer font-medium pr-2 hover:text-blue-400 ${
                    openFaq === faq.id ? 'text-blue-500' : 'text-gray-700'
                  }`}>
                    {faq.question}
                  </h3>
                  <span className={`text-2xl font-normal cursor-pointer transition-all ${
                    openFaq === faq.id ? 'text-blue-500' : 'text-gray-400'
                  }`}>
                    {openFaq === faq.id ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === faq.id ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="w-full">
            {faqs?.filter((_, i) => i % 2 === 1).map((faq) => (
              <div key={faq.id} className="border-b border-gray-200 pb-2 px-3">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left flex items-center justify-between py-4 hover:opacity-80 transition-opacity"
                >
                  <h3 className={`text-lg font-medium pr-2 cursor-pointer hover:text-blue-400 ${
                    openFaq === faq.id ? 'text-blue-500' : 'text-gray-700'
                  }`}>
                    {faq.question}
                  </h3>
                  <span className={`text-2xl font-normal transition-all cursor-pointer ${
                    openFaq === faq.id ? 'text-blue-500' : 'text-gray-400'
                  }`}>
                    {openFaq === faq.id ? '−' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === faq.id ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
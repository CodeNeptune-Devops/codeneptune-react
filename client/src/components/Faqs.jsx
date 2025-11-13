"use client";

import React, { useState } from 'react'
import SectionTitle from './titles/SectionTitle';

function Faqs({ faqs: fq }) {
  const [openFaq, setOpenFaq] = useState(1) // First FAQ open by default

 const staticfaqs = [
  {
    id: 1,
    question: "How does AI improve website development?",
    answer:
      "AI enhances website development by automating design processes, analyzing user behavior, and enabling personalized experiences. It helps create faster, smarter, and more responsive websites that adapt to user intent."
  },
  {
    id: 2,
    question: "Can AI be integrated into existing websites?",
    answer:
      "Yes. AI tools such as chatbots, recommendation engines, and analytics models can be seamlessly integrated into existing websites to improve engagement, automate workflows, and deliver real-time insights."
  },
  {
    id: 3,
    question: "What role does AI play in mobile app development?",
    answer:
      "AI powers mobile apps with predictive features, voice recognition, smart recommendations, and real-time data analysis. It helps build apps that learn from user behavior and deliver personalized experiences."
  },
  {
    id: 4,
    question: "What is an AI Agent, and how can it benefit my business app?",
    answer:
      "AI Agents are autonomous digital entities that can perform tasks, make decisions, and learn from data. Integrating AI Agents into your app can automate repetitive operations, boost efficiency, and improve user interactions."
  },
  {
    id: 5,
    question: "How does AI improve the user experience in websites and apps?",
    answer:
      "AI enables adaptive interfaces that adjust to user preferences, voice and gesture recognition, and smart content recommendations. This creates smoother, more intuitive digital experiences across devices."
  },
  {
    id: 6,
    question: "Can AI help with website and app performance optimization?",
    answer:
      "Absolutely. AI algorithms monitor performance metrics, detect bottlenecks, and suggest improvements in real time, ensuring your website or app remains fast, stable, and efficient."
  },
  {
    id: 7,
    question: "Do AI-powered apps cost more to develop?",
    answer:
      "The cost depends on the complexity and scope of AI features. While AI implementation may slightly increase initial costs, it offers a higher long-term ROI through automation, personalization, and improved customer retention."
  },
  {
    id: 8,
    question: "Why choose AI-driven development for my business?",
    answer:
      "AI-driven development gives your business a competitive edge by enabling intelligent automation, predictive insights, and personalized user journeys. It ensures your digital products remain future-ready in an evolving market."
  }
];

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
           <p className='uppercase text-md text-blue-500 font-bold leading-relaxed [letter-spacing:4px]'>
                  Got Questions ?
                </p>
          
          {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              
          </h2> */}
         <SectionTitle 
         title='Frequently Asked Questions'
         description=' We have the answers. Explore everything you need to know about Code Neptune’s services, process, and technology.'
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
                  className="w-full text-left flex items-center justify-between py-4 cursor-pointer "
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
                  className="w-full text-left flex items-center justify-between py-4 hover:opacity-80 transition-opacity cursor-pointer"
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
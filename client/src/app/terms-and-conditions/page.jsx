import Link from 'next/link';
import React from 'react';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 leading-relaxed mb-8">
          Welcome to Code Neptune Technologies Private Limited. By accessing or using our website and development services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            1. Use of Our Platform
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>You must be at least 18 years old or have legal authority to enter into contracts to use our services.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>You agree to provide accurate and complete information when requesting quotes, consultations, or engaging our services.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>You are responsible for maintaining the confidentiality of any account credentials or project information shared with us.</span>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            2. Services & Project Engagement
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>All project quotes, timelines, and deliverables are provided based on initial consultations and are subject to written agreements.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>Service descriptions, pricing, and availability are subject to change without prior notice.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>Payment terms and project milestones will be outlined in individual service agreements.</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            3. Project Delivery & Timelines
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>We aim to deliver projects within the agreed timeframes, but delays may occur due to unforeseen circumstances or scope changes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>Project timelines and deliverables are dependent on timely feedback and required materials from clients.</span>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            4. Revisions & Cancellations
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>Revision policies and the number of included revisions will be outlined in individual project agreements.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>Project cancellations must be communicated in writing and may be subject to cancellation fees based on work completed.</span>
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            5. Intellectual Property
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>All content, designs, code, trademarks, and materials created by Code Neptune are the property of Code Neptune or its licensors.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>Upon full payment, clients receive ownership rights to the final delivered work as outlined in the project agreement.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>You may not reproduce, distribute, or use any content without prior written permission from Code Neptune.</span>
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            6. Limitation of Liability
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>We are not liable for any indirect, incidental, or consequential damages arising from the use of our services or platform.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>Our total liability is limited to the amount paid for the specific service in question.</span>
            </li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            7. Changes to Terms
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-0 flex-shrink-0">•</span>
              <span>We may update these terms at any time. Changes will be posted on this page, and your continued use of our platform constitutes acceptance of the revised terms.</span>
            </li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            8. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <Link 
              href="mailto:info@codeneptune.com" 
              className="text-blue-600 hover:text-blue-700 underline"
            >
              info@codeneptune.com
            </Link>
            {' '}or visit our{' '}
            <Link 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Contact Page
            </Link>.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
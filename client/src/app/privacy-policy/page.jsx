import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 leading-relaxed mb-8">
          Lollypop Apps, Synerfi Ecommerce & Accessories Buy Partners ("we", "us", "our") is committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data when you visit our website and services.
        </p>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            1. Information We Collect
          </h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Personal Usage Data
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect technical information such as IP address, browser type, device information, and pages visited to improve your experience.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Voluntarily Shared Information
          </h3>
          <p className="text-gray-700 leading-relaxed">
            When you create an account or place an order we collect your name, email address, shipping address, and payment details.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            2. Use of Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can manage cookie preferences in your browser settings.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>To process orders and deliver products</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>To communicate with you about your account, orders, or support requests</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>To send promotional emails (you can unsubscribe)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>To comply with legal obligations</span>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your personal information. We may share data with trusted third-party service providers (such as payment processors and shipping partners) only as necessary to provide our services and operate our platform.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            5. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is 100% secure.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            6. Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these sites. Please review their policies before sharing any information.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            7. Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. Your continued use of our platform constitutes acceptance of any changes.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            8. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at{' '}
            <a 
              href="mailto:info@codeneptune.com" 
              className="text-blue-600 hover:text-blue-700 underline"
            >
              info@codeneptune.com
            </a>
            . We take issues seriously and will respond promptly.
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

export default PrivacyPolicy;
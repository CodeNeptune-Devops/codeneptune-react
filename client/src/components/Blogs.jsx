import React from 'react';
import { ArrowRight } from 'lucide-react';
import img1 from '../assets/blogs/img1.webp';
import img2 from '../assets/blogs/img2.webp';
import img3 from '../assets/blogs/img3.webp';
import Image from 'next/image';
import Link from 'next/link';

function Blogs() {
  const articles = [
    {
      id: 1,
      badge: 'TOP 10',
      title: 'iOS App Development: Powering the Next Generation of Digital Experiences',
      description: 'The world of mobile innovation keeps moving forward, and iOS app development has become a core part of that transformation.',
      image: img1,
      date: 'November 12, 2025',
      author: 'codeneptune',
      href: '/blog/ios-app-development-business-growth/'
    },
    {
      id: 2,
      badge: 'TOP 10',
      title: 'Expertise in Native iOS and Android Development in Chennai',
      description: 'Building a mobile app that feels smooth, fast, and reliable is no longer a luxury in fact, it has become',
      image: img3,
      date: '11 November, 2025',
      author: 'codeneptune',
      href: '/blog/expertise-native-ios-android-development-chennai'
    },
    {
      id: 3,
      badge: null,
      title: 'Best Website Development Company in India – A Complete Guide to Choosing the Right Partner',
      description: 'Finding the best website development company in India can feel like navigating through a maze filled with countless choices, each',
      image: img2,
      date: 'November 10, 2025',
      author: 'codeneptune',
      href: '/blog/best-website-development-company-in-india/'
    }
  ];

  return (
    <div className="w-full  pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          News & Updates
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Link
              href={article.href}
              target='_blank'
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  height={300}
                  width={300}
                  className="w-full h-full object-cover"
                />
                {article.badge && (
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {article.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">CN</span>
                    </div>
                    <span className="text-blue-600 text-sm font-medium">
                      {article.author}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {article.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300 border border-blue-200">
            VIEW MORE ARTICLES
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
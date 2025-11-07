import React from 'react';
import { ArrowRight } from 'lucide-react';

function Blogs() {
  const articles = [
    {
      id: 1,
      badge: 'TOP 10',
      title: 'Top 10 Mobile App Development Companies in Pune...',
      description: 'The startup ecosystem in Pune continues to thrive with innovation, creativity, and strong engineering excellence....',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      date: 'November 6, 2025',
      author: 'codeneptune'
    },
    {
      id: 2,
      badge: null,
      title: 'Best Website Development Company in Chennai | Build Your Digital Success with Code Neptune...',
      description: 'Discovering the Best Website Development Company in Chennai Finding the best website development company in...',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
      date: 'November 5, 2025',
      author: 'codeneptune'
    },
    {
      id: 3,
      badge: 'TOP 10',
      title: 'Top 10 Website Development Companies in Bangalore: Build Your Digital Presence with the Best...',
      description: 'Why Bangalore Leads India\'s Website Development Market Bangalore has earned its title as the Silicon...',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      date: 'October 30, 2025',
      author: 'codeneptune'
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
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
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
            </div>
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
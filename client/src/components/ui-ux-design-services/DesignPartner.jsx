import React from 'react';
import { Code, Users, Star, User } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function DesignPartner() {
  const features = [
    {
      icon: Code,
      title: 'Tech First Expertise',
      description: 'Our team blends deep SaaS and emerging tech experience to craft category-defining digital products.'
    },
    {
      icon: Users,
      title: 'Embedded Collaboration',
      description: 'We operate as an extension of your team, aligning closely with product, growth, and engineering'
    },
    {
      icon: Star,
      title: 'Multidisciplinary Talent',
      description: 'Strategists, designers, and researchers work together to deliver seamless, end-to-end product design solutions.'
    },
    {
      icon: User,
      title: 'User Obsessed Outcomes',
      description: 'Everything we create is rooted in empathy, solving real problems to drive business-critical results.'
    }
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            

            <SectionTitle 
            align='text-start'
            title='Code Neptune Your Product Design Partner'
            description='  We empower visionary teams to transform complex product ideas into intuitive, scalable digital user experiences.'
            />

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index}>
                    <div className="mb-4">
                      <Icon className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Device Image */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="relative aspect-[4/4]">
                {/* Phone illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 300" className="w-full h-full">
                    {/* Hand */}
                    <defs>
                      <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M80 200 Q70 180 75 160 L85 120 Q90 100 100 105 L110 115 Q120 100 130 110 L140 125 Q145 115 150 125 L155 140 Q160 135 162 145 L165 180 Q170 220 150 240 L120 260 Q95 250 85 230 Z"
                      fill="url(#handGradient)"
                      opacity="0.8"
                    />
                    {/* Phone */}
                    <rect x="85" y="80" width="70" height="120" rx="8" fill="#1e293b" opacity="0.9" />
                    <rect x="90" y="90" width="60" height="100" rx="4" fill="#334155" />
                    {/* Screen elements */}
                    <rect x="95" y="100" width="20" height="15" rx="2" fill="#3b82f6" opacity="0.6" />
                    <rect x="120" y="100" width="25" height="15" rx="2" fill="#8b5cf6" opacity="0.6" />
                    <rect x="95" y="125" width="50" height="30" rx="2" fill="#ec4899" opacity="0.4" />
                    <circle cx="120" cy="170" r="8" fill="#f472b6" opacity="0.7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -right-4 top-8 w-48 bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-4 shadow-xl transform rotate-3">
              <div className="bg-gradient-to-br from-cyan-300 to-blue-400 rounded-lg p-3 mb-2">
                <div className="flex gap-1 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-yellow-300 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-yellow-600">UX</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">❤</span>
              </div>
            </div>

            <div className="absolute -right-4 bottom-8 w-48 bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-4 shadow-xl transform -rotate-2">
              <div className="bg-gradient-to-br from-cyan-300 to-blue-400 rounded-lg p-3">
                <div className="flex gap-1 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-white rounded-lg p-4 relative">
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500">
                    UI
                  </div>
                  <div className="absolute bottom-2 right-2 text-3xl">🎯</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignPartner;
'use client'

import React, { useState } from 'react';
import { Layout, Shuffle, Code, Workflow } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';
import Image from 'next/image';
import '../../styles/designStack.css'

function DesignStackWeHave() {
  const [activeCategory, setActiveCategory] = useState('Interface Design');

  const categories = [
    {
      name: 'Interface Design',
      icon: Layout,
      tools: [
        { name: 'Figma', color: 'bg-red-500', icon: '/uiux/figma.svg' },
        { name: 'Sketch', color: 'bg-orange-400', icon: '/uiux/sketch.svg' },
        { name: 'Adobe XD', color: 'bg-purple-600', icon: '/uiux/xd.svg' }
      ]
    },
    {
      name: 'Prototyping & Animation',
      icon: Shuffle,
      tools: [
        { name: 'Figma', color: 'bg-red-500', icon: '/uiux/figma.svg' },
        { name: 'Principle', color: 'bg-blue-500', icon: '/uiux/principle.svg' },
        { name: 'After Effects', color: 'bg-purple-700', icon: '/uiux/after-effects.svg' }
      ]
    },
    {
      name: 'Design Systems & Handoff',
      icon: Code,
      tools: [
        { name: 'Figma', color: 'bg-red-500', icon: '/uiux/figma.svg' },
        { name: 'Storybook', color: 'bg-pink-500', icon: '/uiux/story-book.svg' },
        { name: 'Zeroheight', color: 'bg-indigo-500', icon: '/uiux/zero-height.svg' }
      ]
    },
    {
      name: 'User Flows & Wireframing',
      icon: Workflow,
      tools: [
        { name: 'Figma', color: 'bg-red-500', icon: '/uiux/figma.svg' },
        { name: 'Whimsical', color: 'bg-yellow-400', icon: '/uiux/whimsical.svg' },
        { name: 'Miro', color: 'bg-yellow-300', icon: '/uiux/miro.svg' }
      ]
    }
  ];

  const activeCategoryData = categories.find(cat => cat.name === activeCategory);

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          
          <SectionTitle 
          title='Design Stack We Use'
          description='Modern tools powering pixel-perfect, user-first product design.'
          />
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl border-2 border-gray-200 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Sidebar - Categories */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 p-8">
              <div className="space-y-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.name;
                  return (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full text-left flex items-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'bg-blue-400 bg-opacity-40 shadow-md' 
                          : 'hover:bg-blue-400 hover:bg-opacity-20'
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      <span className="text-white font-semibold text-lg">
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Tools */}
            <div className="lg:col-span-3 p-8 lg:p-12 bg-gray-50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {activeCategoryData?.tools.map((tool, index) => (
                  <div
                    key={`${activeCategory}-${index}`}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Tool Icon */}
                      <div className={` w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold `}>
                       <div>
                        <Image 
                        src={tool.icon}
                        alt={tool.name}
                        height={200}
                        width={200}
                        className='h-full w-full'
                        />
                       </div>
                      </div>
                      {/* Tool Name */}
                      <span className="font-bold text-gray-900 text-sm">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignStackWeHave;
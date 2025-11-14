'use client'

import React, { useState } from 'react';
import { Check, X, AlertTriangle, Shield } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';
import ContactModal from '@/modals/ContactModal';

function CustomWebsiteVsTemplate() {
  const [activeTab, setActiveTab] = useState('grid');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    }
  };

  const comparisonData = [
    { feature: 'Unique Design', templates: 'no', custom: 'yes' },
    { feature: 'Scalability', templates: 'no', custom: 'yes' },
    { feature: 'SEO Optimize', templates: 'limited', custom: 'yes' },
    { feature: 'Fast Load Time', templates: 'varies', custom: 'yes' },
    { feature: 'Maintenance Support', templates: 'no', custom: 'yes' },
    { feature: 'Mobile Responsiveness', templates: 'warning', custom: 'yes', templateNote: 'May need tweaking' },
    { feature: 'Third-party Integration', templates: 'limited', custom: 'yes', templateNote: 'Limited plugins' },
    { feature: 'Security', templates: 'no', custom: 'yes', customNote: 'Tailored protection' },
    { feature: 'Brand Alignment', templates: 'depends', custom: 'yes', templateNote: 'Depends on theme' },
    { feature: 'Speed Optimization', templates: 'warning', custom: 'yes', templateNote: 'Theme-dependent', customNote: 'Code-level control' },
    { feature: 'Code Ownership', templates: 'no', custom: 'yes', templateNote: 'Shared license', customNote: '100% owned by you' },
    { feature: 'Custom Features', templates: 'no', custom: 'yes', templateNote: 'Limited scope', customNote: 'Fully flexible' }
  ];

  const renderIcon = (value, note) => {
    if (value === 'yes') return <Check className="w-5 h-5 text-green-500" />;
    if (value === 'no') return <X className="w-5 h-5 text-red-500" />;
    if (value === 'limited' || value === 'warning' || value === 'varies' || value === 'depends') {
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    }
    return null;
  };

  // Design 1: Compact Grid View
  const GridView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Templates Card */}
      <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-slate-300 rounded-xl flex items-center justify-center">
            <X className="w-6 h-6 text-slate-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Templates</h3>
        </div>
        <div className="space-y-3">
          {comparisonData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-300/50">
              <span className="text-sm text-slate-700 font-medium">{item.feature}</span>
              <div className="flex items-center gap-2">
                {renderIcon(item.templates)}
                {item.templateNote && (
                  <span className="text-xs text-slate-500">({item.templateNote})</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Design Card */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">Custom Design</h3>
        </div>
        <div className="space-y-3">
          {comparisonData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 border-b border-white/10">
              <span className="text-sm text-white font-medium">{item.feature}</span>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-300" />
                {item.customNote && (
                  <span className="text-xs text-blue-200">({item.customNote})</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


  // Design 3: Feature Pills
  const PillsView = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {comparisonData.map((item, idx) => (
          <div key={idx} className="group">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500">
              <div className="text-center mb-3">
                <h5 className="text-sm font-bold text-slate-800 mb-2">{item.feature}</h5>
              </div>
              <div className="flex justify-around items-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-slate-500">Template</span>
                  {renderIcon(item.templates)}
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-blue-600 font-semibold">Custom</span>
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


  return (
    <div className='w-full py-16 bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='max-w-7xl mx-auto w-full px-6'>
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg">
            <Check className="w-8 h-8 text-white" />
          </div> */}

          <SectionTitle 
          title='Custom Website vs Template What’s Right for You?'
          description=" Choosing the right type of website is crucial for your business growth.Here's a simple comparison to help you decide between a template and a custom-built site."
          />
          
          {/* Design Switcher */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${
                activeTab === 'grid'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              Split View
            </button>
            <button
              onClick={() => setActiveTab('pills')}
              className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${
                activeTab === 'pills'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              Feature Pills
            </button>
          </div>
        </div>

        {/* Dynamic View */}
        <div className="mb-12">
          {activeTab === 'grid' && <GridView />}
          {activeTab === 'pills' && <PillsView />}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 cursor-pointer rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            READY TO GET STARTED?
          </button>
        </div>
      </div>
      <ContactModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default CustomWebsiteVsTemplate;
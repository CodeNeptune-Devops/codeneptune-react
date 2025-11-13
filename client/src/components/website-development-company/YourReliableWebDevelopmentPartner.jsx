import React from 'react';
import { MessageSquare, Users, Sparkles, DollarSign, Zap } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';
import img1 from '../../assets/web-development/img1.webp';
import Image from 'next/image';

function YourReliableWebDevelopmentPartner() {
  const features = [
    {
      number: "1",
      icon: MessageSquare,
      title: "We Speak Business, Not Just Tech",
      description: "You don't need to know coding or design — we translate your ideas into real websites with zero jargon.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
    },
    {
      number: "2",
      icon: Users,
      title: "You Stay Involved, Start to Finish",
      description: "We work with you, not just for you. You'll have full visibility, previews, and checkpoints as we build.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      number: "3",
      icon: Sparkles,
      title: "Designs That Build Credibility",
      description: "Your website is your digital first impression — we focus on creating trust through clean UI and thoughtful layout.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
    },
    {
      number: "4",
      icon: DollarSign,
      title: "Flexible for Every Budget",
      description: "Whether you're just starting or scaling, we help you choose the right plan without pushing unnecessary add-ons.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
    },
    {
      number: "5",
      icon: Zap,
      title: "Performance-First Approach",
      description: "From loading speed to responsive design, we optimize every detail for how users actually interact with your site.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
       
          <SectionTitle 
          title=' Your Reliable Web Development Partner in Chennai'
          description='From clear communication to custom-built designs, heres why clients across Chennai prefer working with us.'
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Card 1 - Spans 1 column */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">{features[0].number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {features[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Spans 1 column */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">{features[1].number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {features[1].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {features[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Spans 1 column, with visual mockup area */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 md:row-span-2 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">{features[2].number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {features[2].title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {features[2].description}
              </p>

              <div className='h-[15rem]  rounded-lg'>
                <Image 
                src={img1}
                alt='Designs'
                height={400}
                width={400}
                className='h-full w-full object-cover rounded-lg'
                />
              </div>
              
              {/* Mock notification UI */}
              {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mt-8 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/30 rounded w-24 mb-2"></div>
                    <div className="h-2 bg-white/20 rounded w-32"></div>
                  </div>
                </div>
                <div className="h-1 bg-white/20 rounded w-full"></div>
              </div> */}
            </div>
          </div>

          {/* Card 4 - Spans 1 column */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">{features[3].number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {features[3].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 - Spans 1 column, with dark theme */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">{features[4].number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {features[4].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {features[4].description}
              </p>
              
              {/* Mock inbox UI */}
              {/* <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mt-8 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-white/70 text-sm font-semibold">Inbox</div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-blue-500/30 rounded"></div>
                    <div className="w-6 h-6 bg-blue-500/30 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/10 rounded w-full"></div>
                  <div className="h-2 bg-white/10 rounded w-4/5"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourReliableWebDevelopmentPartner;
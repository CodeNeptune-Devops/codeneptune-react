import React from 'react'
import { Smartphone, Users, TrendingUp, Layers, Repeat2, ChartNoAxesCombined, HandHeart } from 'lucide-react'
import Image from 'next/image'

function MobileAsTheCoreOfModernBusiness() {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Customers expect instant access',
      description: 'People rely on mobile apps for quick services, information, and purchases, shaping how businesses stay relevant in real time.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Building stronger connections',
      description: 'Apps allow brands to deliver personalized experiences, making every customer interaction memorable and strengthening long-term relationships.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth through mobile-first strategies',
      description: "Companies embracing mobile solutions unlock wider reach, improved loyalty, and steady growth in today's competitive digital landscape."
    }
  ]

  const stats = [
    { label: 'Revenue', value: '+10%', color: 'bg-pink-600/10 text-pink-600',icon: <Layers size={30}/> },
    { label: 'ROI', value: '+17%', color: 'bg-yellow-600/10 text-yellow-600',icon:  <Repeat2 size={30}/> },
    { label: 'Loyalty', value: '+24%', color: 'bg-purple-600/10 text-purple-600', icon:  <HandHeart size={30}/> },
    { label: 'Growth', value: '+31%', color: 'bg-green-600/10 text-green-600', icon: <ChartNoAxesCombined size={30}/> }
  ]

  return (
    <div className="w-full bg-white pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-10 text-black">
                <div className='space-y-2'>
                    <h3 className="text-2xl md:text-4xl lg:text-4xl font-medium leading-tight mb-6">
                       Mobile as the Core of Modern Business Customer Interaction
                    </h3>
                </div>
                <div className="flex items-center">
                    <p className="text-base md:text-lg leading-relaxed">
                       Where customers connect, decide, and buy. Smartphones drive instant engagement. A powerful app builds trust, boosts loyalty, and creates growth opportunities for businesses today.
                    </p>
                </div>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center text-gray-600">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} rounded-3xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-center flex flex-col justify-start items-center">
                  {stat.icon && (
                    <div className="text-5xl mb-3">
                     {stat.icon}
                    </div>
                  )}
                  <h4 className=" text-xl font-semibold mb-2">
                    {stat.label}
                  </h4>
                  <p className=" text-3xl font-bold">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileAsTheCoreOfModernBusiness
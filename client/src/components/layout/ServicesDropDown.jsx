import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Inline SVG ArrowRight (replaces lucide-react import)
const ArrowRight = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function ServicesDropdown({
    isScrolled,
    setIsModalOpen,
    isServicesOpen,
    closeDropdown,
    appDevelopment,
    webDevelopment,
    creativeCloud
}) {
    return (
        <div className={`fixed top-[60px] left-1/2 transform -translate-x-1/2 max-w-7xl mx-auto w-full z-[999] transition-all duration-200 ${isScrolled ? 'py-4' : 'py-7'} ${isServicesOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2'
            } `}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white text-black border border-gray-200 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Column - Stats Cards */}
                    <div className="lg:col-span-3 space-y-4">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                                100+ Clients
                            </h2>
                            <p className="text-gray-600 text-sm mb-4">
                                Our aim is to make products that bring people closer through digital.
                            </p>
                            <button onClick={() => setIsModalOpen(true)} className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all group cursor-pointer">
                                Work with us
                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                                Global Presence
                            </h2>
                            <p className="text-gray-600 text-sm mb-4">
                                Serving clients in India, UK, USA
                            </p>
                            <Link onClick={closeDropdown} href={'#locations'} className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all group cursor-pointer">
                                View Locations
                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Middle Column - Services */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl p-5">
                                <h3 className="text-lg font-bold text-blue-600 mb-3">Mobile Apps</h3>
                                <ul className="space-y-2">
                                    {appDevelopment.map((item) => (
                                        <li key={item.name}>
                                            <Link onClick={closeDropdown} href={item.href} className="text-gray-700 text-sm hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-xl p-5">
                                <h3 className="text-lg font-bold text-blue-600 mb-3">Creative & Cloud</h3>
                                <ul className="space-y-2">
                                    {creativeCloud.map((item) => (
                                        <li key={item.name}>
                                            <Link onClick={closeDropdown} href={item.href} className="text-gray-700 text-sm hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-xl p-5">
                            <h3 className="text-lg font-bold text-blue-600 mb-3">Web Development</h3>
                            <ul className="space-y-2">
                                {webDevelopment.map((item) => (
                                    <li key={item.name}>
                                        <Link onClick={closeDropdown} href={item.href} className="text-gray-700 text-sm hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Hero Card */}
                    <div className="lg:col-span-4 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-xl p-6 text-white flex flex-col justify-between">
                        <div className="flex justify-center mb-0">
                            <div className="bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                                <Image
                                    src={'/star-header.svg'}
                                    alt='Star'
                                    height={70}
                                    width={70}
                                />
                            </div>
                        </div>

                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-bold mb-3">
                                Work with Code Neptune
                            </h2>
                            <p className="text-white text-opacity-90 text-sm leading-relaxed">
                                Experience the excellence of our dedicated professionals who are adept in delivering top-notch solutions.
                            </p>
                        </div>

                        <button onClick={() => setIsModalOpen(true)} className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full flex items-center justify-center gap-2 hover:gap-3 transition-all hover:shadow-lg group mx-auto cursor-pointer">
                            Connect with us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ServicesDropdown)
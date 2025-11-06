'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate particles only on client side
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 30,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden flex items-center justify-center pt-40">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s infinite ease-in-out ${particle.delay}s`,
            }}
          />
        ))}
      </div>



      {/* Glowing orb that follows mouse */}
      <div
        className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-8" style={{ animation: 'bounce-slow 3s infinite ease-in-out' }}>
          <h2
            className="text-7xl font-bold text-white mb-4"
            style={{ animation: 'glitch 2s infinite' }}
          >
            404
          </h2>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-2xl opacity-50 animate-pulse" />
            <h2 
              className="relative uppercase text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              style={{ 
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}
            >
              Page Not Found
            </h2>
          </div>
        </div>

        <p 
          className="text-gray-300 text-lg md:text-xl mb-8 max-w-md mx-auto"
          style={{ animation: 'fade-in 1s ease-out' }}
        >
          Oops! The page you're looking for seems to have wandered into the digital void.
        </p>

        {/* Animated buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link className='cursor-pointer' href="/">
            <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Go Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group cursor-pointer relative px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Go Back
          </button>
        </div>

        {/* Floating robot illustration */}
        <div className="mt-12" style={{ animation: 'float-slow 6s infinite ease-in-out' }}>
          <div className="inline-block">
            <svg
              className="w-32 h-32 md:w-48 md:h-48"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="80" fill="url(#gradient1)" opacity="0.2" />
              <circle cx="100" cy="100" r="60" fill="url(#gradient2)" />
              <circle cx="85" cy="90" r="8" fill="white" />
              <circle cx="115" cy="90" r="8" fill="white" />
              <path
                d="M 80 120 Q 100 130 120 120"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glitch {
          0%, 100% {
            text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
          }
          25% {
            text-shadow: -2px 0 20px rgba(168, 85, 247, 0.7), 2px 2px 20px rgba(236, 72, 153, 0.7);
          }
          50% {
            text-shadow: 2px 0 20px rgba(236, 72, 153, 0.7), -2px -2px 20px rgba(168, 85, 247, 0.7);
          }
          75% {
            text-shadow: 0 2px 20px rgba(168, 85, 247, 0.7), 0 -2px 20px rgba(236, 72, 153, 0.7);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
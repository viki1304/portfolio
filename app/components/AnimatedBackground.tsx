'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number; delay: number }>>([]);
  const [moonGlow, setMoonGlow] = useState(0);

  // Generate stars
  useEffect(() => {
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 3 + 1,
      delay: Math.random() * 20
    }));
    setStars(newStars);

    // Animate the moon glow
    const glowInterval = setInterval(() => {
      setMoonGlow(prev => (prev + 0.1) % 10);
    }, 200);

    return () => clearInterval(glowInterval);
  }, []);

  // Calculate moon glow size based on animation
  const moonGlowSize = 100 + Math.sin(moonGlow) * 20;
  const moonGlowOpacity = 0.2 + Math.sin(moonGlow) * 0.1;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {/* Background color - unified across all components */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20" />
      
      {/* Moon with glow effect */}
      <div className="absolute right-[10%] top-[10%]">
        {/* Moon glow */}
        <motion.div 
          className="absolute rounded-full bg-blue-100/20 dark:bg-blue-300/10"
          style={{
            width: `${moonGlowSize}px`,
            height: `${moonGlowSize}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(30px)',
            opacity: moonGlowOpacity
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [moonGlowOpacity, moonGlowOpacity + 0.05, moonGlowOpacity]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Moon surface */}
        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-200 dark:to-gray-400 shadow-lg overflow-hidden">
          {/* Moon craters */}
          <div className="absolute top-[20%] left-[30%] w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-400 opacity-70"></div>
          <div className="absolute top-[60%] left-[20%] w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-400 opacity-70"></div>
          <div className="absolute top-[40%] left-[70%] w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-400 opacity-70"></div>
          <div className="absolute top-[70%] left-[60%] w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-400 opacity-70"></div>
        </div>
        
        {/* Moonlight rays */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-64 h-1 bg-blue-100/10 dark:bg-blue-200/5"
              style={{
                transformOrigin: 'left center',
                transform: `rotate(${i * 45}deg) translateX(20px)`
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                width: ['200px', '300px', '200px'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Additional moonlight effect across screen */}
      <div className="absolute inset-0 bg-blue-100/5 dark:bg-blue-300/5 mix-blend-overlay"></div>
      
      {/* Falling stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white dark:bg-yellow-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px ${star.size / 2}px rgba(255, 255, 255, 0.7)`
          }}
          animate={{
            y: ['0vh', '120vh'],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 5 / star.speed,
            repeat: Infinity,
            delay: star.delay,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
} 
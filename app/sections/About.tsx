'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const educationDetails = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Vel Tech High Tech Dr.Rangarajan Dr.Sakunthala Engineering College',
      duration: '2019 - 2023',
      icon: <GraduationCap size={20} />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -2, 2, 0],
      y: -10,
      boxShadow: "0px 0px 20px rgba(0, 112, 243, 0.6)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        rotate: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2
        }
      }
    }
  };
  
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 112, 243, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingTextVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Add some more dynamic background variants
  const sectionBgVariants = {
    initial: { 
      backgroundPosition: "0% 0%",
    },
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 20,
        ease: "linear"
      }
    }
  };

  // Border animation variants
  const borderVariants = {
    rest: { 
      rotate: 0,
      scale: 1
    },
    hover: { 
      rotate: [0, 3, -3, 0],
      scale: 1.03,
      transition: {
        rotate: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3
        },
        scale: {
          duration: 0.3
        }
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Add floating particles for more visual interest */}
      <div className="absolute inset-0 overflow-hidden -z-5 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-color/5 dark:bg-primary-color/10"
            style={{
              width: 30 + Math.random() * 100,
              height: 30 + Math.random() * 100,
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-color mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Picture - 40% width on desktop */}
          <motion.div 
            className="w-full md:w-[40%] flex justify-center items-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative w-60 h-72 md:w-72 md:h-96">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <Image 
                  src="/images/Clipped_image_20250516_132748.png" 
                  alt="Vignesh B"
                  fill
                  className="object-contain p-2 bg-white dark:bg-gray-900"
                  priority
                />
              </div>
              
              {/* Decorative borders */}
              <motion.div 
                className="absolute -inset-1 rounded-3xl border-2 border-dashed border-primary-color"
                variants={borderVariants}
                initial="rest"
                animate={isHovered ? "hover" : "rest"}
              />
              
              <motion.div 
                className="absolute -inset-4 rounded-3xl border-2 border-dotted border-secondary-color"
                variants={borderVariants}
                initial="rest"
                animate={isHovered ? "hover" : "rest"}
                transition={{
                  delay: 0.1
                }}
              />
              
              {/* Floating particles on hover */}
              {isHovered && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        background: i % 3 === 0 ? '#0070f3' : i % 3 === 1 ? '#6c63ff' : '#ff0080',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 0.9, 0],
                        scale: [0, 1, 0],
                        y: -100 - Math.random() * 50,
                        x: (Math.random() - 0.5) * 80
                      }}
                      transition={{ 
                        duration: 1.2 + Math.random(),
                        repeat: Infinity,
                        repeatType: 'loop',
                        delay: Math.random() * 0.5
                      }}
                    />
                  ))}
                </>
              )}
            </div>
          </motion.div>
          
          {/* About Text Content - 60% width on desktop */}
          <motion.div 
            className="w-full md:w-[60%]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h3 
                className="text-2xl font-semibold"
                variants={floatingTextVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                Full Stack Developer
              </motion.h3>
              <motion.p 
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                I'm a passionate full-stack developer with expertise in MERN stack development, specializing in building responsive and performant web applications that deliver exceptional user experiences.
              </motion.p>
              <motion.p 
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                My journey began with a curiosity about how websites function, which led me to explore HTML, CSS, and JavaScript. Over time, I've expanded my skillset to include React, Node.js, Express, and MongoDB, along with various tools and technologies that enable me to build modern web applications.
              </motion.p>
            
              <motion.div 
                className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6"
                variants={itemVariants}
              >
                <h4 className="font-semibold mb-4">Education</h4>
                <div className="space-y-4">
                  {educationDetails.map((edu, index) => (
                    <motion.div 
                      key={index}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mt-1 text-primary-color">
                        {edu.icon}
                      </div>
                      <div>
                        <h5 className="font-medium">{edu.degree}</h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.institution}</p>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                          <Calendar size={14} className="mr-1" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-3 mt-8"
                variants={itemVariants}
              >
                <motion.a 
                  href="/VigneshB.pdf" 
                  download
                  className="flex items-center gap-2 bg-primary-color text-white px-5 py-2 rounded-md hover:bg-primary-color/90 transition-colors"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/vignesh-b-4973741b5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-5 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <ExternalLink size={18} />
                  LinkedIn
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
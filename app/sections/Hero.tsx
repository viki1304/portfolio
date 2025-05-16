'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Typing animation
    const typingInterval = setInterval(() => {
      const currentTitle = titles[titleIndex];
      
      if (!isDeleting) {
        // Typing
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        
        // If completed typing the word
        if (displayText.length === currentTitle.length) {
          // Pause before deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        // Deleting
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        
        // If completed deleting the word
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 60 : 120);
    
    return () => clearInterval(typingInterval);
  }, [isClient, displayText, isDeleting, titleIndex, titles]);

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: 'https://github.com/VigneshB1304', 
      label: 'GitHub'
    },
    { 
      icon: <Linkedin size={20} />, 
      href: 'https://www.linkedin.com/in/vignesh-b-4973741b5', 
      label: 'LinkedIn'
    },
    { 
      icon: <Mail size={20} />, 
      href: 'mailto:vikibabu1304@gmail.com', 
      label: 'Email'
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const letterAnimation = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  const socialIconAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.2,
      boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  const underlineAnimation = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };
  
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: "easeInOut"
      }
    }
  };

  // Replace the simple underline animation with these better animations
  const gradientTextAnimation = {
    initial: { 
      backgroundPosition: "0% 50%",
      backgroundSize: "100% 100%",
      opacity: 0.7
    },
    animate: { 
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      backgroundSize: "200% 100%",
      opacity: 1,
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity
      }
    }
  };
  
  const highlightAnimation = {
    hidden: { width: "0%", x: "100%" },
    visible: { 
      width: "100%", 
      x: "0%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const nameGlow = {
    initial: {
      textShadow: "0 0 0px rgba(0, 112, 243, 0)",
    },
    animate: {
      textShadow: [
        "0 0 10px rgba(0, 112, 243, 0.5)",
        "0 0 20px rgba(0, 112, 243, 0.8)",
        "0 0 30px rgba(0, 112, 243, 0.5)",
        "0 0 10px rgba(0, 112, 243, 0.5)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Split the name for letter animation
  const nameLetters = "Vignesh B".split("");

  return (
    <section className="min-h-screen relative flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Remove any background-specific divs */}
      
      <div className="container mx-auto z-10 flex flex-col justify-between h-full">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 mt-auto mb-auto">
          <motion.div 
            className="space-y-6 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="space-y-1">
              <motion.div 
                className="flex justify-center items-center mb-4 space-x-2"
                variants={staggerChildren}
              >
                <motion.div 
                  className="text-4xl font-bold text-primary-color"
                  initial={{ rotate: 0, scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3
                  }}
                >
                  VB
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-xl text-gray-600 dark:text-gray-300"
                variants={fadeInUp}
              >
                Hello, I'm
              </motion.h3>
              
              <div className="inline-flex my-2 relative">
                {isClient && (
                  <>
                    <motion.div
                      variants={staggerChildren}
                      initial="hidden"
                      animate="visible"
                      className="flex relative z-10"
                    >
                      {nameLetters.map((letter, index) => (
                        <motion.span
                          key={index}
                          className="text-4xl md:text-7xl font-bold inline-block"
                          variants={letterAnimation}
                          style={{
                            background: "linear-gradient(90deg, #0070f3, #6c63ff, #0070f3)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundSize: "200% 100%"
                          }}
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    {/* Glowing effect behind name */}
                    <motion.div
                      className="absolute inset-0 blur-md opacity-50 z-0"
                      variants={nameGlow}
                      initial="initial"
                      animate="animate"
                    >
                      <div className="text-4xl md:text-7xl font-bold text-primary-color flex">
                        {nameLetters.map((letter, index) => (
                          <span key={index}>
                            {letter === " " ? "\u00A0" : letter}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
              
              {/* Increased spacing between name and title with mb-12 */}
              <div className="mt-12 relative h-16"> {/* Fixed height container for smooth transitions */}
                <motion.h1
                  className="text-3xl md:text-4xl font-bold gradient-text"
                  variants={fadeInUp}
                >
                  {isClient && (
                    <span className="inline-block">
                      {displayText}
                      <span className="inline-block w-1 h-8 ml-1 bg-primary-color animate-blink"></span>
                    </span>
                  )}
                </motion.h1>
              </div>
              
              {/* Replace the simple underline with a more dynamic flowing gradient */}
              <div className="relative h-1.5 w-64 mx-auto mt-4 overflow-hidden rounded-full">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-color via-secondary-color to-primary-color"
                  initial={{ x: "-100%" }}
                  animate={{ 
                    x: ["-100%", "100%"],
                    transition: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 3,
                      ease: "easeInOut"
                    }
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-secondary-color via-primary-color to-secondary-color opacity-75"
                  initial={{ x: "100%" }}
                  animate={{ 
                    x: ["-100%", "100%"],
                    transition: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: 0.2
                    }
                  }}
                />
              </div>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              variants={fadeInUp}
            >
              A passionate web developer specializing in modern JavaScript frameworks,
              building responsive and engaging digital experiences.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 justify-center mt-8"
              variants={staggerChildren}
            >
              <motion.a
                href="#about"
                className="bg-primary-color text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 shadow-md"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 112, 243, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                About Me 
                <motion.span
                  variants={floatingAnimation}
                  animate="animate"
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>
              
              <motion.a
                href="#projects"
                className="border border-primary-color/30 hover:border-primary-color px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 20px rgba(0, 112, 243, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center mt-8 gap-4"
              variants={staggerChildren}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm hover:text-primary-color dark:hover:text-primary-color transition-colors"
                  variants={socialIconAnimation}
                  whileHover="hover"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Down indicator moved to the bottom of container */}
        <motion.div
          className="flex justify-center mb-8 mt-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              delay: 1.5,
            }
          }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-sm text-gray-500 dark:text-gray-400"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span className="mb-2">Scroll Down</span>
            <motion.div 
              className="w-5 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-1"
            >
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Star, Code } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with Next.js and Tailwind CSS featuring animated components, interactive UI elements, and dark/light mode support',
      category: 'Frontend',
      skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      github: 'https://github.com/VigneshB1304/portfolio-next',
      demo: '#',
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Admin dashboard for online retail platform providing inventory management, sales analytics, and customer insights with secure authentication',
      category: 'Full Stack',
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication', 'Chart.js'],
      github: 'https://github.com/VigneshB1304/ecommerce-dashboard',
      demo: '#',
    },
    {
      title: 'Secure Banking Application',
      description: 'Banking portal with multi-factor authentication, transaction processing, and financial data visualization ensuring secure user experiences',
      category: 'Full Stack',
      skills: ['React', 'Node.js', 'MySQL', 'Express', 'OAuth', 'Encryption'],
      github: 'https://github.com/VigneshB1304/secure-banking',
      demo: '#',
    },
    {
      title: 'RESTful API Service',
      description: 'Comprehensive backend API framework with rate limiting, caching mechanisms, detailed documentation and automated testing suite',
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
      github: 'https://github.com/VigneshB1304/rest-api-service',
      demo: '#',
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Interactive data visualization platform for financial metrics including real-time updates, customizable reports, and export functionality',
      category: 'Data',
      skills: ['Python', 'Pandas', 'React', 'D3.js', 'SQL', 'API Integration'],
      github: 'https://github.com/VigneshB1304/data-dashboard',
      demo: '#',
    },
    {
      title: 'Mobile-Responsive Web Application',
      description: 'Cross-platform web application optimized for all device sizes with offline capabilities, push notifications, and synchronized data',
      category: 'Frontend',
      skills: ['React', 'Progressive Web App', 'Service Workers', 'IndexedDB', 'Firebase'],
      github: 'https://github.com/VigneshB1304/responsive-web-app',
      demo: '#',
    }
  ];

  // Get unique categories for filter
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "5rem",
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  // Add these new animation variants
  const tiltCardVariants = {
    hover: (index: number) => ({
      rotateY: index % 2 === 0 ? 5 : -5,
      rotateX: -5,
      z: 10,
      boxShadow: "0 30px 50px -15px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
  };

  // For skill tags 
  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      backgroundColor: "rgba(0, 112, 243, 0.1)",
      color: "#0070f3",
      y: -3,
      transition: {
        duration: 0.2
      }
    }
  };

  // Filter button variants
  const filterButtonVariants = {
    active: {
      backgroundColor: "rgb(var(--primary-color))",
      color: "white",
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    inactive: {
      backgroundColor: "transparent",
      color: "inherit",
      scale: 1
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <motion.div 
        className="container mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={titleVariants}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="h-1 bg-primary-color mx-auto rounded-full"
            variants={underlineVariants}
          />
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            variants={titleVariants}
          >
            Check out some of my recent work and personal projects
          </motion.p>
        </div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full font-medium border-2 border-primary-color/10 transition-all`}
              variants={filterButtonVariants}
              initial="inactive"
              animate={activeFilter === category ? "active" : "inactive"}
              whileHover="hover"
              whileTap="tap"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md h-full flex flex-col transform-gpu perspective-1000"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ transformStyle: "preserve-3d" }}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                layout: { duration: 0.3 }
              }}
            >
              <motion.div
                className="relative w-full h-full"
                variants={tiltCardVariants}
                custom={index}
              >
                <div className="p-6 pt-8">
                  {/* Category Tag */}
                  <div className="inline-block px-3 py-1 bg-primary-color/10 text-primary-color rounded-full text-sm font-medium mb-3">
                    {project.category}
                  </div>
                  
                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredIndex === index ? { y: 0, opacity: 1 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={hoveredIndex === index ? { 
                          scale: 1, 
                          opacity: i < 4 ? 1 : 0.5,
                          transition: {
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 400,
                            damping: 15
                          }
                        } : {}}
                      >
                        <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                        variants={skillVariants}
                        custom={skillIndex}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto p-6 pt-3 flex justify-between items-center gap-4 border-t border-gray-100 dark:border-gray-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-color dark:hover:text-primary-color transition-colors"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Github size={16} />
                    <span>Repository</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary-color text-white rounded-lg"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={16} />
                  </motion.a>
                </div>
                
                {/* Animated corner accents */}
                {hoveredIndex === index && (
                  <>
                    <motion.div 
                      className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full text-primary-color/20">
                        <path 
                          d="M0,0 L100,0 L100,100" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="8"
                        />
                      </svg>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full text-primary-color/20">
                        <path 
                          d="M100,100 L0,100 L0,0" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="8"
                        />
                      </svg>
                    </motion.div>
                    
                    {/* Floating particles */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          background: i % 2 === 0 ? '#0070f3' : '#6c63ff',
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          zIndex: 30,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 0.7, 0],
                          scale: [0, 1, 0],
                          y: -40 - Math.random() * 40,
                          x: (Math.random() - 0.5) * 40
                        }}
                        transition={{ 
                          duration: 1 + Math.random(),
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: Math.random() * 0.5
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 
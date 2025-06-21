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
      description: 'Modern portfolio website built with Next.js and Tailwind CSS featuring animated components, interactive UI elements, and dark/light mode support. Implements advanced animations using Framer Motion and responsive design principles.',
      category: 'Frontend',
      skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      github: 'https://github.com/viki1304/portfolio',
      demo: '#',
      highlights: [
        'Custom animations and transitions',
        'Responsive design',
        'SEO optimized'
      ]
    },
    {
      title: 'Phishing application',
      description: 'A phishing application that allows users to test their phishing skills by sending phishing emails to a list of recipients. It also allows users to view the results of the phishing emails.',
      category: 'Full Stack',
      skills: ['React ts', 'Nest.js', 'Sql database', 'Express', 'JWT Authentication', 'Chart.js','Tailwind CSS','OAuth', 'Stripe','Razorpay'],
      // github: 'https://github.com/VigneshB1304/ecommerce-dashboard',
      demo: 'deepphish.in',
      highlights: [
        'Phishing application',
        'Real-time data visualization',
        'Role-based access control'
      ]
    },
    
    {
      title: 'Dorking application',
      description: 'A dorking application that allows users to scrap the data from the web and save it in the database.',
      category: 'Full Stack',
      skills: ['React ts', 'FastAPI', 'Sql database', 'Express', 'JWT Authentication', 'Chart.js','Tailwind CSS','OAuth', 'Stripe','Razorpay'],
      // github: 'https://github.com/VigneshB1304/rest-api-service',
      demo: 'deepscanx.finstein.in',
      highlights: [
        'Dorking application',
        'Real-time data visualization',
        'Role-based access control'
      ]
    },
    {
      title: 'VAPT Automation',
      description: 'A VAPT automation tool that allows users to automate the VAPT process and save the results in the database.',
      category: 'Full Stack',
      skills: ['React ts', 'FastAPI', 'Sql database', 'Express', 'JWT Authentication', 'Chart.js','Tailwind CSS','OAuth', 'Stripe','Razorpay'],
      // github: 'https://github.com/VigneshB1304/data-dashboard',
      demo: '#',
      highlights: [
        'VAPT automation',
        'Real-time data visualization',
        'Role-based access control'
      ]
    },
    {
      title: 'AI-based learning platform',
      description: 'A AI-based learning platform that allows users to learn new skills and save the results in the database.',
      category: 'Full Stack',
      skills: ['React ts', 'FastAPI', 'Sql database', 'Express', 'JWT Authentication', 'Chart.js','Tailwind CSS','OAuth', 'Stripe','Razorpay'],
      // github: 'https://github.com/VigneshB1304/responsive-web-app',
      demo: '#',
      highlights: [
        'AI-based learning platform',
        'Real-time data visualization',
        'Role-based access control'
      ]
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

  const projectCardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.5
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
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
  const skillBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(0, 112, 243, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    })
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
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <motion.div 
        className="container mx-auto max-w-7xl relative z-10"
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
            className="h-1 w-20 bg-primary-color mx-auto rounded-full mb-8"
            variants={underlineVariants}
          />
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={titleVariants}
          >
            Explore my recent projects showcasing my expertise in web development and software engineering
          </motion.p>
        </div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium border-2 transition-all ${
                activeFilter === category 
                  ? 'bg-primary-color text-white border-primary-color' 
                  : 'border-primary-color/10 text-gray-600 dark:text-gray-300 hover:border-primary-color'
              }`}
              variants={filterButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
              variants={projectCardVariants}
              whileHover="hover"
              layout
              layoutId={project.title}
            >
              <div className="p-6 flex-grow">
                <motion.div 
                  className="inline-block px-3 py-1 bg-primary-color/10 text-primary-color rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {project.category}
                </motion.div>

                <motion.h3 
                  className="text-2xl font-bold mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description}
                </motion.p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                        variants={skillBadgeVariants}
                        custom={skillIndex}
                        whileHover="hover"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                        variants={highlightVariants}
                        custom={i}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-color" />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div 
                className="p-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center mt-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-color dark:hover:text-primary-color transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  <span>View Code</span>
                </motion.a> */}

                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-color text-white rounded-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 112, 243, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={18} />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary-color/5"
          style={{ top: '20%', left: '-10%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary-color/5"
          style={{ bottom: '10%', right: '-10%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  );
} 
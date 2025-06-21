'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, Award, Download, ExternalLink, Code } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const educationDetails = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'RMK Engineering College',
      duration: '2019 - 2023',
      cgpa: '8.56',
      // achievements: [
      //   'Department Topper',
      //   'Best Project Award',
      //   'Technical Club Lead'
      // ],
      icon: <GraduationCap size={20} />,
    },
  ];

  const achievements = [
    // {
    //   title: 'Technical Skills',
    //   items: [
    //     'Full Stack Development (MERN)',
    //     'Cloud Computing (AWS)',
    //     'DevOps & CI/CD',
    //     'Mobile App Development'
    //   ],
    //   icon: <Code size={20} />
    // },
    {
      title: 'Certifications',
      items: [
        'Oracle Certified Associate, Java SE 8 Programmer',
        'PerfectPlanB Python and ML Certification',
        'IBM Python for data science',
        'Infosys Springboard Learn and Master C programming',
        'BEC Certified in English'
      ],
      icon: <Award size={20} />
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
      y: -5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture - 40% width on desktop */}
          <motion.div 
            className="relative w-full max-w-md mx-auto h-[500px] rounded-2xl overflow-hidden"
            variants={imageVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/Clipped_image_20250516_132748.png"
                alt="Avatar"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                style={{ 
                  filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1))',
                }}
              />
            </div>

            {/* Animated decorative elements */}
            <motion.div
              className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-primary-color/5"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-primary-color/5"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            {/* Hover overlay with role */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-primary-color/20 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-center pb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="text-gray-800 dark:text-white font-medium text-lg">
                      Full Stack Developer
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      Passionate about creating amazing web experiences
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating particles on hover */}
            <AnimatePresence>
              {isHovered && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-primary-color/40"
                      initial={{ 
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0,
                      }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: (Math.random() - 0.5) * 100,
                        y: -100 - Math.random() * 50,
                      }}
                      transition={{
                        duration: 1.5 + Math.random(),
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                      style={{
                        left: `${30 + Math.random() * 40}%`,
                        top: `${60 + Math.random() * 20}%`,
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* About Text Content - 60% width on desktop */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold">Education</h3>
              {educationDetails.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-color/10 rounded-lg text-primary-color">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                        <span className="mx-2">•</span>
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                      <div className="mt-4 space-y-2">
                        {/* {edu.achievements.map((achievement, i) => (
                          <motion.div 
                            key={i}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-color" />
                            <span>{achievement}</span>
                          </motion.div>
                        ))} */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold">Achievements & Skills</h3>
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-color/10 rounded-lg text-primary-color">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">{achievement.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {achievement.items.map((item, i) => (
                          <motion.div 
                            key={i}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-color" />
                            <span>{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex justify-center md:justify-start gap-4 mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="/VigneshB.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-primary-color text-white rounded-lg font-medium shadow-md"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 112, 243, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
              {/* <motion.a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-primary-color/30 hover:border-primary-color rounded-lg font-medium"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 112, 243, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                LinkedIn
              </motion.a> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
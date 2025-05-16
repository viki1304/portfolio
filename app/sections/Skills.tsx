'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

// Define skill type
interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillGroup {
  category: string;
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState<SkillGroup[]>([]);
  
  // Define your existing skill data
  const skillsData: SkillGroup[] = [
    {
      category: 'frontend',
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: '📄' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'TypeScript', icon: '🔢' },
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Tailwind CSS', icon: '🌊' },
      ],
    },
    {
      category: 'backend',
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        {name: 'Nest js', icon: '🟢'},
        { name: 'FastAPI', icon: '🐍' },
        { name: 'Java(Spring Boot)', icon: '🔍' },
        { name: 'Express', icon: '🚂' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'SQL', icon: '🗄️' },
        { name: 'RESTful APIs', icon: '🔄' },
      ],
    },
    {
      category: 'tools',
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', icon: '🔄' },
        { name: 'VS Code', icon: '📝' },
        { name: 'Postman', icon: '🔄' },
        {name: 'cursor', icon: '📝'},
        {name: 'chrome dev tools', icon: '🔄'},
        { name: 'Figma', icon: '🎨' },
        { name: 'Responsive Design', icon: '📱' },
        { name: 'Problem Solving', icon: '🧩' },
        { name: 'Docker', icon: '🐳' },
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
  ];

  // Update filtered skills whenever the active category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills([...skillsData]);
    } else {
      setFilteredSkills(
        skillsData.filter(skill => skill.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary-color mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-color text-white'
                  : 'bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory} // Force re-render when category changes
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            className="overflow-hidden"
          >
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredSkills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  variants={cardVariants}
                  className="bg-white dark:bg-gray-900/50 rounded-lg p-6 shadow-md backdrop-blur-sm border border-gray-100 dark:border-gray-800"
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary-color/10 rounded-lg text-primary-color">
                      {skillGroup.category === 'frontend' ? '🎨' : 
                       skillGroup.category === 'backend' ? '⚙️' : '🛠️'}
                    </div>
                    <h3 className="text-xl font-bold">{skillGroup.title}</h3>
                  </div>
                  
                  <motion.div 
                    className="grid grid-cols-2 gap-4"
                    variants={{
                      visible: {
                        transition: { 
                          staggerChildren: 0.05,
                          delayChildren: 0.1 * index
                        }
                      }
                    }}
                  >
                    {skillGroup.skills.map((skill: Skill, skillIndex: number) => (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center gap-2 bg-gray-50 dark:bg-black/10 p-2 rounded-md"
                        variants={skillVariants}
                        whileHover={{ 
                          backgroundColor: 'rgba(0, 112, 243, 0.1)',
                          scale: 1.03, 
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="text-lg">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 
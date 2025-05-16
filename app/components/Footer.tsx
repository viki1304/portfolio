'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github size={18} />, 
      href: 'https://github.com/VigneshB1304', 
      label: 'GitHub'
    },
    { 
      icon: <Linkedin size={18} />, 
      href: 'https://www.linkedin.com/in/vignesh-b-4973741b5', 
      label: 'LinkedIn'
    },
    { 
      icon: <Mail size={18} />, 
      href: 'mailto:vikibabu1304@gmail.com', 
      label: 'Email'
    },
  ];

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-900/50 py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-200 dark:border-gray-800">
          <div>
            <Link href="/" className="font-bold text-xl gradient-text mb-4 inline-block">
              Vignesh B
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Aspiring developer passionate about creating modern web applications and exploring new technologies.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-color transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-white/5 hover:bg-primary-color hover:text-white rounded-full border border-gray-200 dark:border-gray-800 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {currentYear} Vignesh B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
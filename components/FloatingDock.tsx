"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Home, Briefcase, Users, HelpCircle, Mail } from 'lucide-react';

const FloatingDock = () => {
  const icons = [
    { Icon: Home, href: '#home', label: 'Home' },
    { Icon: Briefcase, href: '#projects', label: 'Projects' },
    { Icon: Users, href: '#testimonials', label: 'Testimonials' },
    { Icon: HelpCircle, href: '#faq', label: 'FAQ' },
    { Icon: Mail, href: '#collaboration', label: 'Collaboration' },
    { Icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { Icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="bg-black/30 backdrop-blur-lg rounded-full p-2 flex items-center justify-center shadow-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {icons.map(({ Icon, href, label }, index) => (
          <motion.a
            key={label}
            href={href}
            className="text-white/70 hover:text-white transition-colors duration-200 mx-2 first:ml-0 last:mr-0"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingDock;
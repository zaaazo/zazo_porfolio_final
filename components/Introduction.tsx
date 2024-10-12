"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Introduction = () => {
  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hi, I'm <span className="text-purple-500">Your Name</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A passionate web developer specializing in creating beautiful and functional websites. With expertise in React, Next.js, and modern web technologies, I bring ideas to life through code.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Introduction;
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer a wide range of web development services including front-end development, back-end development, full-stack development, and UI/UX design. My expertise covers technologies like React, Next.js, Node.js, and more."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines can vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a more complex web application could take 2-3 months or more. I always provide a detailed timeline estimate at the start of each project."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, I offer ongoing support and maintenance packages for all my projects. This includes regular updates, bug fixes, and minor feature additions to ensure your website or application continues to run smoothly."
  },
  {
    question: "How do you handle project communication?",
    answer: "I believe in clear and consistent communication. Throughout the project, we'll have regular check-ins via video calls or your preferred communication method. I also provide access to a project management tool where you can track progress and leave feedback."
  }
];

const FAQ = () => {
  return (
    <motion.section
      id="faq"
      className="py-16 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.section>
  );
};

export default FAQ;
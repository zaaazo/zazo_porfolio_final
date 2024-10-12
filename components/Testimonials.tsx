"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are unmatched.",
    avatar: "https://source.unsplash.com/random/100x100?portrait1"
  },
  {
    name: "Jane Smith",
    role: "Project Manager, DesignHub",
    content: "Exceptional work! They delivered our project on time and exceeded our expectations in terms of quality and functionality.",
    avatar: "https://source.unsplash.com/random/100x100?portrait2"
  },
  {
    name: "Alex Johnson",
    role: "Founder, StartupX",
    content: "Their expertise in modern web technologies helped us create a cutting-edge platform that our users love. Highly recommended!",
    avatar: "https://source.unsplash.com/random/100x100?portrait3"
  }
];

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
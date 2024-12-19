import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Camera, Heart, Palette, Star } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

const services = [
  {
    icon: Sparkles,
    title: 'Special Occasion',
    description: 'Perfect makeup for your special events, parties, and celebrations.',
    price: 'From $120',
  },
  {
    icon: Heart,
    title: 'Bridal Makeup',
    description: 'Make your wedding day unforgettable with stunning bridal makeup.',
    price: 'From $250',
  },
  {
    icon: Camera,
    title: 'Editorial',
    description: 'Professional makeup for photoshoots, fashion shows, and media.',
    price: 'Custom Quote',
  },
  {
    icon: Users,
    title: 'Group Sessions',
    description: 'Makeup services for bridal parties and special group events.',
    price: 'From $85/person',
  },
  {
    icon: Palette,
    title: 'Makeup Lessons',
    description: 'Learn professional techniques in one-on-one or group sessions.',
    price: 'From $150',
  },
  {
    icon: Star,
    title: 'Celebrity Style',
    description: 'Get that red carpet look for your special appearance.',
    price: 'Custom Quote',
  },
];

export function FeaturedServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Services & Pricing
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From natural beauty enhancement to dramatic transformations, 
            discover the perfect service for your unique style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
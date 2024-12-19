import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../components/services/ServiceCard';
import { services } from '../data/services';

export function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl">
            Discover our comprehensive range of professional makeup services tailored to enhance your natural beauty.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
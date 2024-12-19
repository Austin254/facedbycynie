import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram } from 'lucide-react';
import { services } from '../data/services';

export function BookingPage() {
  return (
    <div className="pt-20">
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book an Appointment</h1>
          <p className="text-gray-600 max-w-2xl">
            Ready to transform your look? Book your appointment through our preferred channels.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <a
                href="tel:0740377992"
                className="flex items-center text-lg text-purple-600 hover:text-purple-700"
              >
                <Phone className="mr-2" size={20} />
                0740377992
              </a>
              <a
                href="https://www.instagram.com/faced.by_cyniee_makeup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg text-purple-600 hover:text-purple-700"
              >
                <Instagram className="mr-2" size={20} />
                @faced.by_cyniee_makeup
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Makeup session"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-light">Available Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-purple-600 font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1618961734760-466979ce35b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
];

export function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light mb-6">Follow Along</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <Instagram className="mr-2" size={24} />
              @faced.by_cyniee_makeup
            </a>
            <a
              href="https://www.tiktok.com/@faced.bycyniee?_t=8sI7zwEL6HO&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 mr-2"
                fill="currentColor"
              >
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
              </svg>
              @faced.bycyniee
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post}
              href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={post}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
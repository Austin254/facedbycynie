import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredImages = [
  {
    url: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'Bridal'
  },
  {
    url: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'Editorial'
  },
  {
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    category: 'Beauty'
  }
];

export function FeaturedWork() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-light">Featured Work</h2>
          <Link
            to="/portfolio"
            className="inline-flex items-center text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            View all work
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image.url}
                  alt={`Featured ${image.category} work`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
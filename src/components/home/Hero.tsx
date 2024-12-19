import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParallaxImage } from '../ui/ParallaxImage';

export function Hero() {
  return (
    <div className="relative min-h-[90vh]">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Elegant makeup look"
        overlayClass="from-neutral-950/80 to-neutral-950/80"
      />
      
      <div className="relative z-10 container mx-auto px-4 h-[90vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-7xl md:text-8xl font-light mb-8 text-white leading-none">
            Makeup
            <br />
            <span className="font-normal">Artist</span>
          </h1>
          <p className="text-xl mb-12 text-neutral-200 max-w-xl font-light">
            Unleash your ultimate glow with FacedByCyniee.Specializing in flawless makeup artistry and stunning lash enhancements, Cyniee is your go-to for transforming everyday beauty into extraordinary confidence. Whether you're seeking a soft, natural finish or a bold, head-turning look, Cyniee’s artistry is tailored to enhance your unique features.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/book"
              className="group inline-flex items-center px-8 py-4 bg-white text-neutral-900 text-lg hover:bg-neutral-100 transition-colors"
            >
              Book Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border border-white text-white text-lg hover:bg-white hover:text-neutral-900 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
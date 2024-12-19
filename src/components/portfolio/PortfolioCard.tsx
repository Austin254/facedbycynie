import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioItem } from '../../types/portfolio';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { ShareButtons } from './ShareButtons';
import { TestimonialCard } from './TestimonialCard';

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: () => void;
}

export function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  const shareOptions = {
    url: window.location.href,
    title: item.title,
    description: item.description,
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg">
        {item.beforeImage ? (
          <BeforeAfterSlider
            beforeImage={item.beforeImage}
            afterImage={item.imageUrl}
            alt={item.title}
          />
        ) : (
          <div className="aspect-square cursor-pointer" onClick={onClick}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.description}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-4">
        <ShareButtons options={shareOptions} />
        
        {item.testimonial && (
          <TestimonialCard {...item.testimonial} />
        )}
        
        {item.products && item.products.length > 0 && (
          <div className="mt-2">
            <h4 className="font-semibold text-sm text-gray-700 mb-1">Products Used:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {item.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
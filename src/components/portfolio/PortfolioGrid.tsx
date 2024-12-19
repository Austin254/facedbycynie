import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Category } from '../../types/portfolio';
import { portfolioItems } from '../../data/portfolio';
import { CategoryFilter } from './CategoryFilter';
import { PortfolioCard } from './PortfolioCard';

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const slides = filteredItems.map(item => ({
    src: item.imageUrl,
    alt: item.title,
    title: item.title,
    description: item.description,
  }));

  return (
    <div className="container mx-auto px-4 py-16">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox
        open={selectedImageIndex !== null}
        close={() => setSelectedImageIndex(null)}
        index={selectedImageIndex || 0}
        slides={slides}
      />
    </div>
  );
}
import { PortfolioItem } from '../types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Elegant Bridal Makeup',
    description: 'Natural glam makeup for a summer wedding',
    category: 'bridal',
    imageUrl: 'https://images.unsplash.com/photo-1594051843837-2d58c640e1b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    products: ['Charlotte Tilbury Airbrush Flawless Foundation', 'Pat McGrath Divine Rose Palette'],
    testimonial: {
      author: 'Sarah Johnson',
      text: 'Cynie did an amazing job with my bridal makeup! She understood exactly what I wanted and made me feel so beautiful on my special day.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: '2',
    title: 'Editorial Fashion Look',
    description: 'Bold and creative makeup for fashion magazine',
    category: 'editorial',
    imageUrl: 'https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    products: ['Pat McGrath Mothership Palette', 'Dior Airflash Foundation'],
    testimonial: {
      author: 'Emma Davis',
      text: 'Working with Cynie on this editorial shoot was fantastic. Her creativity and attention to detail are unmatched.',
      rating: 5,
    },
  },
  {
    id: '3',
    title: 'Halloween Special Effects',
    description: 'Dramatic special effects makeup',
    category: 'special-effects',
    imageUrl: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1588178457510-e6a854f6df93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Natural Glam',
    description: 'Everyday glam makeup look',
    category: 'casual',
    imageUrl: 'https://images.unsplash.com/photo-1588178457510-e6a854f6df93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    title: 'Classic Bridal Beauty',
    description: 'Timeless bridal makeup with a modern twist',
    category: 'bridal',
    imageUrl: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    testimonial: {
      author: 'Michelle Thompson',
      text: 'I felt like the most beautiful version of myself on my wedding day. Thank you, Cynie!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: '6',
    title: 'Avant-Garde Editorial',
    description: 'Creative and bold editorial makeup',
    category: 'editorial',
    imageUrl: 'https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  }
];
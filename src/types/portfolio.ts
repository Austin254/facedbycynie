export type Category = 'all' | 'bridal' | 'editorial' | 'casual' | 'special-effects';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<Category, 'all'>;
  imageUrl: string;
  description: string;
  products?: string[];
  beforeImage?: string;
  testimonial?: {
    author: string;
    text: string;
    rating: number;
    avatar?: string;
  };
}

export interface ShareOptions {
  url: string;
  title: string;
  description: string;
}
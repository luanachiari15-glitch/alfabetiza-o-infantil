export interface Plan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  originalPrice: number;
  price: number;
  cents: string;
  checkoutUrl?: string;
  features: {
    text: string;
    isBonus?: boolean;
  }[];
  popular?: boolean;
}

export interface Bonus {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  tag: string;
  coverTitle: string;
  theme: 'blue' | 'yellow' | 'green' | 'purple' | 'amber';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  avatar: string;
  text: string;
  stars: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

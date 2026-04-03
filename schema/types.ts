// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeAttraction {
  id: string;
  address: string;
  admission: string;
  attractionType: any[];
  body: { value: string; summary?: string };
  featured: boolean;
  highlights: string[];
  hours: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodeEvent {
  id: string;
  admission: string;
  body: { value: string; summary?: string };
  endDate: { time: string };
  eventCategory: any[];
  eventDate: { time: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
  venue: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeItinerary {
  id: string;
  bestFor: string;
  body: { value: string; summary?: string };
  duration: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  stops: string[];
  theme: any[];
  title: string;
}

export interface NodeNews {
  id: string;
  body: { value: string; summary?: string };
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  newsCategory: any[];
  path: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

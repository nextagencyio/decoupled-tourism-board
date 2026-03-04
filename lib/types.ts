export interface DrupalHomepage {
  id: string
  title: string
  path?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string; summary?: string }
  statsItems?: string
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: { processed: string; summary?: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalPage {
  id: string
  title: string
  path?: string

}

export interface DrupalAttraction {
  id: string
  title: string
  path?: string
  attractionType?: string
  address?: string
  hours?: string
  admission?: string
  highlights?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  featured?: string
}

export interface DrupalEvent {
  id: string
  title: string
  path?: string
  eventDate?: { timestamp: string }
  endDate?: { timestamp: string }
  venue?: string
  eventCategory?: string
  admission?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DrupalItinerary {
  id: string
  title: string
  path?: string
  duration?: string
  theme?: string
  stops?: string
  bestFor?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
}

export interface DrupalNews {
  id: string
  title: string
  path?: string
  image?: { url: string; alt: string; width?: number; height?: number; variations?: { name: string; url: string; width: number; height: number }[] }
  newsCategory?: string
  featured?: string
}

export interface AttractionsData {
  nodeAttractions: {
    nodes: DrupalAttraction[]
  }
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

export interface ItinerariesData {
  nodeItineraries: {
    nodes: DrupalItinerary[]
  }
}

export interface NewsData {
  nodeNews: {
    nodes: DrupalNews[]
  }
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

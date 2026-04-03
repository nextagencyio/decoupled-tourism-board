// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_ATTRACTIONS = gql`
  query GetAttractions($first: Int = 10) {
    nodeAttractions(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        address
        hours
        admission
        highlights
        attractionType {
          ... on TermAttractionType { name }
        }
        image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        featured
      }
    }
  }
`

export const GET_ATTRACTION_BY_PATH = gql`
  query GetAttractionByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAttraction {
            id
            title
            path
            address
            hours
            admission
            highlights
            attractionType {
              ... on TermAttractionType { name }
            }
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            featured
          }
        }
      }
    }
  }
`

export const GET_EVENTS = gql`
  query GetEvents($first: Int = 10) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        eventDate { timestamp }
        endDate { timestamp }
        venue
        eventCategory {
          ... on TermEventCategory { name }
        }
        admission
        image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            eventDate { timestamp }
            endDate { timestamp }
            venue
            eventCategory {
              ... on TermEventCategory { name }
            }
            admission
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_ITINERARIES = gql`
  query GetItineraries($first: Int = 10) {
    nodeItineraries(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        duration
        theme {
          ... on TermItineraryTheme { name }
        }
        stops
        bestFor
        image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
      }
    }
  }
`

export const GET_ITINERARY_BY_PATH = gql`
  query GetItineraryByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeItinerary {
            id
            title
            path
            duration
            theme {
              ... on TermItineraryTheme { name }
            }
            stops
            bestFor
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_NEWS = gql`
  query GetNews($first: Int = 10) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        newsCategory {
          ... on TermNewsCategory { name }
        }
        featured
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            id
            title
            path
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
            newsCategory {
              ... on TermNewsCategory { name }
            }
            featured
          }
        }
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          __typename
          ... on NodeHomepage {
            id
            title
          }
          ... on NodePage {
            id
            title
            body { processed }
          }
        }
      }
    }
  }
`

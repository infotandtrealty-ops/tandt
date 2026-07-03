export type PropertyCategory = "commercial" | "residential";

export type PropertyType =
  | "penthouse"
  | "independent-floor"
  | "residential-apartment"
  | "service-apartment"
  | "residential-plots"
  | "office-space"
  | "food-court"
  | "retail-and-office-space"
  | "commercial-sco-plots";

export type PropertyStatus =
  | "Booking Open"
  | "New Launch"
  | "Ongoing"
  | "Upcoming"
  | "Under Construction"
  | "Ready to Move";

export interface PriceRow {
  type: string;
  sizeSqFt: string;
  price: string;
  bookingAmount: string;
}

export interface PropertyContact {
  officeName: string;
  address: string;
  phone: string;
  email: string;
}

export interface PropertyDownload {
  label: string;
  url: string;
}

export interface PropertyPlanImage {
  title: string;
  imageUrl: string;
}

export interface Property {
  id: string;
  slug: string;
  developer: string;
  title: string;
  subtitle: string;
  features: string[];
  priceText: string;
  phone: string;
  cardImageUrl: string;
  category?: string;
  location?: string;
}

export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  penthouse: "Penthouse",
  "independent-floor": "Independent Floor",
  "residential-apartment": "Residential Apartment",
  "service-apartment": "Service Apartment",
  "residential-plots": "Residential Plots",
  "office-space": "Office Space",
  "food-court": "Food Court",
  "retail-and-office-space": "Retail and Office Space",
  "commercial-sco-plots": "Commercial SCO Plots",
};

export const properties: Property[] = [
  // 1. Sapphire 84
  {
    id: "sapphire-84",
    slug: "sapphire-84",
    developer: "Ameya Group",
    title: "Sapphire 84",
    subtitle: "Bang on Dwarka Expressway - Sector 84, Gurugram",
    features: [
      "Prime Retail and Office Spaces",
      "2.65 Lakh* sq. ft. Retail Zone",
      "Invest in Lockable Shops!",
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/84.webp", // Local Path Updated
    category: "Commercial",
    location: "Dwarka Expressway"
  },

  // 2. Sapphire 93
  // {
  //   id: "sapphire-84",
  //   slug: "sapphire-84",
  //   developer: "Ameya Group",
  //   title: "Sapphire 84",
  //   subtitle: "Bang on Dwarka Expressway - Sector 84, Gurugram",
  //   features: [
  //     "Prime Retail and Office Spaces",
  //     "2.65 Lakh* sq. ft. Retail Zone",
  //     "Invest in Lockable Shops!",
  //   ],
  //   priceText: "Price On Request",
  //   phone: "8088113333",
  //   cardImageUrl: "/projects/93.webp", // Local Path Updated
  //   category: "Commercial",
  //   location: "Dwarka Expressway"
  // },

  // 2. Sapphire 93
  {
    id: "sapphire-93",
    slug: "sapphire-93",
    developer: "Ameya Group",
    title: "Sapphire 93 - The Preferred Address for Smart Professionals!",
    subtitle: "Sapphire 93, Gurugram - A Strategic Location, Unmatched Connectivity",
    features: [
      "Fully Furnished 1 BHK and Retail Shops with 3 side open entry",
      "Upgrade to Your Own Space with smart investments and stronger returns!",
      "One of the fastest growing micro markets with immense potential for growth",
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/93.webp", // Local Path Updated
    category: "Commercial",
    location: "New Gurgaon"
  },

  // 3. TriArc City
  {
    id: "triarc-city",
    slug: "triarc-city",
    developer: "Triarc City",
    title: "Your Gateway to Smart Investment",
    subtitle: "Strategically Located on Bhiwadi-Alwar Highway",
    features: [
      "Premium Residential in the lap of nature, wellness & serenity",
      "Excellent Connectivity, High Appreciation Potential, Future Growth Corridor",
      "Secure Your Future with High Growth investment",
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/traic.jpeg", // Local Path Updated
    category: "Residential",
    location: "New Gurgaon"
  },

  // 4. Ocus Medley
  {
    id: "ocus-medley",
    slug: "ocus-medley",
    developer: "Ocus Medley",
    title: "The Ultimate Retail & Business Landmark on Dwarka Expressway",
    subtitle: "Lockable Shops in Sector 99, Gurugram",
    features: [
      "Unmatched Footfall, Unmatched Opportunity!",
      "Growing hotspot for leading brands - Bikanervala, Pizza Hut, Bata, Raymond & many more",
      "Prime Location in a thriving Catchment",
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/ocus.jpeg", // Local Path Updated
    category: "Commercial",
    location: "Dwarka Expressway"
  },

  // 5. Vatika Crossover
  {
    id: "vatika-crossover",
    slug: "vatika-crossover",
    developer: "Vatika Group",
    title: "Vatika Crossover",
    subtitle: "Sector 82A, Gurugram",
    features: [
      "Bang on NH48",
      "Retail Office Spaces & Showroom",
      "Secure Your SCO Investments Today! Possession Started"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/vatika.jpg", // Local Path Updated
    category: "Commercial",
    location: "NH-48"
  },

  // 6. Sapphire 57
  {
    id: "sapphire-57",
    slug: "sapphire-57",
    developer: "Ameya Group",
    title: "Sapphire 57 - Your Ultimate Destination for Business and Pleasure!",
    subtitle: "Sector 57, Gurugram",
    features: [
      "Fully Furnished 1 BHK, Retail Shops, High Street Market",
      "Prime Location, Exceptional Connectivity",
      "1.35 Lakh* sq. ft. Retail Zone",
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/sapphire57.jpeg", // Local Path Updated
    category: "Commercial",
    location: "Golf Course Extension Road"
  },

  // 7. Vatika Plots
  {
    id: "vatika-plots",
    slug: "vatika-plots",
    developer: "Vatika Group",
    title: "A superior Location holding the key to your Dream plot!",
    subtitle: "Sector 88A & 88B, Dwarka Expressway",
    features: [
      "Bang on Global City's opposite side",
      "Plotted Development · Residential Plots",
      "Freedom to design and build custom dream homes",
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/cross.jpg", // Local Path Updated
    category: "Residential",
    location: "Dwarka Expressway"
  },

  // 8. Sapphire 15
  {
    id: "sapphire-15",
    slug: "sapphire-15",
    developer: "Ameya Group",
    title: "Sapphire Residences - Premium Residential Space",
    subtitle: "Sapphire 15, Gurugram",
    features: [
      "3 BHK+Utility Apartment",
      "Twin Towers G+18 Floors",
      "Experience Ultra Luxury Living in the heart of Gurugram"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/15.jpeg", // Local Path Updated
    category: "Residential",
    location: "Gurugram"
  }
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
}

export function getUniqueLocations() {
  return Array.from(new Set(properties.map((p) => p.location || p.subtitle))).sort();
}

export function getUniqueDevelopers() {
  return Array.from(new Set(properties.map((p) => p.developer))).sort();
}

export function filterProperties(input: {
  q?: string;
  developer?: string;
}) {
  const q = (input.q || "").trim().toLowerCase();
  const developer = (input.developer || "").trim();

  return properties.filter((p) => {
    if (developer && p.developer !== developer) return false;

    if (q) {
      const haystack = `${p.title} ${p.subtitle} ${p.developer}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}
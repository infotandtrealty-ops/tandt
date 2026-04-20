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

  developer: string;   // 1
  title: string;       // 2
  subtitle: string;    // 3

  features: string[];  // 4,5,6

  priceText: string;   // 7
  phone: string;

  cardImageUrl: string;
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
    cardImageUrl: "/projects/222.jpeg",
  },

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
    cardImageUrl: "/projects/93.webp",
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
    cardImageUrl: "/projects/triarc.jpg",
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
    cardImageUrl: "/projects/ocus.jpg",
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
    cardImageUrl: "/projects/cross.jpg",
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
    cardImageUrl: "/projects/111.jpeg",
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
      "",
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/vatika.jpg",
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
    cardImageUrl: "/projects/residence.jpg"
  }
];

export function getPropertyBySlug(slug: string) {
  return properties.find((p) => p.slug === slug);
  
}

export function getUniqueLocations() {
  return Array.from(new Set(properties.map((p) => p.location))).sort();
}

export function getUniqueDevelopers() {
  return Array.from(new Set(properties.map((p) => p.developer))).sort();
}

export function filterProperties(input: {
  q?: string;
  location?: string;
  developer?: string;
  category?: PropertyCategory;
  type?: PropertyType;
}) {
  const q = (input.q || "").trim().toLowerCase();
  const location = (input.location || "").trim();
  const developer = (input.developer || "").trim();
  const category = input.category;
  const type = input.type;

  return properties.filter((p) => {
    if (category && p.category !== category) return false;
    if (type && p.type !== type) return false;
    if (location && p.location !== location) return false;
    if (developer && p.developer !== developer) return false;
    if (q) {
      const haystack = `${p.name} ${p.location} ${p.developer} ${PROPERTY_TYPE_LABELS[p.type]} ${p.status}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}


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
  name: string;
  developer: string;
  location: string;
  category: PropertyCategory;
  type: PropertyType;
  status: PropertyStatus;
  priceText: string;
  sizeText: string;

  cardImageUrl: string;
  headerImageUrl: string;

  overview: string;
  keyFeatures: string[];
  amenities: string[];
  floorPlans: PropertyPlanImage[];
  gallery: string[];
  priceList: PriceRow[];
  downloads?: PropertyDownload[];
  locationMapImageUrl?: string;
  videoUrl?: string;
  contact: PropertyContact;
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
  {
    id: "sapphire-82a",
    slug: "sapphire-82a",
    name: "Sapphire 82A",
    developer: "Ameya Group",
    location: "Sector 82A, Gurugram",
    category: "commercial",
    type: "Retail, Office Space & Food Court",
    status: "New Launch / Booking Open",
    priceText: "Starting ₹75 Lacs*",
    sizeText: "285 - 800 sq. ft.",
    cardImageUrl: "/projects/82-A.jpg",
    headerImageUrl: "/projects/82-A.jpg",
    
    // --- Detailed Overview ---
    overview: "Ameya Sapphire 82A is a premium Grade-A commercial development spread across 2.25 acres in the heart of Central Gurugram. Designed by the renowned Ameya Group, this project is a strategic blend of high-street retail, modern office spaces, and a vibrant food court. Located near NH-8 and the Dwarka Expressway, it caters to a massive catchment area of luxury residential townships by top developers like DLF, Vatika, and Godrej. Whether you are looking for high rental yields or a flagship business address near IMT Manesar, Sapphire 82A offers an unmatched investment opportunity with low operational costs and high visibility.",
    
    // --- Key Highlights from your data ---
    keyFeatures: [
      "Spread over 2.25 Acres of prime land",
      "Grade-A Commercial Building with 244+ Units",
      "Strategically located near NH-8 & Dwarka Expressway",
      "Close proximity to IMT Manesar and Hyatt Regency",
      "High-street retail with double-height shops"
    ],
  
    // --- Amenities Section ---
    amenities: [
      "Hi-Speed Elevators",
      "High-tech Home Automation",
      "Luxury Outdoor Party Area",
      "24/7 Power Backup & Security",
      "Ample Surface & Basement Parking",
      "Open-air Plazas & Landscaped Gardens",
      "High-speed Broadband Connectivity"
    ],
  
    // --- Technical Specifications ---
    specifications: [
      "RCC Frame Structure for earthquake resistance",
      "Advanced Drainage and Sewage Solutions",
      "Low Operational Cost design",
      "Large Store Fronts for maximum brand visibility",
      "Dedicated zones for Food Court and Fine Dining"
    ],
  
    // --- Location Advantages ---
    locationAdvantages: [
      "Direct access from NH-8 (Delhi-Jaipur Highway)",
      "Minutes away from Dwarka Expressway & SPR",
      "Nearby Schools: Yaduvanshi International & Matrikiran High School",
      "Nearby Hospitals: Genesis, SRS, and Krishna Hospital",
      "Surrounded by 50,000+ ready-to-move-in residential units"
    ],
  
    floorPlans: [{ title: "Master Plan", imageUrl: "/projects/82-A-master-plan.jpg" }],
    
    gallery: ["/projects/82-A.jpg"],

  
    priceList: [
      { type: "Retail Shops", sizeSqFt: "285 - 500", price: "Starting ₹75 Lacs*", bookingAmount: "Request for Plan" },
      { type: "Office Space", sizeSqFt: "500 - 800", price: "On Request", bookingAmount: "Request for Plan" },
      { type: "Food Court", sizeSqFt: "On Request", price: "On Request", bookingAmount: "Request for Plan" }
    ],
  
    contact: { 
      officeName: "T and T Realty Hub", 
      address: "Gurugram", 
      phone: "+91-9355744545", 
      email: "info@tandtrealty.in" 
    },
  },
  {
    id: "polo-reserve-luxury-floors",
    slug: "polo-reserve-luxury-floors",
    name: "Polo Reserve Luxury Floors",
    developer: "BREEZ Developers",
    location: "Flora Avenue, Sohna",
    category: "residential",
    type: "independent-floor",
    status: "New Launch",
    priceText: "₹ On Request",
    sizeText: "Premium 3 BHK",
    // Updated to local path
    cardImageUrl: "/projects/polo.jpg",
    headerImageUrl: "/projects/polo.jpg",
    overview: "Polo Reserve Luxury Floors by BREEZ Developers is an exquisite collection of premium low-rise independent floors situated in the heart of Flora Avenue, Sohna. Designed for those who seek privacy without compromising on luxury, these 3 BHK residences offer a stilt+4 floor configuration with dedicated elevator access. Nestled against the scenic backdrop of the Aravalli Hills, the project provides a serene, pollution-free environment while maintaining excellent connectivity to Gurugram's main business hubs via the Sohna-Gurugram Elevated Road. Each floor is crafted with modern aesthetics, spacious balconies, and high-quality finishes, offering a true 'villa-like' experience within a secure gated community.",    keyFeatures: ["Premium 3 BHK", "Clubhouse"],
    amenities: ["Clubhouse", "Gym"],
    floorPlans: [{ title: "Floor Plan", imageUrl: "/projects/polo.jpg" }],
    gallery: ["/projects/polo.jpg"],
    priceList: [{ type: "3 BHK", sizeSqFt: "On Request", price: "On Request", bookingAmount: "On Request" }],
    contact: { officeName: "T and T Realty Hub", address: "Gurugram", phone: "+918088113333", email: "info@tandtrealty.in" },
  },
  {
    id: "sapphire-57",
    slug: "sapphire-57",
    name: "Sapphire 57",
    developer: "Ameya Group",
    location: "Sector 57, Gurugram",
    category: "commercial",
    type: "retail-and-office-space",
    status: "Ongoing",
    priceText: "₹ On Request",
    sizeText: "1.80 Lakh* sq. ft.",
    // Updated to local path (.webp)
    cardImageUrl: "/projects/111.jpeg",
    headerImageUrl: "/projects/111.jpeg",
    overview: "Sapphire 57 is a premium neighborhood retail-led commercial destination located in the densely populated Sector 57, Gurugram. Designed to serve as a community hub, it features a unique 'Food Haat' and high-street retail experience. With its strategic location near Golf Course Extension Road, it attracts high footfall from the surrounding premium residential societies. The project offers a mix of double-height retail shops and modern office spaces, making it a lucrative investment for those seeking steady rental income in an established micro-market.",    keyFeatures: ["1.35 Lakh* sq. ft. retail zone"],
    amenities: ["Retail zone", "Food haat"],
    floorPlans: [{ title: "Master Plan", imageUrl: "/projects/111.jpeg" }],
    gallery: ["/projects/111.jpeg"],
    priceList: [{ type: "Retail Space", sizeSqFt: "On Request", price: "On Request", bookingAmount: "On Request" }],
    contact: { officeName: "T and T Realty Hub", address: "Gurugram", phone: "+918088113333", email: "info@tandtrealty.in" },
  },
  {
    id: "sapphire-84",
    slug: "sapphire-84",
    name: "Sapphire 84",
    developer: "Ameya Group",
    location: "Sector 84, Gurugram",
    category: "commercial",
    type: "retail-and-office-space",
    status: "Upcoming",
    priceText: "₹ On Request",
    sizeText: "2.90 Lakh* sq. ft.",
    // Updated to local path
    cardImageUrl: "/projects/222.jpeg",
    headerImageUrl: "/projects/222.jpeg",
    overview: "Sapphire 84 is an upcoming landmark commercial development strategically situated in Sector 84, right at the confluence of the Dwarka Expressway and NH-8. Spanning nearly 2.90 Lakh sq. ft., this multi-faceted project is designed to cater to the lifestyle needs of thousands of families residing in New Gurgaon. It features a grand retail zone, a multi-cuisine food hub, and state-of-the-art office spaces. Its high visibility and seamless connectivity to the Manesar industrial hub and Delhi make it a prime choice for retail brands and corporate offices alike.",    keyFeatures: ["2.65 Lakh* sq. ft. retail zone"],
    amenities: ["Retail zone", "Food hub"],
    floorPlans: [{ title: "Master Plan", imageUrl: "/projects/84.jpg" }],
    gallery: ["/projects/222.jpeg"],
    priceList: [{ type: "Retail Space", sizeSqFt: "On Request", price: "On Request", bookingAmount: "On Request" }],
    contact: { officeName: "T and T Realty Hub", address: "Gurugram", phone: "+918088113333", email: "info@tandtrealty.in" },
  },
  {
    id: "vatika-india-next-2",
    slug: "vatika-india-next-2",
    name: "Vatika India Next 2",
    developer: "Vatika Group",
    location: "Sector 88A & 88B, Gurugram",
    category: "residential",
    type: "residential-plots",
    status: "New Launch",
    priceText: "₹ On Request",
    sizeText: "Plotted Development",
    // Updated to local path
    cardImageUrl: "/projects/vatika.jpg",
    headerImageUrl: "/projects/vatika.jpg",
    overview: "Vatika India Next 2 is an expansive and premium plotted development that represents the next phase of integrated township living in Gurugram. Located in the emerging sectors 88A and 88B, it offers residents the freedom to build their dream homes within a secured, gated community. The project is characterized by wide internal roads, lush green parks, and a meticulously planned infrastructure that includes underground utilities. Being close to the Dwarka Expressway and the proposed Metro corridor, it offers excellent appreciation potential for long-term investors and end-users.",    keyFeatures: ["Premium residential plots"],
    amenities: ["Wide roads", "Parks"],
    floorPlans: [{ title: "Site Layout", imageUrl: "/projects/vatika.jpg" }],
    gallery: ["/projects/vatika.jpg"],
    priceList: [{ type: "Residential Plot", sizeSqFt: "On Request", price: "On Request", bookingAmount: "On Request" }],
    contact: { officeName: "T and T Realty Hub", address: "Gurugram", phone: "+918088113333", email: "info@tandtrealty.in" },
  },
  {
    id: "vatika-crossover",
    slug: "vatika-crossover",
    name: "Vatika Crossover",
    developer: "Vatika Group",
    location: "Sector 82A, NH-48, Gurugram",
    category: "commercial",
    type: "commercial-sco-plots",
    status: "New Launch",
    priceText: "₹ On Request",
    sizeText: "Plots from 95 to 215 sq. yds.",
    // Updated to local path
    cardImageUrl: "/projects/cross.jpg",
    headerImageUrl: "/projects/cross.jpg",
    overview: "Vatika Crossover is a landmark High-Street Commercial SCO (Shop-cum-Office) development located directly on NH-48 in Sector 82A. This project offers a unique investment model where buyers own the land from the basement to the terrace. With its impressive frontage and direct access from the highway, it is perfectly suited for flagship retail stores, upscale restaurants, and premium office suites. Vatika Crossover serves as a strategic bridge between Gurgaon and Manesar, benefiting from the massive transit traffic and the high-income catchment area surrounding it.",    keyFeatures: ["Ownership from land to terrace"],
    amenities: ["High-street frontage"],
    floorPlans: [{ title: "Site Plan", imageUrl: "/projects/cross.jpg" }],
    gallery: ["/projects/cross.jpg"],
    priceList: [{ type: "Commercial SCO Plot", sizeSqFt: "95–215 sq. yds.", price: "On Request", bookingAmount: "On Request" }],
    contact: { officeName: "T and T Realty Hub", address: "Gurugram", phone: "+918088113333", email: "info@tandtrealty.in" },
  },
  {
    id: "sapphire-93",
    slug: "sapphire-93",
    name: "Sapphire 93",
    developer: "Ameya Group",
    location: "Sector 93, Gurugram",
    category: "commercial",
    type: "retail-and-office-space",
    status: "Ongoing",
    priceText: "₹ On Request",
    sizeText: "Premium Development",
    // Updated to local path
    cardImageUrl: "/projects/93.webp",
    headerImageUrl: "/projects/93.webp",
    overview: "Sapphire 93 is a sophisticated commercial development in the fast-evolving Sector 93 of New Gurgaon. This project is a fine blend of a 'Retail Bazaar,' modern workspaces, and premium serviced suites designed for the new-age professional. It addresses the growing demand for quality commercial spaces in the vicinity of the Multi-Utility Corridor. With a focus on aesthetic design and functional efficiency, Sapphire 93 offers a vibrant environment for startups, boutique offices, and retail brands looking to tap into the expanding residential population of the sector.",    keyFeatures: ["Serviced suites", "Modern work spaces"],
    amenities: ["Workspaces", "Retail bazaar"],
    floorPlans: [{ title: "Master Plan", imageUrl: "/projects/93.jpg" }],
    gallery: ["/projects/93.jpgwebp"],
    priceList: [{ type: "Commercial Space", sizeSqFt: "On Request", price: "On Request", bookingAmount: "On Request" }],
    contact: { officeName: "T and T Realty Hub", address: "Gurugram", phone: "+918088113333", email: "info@tandtrealty.in" },
  },
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


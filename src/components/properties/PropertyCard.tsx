import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Property } from "@/data/properties";

/* ------------------ MARKETING DATA ARRAY ------------------ */

interface MarketingProject {
  slug: string;
  badge: string;
  title: string;
  developer?: string;
  location: string;
  line1?: string;
  line2?: string;
  size?: string;
  highlight?: string;
  price: string;
}

const MARKETING_PROJECTS: MarketingProject[] = [
  {
    slug: "sapphire-82a",
    badge: "Launch / Booking Open",
    title: "Sapphire 84 - A Signature Address For Business",
    developer: "Ameya Group",
    location: "Sector 84, Gurugram",
    line1: "Bang on Dwarka Expressway",
    line2: "Prime Retail and Office Spaces",
    size: "Sizes - Onwards",
    highlight: "Invest in Lockable Shops!",
    price: "Price on request",
  },
  {
    slug: "sapphire-93",
    badge: "Ongoing",
    title:
      "Sector 93 - The Preferred Address for Smart Professionals!",
    developer: "Ameya Group",
    location: "Sector 93, Gurugram",
    line1: "A Strategic Location, Unmatched Connectivity",
    line2:
      "Fully Furnished 1 BHK and Retail Shops with 3 side open entry",
    size: "Sizes - Onwards",
    highlight:
      "Upgrade to Your Own Space with smart investments and stronger returns!",
    price: "Price on request",
  },
  {
    slug: "vatika-crossover",
    badge: "New Launch",
    title: "Vatika Crossover",
    developer: "Vatika Group",
    location: "Sector 82A, Gurugram",
    line1: "Bang on NH48",
    line2: "Retail Office Spaces & Showroom",
    size: "Sizes - Onwards",
    highlight:
      "Secure Your SCO Investments Today! Possession Started",
    price: "Price on request",
  },
  {
    slug: "sapphire-15",
    badge: "New Launch",
    title: "Sapphire Residences - An address worth opening!",
    developer: "Ameya Group",
    location: "Sector 15 Part-II, Gurugram",
    line1: "3 BHK + Utility Apartments",
    size: "Sizes - Onwards",
    highlight:
      "Invest in a capsule of Luxury in the heart of Gurugram!",
    price: "Price on request",
  },
  {
    slug: "sapphire-57",
    badge: "Possession Now",
    title: "Your Ultimate Destination for Business and Pleasure!",
    developer: "Ameya Group",
    location: "Sector 57, Gurugram",
    line1:
      "Fully Furnished 1 BHK, Retail Shops, Food Haat, Medizone",
    highlight: "Possession Now!",
    price: "₹ On Request",
  },
  {
    slug: "vatika-india-next-2",
    badge: "New Launch",
    title:
      "A superior Location holding the key to your Dream plot!",
    developer: "Vatika Group",
    location: "Sector 88A & 88B, Dwarka Expressway",
    line1: "Bang on Global City's opposite side",
    line2: "Plotted Development · Residential Plots",
    price: "₹ On Request",
  },
  {
    slug: "orchid-ivy",
    badge: "Booking Open",
    title: "Orchid IVY - Discover A New Way of Living",
    developer: "Orchid IVY",
    location: "Sector 51, Gurugram",
    line1:
      "Premium Independent Floors 3 & 4 BHK + Study",
    line2:
      "Location Advantage: Medanta (3km), Upcoming Metro Station (3km)",
    size: "Sizes - Onwards",
    highlight:
      "Dedicated Servant Room + Basement & Terrace Area",
    price: "Price on request",
  },
  {
    slug: "ocus-medley",
    badge: "New Launch",
    title:
      "One of the biggest Mixed Commercial High Street on Dwarka Expressway",
    developer: "OCUS - Medley",
    location: "Sector 99, Gurugram",
    line1:
      "Retail Shops, Office Space, Food Court, 3 Screen Multiplex",
    highlight:
      "Pre Leased and Self Used Lockable Units",
    price: "Price on request",
  },
  {
    slug: "flora-avenue-33",
    badge: "New Launch",
    title: "Flora Avenue 33",
    developer: "BREEZ Developers",
    location: "Sector 33, Sohna (South of Gurugram)",
    line1: "3 BHK Independent Luxury Floors",
    line2:
      "15 mins from Golf Course Ext. Road · Easy NH48 & Expressway Access",
    size: "Sizes - Onwards",
    highlight:
      "Schools, Healthcare and Shopping in the vicinity",
    price: "Price on request",
  },
];

/* ------------------ COMPONENT ------------------ */

export default function PropertyCard({ property }: { property: Property }) {
  const marketingData = MARKETING_PROJECTS.find(
    (item) => item.slug === property.slug
  );

  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={property.cardImageUrl}
          alt={property.name}
          className="w-full h-80 object-cover"
        />

        {/* BADGE */}
        {marketingData && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/75 text-white">
              {marketingData.badge}
            </span>
          </div>
        )}
      </div>

      {/* DYNAMIC CONTENT */}
      <CardContent className="p-6 space-y-3">
        {marketingData ? (
          <>
            {marketingData.developer && (
              <p className="text-xs font-bold uppercase text-gold">
                {marketingData.developer}
              </p>
            )}

            <h3 className="text-xl font-bold">
              {marketingData.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {marketingData.location}
            </p>

            {marketingData.line1 && (
              <p className="text-sm">
                {marketingData.line1}
              </p>
            )}

            {marketingData.line2 && (
              <p className="text-sm">
                {marketingData.line2}
              </p>
            )}

            {marketingData.size && (
              <p className="text-sm font-medium">
                {marketingData.size}
              </p>
            )}

            {marketingData.highlight && (
              <p className="text-sm">
                {marketingData.highlight}
              </p>
            )}

            <p className="text-lg font-bold mt-2">
              {marketingData.price}
            </p>

            <div className="pt-3">
              <button className="text-sm text-gold underline">
                Contact Us
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Fallback if slug not found */}
            <p className="text-xs font-bold uppercase text-gold">
              {property.developer}
            </p>
            <h3 className="text-xl font-bold">{property.name}</h3>
            <p className="text-sm">{property.location}</p>
            <p className="text-sm">{property.sizeText}</p>
            <p className="text-lg font-bold">{property.priceText}</p>
          </>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link to={`/property/${property.slug}`} className="w-full">
          <Button variant="gold" size="lg" className="w-full rounded-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
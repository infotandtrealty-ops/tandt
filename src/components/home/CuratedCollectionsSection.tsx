import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { properties, type PropertyType } from "@/data/properties";

function makeSearchUrl(params: Record<string, string>) {
  const sp = new URLSearchParams(params);
  return `/search?${sp.toString()}`;
}

function parseCr(priceText: string) {
  // Handles "₹ 1.20 Cr*", "₹ 95 Lakh*" etc
  const normalized = priceText.replace(/₹/g, "").replace(/\*/g, "").trim().toLowerCase();
  const crMatch = normalized.match(/([\d.]+)\s*cr/);
  if (crMatch) return Number(crMatch[1]);
  const lakhMatch = normalized.match(/([\d.]+)\s*lakh/);
  if (lakhMatch) return Number(lakhMatch[1]) / 100;
  return null;
}

const collectionCardClass =
  "group relative overflow-hidden rounded-2xl border border-border bg-white shadow-soft hover:shadow-medium transition-all duration-300";

function firstImageUrl(filterFn: (p: (typeof properties)[number]) => boolean) {
  const p = properties.find(filterFn);
  return p?.cardImageUrl || properties[0]?.cardImageUrl || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop";
}

export default function CuratedCollectionsSection() {
  const countByType = (t: PropertyType) => properties.filter((p) => p.type === t).length;
  const countNewProjects = properties.filter((p) => p.status === "New Launch").length;
  const countReadyToMove = properties.filter((p) => p.status === "Ready to Move").length;

  const countLuxury = properties.filter((p) => {
    const cr = parseCr(p.priceText);
    return cr !== null && cr >= 3;
  }).length;

  const countBudgetFriendly = properties.filter((p) => {
    const cr = parseCr(p.priceText);
    return cr !== null && cr <= 1;
  }).length;

  const items: Array<{
    title: string;
    subtitle: string;
    count: number;
    href: string;
    imageUrl: string;
    tone?: "gold" | "navy";
  }> = [
    {
      title: "New Projects",
      subtitle: "Recently launched",
      count: countNewProjects,
      href: makeSearchUrl({ q: "New Launch" }),
      imageUrl: firstImageUrl((p) => p.status === "New Launch"),
      tone: "gold",
    },
    {
      title: "Ready To Move",
      subtitle: "Immediate possession",
      count: countReadyToMove,
      href: makeSearchUrl({ q: "Ready to Move" }),
      imageUrl: firstImageUrl((p) => p.status === "Ready to Move"),
      tone: "navy",
    },
    {
      title: "Luxury",
      subtitle: "Premium segment",
      count: countLuxury,
      href: makeSearchUrl({ q: "Cr" }),
      imageUrl: firstImageUrl((p) => p.category === "residential"),
      tone: "gold",
    },
    {
      title: "Builder Floors",
      subtitle: "Low-rise living",
      count: countByType("independent-floor"),
      href: makeSearchUrl({ type: "independent-floor" }),
      imageUrl: firstImageUrl((p) => p.type === "independent-floor"),
      tone: "navy",
    },
    {
      title: "Budget Friendly",
      subtitle: "Value picks",
      count: countBudgetFriendly,
      href: makeSearchUrl({ q: "Lakh" }),
      imageUrl: firstImageUrl(() => true),
      tone: "gold",
    },
    {
      title: "Penthouses",
      subtitle: "Sky-high living",
      count: countByType("penthouse"),
      href: makeSearchUrl({ type: "penthouse" }),
      imageUrl: firstImageUrl((p) => p.type === "penthouse"),
      tone: "navy",
    },
    {
      title: "Raw Houses",
      subtitle: "Coming soon",
      count: 0,
      href: "/properties",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&auto=format&fit=crop",
      tone: "navy",
    },
    {
      title: "Condominiums",
      subtitle: "Apartment living",
      count: countByType("residential-apartment"),
      href: makeSearchUrl({ type: "residential-apartment" }),
      imageUrl: firstImageUrl((p) => p.type === "residential-apartment"),
      tone: "gold",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gold font-bold tracking-widest text-sm uppercase">Curated Collections</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Explore prime properties based on your recommendation
          </h2>
          <p className="text-muted-foreground mt-3">Quick picks like New Projects, Ready To Move, Luxury and more.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link key={item.title} to={item.href}>
              <Card className={cn(collectionCardClass, "cursor-pointer")}>
                {/* Background image */}
                <img
                  src={item.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

                <div className="relative p-5 min-h-[190px] flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-bold text-white text-lg drop-shadow">{item.title}</p>
                      <p className="text-sm text-white/85 mt-1">{item.subtitle}</p>
                    </div>
                    <div
                      className={cn(
                        "shrink-0 rounded-full px-3 py-1 text-xs font-bold backdrop-blur",
                        item.tone === "gold" ? "bg-gold/25 text-white" : "bg-white/15 text-white",
                      )}
                    >
                      {item.count} properties
                    </div>
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <p className="text-sm text-white/90 group-hover:text-white transition-colors">Explore</p>
                    <div className="h-10 w-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <span className="text-white text-lg leading-none">→</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


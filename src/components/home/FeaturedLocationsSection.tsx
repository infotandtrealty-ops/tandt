import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getUniqueLocations, properties } from "@/data/properties";

function makeSearchUrl(params: Record<string, string>) {
  const sp = new URLSearchParams(params);
  return `/search?${sp.toString()}`;
}

export default function FeaturedLocationsSection() {
  const locations = getUniqueLocations();

  const topLocations = locations
    .map((loc) => {
      const matches = properties.filter((p) => p.location === loc);
      return {
        loc,
        count: matches.length,
        imageUrl:
          matches[0]?.cardImageUrl ||
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop",
      };
    })
    .sort((a, b) => (b.count !== a.count ? b.count - a.count : a.loc.localeCompare(b.loc)))
    .slice(0, 4);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-from)_0%,_transparent_50%)] from-gold/5 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-gold font-bold tracking-[0.2em] text-xs uppercase mb-2">Neighborhoods</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Premium Localities <br /> <span className="text-slate-400 font-light italic">Across Delhi NCR</span>
            </h2>
          </div>
          <Link 
            to="/properties" 
            className="text-sm font-bold uppercase tracking-widest text-gold hover:text-foreground transition-colors flex items-center gap-2 group"
          >
            Explore All <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topLocations.map(({ loc, count, imageUrl }, index) => (
            <motion.div
              key={loc}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={makeSearchUrl({ location: loc })} className="group block">
                <Card className="relative h-[320px] overflow-hidden rounded-[2rem] border-none shadow-none bg-slate-100 transition-all duration-500">
                  {/* Image with zoom effect */}
                  <img
                    src={imageUrl}
                    alt={loc}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Button-style Bottom Data Container */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-[1.5rem] shadow-xl border border-white/20 transform transition-all duration-500 group-hover:-translate-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-slate-900 text-base leading-tight tracking-tight">
                            {loc}
                          </h3>
                          <p className="text-[10px] font-bold text-gold uppercase tracking-[0.1em] mt-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {count} {count === 1 ? 'Property' : 'Properties'}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#031916] flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
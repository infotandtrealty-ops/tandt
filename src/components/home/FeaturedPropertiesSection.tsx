import { Link } from "react-router-dom";
import PropertyCard from "@/components/properties/PropertyCard";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";

export default function FeaturedPropertiesSection() {
  // Bina kisi filter ya slice ke direct saare 8 projects ko pure array se le rahe hain
  const allProjects = properties;

  return (
    <section className="section-padding bg-slate-50 border-y">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-gold font-bold tracking-widest text-sm uppercase">Featured Properties</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Check out some of our listed properties</h2>
          </div>
          <Link to="/search">
            <Button variant="outline" className="rounded-full">
              View all Properties
            </Button>
          </Link>
        </div>

        {allProjects.length === 0 ? (
          <div className="rounded-2xl border border-border bg-muted p-10 text-center">
            <p className="font-semibold text-foreground">No properties yet</p>
            <p className="text-sm text-muted-foreground mt-2">Add properties in `src/data/properties.ts`.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
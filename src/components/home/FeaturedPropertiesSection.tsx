import { Link } from "react-router-dom";
import PropertyCard from "@/components/properties/PropertyCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { filterProperties } from "@/data/properties";

export default function FeaturedPropertiesSection() {
  const residential = filterProperties({ category: "residential" }).slice(0, 3);
  const commercial = filterProperties({ category: "commercial" }).slice(0, 3);

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

        <Tabs defaultValue="residential" className="w-full">
          <div className="flex items-center justify-between gap-4 mb-8">
            <TabsList className="h-11">
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
            </TabsList>
            <div className="hidden md:flex gap-3">
              <Link to="/properties/residential">
                <Button variant="gold" className="rounded-full">Residential</Button>
              </Link>
              <Link to="/properties/commercial">
                <Button variant="outline" className="rounded-full">Commercial</Button>
              </Link>
            </div>
          </div>

          <TabsContent value="residential">
            {residential.length === 0 ? (
              <div className="rounded-2xl border border-border bg-muted p-10 text-center">
                <p className="font-semibold text-foreground">No residential properties yet</p>
                <p className="text-sm text-muted-foreground mt-2">Add properties in `src/data/properties.ts`.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {residential.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="commercial">
            {commercial.length === 0 ? (
              <div className="rounded-2xl border border-border bg-muted p-10 text-center">
                <p className="font-semibold text-foreground">No commercial properties yet</p>
                <p className="text-sm text-muted-foreground mt-2">Add properties in `src/data/properties.ts`.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {commercial.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}















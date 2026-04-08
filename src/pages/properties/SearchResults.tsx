import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertyFiltersBar, { type PropertyFiltersValue } from "@/components/properties/PropertyFiltersBar";
import {
  PROPERTY_TYPE_LABELS,
  filterProperties,
  getUniqueDevelopers,
  getUniqueLocations,
  type PropertyCategory,
  type PropertyType,
} from "@/data/properties";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CATEGORY_TO_TYPES: Record<PropertyCategory, PropertyType[]> = {
  residential: ["penthouse", "independent-floor", "residential-apartment", "service-apartment", "residential-plots"],
  commercial: ["office-space", "food-court", "retail-and-office-space", "commercial-sco-plots"],
};

function isCategory(v: string | null): v is PropertyCategory {
  return v === "commercial" || v === "residential";
}

function isType(v: string | null): v is PropertyType {
  return (
    v === "penthouse" ||
    v === "independent-floor" ||
    v === "residential-apartment" ||
    v === "service-apartment" ||
    v === "residential-plots" ||
    v === "office-space" ||
    v === "food-court" ||
    v === "retail-and-office-space" ||
    v === "commercial-sco-plots"
  );
}

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = isCategory(searchParams.get("category")) ? (searchParams.get("category") as PropertyCategory) : "";
  const initialType = isType(searchParams.get("type")) ? (searchParams.get("type") as PropertyType) : "";

  const [category, setCategory] = useState<PropertyCategory | "">(initialCategory);
  const [filters, setFilters] = useState<PropertyFiltersValue>(() => ({
    q: searchParams.get("q") || "",
    location: searchParams.get("location") || "",
    developer: searchParams.get("developer") || "",
    type: initialType,
  }));

  useEffect(() => {
    if (!category) return;
    setFilters((prev) => {
      if (!prev.type) return prev;
      if (CATEGORY_TO_TYPES[category].includes(prev.type)) return prev;
      return { ...prev, type: "" };
    });
  }, [category]);

  const locationOptions = useMemo(() => getUniqueLocations(), []);
  const developerOptions = useMemo(() => getUniqueDevelopers(), []);
  const typeOptions = useMemo(() => {
    if (!category) return Object.keys(PROPERTY_TYPE_LABELS) as PropertyType[];
    return CATEGORY_TO_TYPES[category];
  }, [category]);

  const results = useMemo(() => {
    return filterProperties({
      q: filters.q,
      location: filters.location,
      developer: filters.developer,
      category: category || undefined,
      type: filters.type || undefined,
    });
  }, [category, filters]);

  const onSearch = () => {
    const next = new URLSearchParams();
    if (filters.q.trim()) next.set("q", filters.q.trim());
    if (filters.location) next.set("location", filters.location);
    if (filters.developer) next.set("developer", filters.developer);
    if (category) next.set("category", category);
    if (filters.type) next.set("type", filters.type);
    setSearchParams(next, { replace: true });
  };

  const onReset = () => {
    setCategory("");
    setFilters({ q: "", location: "", developer: "", type: "" });
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  return (
    <Layout>
      {/* 1. COMPACT HEADER: Smaller padding and height */}
      <div className="relative pt-12 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            className="w-full h-full object-cover" 
            alt="Search Header"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
           <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
           <p className="text-white/80 text-sm">Home &gt; Properties</p>
        </div>
      </div>

      <section className="pb-20">
        <div className="container-custom">
          {/* 2. OVERLAPPING FILTERS: Moves the search bar onto the banner like the screenshot */}
          <div className="-mt-12 relative z-20 mb-10">
            <div className="bg-white p-2 rounded-xl shadow-xl border border-slate-100">
              <div className="grid gap-3 md:grid-cols-12 items-center">
                <div className="md:col-span-3">
                    <Select
                      value={category || "__all__"}
                      onValueChange={(v) => setCategory(v === "__all__" ? "" : (v as PropertyCategory))}
                    >
                      <SelectTrigger className="h-12 border-none focus:ring-0 shadow-none text-slate-600 font-medium">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="__all__">All Categories</SelectItem>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                </div>

                <div className="md:col-span-9">
                  <PropertyFiltersBar
                    value={filters}
                    onChange={setFilters}
                    onSearch={onSearch}
                    onReset={onReset}
                    locationOptions={locationOptions}
                    developerOptions={developerOptions}
                    typeOptions={typeOptions}
                    ctaLabel="SEARCH"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8 border-b pb-4">
             <p className="text-sm text-muted-foreground italic">
                Showing <span className="font-semibold text-foreground">{results.length}</span> results found
             </p>
          </div>

          {results.length === 0 ? (
            <div className="rounded-2xl border border-border bg-muted p-10 text-center">
              <p className="font-semibold text-foreground">No properties found</p>
              <p className="text-sm text-muted-foreground mt-2">Try changing filters or resetting.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
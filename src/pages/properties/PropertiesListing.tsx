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
import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const CATEGORY_LABELS: Record<PropertyCategory, string> = {
  residential: "Residential",
  commercial: "Commercial",
};

const CATEGORY_TO_TYPES: Record<PropertyCategory, PropertyType[]> = {
  residential: ["penthouse", "independent-floor", "residential-apartment", "service-apartment", "residential-plots"],
  commercial: ["office-space", "food-court", "retail-and-office-space", "commercial-sco-plots"],
};

function isCategory(v: string | undefined): v is PropertyCategory {
  return v === "commercial" || v === "residential";
}

function isType(v: string | undefined): v is PropertyType {
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

function getFiltersFromSearchParams(sp: URLSearchParams, forcedType: PropertyType | null): PropertyFiltersValue {
  const q = sp.get("q") || "";
  const location = sp.get("location") || "";
  const developer = sp.get("developer") || "";
  const type = forcedType ? forcedType : ((sp.get("type") as PropertyType | null) || "");
  return { q, location, developer, type: isType(type) ? type : "" };
}

export default function PropertiesListing() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = params.category;
  const typeParam = params.type;

  const category: PropertyCategory | null = isCategory(categoryParam) ? categoryParam : null;
  const typeFromRoute: PropertyType | null = isType(typeParam) ? typeParam : null;

  const [filters, setFilters] = useState<PropertyFiltersValue>(() => getFiltersFromSearchParams(searchParams, typeFromRoute));

  const locationOptions = useMemo(() => getUniqueLocations(), []);
  const developerOptions = useMemo(() => getUniqueDevelopers(), []);
  const typeOptions = useMemo(() => (category ? CATEGORY_TO_TYPES[category] : (Object.keys(PROPERTY_TYPE_LABELS) as PropertyType[])), [
    category,
  ]);

  const results = useMemo(() => {
    if (!category) return [];
    const effectiveType = typeFromRoute ?? (filters.type || undefined);
    return filterProperties({
      q: filters.q,
      location: filters.location,
      developer: filters.developer,
      category,
      type: effectiveType,
    });
  }, [category, filters, typeFromRoute]);

  if (!category) {
    return (
      <Layout>
        <PageHeader title="Properties" subtitle="Invalid category. Please open Commercial or Residential properties." breadcrumbs={[{ name: "Properties", href: "/properties" }, { name: "Not Found" }]} />
        <section className="section-padding">
          <div className="container-custom">
            <p className="text-muted-foreground">Use `/properties/residential` or `/properties/commercial`.</p>
          </div>
        </section>
      </Layout>
    );
  }

  const pageTitle = typeFromRoute ? `${PROPERTY_TYPE_LABELS[typeFromRoute]} Properties` : `${CATEGORY_LABELS[category]} Properties`;
  const pageSubtitle = typeFromRoute
    ? `Browse ${PROPERTY_TYPE_LABELS[typeFromRoute]} listings in ${CATEGORY_LABELS[category].toLowerCase()} category.`
    : `Browse all ${CATEGORY_LABELS[category].toLowerCase()} listings. Filter by name, location, developer and type.`;

  const onSearch = () => {
    const next = new URLSearchParams();
    if (filters.q.trim()) next.set("q", filters.q.trim());
    if (filters.location) next.set("location", filters.location);
    if (filters.developer) next.set("developer", filters.developer);
    if (!typeFromRoute && filters.type) next.set("type", filters.type);
    setSearchParams(next, { replace: true });
  };

  const onReset = () => {
    const next: PropertyFiltersValue = { q: "", location: "", developer: "", type: typeFromRoute ?? "" };
    setFilters(next);
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  return (
    <Layout>
      <PageHeader
        title={pageTitle}
        subtitle={pageSubtitle}
        breadcrumbs={[
          { name: "Properties", href: "/properties" },
          { name: CATEGORY_LABELS[category], href: `/properties/${category}` },
          ...(typeFromRoute ? [{ name: PROPERTY_TYPE_LABELS[typeFromRoute] }] : []),
        ]}
        backgroundImage="https://plus.unsplash.com/premium_photo-1661775953246-410e3a33977c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHByb3BlcnR5fGVufDB8fDB8fHww"
      />

      <section className="section-padding">
        <div className="container-custom space-y-10">
          <PropertyFiltersBar
            value={filters}
            onChange={setFilters}
            onSearch={onSearch}
            onReset={onReset}
            locationOptions={locationOptions}
            developerOptions={developerOptions}
            typeOptions={typeOptions}
            hideType={Boolean(typeFromRoute)}
            ctaLabel="Search"
          />

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{results.length}</span> results
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


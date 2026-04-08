import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  getPropertyBySlug,
  PROPERTY_TYPE_LABELS,
  type Property,
} from "@/data/properties";
import { Building2, MapPin, Tag, Ruler, Download, Phone, Mail } from "lucide-react";

export default function PropertyDetails() {
  const { slug } = useParams();
  const property: Property | undefined = useMemo(() => (slug ? getPropertyBySlug(slug) : undefined), [slug]);
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!property) {
    return (
      <Layout>
        <PageHeader title="Property Not Found" subtitle="This property does not exist or the URL is incorrect." breadcrumbs={[{ name: "Properties", href: "/properties" }, { name: "Not Found" }]} />
        <section className="section-padding">
          <div className="container-custom">
            <Link to="/properties" className="underline">
              Back to Properties
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Lead";

    const payload = {
      connector_guid: "0643224ddd4046f7a87b5cb2927c1b6e",
      first_name: firstName,
      last_name: lastName,
      comment: `Property: ${property.name}\nLocation: ${property.location}\nType: ${PROPERTY_TYPE_LABELS[property.type]}\n\nMessage: ${formData.message}`,
      mobile_number: formData.phone,
      email_address: formData.email,
      property_project_name: property.name,
    };

    try {
      const response = await fetch(
        "https://ttr171-api.iqsetter.com/crm/lead/create?authkey=2d74f12a781f433d934312fa0cf240fb",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) throw new Error("Lead submission failed");

      toast({
        title: "Inquiry Submitted!",
        description: "Your details have been sent to our team successfully.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHeader
        title={property.name}
        subtitle={`${property.developer} · ${property.location}`}
        breadcrumbs={[
          { name: "Properties", href: "/properties" },
          { name: property.category === "commercial" ? "Commercial" : "Residential", href: `/properties/${property.category}` },
          { name: PROPERTY_TYPE_LABELS[property.type] },
          { name: property.name },
        ]}
        backgroundImage={property.headerImageUrl}
      />

      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-12 gap-10">
          {/* Left: Overview + Tabs */}
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gold" />
                  <span>
                    <span className="font-semibold text-foreground">Developer:</span> {property.developer}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>
                    <span className="font-semibold text-foreground">Location:</span> {property.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gold" />
                  <span>
                    <span className="font-semibold text-foreground">Property Type:</span> {PROPERTY_TYPE_LABELS[property.type]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-gold" />
                  <span>
                    <span className="font-semibold text-foreground">Size:</span> {property.sizeText}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Starting</p>
                  <p className="text-3xl font-bold text-foreground">{property.priceText}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Status: <span className="font-semibold text-foreground">{property.status}</span>
                  </p>
                </div>
                <a href="#enquire">
                  <Button variant="gold" size="xl" className="rounded-full">
                    Enquire Now
                  </Button>
                </a>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <div className="overflow-x-auto">
                <TabsList className="h-auto flex-wrap justify-start">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="key-features">Key Features</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="floor-plan">Floor Plan</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="price-list">Price List</TabsTrigger>
                  <TabsTrigger value="download">Download</TabsTrigger>
                  <TabsTrigger value="location-map">Location Map</TabsTrigger>
                  <TabsTrigger value="video">Video</TabsTrigger>
                  <TabsTrigger value="contact">Contact Us</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{property.overview}</p>
                </div>
              </TabsContent>

              <TabsContent value="key-features" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">{property.name} Key Features</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {property.keyFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-gold mt-1.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">{property.name} Amenities</h3>
                  <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {property.amenities.map((a) => (
                      <li key={a} className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="floor-plan" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">Floor Plan</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {property.floorPlans.map((fp) => (
                      <div key={fp.title} className="overflow-hidden rounded-xl border border-border">
                        <img
                          src={fp.imageUrl}
                          alt={fp.title}
                          className="w-full h-56 object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "https://placehold.co/1200x800?text=Floor+Plan";
                          }}
                        />
                        <div className="p-4">
                          <p className="font-semibold text-foreground">{fp.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">Gallery</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {property.gallery.map((img, idx) => (
                      <div key={img} className="overflow-hidden rounded-xl border border-border">
                        <img
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-40 object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "https://placehold.co/1200x800?text=Gallery";
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="price-list" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">Price List</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b border-border">
                          <th className="py-3 pr-4">Type</th>
                          <th className="py-3 pr-4">Size (Sq. Ft.)</th>
                          <th className="py-3 pr-4">Price</th>
                          <th className="py-3 pr-4">Booking Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {property.priceList.map((row, idx) => (
                          <tr key={`${row.type}-${idx}`} className="border-b border-border/60">
                            <td className="py-3 pr-4 font-medium text-foreground">{row.type}</td>
                            <td className="py-3 pr-4 text-muted-foreground">{row.sizeSqFt}</td>
                            <td className="py-3 pr-4 text-muted-foreground">{row.price}</td>
                            <td className="py-3 pr-4 text-muted-foreground">{row.bookingAmount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="download" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">Downloads</h3>
                  {property.downloads?.length ? (
                    <div className="space-y-3">
                      {property.downloads.map((d) => (
                        <a key={d.label} href={d.url} className="flex items-center justify-between rounded-xl border border-border px-4 py-3 hover:bg-muted transition-colors">
                          <span className="font-medium text-foreground">{d.label}</span>
                          <Download className="w-4 h-4 text-muted-foreground" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No downloads available.</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="location-map" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">Location Map</h3>
                  {property.locationMapImageUrl ? (
                    <div className="overflow-hidden rounded-xl border border-border">
                      <img src={property.locationMapImageUrl} alt="Location map" className="w-full h-[360px] object-cover" />
                    </div>
                  ) : (
                    <p className="text-muted-foreground">Location map not available.</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="video" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">Video</h3>
                  {property.videoUrl ? (
                    <a href={property.videoUrl} target="_blank" rel="noreferrer" className="underline">
                      Open video in a new tab
                    </a>
                  ) : (
                    <p className="text-muted-foreground">Video not available.</p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="contact" className="mt-6">
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <h3 className="font-display text-2xl font-bold mb-4">Contact Us</h3>
                  <p className="text-muted-foreground mb-6">
                    For accurate information, interested parties are recommended to address the realtor for consultation.
                  </p>

                  <div className="rounded-xl border border-border bg-background p-5">
                    <p className="font-semibold text-foreground">{property.contact.officeName}</p>
                    <p className="text-sm text-muted-foreground mt-2">{property.contact.address}</p>
                    <div className="mt-4 space-y-2 text-sm">
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4 text-gold" /> {property.contact.phone}
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4 text-gold" /> {property.contact.email}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right: Enquiry */}
          <div className="lg:col-span-4">
            <div id="enquire" className="sticky top-28 rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h3 className="font-display text-2xl font-bold">Enquire Now</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Share your details and we’ll get back with the latest price, availability, brochure & site visit options.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="h-11" required />
                <Input name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email ID" className="h-11" required />
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your Number" className="h-11" required />
                <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message (optional)" className="min-h-[110px]" />

                <Button type="submit" variant="gold" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


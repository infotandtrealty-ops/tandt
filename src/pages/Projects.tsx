import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// Aapki main data file se direct saare 8 projects import kar rahe hain
import { properties } from "@/data/properties";

const Projects = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Projects"
        subtitle="The Sapphire Chain: Redefining Neighbourhood Bazaars in Gurugram"
        breadcrumbs={[{ name: "Projects" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Featured Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sapphire Chain of Neighbourhood Bazaars
            </h2>
            <p className="text-muted-foreground">
              The story started in 2009 with The Sapphire (Sec 49). Today, Ameya Group 
              continues its journey, delivering high-value local marketplaces that click 
              due to more visibility, low CAM charges, and repeat footfalls.
            </p>
          </div>

          <div className="space-y-20">
            {properties.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={project.cardImageUrl}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Project+Image" }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold text-primary shadow-lg">
                        {project.priceText || "Price On Request"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <p className="text-gold font-bold tracking-widest text-sm uppercase mb-2">
                      {project.developer}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm border-y border-border py-4">
                    <span className="flex items-center gap-2 text-muted-foreground font-medium">
                      <MapPin className="w-5 h-5 text-gold" />
                      {project.subtitle}
                    </span>
                  </div>

                  {project.features && project.features.length > 0 && (
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Project Highlights:</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {project.features.map((feature, i) => (
                          feature ? (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                              {feature}
                            </li>
                          ) : null
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-4">
                    <Link to="/contact">
                      <Button variant="gold" size="lg" className="rounded-full px-8">
                        Enquire Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 section-padding border-t">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-8">Brands Who Trust Ameya</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our strategic locations and immaculate planning have earned the trust 
            of India's leading retailers and businesses.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Invest in the Future of Retail</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Join the Sapphire success story. Prime shop spaces and office suites available 
            in Gurgaon's fastest-growing sectors.
          </p>
          <Link to="/contact">
            <Button variant="default" size="lg" className="rounded-full bg-gold text-black hover:bg-gold/90">
              Get Location Map & Brochure
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
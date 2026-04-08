import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Building,
  TrendingUp,
  Calculator,
  FileSearch,
  Map,
  BarChart3,
  Store,
  Key,
  Gem,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Real Estate Investment",
    description: "Identify high-yield residential and commercial opportunities in Gurgaon's most promising sectors.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Gem,
    title: "Luxury Sales",
    description: "Exclusive access to premium penthouses, villas, and high-end residences with personalized consultancy.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  },
  {
    icon: Calculator,
    title: "Project Costing",
    description: "In-depth financial modeling to optimize project budgets and ensure maximum ROI for developers.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop",
  },
  {
    icon: FileSearch,
    title: "Feasibility Study",
    description: "Data-driven viability assessments and site evaluations to mitigate risks before you break ground.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974&auto=format&fit=crop",
  },
  {
    icon: Map,
    title: "Master Planning",
    description: "Strategic conceptualization of large-scale developments for sustainable urban growth.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: BarChart3,
    title: "Revenue Modelling",
    description: "Sophisticated revenue forecasting and cash flow management for commercial real estate.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Store,
    title: "Franchising",
    description: "End-to-end support for FOFO, FOCO, and COCO models to scale your brand across prime locations.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Key,
    title: "Leasing Services",
    description: "Strategic tenant acquisition and lease management for retail hubs and corporate offices.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Land Acquisition",
    description: "Legal and financial support for identifying and securing prime land parcels for development.",
    image: "https://images.unsplash.com/photo-1500382014468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHeader
        title="Real Estate Consulting"
        subtitle="Comprehensive real estate solutions tailored to your unique needs"
        backgroundImage="/web/1.webp"
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                Real Estate Consultant in Gurgaon
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Expert Real Estate Consulting Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Are you looking for a reliable and professional real estate consultant in Gurgaon? We are a team of experienced and qualified real estate experts who can help you find your dream property. Whether you are looking for residential or commercial property, we have the best options for you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to providing you with honest, transparent, and hassle-free services. We understand your needs and preferences and tailor our solutions accordingly.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800"
                alt="Real Estate Consulting"
                className="w-full rounded-2xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RE-DESIGNED Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Premium Solutions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Professional Services
            </h2>
            <p className="text-muted-foreground">Tailored strategies to maximize your real estate potential in Gurgaon's dynamic market.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-[450px] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Gradient Overlay (Darker at bottom for readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Icon Box */}
                  <div className="mb-4 w-12 h-12 rounded-lg bg-gold flex items-center justify-center text-primary transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 overflow-hidden">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-white/20 flex items-center text-gold font-semibold text-sm transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Best Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                alt="Best Real Estate Consultant"
                className="w-full rounded-2xl shadow-gold/20 shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Why We are the Best Real Estate Consultant in Gurgaon
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                As the premier real estate consultant in Gurgaon, our commitment to excellence sets us apart. With a proven track record of delivering unparalleled service, we prioritize client satisfaction by leveraging our extensive market expertise.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                We distinguish ourselves through innovative strategies, cutting-edge technology, and a forward-thinking mindset, keeping pace with the dynamic real estate industry.
              </p>
              <Link to="/contact">
                <Button variant="hero-solid" size="lg">
                  Work With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
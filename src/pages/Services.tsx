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
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Real Estate Portfolio Advisory",
    description: "Comprehensive portfolio management and strategic advisory across all asset classes to optimize returns and minimize risk.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Asset Acquisition & Disposition",
    description: "Strategic guidance for acquiring and disposing of real estate assets with market intelligence and due diligence.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
  },
  {
    icon: Map,
    title: "Development Advisory",
    description: "End-to-end advisory for development projects from concept to completion, including feasibility and market positioning.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop",
  },
  {
    icon: BarChart3,
    title: "Investment Structuring",
    description: "Sophisticated investment structuring for HNIs, family offices, and institutional investors across asset classes.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974&auto=format&fit=crop",
  },
  {
    icon: FileSearch,
    title: "Land Advisory",
    description: "Specialized vertical for raw land, aggregation parcels, joint development opportunities, and policy analysis.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Calculator,
    title: "Market Research & Due Diligence",
    description: "Data-driven market intelligence, feasibility studies, and comprehensive due diligence for informed decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Store,
    title: "Joint Development & Strategic Alliances",
    description: "Structuring joint development agreements and strategic alliances between developers, landowners, and investors.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
  },
];

const Services = () => {
  return (
    <Layout>
<PageHeader
  title={
    <span style={{ fontFamily: 'Poppins, sans-serif' }}>
      Real Estate Consulting
    </span>
  }
  subtitle="Comprehensive real estate solutions tailored to your unique needs"
  backgroundImage="/web/1.webp"
  breadcrumbs={[{ name: "Services" }]}
/>

      {/* --- NEW SECTION ADDED HERE --- */}
      <section className="bg-[#031916] py-12 border-b border-white/10">
        <div className="container-custom text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">What We Offer:</h2>
          
          <div className="bg-[#D4AF37] py-4 px-8 rounded-sm inline-block w-full max-w-4xl mb-8">
            <h4 className="text-[#031916] font-bold text-sm md:text-lg uppercase tracking-widest">
              Expert Guidance | Exclusive Portfolio Management | Short & Long Term Wealth Creation
            </h4>
          </div>

          <p className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto">
            Analyze Your Real Estate Holdings With Our Experts And Expand Your Portfolio With High-Yield Properties.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                Real Estate Advisory | Gurgaon
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Advisory-First Real Estate Services   
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                T and T Realty offers comprehensive advisory services across the entire real estate lifecycle. We work with developers, HNIs, investors, family offices, and landowners to identify, structure, and manage high-value real estate opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach is strategy-driven, not asset-specific. Every opportunity is evaluated through market intelligence, policy clarity, and capital alignment to ensure optimal outcomes for our clients.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Schedule a Consultation
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

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Premium Solutions
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Advisory Services
            </h2>
            <p className="text-muted-foreground">End-to-end expertise across residential, commercial, land, mixed-use, and investment assets.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-[450px] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-gold flex items-center justify-center text-primary transform -translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-500 overflow-hidden">
                    {service.description}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="mt-6 pt-4 border-t border-white/20 flex items-center text-gold font-semibold text-sm transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 hover:text-white"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>  
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
                Advisory First. Transaction Second.
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                T and T Realty operates with an advisory-first approach. We do not push inventory—we curate outcomes. Our focus is on building long-term relationships through strategic clarity, market intelligence, and ethical practices.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                We work with developers, HNIs, investors, family offices, and landowners to identify, structure, and manage high-value real estate opportunities with long-term vision.
              </p>
              <Link to="/contact">
                <Button variant="hero-solid" size="lg">
                  Schedule a Strategic Consultation
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
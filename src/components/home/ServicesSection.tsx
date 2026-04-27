import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "/inv/1.webp", // Path from public folder
    title: "Our Buyers",
    description: "We understand your dreams and necessities and bring them to reality by offering the ideal home that you have always longed for.",
  },
  {
    image: "/inv/2.webp",
    title: "Investors",
    description: "We understand your value points regarding the market, key customers, and present you an idea that will generate cash flow.",
  },
  {
    image: "/inv/3.webp",
    title: "Developers",
    description: "We don't just commit but deliver results and our track record speaks for itself. With a Goal-Oriented approach, we are one of the topmost real estates.",
  },
  {
    image: "/inv/4.jpeg",
    title: "Channel Partners",
    description: "Building a trusted network & keeping the business transparent is what we can boast about. We offer our support & commit to financial growth.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Are Happy to Serve
          </h2>
          <p className="text-muted-foreground text-lg">
            Providing comprehensive real estate solutions tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="gold" size="lg" className="gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
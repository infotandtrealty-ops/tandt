import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-primary rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Join the T and T Realty family and let us help you navigate the real estate market with trust and transparency.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="default" size="xl" className="bg-primary hover:bg-black-light">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+918088113333">
              <Button variant="outline" size="xl" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

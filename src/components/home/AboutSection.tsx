import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const highlights = [
  "Stable assets for investors to expect good returns",
  "Due diligence to examine all transactions",
  "Inclusive management that allows participation for all",
  "Multiple investment options with premium inventory",
  "Strategic locations to increase investment value",
  "An ever-expanding group of top real estate professionals",
];

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://www.dlf.in/offices/blog/images/blogs/right-office-space-in-gurugram.jpg"
                alt="T and T Realty Office"
                className="w-full rounded-2xl shadow-medium"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-gold rounded-xl p-4 shadow-gold hidden md:flex flex-col justify-center">
                <span className="font-display text-4xl font-bold text-primary">10+</span>
                <span className="text-primary/80 font-medium">Years of Excellence</span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-gold rounded-xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
              About T and T Realty
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              T and T Realty Services Pvt. Ltd. stands as a leading name in Real Estate Consulting across the Delhi NCR region. Incepted in 2014, with our proven track record, client-focused approach, and deep market expertise, we are the trusted partner for navigating the real estate landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              T and T derives its name from the <span className="text-gold font-semibold">Trust</span> of its stakeholders and <span className="text-gold font-semibold">Transparency</span> in all transactions. The commitment to these principles ensures that we deliver reliable and effective results for our clients.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/about/overview">
                <Button variant="gold" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

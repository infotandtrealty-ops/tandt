import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Stable assets for investors to expect good returns",
  "Due diligence to examine all transactions",
  "Inclusive management that allows participation for all",
  "Multiple investment options with premium inventory",
  "Strategic locations of assets to increase investment value",
  "An ever-expanding group of Top Real Estate Professionals",
];

const Overview = () => {
  return (
    <Layout>
<PageHeader
  title={
    <span style={{ fontFamily: 'Poppins, sans-serif' }}>
      Overview
    </span>
  }
  subtitle="Tradition of trust and transparency"
  breadcrumbs={[
    { name: "About Us", href: "/about/overview" },
    { name: "Overview" },
  ]}
/>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium">
                Real Estate Advisory & Portfolio Management | Gurgaon
              </span>
<h2
  className="text-3xl md:text-4xl font-semibold text-foreground"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  About T and T Realty
</h2>
        <p className="text-muted-foreground leading-relaxed">
  <span className="font-bold">T and T Realty</span> is a Gurgaon-based real estate advisory firm offering end-to-end expertise across residential, commercial, land, mixed-use, and investment assets. We work with developers, HNIs, investors, family offices, and landowners to identify, structure, and manage high-value real estate opportunities with long-term vision.
</p>
              <p className="text-muted-foreground leading-relaxed">
                T and T, the name being derived from the <span className="text-gold font-semibold">Trust</span> of its stakeholders and <span className="text-gold font-semibold">Transparency</span> that it adheres to in all its transactions. With more than 15 years of Professional and Corporate experience, our founders in the world of Real Estate and Infrastructure have acquired in-depth knowledge of projects, markets, and strategic solutions.
              </p>
              <Link to="/about/directors">
                <Button variant="gold" size="lg">
                  Meet Our Directors
                </Button>
              </Link>
            </div>

            {/* Image */}
{/* UPDATED LOCAL IMAGE PATH 1 */}
<div className="relative">
              <img
                src="https://www.spotblue.com/app/uploads/2023/06/real-estate-agent-delivering-sample-homes-to-custo-2023-03-15-00-57-58-utc11-800x533.jpg" 
                alt="T and T Realty Office"
                className="w-full rounded-2xl shadow-medium"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-gold rounded-xl p-6 shadow-gold">
                <span className="font-display text-4xl font-bold text-primary block">10+</span>
                <span className="text-primary/80">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Revolution */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
                Business Collaborator Programme
              </span>
<h2
  className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  Join the Revolution
</h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                T and T Realty's Business Collaborator Programme is an initiative to gather all the enthusiastic, passionate & goal-oriented Real Estate Professionals under a single umbrella and become a one-stop solution for any & every real estate requirement.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-8">
                Our common goal is prosperity backed by good intentions to break away from a capitalistic society and move towards development for all. We are set on our path to create a new reality for the industry by coming up with simple solutions to complex problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="hero-solid" size="lg">
                    Join Us
                  </Button>
                </Link>
                <a href="tel:+918088113333">
                  <Button variant="hero" size="lg">
                    <Phone className="w-5 h-5" />
                    +91 8088113333
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600"
                alt="Join T and T Realty"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Top Realtors */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
<h2
  className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  Why We Are Top Realtors?
</h2>
            <p className="text-muted-foreground">
              At T and T Realty, we adhere to quality & transparency at every level of development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Overview;

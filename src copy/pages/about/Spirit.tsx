import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Eye, Target, Heart, Shield, Users, Award, Lightbulb, Star } from "lucide-react";

const values = [
  { icon: Shield, name: "Trust", color: "from-gold to-gold-light" },
  { icon: Eye, name: "Transparency", color: "from-navy to-navy-light" },
  { icon: Users, name: "Team Work", color: "from-gold to-gold-light" },
  { icon: Heart, name: "Customer Driven", color: "from-navy to-navy-light" },
  { icon: Award, name: "Professionalism", color: "from-gold to-gold-light" },
  { icon: Lightbulb, name: "Integrity", color: "from-navy to-navy-light" },
  { icon: Star, name: "Leadership", color: "from-gold to-gold-light" },
];

const Spirit = () => {
  return (
    <Layout>
      <PageHeader
        title="T and T Spirit"
        subtitle="Tradition of trust and transparency"
        breadcrumbs={[
          { name: "About Us", href: "/about/overview" },
          { name: "T and T Spirit" },
        ]}
      />

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Our Statement
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-medium border-l-4 border-gold">
              <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To excel in the real estate business, we combine deep industry expertise with innovative end-to-end strategies. Our goal is to empower clients to navigate the real estate market effectively, fostering informed decision-making at every step.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-medium border-l-4 border-navy">
              <div className="w-16 h-16 rounded-xl bg-gradient-navy flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower our clients by providing exceptional real estate services that prioritize integrity, innovation and customer satisfaction, ensuring a seamless experience throughout every step of their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Customer Driven Services
            </h2>
            <p className="text-muted-foreground">
              The core values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {value.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Connect with Us
            </h2>
            <div className="space-y-4 text-primary-foreground/80">
              <a href="mailto:info@tandtrealty.in" className="block hover:text-gold transition-colors">
                info@tandtrealty.in
              </a>
              <a href="tel:+918088113333" className="block hover:text-gold transition-colors">
                +91 8088113333
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Spirit;

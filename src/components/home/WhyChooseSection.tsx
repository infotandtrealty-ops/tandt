import { Users, MapPin, Building2, Target, Heart, Star } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Seasoned Professionals",
    description: "Our team brings wealth of expertise to every client interaction, navigating the intricate Gurgaon real estate landscape.",
  },
  {
    icon: MapPin,
    title: "Market Knowledge",
    description: "Deep-seated expertise empowers us to provide clients with strategic insights and guide them through informed decisions.",
  },
  {
    icon: Building2,
    title: "Strategic Developer Collaborations",
    description: "Our collaborations ensure clients gain access to the most coveted projects, amplifying investment potential.",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "We craft bespoke solutions for diverse real estate needs, aligning with unique aspirations of our clientele.",
  },
  {
    icon: Heart,
    title: "Client-Centric Excellence",
    description: "Our focus goes beyond transactions to provide clients with a seamless, enriching experience.",
  },
  {
    icon: Star,
    title: "High Customer Satisfaction",
    description: "Our dedication to delivering exceptional service is reflected in our consistently high satisfaction rate.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-gold rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-gold rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
<h2
  className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 tracking-tight"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
  Why Choose T and T Realty?
</h2>
          <p className="text-primary-foreground/70 text-lg">
            Experience the difference of working with a team dedicated to turning your real estate aspirations into reality
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
<h3
  className="text-xl font-semibold text-primary-foreground mb-3 tracking-wide"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
  {reason.title}
</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

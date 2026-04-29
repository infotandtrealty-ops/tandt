
import React from "react";
import { Building2, Users, Briefcase, MapPin, TrendingUp } from "lucide-react";

const clients = [
  {
    icon: Building2,
    title: "Developers & Promoters",
    description: "Strategic advisory for development projects, land acquisition, and market positioning.",
  },
  {
    icon: Users,
    title: "HNIs",
    description: "Personalized portfolio advisory and exclusive access to premium residential assets.",
  },
  {
    icon: Briefcase,
    title: "Family Offices",
    description: "Long-term wealth preservation and strategic allocation across diverse real estate classes.",
  },
  {
    icon: TrendingUp,
    title: "Institutional Investors",
    description: "Data-driven investment advisory and yield optimization across commercial and retail assets.",
  },
  {
    icon: MapPin,
    title: "Strategic Landowners",
    description: "Valuation, development structuring, and joint development opportunities.",
  },
];

const WhoWeServeSection = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="container px-6 mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-gold font-semibold tracking-widest text-xs uppercase">
            Our Ecosystem
          </span>
<h2
  className="text-3xl md:text-4xl font-semibold text-[#031916] leading-snug mt-2"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  Who We{" "}
  <span className="text-gold  font-normal">
    Serve
  </span>
</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">
            Tailored advisory for the architects of Gurgaon's skyline and the capital that drives it.
          </p>
        </div>

{/* CARDS */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {clients.map((client, index) => {
    const Icon = client.icon;
    return (
      <div
        key={index}
        className="group border border-slate-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-gold" size={24} />
        </div>

        <h3
          className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-gold transition tracking-wide"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {client.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed">
          {client.description}
        </p>
      </div>
    );
  })}
</div>

        {/* FOOTER */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
            Residential • Commercial • Land • Investments
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhoWeServeSection;

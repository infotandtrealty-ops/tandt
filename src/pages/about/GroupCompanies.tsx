import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Building2, Sparkles, Zap, Package, ArrowUpRight } from "lucide-react";

// Types for better safety
type CompanyColor = 'gold' | 'navy';

interface Company {
  icon: React.ElementType;
  sector: string;
  name: string;
  description: string;
  color: CompanyColor;
  accent: string;
}

const companies: Company[] = [
  {
    icon: Building2,
    sector: "Real Estate & Consulting",
    name: "T and T Realty Services Pvt. Ltd.",
    description: "A leading consulting firm driving social and economic growth. We safeguard the future by creating a brighter world for customers and the environment through strategic real estate solutions.",
    color: "gold",
    accent: "bg-gold/10 text-gold",
  },
  {
    icon: Sparkles,
    sector: "Health & Aesthetics",
    name: "Timeless Aesthetics Metros LLP",
    description: "Led by pioneers like Dr. Shikha Baghi Bhandari, we are a global brand in Permanent Makeup (PMU). We provide high-end treatments and educate the next generation of PMU artists.",
    color: "navy",
    accent: "bg-[#031916]/10 text-[#031916]",
  },
  {
    icon: Zap,
    sector: "Renewable Energy",
    name: "T and T Energy Pvt. Ltd.",
    description: "Authorized distributors of India's 1st ISO Certified 5G Solar Inverters (Ksolare). Adding value through non-conventional energy across Northern and Western India.",
    color: "gold",
    accent: "bg-gold/10 text-gold",
  },
  {
    icon: Package,
    sector: "Building Materials",
    name: "Om Prakash & Sons",
    description: "Established giants in building materials, specializing in Kiln Bricks and Cement. Serving as major stockists, distributors, and C&F agents for the construction industry.",
    color: "navy",
    accent: "bg-[#031916]/10 text-[#031916]",
  },
];

const GroupCompanies = () => {
  return (
    <Layout>
<PageHeader
  title={
    <span style={{ fontFamily: 'Poppins, sans-serif' }}>
      Group Companies
    </span>
  }
  subtitle="A diversified legacy of trust and innovation across multiple sectors."
  breadcrumbs={[
    { name: "About Us", href: "/about/overview" },
    { name: "Group Companies" },
  ]}
backgroundImage="/web/1.webp"

/>

      <section className="py-24 bg-[#FAFBFC] relative overflow-hidden">
        {/* Background Decorative Blurs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-[#031916]/5 rounded-full blur-[120px]" />
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-[#031916] text-gold rounded-lg text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
            >
              The T and T Universe
            </motion.span>
            
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight font-[Poppins]"
>
  Diversified Excellence.
  <br />
  <span className="text-gold font-light">One Vision.</span>
</motion.h2>

            <p className="text-slate-500 text-lg leading-relaxed">
              From building skylines to powering homes, we are committed to sustainable growth and premium service.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(184,145,70,0.1)] transition-all duration-500"
              >
                {/* Sector Tag */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-8 ${company.accent}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {company.sector}
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 ${
                    company.color === 'gold' ? 'bg-[#031916] text-gold' : 'bg-gold text-[#031916]'
                  }`}>
                    <company.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-gold transition-colors duration-300">
                      {company.name}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-500 leading-relaxed mb-8 text-base font-light">
                  {company.description}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Explore Entity</span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary Bar - UPDATED COLOR TO GREEN #031916 */}
      <section className="py-16 bg-[#031916]">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Founded", val: "2014" },
              { label: "Industries", val: "04" },
              { label: "Happy Clients", val: "10k+" },
              { label: "Presence", val: "Pan India" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-gold text-3xl font-bold mb-1">{stat.val}</p>
                <p className="text-slate-100/50 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GroupCompanies;

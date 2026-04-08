import React from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Eye, Target, Heart, Shield, Users, Award, Lightbulb, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  { icon: Shield, name: "Trust", desc: "The foundation of every transaction we undertake." },
  { icon: Eye, name: "Transparency", desc: "No hidden agendas, just clear and honest communication." },
  { icon: Users, name: "Team Work", desc: "Collaborative excellence to deliver superior results." },
  { icon: Heart, name: "Customer Driven", desc: "Your goals are the compass for our strategies." },
  { icon: Award, name: "Professionalism", desc: "Upholding the highest standards of corporate conduct." },
  { icon: Lightbulb, name: "Integrity", desc: "Doing the right thing, even when no one is watching." },
  { icon: Star, name: "Leadership", desc: "Setting benchmarks for the Gurgaon real estate market." },
  { icon: Target, name: "Innovation", desc: "Modern solutions for complex property requirements." },
];

const Spirit = () => {
  return (
    <Layout>
      <PageHeader
        title="T and T Spirit"
        subtitle="Values Over Value: Our commitment to excellence"
        breadcrumbs={[
          { name: "About Us", href: "/about/overview" },
          { name: "T and T Spirit" },
        ]}
      />

      {/* Philosophy Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                The DNA of <br />Trust & Transparency
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At T and T Realty, we believe that real estate isn't just about brick and mortar; it's about the <span className="text-slate-900 font-semibold underline decoration-gold/40">long-term legacy</span> we build with our partners and clients.
              </p>
              <div className="flex items-center gap-4 py-4 border-y border-slate-100 mt-10">
                <div className="text-4xl font-bold text-gold">15+</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Years of Corporate <br />Excellence
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {/* Vision Card */}
              <div className="group bg-slate-50 p-8 rounded-3xl transition-all duration-500 hover:bg-[#031916] hover:text-white">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold">
                  <Eye className="w-6 h-6 text-gold group-hover:text-[#031916]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="opacity-70 leading-relaxed">
                To become Gurgaon’s most trusted multi-asset real estate advisory firm.
                </p>
              </div>

              {/* Mission Card */}
              <div className="group bg-slate-50 p-8 rounded-3xl transition-all duration-500 hover:bg-[#031916] hover:text-white">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold">
                  <Target className="w-6 h-6 text-gold group-hover:text-[#031916]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="opacity-70 leading-relaxed">
                To help clients build resilient, future-ready real estate portfolios through intelligence, ethics, and strategic clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Pillars of Our Success</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-gold transition-all duration-300 shadow-sm hover:shadow-xl group"
              >
                <v.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">{v.name}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect CTA */}
      <section className="py-20 relative overflow-hidden bg-[#031916]">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -ml-20 -mb-20 blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 md:p-16 rounded-[40px] text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Experience the T and T Spirit
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Whether you are an investor, developer, or end user, let's build <br className="hidden md:block" /> a transparent future together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:info@tandtrealty.in" 
                className="flex items-center gap-3 px-8 py-4 bg-gold text-[#031916] font-bold rounded-full hover:scale-105 transition-transform"
              >
                info@tandtrealty.in
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="tel:+918088113333" 
                className="text-white font-bold hover:text-gold transition-colors"
              >
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
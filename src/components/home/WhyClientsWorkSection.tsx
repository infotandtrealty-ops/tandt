import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Eye, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  { icon: Shield, title: "Intelligence", description: "Deep local knowledge across evolving corridors.", cta: "View Insights" },
  { icon: TrendingUp, title: "Multi-asset", description: "Expertise across residential, commercial, and land.", cta: "Explore Scope" },
  { icon: Eye, title: "Off-market", description: "Exclusive access to opportunities not available publicly.", cta: "Unlock Access" },
  { icon: Users, title: "Alignment", description: "Bridging the gap between developers and investors.", cta: "See Framework" },
  { icon: Target, title: "Exit Clarity", description: "Every asset is evaluated through a clear timeline.", cta: "View Outcomes" }
];

const WhyClientsWorkSection = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-[#F8F8F9]"> {/* Padding py-24 se py-12 kar di */}
      <div className="container px-6 mx-auto relative z-10">
        
        {/* --- HEADER (Compact) --- */}
        <div className="max-w-4xl mb-10"> {/* Margin mb-20 se mb-10 kar di */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#031916] text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-4"
          >
            T and T Methodology
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#031916] leading-tight mb-4">
            Advisory First. <span className="text-gold italic font-light">Transaction Second.</span>
          </h2>
        </div>

        {/* --- SPLIT LAYOUT --- */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Content List (Tighter Spacing) */}
          <div className="lg:col-span-7 space-y-3"> {/* space-y-6 se space-y-3 kar di */}
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Step & Icon (Smaller) */}
                  <div className="flex-shrink-0 flex items-center gap-3">
                    <span className="text-lg font-black text-gold/20 group-hover:text-gold transition-colors">
                      0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#031916] text-gold flex items-center justify-center shadow-md">
                      <reason.icon size={18} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-[#031916] group-hover:text-gold transition-colors leading-none mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-tight line-clamp-1">
                      {reason.description}
                    </p>
                  </div>

                  {/* CTA Arrow */}
                  <Link to="/contact" className="text-slate-300 group-hover:text-gold">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}

            <div className="pt-4">
              <Link to="/contact">
                <button className="px-8 py-3 bg-[#031916] text-white rounded-full font-bold text-sm hover:bg-gold hover:text-[#031916] transition-all">
                  Begin Advisory Process
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Sticky Image (Height Reduced) */}
          <div className="lg:col-span-5 sticky top-24">
            <motion.div 
              className="relative rounded-[2rem] overflow-hidden shadow-xl group"
              style={{ height: '400px' }} // Height 600px se 400px kar di
            >
              <img 
                src="https://img.freepik.com/free-photo/portrait-male-real-estate-agent_23-2150164690.jpg?w=740" 
                alt="Premium Real Estate"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031916]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-[#031916]">
                    <Target size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-tight">Structured Success</h4>
                    <p className="text-white/60 text-[10px] uppercase tracking-wider">Strategic Alignment First</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full border border-gold/20 rounded-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClientsWorkSection;
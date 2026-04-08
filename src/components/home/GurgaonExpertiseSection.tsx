import React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Navigation } from "lucide-react";

const corridors = [
  "Golf Course Road & Extension",
  "Dwarka Expressway",
  "Southern Peripheral Road (SPR)",
  "New Gurgaon",
  "Strategic Zones across Delhi NCR", // Added Delhi NCR here
];

const GurgaonExpertiseSection = () => {
  return (
    <section className="relative py-20 bg-[#031916] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] -z-0" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 border border-gold/20 text-gold rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
              <MapPin size={12} />
              Delhi NCR & Gurgaon Expertise
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Deep Local Knowledge <br /> 
              <span className="text-white">Across Delhi NCR.</span> <br />
              <span className="text-gold font-light italic text-2xl md:text-4xl">Global Thinking.</span>
            </h2>
            
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg font-light">
              Our advisory is rooted in the evolving corridors of <span className="text-white font-medium">Delhi NCR and Gurgaon</span>. We track infrastructure developments and policy shifts across the capital region <span className="text-white font-medium italic underline decoration-gold/50">before they reflect publicly.</span>
            </p>

            <div className="grid gap-3">
              {corridors.map((corridor, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold transition-all">
                    <CheckCircle2 size={14} className="text-gold group-hover:text-[#031916]" />
                  </div>
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">
                    {corridor}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE AREA */}
          <div className="relative max-w-sm mx-auto lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                alt="Delhi NCR Real Estate"
                className="w-full max-h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031916]/80 via-transparent to-transparent" />
            </motion.div>

            {/* Stats Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-gold p-5 rounded-xl shadow-xl z-20"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-[#031916]">15</span>
                <span className="text-xl font-bold text-[#031916]">+</span>
              </div>
              <p className="text-[#031916] font-bold text-[10px] uppercase leading-none mt-1">
                Years of <br /> Experience
              </p>
            </motion.div>

            {/* Floating Nav Tag */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-[#031916]/60 backdrop-blur-md border border-white/10 p-3 rounded-lg hidden md:block"
            >
              <div className="flex items-center gap-2">
                <Navigation size={14} className="text-gold" />
                <span className="text-[10px] text-white font-bold tracking-widest uppercase">NCR Insights</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GurgaonExpertiseSection;
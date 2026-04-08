import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Users, Briefcase, MapPin, TrendingUp, ArrowUpRight } from "lucide-react";

const clients = [
  {
    icon: Building2,
    title: "Developers & Promoters",
    description: "Strategic advisory for development projects, land acquisition, and market positioning.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"
  },
  {
    icon: Users,
    title: "HNIs",
    description: "Personalized portfolio advisory and exclusive access to premium residential assets.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1000"
  },
  {
    icon: Briefcase,
    title: "Family Offices",
    description: "Long-term wealth preservation and strategic allocation across diverse real estate classes.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000"
  },
  {
    icon: TrendingUp,
    title: "Institutional Investors",
    description: "Data-driven investment advisory and yield optimization across commercial and retail assets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
  },
  {
    icon: MapPin,
    title: "Strategic Landowners",
    description: "Valuation, development structuring, and joint development (JD) opportunities.",
    image: "https://images.unsplash.com/photo-1500382014468-9049fed747ef?q=80&w=1000"
  },
];

const WhoWeServeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 bg-white overflow-hidden font-sans">
      <div className="container px-6 mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold font-bold tracking-widest text-xs uppercase mb-2 block"
            >
              Our Ecosystem
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Who We Serve
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-sm md:text-base max-w-sm lg:text-right font-normal"
          >
            Tailored advisory for the architects of Gurgaon's skyline and the capital that drives it.
          </motion.p>
        </div>

        {/* --- CONTENT --- */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT SIDE: Text List */}
          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {clients.map((client, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className="group cursor-pointer py-6 transition-all duration-300"
              >
                <div className="flex gap-5">
                  <span className={`text-xs font-bold mt-1 transition-colors duration-300 ${activeIndex === index ? 'text-gold' : 'text-slate-300'}`}>
                    0{index + 1}
                  </span>

                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                        {client.title}
                      </h3>
                      <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${activeIndex === index ? 'text-gold opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    </div>
                    
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-500 text-sm leading-relaxed max-w-md mt-3 font-normal">
                            {client.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="hidden lg:block sticky top-24">
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={clients[activeIndex].image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              
              <motion.div 
                key={`icon-${activeIndex}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute bottom-6 left-6 w-14 h-14 bg-gold rounded-lg flex items-center justify-center text-slate-900 shadow-lg"
              >
                {React.createElement(clients[activeIndex].icon, { size: 28 })}
              </motion.div>
            </div>
            
            {/* Decorative background frame */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-gold/10 rounded-2xl" />
          </div>

        </div>

        {/* --- FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-8 border-t border-slate-50 text-center"
        >
          <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-[0.4em]">
            Residential • Commercial • Land • Investments
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Shield, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const principles = [
  {
    icon: Target,
    title: "Risk Appetite",
    description: "Every asset must align with your risk tolerance and goals.",
    delay: 0.1
  },
  {
    icon: Clock,
    title: "Time Horizon",
    description: "Strategic planning for short-term gains or long-term wealth.",
    delay: 0.2
  },
  {
    icon: TrendingUp,
    title: "Capital Strategy",
    description: "Optimal allocation across different asset classes.",
    delay: 0.3
  },
  {
    icon: Shield,
    title: "Exit Clarity",
    description: "Clear exit strategies and liquidity planning for investments.",
    delay: 0.4
  },
];

const PhilosophySection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 text-[10vw] font-black text-slate-50 select-none leading-none -z-0">
        PHILOSOPHY
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold font-bold tracking-[0.2em] text-xs uppercase">
                    Our Core Philosophy
                </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Real Estate Is <span className="text-gold italic">Not a Deal.</span> <br />
              It's a Portfolio.
            </h2>
            
            <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              T and T Realty operates with a data-driven lens across all segments, ensuring every asset delivers long-term strategic value.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
                <Link to="/about/overview">
                    <Button className="bg-slate-900 text-white hover:bg-gold hover:text-slate-900 h-14 px-8 rounded-full transition-all duration-300 gap-3 group">
                        Learn More About Us
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
                
                <div className="flex -space-x-3 italic text-slate-400 text-sm ml-4">
                    Trusted by Gurgaon's top investors
                </div>
            </div>
          </motion.div>

          {/* IMAGE WITH FLOATING ELEMENT */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img
                src="/projects/real.jpeg"
                alt="T and T Realty Philosophy"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
            </motion.div>

            {/* Floating Glass Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute -bottom-10 -right-6 md:right-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 z-20 max-w-xs hidden sm:block"
            >
                <CheckCircle className="text-gold mb-4" size={32} />
                <p className="text-slate-900 font-bold text-lg mb-1 tracking-tight">Institutional Quality</p>
                <p className="text-slate-500 text-sm leading-relaxed">We apply private equity-grade rigor to every single real estate transaction.</p>
            </motion.div>
          </div>
        </div>

        {/* FOUR PRINCIPLES CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: principle.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-gold/20 hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-inner flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                <principle.icon className="w-7 h-7 text-slate-900 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {principle.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Briefcase,
  TrendingUp,
  Landmark,
} from "lucide-react";

const assetClasses = [
  {
    icon: Building2,
    title: "Our Buyers",
    description:
      "We understand your dreams and necessities and bring them to reality by offering the ideal home that you have always longed for.",
    image: "/projects/1.webp",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    description:
      "We understand your value points regarding the market and key customers, and present ideas that generate strong cash flow.",
    image: "/projects/Investors.jpeg",
  },
  {
    icon: Landmark,
    title: "Developers",
    description:
      "We don’t just commit but deliver results. With a goal-oriented approach, we are among the top real estate advisory teams.",
    image: "/projects/Developers.jpeg",
  },
  {
    icon: Briefcase,
    title: "Our Channel Partners",
    description:
      "Building a trusted network and keeping business transparent is our strength. We offer support and commit to financial growth.",
    image: "/projects/4.jpeg",
  },
];

const AssetCard = ({ asset, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-[320px] md:h-[360px] overflow-hidden rounded-2xl cursor-pointer"    >
      <Link to="/contact" className="block h-full w-full">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${asset.image})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
          <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-md flex items-center justify-center mb-4 border border-gold/30 group-hover:bg-gold group-hover:text-black transition-all duration-300">
            <asset.icon className="w-6 h-6 text-gold group-hover:text-inherit" />
          </div>

          <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-gold transition-colors">
            {asset.title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            {asset.description}
          </p>

          <div className="flex items-center text-gold font-bold text-xs uppercase tracking-widest">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const WhatWeDoSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[10rem] font-bold leading-none">CLIENTS</h1>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
We Are Happy
            </motion.span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            To <span className="text-gold">Serve</span>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-sm pb-2">
            We work closely with buyers, investors, developers, and channel
            partners to create long-term value in the real estate ecosystem.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {assetClasses.map((asset, index) => (
            <AssetCard key={index} asset={asset} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-gold/20"
          style={{ backgroundColor: "#031916" }}
        >
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          {/* Glow Effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to collaborate with us?
            </h3>
            <p className="text-gray-400">
              Whether you're a buyer, investor, or development partner — we
              are here to structure strategic opportunities tailored to your
              goals.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/contact">
              <Button
                variant="gold"
                size="xl"
                className="h-14 px-8 rounded-full font-bold shadow-lg shadow-gold/20"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
"use client";
import React, { useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, X, BellRing } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



type Blog = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
};

const blogs: Blog[] = [
  // --- LATEST 2026 INSIGHTS ---
  {
    title: "What Makes a Location Prime in Real Estate?",
    excerpt: "In real estate, the saying “location, location, location” is not just a cliché — it's a core principle that influences long-term value and livability.",
    date: "Feb 4, 2026",
    image: "https://housing-images.n7net.in/012c1500/89fc0ea5d4e31dd7c68b735466245cc6/v0/medium.jpeg",
  },
  {
    title: "Real Estate vs Mutual Funds: Where Should You Invest in 2025?",
    excerpt: "As we step into 2025, the investment landscape continues to evolve. We compare asset classes against inflation and economic shifts.",
    date: "Jan 28, 2026",
    image: "data:image/jpeg;base64,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",
  },
  {
    title: "Mistakes to Avoid While Buying Commercial Property in Gurgaon",
    excerpt: "Gurgaon, the 'Millennium City,' has transformed into a commercial powerhouse. Avoid these common pitfalls when securing your next office space.",
    date: "Jan 22, 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    title: "How Expressways and Metro Expansion are Transforming Gurgaon Real Estate",
    excerpt: "The expansion of metro lines and new expressways is reshaping the real price map of Gurgaon, creating new hubs for high-yield returns.",
    date: "Jan 15, 2026",
    image: "data:image/jpeg;base64,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",
  },
  {
    title: "The Psychology of Luxury Home Buyers: What Drives Their Decisions",
    excerpt: "The world of luxury real estate is intriguing, driven by a mix of emotional, social, and practical factors that define prestige.",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  // --- 2024 / 2025 ARCHIVE DATA ---
  {
    title: "Understanding Carpet Area, Built-up Area and Super Built-up Area",
    excerpt: "There is an area in an apartment that can be filled by a carpet. Understanding the technical jargon of floor areas is crucial for every homebuyer.",
    date: "Mar 31, 2024",
    image: "https://www.a2zproperty.in/Gujarat/Rajkot/sapphire-heights/image-40085-2.jpg",
  },
  {
    title: "What is OC full form and its relevance in real estate",
    excerpt: "The term 'OC' (Occupancy Certificate) is of paramount importance, but it usually remains unclear to a significant number of property buyers.",
    date: "Mar 30, 2024",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  },
  {
    title: "Your Ultimate Guide for Vastu for Home",
    excerpt: "Congrats! You have found the best residential property in Gurgaon. Now, it is time to consider Vastu for harmony and prosperity.",
    date: "Mar 18, 2024",
    image: "https://vastublessings.in/wp-content/uploads/2025/12/Vastu-Consultant-in-Gurgaon-1024x572.webp",
  },
  {
    title: "Difference between SCO plots and commercial plots",
    excerpt: "Embarking on a real estate investment journey necessitates a comprehensive understanding of SCO (Shop-cum-Office) versus traditional plots.",
    date: "Feb 27, 2024",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
  },
  {
    title: "6 Types of Commercial Real Estate Property",
    excerpt: "From retail shops to large Grade-A offices, commercial real estate offers diverse opportunities for business growth and rental yield.",
    date: "Jan 23, 2024",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
  },
  {
    title: "10 Best Residential Areas to live in Gurgaon in 2024",
    excerpt: "As 2024 unfolds, the city beckons with promise and potential, offering an array of neighborhoods catering to diverse lifestyle needs.",
    date: "Dec 27, 2023",
    image: "https://www.propertyxpo.com/assets/img/residential.jpg",
  },
  {
    title: "Plot vs Flat: Which is the best option to buy?",
    excerpt: "It's like standing at a crossroads. We compare the flexibility of plots versus the convenience of luxury flats in the NCR market.",
    date: "Nov 29, 2023",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
  }
];


const categoryFilters: Array<"All" | BlogCategory> = [
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | BlogCategory>("All");
  const [showPopup, setShowPopup] = useState(false); // Popup State

  const filteredBlogs = useMemo(
    () =>
      activeCategory === "All"
        ? blogs
        : blogs.filter((blog) => blog.category === activeCategory),
    [activeCategory],
  );

  return (
    <Layout>



<PageHeader
  title={
    <span style={{ fontFamily: 'Poppins, sans-serif' }}>
      Blog / Insights
    </span>
  }
  subtitle="Market Intelligence. Strategic Perspectives. Gurgaon Focus."
  breadcrumbs={[
    { name: "Media", href: "/media/videos" },
    { name: "Blogs" },
  ]}
/>





      <section className="section-padding">
        <div className="container-custom">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center md:text-left space-y-4">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
              T and T Realty Insights
            </span>
<h2 className="text-3xl md:text-4xl font-bold text-foreground font-[Poppins]">
  Market Intelligence. Strategic Perspectives. Gurgaon Focus.
</h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              The T and T Realty Insights section brings together market intelligence, regulatory perspectives, and
              investment-led analysis across Gurgaon’s real estate landscape.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
            {categoryFilters.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? "gold" : "outline"}
                className="rounded-full text-xs md:text-sm"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <article
                key={index}
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
         
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
<h3
  className="font-semibold text-lg text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  {blog.title}
</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  {/* Read More Button triggers popup */}
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-gold hover:no-underline font-semibold"
                    onClick={() => setShowPopup(true)}
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- STAY TUNED POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Popup Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-card border border-gold/30 rounded-3xl p-8 shadow-2xl text-center overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
              
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 inline-flex w-16 h-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                <BellRing className="w-8 h-8 animate-bounce" />
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Coming Soon!
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Stay tuned! We are finalizing the details and will release the full deep-dive blog very soon. 
                <br /> <span className="text-gold font-medium">Value over Value.</span>
              </p>

              <Button 
                variant="gold" 
                className="w-full rounded-full"
                onClick={() => setShowPopup(false)}
              >
                Got it, thanks!
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Blogs;
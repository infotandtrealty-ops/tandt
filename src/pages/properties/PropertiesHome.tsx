import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PROPERTY_TYPE_LABELS, type PropertyCategory, type PropertyType } from "@/data/properties";
import { ArrowRight, Building, Home, LayoutGrid, Search } from "lucide-react";

const sections: Array<{
  title: string;
  category: PropertyCategory;
  types: PropertyType[];
  description: string;
  icon: any;
  img: string;
}> = [
  {
    title: "Residential Properties",
    category: "residential",
    description: "Curated collection of high-end homes, from sky-high penthouses to expansive residential plots in Gurgaon's prime sectors.",
    icon: Home,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    types: ["penthouse", "independent-floor", "residential-apartment", "service-apartment", "residential-plots"],
  },
  {
    title: "Commercial Properties",
    category: "commercial",
    description: "Strategic commercial spaces including retail, premium office suites, and SCO plots designed for high-yield returns.",
    icon: Building,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    types: ["office-space", "food-court", "retail-and-office-space", "commercial-sco-plots"],
  },
];

export default function PropertiesHome() {
  return (
    <Layout>
      <PageHeader
        title="Portfolio"
        subtitle="Strategic real estate assets across Gurgaon's most promising corridors."
        breadcrumbs={[{ name: "Properties" }]}
        backgroundImage="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="py-24 bg-[#FAFBFC]">
        <div className="container px-6 mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-gold font-bold tracking-widest text-xs uppercase mb-4"
              >
                <LayoutGrid size={14} />
                Asset Categories
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Explore Our <span className="text-gold italic font-light">Asset Classes</span>
              </h2>
            </div>
            
            <Link to="/search">
              <Button className="bg-slate-900 text-white hover:bg-gold hover:text-slate-900 rounded-full h-14 px-8 group transition-all">
                <Search className="w-4 h-4 mr-2" />
                Search All Listings
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Main Categories Grid */}
          <div className="space-y-20">
            {sections.map((section, idx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img 
                      src={section.img} 
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-8 left-8 text-white">
                       <section.icon size={40} className="text-gold mb-4" />
                       <h3 className="text-3xl font-bold">{section.title}</h3>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -z-10 top-10 w-full h-full bg-gold/5 rounded-[2.5rem] ${idx % 2 !== 0 ? '-right-10' : '-left-10'}`} />
                </div>

                {/* Types Grid Side */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-8">
                    <p className="text-slate-500 text-lg leading-relaxed mb-6">
                      {section.description}
                    </p>
                    <Link
                      to={`/search?category=${section.category}`}
                      className="inline-flex items-center text-slate-900 font-bold hover:text-gold transition-colors group"
                    >
                      Browse All {section.title}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.types.map((type) => (
                      <Link
                        key={type}
                        to={`/search?category=${section.category}&type=${type}`}
                        className="group p-5 bg-white border border-slate-100 rounded-2xl hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-slate-800 group-hover:text-gold transition-colors">
                              {PROPERTY_TYPE_LABELS[type]}
                            </p>
                            <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-semibold">
                              View Listings
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold transition-all" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
    setMobileDropdown(null);
  }, [location]);

  // Centralized Navigation Data for the "Quick Selection" column
  const megaMenuContent: Record<string, { label: string, link: string }[]> = {
    about: [
      { label: "Overview", link: "/about/overview" },
      { label: "T and T Spirit", link: "/about/spirit" },
      { label: "Group Companies", link: "/about/group-companies" },
      { label: "Director's Message", link: "/about/directors" }
    ],
    services: [
      { label: "All Services", link: "/services" },
      { label: "Commercial", link: "/services/commercial" },
      { label: "Residential", link: "/services/residential" },
      { label: "Land", link: "/services/land" }
    ],
    projects: [
      { label: "All Projects", link: "/search" },
      { label: "Residential Properties", link: "/properties/residential" },
      { label: "Commercial Properties", link: "/properties/commercial" },
    ],
    media: [
      // { label: "Insights", link: "/media/insights" },
      { label: "Blogs", link: "/media/blogs" },
      { label: "Videos", link: "/media/videos" },
      // { label: "Press", link: "/media/press" }
    ]
  };

  // Service categories for "What We Do" mega menu
  const serviceCategories = {
    commercial: [
      { label: "SCO Plots", link: "/services/commercial/sco-plots" },
      { label: "Retail Shops", link: "/services/commercial/retail-shops" },
      { label: "Office Spaces", link: "/services/commercial/office-spaces" }
    ],
    residential: [
      { label: "Residential Plots", link: "/services/residential/residential-plots" },
      { label: "Floors", link: "/services/residential/floors" },
      { label: "Highrise Apartments", link: "/services/residential/highrise-apartments" }
    ],
    land: [
      { label: "Farm Houses", link: "/services/land/farm-houses" },
      { label: "Farmlands", link: "/services/land/farmlands" }
    ]
  };

  return (
    <>
      {/* --- Desktop Top Utility Bar --- */}
      {/* <div className="bg-[#031916] border-b border-white/10 py-2 hidden lg:block">
        <div className="container-custom flex justify-between items-center text-[13px] text-white/80">
          <div className="flex items-center gap-6">
            <Link to="/media/blogs" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <div className="w-4 h-4 rounded bg-gold/20 flex items-center justify-center text-[10px] text-gold font-bold">M</div>
              Media
            </Link>
            <Link to="/contact" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Looking for Residential, Land, Commercial" 
                className="w-64 border-b border-white/30 focus:border-white outline-none pb-0.5 text-xs text-white placeholder:text-white/60 transition-all bg-transparent"
              />
              <Search className="w-4 h-4 absolute right-0 top-0 text-white/60 group-focus-within:text-white" />
            </div>
          </div>
        </div>
      </div> */}

      {/* --- Main Navigation Header --- */}
      <header
        className={cn(
          "sticky top-0 z-[100] transition-all duration-500 w-full bg-[#031916]",
          isScrolled ? "shadow-xl py-2" : "py-6"
        )}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between relative">
            
            {/* Desktop Left Links */}
            <div className="hidden lg:flex items-center gap-8 flex-1">
              <Link to="/" className={cn("text-base font-bold transition-colors uppercase tracking-tight", location.pathname === "/" ? "text-gold" : "text-white hover:text-gold")}>
                Home
              </Link>
              
              <button 
                onMouseEnter={() => setActiveMegaMenu("about")}
                className={cn("text-base font-bold transition-colors uppercase tracking-tight", activeMegaMenu === "about" || location.pathname.startsWith("/about") ? "text-gold" : "text-white hover:text-gold")}
              >
                Who We Are
              </button>

              <button 
                onMouseEnter={() => setActiveMegaMenu("services")}
                className={cn("text-base font-bold transition-colors uppercase tracking-tight", activeMegaMenu === "services" || location.pathname === "/services" ? "text-gold" : "text-white hover:text-gold")}
              >
                What We Do
              </button>

              <button 
                onMouseEnter={() => setActiveMegaMenu("projects")}
                className={cn("text-base font-bold transition-colors uppercase tracking-tight", activeMegaMenu === "projects" || location.pathname.startsWith("/properties") ? "text-gold" : "text-white hover:text-gold")}
              >
                Projects
              </button>

              <button 
                onMouseEnter={() => setActiveMegaMenu("media")}
                className={cn("text-base font-bold transition-colors uppercase tracking-tight", activeMegaMenu === "media" || location.pathname.startsWith("/media") ? "text-gold" : "text-white hover:text-gold")}
              >
                Media
              </button>
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
              <Link to="/" className="inline-block group">
                <img 
                  src="/logo.png" 
                  alt="T and T Realty" 
                  className={cn(
                    "transition-all duration-500 object-contain mx-auto",
                    isScrolled ? "h-10 md:h-12" : "h-14 md:h-20"
                  )}
                />
              </Link>
            </div>

            {/* Desktop Right Links */}
            <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
   
              <Link 
                to="/careers" 
                className={cn(
                  "group relative text-sm font-bold uppercase tracking-widest transition-colors duration-300",
                  location.pathname === "/careers" ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
                )}
              >
                Careers
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37] transition-all duration-300",
                  location.pathname === "/careers" ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>

              <Link to="/contact">
                <Button 
                  variant="outline"
                  className="relative overflow-hidden border-[#D4AF37] text-white hover:text-[#031916] font-bold uppercase tracking-widest px-8 py-2 rounded-full transition-all duration-500 group bg-transparent before:absolute before:inset-0 before:bg-[#D4AF37] before:translate-y-full before:transition-transform before:duration-500 hover:before:translate-y-0"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden ml-auto p-2 relative z-[110]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </nav>
        </div>

        {/* --- MEGA MENU OVERLAY --- */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="absolute top-full left-0 w-full bg-[#031916] border-t border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] z-[90] hidden lg:block overflow-hidden"
            >
              <div className="container-custom py-14 relative z-10">
                {activeMegaMenu === "services" ? (
                  // Special layout for "What We Do" - Three Categories
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-3 border-r border-white/10 pr-8">
                      <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        What We Do
                      </span>
                      <h3 className="text-4xl font-display font-bold text-white leading-[1.1] mb-6">
                        Our <br />Services
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                        Comprehensive real estate solutions across commercial, residential, and land sectors.
                      </p>
                    </div>
                    
                    {/* Three Categories */}
                    <div className="col-span-9 grid grid-cols-3 gap-8">
                      {/* Commercial */}
                      <div>
                        <h4 className="text-[#D4AF37] font-bold text-lg mb-4 uppercase tracking-wide">Commercial</h4>
                        <div className="space-y-3">
                          {serviceCategories.commercial.map((item, i) => (
                            <Link 
                              key={i} 
                           to="/services"
                              className="group flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white/[0.03] transition-all duration-300"
                            >
                              <span className="text-base font-medium text-white/80 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all">
                                {item.label}
                              </span>
                              <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Residential */}
                      <div>
                        <h4 className="text-[#D4AF37] font-bold text-lg mb-4 uppercase tracking-wide">Residential</h4>
                        <div className="space-y-3">
                          {serviceCategories.residential.map((item, i) => (
                            <Link 
                              key={i} 
                            to="/services"
                              className="group flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white/[0.03] transition-all duration-300"
                            >
                              <span className="text-base font-medium text-white/80 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all">
                                {item.label}
                              </span>
                              <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Land */}
                      <div>
                        <h4 className="text-[#D4AF37] font-bold text-lg mb-4 uppercase tracking-wide">Land</h4>
                        <div className="space-y-3">
                          {serviceCategories.land.map((item, i) => (
                            <Link 
                              key={i} 
                           to="/services" 
                              className="group flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white/[0.03] transition-all duration-300"
                            >
                              <span className="text-base font-medium text-white/80 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all">
                                {item.label}
                              </span>
                              <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>














                ) : (
                  // Original layout for other menus
                  <div className="grid grid-cols-12 gap-16">
                    
                    {/* Dynamic Title Section */}
                    <div className="col-span-4 border-r border-white/10 pr-12">
                      <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                        Explore Portfolio
                      </span>
                      <h3 className="text-5xl font-display font-bold text-white leading-[1.1] mb-6">
                        {activeMegaMenu === "about" && <>The <br />T and T Spirit</>}
                        {activeMegaMenu === "projects" && <>Premium <br />Assets</>}
                        {activeMegaMenu === "media" && <>Market <br />Intelligence</>}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                         {activeMegaMenu === "media" ? "Stay updated with the latest trends and data-driven insights in Gurgaon real estate." : "Discover our legacy of trust and excellence."}
                      </p>
                    </div>

                    {/* Quick Selection Section */}
                    <div className="col-span-4 space-y-2">
                      <h4 className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                        Quick Selection
                      </h4>
                      <div className="grid gap-1">
                        {megaMenuContent[activeMegaMenu]?.map((item, i) => (
                          <Link 
                            key={i} 
                            to={item.link} 
                            className="group flex items-center justify-between p-3 -ml-3 rounded-lg hover:bg-white/[0.03] transition-all duration-300"
                          >
                            <span className="text-lg font-medium text-white/80 group-hover:text-[#D4AF37] group-hover:translate-x-2 transition-all">
                              {item.label}
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                   

                    {/* Visual Card Section */}
                    <div className="col-span-4">
                      <h4 className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                        Featured
                      </h4>
                      <div className="relative group rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl">
                        <img
                          src={activeMegaMenu === "media" ? "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=600" : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          alt="Navigation Visual"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#031916] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <p className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-1">
                            {activeMegaMenu === "media" ? "Knowledge Hub" : "Trending"}
                          </p>
                          <p className="text-white font-bold text-lg">
                            {activeMegaMenu === "media" ? "Real Estate Market Trends" : "Luxury Residential Corridor"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MOBILE MENU OVERLAY --- */}
{/* --- MOBILE MENU OVERLAY --- */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      className="fixed inset-0 bg-[#031916] z-[105] flex flex-col lg:hidden"
    >
      <div className="p-6 border-b border-white/20 flex justify-between items-center mt-16">
        <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Navigation</span>
        <button onClick={() => setIsMobileMenuOpen(false)}><X className="text-white w-6 h-6"/></button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <Link to="/" className="block text-xl font-bold text-white py-2 border-b border-white/20 uppercase">Home</Link>
        
        {/* Mobile Toggles for About, Services, Projects, Media */}
        {Object.keys(megaMenuContent).map((key) => (
          <div key={key} className="border-b border-white/20 pb-2">
            <button 
              onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
              className="w-full flex justify-between items-center text-xl font-bold text-white py-2 uppercase"
            >
              {key === "services" ? "What We Do" : key.replace("-", " ")} <ChevronDown className={cn("w-5 h-5 transition-transform text-white", mobileDropdown === key && "rotate-180")} />
            </button>
            <AnimatePresence>
              {mobileDropdown === key && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden pl-4 space-y-3 mt-2">
                  {key === "services" ? (
                    // Special layout for services with categories
                    <div className="space-y-4">
                      {Object.entries(serviceCategories).map(([categoryKey, items]) => (
                        <div key={categoryKey} className="space-y-2">
                          <h5 className="text-[#D4AF37] font-bold text-sm uppercase tracking-wide">
                            {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                          </h5>
                          {items.map((item, i) => (
                            <Link key={i} to={item.link} className="block text-white/60 font-medium hover:text-gold pl-3 py-1">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Regular layout for other menus
                    megaMenuContent[key].map((item, i) => (
                      <Link key={i} to={item.link} className="block text-white/60 font-medium hover:text-gold">{item.label}</Link>
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* --- NEW INDEPENDENT LINKS FOR MOBILE --- */}
        <Link to="/media/insights" className="block text-xl font-bold text-white py-2 border-b border-white/20 uppercase">
          Insights
        </Link>
        <Link to="/careers" className="block text-xl font-bold text-white py-2 border-b border-white/20 uppercase">
          Careers
        </Link>
        <Link to="/contact" className="block text-xl font-bold text-white py-2 border-b border-white/20 uppercase">
          Contact
        </Link>
      </div>

      <div className="p-6">
        <Button className="w-full bg-gold hover:bg-gold/90 text-[#031916] h-14 rounded-xl text-lg font-bold">
          ENQUIRE NOW
        </Button>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </header>
    </>
  );
};

export default Header;
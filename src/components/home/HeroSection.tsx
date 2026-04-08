import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getUniqueDevelopers, getUniqueLocations } from "@/data/properties";


const desktopImages = [
  "/banner/222.jpeg", 
  "/banner/bb.webp", 
];

const mobileImages = [
  "/banner/888.jpeg", // Mobile image path yahan dalien
  "/banner/1111.jpeg"  // Mobile image path yahan dalien
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [developer, setDeveloper] = useState("");

  const locationOptions = useMemo(() => getUniqueLocations(), []);
  const developerOptions = useMemo(() => getUniqueDevelopers(), []);

  // Screen size check karne ke liye
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      const len = (isMobile ? mobileImages : desktopImages).length;
      setCurrentIndex((prev) => (prev === len - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isMobile]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  // Current images list select karna
  const currentImages = isMobile ? mobileImages : desktopImages;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Container Height:
        - Mobile par: aspect-[9/16] (Portrait) ya h-[60vh]
        - Desktop par: aspect-[21/9] (Landscape)
      */}
      <div className="relative w-full aspect-[9/16] md:aspect-[21/9] lg:aspect-[25/9]">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {currentImages.map((src, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={src}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/70 z-10" />
        <div className="absolute inset-0 z-10 flex items-end md:items-center">
          <div className="container-custom w-full pb-10 md:pb-0">
            <div className="max-w-3xl">
              <p className="text-white/80 font-semibold tracking-widest uppercase text-xs md:text-sm">
                Real Estate Advisory & Portfolio Management | Gurgaon
              </p>
              <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight">
                Strategic Real Estate Advisory Across Asset Classes
              </h1>
              <p className="text-white/80 mt-3 md:mt-4 max-w-2xl text-base md:text-lg">
                T and T Realty is a Gurgaon-based real estate advisory firm offering end-to-end expertise across residential, commercial, land, mixed-use, and investment assets.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="gold" 
                  size="lg" 
                  className="h-12 px-8 rounded-xl text-base font-semibold"
                  onClick={() => navigate("/projects")}
                >
                  Explore Our Portfolio
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-12 px-8 rounded-xl text-base font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => navigate("/contact")}
                >
                  Schedule a Strategic Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {currentImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index 
                  ? "bg-white w-8 h-2" 
                  : "bg-white/40 w-2 h-2 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
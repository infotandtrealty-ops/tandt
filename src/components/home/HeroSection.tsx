import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getUniqueDevelopers, getUniqueLocations } from "@/data/properties";

// ✅ Single media source (video for all devices)
const bannerMedia = [
  "/banner/banner-1.mp4"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [developer, setDeveloper] = useState("");

  const locationOptions = useMemo(() => getUniqueLocations(), []);
  const developerOptions = useMemo(() => getUniqueDevelopers(), []);

  // Auto slide (future-proof if you add more videos/images)
  useEffect(() => {
    const timer = setInterval(() => {
      const len = bannerMedia.length;
      setCurrentIndex((prev) => (prev === len - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      <div className="relative w-full aspect-[9/16] md:aspect-[21/9] lg:aspect-[25/9]">
        
        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bannerMedia.map((src, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              
              {src.endsWith(".mp4") ? (
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={src}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover block"
                />
              )}

            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/70 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-end md:items-center">
          <div className="container-custom w-full pb-10 md:pb-0">
            <div className="max-w-3xl">

              <p className="text-white/80 font-semibold tracking-widest uppercase text-xs md:text-sm">
                Real Estate Advisory & Portfolio Management | Gurgaon
              </p>

              <h1
                className="text-white text-2xl md:text-4xl lg:text-5xl font-medium mt-3 leading-snug"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Strategic Real Estate Advisory Across Asset Classes
              </h1>

              <p className="text-white/80 mt-3 md:mt-4 max-w-2xl text-base md:text-lg">
                PT and T Realty is a Gurgaon-based real estate advisory firm offering end-to-end expertise across residential, commercial, land, mixed-use, and investment assets.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  className="h-12 px-8 rounded-xl text-base font-semibold"
                  onClick={() => navigate("/search")}
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

        {/* Dots (works if you add more slides later) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {bannerMedia.map((_, index) => (
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
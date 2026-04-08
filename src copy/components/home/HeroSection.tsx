import React, { useState, useEffect } from "react";

const desktopImages = [
  "/banner/1.jpg", 
  "/banner/2.jpg"
];

const mobileImages = [
  "/banner/8.jpeg", // Mobile image path yahan dalien
  "/banner/11.jpeg"  // Mobile image path yahan dalien
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
      setCurrentIndex((prev) => (prev === desktopImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
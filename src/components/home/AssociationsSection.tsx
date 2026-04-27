import React from 'react';

// 1.webp se 22.webp tak array generate ho raha hai
const associations = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  path: `/images/${i + 1}.webp`,
  name: `Client ${i + 1}`
}));

const AssociationsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            Our Partners
          </span>
<h2
  className="text-2xl md:text-4xl font-semibold text-foreground"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  Our Associations
</h2>
        </div>
        
        {/* Logos Marquee Container */}
        <div className="relative overflow-hidden group">
          {/* Side shadows for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card to-transparent z-10"></div>

          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            {[...associations, ...associations].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-52 h-32 flex items-center justify-center p-2 transition-transform hover:scale-110"
              >
                <img 
                  src={item.path} 
                  alt={item.name}
                  className="max-w-full max-h-full object-contain" // Grayscale yahan se remove kar diya hai
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite; /* Speed thodi fast rakhi hai kyunki logo bade hain */
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
          @media (max-width: 768px) {
            .animate-marquee {
              animation-duration: 25s; /* Mobile par speed adjust ki hai */
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AssociationsSection;
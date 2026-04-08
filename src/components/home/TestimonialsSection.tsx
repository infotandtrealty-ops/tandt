import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Mr. Ramandeep Singh",
    image: "/reviews/1.webp",
    text: "Thank you so much T and T Realty for providing the service throughout the process. You guys made it so amazing and easy for me. I would definitely recommend you.",

  },
  {
    id: 2,
    name: "Mr. G.S. Dhillon (INVESTOR)",
    image: "/reviews/2.webp",
    text: "I am so grateful of the services by T and T Realty. Everyone was always approachable, putting real estate jargon with so much ease into a manner that I could understand and digest. Which was very important to us. These guys were a great source for an amazing investment. Thank you"
  },
  {
    id: 3,
    name: "Mr Dushyant (INVESTOR)",
    image: "/reviews/3.webp",
    text: "We work on Trust and Excellence since it's not just about a house for us, it's about a Place where your dreams come home."
  },
  {
    id: 4,
    name: "Dr. Rahul Kakkar",
    image: "/reviews/4.webp",
    text:"Buying A Property, isn't seamless, isn't cheap, isn't easy, but when it's through T&T advisors, it's with full of Temptation & Trust, as they take you to a whole new experience of buying properties with a hassle free, experience!",

  },
  {
    id: 5,
    name: "Mr. Praveen Jakhar",
    image: "/reviews/5.webp",
    text:"I was looking for an apartment and I looked for quite a number of properties and many builders but were not satisfied either with the quality of the apartments, location or the price I was offered. Then I came in touch with T and T Realty, they understood my requirement and delivered me my dream home at the best location at the most appropriate price possible. I really appreciate their expertise and efforts",

  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // useCallback is used to keep the function reference stable
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-play Logic
  useEffect(() => {
    if (isPaused) return; // Pause timer if mouse is over the carousel

    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Har 5 seconds mein slide change hogi

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [nextSlide, isPaused]);

  return (
    <section className="min-h-[500px] flex flex-col md:flex-row w-full overflow-hidden">
      {/* Left Side - Dark Section */}
      <div className="w-full md:w-[45%] bg-[#031510] p-8 md:p-20 flex flex-col justify-center text-white relative">
        <span className="text-gray-400 text-sm mb-4 block font-medium">Testimonial</span>
        
        <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-8">
          What Customers <br /> Say About Us
        </h2>

        <div className="flex gap-2 mb-8">
          <div className="w-12 h-[2px] bg-[#c69a39]"></div>
          <div className="w-4 h-[2px] bg-white/30"></div>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-md">
          Through our services, we surely have made a mark on numerous clients. 
          As we do not believe in one time client-service relationship but a long-term 
          bond that we can cherish forever.
          <br />
          <span className="mt-4 block italic text-[#c69a39]">Have a look at some..</span>
        </p>

        <button className="text-white font-bold border-b-2 border-[#c69a39] hover:bg-[#c69a39]/10 transition-all px-4 py-2 w-fit">
          Contact Us
        </button>
      </div>

      {/* Right Side - Yellow Section */}
      <div 
        className="w-full md:w-[55%] bg-[#c69a39] p-8 relative flex items-center justify-center min-h-[450px]"
        onMouseEnter={() => setIsPaused(true)}  // Mouse aane par animation rukk jayegi
        onMouseLeave={() => setIsPaused(false)} // Mouse hatne par firse shuru hogi
      >
        
        <div className="absolute top-8 right-8 z-30">
          <button className="bg-[#eec05c] px-4 py-2 text-sm font-semibold rounded-sm shadow-md hover:bg-white transition-colors">
            Social Links
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-xl translate-x-0 md:-translate-x-20 transition-all duration-500">
          
          {/* Animated Client Image */}
          <div className="absolute -top-16 left-4 md:left-0 z-20">
            <div className="w-40 h-40 border-4 border-white shadow-2xl overflow-hidden bg-white">
               <img 
                key={testimonials[currentIndex].id} 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover transition-opacity duration-500 animate-in fade-in zoom-in"
                onError={(e) => { e.target.src = "https://via.placeholder.com/160"; }}
              />
            </div>
          </div>

          {/* White Card Content */}
          <div className="bg-white p-8 pt-28 md:pl-24 shadow-2xl relative min-h-[340px] flex flex-col justify-between border-b-4 border-[#031510]">
            <div className="overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="animate-in slide-in-from-left-4 duration-500">
                  <h3 className="text-2xl font-bold text-[#031510]">
                    {testimonials[currentIndex].name}
                  </h3>
                  <div className="w-10 h-[2px] bg-[#c69a39] mt-1"></div>
                </div>
                
                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={prevSlide}
                    className="bg-[#c69a39] p-2 text-white hover:bg-[#031510] transition-colors rounded-sm"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="bg-[#c69a39] p-2 text-white hover:bg-[#031510] transition-colors rounded-sm"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="min-h-[100px] animate-in slide-in-from-bottom-2 duration-700">
                <p className="text-gray-600 italic text-lg leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>
            
            {/* Pagination dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${index === currentIndex ? 'w-10 bg-[#c69a39]' : 'w-3 bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
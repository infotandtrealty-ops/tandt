import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Main data file se saare 8 projects direct import kar rahe hain
import { properties } from "@/data/properties";

import "swiper/css";

// ================= BROCHURE DATA =================

const brochureData = [
  {
    developerName: "DLF",
    project: "Camellias",
    category: "Residential",
    location: "Golf Course Road",
    brochure: "/brochures/camellias.pdf"
  },
  {
    developerName: "DLF",
    project: "The Arbour",
    category: "Residential",
    location: "Golf Course Road",
    brochure: "/brochures/arbour.pdf"
  },
  {
    developerName: "M3M",
    project: "M3M Golf Estate",
    category: "Residential",
    location: "Sector 65",
    brochure: "/brochures/m3m-golf.pdf"
  },
  {
    developerName: "Emaar",
    project: "Emaar Digital Greens",
    category: "Commercial",
    location: "Sector 62",
    brochure: "/brochures/emaar-digital.pdf"
  }
];

// ================= COMPONENT =================

export default function SearchResults() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [developerFilter, setDeveloperFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const handleDeveloperChange = (value: string) => {
    setDeveloperFilter(value);

    if (value === "Original Booking") {
      navigate("/originalbooking");
    }
  };

  // ================= FILTER =================

  const filteredProperties = properties.filter((property) => {
    const titleText = property.title || "";
    const devText = property.developer || "";
    const locText = property.subtitle || property.location || "";
    const catText = property.category || "";

    const matchesSearch =
      searchTerm === "" ||
      titleText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      devText.toLowerCase().includes(searchTerm.toLowerCase()) ||
      locText.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDeveloper =
      developerFilter === "" ||
      devText === developerFilter;

    const matchesCategory =
      categoryFilter === "" ||
      catText.toLowerCase() === categoryFilter.toLowerCase();

    const matchesLocation =
      locationFilter === "" ||
      locText.toLowerCase().includes(locationFilter.toLowerCase());

    return (
      matchesSearch &&
      matchesDeveloper &&
      matchesCategory &&
      matchesLocation
    );
  });

  return (
    <Layout>
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= SWIPER ================= */}

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={filteredProperties.length > 3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-10"
          >
            {filteredProperties.map((project, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-2xl">

                 {/* IMAGE */}
<div className="relative h-64 flex-shrink-0">
  <img
    src={project.cardImageUrl}
    alt={project.title}
    className="w-full h-full object-cover"
    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Image+Not+Found" }}
  />
</div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">

                    {/* TOP CONTENT */}
                    <div>

                      {/* DEVELOPER + LOCATION */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-orange-500 text-xs font-bold uppercase">
                          {project.developer || "T and T Realty"}
                        </span>

                        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-center max-w-[150px] truncate">
                          📍 {project.location || "Gurugram"}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 min-h-[60px] leading-snug line-clamp-2">
                        {project.title}
                      </h2>

                      {/* SUBTITLE */}
                      <p className="text-sm text-gray-600 mb-5 min-h-[70px] leading-relaxed line-clamp-3">
                        {project.subtitle}
                      </p>

                      {/* FEATURES */}
                      <div className="space-y-3 mb-6 min-h-[130px]">
                        {project.features && project.features.slice(0, 3).map((feature, idx) => (
                          feature ? (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <span className="text-orange-500 font-bold mt-[2px]">
                                ✓
                              </span>
                              <span className="leading-relaxed line-clamp-2">
                                {feature}
                              </span>
                            </div>
                          ) : null
                        ))}
                      </div>

                    </div>

                    {/* PRICE + CALL BUTTON */}
                    <div className="border-t pt-4 flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-xs text-gray-400 uppercase">
                          Starting From
                        </p>

                        <p className="text-lg font-bold text-gray-900">
                          {project.priceText || "Price On Request"}
                        </p>
                      </div>

                      <a
                        href={`tel:${project.phone || "8088113333"}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300"
                      >
                        Call Now
                      </a>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ================= FILTER SECTION ================= */}

        </div>
      </div>
    </Layout>
  );
}
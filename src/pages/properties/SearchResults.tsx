import Layout from "@/components/layout/Layout";


// ================= DATA =================

const properties = [


  
  
  {
    id: "sapphire-84",
    developer: "Ameya Group",
    title: "Sapphire 84",
    subtitle: "Bang on Dwarka Expressway - Sector 84, Gurugram",
    features: [
      "Prime Retail and Office Spaces",
      "2.65 Lakh* sq. ft. Retail Zone",
      "Invest in Lockable Shops!"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/222.jpeg"
  },



  {
    id: "sapphire-93",
    developer: "Ameya Group",
    title: "Sapphire 93 - The Preferred Address for Smart Professionals!",
    subtitle: "Sapphire 93, Gurugram - A Strategic Location, Unmatched Connectivity",
    features: [
      "Fully Furnished 1 BHK and Retail Shops with 3 side open entry",
      "Upgrade to Your Own Space with smart investments and stronger returns!",
      "One of the fastest growing micro markets with immense potential for growth"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/93.webp"
  },





  {
    id: "triarc-city",
    developer: "TriArc City",
    title: "Your Gateway to Smart Investment",
    subtitle: "Strategically Located on Bhiwadi-Alwar Highway",
    features: [
      "Premium Residential in the lap of nature, wellness & serenity",
      "Excellent Connectivity, High Appreciation Potential, Future Growth Corridor",
      "Secure Your Future with High Growth investment"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/traic.jpeg"
  },




  {
    id: "ocus-medley",
    developer: "Ocus Medley",
    title: "The Ultimate Retail & Business Landmark on Dwarka Expressway",
    subtitle: "Lockable Shops in Sector 99, Gurugram",
    features: [
      "Unmatched Footfall, Unmatched Opportunity!",
      "Growing hotspot for leading brands - Bikanervala, Pizza Hut, Bata, Raymond & many more",
      "Prime Location in a thriving Catchment"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/ocus.jpeg"
  },



  {
    id: "vatika-crossover",
    developer: "Vatika Group",
    title: "Vatika Crossover",
    subtitle: "Sector 82A, Gurugram - Bang on NH48",
    features: [
      "Retail Office Spaces & Showroom",
      "Secure Your SCO Investments Today! Possession Started"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/cross.jpg"
  },



  {
    id: "sapphire-57",
    developer: "Ameya Group",
    title: "Sapphire 57 - Your Ultimate Destination for Business and Pleasure!",
    subtitle: "Sector 57, Gurugram",
    features: [
      "Fully Furnished 1 BHK, Retail Shops, High Street Market",
      "Prime Location, Exceptional Connectivity",
      "1.35 Lakh* sq. ft. Retail Zone"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/111.jpeg"
  },




  {
    id: "vatika-plots",
    developer: "Vatika Group",
    title: "A superior Location holding the key to your Dream plot!",
    subtitle: "Sector 88A & 88B, Dwarka Expressway",
    features: [
      "Bang on Global City's opposite side",
      "Plotted Development · Residential Plots"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/vatika.jpg"
  },




  {
    id: "sapphire-15",
    developer: "Ameya Group",
    title: "Sapphire Residences - Premium Residential Space",
    subtitle: "Sapphire 15, Gurugram",
    features: [
      "3 BHK+Utility Apartment",
      "Twin Towers G+18 Floors",
      "Experience Ultra Luxury Living in the heart of Gurugram"
    ],
    priceText: "Price On Request",
    phone: "8088113333",
    cardImageUrl: "/projects/15.jpeg"
  }
];


// ================= COMPONENT =================

export default function SearchResults() {
  return (
    <Layout>

      {/* HEADER */}
<div
  className="relative pt-12 pb-24 bg-cover bg-center"
  style={{
    backgroundImage:
   "url('/web/1.webp')",
  }}
>
  {/* Overlay for dark effect */}
  <div className="absolute inset-0"></div>
          <div className="container-custom text-center text-white">
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-sm">Home &gt; Properties</p>
        </div>
      </div>

      {/* LIST */}
      <section className="pb-20">
        <div className="container-custom">

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

{properties.map((item, index) => (
  <div
    key={index}
    // 1. Ensure the card itself is a flex container
    className="bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-xl transition flex flex-col"
  >
    {/* IMAGE + BADGE */}
    <div className="relative">
      <img src={item.cardImageUrl} className="w-full h-56 object-cover" />
    
    </div>

    {/* 2. Content container: 'flex-grow' fills empty space */}
    <div className="p-5 flex flex-col flex-grow">
      <p className="text-xs text-orange-500 font-semibold uppercase mb-1">
        {item.developer}
      </p>
      <h2 className="text-lg font-semibold leading-tight mb-2">
        {item.title}
      </h2>
      <p className="text-sm text-gray-500 mb-3">
        {item.subtitle}
      </p>

      {/* 3. This area grows to push the button down */}
      <div className="text-sm text-gray-600 space-y-1 mb-4 flex-grow">
        {item.features?.map((f, i) => (
          <p key={i}>• {f}</p>
        ))}
      </div>

      {/* 4. Price and Button will now be aligned at the bottom */}
      <p className="font-semibold text-black mb-4">
        {item.priceText}
      </p>
      <a
        href={`tel:${item.phone}`}
        className="block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold py-2 rounded-full mt-auto"
      >
        View Details
      </a>
    </div>
  </div>
))}

</div>

        </div>
      </section>

    </Layout>
  );
}
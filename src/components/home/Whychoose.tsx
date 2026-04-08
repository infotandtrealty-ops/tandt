import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "A Team of Seasoned Professionals",
    description:
    "T and T Realty brings a wealth of expertise to every client interaction. Their collective experience not only navigates the intricate Gurgaon real estate landscape but also ensures personalized, informed guidance. Committed to excellence, this adept team forms the backbone of TandT Realty's success, delivering unparalleled service and industry insight to clients.",    
},
  {
    title: "Market Knowledge",
    description:
    "At T and T Realty, our commitment to excellence is anchored in unparalleled market knowledge. Our team of experts possesses an intimate understanding of the Gurgaon real estate scene, staying ahead of trends and fluctuations. This deep-seated expertise empowers us to provide clients with strategic insights and guide them through informed decisions. With TandT Realty, you're not just gaining a property; you're gaining a partner armed with extensive market intelligence for a successful real estate journey.",
},
  {
    title: "Strategic Developer Collaborations",
    description:
  "Discover a world of exclusive opportunities with T and T Realty's strategic alliances with premier developers. Our collaborations ensure clients gain access to the most coveted projects, amplifying investment potential and ensuring a distinct advantage in the market.",
},
  {
    title: "Tailored Solutions for Diverse Needs",
    description:
    "T and T Realty's adaptability shines as we craft bespoke solutions for a myriad of real estate needs. Whether it's your dream home or a strategic commercial investment, our personalized approach ensures satisfaction by aligning with the unique aspirations of our diverse clientele.",
  },
  {
    title: "Client-Centric Excellence",
    description:
    "Experience a client journey like never before with T and T Realty's unwavering commitment to excellence. Our focus goes beyond transactions to provide clients with a seamless, enriching experience, where transparency, integrity, and personalized service converge for unparalleled satisfaction.",
  },
  {
    title: "High Customer Satisfaction Rate",
    description:
    "At T and T Realty, our hallmark is not just properties; it's satisfied clients. Our unwavering dedication to delivering exceptional service is reflected in our consistently high customer satisfaction rate. Each successful transaction is a testament to our client-centric approach, ensuring their needs are not just met but exceeded. TandT Realty takes pride in fostering lasting relationships, making us the trusted choice for those seeking not just a property, but an unparalleled customer experience in the dynamic Gurgaon real estate market.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031916]">
            Why Choose <span className="text-[#D99D26]">TandT Realty?</span>
          </h2>

          <div className="w-24 h-1 bg-[#D99D26] mx-auto mt-4"></div>
        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((item, index) => (
            <div
              key={index}
              className="
              group
              bg-[#031916]
              border border-[#D99D26]
              rounded-xl
              p-8
              text-white
              transition-all
              duration-300
              hover:bg-[#D99D26]
              hover:-translate-y-2
              hover:shadow-xl
              "
            >

              {/* Icon */}

              <div className="mb-5">
                <CheckCircle
                  size={32}
                  className="text-[#D99D26] group-hover:text-white"
                />
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-sm leading-relaxed text-gray-200 group-hover:text-white">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;
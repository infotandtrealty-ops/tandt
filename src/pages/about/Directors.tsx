import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Quote } from "lucide-react"; // Ikon for a professional touch

const directors = [

  {
    name: "Mr. Ashish Thapar",
    role: "Managing Director - T and T Realty",
    image: "/ceo/ashish.webp",
    bio: "Mr. Ashish Thapar, the Managing Director of the company has nearly two decades of experience in Real Estate, Manufacturing and Foreign Trade as well. He has been associated with the company since its inception as a promoter. He is responsible for the overall working of the Company and has been instrumental in taking major policy decisions of the Company. A young business visionary having an extensive background and experience in Strategic Planning, Project Design, Structuring Operations, Export Marketing, Collaborations & Joint Ventures, and Business Expansion. An Engineer by Qualification, Mr. Thapar has entrepreneurial interests vested in Energy, Commodity Trade, and also in Health & Wellness Sector, successfully leading the T and T Group towards success. With a Vision to provide Quality Living, Efficient Work Spaces along with Growth Oriented Investment Planning, Mr. Thapar is committed to establish Trust with our patrons and Transparency in the Real Estate Sector.",
  },
  {
    name: "Mr. Gurpreet Singh Ratra",
    role: " Executive Director  - T and T Realty",
    image: "/ceo/gurpreet.webp",
    bio: "Mr. Gurpreet S Ratra, the Executive Director of the company has corporate experience of nearly 20 years with the leading Real Estate Companies of India. His association with the company dates back to the inception as a promoter. He is responsible for all the policy and executionary decisions regarding Sales, Business Development, Customer Relations and finance. A young business leader, enriching the company with his vast Industry experience and expertise in market & business knowledge, product design, sales & leasing strategy valuable customer experience, and developing business plans for the growth of company. An MBA by qualification, Mr. Ratra has ventured into health & wellness sector as well using his entrepreneurial skills, driving the group companies to greater heights. He is committed towards the Vision to contribute towards creating a Real Estate Market which is Fair for all the stakeholders using Futuristic approach and Innovative yet Ethical practices.",
  },

  {
    name: "Ms. Bhawana Bhatnagar",
    role: "Director – Design, Execution & Asset Enhancement",
    image: "/ceo/bhawana.webp",
    bio: "Bhawana Bhatnagar serves as Director – Design & Execution Advisory at T and T, where she strengthens the firm’s real estate advisory capabilities by integrating design intelligence with execution realism to enhance asset value and reduce delivery risk. At T and T, Bhawana works closely with developers, investors, and internal advisory teams to guide projects from early planning and product positioning through execution strategy. Her focus is on improving project viability, buyer appeal, absorption velocity, and long-term asset performance, while maintaining strict control over cost, timelines, and quality. She brings over a decade of hands-on experience in luxury design-and-build through her role as the Founder of Casa Exotique, a high-end turnkey firm known for delivering complex residential, commercial, and hospitality projects. This dual perspective allows her to translate advisory recommendations into execution-ready, market-tested solutions—something rarely achieved in conventional real estate consulting.",
  },
];

const Directors = () => {
  return (
    <Layout>
<PageHeader
  title={
    <h1
      className="text-3xl md:text-5xl font-semibold text-[#ffffff] leading-snug"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      Our{" "}
      <span className="text-gold font-normal">
        Managment
      </span>
    </h1>
  }
  subtitle="Tradition of trust and transparency"
  breadcrumbs={[
    { name: "About Us", href: "/about/overview" },
    { name: "Our Management" },
  ]}
/>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="space-y-32">
            {directors.map((director, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section - Sticky for better alignment with long text */}
                <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
                  <div className="relative group">
                    {/* Decorative Background Frame */}
                    <div className="absolute -inset-4 bg-gold/10 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                    <div className="absolute -inset-4 border border-gold/20 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                    
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-muted">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full aspect-[4/5] object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white/70 text-sm font-medium uppercase tracking-widest">
                          Executive Leadership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/3 space-y-8">
                  <div className="relative">
                    <Quote className="absolute -top-8 -left-8 w-16 h-16 text-gold/10 -z-10" />
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold tracking-tighter rounded-md mb-4 uppercase">
                      Director Profile
                    </span>
 <h3
  className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  {director.name}
</h3>
                    <p className="text-gold text-xl font-medium mt-2 italic">
                      {director.role}
                    </p>
                    <div className="w-20 h-1 bg-gold mt-6" />
                  </div>

                  <div className="prose prose-gold max-w-none">
                    <p className="text-muted-foreground text-lg leading-relaxed text-justify first-letter:text-5xl first-letter:font-bold first-letter:text-gold first-letter:mr-3 first-letter:float-left">
                      {director.bio}
                    </p>
                  </div>
                  
                  {/* Digital Signature / Brand Element */}
                  <div className="pt-8 border-t border-border">
<p
  className="text-2xl text-foreground/50 italic opacity-50"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  T and T Realty Group
</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Directors;
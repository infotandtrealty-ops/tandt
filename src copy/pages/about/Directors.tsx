import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

const directors = [
  {
    name: "Mr. Gurpreet Singh Ratra",
    role: "Director - T and T Realty",
    // Path relative to the public folder
    image: "/ceo/gurpreet.webp", 
    bio: "Mr. Gurpreet S Ratra, the Executive Director of the company has corporate experience of nearly 20 years with the leading Real Estate Companies of India. His association with the company dates back to the inception as a promoter. He is responsible for all the policy and executionary decisions regarding Sales, Business Development, Customer Relations and finance. A young business leader, enriching the company with his vast Industry experience and expertise in market & business knowledge, product design, sales & leasing strategy valuable customer experience, and developing business plans for the growth of company. An MBA by qualification, Mr. Ratra has ventured into health & wellness sector as well using his entrepreneurial skills, driving the group companies to greater heights. He is committed towards the Vision to contribute towards creating a Real Estate Market which is Fair for all the stakeholders using Futuristic approach and Innovative yet Ethical practices.",
  },
  {
    name: "Mr. Ashish Thapar",
    role: "Director - T and T Realty",
    // Path relative to the public folder
    image: "/ceo/ashish.webp",
    bio: "Mr. Ashish Thapar, the Managing Director of the company has nearly two decades of experience in Real Estate, Manufacturing and Foreign Trade as well. He has been associated with the company since its inception as a promoter. He is responsible for the overall working of the Company and has been instrumental in taking major policy decisions of the Company. A young business visionary having an extensive background and experience in Strategic Planning, Project Design, Structuring Operations, Export Marketing, Collaborations & Joint Ventures, and Business Expansion. An Engineer by Qualification, Mr. Thapar has entrepreneurial interests vested in Energy, Commodity Trade, and also in Health & Wellness Sector, successfully leading the T and T Group towards success. With a Vision to provide Quality Living, Efficient Work Spaces along with Growth Oriented Investment Planning, Mr. Thapar is committed to establish Trust with our patrons and Transparency in the Real Estate Sector.",
  },
  {
    name: "Ms. Bhawana Bhatnagar",
    role: "Director - Design and Build",
    // Path relative to the public folder
    image: "/ceo/bhawana.webp",
    bio: "Ms. Bhawana Bhatnagar, a visionary entrepreneur and the creative force behind multiple successful ventures, brings a unique blend of passion, innovation, and strategic foresight to the T and T Realty Group. With over 14 years of experience in luxury interior design and brand development, she has set new benchmarks in experiential spaces through her premium design brand — Casa Exotique. Her journey began in rural India, where she explored her artistic strengths through music and theater at a young age. Over the years, her creative inclination evolved into a deeper understanding of design, culture and human emotions — ultimately shaping her career path. Having traveled extensively across the globe, she studied diverse architecture styles and lifestyle trends, enabling her to create spaces that are not only luxurious, but emotionally engaging. As a dynamic leader within the T and T Group, she plays a pivotal role in strategic planning, brand strengthening, and innovation-led development.",
  },
];

const Directors = () => {
  return (
    <Layout>
<PageHeader
  title={
    <span style={{ fontFamily: 'Poppins, sans-serif' }}>
      Director's Message
    </span>
  }
  subtitle="Tradition of trust and transparency"
  breadcrumbs={[
    { name: "About Us", href: "/about/overview" },
    { name: "Director's Message" },
  ]}
/>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {directors.map((director, index) => (
              <div
                key={index}
                // Fixed logic: Use flex-row-reverse for odd indices on large screens
                className={`grid lg:grid-cols-3 gap-8 items-start ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image Container */}
                <div className={`lg:col-span-1 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-gold rounded-2xl opacity-20 blur-xl" />
                    <img
                      src={director.image}
                      alt={director.name}
                      className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-medium"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {director.name}
                    </h3>
                    <p className="text-gold font-medium mt-1">{director.role}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {director.bio}
                  </p>
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
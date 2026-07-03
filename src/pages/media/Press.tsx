import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { ExternalLink, Calendar } from "lucide-react";

const pressReleases = [
  {
    title: "T and T Realty Announces New Commercial Project in Sector 84",
    source: "Economic Times",
    date: "Dec 15, 2024",
    excerpt: "T and T Realty Services has announced the launch of Sapphire 84, a premium commercial development in Gurgaon's emerging business district.",
  },
  {
    title: "Real Estate Market Trends in Delhi NCR - Expert Analysis",
    source: "Business Standard",
    date: "Dec 10, 2024",
    excerpt: "Industry experts at T and T Realty share insights on the evolving real estate landscape in Delhi NCR region.",
  },
  {
    title: "T and T Realty Expands Business Collaborator Programme",
    source: "Financial Express",
    date: "Dec 5, 2024",
    excerpt: "The company's innovative programme aims to bring together real estate professionals under a single umbrella.",
  },
  {
    title: "Gurgaon's Neighbourhood Bazaar Concept Gains Momentum",
    source: "Hindustan Times",
    date: "Nov 28, 2024",
    excerpt: "The successful Sapphire chain of neighbourhood bazaars continues to redefine retail experiences in Gurgaon.",
  },
  {
    title: "Investment Opportunities in Commercial Real Estate",
    source: "Mint",
    date: "Nov 20, 2024",
    excerpt: "T and T Realty directors discuss the potential of commercial real estate investments in the current market.",
  },
  {
    title: "Award Recognition for Excellence in Real Estate Consulting",
    source: "India Today",
    date: "Nov 15, 2024",
    excerpt: "T and T Realty receives recognition for outstanding contribution to the real estate consulting industry.",
  },
];

const Press = () => {
  return (
    <Layout>
      <PageHeader
        title="Press"
        subtitle="News and media coverage about T and T Realty"
        breadcrumbs={[
          { name: "Media", href: "/media/videos" },
          { name: "Press" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              In The News
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Press Releases & Media Coverage
            </h2>
          </div>

          <div className="space-y-6">
            {pressReleases.map((item, index) => (
              <article
                key={index}
                className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="px-3 py-1 bg-gold/10 text-gold rounded-full font-medium">
                        {item.source}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.excerpt}</p>
                  </div>
                  <div className="shrink-0">
                    <button className="flex items-center gap-2 text-gold hover:gap-3 transition-all">
                      Read Article <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Press;

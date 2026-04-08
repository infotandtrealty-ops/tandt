import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const blogs = [
  {
    title: "What Makes a Location Prime in Real Estate?",
    excerpt: "In real estate, the saying 'location, location, location' is not just a cliché — it's a core principle that influences property value and investment returns.",
    date: "Dec 28, 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
    category: "Investment",
  },
  {
    title: "Real Estate vs Mutual Funds: Where Should You Invest in 2025?",
    excerpt: "As we step into 2025, the investment landscape continues to evolve. With economic shifts, inflation trends, and growing opportunities in both sectors.",
    date: "Dec 25, 2024",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600",
    category: "Finance",
  },
  {
    title: "Mistakes to Avoid While Buying Commercial Property in Gurgaon",
    excerpt: "Gurgaon, often called the 'Millennium City,' has transformed into one of India's most sought-after commercial real estate destinations.",
    date: "Dec 20, 2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    category: "Commercial",
  },
  {
    title: "Is It the Right Time to Invest in SCO Plots in Gurgaon?",
    excerpt: "Gurgaon, known as the Millennium City of India, has rapidly transformed into one of the country's most lucrative real estate markets.",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600",
    category: "SCO Plots",
  },
  {
    title: "How Expressways and Metro Expansion are Transforming Gurgaon",
    excerpt: "Gurgaon, now officially known as Gurugram, has emerged as one of the most dynamic real estate markets in India.",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
    category: "Infrastructure",
  },
  {
    title: "Infrastructure Growth on Dwarka Expressway is Driving Real Estate",
    excerpt: "The expansion of infrastructure plays a pivotal role in shaping real estate markets, and Dwarka Expressway is a prime example.",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600",
    category: "Development",
  },
];

const Blogs = () => {
  return (
    <Layout>
      <PageHeader
        title="Blogs"
        subtitle="Insights, trends, and expert advice on real estate"
        breadcrumbs={[
          { name: "Media", href: "/media/videos" },
          { name: "Blogs" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Latest Articles
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Latest Media & Blogs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold text-primary text-xs font-medium rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-gold">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "sapphire-82a",
    name: "Sapphire 82A",
    location: "Sector 82A, Gurugram",
    type: "Neighbourhood Bazaar",
    status: "New Launch",
    area: "2.20 Lakh* sq.ft.",
    image: "/projects/82-A.jpg",  
    highlights: [
      "1.70 Lakh* sq.ft. Retail Zone over G+2 floors",
      "Four Screen Multiplex for higher footfall",
      "Strategic location adjoining Sectors 80 to 85",
      "Modern Facade with Multiple Escalators",
    ],
    developer: "Ameya Group",
  },

  {
    id: "polo-reserve-luxury-floors",
    name: "Polo Reserve Luxury Floors",
    location: "Flora Avenue, Sohna (South of Gurugram)",
    type: "Luxury Residential Floors",
    status: "New Launch",
    area: "Premium Low-Rise Floors",
    image: "/projects/polo.jpg",
    highlights: [
      "Premium 3 BHK Luxury Independent Floors",
      "Clubhouse with gym, café & indoor lounge",
      "Terrace-level swimming pool with poolside deck",
      "Low-density living amidst Aravalli surroundings",
    ],
    developer: "BREEZ Developers",
  },

  {
    id: "sapphire-57",
    name: "Sapphire 57",
    location: "Sector 57, Gurugram",
    type: "Neighbourhood Bazaar",
    status: "Ongoing",
    area: "1.80 Lakh* sq.ft.",
    image: "/projects/111.jpeg",
    highlights: [
      "1.35 Lakh* sq.ft. Retail Zone",
      "35,000* sq.ft. Food Haat on 2nd floor",
      "Three Screen Multiplex",
      "Modern Facade with Travelator",
    ],
    developer: "Ameya Group",
  },
  {
    id: "sapphire-84",
    name: "Sapphire 84",
    location: "Sector 84, Gurugram",
    type: "Commercial Development",
    status: "Upcoming",
    area: "2.90 Lakh* sq.ft.",
    image: "/projects/222.jpeg",
    highlights: [
      "2.65 Lakh* sq.ft. Retail Zone",
      "Food Hub for Culinary Delights",
      "Near SPR Road & Dwarka Expressway",
      "Serving 10K+ families in vicinity",
    ],
    developer: "Ameya Group",
  },
  {
    id: "vatika-india-next-2",
    name: "Vatika India Next 2",
    location: "Sector 88A & 88B, Dwarka Expressway, Gurugram",
    type: "Residential Plots",
    status: "New Launch",
    area: "Plotted Development",
    image: "/projects/vatika-india-next-2.webp",
    highlights: [
      "Premium residential plots on Dwarka Expressway",
      "Freedom to design and build custom dream homes",
      "Located bang on Delhi–Jaipur Super Expressway (NH-352B)",
      "Opposite Global City mega development",
      "5 minutes from Cloverleaf connecting SPR, CPR & Dwarka Expressway",
      "Easy access to NH-8 and Pataudi Road",
      "Proposed RRTS Metro Corridor connectivity",
      "Park-facing and corner plot options available",
    ],
    developer: "Vatika Group",
  },

  {
    id: "vatika-crossover",
    name: "Vatika Crossover",
    location: "Sector 82A, NH-48 (NH-8), Gurugram",
    type: "Commercial SCO Plots",
    status: "New Launch",
    area: "Plots from 95 to 215 sq. yds.",
    image: "/projects/cross.jpg",
    highlights: [
      "Premium High-Street Commercial SCO Plots",
      "Ownership from land to terrace (B+G+4+Terrace)",
      "2-side open plots with high visibility",
      "500 ft frontage landscaped central plaza on NH-48",
      "Only 108 plots in approx. 10 acres development",
      "Located on RRTS Metro Corridor",
      "Signal-free access to IGI Airport",
      "Surrounded by luxury residential & business hotels",
    ],
    developer: "Vatika Group",
  },

  
  {
    id: "sapphire-93",
    name: "Sapphire 93",
    location: "Sector 93, Gurugram",
    type: "Commercial Complex",
    status: "Ongoing",
    area: "Premium Development",
    image: "/projects/93.webp",
    highlights: [
      "Serviced Suites & Modern Work Spaces",
      "Neighbourhood Bazaar",
      "Fine Dining & Entertainment Zone",
      "High Visibility & Connectivity",
    ],
    developer: "Ameya Group",
  },

];

const Projects = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Projects"
        subtitle="The Sapphire Chain: Redefining Neighbourhood Bazaars in Gurugram"
        breadcrumbs={[{ name: "Projects" }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Featured Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sapphire Chain of Neighbourhood Bazaars
            </h2>
            <p className="text-muted-foreground">
              The story started in 2009 with The Sapphire (Sec 49). Today, Ameya Group 
              continues its journey, delivering high-value local marketplaces that click 
              due to more visibility, low CAM charges, and repeat footfalls.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.src = "https://placehold.co/600x400?text=Project+Image" }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                        project.status === "New Launch" ? "bg-gold text-primary shadow-lg" : 
                        project.status === "Delivered" ? "bg-green-600 text-white" : "bg-black/80 text-white"
                      }`}>
                        {project.status === "Delivered" && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {project.status === "Upcoming" && <Clock className="w-3.5 h-3.5" />}
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <p className="text-gold font-bold tracking-widest text-sm uppercase mb-2">
                      {project.developer}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm border-y border-border py-4">
                    <span className="flex items-center gap-2 text-muted-foreground font-medium">
                      <MapPin className="w-5 h-5 text-gold" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground font-medium">
                      <Building2 className="w-5 h-5 text-gold" />
                      {project.area}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-3">Project Highlights:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link to="/contact">
                      <Button variant="gold" size="lg" className="rounded-full px-8">
                        Enquire Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section based on your data */}
      <section className="bg-slate-50 section-padding border-t">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-8">Brands Who Trust Ameya</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our strategic locations and immaculate planning have earned the trust 
            of India's leading retailers and businesses.
          </p>
          {/* Aap yahan brand logos ki grid add kar sakte hain */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Invest in the Future of Retail</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Join the Sapphire success story. Prime shop spaces and office suites available 
            in Gurgaon's fastest-growing sectors.
          </p>
          <Link to="/contact">
            <Button variant="hero-solid" size="xl" className="rounded-full">
              Get Location Map & Brochure
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
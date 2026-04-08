import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Building2, Sparkles, Zap, Package } from "lucide-react";

const companies = [
  {
    icon: Building2,
    name: "T and T Realty Services Pvt. Ltd.",
    description: "T and T Realty Services Private Limited is a leading consulting company incorporated in 2014 to drive Social and Economic Growth through REAL ESTATE - safeguarding the Future and creating a Brighter World for Customers, Partners, Communities, and the Environment.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Sparkles,
    name: "Timeless Aesthetics Metros LLP",
    description: "Timeless Aesthetics is a group of expert aestheticians led by internationally certified & one of the pioneers of aesthetics, Dr. Shikha Baghi Bhandari. Timeless Aesthetics is a well-known brand in Permanent Makeup Industry that provides permanent makeup solutions performing various PMU Treatments, Educates Young Aspirants to become PMU artists, and helps them grow in their careers.",
    color: "from-navy to-navy-light",
  },
  {
    icon: Zap,
    name: "T and T Energy Pvt. Ltd.",
    description: "T and T Group expanded its wings to the Energy Sector and started adding value to people's life by choosing a non-conventional energy sector – Solar Energy. We are the authorized distributors of India's 1st ISO Certified Manufacturing Company of Grid-Tie Inverters with 5G Technology – Ksolare. T and T Energy distributes products like GRID-TIE INVERTER, 5G-PRO GRID–TIE INVERTER, Smart Hybrids in Northern, Middle & Western parts of India.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Package,
    name: "Om Prakash & Sons",
    description: "Om Prakash & Sons is an established firm in Building Materials, specializing in Kiln Bricks & Cement. Om Prakash & Sons is a stockist, Distributor, and C&F Agents & Import of cement.",
    color: "from-navy to-navy-light",
  },
];

const GroupCompanies = () => {
  return (
    <Layout>
      <PageHeader
        title="Group Companies"
        subtitle="Tradition of trust and transparency"
        breadcrumbs={[
          { name: "About Us", href: "/about/overview" },
          { name: "Group Companies" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              T and T Group
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Group of Companies
            </h2>
            <p className="text-muted-foreground">
              A diversified portfolio spanning real estate, aesthetics, energy, and building materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center mb-6`}>
                  <company.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {company.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GroupCompanies;

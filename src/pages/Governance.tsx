import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, FileCheck, Check } from "lucide-react";

const governanceSections = [
  {
    icon: Shield,
    title: "Code of Ethics",
    description: "We operate under a strict code of ethics that governs all our advisory mandates. Every team member is committed to maintaining the highest standards of professional conduct.",
    points: [
      "Transparency in all client communications",
      "Honest representation of market conditions",
      "No conflicts of interest",
      "Client-first approach in all decisions",
    ],
  },
  {
    icon: Lock,
    title: "Client Confidentiality Policy",
    description: "Your information and transactions are treated with the utmost confidentiality. We maintain strict protocols to protect client data and sensitive business information.",
    points: [
      "NDA-protected engagements",
      "Secure data handling procedures",
      "Limited access to confidential information",
      "Regular security audits and compliance checks",
    ],
  },
  {
    icon: Eye,
    title: "Conflict of Interest Disclosure",
    description: "We maintain clear boundaries and disclose any potential conflicts of interest upfront. Our advisory is always aligned with your best interests.",
    points: [
      "Proactive conflict identification",
      "Full disclosure to clients",
      "Independent advisory when conflicts exist",
      "Transparent fee structures",
    ],
  },
  {
    icon: FileCheck,
    title: "Anti-Misrepresentation Commitment",
    description: "We are committed to accurate representation of properties, market conditions, and investment opportunities. No false promises, no inflated claims.",
    points: [
      "Fact-based market intelligence",
      "Accurate property valuations",
      "Realistic return projections",
      "Clear risk disclosures",
    ],
  },
];

const Governance = () => {
  return (
    <Layout>
      <PageHeader
        title="Governance, Ethics & Compliance"
        subtitle="Trust is our primary asset"
        breadcrumbs={[{ name: "Governance" }]}
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-2xl font-display text-foreground mb-6">
              "Trust is our primary asset. Every advisory mandate is governed by clear ethical and confidentiality frameworks."
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Most Indian real estate websites skip this. Institutional firms never do. At T and T Realty, we believe that governance, ethics, and compliance are not just policies—they are the foundation of how we operate.
            </p>
          </div>

          {/* Governance Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {governanceSections.map((section, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
                  <section.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Privacy Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <Card className="p-8 md:p-12">
            <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Data Privacy & Information Handling
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are committed to protecting your personal and business information. Our data privacy practices comply with applicable regulations and industry best practices.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Information We Collect</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Contact information and communication preferences</li>
                  <li>• Property requirements and investment criteria</li>
                  <li>• Financial information (only as necessary for advisory services)</li>
                  <li>• Market research and transaction data</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">How We Protect Your Data</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Encrypted data storage and transmission</li>
                  <li>• Limited access on a need-to-know basis</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Compliance with data protection regulations</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                For detailed information about our data handling practices, please refer to our{" "}
                <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Governance;

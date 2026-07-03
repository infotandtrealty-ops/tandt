import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

const faqs = [
  {
    question: "Are you brokers or advisors?",
    answer: "We are advisors, not brokers. T and T Realty operates as a real estate advisory firm, providing strategic guidance, market intelligence, and portfolio management services. We do not push inventory—we curate outcomes based on your specific requirements, risk appetite, and investment goals.",
  },
  {
    question: "Do you represent buyers or sellers?",
    answer: "We represent neither buyers nor sellers exclusively. Our advisory model is client-agnostic. We work with developers, HNIs, investors, family offices, and landowners to provide objective, data-driven advice. Our recommendations are based on market intelligence and strategic analysis, not on commission structures.",
  },
  {
    question: "Do you handle off-market transactions?",
    answer: "Yes, we have access to off-market and exclusive opportunities that are not available through public channels. Our network includes developers, landowners, and institutional investors, allowing us to identify and structure transactions that align with your investment criteria. All off-market engagements are handled with strict confidentiality.",
  },
  {
    question: "What asset sizes do you typically advise on?",
    answer: "We advise across a wide range of asset sizes, from individual residential properties to large-scale commercial developments and land parcels. Our typical mandates range from ₹5 crores to ₹500+ crores. However, we evaluate each opportunity based on its strategic value and alignment with your portfolio goals, not just transaction size.",
  },
  {
    question: "How do you ensure confidentiality?",
    answer: "Confidentiality is fundamental to our operations. We maintain strict NDAs for all advisory engagements, implement secure data handling procedures, and limit access to confidential information on a need-to-know basis. Our team is trained in confidentiality protocols, and we conduct regular security audits to ensure compliance.",
  },
  {
    question: "What is your fee structure?",
    answer: "Our fee structure is transparent and varies based on the nature and scope of the advisory engagement. Fees may be structured as retainer-based, transaction-based, or a combination, depending on the mandate. All fee structures are discussed and agreed upon upfront, with no hidden charges. We believe in aligning our success with yours.",
  },
  {
    question: "How do you differ from traditional real estate brokers?",
    answer: "Unlike traditional brokers who focus on transactions and listings, we provide strategic advisory services. We offer market intelligence, portfolio optimization, risk assessment, and long-term planning. Our approach is advisory-first, transaction-second. We help you build resilient real estate portfolios, not just complete deals.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with international clients, including NRIs, foreign investors, and global family offices looking to invest in Gurgaon's real estate market. We provide guidance on regulatory compliance, foreign investment regulations (FEMA), and cross-border transaction structuring.",
  },
  {
    question: "What is your typical engagement timeline?",
    answer: "Engagement timelines vary based on the mandate. Portfolio advisory engagements may be ongoing, while specific transaction advisory may last 3-6 months. Land advisory and development structuring can extend to 12-18 months. We work at your pace and provide regular updates throughout the engagement.",
  },
  {
    question: "How do you stay updated on market trends?",
    answer: "We maintain a dedicated market research team that tracks infrastructure developments, policy changes, demand-supply dynamics, and pricing trends across Gurgaon's corridors. We have direct relationships with developers, access to proprietary data, and participate in industry forums to stay ahead of market shifts.",
  },
];

const FAQs = () => {
  return (
    <Layout>
      <PageHeader
        title="Advisory FAQs"
        subtitle="Strategic questions. Clear answers."
        breadcrumbs={[{ name: "FAQs" }]}
      />

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground leading-relaxed text-lg">
              These FAQs address the questions serious investors, developers, and HNIs ask before engaging with a real estate advisory firm. This page pre-sells credibility before calls.
            </p>
          </div>

          {/* FAQs Accordion */}
          <div className="max-w-4xl mx-auto mb-16">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center bg-slate-50 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-8">
              Looking for strategic advice, not just opinions? Speak with our advisory team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="mailto:info@T and Trealty.com">
                <Button variant="outline" size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;

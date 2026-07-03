import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Scale, ShieldAlert, FileText, Globe, Gavel, RefreshCw } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      title: "Intellectual Property Rights",
      icon: FileText,
      content: "Other than the content you own, under these terms, T and T Realty and/or its licensors own all the intellectual property rights and materials contained in this website."
    },
    {
      title: "Restrictions",
      icon: ShieldAlert,
      content: "Certain areas of this website are restricted from being accessed by you and T and T Realty may further restrict access by you to any areas of this website, at any time in absolute discretion."
    },
    {
      title: "Your Content",
      icon: Globe,
      content: "By displaying Your Content, you grant T and T Realty a non-exclusive, worldwide irrevocable, sub-authorized license to use, reproduce, adapt, publish, translate and distribute it in any and all media."
    },
    {
      title: "No Warranties",
      icon: Scale,
      content: "This Webpage is provided 'as is,' with all faults, and T and T Realty expresses no representations or warranties of any kind related to this Webpage or the contents contained on this Website."
    },
    {
      title: "Variation of Terms",
      icon: RefreshCw,
      content: "T and T Realty is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis."
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Standard terms and conditions for using our website"
        breadcrumbs={[{ name: "Terms & Conditions" }]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Introduction</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These standard terms & conditions written on this website shall manage your use of our website{" "}
                <a href="https://www.tandtrealty.in/" className="text-gold hover:underline">
                  https://www.tandtrealty.in/
                </a>. By using this Website, you agreed to accept all terms and conditions written in here. 
                You must not use this Website if you disagree with any of these Standard Terms and Conditions.
              </p>
            </div>

            {/* Main Sections Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {sections.map((item, index) => (
                <div key={index} className="p-8 rounded-2xl bg-card border border-border/50 hover:border-gold/50 transition-colors shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Legal Clauses */}
            <div className="space-y-10 prose prose-sm max-w-none text-muted-foreground">
              <div className="border-l-4 border-gold pl-6 py-2">
                <h3 className="text-foreground font-bold text-xl mb-3">Limitation of Liability</h3>
                <p>
                  In no event shall T and T Realty, or any of its directors and employees, be held liable for anything coming out of or in any way connected with your use of this Website whether such liability is under contract. T and T Realty, including its directors and employees, shall not be held liable for any indirect, consequential or special liability coming out of or in any way related to your use of this Website.
                </p>
              </div>

              <div className="bg-secondary/30 p-8 rounded-2xl">
                <h3 className="text-foreground font-bold text-xl mb-3">Indemnification</h3>
                <p>
                  You hereby indemnify to the fullest extent T and T Realty from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 pt-6">
                <div>
                  <h3 className="text-foreground font-bold text-xl mb-3">Assignment</h3>
                  <p>
                    T and T Realty is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-xl mb-3">Entire Agreement</h3>
                  <p>
                    These Terms constitute the entire agreement between T and T Realty and you in relation to your use of this Website, and supersede all prior agreements and understandings.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms ;
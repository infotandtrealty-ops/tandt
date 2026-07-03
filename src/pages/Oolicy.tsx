import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

const Policy = () => {
  return (
    <Layout>
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: January 2026"
        breadcrumbs={[{ name: "Privacy Policy" }]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-8">
              <div className="bg-gold/5 border-l-4 border-gold p-6 rounded-r-xl mb-10">
                <p className="text-foreground font-medium m-0">
                  This Privacy Policy applies to <span className="text-gold">www.tandtrealty.in</span>. 
                  T and T Realty recognises the importance of maintaining your privacy. We value your privacy 
                  and appreciate your trust in us.
                </p>
              </div>

              <p>
                This Policy describes how we treat user information we collect on http://www.tandtrealty.in and other offline sources. 
                This Privacy Policy applies to current and former visitors to our website and to our online customers. 
                By visiting and/or using our website, you agree to this Privacy Policy.
              </p>

              <p className="italic border-b border-border pb-4">
                www.tandtrealty.in is a property of T and T Realty Services Pvt Ltd, an Indian Company registered under the 
                Companies Act, 2013 having its corporate office at 2nd floor, Ameya One, Sector 42, Gurugram, Haryana - 122011, 
                Harera No:- RC/REA/HARERA/GGM/2018/18
              </p>

              {/* Information Collection */}
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">Information We Collect</h2>
                
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold">Contact Information</h4>
                    <p>We might collect your name, email, mobile number, phone number, street, city, state, pincode, country and ip address.</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold">Information You Post</h4>
                    <p>We collect information you post on our website or on a third-party social media site belonging to www.tandtrealty.in</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold">Demographic Information</h4>
                    <p>We may collect demographic information about you, projects you like, properties you intend to participate in, or any other information provided by you during the use of our website. We might collect this as a part of a survey also.</p>
                  </div>
                </div>
              </div>

              {/* How we collect */}
              <div className="space-y-4 pt-6">
                <h2 className="font-display text-2xl font-bold text-foreground">How We Collect Information</h2>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Directly from you:</strong> We collect information when you enquire for any project, post a comment, or ask us questions through phone or email.</li>
                  <li><strong>Passively:</strong> We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage.</li>
                  <li><strong>Third Parties:</strong> If you use integrated social media features, the third-party site will give us certain information like your name and email address.</li>
                </ul>
              </div>

              {/* Use of Personal Information */}
              <div className="space-y-4 pt-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Use of Your Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <p><strong>Communication:</strong> To contact you regarding enquiries or promotional purposes.</p>
                  <p><strong>Response:</strong> To confirm your registration or interest in our projects.</p>
                  <p><strong>Improvement:</strong> To customize your experience and display content based on preferences.</p>
                  <p><strong>Security:</strong> To protect our company, our customers, and our website.</p>
                  <p><strong>Marketing:</strong> To send newsletters, special promotions, or offers (our own or third-party).</p>
                </div>
              </div>

              {/* Sharing Information */}
              <div className="space-y-4 pt-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Sharing of Information with Third-Parties</h2>
                <p>We share information with business partners who sponsor events or operate venues. We also share information to comply with the law, respond to court orders, or during investigations of potential fraud. In the event of a business sale, customer lists may be transferred to the successor.</p>
              </div>

              {/* Cookies Policy */}
              <div className="bg-secondary/30 p-8 rounded-2xl border border-border mt-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Cookies Policy</h2>
                <p className="mb-4">
                  The T and T Realty website places cookies (small data files) on your computer or handheld device. 
                  This is standard practice for all websites.
                </p>
                <p className="mb-4">
                  Cookies are essential for delivering a high-quality website experience and help us understand 
                  browsing behavior to improve our services.
                </p>
                <p className="font-medium text-foreground">
                  By using and browsing this website, you consent to cookies being used in accordance with our policy. 
                  If you do not consent, you must disable cookies or refrain from using the site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policy;
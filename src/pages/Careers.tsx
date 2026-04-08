import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  Check, 
  Mail, 
  MapPin, 
  Briefcase, 
  ChevronDown, 
  ChevronUp, 
  Target,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  { title: "High-Value Mandates", desc: "Exposure to complex real estate assets.", icon: Target },
  { title: "Senior Interaction", desc: "Directly work with industry leaders.", icon: Users },
  { title: "Advisory Roles", desc: "Focus on research, not just sales pressure.", icon: Building2 },
  { title: "Market Ethics", desc: "Zero tolerance for misrepresentation.", icon: ShieldCheck },
];

const jobOpenings = [
  {
    title: "Architect",
    location: "Gurgaon",
    type: "Full-time",
    department: "Design & Development",
    description: "Seeking a talented Architect to contribute to real estate advisory and development projects. You will create innovative spaces that align with institutional capital requirements.",
    responsibilities: [
      "Design architectural concepts for residential & mixed-use projects",
      "Prepare detailed drawings and specifications",
      "Ensure compliance with local Gurgaon/NCR building codes",
      "Present design concepts to high-profile stakeholders",
    ],
    requirements: [
      "5+ years of experience in architectural design",
      "Proficiency in AutoCAD, Revit, and SketchUp",
      "Strong understanding of real estate development processes",
    ],
  },
  {
    title: "Social Media Manager",
    location: "Gurgaon",
    type: "Full-time",
    department: "Marketing & Communications",
    description: "Position T and T Realty as a thought leader. We need a strategist who understands the difference between high-end advisory branding and typical property listings.",
    responsibilities: [
      "Develop strategies for LinkedIn, Instagram, and Twitter",
      "Create thought leadership content for HNIs and investors",
      "Manage social media advertising and performance metrics",
    ],
    requirements: [
      "3+ years in social media management (Real Estate preferred)",
      "Excellent copywriting and content creation skills",
      "Analytical mindset to track ROI on campaigns",
    ],
  },
];

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <Layout>
      <PageHeader
        title="Careers"
        subtitle="Build Expertise. Shape Markets. Think Long-Term."
        breadcrumbs={[{ name: "Careers" }]}
      />

      {/* Hero Intro */}
      <section className="pt-20 pb-10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              We are building <span className="text-gold">Real Estate Intelligence.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At T and T Realty, we look for individuals who think analytically, understand markets (not just listings), 
              value ethics, and are comfortable working with HNIs and institutional capital.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-gold transition-colors group">
                <item.icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-gold font-bold tracking-widest uppercase text-sm">Opportunities</span>
              <h2 className="font-display text-4xl font-bold mt-2">Current Openings</h2>
            </div>
            <div className="text-muted-foreground hidden md:block italic">
              Don't see a fit? Email us at <span className="text-foreground font-semibold">careers@T and Trealty.com</span>
            </div>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div 
                key={index} 
                className={cn(
                  "border rounded-2xl transition-all overflow-hidden",
                  expandedJob === index ? "border-gold bg-white shadow-lg" : "border-slate-200 bg-white hover:border-slate-300"
                )}
              >
                <div 
                  className="p-6 md:p-8 cursor-pointer flex items-center justify-between"
                  onClick={() => toggleJob(index)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-4 h-4 text-gold" />
                      <span className="text-xs font-bold text-gold uppercase tracking-tighter">{job.department}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{job.title}</h3>
                    <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="bg-slate-100 p-2 rounded-full">
                    {expandedJob === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>

                {expandedJob === index && (
                  <div className="p-8 pt-0 border-t border-slate-50">
                    <div className="grid md:grid-cols-2 gap-10 mt-8">
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Check className="text-gold" /> Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Check className="text-gold" /> Requirements
                        </h4>
                        <ul className="space-y-3">
                          {job.requirements.map((r, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8">
                          <a href={`mailto:careers@T and Trealty.com?subject=Application for ${job.title}`}>
                            <Button variant="gold" className="w-full md:w-auto px-10">
                              Apply for this position
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant CTA */}
      <section className="py-20 bg-[#031916] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to lead the market?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            All applications are treated with strict confidentiality. 
            Join a team where values matter as much as value.
          </p>
          <a href="mailto:careers@T and Trealty.com">
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white rounded-full px-12 h-14">
              <Mail className="mr-2 w-5 h-5" /> Send your CV
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
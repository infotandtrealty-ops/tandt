import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhyClientsWorkSection from "@/components/home/WhyClientsWorkSection";
import GurgaonExpertiseSection from "@/components/home/GurgaonExpertiseSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import FeaturedPropertiesSection from "@/components/home/FeaturedPropertiesSection";
import FeaturedLocationsSection from "@/components/home/FeaturedLocationsSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AssociationsSection from "@/components/home/AssociationsSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
// import WhyChoose from "@/components/home/WhyChoose";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <WhyClientsWorkSection />
      <GurgaonExpertiseSection />
      <WhoWeServeSection />
      <PhilosophySection />
      {/* <FeaturedPropertiesSection /> */}
      {/* <FeaturedLocationsSection /> */}
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      {/* <WhyChooseSection /> */}
      <AssociationsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <CTASection /> */}
    </Layout>
  );
};

export default Index;

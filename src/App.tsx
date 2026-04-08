import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Overview from "./pages/about/Overview";
import Spirit from "./pages/about/Spirit";
import GroupCompanies from "./pages/about/GroupCompanies";
import Directors from "./pages/about/Directors";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Videos from "./pages/media/Videos";
import Blogs from "./pages/media/Blogs";
import Press from "./pages/media/Press";
import Insights from "./pages/media/Insights";
import Contact from "./pages/Contact";
import Policy from "./pages/Oolicy";
import TermsConditions from "./pages/Terms";
import PropertiesHome from "./pages/properties/PropertiesHome";
import PropertiesListing from "./pages/properties/PropertiesListing";
import PropertyDetails from "./pages/properties/PropertyDetails";
import SearchResults from "./pages/properties/SearchResults";


import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Governance from "./pages/Governance";
import FAQs from "./pages/FAQs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/spirit" element={<Spirit />} />
          <Route path="/about/group-companies" element={<GroupCompanies />} />
          <Route path="/about/directors" element={<Directors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />

          {/* Properties */}
          <Route path="/properties" element={<PropertiesHome />} />
          <Route path="/properties/:category" element={<PropertiesListing />} />
          <Route path="/properties/:category/:type" element={<PropertiesListing />} />
          <Route path="/property/:slug" element={<PropertyDetails />} />
          <Route path="/search" element={<SearchResults />} />





          <Route path="/media/videos" element={<Videos />} />
          <Route path="/media/insights" element={<Insights />} />
          <Route path="/media/blogs" element={<Blogs />} />
          <Route path="/media/press" element={<Press />} />




          <Route path="/contact" element={<Contact />} />
          







          <Route path="/privacy" element={<Policy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/faqs" element={<FAQs />} />

          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

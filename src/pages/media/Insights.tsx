import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Download,
  FileText,
  IndianRupee,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MarketDataPoint {
  month: string;
  avgPrice: number;
  transactions: number;
  priceGrowth: number;
}

interface Neighborhood {
  id: number;
  name: string;
  location: string;
  avgPrice: string;
  priceGrowth: string;
  properties: number;
  image: string;
  alt: string;
  amenities: string[];
}

interface MarketReport {
  id: number;
  title: string;
  quarter: string;
  year: string;
  description: string;
  pages: number;
  downloadUrl: string;
  reportType: "quarterly" | "annual" | "special";
}

interface PriceAnalytics {
  id: number;
  propertyType: string;
  currentPrice: string;
  monthlyChange: string;
  yearlyChange: string;
  forecast: string;
  isPositive: boolean;
}

const MarketTrendChart = ({ data, chartType }: { data: MarketDataPoint[]; chartType: "line" | "bar" }) => {
  return (
    <div className="w-full h-80 bg-card rounded-xl p-4 md:p-6 shadow-soft border border-border/60" aria-label="Market Trend Chart">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" style={{ fontSize: "12px" }} />
            <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "14px" }} />
            <Line
              type="monotone"
              dataKey="avgPrice"
              stroke="hsl(var(--gold))"
              strokeWidth={3}
              name="Avg Price (₹ Lakhs)"
              dot={{ fill: "hsl(var(--gold))", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="priceGrowth"
              stroke="hsl(var(--navy))"
              strokeWidth={2}
              name="Price Growth (%)"
              dot={{ fill: "hsl(var(--navy))", r: 3 }}
            />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" style={{ fontSize: "12px" }} />
            <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "14px" }} />
            <Bar dataKey="transactions" fill="hsl(var(--gold))" name="Transactions" radius={[6, 6, 0, 0]} />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

const InsightCard = ({ article, onReadMore }: { article: any; onReadMore: (a: any) => void }) => {
  return (
    <article className="bg-card rounded-xl shadow-soft overflow-hidden hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group border border-border/60">
      <div className="relative h-56 overflow-hidden">
        <img
          src={article.image}
          alt={article.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">{article.category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-muted-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h3 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300">
          {article.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>

        <Button variant="link" className="p-0 h-auto text-gold" onClick={() => onReadMore(article)}>
          Read full article <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </article>
  );
};

const NeighborhoodCard = ({ neighborhood }: { neighborhood: Neighborhood }) => {
  return (
    <div className="bg-card rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/60">
      <div className="relative h-48 overflow-hidden">
        <img src={neighborhood.image} alt={neighborhood.alt} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-2xl font-bold text-white mb-1">{neighborhood.name}</h3>
          <p className="text-white/90 text-sm flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold" />
            <span>{neighborhood.location}</span>
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-border/60">
          <div>
            <p className="text-muted-foreground text-xs mb-1">Average price</p>
            <p className="text-foreground text-lg font-semibold">{neighborhood.avgPrice}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">Growth</p>
            <p className="text-emerald-600 text-lg font-semibold flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>{neighborhood.priceGrowth}</span>
            </p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4">
          Available properties: <span className="text-foreground font-semibold">{neighborhood.properties}</span>
        </p>

        <div>
          <p className="text-muted-foreground text-xs mb-2">Key amenities</p>
          <div className="flex flex-wrap gap-2">
            {neighborhood.amenities.map((amenity) => (
              <span key={amenity} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MarketReportCard = ({ report }: { report: MarketReport }) => {
  const IconComp = report.reportType === "quarterly" ? BarChart3 : report.reportType === "annual" ? FileText : Sparkles;
  const badgeClasses =
    report.reportType === "quarterly"
      ? "bg-primary/10 text-primary"
      : report.reportType === "annual"
        ? "bg-gold/15 text-primary"
        : "bg-muted text-foreground";

  return (
    <div className="bg-card rounded-xl shadow-soft p-6 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 border border-border/60">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${badgeClasses}`}>
          <IconComp className="w-7 h-7" />
        </div>
        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
          {report.quarter} {report.year}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-3">{report.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{report.description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-border/60">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <FileText className="w-4 h-4" />
          <span>{report.pages} pages</span>
        </div>
        <Button
          variant="gold"
          onClick={() => window.open(report.downloadUrl, "_blank")}
          className="rounded-xl"
          type="button"
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>
    </div>
  );
};

const PriceAnalyticsCard = ({ analytics }: { analytics: PriceAnalytics }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-xl shadow-soft p-6 border border-border/60 hover:shadow-medium transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-lg font-semibold text-foreground">{analytics.propertyType}</h3>
        <button
          onClick={() => setIsExpanded((v) => !v)}
          className="p-2 hover:bg-muted rounded-lg transition-colors duration-300"
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
          type="button"
        >
          {isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
        </button>
      </div>

      <div className="mb-4">
        <p className="text-muted-foreground text-xs mb-1">Current average price</p>
        <p className="text-foreground text-2xl font-bold">{analytics.currentPrice}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-muted-foreground text-xs mb-1">Monthly change</p>
          <p className={`text-sm font-semibold ${analytics.isPositive ? "text-emerald-600" : "text-red-600"}`}>
            {analytics.monthlyChange}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-xs mb-1">Yearly change</p>
          <p className={`text-sm font-semibold ${analytics.isPositive ? "text-emerald-600" : "text-red-600"}`}>
            {analytics.yearlyChange}
          </p>
        </div>
      </div>

      {isExpanded && (
        <div className="pt-4 border-t border-border/60 animate-fade-in">
          <p className="text-muted-foreground text-xs mb-2">6-month outlook</p>
          <p className="text-foreground text-sm leading-relaxed">{analytics.forecast}</p>
        </div>
      )}
    </div>
  );
};

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsSubscribed(true);
    setEmail("");
    window.setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <div className="bg-gradient-to-r from-primary to-gold rounded-2xl p-8 md:p-12 shadow-soft border border-border/30">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Get market updates</h2>
        <p className="text-white/90 text-lg mb-8">Weekly insights and special reports delivered to your inbox</p>

        {!isSubscribed ? (
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="h-12 bg-white/95"
            />
            <Button type="submit" variant="hero-solid" className="h-12 rounded-xl whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 bg-white/20 rounded-xl px-6 py-4 max-w-xl mx-auto">
            <CheckCircle className="w-6 h-6 text-white" />
            <p className="text-white font-semibold">Subscribed successfully! You’ll start receiving updates soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Insights = () => {
  const [activeTab, setActiveTab] = useState<"trends" | "neighborhoods" | "reports" | "analytics">("trends");
  const [chartType, setChartType] = useState<"line" | "bar">("line");

  const marketData: MarketDataPoint[] = useMemo(
    () => [
      { month: "Jul", avgPrice: 125, transactions: 450, priceGrowth: 8.5 },
      { month: "Aug", avgPrice: 132, transactions: 520, priceGrowth: 9.2 },
      { month: "Sep", avgPrice: 138, transactions: 480, priceGrowth: 10.1 },
      { month: "Oct", avgPrice: 145, transactions: 550, priceGrowth: 11.3 },
      { month: "Nov", avgPrice: 152, transactions: 590, priceGrowth: 12.5 },
      { month: "Dec", avgPrice: 158, transactions: 620, priceGrowth: 13.8 },
    ],
    [],
  );

  const neighborhoods: Neighborhood[] = useMemo(
    () => [
      {
        id: 1,
        name: "Vasant Vihar",
        location: "South Delhi",
        avgPrice: "₹2.8 Cr",
        priceGrowth: "+12.5%",
        properties: 45,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
        alt: "Upscale residential area with tree-lined streets and luxury villas",
        amenities: ["Metro", "Schools", "Shopping Mall", "Parks"],
      },
      {
        id: 2,
        name: "Golf Links",
        location: "Central Delhi",
        avgPrice: "₹4.2 Cr",
        priceGrowth: "+15.8%",
        properties: 28,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        alt: "Exclusive golf course community with luxury homes and manicured lawns",
        amenities: ["Golf Course", "Club House", "Security", "Green Spaces"],
      },
      {
        id: 3,
        name: "Greater Kailash",
        location: "South Delhi",
        avgPrice: "₹3.5 Cr",
        priceGrowth: "+10.2%",
        properties: 62,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        alt: "Well-established residential neighborhood with modern apartments and green spaces",
        amenities: ["Metro", "Hospital", "Restaurants", "Gym"],
      },
      {
        id: 4,
        name: "Chanakyapuri",
        location: "Central Delhi",
        avgPrice: "₹5.8 Cr",
        priceGrowth: "+18.3%",
        properties: 18,
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        alt: "Diplomatic enclave with embassy buildings and luxury residences",
        amenities: ["Embassies", "Security", "Exclusive Clubs", "Green Belt"],
      },
    ],
    [],
  );

  const marketReports: MarketReport[] = useMemo(
    () => [
      {
        id: 1,
        title: "Q4 2025 Luxury Real Estate Report",
        quarter: "Q4",
        year: "2025",
        description:
          "A comprehensive review of Q4 2025: pricing trends, transaction volumes, and forward-looking indicators across the luxury segment.",
        pages: 45,
        downloadUrl: "#",
        reportType: "quarterly",
      },
      {
        id: 2,
        title: "Annual Market Review 2025",
        quarter: "Annual",
        year: "2025",
        description:
          "A full-year market review of 2025 highlighting key trends, standout deals, and strategic insights heading into 2026.",
        pages: 78,
        downloadUrl: "#",
        reportType: "annual",
      },
      {
        id: 3,
        title: "Smart Home Technology Impact Study",
        quarter: "Special",
        year: "2026",
        description:
          "Detailed analysis of how smart home tech influences buyer preferences and valuations, including ROI data and future adoption trends.",
        pages: 32,
        downloadUrl: "#",
        reportType: "special",
      },
      {
        id: 4,
        title: "Q1 2026 Market Forecast",
        quarter: "Q1",
        year: "2026",
        description:
          "Outlook for Q1 2026: opportunity mapping, risk considerations, and strategic recommendations for investors and end-users.",
        pages: 38,
        downloadUrl: "#",
        reportType: "quarterly",
      },
    ],
    [],
  );

  const priceAnalytics: PriceAnalytics[] = useMemo(
    () => [
      {
        id: 1,
        propertyType: "Luxury Apartments",
        currentPrice: "₹2.5 Cr",
        monthlyChange: "+2.3%",
        yearlyChange: "+14.8%",
        forecast:
          "Expected 8–10% growth over the next 6 months. Demand remains strong in premium micro-markets.",
        isPositive: true,
      },
      {
        id: 2,
        propertyType: "Penthouses",
        currentPrice: "₹8.2 Cr",
        monthlyChange: "+3.5%",
        yearlyChange: "+18.2%",
        forecast: "Momentum likely to continue due to rising demand from high-net-worth buyers.",
        isPositive: true,
      },
      {
        id: 3,
        propertyType: "Villas",
        currentPrice: "₹5.8 Cr",
        monthlyChange: "+2.8%",
        yearlyChange: "+16.5%",
        forecast:
          "Premium pricing is strongest for gated communities with smart features and quality green space access.",
        isPositive: true,
      },
      {
        id: 4,
        propertyType: "Commercial Spaces",
        currentPrice: "₹1.8 Cr",
        monthlyChange: "+1.5%",
        yearlyChange: "+9.2%",
        forecast: "Moderate growth supported by hybrid work and increased demand for flexible workplace solutions.",
        isPositive: true,
      },
    ],
    [],
  );

  return (
    <Layout>
      <PageHeader
        title="Insights"
        subtitle="Market intelligence, expert perspectives, and investment-ready analysis"
        breadcrumbs={[
          { name: "Media", href: "/media/insights" },
          { name: "Insights" },
        ]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Market Intelligence
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Luxury Real Estate Insights</h2>
            <p className="text-muted-foreground mt-3">
              Track trends, explore neighborhoods, download reports, and understand pricing—updated for 2026.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Button variant={activeTab === "trends" ? "gold" : "outline"} onClick={() => setActiveTab("trends")}>
              Trends
            </Button>
            <Button
              variant={activeTab === "neighborhoods" ? "gold" : "outline"}
              onClick={() => setActiveTab("neighborhoods")}
            >
              Neighborhoods
            </Button>
            <Button variant={activeTab === "reports" ? "gold" : "outline"} onClick={() => setActiveTab("reports")}>
              Market Reports
            </Button>
            <Button variant={activeTab === "analytics" ? "gold" : "outline"} onClick={() => setActiveTab("analytics")}>
              Price Analytics
            </Button>
          </div>

          {/* Trends */}
          {activeTab === "trends" && (
            <div className="space-y-10">
              <div className="bg-card rounded-2xl shadow-soft border border-border/60 p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                  <h3 className="font-display text-2xl font-semibold text-foreground">Price Trend Analysis</h3>
                  <div className="flex items-center gap-3">
                    <Button
                      size="sm"
                      variant={chartType === "line" ? "default" : "outline"}
                      onClick={() => setChartType("line")}
                    >
                      Line chart
                    </Button>
                    <Button
                      size="sm"
                      variant={chartType === "bar" ? "default" : "outline"}
                      onClick={() => setChartType("bar")}
                    >
                      Bar chart
                    </Button>
                  </div>
                </div>
                <MarketTrendChart data={marketData} chartType={chartType} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card rounded-2xl shadow-soft p-6 border border-border/60">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-8 h-8 text-gold" />
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-700 text-xs font-semibold rounded-full">
                      +14.8%
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-2">Annual growth</h4>
                  <p className="text-muted-foreground text-sm">Luxury segment remains on a strong upward trajectory.</p>
                </div>

                <div className="bg-card rounded-2xl shadow-soft p-6 border border-border/60">
                  <div className="flex items-center justify-between mb-4">
                    <BarChart3 className="w-8 h-8 text-primary" />
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">620</span>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-2">Monthly transactions</h4>
                  <p className="text-muted-foreground text-sm">Record transaction volume reported in Dec 2025.</p>
                </div>

                <div className="bg-card rounded-2xl shadow-soft p-6 border border-border/60">
                  <div className="flex items-center justify-between mb-4">
                    <IndianRupee className="w-8 h-8 text-gold-dark" />
                    <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">₹158L</span>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-2">Average price</h4>
                  <p className="text-muted-foreground text-sm">Average market price per sq. ft. across tracked areas.</p>
                </div>
              </div>
            </div>
          )}


          {/* Neighborhoods */}
          {activeTab === "neighborhoods" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-3xl font-semibold text-foreground mb-3">Neighborhood analysis</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Snapshot of some of Delhi’s most prestigious micro-markets, with price signals and amenity highlights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {neighborhoods.map((n) => (
                  <NeighborhoodCard key={n.id} neighborhood={n} />
                ))}
              </div>
            </div>
          )}

          {/* Reports */}
          {activeTab === "reports" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-3xl font-semibold text-foreground mb-3">Reports & studies</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Download curated research for decision-making and long-term planning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {marketReports.map((r) => (
                  <MarketReportCard key={r.id} report={r} />
                ))}
              </div>
            </div>
          )}

          {/* Analytics */}
          {activeTab === "analytics" && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-3xl font-semibold text-foreground mb-3">Price analytics & outlook</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Current pricing signals and short-term forecasts across property types.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {priceAnalytics.map((a) => (
                  <PriceAnalyticsCard key={a.id} analytics={a} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-16">
            <NewsletterSubscription />
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Looking for long-form expert articles with Gurgaon-focused insights? Visit{" "}
            <Link to="/media/blogs" className="text-gold hover:underline">
              Blogs
            </Link>
            .
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Insights;

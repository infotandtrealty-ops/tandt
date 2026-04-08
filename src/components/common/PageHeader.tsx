import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { name: string; href?: string }[];
  backgroundImage?: string; // Added prop for custom background
}

const PageHeader = ({ title, subtitle, breadcrumbs, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0">
        {/* If backgroundImage is provided, use it; otherwise, use the default Unsplash image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${backgroundImage || "https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?cs=srgb&dl=pexels-pixabay-219692.jpg&fm=jpg"}')` 
          }}
        />
        
        {/* Dark Overlay: Adjusted the gradient to be more transparent so you can see your photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" /> 
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-primary-foreground/60 hover:text-gold transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-primary-foreground/40" />
                {crumb.href ? (
                  <Link to={crumb.href} className="text-primary-foreground/60 hover:text-gold transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.name}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-primary-foreground/70 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
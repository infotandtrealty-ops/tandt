import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const aboutDropdownItems = [
  { name: "Overview", href: "/about/overview" },
  { name: "T and T Spirit", href: "/about/spirit" },
  { name: "Group Companies", href: "/about/group-companies" },
  { name: "Director's Message", href: "/about/directors" },
];

const mediaDropdownItems = [
  { name: "Videos", href: "/media/videos" },
  { name: "Blogs", href: "/media/blogs" },
  { name: "Press", href: "/media/press" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;
  const isActiveParent = (paths: string[]) => paths.some(p => location.pathname.startsWith(p));

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+918088113333" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              +91 8088113333
            </a>
            <a href="mailto:info@tandtrealty.in" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              info@tandtrealty.in
            </a>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <MapPin className="w-4 h-4" />
            <span>Sector 42, Gurgaon, Haryana</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          // Yahan bg-card ko replace karke light gray kiya gaya hai taaki logo visible ho
          isScrolled
            ? "bg-[#f5f5f5]/95 backdrop-blur-md shadow-medium py-3"
            : "bg-[#f5f5f5] py-4"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="T and T Realty" 
                className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/">
                <Button variant="nav" className={cn(isActive("/") && "text-gold font-semibold")}>
                  Home
                </Button>
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("about")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Button
                  variant="nav"
                  className={cn(
                    "flex items-center gap-1",
                    isActiveParent(["/about"]) && "text-gold font-semibold"
                  )}
                >
                  About Us
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === "about" && "rotate-180")} />
                </Button>
                <div
                  className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-200",
                    openDropdown === "about" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div className="bg-card rounded-lg shadow-medium border border-border py-2 min-w-[200px]">
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm hover:bg-muted hover:text-gold transition-colors",
                          isActive(item.href) && "text-gold bg-muted font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/services">
                <Button variant="nav" className={cn(isActive("/services") && "text-gold font-semibold")}>
                  Services
                </Button>
              </Link>

              <Link to="/projects">
                <Button variant="nav" className={cn(isActive("/projects") && "text-gold font-semibold")}>
                  Projects
                </Button>
              </Link>

              {/* Media Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("media")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Button
                  variant="nav"
                  className={cn(
                    "flex items-center gap-1",
                    isActiveParent(["/media"]) && "text-gold font-semibold"
                  )}
                >
                  Media
                  <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === "media" && "rotate-180")} />
                </Button>
                <div
                  className={cn(
                    "absolute top-full left-0 pt-2 transition-all duration-200",
                    openDropdown === "media" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div className="bg-card rounded-lg shadow-medium border border-border py-2 min-w-[160px]">
                    {mediaDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm hover:bg-muted hover:text-gold transition-colors",
                          isActive(item.href) && "text-gold bg-muted font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/contact">
                <Button variant="nav" className={cn(isActive("/contact") && "text-gold font-semibold")}>
                  Contact
                </Button>
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button variant="gold" size="lg">
                  Enquire Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-[#f5f5f5] border-t border-border shadow-medium transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container-custom py-4 space-y-2">
            <Link to="/" className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors">
              Home
            </Link>

            {/* About Section */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "about-mobile" ? null : "about-mobile")}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              >
                <span>About Us</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === "about-mobile" && "rotate-180")} />
              </button>
              <div className={cn("pl-4 space-y-1 overflow-hidden transition-all", openDropdown === "about-mobile" ? "max-h-48 py-2" : "max-h-0")}>
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-2 px-4 text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/services" className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors">
              Services
            </Link>
            <Link to="/projects" className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors">
              Projects
            </Link>

            {/* Media Section */}
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "media-mobile" ? null : "media-mobile")}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              >
                <span>Media</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === "media-mobile" && "rotate-180")} />
              </button>
              <div className={cn("pl-4 space-y-1 overflow-hidden transition-all", openDropdown === "media-mobile" ? "max-h-36 py-2" : "max-h-0")}>
                {mediaDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-2 px-4 text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors">
              Contact
            </Link>

            <div className="pt-4">
              <Link to="/contact" className="block">
                <Button variant="gold" className="w-full" size="lg">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
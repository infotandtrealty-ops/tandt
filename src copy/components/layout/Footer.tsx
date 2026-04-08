import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  // Social Media Data for easier maintenance
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/T and Trealtyin" },
    { icon: Instagram, href: "https://www.instagram.com/T and Trealtyin/" },
    { icon: Twitter, href: "https://x.com/T and Trealtyin" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/T and Trealtyin" },
    { icon: Youtube, href: "https://www.youtube.com/c/TandTRealty" },
  ];

  return (
    <footer className="bg-black text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="T and T Realty Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              A leading real estate consultancy company driving social and economic growth through real estate since 2014.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about/overview" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-gold">Projects</h4>
            <ul className="space-y-3">
              {[
                "Residential Properties",
                "Commercial Properties",
                "Retail Shops",
                "SCO Plots",
              ].map((item) => (
                <li key={item}>
                  <Link to="/projects" className="text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-gold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  2nd Floor, Ameya One,<br />
                  Golf Course Road, Sector 42,<br />
                  Gurgaon, Haryana 122022
                </p>
              </div>
              <a href="tel:+918088113333" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                <Phone className="w-5 h-5 text-gold" />
                +91 8088113333
              </a>
              <a href="mailto:info@tandtrealty.in" className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors text-sm">
                <Mail className="w-5 h-5 text-gold" />
                info@tandtrealty.in
              </a>
              <p className="text-[10px] text-primary-foreground/60 pt-2 tracking-widest uppercase">
                HARERA No: /Ext1/2023/222
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
            <p>Copyright © 2026 | T AND T REALTY | All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
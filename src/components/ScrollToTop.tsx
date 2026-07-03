import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  // useLocation se current path milta hai
  const { pathname } = useLocation();

  useEffect(() => {
    // Window ko top left (0,0) par scroll kar deta hai
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Aap "smooth" bhi use kar sakte hain
    });
  }, [pathname]); // Jab bhi URL ka path badlega, ye function chalega

  return null; // Ye component kuch render nahi karta, sirf logic handle karta hai
};

export default ScrollToTop ;
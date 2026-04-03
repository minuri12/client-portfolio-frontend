import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // This hook listens for route changes

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]); // Effect runs every time 'pathname' changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;

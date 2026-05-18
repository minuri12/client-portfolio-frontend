import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";
import "./NotFound.css";

function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found";
    window.scrollTo(0, 0);
  }, []);

  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="not-found-page">
      <h1 className="error-title" style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}>Page Not Found</h1>
      <Navbar />
      
      <div className="page-wrapper">
        <motion.div
          className="not-found-container"
          {...sectionReveal}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="not-found-content">
            <div className="error-code">404</div>
            <h1 className="error-title">
              Oops! Page not <span>found.</span>
            </h1>
            <p className="error-description">
              The page you're looking for seems to have wandered off into the digital void.
              <br />
              Don't worry, let's get you back on track.
            </p>
            <div className="error-actions">
              <Link to="/home" className="home-btn">
                <div className="btn-text">Go to Home</div>
              </Link>
              <Link to="/projects" className="projects-btn">
                <div className="btn-text">View Projects</div>
              </Link>
            </div>
          </div>
          
          <motion.div
            className="error-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
          </motion.div>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}

export default NotFound;

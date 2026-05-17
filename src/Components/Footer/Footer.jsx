import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="section-8" className="section-footer">
      <div className="container-footer">
        <div className="footer-top-wrapper">
         
       
            
            <div className="footer-link-column">
              
            
             
              
            
          </div>
        </div>
        <div className="footer-bottom-wrapper">
          <div className="footer-copyright-column"> 
            <div className="text-footer-copyright">© {currentYear} Minuri Hewage.</div>
            <div className="text-under-copyright">Designed with precision and care.</div>
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <Link to="/terms-conditions" className="footer-legal-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

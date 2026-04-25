import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="section-footer">
      <div className="container-footer">
        <div className="footer-bottom-wrapper">
          <div className="footer-bottom-left">
            <div className="text-footer-copyright">
              © 2026 Minuri Senara. All Rights Reserved.
            </div>
            <div className="text-under-copyright">
              Made with Love and Music (in every note, feel the heat).
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="text-last-updated">
              Last updated by Minuri on April 15, 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

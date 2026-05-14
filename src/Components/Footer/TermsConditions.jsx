import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";
import "../../Pages/Work/Work.css";

function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms & Conditions | Minuri";
  }, []);

  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="terms-conditions-page">
      <Navbar />
      <style>
        {`
          .terms-content [data-custom-class='body'], .terms-content [data-custom-class='body'] * {
            background: transparent !important;
            color: #c7c7c7 !important;
          }
          .terms-content [data-custom-class='title'], .terms-content [data-custom-class='title'] * {
            font-family: Arial !important;
            font-size: 24px !important;
            color: #ffffff !important;
          }
          .terms-content [data-custom-class='heading_1'], .terms-content [data-custom-class='heading_1'] * {
            font-family: Arial !important;
            font-size: 19px !important;
            color: #ffffff !important;
          }
          .terms-content [data-custom-class='heading_2'], .terms-content [data-custom-class='heading_2'] * {
            font-family: Arial !important;
            font-size: 17px !important;
            color: #ffffff !important;
          }
          .terms-content [data-custom-class='body_text'], .terms-content [data-custom-class='body_text'] * {
            color: #c7c7c7 !important;
            font-size: 14px !important;
          }
          .terms-content [data-custom-class='link'], .terms-content [data-custom-class='link'] * {
            color: #0af7ff !important;
            text-decoration: none;
          }
          .terms-content [data-custom-class='link']:hover {
            text-decoration: underline;
          }
          .terms-content ul {
            list-style-type: square;
            margin-left: 20px;
            color: #c7c7c7;
          }
          .terms-content table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #333;
          }
          .terms-content td, .terms-content th {
            border: 1px solid #333;
            padding: 8px;
          }
          .terms-content section {
            margin-bottom: 40px;
          }
        `}
      </style>
      <div className="page-wrapper">
        <motion.div className="overline-wrapper" {...sectionReveal}>
          <div className="icon-section-dot"></div>
          <h2 className="text-projectpage-overline">LEGAL</h2>
          
        </motion.div>
        <br />
        <br />
        <motion.div className="text-hero info-hero" {...sectionReveal}>
          Terms & <span>Conditions <br /></span>
        </motion.div>

        <motion.div 
          className="description terms-content" 
          {...sectionReveal} 
          style={{ marginTop: "40px", maxWidth: "1000px" }}
          dangerouslySetInnerHTML={{ __html: `
            <div data-custom-class="body">
             <div class="max-w-4xl mx-auto px-6 py-16 text-white">
              <div><strong><span style="font-size: 24px;"><span data-custom-class="title"><h1>TERMS & CONDITIONS</h1></span></span></strong></div>
              <p class="text-sm text-gray-400 mb-10">Last Updated: May 9, 2026</p>
              <br />
              <p class="mb-6 text-gray-300 leading-8">
                Welcome to
                <a href="https://minuri.me/home" target="_blank" rel="noopener noreferrer" class="text-white underline">
                  Minuri Portfolio
                </a>
                . By accessing and using this website, you agree to comply with and be
                bound by the following Terms & Conditions. Please read them carefully.
              </p>
              <br />
              <div class="space-y-10">
                <section>
                  <h2 class="text-2xl font-semibold mb-4">Website Usage</h2>
                  <p class="text-gray-300 leading-8">
                    This website is intended to showcase portfolio projects, professional
                    experience, blog articles, and creative work. You agree to use this
                    website only for lawful purposes and in a way that does not harm,
                    disrupt, or interfere with the website or its users.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">Intellectual Property</h2>
                  <p class="text-gray-300 leading-8">
                    All content on this website, including designs, text, graphics,
                    branding, layouts, and project materials, is owned by Minuri unless
                    otherwise stated. Unauthorized copying, reproduction, or redistribution
                    of any content is prohibited without permission.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">User Content</h2>
                  <p class="text-gray-300 leading-8">
                    If you submit messages, inquiries, or feedback through this website,
                    you agree that the information provided is accurate and does not violate
                    any laws or third-party rights.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">Third-Party Links</h2>
                  <p class="text-gray-300 leading-8">
                    This website may contain links to third-party websites or services.
                    Minuri is not responsible for the content, security, or privacy
                    practices of external websites.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">Disclaimer</h2>
                  <p class="text-gray-300 leading-8">
                    The information provided on this website is for general informational
                    and portfolio purposes only. While efforts are made to keep information
                    accurate and updated, no guarantees are made regarding completeness,
                    reliability, or accuracy.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                  <p class="text-gray-300 leading-8">
                    Minuri shall not be held responsible for any direct, indirect,
                    incidental, or consequential damages resulting from the use of this
                    website.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">Changes to Terms</h2>
                  <p class="text-gray-300 leading-8">
                    These Terms & Conditions may be updated or modified at any time without
                    prior notice. Continued use of the website after updates means you
                    accept the revised terms.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">Governing Law</h2>
                  <p class="text-gray-300 leading-8">
                    These Terms & Conditions shall be governed and interpreted in accordance
                    with the laws applicable in Sri Lanka.
                  </p>
                </section>

                <section>
                  <h2 class="text-2xl font-semibold mb-4">Contact</h2>
                  <p class="text-gray-300 leading-8">
                    If you have any questions regarding these Terms & Conditions, you can
                    contact me at:
                  </p>
                  <p class="text-white mt-4 font-medium">
                    Email: minurisenara@gmail.com
                  </p>
                </section>
              </div>
            </div>
            </div>
          ` }}
        >
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}

export default TermsConditions;
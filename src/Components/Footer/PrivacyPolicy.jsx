import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";
import "../../Pages/Work/Work.css";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | Minuri";
  }, []);

  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="privacy-policy-page">
      <Navbar />
      <style>
        {`
          .privacy-content [data-custom-class='body'], .privacy-content [data-custom-class='body'] * {
            background: transparent !important;
            color: #c7c7c7 !important;
          }
          .privacy-content [data-custom-class='title'], .privacy-content [data-custom-class='title'] * {
            font-family: Arial !important;
            font-size: 24px !important;
            color: #ffffff !important;
          }
          .privacy-content [data-custom-class='heading_1'], .privacy-content [data-custom-class='heading_1'] * {
            font-family: Arial !important;
            font-size: 19px !important;
            color: #ffffff !important;
          }
          .privacy-content [data-custom-class='heading_2'], .privacy-content [data-custom-class='heading_2'] * {
            font-family: Arial !important;
            font-size: 17px !important;
            color: #ffffff !important;
          }
          .privacy-content [data-custom-class='body_text'], .privacy-content [data-custom-class='body_text'] * {
            color: #c7c7c7 !important;
            font-size: 14px !important;
          }
          .privacy-content [data-custom-class='link'], .privacy-content [data-custom-class='link'] * {
            color: #0af7ff !important;
            text-decoration: none;
          }
          .privacy-content [data-custom-class='link']:hover {
            text-decoration: underline;
          }
          .privacy-content ul {
            list-style-type: square;
            margin-left: 20px;
            color: #c7c7c7;
          }
          .privacy-content table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #333;
          }
          .privacy-content td, .privacy-content th {
            border: 1px solid #333;
            padding: 8px;
          }
          .privacy-content section {
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
          Privacy <span>Policy <br /></span>
        </motion.div>

        <motion.div 
          className="description privacy-content" 
          {...sectionReveal} 
          style={{ marginTop: "40px", maxWidth: "1000px" }}
          dangerouslySetInnerHTML={{ __html: `
            <div data-custom-class="body">
             <div class="max-w-4xl mx-auto px-6 py-16 text-white">


  <p class="text-sm text-gray-400 mb-10">
    Last Updated: May 9, 2026
  </p>
<br />
  <p class="mb-6 text-gray-300 leading-8">
    Welcome to
    <a
      href="https://minuri.me/home"
      target="_blank"
      rel="noopener noreferrer"
      class="text-white underline"
    >
      Minuri Portfolio
    </a>
    . Your privacy is important to me. This Privacy Policy explains how your
    information is collected, used, and protected when you visit this website.
  </p>
<br /> 
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-4">
        Information I Collect
      </h2>

      <ul class="list-disc list-inside text-gray-300 space-y-2 leading-8">
        <li>Your name and email address when you contact me</li>
        <li>Information you voluntarily provide through forms</li>
        <li>
          Technical information such as browser type, device type, IP address,
          and pages visited
        </li>
        <li>
          Cookies and usage analytics to improve website performance and user
          experience
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">
        How Your Information Is Used
      </h2>

      <ul class="list-disc list-inside text-gray-300 space-y-2 leading-8">
        <li>Respond to inquiries and messages</li>
        <li>Improve the website experience</li>
        <li>Analyze website traffic and performance</li>
        <li>Maintain website security and functionality</li>
        <li>
          Share updates or project-related communication if requested
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Cookies</h2>

      <p class="text-gray-300 leading-8">
        This website may use cookies and similar technologies to improve your
        browsing experience. Cookies help understand visitor interactions and
        website performance.
      </p>

      <p class="text-gray-300 leading-8 mt-4">
        You can disable cookies through your browser settings if preferred.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">
        Third-Party Services
      </h2>

      <p class="text-gray-300 leading-8 mb-4">
        This website may use trusted third-party services such as:
      </p>

      <ul class="list-disc list-inside text-gray-300 space-y-2 leading-8">
        <li>Analytics tools</li>
        <li>Hosting providers</li>
        <li>Contact form services</li>
        <li>Embedded content platforms</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Data Protection</h2>

      <p class="text-gray-300 leading-8">
        Reasonable security measures are used to protect your personal
        information. However, no internet transmission or electronic storage
        method is completely secure.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">External Links</h2>

      <p class="text-gray-300 leading-8">
        This website may contain links to external websites. I am not
        responsible for the privacy practices or content of third-party
        websites.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">
        Children’s Privacy
      </h2>

      <p class="text-gray-300 leading-8">
        This website is not intended to knowingly collect personal information
        from children under 13 years old.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Your Rights</h2>

      <ul class="list-disc list-inside text-gray-300 space-y-2 leading-8">
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">
        Changes to This Privacy Policy
      </h2>

      <p class="text-gray-300 leading-8">
        This Privacy Policy may be updated occasionally. Changes will be
        reflected on this page with an updated revision date.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Contact</h2>

      <p class="text-gray-300 leading-8">
        If you have any questions regarding this Privacy Policy or your personal
        data, you can contact me at:
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

export default PrivacyPolicy;
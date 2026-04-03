import "./Projects.css";
import Arrow from "../../Assets/right-arrow.png";
import { Link } from "react-router-dom";
import Project1 from "../../Assets/Project1.png";
import Procover3 from "../../Assets/Project4Cover.png";
import ProImg from "../../Assets/ProImg.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import Node from "../../Assets/Node.png";
import firebase from "../../Assets/Firebase.png";
import Reactimg from "../../Assets/React.png";
import java from "../../Assets/Java.png";
import figma from "../../Assets/figma.png";
import Miro from "../../Assets/Miro.png";
import ProScreen01 from "../../Assets/Pro4Screen01.png";
import ProScreen02 from "../../Assets/Pro4Screen02.png";
import ProScreen03 from "../../Assets/Pro4Screen03.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
function Projects() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 8); // Adjust the timeout as necessary
  };

  useEffect(() => {
    document.title = "ShopSense";
  }, []);

  return (
    <div className="AboutSec4">
      <div className="project-detail-container">
      <div className="button-project-back" onClick={handleBack}>
        {" "}
        <div>
          <img src={Arrow} className="Arrow" alt="Right Arrow" />
        </div>
        <div className="text-button">Back</div>
      </div>

      <motion.div
        className="text-hero project-title"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
        ShopSense
      </motion.div>
      <motion.div
        className="text-projectpage-year"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
        Tap it Shop it
      </motion.div>

      <motion.div
        className="Project_img cover"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        animate={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
        <img
          src={Procover3}
          className="Procover"
          alt="Screenshot of Project 1"
        />
      </motion.div>

      <div className="container-overview">
        <div
          id="w-node-bb7f0fce-bf27-8d8f-e59b-dc1cf4c393e6-f6d44990"
          className="overview-left"
        >
          <div className="overview-text-wrapper role-right-indent">
            <div className="text-overview-overline">My Role</div>
            <div className="text-projectpage-body">
              <span className="text-highlighted-body">
                Developer , UI/UX designer
              </span>{" "}
              — Working on Prototype , FrontEnd(Admin Panel)
            </div>
          </div>
          <br />
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Team</div>
            <div className="text-projectpage-body team">Disara Mapalagama</div>
            <div className="text-projectpage-body team">
              Dushyantha Thilakarathna
            </div>
          </div>{" "}
          <br />
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Timeline &amp; Status</div>
            <div className="text-projectpage-body">Ongoing</div>
          </div>{" "}
          <br />
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Other Java Projects</div>
            <div className="text-projectpage-body">
              Hospital Management System,Market Management system,Nexo
            </div>
          </div>
        </div>
        <div
          id="w-node-ed50f48e-4c98-79fb-4846-00baefdc27d6-f6d44990"
          className="overview-right"
        >
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Overview</div>
            <div className="text-projectpage-body">
              ShopSense revolutionizes the online shopping experience for the
              visually impaired with a tactile, user-friendly interface.
              Available as a dedicated mobile app, it allows users to navigate
              and shop with ease using screen taps and artificial
              intelligence-powered narration. The app provides detailed guidance
              through product categories, size options, and personalized
              recommendations, ensuring a seamless shopping experience.
              <br />
              <br />
              For retailers, ShopSense offers a web-based admin panel to manage
              inventory, update product descriptions, and track customer
              interactions. This intuitive interface allows businesses to
              enhance their offerings for blind users, making online shopping
              more inclusive and accessible for everyone.
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="GrapicSection">
        <div
          className="Grapicscard"
        >
          <div className="headGrapic">Technologies</div>
          <div className="LogoPro TechStack">
            <img src={Reactimg} className="Tech" alt="Logo" />

            <img src={java} className="Tech" alt="Logo" />
            <img src={Node} className="Tech" alt="Logo" />
            <img src={firebase} className="Tech" alt="Logo" />

            <br />
            <img src={figma} className="Tech figma" alt="Logo" />

            <img src={Miro} className="Tech" alt="Logo" />
          </div>
        </div>
      </div>
      <br />
      <div className="double-column-block">
        <div className="text-projectpage-subheading">1. Motivation </div>
        <div className="content-trailing">
          <div className="text-projectpage-body">
            We identified a major gap: blind individuals often rely on sighted
            assistance for online clothing shopping, as current solutions aren't
            fully accessible. Despite targeting visually impaired users, these
            apps still require help to get started. With rising global visual
            impairments and a growing demand for accessibility, ShopSense steps
            in to provide independence. By integrating tactile feedback and
            AI-powered narration, we empower
            <span className="text-highlighted-body">blind users </span>to shop
            confidently on their own, offering a truly inclusive digital
            shopping experience.
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="double-column-block">
        <div className="text-projectpage-subheading">2. Features </div>
        <div className="content-trailing">
          <div className="text-projectpage-body">
            <span className="text-highlighted-body">• Admin Features </span>{" "}
            <br />
            ShopSense provides a web-based admin portal where retailers can
            manage inventory, update product listings, and track sales. This
            intuitive platform allows businesses to easily cater to the visually
            impaired community, ensuring their products are accessible and
            organized for a seamless shopping experience.
            <br />
            <br />
            <span className="text-highlighted-body">• User Features </span>
            <br />
            ShopSense offers a mobile app for visually impaired users, featuring
            tactile navigation through screen taps and voice-guided assistance
            powered by AI. The app helps users independently explore, select,
            and purchase clothing items, promoting accessibility and autonomy in
            online shopping.
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="container-highlights ">
        <div className="Project_img">
          <img src={ProImg} alt="Screenshot of Project 1" />
        </div>

        <div className="text-projectpage-year">
          Web & Mobile Project — June '24
        </div>
        <div className="TitleScreen">ShopSense - Tap it Shop it</div>
        <div>
          <img
            src={ProScreen01}
            className="pro1"
            alt="Screenshot of Project 1"
          />
        </div>

        <div>
          <img
            src={ProScreen02}
            className="pro1"
            alt="Screenshot of Project 1"
          />
        </div>

        <div>
          <img
            src={ProScreen03}
            className="pro1"
            alt="Screenshot of Project 1"
          />
        </div>

        <div className="line">""</div>

        <div className="TitleScreen">This project is currently ongoing.</div>
        <div className="text-projectpage-year">
          Web and Mobile Project — June '24
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="line2">""</div>
      <br />
      <br />
      <div class="text-projectpage-heading next-project">Next project:</div>
      <br />
      <br />
      <div className="card nextpro card3">
        <Link to="/projects" className="LinkTest">
          <div className="project-card-outline">
            <div className="project-card-outline2">
              <div className="CardHead">
                <div>
                  <div className="text-projectcard-title">Trophy</div>
                  <div className="text-projectcard-description">
                    Non-monetary token-based mobile application.
                  </div>
                </div>
                <div>
                  <img src={Arrow} className="Arrow" alt="Arrow Icon" />
                </div>
              </div>
              <div className="Project_img">
                <img
                  src={Project1}
                  className="Arrow32"
                  alt="Stadia Bluetooth Project"
                />
              </div>
            </div>
          </div>{" "}
        </Link>
      </div>

      <div className="container-footer">
        <div className="footer-bottom-wrapper">
          <div className="footer-bottom-left">
            <div className="text-footer-copyright">
              © 2024 Minuri Senara. All Rights Reserved.
            </div>
            <div className="text-under-copyright">
              Made with Love and Music (in every note, feel the heat).
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="text-last-updated">
              {" "}
              Last updated by Minuri on April 15, 2024
            </div>
          </div>
        </div>
      </div>

      <div
        data-w-id="ee1e9c3e-a1c6-2190-15b3-1daea0409ed7"
        className="section-footer"
      >
        <div className="container-footer">
          <div className="footer-bottom-wrapper">
            <div className="footer-bottom-left">
              <div className="text-footer-copyright">
                © 2024 Minuri Senara. All Rights Reserved.
              </div>
              <div className="text-under-copyright">
                Made with Love and Music (in every note, feel the heat).
              </div>
            </div>
            <div className="footer-bottom-right">
              <div className="text-last-updated">
                {" "}
                Last updated by Minuri on April 15, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Projects;

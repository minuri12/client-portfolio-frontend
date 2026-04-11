import "./Projects.css";
import Arrow from "../../Assets/right-arrow.png";
import { Link } from "react-router-dom";
import Procover3 from "../../Assets/Project3Cover.png";
import ProImg from "../../Assets/ProImg.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../Assets/CSS.png";
import html from "../../Assets/HTML.png";
import js from "../../Assets/JS.png";
import Mysql from "../../Assets/MySql.png";
import figma from "../../Assets/figma.png";
import PHP from "../../Assets/PHP.png";
import Boost from "../../Assets/Boost.png";
import Miro from "../../Assets/Miro.png";
import ProScreen01 from "../../Assets/Pro3Screen01.png";
import ProScreen02 from "../../Assets/Pro3Screen02.png";
import ProScreen03 from "../../Assets/Pro3Screen03.png";
import Project4 from "../../Assets/Project4.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
function Projects() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  const handleBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 8); // Adjust the timeout as necessary
  };

  useEffect(() => {
    document.title = "EDU";
  }, []);
  return (
    <div className="AboutSec3">
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
        whileInView={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
        EDU
      </motion.div>
      <motion.div
        className="text-projectpage-year"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        whileInView={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
        Online Learning and Teaching Platform
      </motion.div>

      <motion.div
        className="Project_img cover"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        whileInView={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        viewport={{ once: true, amount: 0.2 }}
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
              — Working on Prototype , FrontEnd & Backend
            </div>
          </div>
          <br />
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Team</div>
            <div className="text-projectpage-body team">Tharindu Hashan</div>
          </div>{" "}
          <br />
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Timeline &amp; Status</div>
            <div className="text-projectpage-body">1 Months</div>
          </div>
        </div>
        <div
          id="w-node-ed50f48e-4c98-79fb-4846-00baefdc27d6-f6d44990"
          className="overview-right"
        >
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Overview</div>
            <div className="text-projectpage-body">
              In today's digital age, EDU is transforming how we learn by
              offering an innovative online education platform. It breaks down
              traditional barriers to education and expands learning
              opportunities for students and educators alike. The platform is
              designed with user-friendly features such as course playlists,
              interactive video content, and productivity tools to keep learners
              engaged.
              <br />
              <br />
              Additionally, EDU provides administrative controls that allow for
              easy management and customization of courses, making it an ideal
              tool for enhancing both the learning experience and overall
              engagement.
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
            <img src={html} className="Tech" alt="Logo" />
            <img src={css} className="Tech" alt="Logo" />
            <img src={js} className="Tech" alt="Logo" />
            <img src={PHP} className="Tech" alt="Logo" />
            <img src={Mysql} className="Tech" alt="Logo" />
            <img src={Boost} className="Tech" alt="Logo" />

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
            The motivation behind the development of EDU lies in the desire to
            provide a user-centric platform that enhances learning experiences
            by offering engaging, interactive, and
            <span className="text-highlighted-body">
              {" "}
              flexible educational content.
            </span>
            , By integrating tools such as course playlists, interactive videos,
            and productivity features, EDU aims to empower both students and
            educators.
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="double-column-block">
        <div className="text-projectpage-subheading">2. Features </div>
        <div className="content-trailing">
          <div className="text-projectpage-body">
            <span className="text-highlighted-body">• Student Features </span>{" "}
            <br />
            Students can easily navigate course playlists, like and comment on
            videos, and access notes for improved learning. Productivity tools,
            including a calendar, to-do list, and sticky notes, help manage
            tasks, while students also have the option to register as tutors.
            <br />
            <br />
            <span className="text-highlighted-body">• Tutor Features </span>
            <br />
            Tutors can create course playlists, upload videos, and monitor
            student interactions. This insight allows tutors to adjust content
            and teaching methods to enhance engagement and learning outcomes.
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

        <div className="text-projectpage-year">Web Project — January '23</div>
        <div className="TitleScreen">
          EDU - Online Learning and Teaching Platform
        </div>
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

        <div className="TitleScreen">This is an archived project.</div>
        <div className="text-projectpage-year">Web Project — January '23</div>
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
        <Link to="/projects-4" className="LinkTest">
          <div className="project-card-outline">
            <div className="project-card-outline2">
              <div className="CardHead">
                <div>
                  <div className="text-projectcard-title">ShopSense</div>
                  <div className="text-projectcard-description">
                    Tap it Shop it
                  </div>
                </div>
                <div>
                  <img src={Arrow} className="Arrow" alt="Arrow Icon" />
                </div>
              </div>
              <div className="Project_img">
                <img
                  src={Project4}
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

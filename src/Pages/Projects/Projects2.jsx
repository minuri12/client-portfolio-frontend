import "./Projects.css";
import Arrow from "../../Assets/right-arrow.png";
import { Link } from "react-router-dom";
import Project3 from "../../Assets/Project3.png";
import Procover2 from "../../Assets/Project2Cover.png";
import ProImg from "../../Assets/ProImg.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../Assets/CSS.png";
import html from "../../Assets/HTML.png";
import js from "../../Assets/JS.png";
import Mysql from "../../Assets/MySql.png";
import figma from "../../Assets/figma.png";
import PHP from "../../Assets/PHP.png";
import Gemini from "../../Assets/Gemini.png";
import Boost from "../../Assets/Boost.png";
import Miro from "../../Assets/Miro.png";
import ProScreen01 from "../../Assets/Pro2Screen01.png";
import ProScreen02 from "../../Assets/Pro2Screen02.png";
import ProScreen03 from "../../Assets/Pro2Screen03.png";
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
    }, 8);
  };

  useEffect(() => {
    document.title = "MoodWave";
  }, []);

  return (
    <div className="AboutSec2">
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
        MoodWave
      </motion.div>
      <motion.div
        className="text-projectpage-year"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        whileInView={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
        Check the emotions of the music.
      </motion.div>

      <motion.div
        className="Project_img cover"
        initial={{ opacity: 0, y: 50 }} // start with 0 opacity and below the screen
        whileInView={{ opacity: 1, y: 0 }} // animate to full opacity and original position
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }} // control speed and easing
      >
        <img
          src={Procover2}
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
              — Working on Prototype , FrontEnd
            </div>
          </div>
          <br />
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Team</div>
            <div className="text-projectpage-body team">
              Jayaru Perera
              <br />
              Kushan Andarawava
              <br />
              K.Sathursana
            </div>
          </div>{" "}
          <br />
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Timeline &amp; Status</div>
            <div className="text-projectpage-body">3 Months</div>
          </div>
        </div>
        <div
          id="w-node-ed50f48e-4c98-79fb-4846-00baefdc27d6-f6d44990"
          className="overview-right"
        >
          <div className="overview-text-wrapper">
            <div className="text-overview-overline">Overview</div>
            <div className="text-projectpage-body">
              MoodWave is a personalized music platform that connects songs to
              the emotions they evoke, offering a unique listening experience
              tailored to each user's mood. By tagging songs with emotions,
              users contribute to an emotional database that powers the
              platform's emotion recognition technology.
              <br />
              <br />
              The platform rewards user engagement through points, badges, and
              challenges, fostering friendly competition on leaderboards. With
              social media integration, users can share their emotional music
              journey, creating a vibrant, connected community around music and
              emotion.
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="GrapicSection">
        <div
          className="Grapicscard1"
        >
          <div className="headGrapic">Technologies</div>
          <div className="LogoPro TechStack">
            <img src={html} className="Tech" alt="Logo" />
            <img src={css} className="Tech" alt="Logo" />
            <img src={js} className="Tech" alt="Logo" />
            <img src={PHP} className="Tech" alt="Logo" />
            <img src={Mysql} className="Tech" alt="Logo" />
            <img src={Boost} className="Tech" alt="Logo" />
            <img src={Gemini} className="Tech" alt="Logo" />
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
            Reduce the gap between music and emotions. Through technology, aims
            to create a user-friendly platform where users can engage with music
            on a deeper{" "}
            <span className="text-highlighted-body"> emotional level</span>,
            recognizing its complexity and enabling meaningful connections.
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="double-column-block">
        <div className="text-projectpage-subheading">2. Features </div>
        <div className="content-trailing">
          <div className="text-projectpage-body">
            <span className="text-highlighted-body">• Creator Side </span>{" "}
            <br />
            Creators should be able to sign up for an account by providing the
            necessary information. Once signed up, they can upload their music
            files and edit track details as needed. Additionally, creators
            should have the functionality to create new tasks or jobs for
            listeners, encouraging interaction with their content.
            <br />
            <br />
            <span className="text-highlighted-body">• Listener Side </span>
            <br />
            Listeners should be able to sign up for an account by providing the
            necessary information. They should have the ability to add emotions
            to tracks and interact with the content emotionally. Additionally,
            listeners should have the opportunity to earn money through their
            engagement and be able to withdraw their earnings easily.
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

        <div className="text-projectpage-year">Web Project — Augest '23</div>
        <div className="TitleScreen">
          MoodWave - Dive into emotions through music
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
        <div className="text-projectpage-year">Web Project — Augest '23</div>
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
      <div className="card nextpro card2">
        <Link to="/projects-3" className="LinkTest">
          <div className="project-card-outline">
            <div className="project-card-outline2">
              <div className="CardHead">
                <div>
                  <div className="text-projectcard-title">EDU</div>
                  <div className="text-projectcard-description">
                    Online Learning and Teaching Platform
                  </div>
                </div>
                <div>
                  <img src={Arrow} className="Arrow" alt="Arrow Icon" />
                </div>
              </div>
              <div className="Project_img">
                <img
                  src={Project3}
                  className="Arrow32"
                  alt="Stadia Bluetooth Project"
                />
              </div>
            </div>
          </div>{" "}
        </Link>
      </div>

      </div>
    </div>
  );
}

export default Projects;

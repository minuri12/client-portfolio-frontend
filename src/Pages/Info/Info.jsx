import "./Info.css";

import Ai from "../../Assets/Ai.png";
import css from "../../Assets/CSS.png";
import html from "../../Assets/HTML.png";
import js from "../../Assets/JS.png";
import PS from "../../Assets/PS.png";
import XD from "../../Assets/Xd.png";
import figma from "../../Assets/figma.png";
import webflow from "../../Assets/Webflow.png";
import Atliasan from "../../Assets/Atliasan.png";
import Jira from "../../Assets/Jira.png";
import MeVideo from "../../Assets/Info_Video/Me_Video.mp4";
import VideoThumbnail from "../../Assets/Info_Video/Thumbnail.jpg";
import Frame42 from "../../Assets/Me2.png";
import instergram from "../../Assets/instagram.png";
import Minuri3 from "../../Assets/Minuri3.png";
import behance from "../../Assets/behance.png";
import "../Work/Work.css";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";

function Info() {

  const [currentChapter, setCurrentChapter] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [lightColor, setLightColor] = useState("rgba(255, 255, 255, 0.4)");
  const [isMobileView, setIsMobileView] = useState(() => window.innerWidth <= 768);
  const videoRef = useRef(null);

  useEffect(() => {
    const colors = ["rgba(255, 0, 0, 0.4)", "rgba(255, 255, 0, 0.35)", "rgba(255, 255, 255, 0.4)"];
    setLightColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [currentChapter]);

  // Story chapters data
  const storyChapters = [
    {
      id: 1,
      title: "The Beginning",
      image: Frame42,
      description:
        "In my childhood, I wasn't good at studies from Grade 1 to 5. I always watched TV, played games, and my appearance even made people call me \"Sanee par\" even though I was a girl! ( Just a hindi Movie Character )\n\nMy first big challenge was the Grade 5 exam. My parents worked so hard to support me, but eventually, I failed it. That failure became a real turning point in my life.\n\nAfter that, I decided to become the \"study-focused\" kid. In our team, I wanted to be the geek, just like Hermione from Harry Potter (the only movie I watched at that time).",
      summary:
        "Oh, and by the way, I was always good at drawing since I was little."
    },
    {
      id: 2,
      title: "The Journey",
      image: Frame42,
      description:
        "Here's the funny part: after my big decision, I gave up watching TV to study more. Sometimes I would glance at the TV and then quickly look away, as if I was \"respecting\" my own decision.\n\nThen I focused fully on my studies, determined to be first in my class. I'm happy and proud to say I did it-I achieved my goal and even won many awards!\n\nMy second big challenge was the O/L exam. I passed it with 8As and 1B, winning my second big exam.",
      summary:
        "After that, I started studying math seriously-and honestly, I'm actually pretty good at it!"
    },
    {
      id: 3,
      title: "The Future",
      image: Frame42,
      description:
        "During this period, I had so many things to study, but I worked hard and passed my third big examination with \"A, B, C.\" Honestly, I think that's a pretty good result!\n\nAfter that, I applied to university and had to wait a long time for the selection. During this waiting period, I learned how to use tools like Photoshop and Illustrator, and actually started working as a graphic designer.",
      summary:
        "I think self-study really paid off for me!"
    },
    {
      id: 4,
      title: "University and Leadership",
      image: Frame42,
      description:
        "I got selected into university and started learning Software Engineering. During this time, I also had the opportunity to volunteer as a graphic designer for several events, including IEEE and Young Professionals. I even worked as the Design Team Lead and Vice Chair of several organizations, which marked the beginning of my volunteer journey.\n\nWhile at university, I participated in more than 30 competitions as part of a team, winning several development awards. In 2024, our team also won the SLASSCOM Ingenuity Award, executing multiple projects successfully.",
      summary:
        "This time in my life was amazing. I went a long way, achieved a lot, and had experiences that really made me who I am today."
    }
  ];

  const nextChapter = () => {
    setCurrentChapter((prev) => (prev + 1) % storyChapters.length);
  };

  const prevChapter = () => {
    setCurrentChapter((prev) => (prev - 1 + storyChapters.length) % storyChapters.length);
  };

  useEffect(() => {
    document.title = "Info";
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div>
      <div className="section-nav">
        <Navbar />
      </div>

      <div className="info-content">
      <motion.div
        class="overline-wrapper"
        {...sectionReveal}
      >
        <div class="icon-section-dot"></div>
        <div class="text-projectpage-overline">ABOUT ME</div>
      </motion.div>
      <br />
      <br />
      <motion.div
        class="text-hero info-hero"
        {...sectionReveal}
      >
        “ I’m a product designer who loves creating meaningful products that
        inspire me and bring excitement to everyone who uses them. ”
        {/* <span class="text-info-hero-serif"> user experiences.</span> */}
      </motion.div>

      <motion.div
        className="Aboutpart"
        {...sectionReveal}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="AboutText">
          I’m Minuri. I have experience in design and coding, and I love
          creating things that are meaningful, not just visually appealing. I
          care about how people feel when they interact with a design and aim to
          give users quick, seamless experiences. <br />
          <br />
          I’m a software engineering undergraduate with knowledge of the tech
          industry, and I’m passionate about low-code and no-code tools to bring
          ideas to life faster and more efficiently. I enjoy exploring
          user-centered solutions, experimenting with new technologies, and
          continuously improving my skills to create impactful digital
          experiences.
          <br />
          <br />
          <div className="care-heading">What I Care About:</div>
          <ul className="care-list">
            <li>Clean and visually appealing app structure</li>
            <li>Understanding how clients feel</li>
            <li>Calm and continuous communication</li>
            <li>Honest feedback</li>
            <li>Delivering designs on time</li>
            <li>Working with kind and open-minded people</li>
          </ul>
        </div>

        <div className="window-outline">
          <div className="Meholder">
            <video
              ref={videoRef}
              className="MeVideo"
              loop
              playsInline
              preload="metadata"
              poster={VideoThumbnail}
              aria-label="Video portrait of Minuri"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              onClick={toggleVideoPlayback}
            >
              <source src={MeVideo} type="video/mp4" />
            </video>

            <button
              type="button"
              className={`MePlayToggle ${isVideoPlaying ? "playing" : ""}`}
              onClick={toggleVideoPlayback}
              aria-label={isVideoPlaying ? "Pause video" : "Play video"}
            >
              {isVideoPlaying ? "❚❚" : "▶"}
            </button>
          </div>
        </div>
        {/* Decorative box removed from Aboutpart; moved to story section below */}
      </motion.div>

      <motion.div className="GrapicSection" {...sectionReveal}>
        <a
          className="Grapicscard"
          href="https://www.behance.net/minurihewage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="headGrapic">Tech Stack</div>
          <div className="TechStack">
            <img src={html} className="Tech" alt="Logo" />
            <img src={css} className="Tech" alt="Logo" />
            <img src={js} className="Tech" alt="Logo" />
            {/* <img src={node} className="Tech" alt="Logo" />
            <img src={PHP} className="Tech" alt="Logo" />
            <img src={Java} className="Tech" alt="Logo" />
            <img src={Reacts} className="Tech" alt="Logo" />
            <img src={flutter} className="Tech" alt="Logo" />
            <img src={Dart} className="Tech" alt="Logo" />
            <img src={mongo} className="Tech" alt="Logo" />
            <img src={Mysql} className="Tech" alt="Logo" />
            <img src={Firebase} className="Tech" alt="Logo" /> */}
            <img src={XD} className="Tech" alt="Logo" />
            <img src={figma} className="Tech figma" alt="Logo" />
            <img src={PS} className="Tech" alt="Logo" />
            <img src={Ai} className="Tech" alt="Logo" />
            <img src={Atliasan} className="Tech atliasan" alt="Logo" />
            <img src={Jira} className="Tech jira" alt="Logo" />
            <img src={webflow} className="Tech webflow last-tech" alt="Logo" />
          </div>
        </a>
      </motion.div>

      <motion.div className="story-carousel-section" {...sectionReveal} transition={{ duration: 1, ease: "easeOut" }}>
        <div className="story-header">
          <h2 className="story-title">Read My Story</h2>
        </div>

        <div className="story-chapters">
          <div className="story-carousel-container">
            <div className="story-content">
              <div className="story-card">
                {/* <div className="story-image-container">
                <img 
                  src={storyChapters[currentChapter].image} 
                  alt={storyChapters[currentChapter].title}
                  className="story-image"
                />
              </div> */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={storyChapters[currentChapter].id}
                    className="story-text"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <h3 className="chapter-title">
                      Chapter {String(storyChapters[currentChapter].id).padStart(2, "0")}
                    </h3>
                    <p className="chapter-description">
                      {storyChapters[currentChapter].description}
                    </p>
                    <p className="chapter-summary">
                      {`"${storyChapters[currentChapter].summary}"`}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="story-controls">
                <button
                  className={`nav-btn prev ${currentChapter === 0 ? "disabled" : ""}`}
                  onClick={currentChapter === 0 ? undefined : prevChapter}
                  disabled={currentChapter === 0}
                  aria-label="Previous chapter"
                >
                  ↑
                </button>

                <div className="chapter-indicator vertical">
                  {storyChapters.map((_, index) => (
                    <div
                      key={index}
                      className={`dot ${index === currentChapter ? "active" : ""}`}
                      onClick={() => setCurrentChapter(index)}
                    />
                  ))}
                </div>

                <button
                  className={`nav-btn next ${currentChapter === storyChapters.length - 1 ? "disabled" : ""}`}
                  onClick={
                    currentChapter === storyChapters.length - 1
                      ? undefined
                      : nextChapter
                  }
                  disabled={currentChapter === storyChapters.length - 1}
                  aria-label="Next chapter"
                >
                  {isMobileView ? "→" : "↓"}
                </button>
              </div>
            </div>
          </div>

          {/* Floating panel that shows the current chapter details on the right */}
          <aside 
            className="story-floating-box" 
            aria-live="polite"
            style={{
              "--card-light-color": lightColor,
              overflow: "hidden", // necessary for the pseudo-element moving light
              position: "relative"
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={storyChapters[currentChapter]?.id ?? currentChapter}
                className="sf-big-number"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {(
                  (storyChapters[currentChapter]?.id ?? currentChapter + 1)
                )
                  .toString()
                  .padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
          </aside>
        </div>
      </motion.div>

        <br />
        <br />
        <br />
        <motion.div
          className="part_one second"
          {...sectionReveal}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="row">
            <div className="imgholder">
              <img src={Minuri3} className="Minuri2" alt="Logo" />
            </div>
            <div className="text-section">
              <div className="head_name">
                How I can help <span>you?</span>
              </div>
              <div className="description seconDes">
                Let’s collaborate to create something exceptional! I'm excited to
                connect over new opportunities in software engineering.
              </div>
              <div className="button_section" style={{ width: "30%" }}>
                <div className="Logo_Social1">
                  <a href="https://www.behance.net/minurihewage" target="_blank" rel="noreferrer" className="contactbtn">
                    <div className="Touch">
                      <img src={behance} className="logomark" alt="Logo" />
                    </div>
                  </a>
                </div>

                <div className="Logo_Social2">
                  <a
                    href="https://www.instagram.com/minuri_senara/?next=%2F"
                    target="_blank"
                    rel="noreferrer"
                    className="contactbtn"
                  >
                    <div className="Touch">
                      <img src={instergram} className="logomark" alt="Logo" />{" "}
                    </div>
                  </a>
                </div>
                <a href="https://wa.me/94713775404?text=Hi%20Minuri%2C%20I%20would%20like%20to%20chat%20about%20your%20services." target="_blank" rel="noreferrer" className="contactbtn">
                  <div className="Touch">Get In Touch</div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
}

export default Info;

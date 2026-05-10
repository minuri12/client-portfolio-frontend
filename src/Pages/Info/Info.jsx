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
import Mini_Logo from "../../Assets/Mini_Logo.png";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "../Work/Work.css";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import Stack from "./Stack";

const toggleVideoPlayback = (ref) => {
  if (!ref.current) return;

  if (ref.current.paused) {
    ref.current.play();
  } else {
    ref.current.pause();
  }
};

const VideoWindow = ({ videoRef, isPlaying, onToggle, label }) => (
  <div className="window-outline">
    <div className="Meholder">
      <video
        ref={videoRef}
        className="MeVideo"
        loop
        playsInline
        preload="metadata"
        poster={VideoThumbnail}
        aria-label={label}
        onPlay={() => onToggle(true)}
        onPause={() => onToggle(false)}
        onClick={() => toggleVideoPlayback(videoRef)}
      >
        <source src={MeVideo} type="video/mp4" />
      </video>

      <button
        type="button"
        className={`MePlayToggle ${isPlaying ? "playing" : ""}`}
        onClick={() => toggleVideoPlayback(videoRef)}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
            <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86a1 1 0 00-1.5.86z" fill="currentColor"/>
          </svg>
        )}
      </button>
    </div>
  </div>
);

function Info() {

  const [currentChapter, setCurrentChapter] = useState(0);
  const [isAboutVideoPlaying, setIsAboutVideoPlaying] = useState(false);
  const [isStoryVideoPlaying, setIsStoryVideoPlaying] = useState(false);
  const [isMobileView, setIsMobileView] = useState(() => window.innerWidth <= 768);
  const aboutVideoRef = useRef(null);
  const storyVideoRef = useRef(null);

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

  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const chapterCards = useMemo(() => storyChapters.map((chapter) => (
    <div 
      className="story-card" 
      key={chapter.id}
      style={{ height: '100%', width: '100%', cursor: 'inherit', display: 'flex', alignItems: 'center' }}
    >
       <div className="story-text">
        <h3 className="chapter-title">
          Chapter {String(chapter.id).padStart(2, "0")}
        </h3>
        <p className="chapter-description">
          {chapter.description}
        </p>
        <p className="chapter-summary">
          {`"${chapter.summary}"`}
        </p>
      </div>
    </div>
  )), []);

  return (
    <div className="info-page">
      <div className="section-nav">
        <Navbar />
      </div>

      <div className="info-content" style={{ marginTop: "80px" }}>
      <motion.div
        className="overline-wrapper"
        {...sectionReveal}
      >
        <div className="icon-section-dot"></div>
        <h2 className="text-projectpage-overline">ABOUT ME</h2>
      </motion.div>
      <br />
      <br />
      <motion.div
        className="text-hero info-hero"
        {...sectionReveal}
      >
        I design, manage, and build <span>interactive</span> digital experiences that people genuinely enjoy. 
        {/* <span class="text-info-hero-serif"> user experiences.</span> */}
      </motion.div>

      <motion.div
        className="Aboutpart"
        {...sectionReveal}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <VideoWindow 
          videoRef={aboutVideoRef} 
          isPlaying={isAboutVideoPlaying} 
          onToggle={setIsAboutVideoPlaying}
          label="Video portrait of Minuri in About section"
        />

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
      </motion.div>

      <motion.div className="GrapicSection" {...sectionReveal}>
        <a
          className="Grapicscard1"
          href="https://www.behance.net/minurihewage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="headGrapic">Tech Stack</h2>
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
          <div className="story-chapters">
            <div className="story-carousel-container">
              <div className="story-content">
                {/* Mobile view: Show all chapters stacked vertically */}
                {isMobileView ? (
                  <div className="story-cards-stacked">
                    {storyChapters.map((chapter, index) => (
                      <motion.div
                        key={chapter.id}
                        className="story-card story-card-mobile"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="story-text">
                          <h3 className="chapter-title">
                            Chapter {String(chapter.id).padStart(2, "0")}
                          </h3>
                          <p className="chapter-description">
                            {chapter.description}
                          </p>
                          <p className="chapter-summary">
                            {`"${chapter.summary}"`}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // Desktop view: Show one chapter at a time with carousel
                  <>
                    <VideoWindow 
                      videoRef={storyVideoRef} 
                      isPlaying={isStoryVideoPlaying} 
                      onToggle={setIsStoryVideoPlaying}
                      label="Video portrait of Minuri in Story section"
                    />
                    <div style={{ width: '100%', maxWidth: '600px', height: '550px', position: 'relative' }}>
                      <Stack
                        randomRotation={true}
                        sensitivity={180}
                        sendToBackOnClick={true}
                        onTopCardChange={setCurrentChapter}
                        cards={chapterCards}
                        autoplay={isStoryVideoPlaying}
                        autoplayDelay={5000}
                        pauseOnHover={true}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
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

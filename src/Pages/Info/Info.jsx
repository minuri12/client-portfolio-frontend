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
import Arrow from "../../Assets/right-arrow.png";
import behance from "../../Assets/behance.png";
import Mini_Logo from "../../Assets/Mini_Logo.png";
import { Link } from "react-router-dom";
import "../Work/Work.css";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";
import Stack from "./Stack";
import { InteractiveHoverButton } from "../Work/InteractiveHoverButton";

const TARGET_TEXT = "Get In Touch";

const ScrambleButton = () => {
  return (
    <a
      href="https://wa.me/94713775404?text=Hi%20Minuri%2C%20I%20would%20like%20to%20chat%20about%20your%20services."
      target="_blank"
      rel="noreferrer"
      className="contactbtn group"
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="Touch relative overflow-hidden"
      >
        <span className="relative z-10">{TARGET_TEXT}</span>
      </motion.div>
    </a>
  );
};

const techLogos = [ // This is used by the tech stack section
  { src: html, alt: "HTML5" },
  { src: css, alt: "CSS3" },
  { src: js, alt: "JavaScript" },
  { src: XD, alt: "Adobe XD" },
  { src: figma, alt: "Figma" },
  { src: PS, alt: "Adobe Photoshop" },
  { src: Ai, alt: "Adobe Illustrator" },
  { src: Atliasan, alt: "Atlassian" },
  { src: Jira, alt: "Jira" },
  { src: webflow, alt: "Webflow" }
];

const testimonials = [ // This is used by the testimonials section
  {
    id: 1,
    name: "Shanka Visal",
    role: "Associate Software Engineer",
    text: "Minuri is a highly talented UI/UX designer and developer. She brings strong passion, creativity, and user-focused thinking into every project. Her work is both visually impressive and meaningful, making her a valuable team member.",
    linkedin: "https://www.linkedin.com/in/shankavisal/"
  },
  {
    id: 2,
    name: "Zulfa Zulfikar",
    role: "Project Manager",
    text: "Minuri played a key role as Design Lead in PearlHack 2.0. Her creativity, attention to detail, and consistency helped shape a strong event identity. She is reliable, collaborative, and delivers high-quality work even under tight deadlines.",
    linkedin: "https://www.linkedin.com/in/zulfa-zulfikar-5a643521a/"
  },
  {
    id: 3,
    name: "Avishka Athapattu",
    role: "Senior Software Engineer",
    text: "Minuri showed strong dedication, fast learning, and teamwork during Project Trophy. She contributed valuable ideas and consistently delivered quality results, making a strong impact on the team.",
    linkedin: "https://www.linkedin.com/in/avishka-athapattu-b9037a180/"
  },
  {
    id: 4,
    name: "Shavinda Wanniarachchi",
    role: "Talent Acquisition",
    text: "Minuri contributed as Member Coordinator and lead designer for IEEE StudPro 7.0. Her creativity, professionalism, and ability to deliver under pressure made her an essential part of the team.",
    linkedin: "https://www.linkedin.com/in/shavinda-wanniarachchi/"
  },
  {
    id: 5,
    name: "Abishethvarman V",
    role: "DevOps Engineer",
    text: "Minuri demonstrated exceptional design skills, dedication, and balance between academics and volunteering. She consistently delivered high-quality work and proved to be a reliable and talented team member.",
    linkedin: "https://www.linkedin.com/in/abishethvarman-v/"
  }
];

// Static Data moved outside to prevent re-creation on every render
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
  const [isMobileView, setIsMobileView] = useState(() => window.innerWidth <= 900);
  const [isSmallMobile, setIsSmallMobile] = useState(() => window.innerWidth <= 375);
  const [activeIndex, setActiveIndex] = useState(0);
  const aboutVideoRef = useRef(null); // Used by VideoWindow
  const storyVideoRef = useRef(null);
  const testimonialsWrapperRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Info";
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 900);
      setIsSmallMobile(window.innerWidth <= 375);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reusing the exact scroll animation logic from the Works page for Know About Me cards
  useEffect(() => {
    if (!isSmallMobile) return;

    const cards = document.querySelectorAll(".story-card-mobile");
    let rafId;

    const updateStack = (cardElements) => {
      const viewportHeight = window.innerHeight;
      const topOffset = 130; // Sticky distance from top (accounts for Navbar + gap)

      cardElements.forEach((card, index) => {
        if (index === cardElements.length - 1) return;

        const nextCard = cardElements[index + 1];
        const nextRect = nextCard.getBoundingClientRect();

        const dist = nextRect.top - topOffset;
        const range = viewportHeight - topOffset;

        let progress = 1 - dist / range;
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        // Identical scaling and brightness adjustments as implemented in Work.jsx
        card.style.transform = `scale(${1 - progress * 0.05})`;
        card.style.filter = `brightness(${1 - progress * 0.1})`;
      });
    };

    const runAnimation = () => {
      updateStack(cards);
      rafId = requestAnimationFrame(runAnimation);
    };

    rafId = requestAnimationFrame(runAnimation);

    return () => {
      cancelAnimationFrame(rafId);
      cards.forEach((card) => {
        card.style.transform = "";
        card.style.filter = "";
      });
    };
  }, [isSmallMobile]);

  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const scrollTestimonials = (direction) => { // Used by testimonial controls
    if (testimonialsWrapperRef.current) {
      const card = testimonialsWrapperRef.current.querySelector('.testimonial-card'); 
      const scrollAmount = card ? card.offsetWidth + 24 : 324; 
      testimonialsWrapperRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const testimonialCards = useMemo(() => testimonials.map((t) => (
    <div className="testimonial-card" key={t.id} style={{ height: '100%', width: '100%', margin: 0 }}>
      <div className="testimonial-quote">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H15.017C13.9124 7 13.017 7.89543 13.017 9V14M4.017 21L4.017 18C4.017 16.8954 4.9124 16 6.017 16H9.017C10.1216 16 11.017 15.1046 11.017 14V9C11.017 7.89543 10.1216 7 9.017 7H5.017C3.9124 7 3.017 7.89543 3.017 9V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className="testimonial-text">"{t.text}"</p>
      <div className="testimonial-author">
        <div className="author-info">
          <div className="author-name">{t.name}</div>
          <div className="author-role">{t.role}</div>
        </div>
        {t.linkedin && (
          <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="testimonial-linkedin" aria-label={`${t.name}'s LinkedIn Profile`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  )), []);

  const chapterCards = useMemo(() => storyChapters.map((chapter) => (
    <div 
      className="story-card" 
      key={chapter.id}
      style={{ height: '100%', width: '100%', cursor: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
       <div className="story-text" style={chapter.isSpecial ? { textAlign: 'center', width: '100%', justifyContent: 'center', alignItems: 'center' } : {}}>
        {chapter.isSpecial ? (
          <h2 style={{ color: 'white', fontSize: '24px', fontWeight: '500' }}>{chapter.title}</h2>
        ) : (
          <>
            <h3 className="chapter-title">
              Chapter {String(chapter.id).padStart(2, "0")}
            </h3>
            <p className="chapter-description">
              {chapter.description}
            </p>
            <p className="chapter-summary">
              {`"${chapter.summary}"`}
            </p>
          </>
        )}
      </div>
    </div>
  )), []);

  return (
    <div className="info-page">
      <div className="section-nav">
        <Navbar />
      </div>

      <div className="info-content">
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
          <div className="care-heading">What I Care About:</div>
          <ul className="care-list">
            <li>Clean and visually appealing app structure</li>
            <li>Understanding how clients feel</li>
            <li>Calm and continuous communication</li>
            <li>Honest feedback</li>
            <li>Delivering designs on time</li>
            <li>Working with kind and open-minded people</li>
          </ul>
                    <br />          <br />

                      <a 
                        href="https://wa.me/94713775404?text=Hi%20Minuri%2C%20I%20would%20like%20to%20chat%20about%20your%20services." 
                        target="_blank" 
                        rel="noreferrer" 
                        className="LinkTest" 
                        data-cursor="pointer"
                        style={{ textDecoration: 'none' }}
                      >
                        <InteractiveHoverButton>Let's Talk</InteractiveHoverButton>
                      </a>
                   
        </div>
      </motion.div>
 <motion.section
          id="section-testimonials"
          className="testimonials-section"
          {...sectionReveal}
        >
          <h2 className="Volhead">People I’ve Worked With</h2>
          <div className="slider-wrapper">
            {isSmallMobile && (
              <button className="mobile-arrow" onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>‹</button>
            )}
            <div className="testimonials-marquee-wrapper" ref={testimonialsWrapperRef}>
              <div 
                className="testimonials-track" 
                key={isSmallMobile ? "small-mobile-test" : (isMobileView ? "mobile-test" : "desktop-test")}
                style={isSmallMobile ? { "--slider-translate": `-${activeIndex * 100}%` } : {}}
              >
                {(isMobileView ? testimonials : [...testimonials, ...testimonials]).map((t, index) => (
                  <div key={`${t.id}-${index}`} className="testimonial-card">
                  <div className="testimonial-quote">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H15.017C13.9124 7 13.017 7.89543 13.017 9V14M4.017 21L4.017 18C4.017 16.8954 4.9124 16 6.017 16H9.017C10.1216 16 11.017 15.1046 11.017 14V9C11.017 7.89543 10.1216 7 9.017 7H5.017C3.9124 7 3.017 7.89543 3.017 9V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <div className="author-name">{t.name}</div>
                      <div className="author-role">{t.role}</div>
                    </div>
                    {t.linkedin && (
                      <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="testimonial-linkedin" aria-label={`${t.name}'s LinkedIn Profile`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                ))}
              </div>
            </div>
            {isSmallMobile && (
              <button className="mobile-arrow" onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}>›</button>
            )}
          </div>

          {isMobileView && !isSmallMobile && (
            <div className="testimonial-controls-mobile">
              <button className="nav-btn" onClick={() => scrollTestimonials("left")} aria-label="Previous testimonial">
                <img src={Arrow} style={{ transform: "rotate(180deg)", width: "20px" }} alt="Prev" />
              </button>
              <button className="nav-btn" onClick={() => scrollTestimonials("right")} aria-label="Next testimonial">
                <img src={Arrow} style={{ width: "20px" }} alt="Next" />
              </button>
            </div>
          )}
        </motion.section>
      <motion.div className="story-carousel-section" {...sectionReveal} transition={{ duration: 1, ease: "easeOut" }}>
          <h2 style={{ color: 'white', fontSize: '24px', marginBottom: '30px', fontWeight: '500', fontFamily: 'Neue Montreal, sans-serif', textAlign: 'center' }}>
            Know about me 
          </h2>

          <div className="story-chapters" style={!isMobileView ? { marginTop: "40px" } : {}}>
            <div className="story-carousel-container">
              <div className="story-content" style={!isMobileView ? { flexDirection: 'row', alignItems: 'stretch', gap: '40px', justifyContent: 'center' } : {}}>
                {/* Mobile view: Show all chapters stacked vertically */}
                {isMobileView ? (
                  <div className="story-cards-stacked">
                    {storyChapters.map((chapter, index) => (
                      <motion.div
                        key={chapter.id}
                        className="story-card story-card-mobile"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="story-text" style={chapter.isSpecial ? { textAlign: 'center', width: '100%', padding: '40px 0', justifyContent: 'center', alignItems: 'center' } : {}}>
                          {chapter.isSpecial ? (
                            <h2 style={{ color: 'white', fontSize: '24px', fontWeight: '500' }}>{chapter.title}</h2>
                          ) : (
                            <>
                              <h3 className="chapter-title">
                                Chapter {String(chapter.id).padStart(2, "0")}
                              </h3>
                              <p className="chapter-description">
                                {chapter.description}
                              </p>
                              <p className="chapter-summary">
                                {`"${chapter.summary}"`}
                              </p>
                            </>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // Desktop view: Show one chapter at a time with carousel
                  <>
                    <div style={{ width: '100%', height: '450px', position: 'relative', margin: '0 auto' }}>
                      <Stack
                        randomRotation={false}
                        sensitivity={180}
                        sendToBackOnClick={true}
                        onTopCardChange={setCurrentChapter}
                        cards={chapterCards}
                        autoplay={true}
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

      <motion.div className="what-i-use-section" {...sectionReveal}>
        <h2 style={{ color: 'white', fontSize: '24px', marginBottom: '30px', fontWeight: '500', textAlign: 'center' }}>
          What I Use
        </h2>
        <div className="carousel-container">
          <motion.div 
            className="tech-marquee-track"
            style={{ display: 'flex', width: 'fit-content', alignItems: 'center' }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...techLogos, ...techLogos].map((logo, index) => (
              <img 
                key={index} 
                src={logo.src} 
                className="Tech" 
                alt={logo.alt} 
                style={{ margin: '0 30px' }} 
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

        <motion.div
          id="section-7"
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
                <ScrambleButton />
              </div>
            </div>
          </div>
        </motion.div>
        <Footer />
      </div>
    </div>
  );
}

export default Info;

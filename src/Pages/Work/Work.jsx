import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Minuri from "../../Assets/Minuri.png";
import instergram from "../../Assets/instagram.png";
import YP from "../../Assets/YP.png";
import IEEE from "../../Assets/IEEE.png";
import WIE from "../../Assets/WIE.png";
import SIGHT from "../../Assets/SIGHT.png";
import SOCS from "../../Assets/SOCS.png";
import Minuri2 from "../../Assets/Minuri2.png";
import Minuri3 from "../../Assets/Minuri3.png";
import Arrow from "../../Assets/right-arrow.png";
import Project1 from "../../Assets/Project1.png";
import Project2 from "../../Assets/Project2.png";
import Project3 from "../../Assets/Project3.png";
import Project4 from "../../Assets/Project4.png";
import behance from "../../Assets/behance.png";
import PM from "../../Assets/PM.gif";
import Graphic from "../../Assets/Graphic.gif";
import UX from "../../Assets/UX.gif";
import Code from "../../Assets/Code.gif";
import "./Work.css";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./InteractiveHoverButton";

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

function Home() {

  const [scrollY, setScrollY] = useState(0);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogsError, setBlogsError] = useState("");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 900);
  const [isTabletView, setIsTabletView] = useState(window.innerWidth >= 768 && window.innerWidth <= 1024);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 768);
  const [isTestimonialMobile, setIsTestimonialMobile] = useState(window.innerWidth < 820);
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsWrapperRef = useRef(null);

const testimonials = [
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

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const volunteerTitleAnimation = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      textShadow: ["0 0 20px rgba(255,255,255,0)", "0 0 40px rgba(255,255,255,0.3)", "0 0 20px rgba(255,255,255,0)"]
    },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 1, ease: "easeOut" },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 900);
      setIsTabletView(window.innerWidth >= 768 && window.innerWidth <= 1024);
      setIsSmallMobile(window.innerWidth <= 768);
      setIsTestimonialMobile(window.innerWidth < 820);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      setBlogsLoading(true);
      setBlogsError("");

      try {
        const response = await fetch(`/api/blogs?published=true&limit=3&page=1`);
        if (!response.ok) {
          throw new Error("Failed to load recent blogs");
        }

        const payload = await response.json();
        const blogs = payload?.data?.blogs || [];
        setRecentBlogs(blogs);
      } catch (error) {
        setBlogsError("Unable to load recent blogs right now.");
      } finally {
        setBlogsLoading(false);
      }
    };

    fetchRecentBlogs();
  }, [API_BASE_URL]);

  useEffect(() => {
    if (!isMobileView && !isTabletView) return;

    const serviceCards = document.querySelectorAll("#section-5 .service-card");
    const projectCards = document.querySelectorAll("#section-4 .card");
    let rafId;

    const updateStack = (cards) => {
      const viewportHeight = window.innerHeight;
      const topOffset = 130; // Sticky distance from top (accounts for Navbar + gap)

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];
        const nextRect = nextCard.getBoundingClientRect();

        const dist = nextRect.top - topOffset;
        const range = viewportHeight - topOffset;

        let progress = 1 - dist / range;
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        card.style.transform = `scale(${1 - progress * 0.05})`;
        card.style.filter = `brightness(${1 - progress * 0.1})`;
      });
    };

    const runAnimation = () => {
      updateStack(serviceCards);
      updateStack(projectCards);
      rafId = requestAnimationFrame(runAnimation);
    };

    rafId = requestAnimationFrame(runAnimation);

    return () => {
      cancelAnimationFrame(rafId);
      [...serviceCards, ...projectCards].forEach((card) => {
        card.style.transform = "";
        card.style.filter = "";
      });
    };
  }, [isMobileView, isTabletView]);

  const getCoverImage = (coverImage, optimize = true) => {
    if (!coverImage) return Project1;
    
    // If it's a relative path, prepend API_BASE_URL
    let imageUrl = coverImage.startsWith("http") ? coverImage : `${API_BASE_URL}${coverImage}`;
    
    // Apply Cloudinary optimization for better performance
    // Only optimize Cloudinary URLs and when optimize flag is true
    if (optimize && imageUrl.includes('cloudinary.com/image/upload')) {
      // Replace '/upload/' with optimized transformation parameters
      imageUrl = imageUrl.replace(
        '/upload/',
        '/upload/w_800,h_600,c_fill,q_auto,f_auto/'
      );
    }
    
    return imageUrl;
  };

  const scrollTestimonials = (direction) => {
    if (testimonialsWrapperRef.current) {
      const card = testimonialsWrapperRef.current.querySelector('.testimonial-card'); // Get the first card to measure its width
      const scrollAmount = card ? card.offsetWidth + 24 : 324; // Dynamic width + gap
      testimonialsWrapperRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="work-page">
      <Navbar />

      <div className="page-wrapper">
        {/* Section 1: Main Content */}
        <motion.section
          id="section-1"
          className="main-content"
          {...sectionReveal}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="part_one ">
            <div className="first_bar">
              <div className="logo-block">
             
                <div className="LogoText">
                  <div className="text-logo">Hey, I’m Minuri.</div>
                  <div className="text-underlogo">Digital Product Designer</div>
                </div>
              </div>
              <div className="button_section">
                <div className="Logo_Social1">
                  <a href="https://www.behance.net/minurihewage" target="_blank" rel="noreferrer">
                    <img src={behance} className="logomark" alt="Logo" />
                  </a>
                </div>

                <div className="Logo_Social2">
                  <a
                    href="https://www.instagram.com/minuri_senara/?next=%2F"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instergram} className="logomark" alt="Logo" />{" "}
                  </a>
                </div>
                <ScrambleButton />
              </div>
            </div>
            <h1 className="head_name">
              Obsessed with crafting <span>seamless </span>
              <br /> digital experiences.
            </h1>
            <div className="description">
              Hey, I'm Minuri, welcome to my world. I love designing and building innovative,
              <br /> user-friendly solutions that solve real-world problems.
            </div>


          </div>

          <div className="part_two grediant">
            <div className="image-wrapper">
              <img
                src={Minuri}
                className="logomarkme"
                alt="Minuri"
                style={{
                  top: scrollY * 0.2 + "px",
                }}
              />
            </div>
          </div>
        </motion.section>

        {/* Section 2: Volunteer Experience */}
        <motion.section
          id="section-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="Volhead"
            {...volunteerTitleAnimation}
          >
            Volunteer Experience
          </motion.h2>
          <div className="VolExperiance">
            <div className="carousel-container">
              <motion.div 
                className="carousel-track"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                <motion.img 
                  src={YP} 
                  className="volunteer volunteer-yp" 
                  alt="YP - Young Professionals"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
                <motion.img 
                  src={IEEE} 
                  className="volunteer volunteer-ieee" 
                  alt="IEEE"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
                <motion.img 
                  src={WIE} 
                  className="volunteer volunteer-wie" 
                  alt="WIE - Women in Engineering"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.img 
                  src={SIGHT} 
                  className="volunteer volunteer-sight" 
                  alt="SIGHT"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.img 
                  src={SOCS} 
                  className="volunteer volunteer-socs" 
                  alt="SOCS"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                {/* Duplicate images for seamless loop */}
                <motion.img 
                  src={YP} 
                  className="volunteer volunteer-yp" 
                  alt="YP - Young Professionals"
                />
                <motion.img 
                  src={IEEE} 
                  className="volunteer volunteer-ieee" 
                  alt="IEEE"
                />
                <motion.img 
                  src={WIE} 
                  className="volunteer volunteer-wie" 
                  alt="WIE - Women in Engineering"
                />
                <motion.img 
                  src={SIGHT} 
                  className="volunteer volunteer-sight" 
                  alt="SIGHT"
                />
                <motion.img 
                  src={SOCS} 
                  className="volunteer volunteer-socs" 
                  alt="SOCS"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: What Makes Me Different */}
        <motion.section
          id="section-3"
          className="part_one second"
          {...sectionReveal}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="row">
            <div className="imgholder">
              <img src={Minuri2} className="Minuri2" alt="Logo" />
            </div>

            <div className="text-section help-card">
              <div className="head_name">
                What makes me <span>different?</span>
              </div>

              <div className="description seconDes">
                I design and build digital experiences that feel effortless, combining creativity,
                no-code, and design to create products people love.
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: My Projects Header and 4 Cards */}
        <section id="section-4" className="projects-container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="Volhead">My Projects</h2>
        </motion.div>
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="card card1">
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
                      <img src={Arrow} className="Arrow" alt="Logo" />
                    </div>
                  </div>
                  <div className="Project_img">
                    <img src={Project1} className="Arrow32" alt="Logo" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="card card2">
            <Link to="/projects-2" className="LinkTest">
              <div className="project-card-outline">
                <div className="project-card-outline2">
                  <div className="CardHead">
                    <div>
                      <div className="text-projectcard-title">MoodWave</div>
                      <div className="text-projectcard-description">
                        Check the emotions of the music.
                      T</div>
                    </div>
                    <div>
                      <img src={Arrow} className="Arrow" alt="Logo" />
                    </div>
                  </div>
                  <div className="Project_img">
                    <img src={Project2} className="Arrow32" alt="Logo" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="card" data-index="2">
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
                      <img src={Arrow} className="Arrow" alt="Logo" />
                    </div>
                  </div>
                  <div className="Project_img">
                    <img src={Project3} className="Arrow32" alt="Logo" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="card card3">
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
                      <img src={Arrow} className="Arrow" alt="Logo" />
                    </div>
                  </div>
                  <div className="Project_img">
                    <img src={Project4} className="Arrow32" alt="Logo" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="GrapicSection" 
          {...sectionReveal} 
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ marginTop: "56px" }}
        >
          <Link to="/more-projects" className="Centerbtn " data-cursor="pointer">
            <InteractiveHoverButton>More Projects</InteractiveHoverButton>
          </Link>
        </motion.div>
        </section>

        {/* Section 5: What I Do */}
        <motion.section
          id="section-5"
          className="services-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="services-title">
          <h2 className="Volhead">What I Do</h2>
          </div>

          <div className="services-grid">
            {[

              {
                id: 1,
                title: "Project Management",
                desc: "Managing tasks efficiently to deliver projects on time.",
              },

              {
                id: 2,
                title: "Graphic Design",
                desc: "Creating visuals and logos that bring ideas to life.",
              },

              {
                id: 3,
                title: "UX/UI Design",
                desc: "Designing user-friendly interfaces that look great and feel intuitive.",
              },


              {
                id: 4,
                title: "No-Code Product Creation",
                desc: "Quickly creating apps and websites using no-code tools.",
              },
            ].map((s) => {
              const icons = {
                1: PM,
                2: Graphic,
                3: UX,
                4: Code
              };

              return (
              <div key={s.id} className="service-card">
                <div className="service-card-header">
                  {icons[s.id] && (
                    <img src={icons[s.id]} alt={`${s.title} Animation`} style={{ width: '60px', height: '60px' }} />
                  )}
                </div>

                <div className="service-title">{s.title}</div>

                <div className="service-desc">
                  {s.desc}
                  {s.id === 1 && (
                    <div style={{ marginTop: '12px' }}>
        
                    </div>
                  )}
                </div>
              </div>
              );
            })}
          </div>
        </motion.section>

        {/* Section 6: Let's Talk Everything (Blogs) */}
        <motion.section
          id="section-6"
          className="recent-blogs-section"
          {...sectionReveal}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="Volhead">Let's Talk Everything</h2>

          {blogsLoading && <div className="recent-blogs-state">Loading recent blogs...</div>}
          {!blogsLoading && blogsError && <div className="recent-blogs-state">{blogsError}</div>}

          {!blogsLoading && !blogsError && (
            <div className="recent-blogs-grid">
              {recentBlogs.map((blog) => (
                <Link to={`/blog/${blog._id}`} className="recent-blog-card" key={blog._id}>
                  <div className="recent-blog-image-wrap">
                    <img
                      src={getCoverImage(blog.coverImage)}
                      alt={blog.title}
                      className="recent-blog-image"
                    />
                  </div>
                  <div className="recent-blog-title">{blog.title}</div>
                </Link>
              ))}
            </div>
          )}

          <div className="recent-blogs-more-wrap">
            <Link to="/blogs" className="Centerbtn " data-cursor="pointer">
              <InteractiveHoverButton>View More</InteractiveHoverButton>
            </Link>
          </div>
        </motion.section>

        {/* Section: People I've Worked With (Testimonials) */}
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
                key={isSmallMobile ? "small-mobile-test" : (isTestimonialMobile ? "mobile-test" : "desktop-test")}
                style={isSmallMobile ? { "--slider-translate": `-${activeIndex * 100}%` } : {}}
              >
                {(isTestimonialMobile ? testimonials : [...testimonials, ...testimonials]).map((t, index) => (
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

          {isTestimonialMobile && !isSmallMobile && (
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

        {/* Section 7: How I Can Help You */}
        <motion.section
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
        </motion.section>
        <Footer />
      </div>
    </div>

  );
}

export default Home;
      

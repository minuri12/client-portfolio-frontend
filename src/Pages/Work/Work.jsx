import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Minuri from "../../Assets/Minuri.png";
import Mini_Logo from "../../Assets/Mini_Logo.png";
import instergram from "../../Assets/instagram.png";
import Volunteer from "../../Assets/Volunteer.png";
import Minuri2 from "../../Assets/Minuri2.png";
import Minuri3 from "../../Assets/Minuri3.png";
import Arrow from "../../Assets/right-arrow.png";
import Project1 from "../../Assets/Project1.png";
import Project2 from "../../Assets/Project2.png";
import Project3 from "../../Assets/Project3.png";
import Project4 from "../../Assets/Project4.png";
import behance from "../../Assets/behance.png";
import "./Work.css";
import { motion } from "framer-motion";

function Home() {

  const [scrollY, setScrollY] = useState(0);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogsError, setBlogsError] = useState("");

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const sectionReveal = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  };



  useEffect(() => {
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
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
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

  return (
    <div>
      <Navbar />

      <div className="page-wrapper">
        <br />



        <motion.div
          className="main-content"
          {...sectionReveal}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="part_one ">
            <div className="first_bar">
              <div className="logo-block">
                <img src={Mini_Logo} className="logomark2" alt="Logo" />
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
                <a href="https://wa.me/94713775404?text=Hi%20Minuri%2C%20I%20would%20like%20to%20chat%20about%20your%20services." target="_blank" rel="noreferrer" className="contactbtn">
                  <div className="Touch">Get In Touch</div>
                </a>
              </div>
            </div>
            <div className="head_name">
              Obsessed with crafting <span>seamless </span>
              <br /> digital experiences.
            </div>
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
        </motion.div>

        <motion.div
          {...sectionReveal}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="Volhead">Volunteer Experience</div>
          <div className="VolExperiance">
            <img src={Volunteer} className="volunteer" alt="Logo" />
          </div>{" "}
        </motion.div>
        <br /> <br />

        <motion.div
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
        </motion.div>

        <motion.div {...sectionReveal} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="Volhead">My Projects</div>
        </motion.div>
        <br />

        <motion.div
          className="projectSection"
          {...sectionReveal}
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
                      </div>
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
        </motion.div>

        <motion.div className="projectSection" {...sectionReveal}>
          <div className="card">
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

        <motion.div className="GrapicSection" {...sectionReveal} transition={{ duration: 0.7, ease: "easeOut" }}>
          <Link to="/more-projects" className="Grapicscard more-projects-card">
            <div className="headGrapic">More Projects</div>
          </Link>
        </motion.div>

        {/* Services Section - added after projects */}
        <motion.div
          className="services-section"
          {...sectionReveal}
        >
          <div className="services-title">
            <div className="Volhead">What I Do</div>
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
            ].map((s) => (
              <div key={s.id} className="service-card">
                <div className="service-card-header">
                  <div className="service-badge">{s.id}</div>
                </div>

                <div className="service-title">{s.title}</div>

                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="recent-blogs-section"
          {...sectionReveal}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="Volhead">Let's Talk Everything</div>

          {blogsLoading && <div className="recent-blogs-state">Loading recent blogs...</div>}
          {!blogsLoading && blogsError && <div className="recent-blogs-state">{blogsError}</div>}

          {!blogsLoading && !blogsError && (
            <>
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

              <div className="recent-blogs-more-wrap">
                <Link to="/blogs" className="Grapicscard more-projects-card recent-blogs-more-btn">
                  <div className="headGrapic">View More</div>
                </Link>
              </div>
            </>
          )}
        </motion.div>
        {/* <div className="GrapicSection">
        <a
          className="Grapicscard"
          href="https://www.behance.net/minurihewage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={flyers} className="flyers" alt="Logo" />
          <div className="headGrapic">Branding</div>
        </a>
      </div>   */}
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
        <br />
        <br />

      </div>
    </div>
  );
}

export default Home;

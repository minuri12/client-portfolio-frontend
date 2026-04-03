import "./Navbar.css";
import Logo from "../../Assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Defined outside component so it's a stable reference (fixes exhaustive-deps)
const navItems = [
  { to: "/home", label: "Home" },
  { to: "/info", label: "Info" },
  { to: "/blogs", label: "Blogs" },
];

function Navbar() {
  const location = useLocation();
  const [isMenuOpen] = useState(false);

  const navCount = navItems.length;

  // Keep active index in state so UI updates reliably when route changes
  const [activeIndex, setActiveIndex] = useState(() => {
    const idx = navItems.findIndex((item) => item.to === location.pathname);
    return idx < 0 ? 0 : idx;
  });

  useEffect(() => {
    let idx = navItems.findIndex((item) => item.to === location.pathname);
    if (idx < 0) idx = 0;
    setActiveIndex(idx);
  }, [location.pathname]); // navItems is a module-level constant, not reactive

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  console.log("active index", activeIndex);

  return (
    <div className="section-nav">
      <div className="Navbar">
        <div className="logo-block Navbarfix">
          <img src={Logo} className="logomark" alt="Logo" />
          <div className="LogoText">
            <div className="text-logo">Minuri Senara</div>
            <div className="text-underlogo">Digital Product Designer</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-pill-wrapper ${isMenuOpen ? "active" : ""}`}>
          <div
            className={`nav-indicator-glow ${
              activeIndex === 0 ? "work" : activeIndex === 1 ? "info" : activeIndex === 2 ? "blogs" : "" 
            }`}
            style={{
              left: `calc(${activeIndex + 0.5} * (100% / ${navCount}) - 12px)`,
            }}
          ></div>

          <div className="nav-pill" style={{ "--nav-count": navCount }}>
            {navItems.map((item, idx) => (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-toggle w-inline-block ${idx === 0 ? "work" : ""}`}
              >
                <div className="text-nav-toggle">{item.label}</div>
              </Link>
            ))}
            <div
              className="nav-indicator-pill"
              style={{
                left: `calc(${activeIndex} * (100% / ${navCount}) + 6px)`,
                width: `calc(100% / ${navCount} - 8px)`,
              }}
            ></div>
          </div>
        </div>

        <div className="nav-pill pil2">
          <div
            className="nav-toggle work w-inline-block "
            onClick={toggleDropdown}
          >
            <div className="text-nav-toggle">@</div>
          </div>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div>
              <div
                className="mobile-popup-menu"
                style={{
                  display: "flex",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/mshewage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-menu-item w-inline-block"
                >
                  <div className="text-popup-menu">LinkedIn</div>
                  <img
                    src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg"
                    loading="lazy"
                    alt="LinkedIn icon"
                    className="icon-popup-external"
                  />
                </a>
                <a
                  href="https://drive.google.com/file/d/167oQtkvzh5bpspC_XLpRthUL3fq0th1F/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-menu-item w-inline-block"
                >
                  <div className="text-popup-menu">Resume</div>
                  <img
                    src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/644ca61c76573b18898f41f8_icon-open.svg"
                    loading="lazy"
                    alt="Resume icon"
                    className="icon-popup-external"
                  />
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="nav-right-wrapper">
          <div className="chip-socials-wrapper">
            <a
              href="https://www.linkedin.com/in/mshewage/"
              target="_blank"
              rel="noopener noreferrer"
              className="chip-socials w-inline-block"
            >
              <div className="text-socialnav">LinkedIn</div>
              <img
                src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                loading="lazy"
                alt="External"
                className="icon-external"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/167oQtkvzh5bpspC_XLpRthUL3fq0th1F/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="chip-socials w-inline-block"
            >
              <div className="text-socialnav">Resume</div>
              <img
                src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                loading="lazy"
                alt="External"
                className="icon-external"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useEffect, useState, useRef } from "react";
import "./RopeClimber.css";

function RopeClimber() {
  const [topPercent, setTopPercent] = useState(0);
  const [scrollDir, setScrollDir] = useState("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      setTopPercent(progress * 100);
      setScrollDir(scrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="rope-container">
      {/* Rope */}
      <div className="rope-line" />

      {/* Character */}
      <div
        className={`rope-climber ${scrollDir === "up" ? "climbing-up" : "climbing-down"}`}
        style={{ top: `calc(${topPercent}% * (100vh - 80px) / 100vh)` }}
      >
        🧗‍♀️
      </div>
    </div>
  );
}

export default RopeClimber;

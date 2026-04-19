import "./Progressbar.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.png";

const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function Progressbar({ value = 0, onComplete, showButton }) {
  const [present, setPresent] = useState(value);
  const navigate = useNavigate();

  useEffect(() => {
    if (present < 100) {
      const timer = setTimeout(() => setPresent((val) => val + 1), 40);
      return () => clearTimeout(timer);
    } else {
      navigate("/home");
    }
  }, [present, navigate]);



  const strokeOffset = CIRCUMFERENCE - (present / 100) * CIRCUMFERENCE;

  return (
    <div className="container">
      {/* Show ring + logo + percentage while loading */}
      {present < 100 ? (
        <>
          <div className="ring-wrapper">
            <svg className="ring-svg" viewBox="0 0 160 160" width="160" height="160">
              <circle
                className="ring-track"
                cx="80"
                cy="80"
                r={RADIUS}
                fill="none"
                strokeWidth="2"
              />
              <circle
                className="ring-progress"
                cx="80"
                cy="80"
                r={RADIUS}
                fill="none"
                strokeWidth="2"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={strokeOffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="ring-inner">
              <img src={Logo} alt="Logo" className="loading-logo" />
            </div>
          </div>

        </>
      ) : null}


    </div>
  );
}

export default Progressbar;

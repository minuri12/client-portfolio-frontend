import React from "react";
import "./LogoLoop.css";

const LogoLoop = ({ logos, direction = "up", speed = 30, logoHeight = 45, gap = 40 }) => {
  // Duplicate logos to ensure a seamless scrolling loop
  const listItems = [...logos, ...logos];

  return (
    <div className="logo-loop-container">
      <div 
        className={`logo-loop-track ${direction}`}
        style={{
          "--speed": `${speed}s`,
          "--gap": `${gap}px`,
          "--logo-height": `${logoHeight}px`
        }}
      >
        {listItems.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
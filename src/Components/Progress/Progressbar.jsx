import "./Progressbar.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Progressbar({ value = 0, onComplete, showButton }) {
  const [present, setPresent] = useState(value);
  const navigate = useNavigate();

  useEffect(() => {
    if (present < 100) {
      const timer = setTimeout(() => setPresent((newVal) => newVal + 1), 40);
      return () => clearTimeout(timer);
    } else {
      onComplete(); // Call onComplete when progress is 100%
    }
  }, [present, onComplete]);

  const handlebuttonclick = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="logo-block3">
        <div className="LogoText">
          <div className="text-logo loading">Minuri Senara</div>
        </div>
      </div>

      {/* Show the progress bar and text only if present is less than 100 */}
      {present < 100 ? (
        <>
          <div
            className="progressbarfill"
            style={{ width: `${present}%` }}
          ></div>
          <div className="progressbartext">{present}%</div>
        </>
      ) : null}

      {/* Show the button if present is 100% */}
      {present >= 100 && showButton && (
        <button className="start-button show" onClick={handlebuttonclick}>
          START
        </button>
      )}
    </div>
  );
}

export default Progressbar;

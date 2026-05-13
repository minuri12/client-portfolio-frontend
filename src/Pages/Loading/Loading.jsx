import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlurText from "./BlurText"; // Import the new BlurText component
import { motion } from "framer-motion"; // Import motion from framer-motion

function Loading() {
  // State to manage when the animation is complete and we can transition
  const [animationDone, setAnimationDone] = useState(false);
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationDone(true);
  };

  useEffect(() => {
    if (animationDone) {
      // Navigate to home page after a short delay once animation finishes
      const timer = setTimeout(() => {
        navigate("/home");
      }, 1000); // 1 second buffer after animation finishes
      return () => clearTimeout(timer);
    }
  }, [animationDone, navigate]);

  return (
    <div className="progress-wrapper" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100%',
      backgroundColor: '#000',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      <BlurText
        text="Hi ! I am Minuri"
        delay={400} // Slower delay between words
        stepDuration={1} // Slower blur transition for each word
        animateBy="words" // Animate word by word
        direction="top" // Words come from the top
        threshold={0} // Ensure it triggers immediately on mount
        onAnimationComplete={handleAnimationComplete}
        className="text-white"
        style={{ fontSize: isMobile ? '32px' : '120px', fontWeight: '600' }}
        // You can adjust other props like stepDuration, animationFrom, animationTo
      />
    </div>
  );
}

export default Loading;

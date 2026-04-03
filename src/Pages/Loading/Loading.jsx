import React, { useState, useEffect } from "react";
import Progressbar from "../../Components/Progress/Progressbar";

function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((val) => {
        if (val >= 100) {
          clearInterval(interval); // Stop when progress reaches 100
          return val;
        }
        return val + 1; // Increment progress
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Trigger this when progress completes
  const handleComplete = () => {
    // This can be used for any side effects on complete
  };

  return (
    <div className="progress-wrapper">
      <Progressbar
        value={progress}
        onComplete={handleComplete}
        showButton={true}
      />
    </div>
  );
}

export default Loading;

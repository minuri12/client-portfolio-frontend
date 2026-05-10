import React, { useMemo } from "react";
import { Cloud } from "react-icon-cloud";

const IconCloud = ({ images }) => {
  const renderedIcons = useMemo(() => {
    return images.map((img, index) => {
      const src = typeof img === 'string' ? img : img.src;
      const alt = typeof img === 'string' ? 'tech icon' : img.alt;
      return (
        <a key={index} href="#" onClick={(e) => e.preventDefault()}>
          <img src={src} alt={alt} width={42} height={42} title={alt} />
        </a>
      );
    });
  }, [images]);

  return (
    <Cloud
      containerProps={{
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        },
      }}
      options={{
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
      }}
    >
      {renderedIcons}
    </Cloud>
  );
};

export default IconCloud;
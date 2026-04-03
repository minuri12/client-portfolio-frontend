import { useEffect, useRef, useState } from "react";

const POINTER_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor='pointer']";

function supportsCustomCursor() {
  if (typeof window === "undefined") {
    return false;
  }

  const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return !coarsePointer && !reducedMotion;
}

function parseRgb(color) {
  if (!color || !color.startsWith("rgb")) {
    return null;
  }

  const values = color.match(/[\d.]+/g);

  if (!values || values.length < 3) {
    return null;
  }

  return {
    r: Number(values[0]),
    g: Number(values[1]),
    b: Number(values[2]),
    a: values[3] !== undefined ? Number(values[3]) : 1,
  };
}

function composite(fg, bg) {
  const outA = fg.a + bg.a * (1 - fg.a);

  if (outA <= 0) {
    return { r: 0, g: 0, b: 0, a: 0 };
  }

  return {
    r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / outA,
    g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / outA,
    b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / outA,
    a: outA,
  };
}

function getBackgroundAtPoint(x, y) {
  const target = document.elementFromPoint(x, y);
  const layers = [];

  let node = target;
  while (node && node instanceof Element) {
    const color = parseRgb(window.getComputedStyle(node).backgroundColor);
    if (color && color.a > 0) {
      layers.push(color);
    }
    node = node.parentElement;
  }

  const bodyColor = parseRgb(window.getComputedStyle(document.body).backgroundColor);
  if (bodyColor) {
    layers.push(bodyColor);
  }

  // Compose from root to target to approximate the visible background.
  let result = { r: 255, g: 255, b: 255, a: 1 };
  for (let i = layers.length - 1; i >= 0; i -= 1) {
    result = composite(layers[i], result);
  }

  return result;
}

function getCursorTheme(_color) {
  return {
    // Neutral charcoal tone between black and gray.
    dotBackground: "rgba(79, 79, 79, 0.96)",
    dotOutline: "rgba(96, 96, 96, 0.9)",
    dotShadow: "0 0 0 1px rgba(18, 18, 18, 0.35)",
    ringBorder: "rgba(110, 110, 110, 0.72)",
  };
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const frameRef = useRef(null);
  const hiddenRef = useRef(true);
  const themeRef = useRef("");

  const [hidden, setHidden] = useState(true);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (!supportsCustomCursor()) {
      return undefined;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return undefined;
    }

    document.documentElement.classList.add("custom-cursor-active");

    const mouse = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };

    const setTransform = (el, x, y) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const applyTheme = (x, y) => {
      const bgColor = getBackgroundAtPoint(x, y);
      const theme = getCursorTheme(bgColor);
      const themeKey = JSON.stringify(theme);

      if (themeRef.current === themeKey) {
        return;
      }

      themeRef.current = themeKey;

      dot.style.background = theme.dotBackground;
      dot.style.outlineColor = theme.dotOutline;
      dot.style.boxShadow = theme.dotShadow;
      ring.style.borderColor = theme.ringBorder;
    };

    const animate = () => {
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;

      setTransform(ring, ringPos.x, ringPos.y);
      frameRef.current = requestAnimationFrame(animate);
    };

    const onMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      setTransform(dot, mouse.x, mouse.y);
      applyTheme(mouse.x, mouse.y);

      if (hiddenRef.current) {
        hiddenRef.current = false;
        setHidden(false);
      }
    };

    const onMouseLeave = () => {
      hiddenRef.current = true;
      setHidden(true);
    };

    const onMouseEnter = () => {
      hiddenRef.current = false;
      setHidden(false);
    };

    const onOver = (event) => {
      if (event.target.closest(POINTER_SELECTOR)) {
        setIsHover(true);
      }
    };

    const onOut = (event) => {
      if (event.target.closest(POINTER_SELECTOR)) {
        setIsHover(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");

      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  if (!supportsCustomCursor()) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${hidden ? "cursor-hidden" : ""} ${isHover ? "cursor-hover" : ""}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${hidden ? "cursor-hidden" : ""} ${isHover ? "cursor-hover" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}

export default CustomCursor;

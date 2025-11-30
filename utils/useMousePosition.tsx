import { useState, useEffect } from "react";
import { MousePosition } from "../types";

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const updateTouchPosition = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const clearMousePosition = () => {
    setMousePosition({ x: null, y: null });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateTouchPosition);
    document.addEventListener("mouseleave", clearMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateTouchPosition);
      document.removeEventListener("mouseleave", clearMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
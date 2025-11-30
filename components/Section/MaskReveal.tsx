
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../utils/useMousePosition';
import { TOKENS, MASK_SIZE, MASK_IMAGE } from '../../constants';

interface MaskRevealProps {
  revealText: React.ReactNode;
  hiddenText: React.ReactNode;
}

const styles = {
  container: {
    base: `relative w-full h-screen flex items-center justify-center overflow-hidden ${TOKENS.Color.Base.Surface[1]} cursor-default`,
  },
  body: {
    base: `w-full h-full flex items-center justify-center px-8 md:px-20 text-center ${TOKENS.Type.Expressive.Display.L} ${TOKENS.Color.Base.Content[1]}`,
  },
  mask: {
    base: `absolute inset-0 w-full h-full flex items-center justify-center px-8 md:px-20 text-center ${TOKENS.Type.Expressive.Display.L} ${TOKENS.Color.Accent.Surface[1]} ${TOKENS.Color.Accent.Content[1]}`,
  },
};

const MaskReveal: React.FC<MaskRevealProps> = ({ revealText, hiddenText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const { x, y } = useMousePosition();
  
  // Check if mouse is active (present within the window)
  const isMouseActive = x !== null && y !== null;

  // Persist the last valid position to prevent jumping to center/0,0 when mouse leaves
  useEffect(() => {
    if (x !== null && y !== null) {
      setLastPosition({ x, y });
    }
  }, [x, y]);
  
  // Set size to 0 if mouse is not active to make it disappear
  const size = isMouseActive ? (isHovered ? MASK_SIZE.hover : MASK_SIZE.default) : 0;

  // Use current position if active, otherwise use last known position so it shrinks in place
  const currentX = isMouseActive && x !== null ? x : lastPosition.x;
  const currentY = isMouseActive && y !== null ? y : lastPosition.y;

  const maskPosition = `${currentX - (size / 2)}px ${currentY - (size / 2)}px`;

  return (
    <div className={styles.container.base}>
      {/* The Mask Layer (Top) - Reveals this when mask is over it */}
      <motion.div
        className={styles.mask.base}
        animate={{
          WebkitMaskPosition: maskPosition,
          WebkitMaskSize: `${size}px`,
        } as any}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          maskImage: MASK_IMAGE,
          WebkitMaskImage: MASK_IMAGE,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <div 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-[1000px] w-full p-10"
        >
          {revealText}
        </div>
      </motion.div>

      {/* The Body Layer (Bottom) - Visible by default */}
      <div className={styles.body.base}>
        <div className="max-w-[1000px] w-full p-10">
          {hiddenText}
        </div>
      </div>
    </div>
  );
};

export default MaskReveal;

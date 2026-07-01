'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const boundingBox = ref.current?.getBoundingClientRect();
    if (!boundingBox) return;

    const { left, top, width, height } = boundingBox;
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate mouse distance offset from the true center point
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Setting a 35% magnetic drag multiplier limit
    setPosition({ x: distanceX * 0.35, y: distanceY * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
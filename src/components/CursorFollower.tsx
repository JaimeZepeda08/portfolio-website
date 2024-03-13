"use client";

import React, { useState, useEffect } from "react";

type CursorPosition = {
  x: number;
  y: number;
};

type CursorFollowerProps = {
  className?: string;
};

const CursorFollower: React.FC<CursorFollowerProps> = ({ className }) => {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
      }}
      className={`fixed w-80 h-80 rounded-full bg-green-500/25 filter blur-[80px] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${className}`}
    />
  );
};

export default CursorFollower;


"use client"
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let targetX = 0;
    let targetY = 0;
    const speed = 0.2; // Cursor movement smoothness
    const dotSpeed = 0.1; // Dot movement smoothness (slower for trailing effect)

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const handleScroll = () => {
      setScrolling(true);
      setTimeout(() => setScrolling(false), 200); // Disable trailing after scrolling stops
    };

    const animateCursor = () => {
      cursorX += (targetX - cursorX) * speed;
      cursorY += (targetY - cursorY) * speed;
      setPosition({ x: cursorX, y: cursorY });

      dotX += (targetX - dotX) * dotSpeed; // Dot moves slower than the cursor
      dotY += (targetY - dotY) * dotSpeed;
      setDotPosition({ x: dotX, y: dotY });

      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseDown = () => {
      setActive(true);
    };

    const handleMouseUp = () => {
      setActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll);

    animateCursor(); // Start the animation

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hidden ? 'custom-cursor--hidden' : ''} ${active ? 'custom-cursor--active' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`custom-cursor__dot ${scrolling ? 'custom-cursor__dot--scrolling' : ''}`}
        style={{
          transform: `translate(${dotPosition.x - position.x}px, ${dotPosition.y - position.y}px)`, // Adjust dot's position relative to the main cursor
        }}
      />
    </div>
  );
};

export default CustomCursor;

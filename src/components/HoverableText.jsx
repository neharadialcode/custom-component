import React, { useState } from "react";

const HoverableText = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 50, y: 50 });
  };
  return (
    <div>
      <div className="container">
        <div
          className="hoverable-text"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          Hover me!
        </div>
      </div>
    </div>
  );
};

export default HoverableText;

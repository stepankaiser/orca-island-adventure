import React from "react";

interface IslandProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Island: React.FC<IslandProps> = ({ x, y, width, height }) => {
  return (
    <div
      className="absolute rounded-full bg-island-light border-2 border-island-dark"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};

export default Island;
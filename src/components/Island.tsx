import React from "react";

interface IslandProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

const Island: React.FC<IslandProps> = ({ x, y, width, height }) => {
  // Randomly choose between different island shapes
  const shapeType = Math.floor(Math.random() * 3);
  
  return (
    <div
      className="absolute"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* Base island */}
      <div className={`absolute inset-0 bg-island-light border-2 border-island-dark ${
        shapeType === 0 ? 'rounded-full' : 
        shapeType === 1 ? 'rounded-tr-[60%] rounded-bl-[60%] rounded-tl-[30%] rounded-br-[30%]' :
        'rounded-tl-[70%] rounded-br-[70%] rounded-tr-[40%] rounded-bl-[40%]'
      }`}>
        {/* Christmas decorations */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          {Math.random() > 0.5 ? '🎄' : '⭐'}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {Math.random() > 0.5 ? '🎁' : '❄️'}
        </div>
      </div>
    </div>
  );
};

export default Island;
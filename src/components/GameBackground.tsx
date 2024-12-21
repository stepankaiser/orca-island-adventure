import React from 'react';

const GameBackground: React.FC = () => {
  return (
    <>
      {/* Realistic wave effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255, 255, 255, 0.1) 20px,
              rgba(255, 255, 255, 0.1) 40px
            )
          `,
          animation: "wave 20s linear infinite",
        }}
      />

      {/* Enhanced water reflection effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 50% 50%,
              rgba(255, 255, 255, 0.4) 0%,
              transparent 60%
            )
          `,
          animation: "reflection 4s ease-in-out infinite",
        }}
      />

      {/* Improved snowfall effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white transform scale-75 opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fall ${3 + Math.random() * 5}s linear infinite`,
              filter: "blur(0.5px)",
            }}
          >
            ❄️
          </div>
        ))}
      </div>
    </>
  );
};

export default GameBackground;
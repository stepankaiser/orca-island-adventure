import React from "react";

interface OrcaProps {
  position: { x: number; y: number };
}

const Orca: React.FC<OrcaProps> = ({ position }) => {
  return (
    <div
      className="absolute w-20 h-12 animate-swimming"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "all 0.1s ease-out",
      }}
    >
      <svg viewBox="0 0 100 60" className="w-full h-full">
        {/* Main body */}
        <path
          d="M90 30c0 11-19 20-45 20S0 41 0 30 19 10 45 10s45 9 45 20z"
          fill="#1a1a1a"
        />
        {/* White patch */}
        <path
          d="M45 40c15 0 35-5 35-10s-20-10-35-10S10 25 10 30s20 10 35 10z"
          fill="#ffffff"
        />
        {/* Eye */}
        <circle cx="75" cy="25" r="3" fill="#000000" />
        <circle cx="75" cy="24.5" r="1" fill="#ffffff" />
        {/* Dorsal fin */}
        <path
          d="M45 10l10-8v8z"
          fill="#1a1a1a"
        />
        {/* Tail fin */}
        <path
          d="M5 30l-5-8 5-8z"
          fill="#1a1a1a"
        />
      </svg>
    </div>
  );
};

export default Orca;
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
        {/* White patch - more detailed */}
        <path
          d="M45 40c15 0 35-5 35-10s-20-10-35-10S10 25 10 30s20 10 35 10z"
          fill="#ffffff"
        />
        {/* Gray shading for depth */}
        <path
          d="M45 35c10 0 25-3 25-7s-15-7-25-7S20 24 20 28s15 7 25 7z"
          fill="#f0f0f0"
          opacity="0.3"
        />
        {/* Eye with more detail */}
        <circle cx="75" cy="25" r="3" fill="#000000" />
        <circle cx="75" cy="24.5" r="1" fill="#ffffff" />
        <circle cx="74.5" cy="24" r="0.5" fill="#ffffff" opacity="0.8" />
        {/* Dorsal fin with curve */}
        <path
          d="M45 10c0 0 5-4 8-7s4-3 4-1-2 6-4 7-8 1-8 1z"
          fill="#1a1a1a"
        />
        {/* Tail fin with better shape */}
        <path
          d="M5 30c0 0-5-4-5-8s2-8 5-8c-2 4-2 8 0 16z"
          fill="#1a1a1a"
        />
        {/* Pectoral fin */}
        <path
          d="M40 35c-2 2-4 4-6 4s-4-2-2-4 6-2 8 0z"
          fill="#1a1a1a"
        />
      </svg>
    </div>
  );
};

export default Orca;
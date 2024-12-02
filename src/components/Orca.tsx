import React from "react";

interface OrcaProps {
  position: { x: number; y: number };
}

const Orca: React.FC<OrcaProps> = ({ position }) => {
  return (
    <div
      className="absolute w-16 h-10 animate-swimming"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "all 0.1s ease-out",
      }}
    >
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path
          d="M90 30c0 11-19 20-45 20S0 41 0 30 19 10 45 10s45 9 45 20z"
          fill="#000000"
        />
        <circle cx="75" cy="25" r="5" fill="#ffffff" />
        <path
          d="M45 40c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export default Orca;
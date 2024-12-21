import React from "react";

interface OrcaProps {
  position: { x: number; y: number };
}

const Orca: React.FC<OrcaProps> = ({ position }) => {
  return (
    <div
      className="absolute"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "all 0.1s ease-out",
        transform: "scale(-1, 1)", // Flip horizontally to face right
        width: "120px", // Increased size for better visibility
        height: "80px",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1518877593221-1f28583780b4"
        alt="Orca"
        className="w-full h-full object-cover rounded-lg shadow-lg"
        style={{
          filter: "brightness(1.1) contrast(1.1)", // Enhance image quality
          WebkitFilter: "brightness(1.1) contrast(1.1)",
        }}
      />
    </div>
  );
};

export default Orca;
import React, { useState, useEffect, useCallback } from "react";
import Orca from "./Orca";
import Island from "./Island";
import RewardScreen from "./RewardScreen";

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const MOVEMENT_STEP = 5;

const islands = [
  { x: 200, y: 100, width: 100, height: 100 },
  { x: 400, y: 300, width: 120, height: 120 },
  { x: 600, y: 200, width: 90, height: 90 },
];

const Game: React.FC = () => {
  const [position, setPosition] = useState({ x: 50, y: GAME_HEIGHT / 2 });
  const [showReward, setShowReward] = useState(false);

  const checkCollision = useCallback(() => {
    const orcaWidth = 64;
    const orcaHeight = 40;

    // Check if orca reached the finish line
    if (position.x > GAME_WIDTH - 100) {
      setShowReward(true);
      return;
    }

    // Check collision with islands
    for (const island of islands) {
      if (
        position.x < island.x + island.width &&
        position.x + orcaWidth > island.x &&
        position.y < island.y + island.height &&
        position.y + orcaHeight > island.y
      ) {
        // Reset position on collision
        setPosition({ x: 50, y: GAME_HEIGHT / 2 });
        return;
      }
    }
  }, [position]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newPosition = { ...position };

      switch (e.key) {
        case "ArrowUp":
          newPosition.y = Math.max(0, position.y - MOVEMENT_STEP);
          break;
        case "ArrowDown":
          newPosition.y = Math.min(GAME_HEIGHT - 40, position.y + MOVEMENT_STEP);
          break;
        case "ArrowLeft":
          newPosition.x = Math.max(0, position.x - MOVEMENT_STEP);
          break;
        case "ArrowRight":
          newPosition.x = Math.min(GAME_WIDTH - 64, position.x + MOVEMENT_STEP);
          break;
      }

      setPosition(newPosition);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [position]);

  useEffect(() => {
    checkCollision();
  }, [position, checkCollision]);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg mx-auto"
      style={{
        width: `${GAME_WIDTH}px`,
        height: `${GAME_HEIGHT}px`,
        background: "linear-gradient(to bottom, #D3E4FD, #0EA5E9)",
      }}
    >
      {/* Snowfall effect */}
      <div className="absolute inset-0 animate-snow opacity-50">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fall ${2 + Math.random() * 3}s linear infinite`,
            }}
          >
            ❄️
          </div>
        ))}
      </div>

      {/* Wave effect */}
      <div className="absolute inset-0 animate-wave opacity-30">
        <svg width="100%" height="100%">
          <pattern
            id="wave"
            x="0"
            y="0"
            width="100"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 5 Q 25 0, 50 5 T 100 5"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      {islands.map((island, index) => (
        <Island key={index} {...island} />
      ))}

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-40 bg-island-light border-2 border-island-dark rounded-l-full flex items-center justify-center">
        <span className="text-4xl">🎄</span>
      </div>

      <Orca position={position} />

      {showReward && <RewardScreen />}
    </div>
  );
};

export default Game;
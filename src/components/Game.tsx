import React, { useState, useEffect, useCallback } from "react";
import Orca from "./Orca";
import Island from "./Island";
import RewardScreen from "./RewardScreen";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

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
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const isMobile = useIsMobile();

  const moveOrca = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    setPosition(prev => {
      const newPosition = { ...prev };
      switch (direction) {
        case 'up':
          newPosition.y = Math.max(0, prev.y - MOVEMENT_STEP);
          break;
        case 'down':
          newPosition.y = Math.min(GAME_HEIGHT - 40, prev.y + MOVEMENT_STEP);
          break;
        case 'left':
          newPosition.x = Math.max(0, prev.x - MOVEMENT_STEP);
          break;
        case 'right':
          newPosition.x = Math.min(GAME_WIDTH - 64, prev.x + MOVEMENT_STEP);
          break;
      }
      return newPosition;
    });
  }, []);

  const checkCollision = useCallback(() => {
    const orcaWidth = 64;
    const orcaHeight = 40;

    if (position.x > GAME_WIDTH - 100) {
      setShowReward(true);
      return;
    }

    for (const island of islands) {
      if (
        position.x < island.x + island.width &&
        position.x + orcaWidth > island.x &&
        position.y < island.y + island.height &&
        position.y + orcaHeight > island.y
      ) {
        setPosition({ x: 50, y: GAME_HEIGHT / 2 });
        return;
      }
    }
  }, [position]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          moveOrca('up');
          break;
        case "ArrowDown":
          moveOrca('down');
          break;
        case "ArrowLeft":
          moveOrca('left');
          break;
        case "ArrowRight":
          moveOrca('right');
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [moveOrca]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    
    const newPosition = {
      x: Math.max(0, Math.min(GAME_WIDTH - 64, position.x + deltaX / 10)),
      y: Math.max(0, Math.min(GAME_HEIGHT - 40, position.y + deltaY / 10))
    };

    setPosition(newPosition);
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  useEffect(() => {
    checkCollision();
  }, [position, checkCollision]);

  const scale = isMobile ? Math.min(window.innerWidth / GAME_WIDTH, 0.8) : 1;

  return (
    <div className="w-full overflow-x-hidden px-2">
      <div
        className="relative overflow-hidden rounded-lg shadow-xl mx-auto touch-none"
        style={{
          width: `${GAME_WIDTH}px`,
          height: `${GAME_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          background: `
            linear-gradient(
              180deg, 
              #2563eb 0%,
              #0EA5E9 30%,
              #38bdf8 60%,
              #7dd3fc 100%
            )
          `,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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

        {islands.map((island, index) => (
          <Island key={index} {...island} />
        ))}

        {/* Enhanced finish line */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-40 bg-gradient-to-r from-island-light to-island-dark border-2 border-island-dark rounded-l-full flex items-center justify-center shadow-lg">
          <span className="text-4xl transform hover:scale-110 transition-transform">🎄</span>
        </div>

        <Orca position={position} />

        {showReward && <RewardScreen />}

        {/* Mobile controls */}
        {isMobile && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <button
              className="p-3 bg-white/30 rounded-full backdrop-blur-sm active:bg-white/50 transition-colors"
              onClick={() => moveOrca('up')}
            >
              <ArrowUp className="w-8 h-8 text-white" />
            </button>
            <div className="flex gap-2">
              <button
                className="p-3 bg-white/30 rounded-full backdrop-blur-sm active:bg-white/50 transition-colors"
                onClick={() => moveOrca('left')}
              >
                <ArrowLeft className="w-8 h-8 text-white" />
              </button>
              <button
                className="p-3 bg-white/30 rounded-full backdrop-blur-sm active:bg-white/50 transition-colors"
                onClick={() => moveOrca('down')}
              >
                <ArrowDown className="w-8 h-8 text-white" />
              </button>
              <button
                className="p-3 bg-white/30 rounded-full backdrop-blur-sm active:bg-white/50 transition-colors"
                onClick={() => moveOrca('right')}
              >
                <ArrowRight className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
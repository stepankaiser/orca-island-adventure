import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

interface MobileControlsProps {
  onMove: (direction: 'up' | 'down' | 'left' | 'right') => void;
}

const MobileControls: React.FC<MobileControlsProps> = ({ onMove }) => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <button
        className="p-3 bg-white/30 rounded-full backdrop-blur-sm active:bg-white/50 transition-colors"
        onClick={() => onMove('up')}
      >
        <ArrowUp className="w-8 h-8 text-white" />
      </button>
      <div className="flex gap-2">
        <button
          className="p-3 bg-white/30 rounded-full backdrop-blur-sm active:bg-white/50 transition-colors"
          onClick={() => onMove('left')}
        >
          <ArrowLeft className="w-8 h-8 text-white" />
        </button>
        <button
          className="p-3 bg-white/30 rounded-full backdrop-blur-sm active:bg-white/50 transition-colors"
          onClick={() => onMove('down')}
        >
          <ArrowDown className="w-8 h-8 text-white" />
        </button>
        <button
          className="p-3 bg-white/30 rounded-full backdrop-blur-sm active:bg-white/50 transition-colors"
          onClick={() => onMove('right')}
        >
          <ArrowRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MobileControls;
import React from 'react';
import { motion } from 'motion/react';
import { SpectrumBar } from '../types';

interface SpectrumSliderProps {
  item: SpectrumBar;
  index?: number;
  isAnimated?: boolean;
}

export const SpectrumSlider: React.FC<SpectrumSliderProps> = ({
  item,
  index = 0,
  isAnimated = true,
}) => {
  return (
    <div className="space-y-1.5 py-1.5">
      {/* 3-Column Header: Left % + Label | Center Dimension | Right % + Label */}
      <div className="flex items-baseline justify-between">
        {/* Left Side */}
        <div className="flex items-baseline gap-1 text-left min-w-[30%]">
          <span className="font-serif-cn font-bold text-sm sm:text-base text-[#1E1914]">
            {item.leftPercent}%
          </span>
          <span className="text-[#756A5B] font-sans text-xs sm:text-[13px] truncate">
            · {item.leftLabel}
          </span>
        </div>

        {/* Center Dimension Title */}
        <div className="text-center px-1">
          <span className="font-serif-cn font-bold text-base sm:text-lg text-[#1F1B16] tracking-wide">
            {item.dimension}
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-baseline justify-end gap-1 text-right min-w-[30%]">
          <span className="font-serif-cn font-bold text-sm sm:text-base text-[#1E1914]">
            {item.rightPercent}%
          </span>
          <span className="text-[#756A5B] font-sans text-xs sm:text-[13px] truncate">
            · {item.rightLabel}
          </span>
        </div>
      </div>

      {/* Axis Track with End Dots & Golden Diamond Pin */}
      <div className="relative h-4 flex items-center px-0.5">
        {/* Horizontal Line Track */}
        <div className="w-full h-[1.5px] bg-[#D8CEBC] rounded-full" />

        {/* Left End Dot */}
        <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-[#A39686]" />

        {/* Right End Dot */}
        <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-[#A39686]" />

        {/* Diamond Rhombus Pin */}
        {isAnimated ? (
          <motion.div
            initial={{ left: '50%', scale: 0 }}
            animate={{ left: `${item.rightPercent}%`, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -translate-x-1/2 flex items-center justify-center pointer-events-none"
            style={{ left: `${item.rightPercent}%` }}
          >
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#8C6628] rotate-45 border border-[#684A1A] shadow-2xs" />
          </motion.div>
        ) : (
          <div
            className="absolute -translate-x-1/2 flex items-center justify-center pointer-events-none"
            style={{ left: `${item.rightPercent}%` }}
          >
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#8C6628] rotate-45 border border-[#684A1A] shadow-2xs" />
          </div>
        )}
      </div>

      {/* Bottom Description */}
      <p className="text-xs sm:text-[12.5px] text-[#706454] font-sans leading-relaxed text-left">
        {item.desc}
      </p>
    </div>
  );
};

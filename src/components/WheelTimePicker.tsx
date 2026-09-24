import React, { useRef, useEffect } from 'react';

interface WheelTimePickerProps {
  hour: number;
  minute: number;
  onChange: (hour: number, minute: number) => void;
}

const ITEM_HEIGHT = 48; // px per number slot
const VISIBLE_COUNT = 3; // 3 slots visible: top, center, bottom
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_COUNT; // 144px

export const WheelTimePicker: React.FC<WheelTimePickerProps> = ({
  hour,
  minute,
  onChange,
}) => {
  const hourListRef = useRef<HTMLDivElement>(null);
  const minuteListRef = useRef<HTMLDivElement>(null);
  const isUserScrollingHour = useRef(false);
  const isUserScrollingMinute = useRef(false);
  const hourTimeoutRef = useRef<number | null>(null);
  const minuteTimeoutRef = useRef<number | null>(null);

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  // Sync scroll position when prop changes externally
  useEffect(() => {
    if (!isUserScrollingHour.current && hourListRef.current) {
      hourListRef.current.scrollTop = hour * ITEM_HEIGHT;
    }
  }, [hour]);

  useEffect(() => {
    if (!isUserScrollingMinute.current && minuteListRef.current) {
      minuteListRef.current.scrollTop = minute * ITEM_HEIGHT;
    }
  }, [minute]);

  const handleHourScroll = () => {
    if (!hourListRef.current) return;
    isUserScrollingHour.current = true;
    if (hourTimeoutRef.current) window.clearTimeout(hourTimeoutRef.current);

    const scrollTop = hourListRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const clamped = Math.max(0, Math.min(23, index));

    if (clamped !== hour) {
      onChange(clamped, minute);
    }

    hourTimeoutRef.current = window.setTimeout(() => {
      isUserScrollingHour.current = false;
      // Snap exactly into place
      if (hourListRef.current) {
        hourListRef.current.scrollTo({
          top: clamped * ITEM_HEIGHT,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  const handleMinuteScroll = () => {
    if (!minuteListRef.current) return;
    isUserScrollingMinute.current = true;
    if (minuteTimeoutRef.current) window.clearTimeout(minuteTimeoutRef.current);

    const scrollTop = minuteListRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const clamped = Math.max(0, Math.min(59, index));

    if (clamped !== minute) {
      onChange(hour, clamped);
    }

    minuteTimeoutRef.current = window.setTimeout(() => {
      isUserScrollingMinute.current = false;
      // Snap exactly into place
      if (minuteListRef.current) {
        minuteListRef.current.scrollTo({
          top: clamped * ITEM_HEIGHT,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  const scrollToHour = (h: number) => {
    onChange(h, minute);
    if (hourListRef.current) {
      hourListRef.current.scrollTo({
        top: h * ITEM_HEIGHT,
        behavior: 'smooth',
      });
    }
  };

  const scrollToMinute = (m: number) => {
    onChange(hour, m);
    if (minuteListRef.current) {
      minuteListRef.current.scrollTo({
        top: m * ITEM_HEIGHT,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full max-w-xs mx-auto py-2 select-none">
      {/* Background container with subtle frame */}
      <div
        className="relative flex items-center justify-center gap-2 sm:gap-4 overflow-hidden rounded-2xl bg-[#FAF5EB]/50 border border-[#E9E1D2]/80"
        style={{ height: `${CONTAINER_HEIGHT}px` }}
      >
        {/* Center selection highlight bar */}
        <div
          className="absolute left-3 right-3 pointer-events-none rounded-xl bg-white/70 border-y border-[#D8C9B3] shadow-2xs"
          style={{
            top: `${ITEM_HEIGHT}px`,
            height: `${ITEM_HEIGHT}px`,
          }}
        />

        {/* Top and Bottom Gradient Fade Masks */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent pointer-events-none z-10" />

        {/* Hour Roller Column */}
        <div className="flex items-center">
          <div
            ref={hourListRef}
            onScroll={handleHourScroll}
            className="w-20 overflow-y-auto snap-y snap-mandatory scrollbar-none py-[48px] relative z-0"
            style={{ height: `${CONTAINER_HEIGHT}px` }}
          >
            {hours.map((h) => {
              const isSelected = h === hour;
              const isAdjacent = Math.abs(h - hour) === 1;
              return (
                <div
                  key={h}
                  onClick={() => scrollToHour(h)}
                  className={`h-[48px] flex items-center justify-center cursor-pointer snap-center transition-all duration-200 ${
                    isSelected
                      ? 'text-[#28221B] font-normal text-4xl sm:text-5xl font-serif-cn scale-100'
                      : isAdjacent
                      ? 'text-[#968977] font-light text-2xl font-serif-cn opacity-50 scale-90 hover:opacity-80'
                      : 'text-[#C5BAAA] font-light text-xl font-serif-cn opacity-25 scale-75'
                  }`}
                >
                  {String(h).padStart(2, '0')}
                </div>
              );
            })}
          </div>
          <span className="text-sm font-medium text-[#706454] font-serif-cn pl-1 pr-3 relative z-10">
            时
          </span>
        </div>

        {/* Subtle separator dot */}
        <span className="text-[#B8A996] font-serif-cn text-xl mb-1 relative z-10">
          :
        </span>

        {/* Minute Roller Column */}
        <div className="flex items-center">
          <div
            ref={minuteListRef}
            onScroll={handleMinuteScroll}
            className="w-20 overflow-y-auto snap-y snap-mandatory scrollbar-none py-[48px] relative z-0"
            style={{ height: `${CONTAINER_HEIGHT}px` }}
          >
            {minutes.map((m) => {
              const isSelected = m === minute;
              const isAdjacent = Math.abs(m - minute) === 1;
              return (
                <div
                  key={m}
                  onClick={() => scrollToMinute(m)}
                  className={`h-[48px] flex items-center justify-center cursor-pointer snap-center transition-all duration-200 ${
                    isSelected
                      ? 'text-[#28221B] font-normal text-4xl sm:text-5xl font-serif-cn scale-100'
                      : isAdjacent
                      ? 'text-[#968977] font-light text-2xl font-serif-cn opacity-50 scale-90 hover:opacity-80'
                      : 'text-[#C5BAAA] font-light text-xl font-serif-cn opacity-25 scale-75'
                  }`}
                >
                  {String(m).padStart(2, '0')}
                </div>
              );
            })}
          </div>
          <span className="text-sm font-medium text-[#706454] font-serif-cn pl-1 pr-1 relative z-10">
            分
          </span>
        </div>
      </div>

      {/* Helpful Hint Text */}
      <p className="text-center text-[10px] text-[#A69B8D] mt-2 font-sans tracking-wider">
        上下滑动或点击数值选择出生时分
      </p>
    </div>
  );
};

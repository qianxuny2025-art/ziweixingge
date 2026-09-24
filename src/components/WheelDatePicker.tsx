import React, { useRef, useEffect, useMemo } from 'react';

interface WheelDatePickerProps {
  year: number;
  month: number;
  day: number;
  onChange: (year: number, month: number, day: number) => void;
}

const ITEM_HEIGHT = 48; // px per slot
const VISIBLE_COUNT = 3; // 3 slots: top, center, bottom
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_COUNT; // 144px

// Available years range: 1950 to 2026
const START_YEAR = 1950;
const END_YEAR = 2026;
const YEARS = Array.from(
  { length: END_YEAR - START_YEAR + 1 },
  (_, i) => START_YEAR + i
);
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

// Days in month calculation
const getDaysInMonth = (y: number, m: number) => {
  return new Date(y, m, 0).getDate();
};

export const WheelDatePicker: React.FC<WheelDatePickerProps> = ({
  year,
  month,
  day,
  onChange,
}) => {
  const yearListRef = useRef<HTMLDivElement>(null);
  const monthListRef = useRef<HTMLDivElement>(null);
  const dayListRef = useRef<HTMLDivElement>(null);

  const isUserScrollingYear = useRef(false);
  const isUserScrollingMonth = useRef(false);
  const isUserScrollingDay = useRef(false);

  const yearTimeoutRef = useRef<number | null>(null);
  const monthTimeoutRef = useRef<number | null>(null);
  const dayTimeoutRef = useRef<number | null>(null);

  const maxDays = useMemo(() => getDaysInMonth(year, month), [year, month]);
  const days = useMemo(
    () => Array.from({ length: maxDays }, (_, i) => i + 1),
    [maxDays]
  );

  // Clamp day if current day exceeds days in month (e.g., Feb 30 -> Feb 28/29)
  useEffect(() => {
    if (day > maxDays) {
      onChange(year, month, maxDays);
    }
  }, [maxDays, day, year, month, onChange]);

  // Sync scroll position when prop changes externally
  useEffect(() => {
    if (!isUserScrollingYear.current && yearListRef.current) {
      const index = YEARS.indexOf(year);
      if (index >= 0) {
        yearListRef.current.scrollTop = index * ITEM_HEIGHT;
      }
    }
  }, [year]);

  useEffect(() => {
    if (!isUserScrollingMonth.current && monthListRef.current) {
      const index = month - 1;
      monthListRef.current.scrollTop = index * ITEM_HEIGHT;
    }
  }, [month]);

  useEffect(() => {
    if (!isUserScrollingDay.current && dayListRef.current) {
      const index = day - 1;
      dayListRef.current.scrollTop = index * ITEM_HEIGHT;
    }
  }, [day]);

  // Handle year scroll
  const handleYearScroll = () => {
    if (!yearListRef.current) return;
    isUserScrollingYear.current = true;
    if (yearTimeoutRef.current) window.clearTimeout(yearTimeoutRef.current);

    const scrollTop = yearListRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const clampedIndex = Math.max(0, Math.min(YEARS.length - 1, index));
    const newYear = YEARS[clampedIndex];

    if (newYear !== year) {
      const newMaxDays = getDaysInMonth(newYear, month);
      const safeDay = Math.min(day, newMaxDays);
      onChange(newYear, month, safeDay);
    }

    yearTimeoutRef.current = window.setTimeout(() => {
      isUserScrollingYear.current = false;
      if (yearListRef.current) {
        yearListRef.current.scrollTo({
          top: clampedIndex * ITEM_HEIGHT,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  // Handle month scroll
  const handleMonthScroll = () => {
    if (!monthListRef.current) return;
    isUserScrollingMonth.current = true;
    if (monthTimeoutRef.current) window.clearTimeout(monthTimeoutRef.current);

    const scrollTop = monthListRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const clampedMonth = Math.max(1, Math.min(12, index + 1));

    if (clampedMonth !== month) {
      const newMaxDays = getDaysInMonth(year, clampedMonth);
      const safeDay = Math.min(day, newMaxDays);
      onChange(year, clampedMonth, safeDay);
    }

    monthTimeoutRef.current = window.setTimeout(() => {
      isUserScrollingMonth.current = false;
      if (monthListRef.current) {
        monthListRef.current.scrollTo({
          top: (clampedMonth - 1) * ITEM_HEIGHT,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  // Handle day scroll
  const handleDayScroll = () => {
    if (!dayListRef.current) return;
    isUserScrollingDay.current = true;
    if (dayTimeoutRef.current) window.clearTimeout(dayTimeoutRef.current);

    const scrollTop = dayListRef.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);
    const clampedDay = Math.max(1, Math.min(maxDays, index + 1));

    if (clampedDay !== day) {
      onChange(year, month, clampedDay);
    }

    dayTimeoutRef.current = window.setTimeout(() => {
      isUserScrollingDay.current = false;
      if (dayListRef.current) {
        dayListRef.current.scrollTo({
          top: (clampedDay - 1) * ITEM_HEIGHT,
          behavior: 'smooth',
        });
      }
    }, 150);
  };

  // Direct click-to-scroll handlers
  const scrollToYear = (y: number) => {
    const newMaxDays = getDaysInMonth(y, month);
    const safeDay = Math.min(day, newMaxDays);
    onChange(y, month, safeDay);
    const idx = YEARS.indexOf(y);
    if (yearListRef.current && idx >= 0) {
      yearListRef.current.scrollTo({
        top: idx * ITEM_HEIGHT,
        behavior: 'smooth',
      });
    }
  };

  const scrollToMonth = (m: number) => {
    const newMaxDays = getDaysInMonth(year, m);
    const safeDay = Math.min(day, newMaxDays);
    onChange(year, m, safeDay);
    if (monthListRef.current) {
      monthListRef.current.scrollTo({
        top: (m - 1) * ITEM_HEIGHT,
        behavior: 'smooth',
      });
    }
  };

  const scrollToDay = (d: number) => {
    onChange(year, month, d);
    if (dayListRef.current) {
      dayListRef.current.scrollTo({
        top: (d - 1) * ITEM_HEIGHT,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto py-2 select-none">
      {/* Background container with subtle frame (matching WheelTimePicker) */}
      <div
        className="relative flex items-center justify-center gap-1 sm:gap-2 overflow-hidden rounded-2xl bg-[#FAF5EB]/50 border border-[#E9E1D2]/80 px-1"
        style={{ height: `${CONTAINER_HEIGHT}px` }}
      >
        {/* Center selection highlight bar */}
        <div
          className="absolute left-2 right-2 pointer-events-none rounded-xl bg-white/70 border-y border-[#D8C9B3] shadow-2xs"
          style={{
            top: `${ITEM_HEIGHT}px`,
            height: `${ITEM_HEIGHT}px`,
          }}
        />

        {/* Top and Bottom Gradient Fade Masks */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent pointer-events-none z-10" />

        {/* Year Roller Column */}
        <div className="flex items-center">
          <div
            ref={yearListRef}
            onScroll={handleYearScroll}
            className="w-16 sm:w-20 overflow-y-auto snap-y snap-mandatory scrollbar-none py-[48px] relative z-0"
            style={{ height: `${CONTAINER_HEIGHT}px` }}
          >
            {YEARS.map((y) => {
              const isSelected = y === year;
              const isAdjacent = Math.abs(y - year) === 1;
              return (
                <div
                  key={y}
                  onClick={() => scrollToYear(y)}
                  className={`h-[48px] flex items-center justify-center cursor-pointer snap-center transition-all duration-200 ${
                    isSelected
                      ? 'text-[#28221B] font-normal text-2xl sm:text-3xl font-serif-cn scale-100'
                      : isAdjacent
                      ? 'text-[#968977] font-light text-base sm:text-lg font-serif-cn opacity-50 scale-90 hover:opacity-80'
                      : 'text-[#C5BAAA] font-light text-sm font-serif-cn opacity-25 scale-75'
                  }`}
                >
                  {y}
                </div>
              );
            })}
          </div>
          <span className="text-xs sm:text-sm font-medium text-[#706454] font-serif-cn pl-0.5 pr-1 relative z-10">
            年
          </span>
        </div>

        {/* Month Roller Column */}
        <div className="flex items-center">
          <div
            ref={monthListRef}
            onScroll={handleMonthScroll}
            className="w-12 sm:w-14 overflow-y-auto snap-y snap-mandatory scrollbar-none py-[48px] relative z-0"
            style={{ height: `${CONTAINER_HEIGHT}px` }}
          >
            {MONTHS.map((m) => {
              const isSelected = m === month;
              const isAdjacent = Math.abs(m - month) === 1;
              return (
                <div
                  key={m}
                  onClick={() => scrollToMonth(m)}
                  className={`h-[48px] flex items-center justify-center cursor-pointer snap-center transition-all duration-200 ${
                    isSelected
                      ? 'text-[#28221B] font-normal text-2xl sm:text-3xl font-serif-cn scale-100'
                      : isAdjacent
                      ? 'text-[#968977] font-light text-base sm:text-lg font-serif-cn opacity-50 scale-90 hover:opacity-80'
                      : 'text-[#C5BAAA] font-light text-sm font-serif-cn opacity-25 scale-75'
                  }`}
                >
                  {m}
                </div>
              );
            })}
          </div>
          <span className="text-xs sm:text-sm font-medium text-[#706454] font-serif-cn pl-0.5 pr-1 relative z-10">
            月
          </span>
        </div>

        {/* Day Roller Column */}
        <div className="flex items-center">
          <div
            ref={dayListRef}
            onScroll={handleDayScroll}
            className="w-12 sm:w-14 overflow-y-auto snap-y snap-mandatory scrollbar-none py-[48px] relative z-0"
            style={{ height: `${CONTAINER_HEIGHT}px` }}
          >
            {days.map((d) => {
              const isSelected = d === day;
              const isAdjacent = Math.abs(d - day) === 1;
              return (
                <div
                  key={d}
                  onClick={() => scrollToDay(d)}
                  className={`h-[48px] flex items-center justify-center cursor-pointer snap-center transition-all duration-200 ${
                    isSelected
                      ? 'text-[#28221B] font-normal text-2xl sm:text-3xl font-serif-cn scale-100'
                      : isAdjacent
                      ? 'text-[#968977] font-light text-base sm:text-lg font-serif-cn opacity-50 scale-90 hover:opacity-80'
                      : 'text-[#C5BAAA] font-light text-sm font-serif-cn opacity-25 scale-75'
                  }`}
                >
                  {d}
                </div>
              );
            })}
          </div>
          <span className="text-xs sm:text-sm font-medium text-[#706454] font-serif-cn pl-0.5 pr-1 relative z-10">
            日
          </span>
        </div>
      </div>

      {/* Helpful Hint Text */}
      <p className="text-center text-[10px] text-[#A69B8D] mt-2 font-sans tracking-wider">
        上下滑动或点击数值选择出生年月日
      </p>
    </div>
  );
};

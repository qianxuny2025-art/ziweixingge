import React, { useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizPageProps {
  currentQuestion: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onSkip?: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({
  currentQuestion,
  currentIndex,
  totalQuestions,
  selectedOptionId,
  onSelectOption,
  onNext,
  onPrev,
}) => {
  const isLast = currentIndex === totalQuestions - 1;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear pending auto-next timeout on unmount or question change
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex]);

  const handleOptionClick = (optionId: string) => {
    onSelectOption(optionId);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // 250ms smooth visual feedback so user sees the radio select, then auto advance
    timerRef.current = setTimeout(() => {
      onNext();
    }, 260);
  };

  return (
    <div className="flex flex-col min-h-full px-5 py-5 space-y-6">
      {/* Top Header: Progress Bar + Counter */}
      <div className="flex items-center gap-3 pt-1">
        <span className="text-xs text-[#9E9283] shrink-0 font-medium tracking-wide">单项选择</span>

        <div className="flex-1 h-1.5 bg-[#EAE2D2] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#8C6628] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <span className="text-sm font-sans font-medium text-[#7D7162] tracking-wider shrink-0 text-right">
          {currentIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Question Headline */}
      <div className="pt-2">
        <h2 className="text-xl sm:text-2xl font-serif-cn font-medium leading-snug text-[#25201B]">
          {currentQuestion.question}
        </h2>
      </div>

      {/* Options List */}
      <div className="space-y-3 pt-2">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              id={`quiz-option-${option.id}`}
              onClick={() => handleOptionClick(option.id)}
              className={`w-full text-left p-4 sm:p-4.5 rounded-[18px] transition-all duration-200 flex items-center gap-3.5 border cursor-pointer active:scale-[0.99] ${
                isSelected
                  ? 'bg-[#F4EBDC] border-[#C4AF8B] shadow-2xs'
                  : 'bg-white border-[#E8E1D5] hover:border-[#D6CBBA] shadow-2xs'
              }`}
            >
              {/* Radio Circle */}
              <div className="shrink-0">
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'border-[#8C6628] bg-[#F4EBDC]'
                      : 'border-[#CEC3B2] bg-white'
                  }`}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8C6628]" />
                  )}
                </div>
              </div>

              {/* Text */}
              <span
                className={`text-[15px] sm:text-base leading-relaxed tracking-wide ${
                  isSelected ? 'text-[#25201B] font-medium' : 'text-[#362E27]'
                }`}
              >
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Footer: Left < 上一题, Right 2-line prompt */}
      <div className="pt-6 pb-2 flex items-center justify-between min-h-[48px]">
        {currentIndex > 0 ? (
          <button
            type="button"
            id="quiz-prev-bottom-btn"
            onClick={onPrev}
            className="flex items-center gap-0.5 text-[14px] text-[#786F62] hover:text-[#25201B] active:scale-95 transition-all cursor-pointer py-1 pr-2"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
            <span>上一题</span>
          </button>
        ) : (
          <div />
        )}

        <div className="text-right text-[12.5px] text-[#9E9385] leading-snug tracking-normal">
          <div>没有标准答案</div>
          <div>选更常出现的那个</div>
        </div>
      </div>
    </div>
  );
};

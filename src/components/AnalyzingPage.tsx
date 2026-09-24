import React, { useEffect, useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface AnalyzingPageProps {
  onComplete: () => void;
}

export const AnalyzingPage: React.FC<AnalyzingPageProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(16);
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    // Smooth progress counter from 16 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic easing step
        const increment = prev < 60 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 5) + 2;
        const next = Math.min(100, prev + increment);
        return next;
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Countdown timer matching the progress
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 650);
      return () => clearTimeout(finishTimeout);
    }
  }, [progress, onComplete]);

  const step1Done = progress >= 38;
  const step2Done = progress >= 72;
  const step3Done = progress >= 96;

  return (
    <div className="flex flex-col justify-between items-center min-h-[calc(100vh-65px)] px-6 py-10 text-center bg-[#FAF7F2]">
      {/* Top Title */}
      <div className="pt-2 space-y-2">
        <h1 className="text-2xl sm:text-3xl font-serif-cn font-bold text-[#2A231C] tracking-tight">
          正在生成你的专属说明书
        </h1>
        <p className="text-xs text-[#8C7E6D] font-sans tracking-wider">
          深度连接你的答题选择与六维能量倾向
        </p>
      </div>

      {/* Center Percentage & Progress Bar (Replacing Orbit Galaxy as requested) */}
      <div className="w-full max-w-xs my-auto py-8 flex flex-col items-center">
        {/* Big Serif Percentage matching user uploaded image */}
        <div className="flex items-baseline justify-center text-[#8C6628] select-none mb-4">
          <span className="text-7xl sm:text-8xl font-serif-cn font-normal tracking-tight">
            {progress}
          </span>
          <span className="text-3xl sm:text-4xl font-serif-cn font-light ml-1 text-[#8C6628]">
            %
          </span>
        </div>

        {/* Clean Sleek Horizontal Progress Bar matching image */}
        <div className="w-full relative h-2 bg-[#E7DECf] rounded-full overflow-hidden shadow-inner">
          <div
            className="absolute left-0 top-0 bottom-0 bg-[#8C6628] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Subtle Analysis Status Text */}
        <p className="text-[11px] text-[#A09383] font-sans tracking-wider mt-3">
          {progress < 38
            ? '正在提取情境抉择特征...'
            : progress < 72
            ? '正在校准当前人格状态...'
            : progress < 100
            ? '正在生成深度解析报告...'
            : '分析完成，即将呈现'}
        </p>
      </div>

      {/* Progress Checklist */}
      <div className="w-full max-w-xs space-y-3.5 text-left pb-4">
        {/* Step 1 */}
        <div className="flex items-center justify-between pb-3 border-b border-[#EFE8DA]">
          <div className="flex items-center gap-3">
            <CheckCircle2
              className={`w-5 h-5 transition-colors duration-500 ${
                step1Done ? 'text-[#8C6628]' : 'text-[#D0C2AF]'
              }`}
            />
            <span
              className={`text-sm font-medium transition-colors ${
                step1Done ? 'text-[#2D261E]' : 'text-[#8A7D6C]'
              }`}
            >
              解析六项日常倾向
            </span>
          </div>
          <span className="text-[10px] text-[#8C6628] font-serif-cn">
            {step1Done ? '✦' : '...'}
          </span>
        </div>

        {/* Step 2 */}
        <div className="flex items-center justify-between pb-3 border-b border-[#EFE8DA]">
          <div className="flex items-center gap-3">
            <CheckCircle2
              className={`w-5 h-5 transition-colors duration-500 ${
                step2Done ? 'text-[#8C6628]' : 'text-[#D0C2AF]'
              }`}
            />
            <span
              className={`text-sm font-medium transition-colors ${
                step2Done ? 'text-[#2D261E]' : 'text-[#8A7D6C]'
              }`}
            >
              校准当前人格状态
            </span>
          </div>
          <span className="text-[10px] text-[#8C6628] font-serif-cn">
            {step2Done ? '✦' : '...'}
          </span>
        </div>

        {/* Step 3 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-500 ${
                step3Done ? 'bg-[#8C6628] text-white' : 'bg-[#EAE1D2] text-[#8C6628]'
              }`}
            >
              <Sparkles className="w-3 h-3" />
            </div>
            <span
              className={`text-sm font-medium transition-colors ${
                step3Done ? 'text-[#2D261E]' : 'text-[#8A7D6C]'
              }`}
            >
              生成你的专属说明书
            </span>
          </div>
          <span className="text-[10px] text-[#8C6628] font-serif-cn">
            {step3Done ? '✦' : '...'}
          </span>
        </div>
      </div>

      {/* Countdown estimate */}
      <div className="pt-2 pb-2">
        <div className="text-xs text-[#8A7D6C] font-sans tracking-wide">
          大约需要 <span className="font-bold text-[#8C6628] font-serif-cn text-sm px-1">{countdown}</span> 秒
        </div>
      </div>
    </div>
  );
};

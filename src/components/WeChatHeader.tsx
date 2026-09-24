import React from 'react';
import { ArrowLeft, MoreHorizontal, CircleDot } from 'lucide-react';

interface WeChatHeaderProps {
  title?: string;
  onBack?: () => void;
  showBack?: boolean;
  onShareClick?: () => void;
}

export const WeChatHeader: React.FC<WeChatHeaderProps> = ({
  title,
  onBack,
  showBack = true,
  onShareClick,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#F6F2EA]/95 backdrop-blur-md px-4 pt-3 pb-2.5 border-b border-[#E7DFCF] flex items-center justify-between">
      {/* Left Back or empty spacer */}
      <div className="w-16 flex items-center">
        {showBack && onBack ? (
          <button
            onClick={onBack}
            id="nav-back-button"
            className="p-1 -ml-1 text-[#433B32] hover:text-[#8C6628] active:scale-95 transition-all"
            aria-label="返回"
          >
            <ArrowLeft className="w-5 h-5 stroke-[1.8]" />
          </button>
        ) : null}
      </div>

      {/* Center Title */}
      <h1
        className={`text-center truncate max-w-[220px] ${
          title?.includes('星') && title?.includes('格')
            ? 'text-[13px] sm:text-[14px] font-serif-cn tracking-[0.24em] text-[#746553] font-normal pl-1'
            : 'text-base font-medium tracking-wide text-[#2B2621]'
        }`}
      >
        {title || '星 格 · X I N G G E'}
      </h1>

      {/* Right Mini-program capsule button */}
      <div className="w-16 flex justify-end items-center">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#DCD3C1] bg-white/70 shadow-2xs">
          <button
            onClick={onShareClick}
            id="capsule-more-btn"
            className="text-[#554C42] hover:text-[#8C6628] transition-colors p-0.5"
            title="更多 / 分享"
          >
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>
          <div className="w-[1px] h-3 bg-[#E2D9C8]" />
          <button
            onClick={() => window.location.reload()}
            id="capsule-circle-btn"
            className="text-[#554C42] hover:text-[#8C6628] transition-colors p-0.5"
            title="重开"
          >
            <CircleDot className="w-3 h-3 text-[#554C42]" />
          </button>
        </div>
      </div>
    </header>
  );
};

import React, { useRef, useState } from 'react';
import { X, Download, Copy, Check, QrCode } from 'lucide-react';
import { PersonalityReport, UserProfile } from '../types';

interface SharePosterModalProps {
  report: PersonalityReport;
  userProfile: UserProfile;
  isOpen: boolean;
  onClose: () => void;
}

export const SharePosterModal: React.FC<SharePosterModalProps> = ({
  report,
  userProfile,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const posterRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `【${report.name} · ${report.enName}】\n${report.stars}\n\n「一句话画像」\n${report.summary}\n\n核心特质：\n${report.spectrumBars.map((b) => `· ${b.dimension}: ${b.rightPercent}% ${b.rightLabel}`).join('\n')}\n\n寄语：\n${report.lastWords.headline.join(' ')}\n${report.lastWords.subtext}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadImage = () => {
    setDownloading(true);
    try {
      // Draw to standard canvas for instant clean export
      const canvas = document.createElement('canvas');
      canvas.width = 750;
      canvas.height = 1250;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Background
        ctx.fillStyle = '#F6F2EA';
        ctx.fillRect(0, 0, 750, 1250);

        // Outer Frame
        ctx.fillStyle = '#FAF7F2';
        ctx.strokeStyle = '#E8E0D1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(40, 40, 670, 1170, 24);
        ctx.fill();
        ctx.stroke();

        // Top Brand Badge
        ctx.fillStyle = '#8C6628';
        ctx.beginPath();
        ctx.roundRect(80, 80, 44, 44, 10);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 24px serif';
        ctx.textAlign = 'center';
        ctx.fillText('✦', 102, 112);

        ctx.textAlign = 'left';
        ctx.fillStyle = '#2A231C';
        ctx.font = 'bold 20px sans-serif';
        ctx.fillText('星格专属性格说明书', 140, 98);
        ctx.fillStyle = '#968978';
        ctx.font = '14px sans-serif';
        ctx.fillText('发现更真实的自己 · PERSONALITY PROFILE', 140, 120);

        // Archetype Title
        ctx.fillStyle = '#241F1A';
        ctx.font = 'bold 64px serif';
        ctx.fillText(report.name, 80, 220);

        ctx.fillStyle = '#8C6628';
        ctx.font = 'bold 18px sans-serif';
        ctx.fillText(report.enName, 80 + ctx.measureText(report.name).width + 20, 214);

        ctx.fillStyle = '#6E6354';
        ctx.font = '19px sans-serif';
        ctx.fillText(report.stars, 80, 260);

        // Highlight box: 一句话画像
        ctx.fillStyle = '#F0E9DD';
        ctx.beginPath();
        ctx.roundRect(80, 290, 590, 150, 16);
        ctx.fill();

        ctx.fillStyle = '#8C6628';
        ctx.fillRect(100, 310, 6, 110);

        ctx.fillStyle = '#2A231C';
        ctx.font = 'bold 20px serif';
        ctx.fillText('| 一句话画像 |', 120, 345);

        ctx.font = '18px serif';
        ctx.fillText(report.summary.slice(0, 24), 120, 385);
        ctx.fillText(report.summary.slice(24), 120, 415);

        // Formula row
        ctx.fillStyle = '#FAF5EB';
        ctx.beginPath();
        ctx.roundRect(80, 460, 590, 70, 12);
        ctx.fill();

        ctx.fillStyle = '#4A4034';
        ctx.font = 'bold 18px sans-serif';
        ctx.fillText(
          `${report.makeup.part1.title} + ${report.makeup.part2.title} → ${report.makeup.result.title} (${report.makeup.rarity})`,
          105,
          503
        );

        // Spectrum bars (Top 4)
        let startY = 570;
        ctx.fillStyle = '#2A231C';
        ctx.font = 'bold 22px serif';
        ctx.fillText('型格能量特征', 80, startY);

        report.spectrumBars.slice(0, 4).forEach((bar, i) => {
          const itemY = startY + 45 + i * 65;
          ctx.fillStyle = '#443B30';
          ctx.font = 'bold 18px sans-serif';
          ctx.fillText(bar.dimension, 80, itemY);

          ctx.fillStyle = '#8C6628';
          ctx.textAlign = 'right';
          ctx.font = 'bold 18px serif';
          ctx.fillText(`${bar.rightPercent}% · ${bar.rightLabel}`, 670, itemY);
          ctx.textAlign = 'left';

          // bar track
          ctx.fillStyle = '#E5DDCF';
          ctx.beginPath();
          ctx.roundRect(80, itemY + 10, 590, 8, 4);
          ctx.fill();

          ctx.fillStyle = '#8C6628';
          ctx.beginPath();
          ctx.roundRect(80, itemY + 10, (590 * bar.rightPercent) / 100, 8, 4);
          ctx.fill();
        });

        // Warm Gilded Last Words card
        ctx.fillStyle = '#F7EFE2';
        ctx.strokeStyle = '#DFCBB0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(80, 860, 590, 230, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#8C6628';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('✦ LAST WORDS 终章寄语', 110, 895);

        ctx.fillStyle = '#221910';
        ctx.font = '22px serif';
        ctx.fillText(report.lastWords.headline[0], 110, 935);
        ctx.fillText(report.lastWords.headline[1], 110, 968);

        ctx.fillStyle = '#8C6628';
        ctx.font = 'bold 24px serif';
        ctx.fillText(report.lastWords.headline[3], 110, 1010);

        ctx.fillStyle = '#6E6050';
        ctx.font = '15px sans-serif';
        ctx.fillText('破局是你的天赋，不是你的义务。', 110, 1055);

        // QR Code placeholder icon
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#E2D5C0';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(580, 980, 68, 68, 8);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#201D1A';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('扫码测', 614, 1015);
        ctx.fillText('性格底色', 614, 1035);

        // Footer
        ctx.textAlign = 'center';
        ctx.fillStyle = '#8C7F6F';
        ctx.font = '14px sans-serif';
        ctx.fillText('星格 XINGGE · 测测你的专属性格说明书', 375, 1170);

        // Trigger download
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `星格报告_${report.name}.png`;
        link.href = url;
        link.click();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#FAF7F2] border border-[#E4DCCF] rounded-3xl max-w-sm sm:max-w-md w-full p-5 sm:p-6 shadow-2xl space-y-5 relative my-auto animate-fadeIn">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-[#827667] hover:text-[#2A231C] p-1.5 rounded-full hover:bg-[#EDE5D6] transition-colors cursor-pointer"
          aria-label="关闭"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1 pt-1">
          <h3 className="text-lg font-serif-cn font-bold text-[#27211B]">
            性格特质卡片分享
          </h3>
          <p className="text-xs text-[#8C8070]">长按或保存图片，分享至朋友圈与好友</p>
        </div>

        {/* Poster Preview Card */}
        <div
          ref={posterRef}
          className="bg-white rounded-2xl border border-[#E3D9C8] p-5 shadow-xs space-y-4 text-left"
        >
          {/* Card Top */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#8C6628] text-white flex items-center justify-center font-serif-cn text-xs font-bold">
                ✦
              </div>
              <span className="text-xs font-semibold text-[#30281F]">
                星格专属性格说明书
              </span>
            </div>
            <span className="text-[10px] text-[#918576] font-sans tracking-wider">
              {report.enName}
            </span>
          </div>

          {/* Archetype */}
          <div>
            <div className="text-3xl font-serif-cn font-black text-[#1A120B]">
              {report.name}
            </div>
            <div className="text-xs text-[#736758] mt-0.5">{report.stars}</div>
          </div>

          {/* Quote */}
          <div className="bg-[#FAF6EF] rounded-xl p-3 border-l-3 border-[#8C6628] text-xs text-[#352D25] leading-relaxed font-serif-cn border border-[#EADBCA]">
            {report.summary}
          </div>

          {/* Capabilities Preview */}
          <div className="space-y-2 pt-1">
            {report.spectrumBars.slice(0, 3).map((bar, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs text-[#706556]">
                  <span>{bar.dimension}</span>
                  <span className="font-semibold text-[#8C6628]">
                    {bar.rightPercent}% {bar.rightLabel}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#EFE7DA] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#8C6628]"
                    style={{ width: `${bar.rightPercent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Warm Gilded Quote Card */}
          <div className="bg-gradient-to-br from-[#F7EFE1] to-[#EFE3CF] text-[#221910] rounded-xl p-3.5 space-y-1 border border-[#DFCBB0]">
            <div className="text-[9px] text-[#8C6628] uppercase font-bold tracking-wider">
              ✦ LAST WORDS 终章寄语
            </div>
            <div className="text-xs font-serif-cn text-[#1F1710] font-bold">
              {report.lastWords.headline[3]}
            </div>
            <div className="text-[10px] text-[#6E6050]">
              {report.lastWords.subtext}
            </div>
          </div>

          {/* Mini QR info */}
          <div className="flex items-center justify-between pt-1 border-t border-[#F2ECE0] text-[10px] text-[#948B7F]">
            <span>扫描或分享测测你的性格底色</span>
            <QrCode className="w-5 h-5 text-[#8C6628]" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            onClick={handleDownloadImage}
            disabled={downloading}
            className="py-2.5 px-3 bg-[#8C6628] hover:bg-[#785620] text-white rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? '正在生成...' : '保存长图'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyText}
            className="py-2.5 px-3 bg-white border border-[#D5CABB] hover:bg-[#F5EFE3] text-[#4A4034] rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">已复制!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#8C6628]" />
                <span>复制文案</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

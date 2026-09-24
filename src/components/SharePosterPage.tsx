import React, { useState } from 'react';
import {
  Download,
  Check,
  ArrowLeft,
  Share2,
  Users,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PersonalityReport, UserProfile } from '../types';
import starMascotImg from '../assets/images/star_mascot_1790216615635.jpg';

interface SharePosterPageProps {
  report: PersonalityReport;
  userProfile: UserProfile;
  onBack: () => void;
}

export const SharePosterPage: React.FC<SharePosterPageProps> = ({
  report,
  userProfile,
  onBack,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const userGenderText = userProfile.gender === 'female' ? '女' : '男';
  const userBirthDateText = userProfile.birthDate
    ? userProfile.birthDate.replace(/-/g, '.')
    : '1998.03.15';
  const userDateText = '2026.09.22';

  const handleShareToFriends = () => {
    const text = `【星格专属说明书 · ${report.name}】\n「以锋芒划破迷局，用结果重塑规则」\n稀有度：${report.makeup.rarity} (${report.makeup.part1.title} × ${report.makeup.part2.title})\n\n✦ 核心标签：自己拿主意 · 想了就干 · 聚会主场 · 当场翻篇\n✦ 寄语：破局是你的天赋，不是你的义务。\n\n微信搜索「星格测评」测测你的性格底色 ✦`;
    navigator.clipboard?.writeText(text);
    showToast('专属卡片文案已准备好，快去发给好友或群聊吧！');
  };

  const handleInviteFriends = () => {
    const inviteText = `【星格性格底色测评 · 邀请函】\n我刚刚测出了「${report.name}」（极少数人和你一样 · 稀有复合型）！\n超准的原型性格解读，快来看看你的专属人格说明书吧 ✦\n点击立即测试 👉 微信搜索「星格测评」`;
    navigator.clipboard?.writeText(inviteText);
    showToast('邀请链接与文案已复制，快去发给朋友评测吧！');
  };

  const handleDownloadPoster = async () => {
    setDownloading(true);
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 900;
      canvas.height = 1520;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // 1. Canvas Background Fill (Soft warm luxury ambiance)
      ctx.fillStyle = '#EBE4D8';
      ctx.fillRect(0, 0, 900, 1520);

      // Radial subtle warm glow behind card
      const bgGlow = ctx.createRadialGradient(450, 500, 100, 450, 500, 600);
      bgGlow.addColorStop(0, 'rgba(255, 250, 240, 0.6)');
      bgGlow.addColorStop(1, 'rgba(235, 228, 216, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, 900, 1520);

      // 2. Poster Inner Card (Rounded luxury ivory cream parchment)
      ctx.save();
      ctx.fillStyle = '#FAF7F0';
      ctx.strokeStyle = '#E2D7C5';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(40, 40, 820, 1440, 36);
      ctx.fill();
      ctx.stroke();

      // Top Left Header
      ctx.fillStyle = '#1A130C';
      ctx.font = 'bold 36px "Songti SC", "SimSun", serif';
      ctx.fillText('你的性格说明书', 85, 115);

      ctx.fillStyle = '#8C7E6C';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(`XINGGE PERSONALITY MANUAL · ${userDateText}`, 85, 148);

      // Top Right Stamp (Tilted Box)
      ctx.save();
      ctx.translate(720, 115);
      ctx.rotate((-8 * Math.PI) / 180);

      ctx.fillStyle = 'rgba(250, 245, 235, 0.9)';
      ctx.strokeStyle = '#8C6628';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(-80, -32, 160, 64, 10);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#8C6628';
      ctx.font = 'bold 17px serif';
      ctx.textAlign = 'center';
      ctx.fillText('星格编辑部', 0, -6);
      ctx.fillText('鉴定专用章', 0, 18);
      ctx.restore();

      // "经鉴定，你是一一"
      ctx.fillStyle = '#5A4E40';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('经鉴定，你是一一', 85, 235);

      // Archetype Big Title Highlight Marker Underlay
      ctx.fillStyle = '#EBDDBE';
      ctx.beginPath();
      ctx.roundRect(85, 305, 340, 32, 4);
      ctx.fill();

      // Archetype Hero Title "破局者"
      ctx.fillStyle = '#1A130C';
      ctx.font = '900 82px "Songti SC", "SimSun", serif';
      ctx.fillText(report.name, 85, 335);

      // Subtitle "THE GAMECHANGER · 变革手"
      ctx.fillStyle = '#8C6628';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('THE GAMECHANGER  ·  变革手', 85, 385);

      // Load and Draw Mascot Image
      const mascot = new Image();
      mascot.src = starMascotImg;
      await new Promise((resolve) => {
        if (mascot.complete) resolve(true);
        else mascot.onload = () => resolve(true);
      });

      // Mascot Image Card (Rounded 280x280)
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(85, 425, 290, 290, 28);
      ctx.clip();
      ctx.drawImage(mascot, 85, 425, 290, 290);
      ctx.restore();

      // Mascot Card Border
      ctx.strokeStyle = '#E4D9C6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(85, 425, 290, 290, 28);
      ctx.stroke();

      // Right Side Info Block
      // Stars ★★★
      ctx.fillStyle = '#8C6628';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText('★★★', 415, 515);

      // 稀有复合型
      ctx.fillStyle = '#2A1F13';
      ctx.font = 'bold 36px "Songti SC", "SimSun", serif';
      ctx.fillText('稀有复合型', 415, 575);

      // 极少数人和你一样
      ctx.fillStyle = '#7D7060';
      ctx.font = '22px sans-serif';
      ctx.fillText('极少数人和你一样', 415, 620);

      // 主心骨 × 开路人
      ctx.fillStyle = '#5A4D3E';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('主心骨  ×  开路人', 415, 665);

      // Diamond Bullets Row
      ctx.fillStyle = '#524434';
      ctx.font = 'bold 21px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('自己拿主意   ✦   想了就干   ✦   聚会主场   ✦   当场翻篇', 85, 775);

      // Quote Card Box (Golden parchment)
      ctx.fillStyle = '#FAF5E8';
      ctx.strokeStyle = '#E5D9C4';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(85, 825, 730, 280, 28);
      ctx.fill();
      ctx.stroke();

      // Quote Mark icon “
      ctx.fillStyle = '#D6C5AA';
      ctx.font = 'bold 80px serif';
      ctx.fillText('“', 115, 885);

      // Quote Headline
      ctx.fillStyle = '#1A120B';
      ctx.font = 'bold 30px "Songti SC", "SimSun", serif';
      ctx.fillText('「以锋芒划破迷局，用结果重塑规则。」', 145, 915);

      // Quote Description lines
      ctx.fillStyle = '#5A4D3E';
      ctx.font = '22px "Songti SC", "SimSun", serif';
      ctx.fillText('既能镇住大局，也敢亲手推倒重来——从乱到新，是你的主', 125, 975);
      ctx.fillText('场。破局是你的天赋，不是你的义务。', 125, 1020);

      // Footer Meta
      ctx.fillStyle = '#7D7060';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText(`档案编号 XG-${report.archetypeId}`, 85, 1165);

      // Divider Line
      ctx.strokeStyle = '#EAE1D1';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(85, 1205);
      ctx.lineTo(815, 1205);
      ctx.stroke();

      // Bottom Left Brand
      ctx.fillStyle = '#7D7060';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('星格 XINGGE  ·  微信小程序', 85, 1265);

      ctx.fillStyle = '#8C6628';
      ctx.font = 'bold 17px sans-serif';
      ctx.fillText('测测你的专属性格说明书', 85, 1300);

      // Bottom Right Mini App Code Box (Dashed box)
      ctx.strokeStyle = '#8C6628';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.roundRect(700, 1230, 115, 115, 18);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#7A6A55';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('小程序码', 757, 1295);

      ctx.restore();

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `星格说明书_${report.name}.png`;
      link.href = dataUrl;
      link.click();
      showToast('高清海报已保存！');
    } catch (err) {
      console.error(err);
      showToast('海报导出失败，请重试');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-between min-h-[calc(100vh-65px)] bg-gradient-to-b from-[#EDE7DC] via-[#EAE2D5] to-[#E5DDCF] px-3 sm:px-4 py-3 select-none relative overflow-y-auto">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#FAF7F0] text-[#1A130C] px-5 py-2.5 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2 border border-[#8C6628]/40"
          >
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Controls Bar */}
      <div className="w-full max-w-[440px] flex items-center justify-between px-1 mb-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-[#5C4F40] hover:text-[#1A120B] bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-full border border-[#D5CABB] transition-all cursor-pointer shadow-2xs font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>返回报告</span>
        </button>

        <button
          type="button"
          id="top-download-poster-btn"
          onClick={handleDownloadPoster}
          disabled={downloading}
          className="flex items-center gap-1.5 text-xs text-white hover:text-white bg-[#8C6628] hover:bg-[#785620] px-3.5 py-1.5 rounded-full border border-[#8C6628] transition-all cursor-pointer shadow-2xs font-medium"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{downloading ? '保存中...' : '保存高清海报'}</span>
        </button>
      </div>

      {/* POSTER CARD (Enlarged & Prominent) */}
      <div className="w-full max-w-[440px] flex-1 flex flex-col justify-center my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="w-full rounded-[30px] border border-[#DFD5C2] bg-[#FAF7F0] shadow-xl flex flex-col justify-between relative overflow-hidden p-5 sm:p-6 text-left"
        >
          {/* 1. Header with Left Title & Right Tilted Stamp */}
          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-0.5">
              <h2 className="text-2xl sm:text-[26px] font-serif-cn font-black tracking-wide text-[#1A130C]">
                你的性格说明书
              </h2>
              <div className="text-[11px] sm:text-xs font-sans font-bold tracking-[0.15em] text-[#8C7E6C] uppercase">
                XINGGE PERSONALITY MANUAL · {userDateText}
              </div>
            </div>

            {/* Tilted Stamp Badge */}
            <div className="relative -rotate-6 shrink-0 mt-0.5">
              <div className="bg-[#FAF5EB]/95 border-2 border-[#8C6628] rounded-xl px-2.5 py-1 text-center shadow-2xs">
                <div className="text-[11px] font-serif-cn font-bold text-[#8C6628] leading-tight">
                  星格编辑部
                </div>
                <div className="text-[11px] font-serif-cn font-bold text-[#8C6628] leading-tight mt-0.5">
                  鉴定专用章
                </div>
              </div>
            </div>
          </div>

          {/* 2. "经鉴定，你是一一" & Massive Archetype Title with Marker Highlight */}
          <div className="pt-4 space-y-1 relative z-10">
            <div className="text-sm font-sans font-bold text-[#5A4E40]">
              经鉴定，你是一一
            </div>

            <div className="relative inline-block">
              {/* Highlight Underlay Bar */}
              <div className="absolute bottom-1.5 left-0 right-0 h-3.5 bg-[#EBDDBE] rounded-xs -z-0" />
              <h1 className="text-5xl sm:text-[54px] font-serif-cn font-black tracking-tight text-[#1A130C] relative z-10 leading-none">
                {report.name}
              </h1>
            </div>

            <div className="text-xs font-sans font-black tracking-[0.2em] text-[#8C6628] uppercase pt-1">
              THE GAMECHANGER · 变革手
            </div>
          </div>

          {/* 3. Mascot Card & Rarity Block (Side by side) */}
          <div className="pt-4 flex items-center gap-4 relative z-10">
            {/* Mascot Image Card */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#F4EDE0] overflow-hidden shadow-2xs border border-[#E8DFC9] shrink-0">
              <img
                src={starMascotImg}
                alt="星格小人原型"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Information */}
            <div className="space-y-1.5">
              <div className="text-lg text-[#8C6628] tracking-widest leading-none">
                ★★★
              </div>
              <div className="text-xl font-serif-cn font-black text-[#2A1F13]">
                稀有复合型
              </div>
              <div className="text-xs sm:text-sm text-[#7D7060]">
                极少数人和你一样
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#5A4D3E] pt-0.5">
                主心骨 × 开路人
              </div>
            </div>
          </div>

          {/* 4. Keyword Bullets Row */}
          <div className="pt-4 flex items-center justify-between text-xs sm:text-[13px] font-medium text-[#524434] relative z-10 px-0.5">
            <span>自己拿主意</span>
            <span className="text-[#8C6628] text-[10px]">✦</span>
            <span>想了就干</span>
            <span className="text-[#8C6628] text-[10px]">✦</span>
            <span>聚会主场</span>
            <span className="text-[#8C6628] text-[10px]">✦</span>
            <span>当场翻篇</span>
          </div>

          {/* 5. Gold Highlight Quote Card */}
          <div className="mt-3.5 bg-[#FAF5E8] rounded-2xl p-3.5 sm:p-4 border border-[#E5D9C4] relative z-10 shadow-2xs space-y-1.5">
            <div className="text-sm sm:text-[15px] font-serif-cn font-bold text-[#1A120B] leading-snug">
              「以锋芒划破迷局，用结果重塑规则。」
            </div>
            <p className="text-xs sm:text-[12px] font-serif-cn text-[#5A4D3E] leading-relaxed">
              既能镇住大局，也敢亲手推倒重来——从乱到新，是你的主场。破局是你的天赋，不是你的义务。
            </p>
          </div>

          {/* 6. Footer Metadata & Mini App Code */}
          <div className="pt-3.5 space-y-2 relative z-10">
            <div className="text-xs font-mono text-[#7D7060] font-medium">
              档案编号 XG-037
            </div>

            <div className="border-t border-[#EAE1D1] pt-2.5 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-[#7D7060]">
                  星格 XINGGE · 微信小程序
                </div>
                <div className="text-[11px] sm:text-xs text-[#8C6628] font-medium">
                  测测你的专属性格说明书
                </div>
              </div>

              {/* Dashed App Code Box */}
              <div className="w-13 h-13 border border-dashed border-[#8C6628]/70 rounded-xl flex items-center justify-center text-[10px] text-[#7A6A55] font-semibold bg-white/70 shadow-2xs p-1">
                小程序码
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ACTION BUTTONS */}
      <div className="w-full max-w-[440px] pt-3 pb-1 space-y-2">
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            id="share-to-friends-btn"
            onClick={handleShareToFriends}
            className="w-full py-3.5 bg-[#8C6628] hover:bg-[#785620] active:scale-[0.99] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer select-none"
          >
            <Share2 className="w-4 h-4" />
            <span>分享给朋友</span>
          </button>

          <button
            type="button"
            id="invite-friends-test-btn"
            onClick={handleInviteFriends}
            className="w-full py-3.5 bg-[#FAF7F0] hover:bg-white active:scale-[0.99] text-[#4A4034] border border-[#D5CABB] text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer select-none"
          >
            <Users className="w-4 h-4 text-[#8C6628]" />
            <span>邀请朋友评测</span>
          </button>
        </div>
      </div>
    </div>
  );
};

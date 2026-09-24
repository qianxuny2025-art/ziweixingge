import React from 'react';
import {
  Share2,
  Sparkles,
  BarChart3,
  LayoutGrid,
  Eye,
  AlertTriangle,
  Compass,
  Briefcase,
  Heart,
  MessageCircle,
  User,
  Home,
  Clock,
  RotateCcw,
  Hand,
  Download,
} from 'lucide-react';
import { motion } from 'motion/react';
import { PersonalityReport, UserProfile } from '../types';
import { RadarChart } from './RadarChart';
import { SpectrumSlider } from './SpectrumSlider';

interface ReportPageProps {
  report: PersonalityReport;
  userProfile: UserProfile;
  onOpenShare: () => void;
  onRetest: () => void;
  onGoToProfile?: () => void;
}

export const ReportPage: React.FC<ReportPageProps> = ({
  report,
  userProfile,
  onOpenShare,
  onRetest,
  onGoToProfile,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="flex flex-col min-h-full px-4 sm:px-5 py-5 space-y-7 pb-16 bg-[#F6F2EA] relative overflow-hidden"
    >
      {/* 00. Top Header Navigation */}
      <motion.div
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between pt-1"
      >
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-8 h-8 rounded-lg bg-[#8C6628] text-white flex items-center justify-center font-serif-cn font-bold text-base shadow-2xs select-none"
          >
            ✦
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#2E2822] tracking-wide leading-tight font-serif-cn">
              星格专属性格说明书
            </span>
            <span className="text-[10px] text-[#918576] font-sans tracking-wider leading-tight">
              发现更真实的自己
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onGoToProfile && (
            <motion.button
              type="button"
              id="report-profile-top-btn"
              onClick={onGoToProfile}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-3 py-1.5 rounded-full border border-[#D5CABB] bg-white/90 hover:bg-white text-xs font-medium text-[#5E5346] flex items-center gap-1 transition-all shadow-2xs cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-[#8C6628]" />
              <span>我的</span>
            </motion.button>
          )}

          <motion.button
            type="button"
            id="share-report-top-btn"
            onClick={onOpenShare}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-3 py-1.5 rounded-full border border-[#D5CABB] bg-white/90 hover:bg-white text-xs font-medium text-[#5E5346] flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-[#8C6628]" />
            <span>分享</span>
          </motion.button>
        </div>
      </motion.div>

      {/* 00. Main Hero Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-3.5 pt-1"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <motion.h1
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl sm:text-5xl font-serif-cn font-bold tracking-tight text-[#241F1A]"
          >
            {report.name}
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[11px] font-sans tracking-widest text-[#8C6628] uppercase font-bold px-2.5 py-1 rounded-md bg-[#FAF5EB] border border-[#E5DAC8]"
          >
            {report.enName}
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-sm sm:text-base text-[#6E6354] tracking-wide font-medium"
        >
          {report.stars}
        </motion.p>

        {/* Summary Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="bg-[#FAF6EF] border border-[#E9E1D2] rounded-2xl p-4.5 sm:p-5 relative shadow-xs space-y-3.5"
        >
          <div className="text-[15px] sm:text-base leading-relaxed text-[#352D25] font-serif-cn">
            <span className="font-bold text-[#8C6628] mr-1.5">
              一句话画像 |
            </span>
            {report.summary}
          </div>

          {/* Tags & Poetic lines */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#EFE8DA]">
            <div className="flex flex-wrap gap-1.5">
              {report.tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + idx * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.06, backgroundColor: '#E5DC倘C' }}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#EFE8DA] text-[#6E5F4E] transition-all"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col text-[11px] text-[#8C7E6D] text-right font-serif-cn italic space-y-0.5">
              <div className="flex items-center justify-end gap-1">
                <span className="text-[#8C6628] text-[9px]">✧</span>
                <span>{report.poeticQuotes[0]}</span>
              </div>
              <div>{report.poeticQuotes[1]}</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 01. Section 1: 型格构成与能量 ALL ABOUT YOU */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="flex items-baseline justify-between border-b border-[#E7DFCF] pb-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#8C6628]" />
            <h2 className="text-base font-serif-cn font-bold text-[#2A231C]">
              型格构成与能量
            </h2>
          </div>
          <span className="text-[11px] font-sans text-[#968978] tracking-widest uppercase">
            ALL ABOUT YOU
          </span>
        </div>

        <div className="bg-[#FAF7F2] rounded-2xl border border-[#E8E0D1] p-4.5 sm:p-5 shadow-xs space-y-5">
          {/* Formula Row */}
          <div className="flex flex-col items-center space-y-2.5">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 w-full">
              {/* Part 1 */}
              <motion.div
                whileHover={{ y: -2 }}
                className="flex-1 max-w-[110px] bg-white border border-[#E1D7C6] rounded-xl p-2.5 text-center shadow-2xs transition-shadow hover:shadow-xs"
              >
                <div className="text-xs sm:text-sm font-bold text-[#2D261E]">
                  {report.makeup.part1.title}
                </div>
                <div className="text-[9px] text-[#968978] tracking-wider mt-0.5">
                  {report.makeup.part1.sub}
                </div>
              </motion.div>

              <span className="text-[#8C6628] font-bold text-sm select-none">+</span>

              {/* Part 2 */}
              <motion.div
                whileHover={{ y: -2 }}
                className="flex-1 max-w-[110px] bg-white border border-[#E1D7C6] rounded-xl p-2.5 text-center shadow-2xs transition-shadow hover:shadow-xs"
              >
                <div className="text-xs sm:text-sm font-bold text-[#2D261E]">
                  {report.makeup.part2.title}
                </div>
                <div className="text-[9px] text-[#968978] tracking-wider mt-0.5">
                  {report.makeup.part2.sub}
                </div>
              </motion.div>

              <span className="text-[#8C6628] font-bold text-sm select-none">→</span>

              {/* Result */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex-1 max-w-[110px] bg-[#8C6628] border border-[#785620] rounded-xl p-2.5 text-center text-white shadow-xs"
              >
                <div className="text-xs sm:text-sm font-bold">
                  {report.makeup.result.title}
                </div>
                <div className="text-[9px] text-white/80 tracking-wider mt-0.5">
                  {report.makeup.result.sub}
                </div>
              </motion.div>
            </div>

            {/* Rarity */}
            <span className="text-xs text-[#7A6E5E] font-medium tracking-wide">
              {report.makeup.rarity}
            </span>
          </div>

          {/* 6-Axis Radar Chart */}
          <div className="pt-2 border-t border-[#EDE5D6] flex flex-col items-center">
            <RadarChart dimensions={report.radarDimensions} size={300} />
          </div>

          {/* 6 Dimension Slider Spectrum Bars */}
          <div className="space-y-4 pt-3 border-t border-[#EDE5D6]">
            {report.spectrumBars.map((bar, idx) => (
              <SpectrumSlider key={idx} item={bar} index={idx} isAnimated={true} />
            ))}

            <p className="text-xs text-[#9E9180] text-center pt-2 font-sans">
              轴的位置由出生时刻与答案校准，只描述倾向，不分高下
            </p>
          </div>

          {/* Deep Narrative Insight Block */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-[#FAF5EB] rounded-xl border border-[#E8DFC9] p-4.5 space-y-3 shadow-2xs transition-transform"
          >
            <p className="font-serif-cn text-xs sm:text-[13px] leading-relaxed text-[#3F362D]">
              {report.deepInsight.para1}
            </p>
            <p className="font-serif-cn text-xs sm:text-[13px] leading-relaxed text-[#3F362D]">
              {report.deepInsight.para2}
            </p>
            <p className="text-xs font-bold text-[#8C6628] pt-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{report.deepInsight.highlight}</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 02. Section 2: 你的底色 YOUR BASE */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="flex items-baseline justify-between border-b border-[#E7DFCF] pb-2">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-4 h-4 text-[#8C6628]" />
            <h2 className="text-base font-serif-cn font-bold text-[#2A231C]">
              你的底色
            </h2>
          </div>
          <span className="text-[11px] font-sans text-[#968978] tracking-widest uppercase">
            YOUR BASE
          </span>
        </div>

        <div className="space-y-3">
          {report.fusionOrigins.map((origin, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="bg-[#FAF7F2] hover:bg-white rounded-2xl border border-[#E8E0D1] p-4 shadow-xs flex gap-3.5 items-start transition-colors"
            >
              {/* Left Badge with Character */}
              <div className="w-13 h-15 bg-[#F0E9DD] border border-[#DFCFC0] rounded-xl flex flex-col items-center justify-center shrink-0 p-1 shadow-2xs">
                <span className="text-2xl font-serif-cn font-bold text-[#8C6628] leading-none">
                  {origin.char}
                </span>
                <span className="text-[9px] text-[#8C7E6D] mt-1 leading-tight text-center">
                  {origin.badge}
                </span>
              </div>

              {/* Right Content */}
              <div className="space-y-1 flex-1">
                <h3 className="font-serif-cn font-bold text-sm text-[#2E2720]">
                  {origin.title}
                </h3>
                <p className="text-xs text-[#6E6354] leading-relaxed">
                  {origin.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Fusion Summary */}
          <div className="bg-[#FAF5EB] rounded-xl border border-[#E8DFCF] p-4 text-xs text-[#4A4034] leading-relaxed font-serif-cn shadow-2xs">
            {report.fusionSummary}
          </div>
        </div>
      </motion.section>

      {/* 03. Section 3: 大家眼中的你 IN THEIR EYES */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="flex items-baseline justify-between border-b border-[#E7DFCF] pb-2">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#8C6628]" />
            <h2 className="text-base font-serif-cn font-bold text-[#2A231C]">
              大家眼中的你
            </h2>
          </div>
          <span className="text-[11px] font-sans text-[#968978] tracking-widest uppercase">
            IN THEIR EYES
          </span>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
            {report.perspectives.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -3, backgroundColor: '#FFFFFF' }}
                className="bg-[#FAF7F2] rounded-2xl border border-[#E9E1D2] p-3 shadow-2xs flex flex-col items-center text-center space-y-2 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#F0E9DD] text-[#8C6628] flex items-center justify-center">
                  {p.iconType === 'friend' && <User className="w-4 h-4" />}
                  {p.iconType === 'colleague' && <Briefcase className="w-4 h-4" />}
                  {p.iconType === 'family' && <Home className="w-4 h-4" />}
                </div>

                <span className="text-xs font-semibold text-[#30281F]">
                  {p.role}
                </span>

                <div className="font-serif-cn text-xs font-bold text-[#2E2720] leading-snug">
                  {p.quote}
                </div>

                <p className="text-[11px] leading-tight text-[#756A5B]">
                  {p.sub}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#FAF5EB] rounded-xl border border-[#E8DFCF] p-4 text-xs text-[#4A4034] leading-relaxed font-serif-cn shadow-2xs">
            {report.perspectiveBottomNote}
          </div>
        </div>
      </motion.section>

      {/* 04. Section 4: 你的三大性格优势 TOP STRENGTHS */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="flex items-baseline justify-between border-b border-[#E7DFCF] pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8C6628]" />
            <h2 className="text-base font-serif-cn font-bold text-[#2A231C]">
              你的三大性格优势
            </h2>
          </div>
          <span className="text-[11px] font-sans text-[#968978] tracking-widest uppercase">
            TOP STRENGTHS
          </span>
        </div>

        <div className="space-y-3">
          {report.topStrengths.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="bg-[#FAF7F2] hover:bg-white rounded-2xl border border-[#E8E0D1] p-4 shadow-xs space-y-1.5 transition-colors"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-serif-cn font-bold italic text-[#8C6628]">
                  {item.id}
                </span>
                <span className="text-sm font-serif-cn font-bold text-[#2E2720]">
                  {item.title}
                </span>
              </div>
              <p className="text-xs text-[#6E6354] leading-relaxed pl-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 05. Section 5: 需要留意的三个盲区 GROWTH AREAS */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="flex items-baseline justify-between border-b border-[#E7DFCF] pb-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#8C6628]" />
            <h2 className="text-base font-serif-cn font-bold text-[#2A231C]">
              需要留意的三个盲区
            </h2>
          </div>
          <span className="text-[11px] font-sans text-[#968978] tracking-widest uppercase">
            GROWTH AREAS
          </span>
        </div>

        <div className="space-y-3">
          {report.growthAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="bg-[#FAF7F2] hover:bg-white rounded-2xl border border-[#E8E0D1] p-4 shadow-xs space-y-2 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#F0E9DD] text-[#8C6628] flex items-center justify-center">
                    {area.iconType === 'hand' && <Hand className="w-3.5 h-3.5" />}
                    {area.iconType === 'clock' && <Clock className="w-3.5 h-3.5" />}
                    {area.iconType === 'refresh' && <RotateCcw className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-sm font-serif-cn font-bold text-[#2E2720]">
                    {area.title}
                  </span>
                </div>

                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#EAE2D3] text-[#786958] font-medium">
                  {area.tag}
                </span>
              </div>

              <p className="text-xs text-[#6E6354] leading-relaxed pl-8">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 06. Section 6: 场景应用指南 WHERE YOU SHINE */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <div className="flex items-baseline justify-between border-b border-[#E7DFCF] pb-2">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#8C6628]" />
            <h2 className="text-base font-serif-cn font-bold text-[#2A231C]">
              场景应用指南
            </h2>
          </div>
          <span className="text-[11px] font-sans text-[#968978] tracking-widest uppercase">
            WHERE YOU SHINE
          </span>
        </div>

        <div className="space-y-3.5">
          {report.sceneGuides.map((guide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="bg-[#FAF7F2] hover:bg-white rounded-2xl border border-[#E8E0D1] p-4.5 shadow-xs space-y-3 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#F0E9DD] text-[#8C6628] flex items-center justify-center">
                  {guide.iconType === 'career' && <Briefcase className="w-4 h-4" />}
                  {guide.iconType === 'love' && <Heart className="w-4 h-4" />}
                  {guide.iconType === 'social' && <MessageCircle className="w-4 h-4" />}
                </div>
                <span className="text-sm font-bold text-[#2E2720]">
                  {guide.category}
                </span>
                <span className="text-[10px] text-[#968978] font-sans tracking-wider">
                  {guide.enCategory}
                </span>
              </div>

              {/* Main Analysis */}
              <p className="text-xs sm:text-[13px] text-[#554A3E] leading-relaxed">
                {guide.desc}
              </p>

              {/* Notice Pill/Box */}
              <div className="bg-[#FAF5EB] rounded-xl border border-[#E8DFCF] p-3 text-xs text-[#6B5E4F] leading-relaxed">
                <span className="font-semibold text-[#8C6628] mr-1">
                  {guide.tipPrefix}
                </span>
                {guide.tipContent}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Dark Card: LAST WORDS 终章寄语 */}
      <motion.section
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="bg-[#201D1A] text-[#EDE8DF] rounded-3xl p-6 sm:p-7 shadow-md space-y-5 border border-[#332E29] relative overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-12 -right-12 w-48 h-48 bg-[#8C6628] rounded-full blur-3xl pointer-events-none"
        />

        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-3xl font-serif-cn text-[#8C6628] leading-none select-none inline-block"
        >
          “
        </motion.div>

        <div className="font-serif-cn text-lg sm:text-xl text-[#FAF5EB] leading-relaxed space-y-1 relative z-10">
          <p className="font-bold">{report.lastWords.headline[0]}</p>
          <p className="font-bold">{report.lastWords.headline[1]}</p>
          <p className="text-base text-[#D4C9B8] pt-1">{report.lastWords.headline[2]}</p>
          <p className="text-xl sm:text-2xl text-[#E2BB77] font-bold">
            {report.lastWords.headline[3]}
          </p>
        </div>

        <p className="text-xs sm:text-[13px] text-[#A89F92] leading-relaxed font-normal pt-2 border-t border-[#38332C] relative z-10">
          {report.lastWords.subtext}
        </p>
      </motion.section>

      {/* Bottom Actions: 保存报告 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="pt-2 space-y-3"
      >
        <motion.button
          type="button"
          id="generate-share-poster-btn"
          onClick={onOpenShare}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 8px 24px -4px rgba(140, 102, 40, 0.35)',
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-[#8C6628] hover:bg-[#785620] active:scale-[0.99] text-white font-medium text-base rounded-xl transition-all shadow-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer select-none"
        >
          <Download className="w-4 h-4" />
          <span>保存报告</span>
        </motion.button>

        <p className="text-center text-xs text-[#8A7D6C]">
          生成长图 · 可保存到相册或分享好友
        </p>

        <div className="flex justify-center pt-1">
          <button
            type="button"
            id="retest-btn"
            onClick={onRetest}
            className="text-xs text-[#8A7D6C] hover:text-[#8C6628] underline underline-offset-4 cursor-pointer transition-colors"
          >
            修改信息或重新测评
          </button>
        </div>

        {/* Footer Meta */}
        <div className="text-center text-[11px] text-[#A69B8D] leading-relaxed pt-3 border-t border-[#E8DFCF] space-y-1">
          <p>
            {report.footerMeta.brand} | {report.footerMeta.date} | {report.footerMeta.version}
          </p>
          <p>{report.footerMeta.disclaimer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

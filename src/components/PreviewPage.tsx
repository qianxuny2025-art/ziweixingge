import React, { useState } from 'react';
import {
  Lock,
  Sparkles,
  ShieldCheck,
  Star,
  Users,
  Eye,
  Zap,
  Compass,
  Award,
  CheckCircle2,
  User,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PersonalityReport } from '../types';
import { SpectrumSlider } from './SpectrumSlider';

interface PreviewPageProps {
  report: PersonalityReport;
  onBack: () => void;
  onUnlock: () => void;
}

export const PreviewPage: React.FC<PreviewPageProps> = ({
  report,
  onBack,
  onUnlock,
}) => {
  const [activeTab, setActiveTab] = useState<'sample' | 'outline'>('sample');

  const lockedModules = [
    {
      id: '01',
      title: '六维能量倾向全景雷达与谱系全解',
      tag: '深度量化',
      icon: Compass,
      desc: '含决策风格、执行节奏、内外向等 6 维精准百分比及对立极解析',
      highlight: '92% 执行力 · 88% 决策自主性',
    },
    {
      id: '02',
      title: '他者镜像：朋友 · 同事 · 家人三重视角真实画像',
      tag: '社会镜子',
      icon: Eye,
      desc: '从 3 个亲疏群体视角揭秘你在他人眼中的真实气场与独特存在感',
      highlight: '“有他在，天塌不下来” · 同事眼中的主心骨',
    },
    {
      id: '03',
      title: '三大核心特质底色与底层潜意识动机',
      tag: '内核溯源',
      icon: Zap,
      desc: '深挖性格原型的内在心理驱动力，看透你在高压与逆境中的真正底牌',
      highlight: '从「乱」到「新」的破局天赋',
    },
    {
      id: '04',
      title: '三大天赋优势 × 三大隐性成长盲区应对法则',
      tag: '避坑指引',
      icon: ShieldCheck,
      desc: '剖析你的不可替代优势，并给出克服过度承担、节奏焦虑的具体解法',
      highlight: '防消耗 · 防内耗 · 能量自洽',
    },
    {
      id: '05',
      title: '职场操盘 · 亲密关系 · 社交相处实操场景指引',
      tag: '场景应用',
      icon: Users,
      desc: '定制跨部门沟通、亲密连接边界与社交电量管理的专属相处策略',
      highlight: '职场跃迁 + 关系减负双重赋能',
    },
    {
      id: '06',
      title: '终章专属定制启示与内在自洽沉淀寄语',
      tag: '专属印章',
      icon: Award,
      desc: '生成独家性格说明书印章、自洽沉淀寄语及可保存的高清纪念海报',
      highlight: '给自己的专属人生说明书',
    },
  ];

  const reviews = [
    {
      user: '用户***823',
      tag: '测出：破局者',
      content: '“太准了！特别是他人眼中的镜像视角和深度特质那一段，完全戳中了我在人际和做事里总是不知不觉冲在前面的心理机制。”',
    },
    {
      user: '用户***491',
      tag: '测出：破局者',
      content: '“以前总觉得自己太要强容易累，看完报告里的盲区应对部分，终于知道怎么跟自己的急性子和解了。”',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col min-h-full bg-[#F7F3EB] text-[#25201B] relative"
    >
      {/* Top Banner with subtle pulse animation */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="bg-[#8C6628] text-white px-4 py-2.5 flex items-center justify-between text-xs tracking-wider shadow-2xs"
      >
        <div className="flex items-center gap-1.5 font-medium">
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F6E6C5]" />
          </motion.span>
          <span>你的专属报告已生成（试读预览中）</span>
        </div>
        <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-sans">
          已完成 8 题深度测评
        </span>
      </motion.div>

      <div className="flex-1 px-4 sm:px-5 py-5 space-y-5 max-w-lg mx-auto w-full">
        {/* Archetype Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E7DDD0] shadow-sm space-y-4 relative overflow-hidden"
        >
          {/* Subtle golden corner breathing ambient */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.35, 0.65, 0.35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-10 -right-10 w-44 h-44 bg-[#F4E8D4] rounded-full blur-2xl pointer-events-none"
          />

          {/* Archetype Header (Clean, without coherence rating box) */}
          <div className="space-y-1">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="inline-block text-xs font-medium text-[#8C6628] bg-[#F7EFE2] border border-[#E2D2BC] px-2.5 py-0.5 rounded-full font-serif-cn"
            >
              {report.makeup.rarity}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-3xl font-serif-cn font-bold text-[#231E19] tracking-tight pt-1"
            >
              {report.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xs font-sans tracking-widest text-[#8A7E6F] uppercase"
            >
              {report.enName}
            </motion.p>
          </div>

          {/* Archetype Stars/Motto */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="p-3.5 bg-[#FAF6EE] rounded-2xl border border-[#EBE2D5]"
          >
            <p className="text-sm font-serif-cn text-[#6B5A47] font-medium text-center">
              ✦ {report.stars} ✦
            </p>
            <p className="text-xs text-[#4A4035] text-center mt-1.5 leading-relaxed">
              {report.summary}
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {report.tags.map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.06, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1 rounded-full bg-[#F3ECE0] text-[#635544] border border-[#DFD4C2] font-medium transition-transform"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Formula Makeup */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="pt-3 border-t border-[#EFE8DD] flex items-center justify-between text-xs text-[#706456]"
          >
            <div className="flex items-center gap-1.5 font-medium">
              <span className="px-2 py-0.5 rounded bg-[#FAF6EF] border border-[#DDD3C3]">
                {report.makeup.part1.title}
              </span>
              <span>+</span>
              <span className="px-2 py-0.5 rounded bg-[#FAF6EF] border border-[#DDD3C3]">
                {report.makeup.part2.title}
              </span>
              <span>=</span>
              <span className="px-2 py-0.5 rounded bg-[#8C6628] text-white font-serif-cn shadow-2xs">
                {report.makeup.result.title}
              </span>
            </div>
            <span className="text-[11px] text-[#9E9283]">双核驱动型</span>
          </motion.div>
        </motion.div>

        {/* Tab Switcher for Sample vs Outline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex rounded-2xl bg-[#EBE3D5] p-1 border border-[#DDD3C2]"
        >
          <button
            type="button"
            onClick={() => setActiveTab('sample')}
            className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
              activeTab === 'sample'
                ? 'bg-white text-[#25201B] shadow-xs'
                : 'text-[#736758] hover:text-[#25201B]'
            }`}
          >
            免费试读前瞻 (已解密)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('outline')}
            className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
              activeTab === 'outline'
                ? 'bg-white text-[#25201B] shadow-xs'
                : 'text-[#736758] hover:text-[#25201B]'
            }`}
          >
            完整版说明书大纲 (待解锁)
          </button>
        </motion.div>

        {/* Tab 1: Free Sample Insights & Teaser */}
        <AnimatePresence mode="wait">
          {activeTab === 'sample' && (
            <motion.div
              key="tab-sample"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              {/* Section: Spectrum Bar Sample */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-2xl p-4.5 border border-[#E7DDD0] shadow-2xs space-y-3.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8C6628]" />
                    <h2 className="text-sm font-serif-cn font-bold text-[#2A231C]">
                      部分能量倾向谱系 (公开 2 项)
                    </h2>
                  </div>
                  <span className="text-[11px] text-[#8C6628] font-medium bg-[#F6EDE0] px-2 py-0.5 rounded-full border border-[#DFCBB2]">
                    试读体验
                  </span>
                </div>

                {/* Unlocked 2 items */}
                <div className="space-y-4 pt-1">
                  {report.spectrumBars.slice(0, 2).map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.1, duration: 0.4 }}
                    >
                      <SpectrumSlider item={item} index={idx} isAnimated={true} />
                    </motion.div>
                  ))}
                </div>

                {/* Locked 4 items with compact blur & teaser */}
                <div className="relative pt-1">
                  {/* Overlay Prompt with compact height */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="relative z-10 flex flex-col items-center justify-center text-center bg-[#FAF6EE]/90 backdrop-blur-xs rounded-xl py-3.5 px-4 border border-dashed border-[#D5C6B0] shadow-xs"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#8C6628]">
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Lock className="w-3.5 h-3.5" />
                      </motion.div>
                      <span>剩余 4 个核心维度谱系待解锁</span>
                    </div>
                    <p className="text-[11px] text-[#85796B] mt-1">
                      包含：性格内外向、人际担当、计划性、情绪调节
                    </p>
                  </motion.div>
                </div>

                <p className="text-[11.5px] text-[#A39788] text-center pt-1.5 font-sans">
                  轴的位置由出生时刻与答案校准，只描述倾向，不分高下
                </p>
              </motion.div>

              {/* Section: Deep Insight Teaser with Blur */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-2xl p-4.5 border border-[#E7DDD0] shadow-2xs space-y-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8C6628]" />
                  <h2 className="text-sm font-serif-cn font-bold text-[#2A231C]">
                    深度特质解构 (节选试读)
                  </h2>
                </div>

                {/* Free Paragraph */}
                <p className="text-xs text-[#4A4034] leading-relaxed">
                  {report.deepInsight.para1}
                </p>

                {/* Locked Trait Deconstruction Box (Matching the spectrum locked box style) */}
                <div className="relative pt-1">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="relative z-10 flex flex-col items-center justify-center text-center bg-[#FAF6EE]/90 backdrop-blur-xs rounded-xl py-3.5 px-4 border border-dashed border-[#D5C6B0] shadow-xs"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-medium text-[#8C6628]">
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Lock className="w-3.5 h-3.5" />
                      </motion.div>
                      <span>解锁查看 1,200 字深度特质分析</span>
                    </div>
                    <p className="text-[11px] text-[#85796B] mt-1">
                      包含：底层潜意识动机、逆境心理机制与行动底牌
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Tab 2: Full Outline (6 Locked Modules in 1 Unified Card) */}
          {activeTab === 'outline' && (
            <motion.div
              key="tab-outline"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="space-y-2.5"
            >
              <div className="text-xs text-[#706454] px-1 flex items-center justify-between">
                <span>完整说明书包含以下 6 大专属篇章：</span>
                <span className="text-[#8C6628] font-medium">全景定制</span>
              </div>

              {/* Single Unified Card Container */}
              <div className="bg-white rounded-2xl border border-[#E7DDD0] shadow-2xs divide-y divide-[#F0E9DF] overflow-hidden">
                {lockedModules.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="p-3.5 sm:p-4 flex items-start justify-between gap-2.5 hover:bg-[#FAF7F2]/60 transition-colors"
                    >
                      <div className="flex items-start gap-2.5 flex-1 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-[#F5ECDC] text-[#8C6628] flex items-center justify-center shrink-0 border border-[#E4D3BD] mt-0.5">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-serif-cn font-bold text-[#26201B] leading-snug break-words">
                          {item.title}
                        </h3>
                      </div>

                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#FAF6EE] text-[#8C6628] border border-[#E6D7C3] font-medium shrink-0 whitespace-nowrap mt-0.5">
                        {item.tag}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Proof / Trust Banner with dynamic animations */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.45 }}
          className="bg-[#FAF6EF] rounded-2xl p-4 border border-[#E4DACB] space-y-3 relative overflow-hidden shadow-2xs"
        >
          {/* Subtle warm ambient light */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3E6CE] rounded-full blur-2xl opacity-40 pointer-events-none" />

          <div className="flex items-center justify-between text-xs relative z-10">
            <div className="flex items-center gap-1.5 font-medium text-[#40352A]">
              <motion.div
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#8C6628]" />
              </motion.div>
              <span>
                已有 <span className="font-semibold text-[#8C6628]">138,420+</span> 位用户解锁
              </span>
            </div>

            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-1 text-[#8C6628] font-medium bg-[#F5ECDC] px-2 py-0.5 rounded-full border border-[#DFCBB2]"
            >
              <Star className="w-3.5 h-3.5 fill-[#8C6628] text-[#8C6628]" />
              <span>4.98 分</span>
            </motion.div>
          </div>

          <div className="space-y-2.5 pt-1 border-t border-[#ECE3D5] relative z-10">
            {reviews.map((rev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.12, duration: 0.4 }}
                whileHover={{ scale: 1.015, translateY: -1 }}
                className="bg-white/95 p-3 rounded-xl border border-[#E8DFD2] text-xs space-y-1.5 shadow-2xs transition-shadow hover:shadow-xs"
              >
                <div className="flex items-center justify-between text-[11.5px] text-[#7A6F60]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#F4EBDC] text-[#8C6628] flex items-center justify-center border border-[#DFD0BC]">
                      <User className="w-3 h-3 text-[#8C6628]" />
                    </div>
                    <span className="font-medium text-[#302820] font-sans">{rev.user}</span>
                  </div>
                  <span className="text-[#8C6628] font-medium bg-[#FAF6EE] px-1.5 py-0.5 rounded border border-[#EFE5D6] text-[10.5px]">
                    {rev.tag}
                  </span>
                </div>
                <p className="text-[#594E42] text-[11.5px] leading-relaxed">
                  {rev.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sticky Bottom Action Bar with continuous light sweep & breathing animation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.45 }}
        className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E3D8C8] px-4 py-3 shadow-lg mt-auto"
      >
        <div className="w-full flex items-center justify-between gap-3">
          {/* Price with heartbeat pulse */}
          <div className="flex items-baseline gap-1.5">
            <motion.span
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-xs text-[#E03A3A] font-medium bg-[#FDE8E8] px-1.5 py-0.5 rounded border border-[#F8C8C8]"
            >
              限时特惠
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-2xl font-bold font-serif-cn text-[#E03A3A] inline-block tracking-tight"
            >
              ¥9.9
            </motion.span>
            <span className="text-xs text-[#9E9283] line-through">¥39.9</span>
          </div>

          {/* Unlock Button with right-slanted shimmer sweep shine animation */}
          <motion.button
            type="button"
            id="preview-unlock-btn"
            onClick={onUnlock}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.96 }}
            className="flex-1 max-w-[220px] py-3 px-4 rounded-xl bg-[#8C6628] text-white font-medium text-sm tracking-wider hover:bg-[#785620] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer relative overflow-hidden group"
          >
            {/* Moving light beam sweep across button (Right-slanted without edge clipping) */}
            <motion.div
              animate={{
                x: ['-200%', '450%'],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.2,
              }}
              className="absolute inset-y-0 w-14 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-25 pointer-events-none"
            />

            {/* Lock Icon with wiggle pulse */}
            <motion.div
              animate={{
                rotate: [0, -10, 10, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.5,
              }}
            >
              <Lock className="w-4 h-4 stroke-[2.2]" />
            </motion.div>
            <span className="relative z-10 font-bold">立即解锁</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

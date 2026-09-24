import React, { useState } from 'react';
import { ArrowLeft, Check, Sparkles, ShieldCheck, Zap, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

interface UnlockPageProps {
  onBack: () => void;
  onUnlock: () => void;
  archetypeName?: string;
}

export const UnlockPage: React.FC<UnlockPageProps> = ({
  onBack,
  onUnlock,
  archetypeName = '破局者',
}) => {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handlePay = () => {
    setIsProcessing(true);
    // Simulate swift payment confirmation
    setTimeout(() => {
      setIsProcessing(false);
      onUnlock();
    }, 900);
  };

  const features = [
    '型格构成解析与六维能量倾向全景谱系',
    '深度特质解构与底色源起',
    '朋友 · 同事 · 家人三重视角真实画像',
    '三大核心优势 × 三个盲区的具体应对方法',
    '职场操盘 · 亲密关系 · 社交相处实操指南',
    '终章专属定制启示与内在自洽沉淀寄语',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col min-h-[calc(100vh-65px)] px-4 sm:px-5 py-4 space-y-5 bg-[#F6F2EA] text-[#2A231C]"
    >
      {/* Top Navigation */}
      <div className="flex items-center justify-between py-1">
        <motion.button
          type="button"
          id="unlock-back-btn"
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-8 h-8 rounded-full bg-white/80 border border-[#D5CABB] flex items-center justify-center text-[#5E5346] hover:bg-white transition-colors cursor-pointer shadow-2xs"
          aria-label="返回"
        >
          <ArrowLeft className="w-4 h-4" />
        </motion.button>

        <h1 className="text-base font-serif-cn font-bold text-[#2A231C] tracking-wide">
          解锁完整版说明书
        </h1>

        <div className="w-8" />
      </div>

      {/* Main Premium Card (Light aesthetic with warm golden tones) */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white/95 text-[#2A231C] rounded-3xl p-5 sm:p-6 border border-[#E5DAC8] shadow-sm space-y-4.5 relative overflow-hidden"
      >
        {/* Subtle breathing golden ambient aura */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-10 -right-10 w-52 h-52 bg-[#8C6628] rounded-full blur-3xl pointer-events-none"
        />

        {/* Top Archetype Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE4] border border-[#DFCDB7] text-xs text-[#8C6628] font-medium font-serif-cn shadow-2xs"
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8C6628]" />
          </motion.span>
          <span>完整版 · {archetypeName}</span>
        </motion.div>

        {/* Big Title & Subtitle */}
        <div className="space-y-1">
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-2xl sm:text-3xl font-serif-cn font-bold tracking-tight text-[#2A231C]"
          >
            你的专属性格说明书
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-xs text-[#7A6E5E] font-sans"
          >
            6 大核心模块全景呈现 · 已根据你的答题生成
          </motion.p>
        </div>

        {/* 6 Key Features List with staggered spring animations */}
        <div className="space-y-2.5 pt-2 border-t border-[#EAE1D2]">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2 + idx * 0.07,
                duration: 0.35,
                ease: 'easeOut',
              }}
              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#3B3228]"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.25 + idx * 0.07,
                  type: 'spring',
                  stiffness: 450,
                  damping: 20,
                }}
                className="w-4 h-4 rounded-full bg-[#8C6628] text-white flex items-center justify-center shrink-0 shadow-2xs"
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </motion.div>
              <span className="leading-snug">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Price Box */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4 }}
          className="pt-3 border-t border-[#EAE1D2] flex items-baseline justify-between"
        >
          <div className="flex items-baseline gap-2">
            <motion.span
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-3xl sm:text-4xl font-bold font-serif-cn text-[#8C6628] drop-shadow-2xs"
            >
              ¥9.9
            </motion.span>
            <span className="text-sm text-[#9E9283] line-through">
              ¥39.9
            </span>
          </div>

          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="px-2.5 py-1 rounded-md bg-[#F7F2E8] border border-[#D8C7B0] text-[#8C6628] text-xs font-medium shadow-2xs"
          >
            限时特惠
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Social Proof Line */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="text-center text-xs text-[#8A7D6C] font-serif-cn flex items-center justify-center gap-1.5"
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="text-[#8C6628] inline-block text-xs"
        >
          ✦
        </motion.span>
        <span>已有 12,847 位用户解锁完整版</span>
      </motion.div>

      {/* CTA Button with interactive shimmer beam */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.4 }}
        className="space-y-2 pt-1"
      >
        <motion.button
          type="button"
          id="unlock-now-btn"
          onClick={handlePay}
          disabled={isProcessing}
          whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(140, 102, 40, 0.4)' }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-[#8C6628] hover:bg-[#785620] text-white font-medium text-base rounded-2xl shadow-md tracking-wider flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group"
        >
          {/* Subtle right-slanted shimmer sweep without edge clipping */}
          <motion.div
            animate={{
              x: ['-200%', '450%'],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: 'easeInOut',
            }}
            className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-25 pointer-events-none"
          />

          {isProcessing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
              <span>正在处理中...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span>立即解锁 · ¥9.9</span>
            </>
          )}
        </motion.button>

        <p className="text-center text-xs text-[#968978]">
          微信支付 · 支付成功后立即解锁
        </p>
      </motion.div>

      {/* Three Guarantees Chips with hover micro-transitions */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="flex items-center justify-center gap-2 flex-wrap pt-1"
      >
        <span className="px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#E5DAC8] text-xs text-[#706454] flex items-center gap-1 shadow-2xs hover:border-[#8C6628]/40 transition-colors">
          <Zap className="w-3 h-3 text-[#8C6628]" />
          极速解锁
        </span>
        <span className="px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#E5DAC8] text-xs text-[#706454] flex items-center gap-1 shadow-2xs hover:border-[#8C6628]/40 transition-colors">
          <RefreshCw className="w-3 h-3 text-[#8C6628]" />
          复测免费更新
        </span>
        <span className="px-3 py-1 rounded-full bg-[#FAF5EB] border border-[#E5DAC8] text-xs text-[#706454] flex items-center gap-1 shadow-2xs hover:border-[#8C6628]/40 transition-colors">
          <ShieldCheck className="w-3 h-3 text-[#8C6628]" />
          虚拟内容 · 即时生效
        </span>
      </motion.div>

      {/* Testimonial Quote Card with smooth entry */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.4 }}
        className="bg-[#FAF7F2] rounded-2xl border border-[#E8E0D1] p-4.5 space-y-2 shadow-2xs mt-2"
      >
        <p className="font-serif-cn text-xs sm:text-[13px] leading-relaxed text-[#352D25] italic">
          “像被温柔地点醒了一遍——原来我是这样的人。”
        </p>
        <p className="text-[11px] text-[#8C7E6D] text-right font-sans">
          —— 一位破局者型测评用户
        </p>
      </motion.div>
    </motion.div>
  );
};

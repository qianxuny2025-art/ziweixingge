import React, { useState } from 'react';
import { ShieldCheck, Lock, Trash2, EyeOff, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HomePageProps {
  onStart: () => void;
  onGoToProfile?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart, onGoToProfile }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
  return (
    <div className="flex-1 flex flex-col justify-between items-center min-h-[calc(100vh-60px)] sm:min-h-[760px] relative select-none overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#FAF7F2] to-[#F5EFE4]">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-between items-center px-6 py-6 sm:py-8 w-full relative">
        {/* Ambient Soft Warm Glow in Center (Steady & Pure) */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#8C6628]/5 via-[#FAF0DC]/50 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Background Decorative Sparkles (Celestial 4-point stars) */}
      <motion.div
        animate={{
          y: [-4, 6, -4],
          opacity: [0.2, 0.7, 0.2],
          scale: [0.9, 1.25, 0.9],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-16 left-10 pointer-events-none text-[#8C6628] text-xs"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [6, -6, 6],
          opacity: [0.3, 0.85, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
        className="absolute top-28 right-12 pointer-events-none text-[#8C6628] text-sm"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [-5, 5, -5],
          opacity: [0.15, 0.5, 0.15],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute top-1/2 left-8 pointer-events-none text-[#8C6628] text-[10px]"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          y: [5, -5, 5],
          opacity: [0.2, 0.6, 0.2],
          scale: [0.85, 1.2, 0.85],
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.1,
        }}
        className="absolute top-[44%] right-9 pointer-events-none text-[#8C6628] text-xs"
      >
        ✦
      </motion.div>

      {/* Hero Content Section */}
      <div className="w-full flex flex-col items-center text-center space-y-4 sm:space-y-5 my-auto pt-6 pb-2 relative z-10">
        {/* Eyebrow Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs sm:text-sm tracking-[0.45em] text-[#8C6628] font-medium pl-1"
        >
          性 格 说 明 书
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-[38px] leading-[1.3] font-serif-cn font-bold tracking-tight text-[#251F19] space-y-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            和自己，
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            重新认识一次
          </motion.div>
        </motion.h1>

        {/* Decorative Divider with Central Star */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center gap-3 py-1 w-40 sm:w-44 mx-auto"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C8BCAB] to-[#C8BCAB] origin-right"
          />
          <motion.span
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-[#8C6628] text-xs select-none inline-block"
          >
            ✦
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
            className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C8BCAB] to-[#C8BCAB] origin-left"
          />
        </motion.div>

        {/* Poetic Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-1.5 text-xs sm:text-sm text-[#736655] font-normal leading-relaxed tracking-wider"
        >
          <p>从出生时刻，到此时此刻</p>
          <p>读懂你本来的样子</p>
        </motion.div>
      </div>

      {/* Bottom Interactive Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex flex-col items-center space-y-8 pb-4 relative z-10"
      >
        {/* Concentric Halo + Solid Golden Start Button (No fading/breathing) */}
        <div className="relative flex items-center justify-center">
          {/* Outward Subtle Cosmic Ripple Wave (Rippling outwards behind the solid button) */}
          <motion.div
            animate={{
              scale: [1, 1.48],
              opacity: [0.35, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#8C6628]/35 pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1, 1.48],
              opacity: [0.35, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: 1.6,
              ease: 'easeOut',
            }}
            className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#8C6628]/25 pointer-events-none"
          />

          {/* Outermost Static Ambient Ring */}
          <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-full border border-[#8C6628]/15 bg-[#FAF4EA]/70 flex items-center justify-center relative">
            {/* Middle Celestial Ring */}
            <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full border border-[#8C6628]/25 bg-[#F5ECDC]/90 flex items-center justify-center relative shadow-2xs">
              {/* Orbiting Celestial Star (Revolving smoothly around the track like a planet) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 flex items-center justify-center text-[#8C6628] text-xs font-bold select-none drop-shadow-xs">
                  ✦
                </div>
              </motion.div>

              {/* Solid, Dignified Start Button (Always 100% solid & crisp, never fades) */}
              <motion.button
                type="button"
                id="home-start-btn"
                onClick={onStart}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 14px 30px -4px rgba(140, 102, 40, 0.45)',
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                }}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-b from-[#967030] via-[#8C6628] to-[#75521B] text-white shadow-xl flex items-center justify-center cursor-pointer border-2 border-[#FAF4E8]/50 group relative z-10 select-none"
              >
                <span className="text-2xl sm:text-[26px] font-medium tracking-[0.25em] pl-1.5 text-[#FFFDF8] font-serif-cn drop-shadow-xs">
                  开始
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Security & Privacy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center gap-1.5 text-center px-2 z-10 pb-1"
        >
          <button
            type="button"
            onClick={() => setShowPrivacyModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EB]/90 hover:bg-[#F3ECE0] border border-[#E3D8C6] text-xs text-[#6B5D4E] transition-all cursor-pointer group shadow-2xs active:scale-[0.98]"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#8C6628] group-hover:scale-110 transition-transform shrink-0" />
            <span className="font-medium text-[#5E5142]">隐私安全承诺</span>
            <span className="text-[#C4B7A7]">·</span>
            <span>全程加密 · 匿名使用 · 随时可删</span>
          </button>
        </motion.div>
      </motion.div>
    </div>

      {/* Bottom Navigation Menu Bar (Only in Home page) */}
      <div className="w-full bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFC9] pt-2 pb-2 px-6 sm:px-10 flex flex-col items-center justify-between z-20 shrink-0">
        <div className="w-full max-w-sm flex items-center justify-between px-10 sm:px-14">
          {/* Tab 1: 测评 (Active) */}
          <button
            type="button"
            id="tab-quiz-btn"
            className="flex flex-col items-center justify-center gap-1.5 cursor-pointer py-1 px-3"
          >
            <div className="w-8 h-8 rounded-xl bg-[#8C6628] flex items-center justify-center shadow-2xs">
              <div className="flex flex-col gap-1 items-start justify-center w-3.5">
                <span className="w-3.5 h-[2px] bg-white rounded-full" />
                <span className="w-2.5 h-[2px] bg-white rounded-full" />
              </div>
            </div>
            <span className="text-xs font-bold text-[#2E2822] tracking-widest pl-0.5">
              测 评
            </span>
          </button>

          {/* Tab 2: 我的 (With badge '1') */}
          <button
            type="button"
            id="tab-profile-btn"
            onClick={onGoToProfile}
            className="flex flex-col items-center justify-center gap-1.5 cursor-pointer py-1 px-3 group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="w-7 h-7 rounded-xl border border-[#9E9080] flex items-center justify-center text-[#8A7D6C] group-hover:border-[#8C6628] group-hover:text-[#8C6628] transition-all">
                <User className="w-4 h-4 text-[#8A7D6C] group-hover:text-[#8C6628]" strokeWidth={2} />
              </div>
              {/* Badge 1 */}
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8C6628] text-white text-[10px] font-bold flex items-center justify-center leading-none shadow-2xs">
                1
              </div>
            </div>
            <span className="text-xs font-medium text-[#8A7D6C] group-hover:text-[#8C6628] tracking-widest pl-0.5 transition-colors">
              我 的
            </span>
          </button>
        </div>

        {/* Bottom indicator bar */}
        <div className="w-32 h-1 bg-[#D0C5B5] rounded-full mt-2" />
      </div>

      {/* Security & Privacy Guarantee Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-[#FAF7F2] rounded-3xl border border-[#E6DCCE] p-6 max-w-sm w-full shadow-xl space-y-4 text-left relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/80 border border-[#DED4C5] flex items-center justify-center text-[#7A6E5E] hover:bg-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-2.5 pt-1">
                <div className="w-9 h-9 rounded-full bg-[#8C6628]/10 border border-[#8C6628]/20 flex items-center justify-center text-[#8C6628] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#8C6628]" />
                </div>
                <div>
                  <h3 className="text-base font-serif-cn font-bold text-[#2A231C]">
                    隐私与数据安全保障
                  </h3>
                  <p className="text-xs text-[#8C7F6F]">
                    我们把你的隐私安全放在首位
                  </p>
                </div>
              </div>

              {/* 4 Guarantees */}
              <div className="space-y-3 pt-1 text-xs text-[#4A4033] leading-relaxed">
                <div className="flex items-start gap-2.5 bg-white/70 p-2.5 rounded-xl border border-[#EDE5D6]">
                  <EyeOff className="w-4 h-4 text-[#8C6628] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2C251E] block">完全免实名与手机号</span>
                    不获取你的真实姓名、手机号或任何微信好友通讯录，全程保持匿名体验。
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/70 p-2.5 rounded-xl border border-[#EDE5D6]">
                  <Lock className="w-4 h-4 text-[#8C6628] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2C251E] block">信息加密仅用于测算</span>
                    填写的出生日期与时间仅在安全沙箱内用于推导心理特质模型，绝无二次商业挖掘。
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/70 p-2.5 rounded-xl border border-[#EDE5D6]">
                  <Trash2 className="w-4 h-4 text-[#8C6628] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2C251E] block">自主掌控 · 随时彻底删除</span>
                    测算报告存于你的个人设备，在「个人中心」随时支持一键彻底物理抹除记录。
                  </div>
                </div>
              </div>

              {/* Close Confirm Button */}
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="w-full py-2.5 bg-[#8C6628] hover:bg-[#785620] text-white font-medium text-sm rounded-xl transition-all cursor-pointer shadow-xs text-center"
              >
                我已知晓，放心开始
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

import React from 'react';
import { Check, Sparkles, ArrowRight, User } from 'lucide-react';
import { motion } from 'motion/react';

interface UnlockSuccessPageProps {
  onViewReport: () => void;
  onGoToProfile: () => void;
  archetypeName?: string;
  orderNumber?: string;
}

export const UnlockSuccessPage: React.FC<UnlockSuccessPageProps> = ({
  onViewReport,
  onGoToProfile,
  archetypeName = '破局者',
  orderNumber = 'XG202609170832',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col justify-between min-h-[calc(100vh-65px)] px-5 py-8 bg-[#F6F2EA] text-[#2A231C]"
    >
      {/* Top Status & Illustration */}
      <div className="flex flex-col items-center text-center space-y-3 pt-6">
        {/* Animated Glowing Checkmark Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 18,
            delay: 0.1,
          }}
          className="relative mb-2"
        >
          {/* Animated pulse rings */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-2 bg-[#8C6628]/25 rounded-full blur-md"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute inset-0 bg-[#8C6628]/30 rounded-full blur-sm"
          />

          <div className="w-18 h-18 rounded-full bg-[#8C6628] text-white flex items-center justify-center shadow-lg relative z-10">
            <Check className="w-9 h-9 stroke-[2.8]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="text-3xl font-serif-cn font-bold tracking-tight text-[#241F1A]"
        >
          解锁成功
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="text-sm text-[#6E6354] font-medium"
        >
          {archetypeName} · 完整版说明书已解锁
        </motion.p>
      </div>

      {/* Order Detail Receipt Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.45, ease: 'easeOut' }}
        className="bg-[#FAF7F2] rounded-2xl border border-[#E8E0D1] p-5.5 shadow-xs space-y-3.5 my-6 max-w-md mx-auto w-full"
      >
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-[#8C7E6D]">订单编号</span>
          <span className="font-semibold text-[#2A231C] font-mono tracking-wider">
            {orderNumber}
          </span>
        </div>

        <div className="h-px bg-[#EFE8DA]" />

        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-[#8C7E6D]">支付方式</span>
          <span className="font-medium text-[#2A231C]">微信支付</span>
        </div>

        <div className="h-px bg-[#EFE8DA]" />

        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-[#8C7E6D]">支付金额</span>
          <span className="font-bold text-[#8C6628] font-serif-cn text-base">
            ¥9.9
          </span>
        </div>

        <div className="h-px bg-[#EFE8DA]" />

        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-[#8C7E6D]">支付时间</span>
          <span className="font-medium text-[#2A231C]">2026-09-17 16:42</span>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="space-y-3 max-w-md mx-auto w-full pb-2"
      >
        <motion.button
          type="button"
          id="read-full-report-btn"
          onClick={onViewReport}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-[#8C6628] hover:bg-[#785620] text-white font-medium text-base rounded-2xl shadow-md tracking-wider flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>立即阅读完整报告</span>
        </motion.button>

        <motion.button
          type="button"
          id="back-to-profile-btn"
          onClick={onGoToProfile}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3.5 bg-white border border-[#D5CABB] hover:bg-[#FAF5EB] text-[#4A4034] font-medium text-sm rounded-2xl transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <User className="w-4 h-4 text-[#8C6628]" />
          <span>返回个人中心</span>
        </motion.button>

        <p className="text-center text-xs text-[#9E9283] pt-2">
          如未到账，请重启小程序或联系客服处理
        </p>
      </motion.div>
    </motion.div>
  );
};

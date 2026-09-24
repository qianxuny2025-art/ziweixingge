import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Lock, Trash2, EyeOff, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile, Gender } from '../types';
import { WheelTimePicker } from './WheelTimePicker';
import { WheelDatePicker } from './WheelDatePicker';

interface InfoPageProps {
  userProfile: UserProfile;
  onUpdateProfile: (profile: Partial<UserProfile>) => void;
  onStartQuiz: () => void;
  onSkipTimeAndStart: () => void;
}

export const InfoPage: React.FC<InfoPageProps> = ({
  userProfile,
  onUpdateProfile,
  onStartQuiz,
  onSkipTimeAndStart,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [dateError, setDateError] = useState(false);

  // Temporary date wheel state (defaults to 1995-06-15 for scrolling if empty)
  const initialDateParts = userProfile.birthDate ? userProfile.birthDate.split('-') : [];
  const [tempYear, setTempYear] = useState<number>(
    initialDateParts[0] ? parseInt(initialDateParts[0], 10) : 1995
  );
  const [tempMonth, setTempMonth] = useState<number>(
    initialDateParts[1] ? parseInt(initialDateParts[1], 10) : 6
  );
  const [tempDay, setTempDay] = useState<number>(
    initialDateParts[2] ? parseInt(initialDateParts[2], 10) : 15
  );

  // Temporary time wheel state (defaults to 12:00 for scrolling)
  const [tempHour, setTempHour] = useState<number>(
    userProfile.hasSpecificTime ? userProfile.birthHour : 12
  );
  const [tempMinute, setTempMinute] = useState<number>(
    userProfile.hasSpecificTime ? userProfile.birthMinute : 0
  );

  const handleGenderChange = (gender: Gender) => {
    onUpdateProfile({ gender });
  };

  const handleConfirmDate = () => {
    const formattedMonth = String(tempMonth).padStart(2, '0');
    const formattedDay = String(tempDay).padStart(2, '0');
    onUpdateProfile({ birthDate: `${tempYear}-${formattedMonth}-${formattedDay}` });
    setShowDatePicker(false);
    setDateError(false);
  };

  const handleConfirmTime = () => {
    onUpdateProfile({
      birthHour: tempHour,
      birthMinute: tempMinute,
      hasSpecificTime: true,
      isTimeUnknown: false,
    });
    setShowTimePicker(false);
  };

  const handleUnknownTime = () => {
    onUpdateProfile({
      hasSpecificTime: false,
      isTimeUnknown: true,
    });
    setShowTimePicker(false);
  };

  const handleNext = () => {
    if (!userProfile.birthDate) {
      setDateError(true);
      setShowDatePicker(true);
      return;
    }
    onStartQuiz();
  };

  // Formatted date text
  const formattedDateText = userProfile.birthDate ? (() => {
    const parts = userProfile.birthDate.split('-');
    return `${parts[0]}年${parseInt(parts[1], 10)}月${parseInt(parts[2], 10)}日`;
  })() : null;

  return (
    <div className="flex-1 flex flex-col justify-between px-5 py-6 min-h-[calc(100vh-60px)] sm:min-h-[760px] bg-gradient-to-b from-[#FAF6EE] via-[#FAF7F2] to-[#F5EFE4]">
      {/* Top Main Section */}
      <div className="space-y-5">
        {/* Title */}
        <div className="pt-2">
          <h2 className="text-2xl font-serif-cn font-bold tracking-tight text-[#2D261E]">
            填写基本信息
          </h2>
          <p className="text-xs text-[#8A7D6C] pt-1">
            仅用于推导你的心理特质与内在自洽度模型
          </p>
        </div>

        {/* Card 1: Gender & Birth Date */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#E9E2D4] p-5 shadow-xs space-y-4">
          {/* Gender Row */}
          <div className="flex items-center justify-between h-9">
            <span className="text-base text-[#61574C]">性别</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                id="gender-male-btn"
                onClick={() => handleGenderChange('male')}
                className={`w-14 h-8 rounded-full text-sm font-medium border flex items-center justify-center transition-colors cursor-pointer select-none ${
                  userProfile.gender === 'male'
                    ? 'bg-[#8C6628] border-[#8C6628] text-white shadow-2xs'
                    : 'bg-white border-[#DDD3C2] text-[#4F463B] hover:bg-[#F2ECE0]'
                }`}
              >
                男
              </button>
              <button
                type="button"
                id="gender-female-btn"
                onClick={() => handleGenderChange('female')}
                className={`w-14 h-8 rounded-full text-sm font-medium border flex items-center justify-center transition-colors cursor-pointer select-none ${
                  userProfile.gender === 'female'
                    ? 'bg-[#8C6628] border-[#8C6628] text-white shadow-2xs'
                    : 'bg-white border-[#DDD3C2] text-[#4F463B] hover:bg-[#F2ECE0]'
                }`}
              >
                女
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[#EDE6D9] w-full" />

          {/* Birth Date Row (Full-width Touch Target) */}
          <button
            type="button"
            id="birth-date-picker-trigger"
            onClick={() => {
              setShowDatePicker(!showDatePicker);
              if (!showDatePicker) setShowTimePicker(false);
            }}
            className="w-full flex items-center justify-between cursor-pointer py-1 text-left select-none group"
          >
            <span className="text-base text-[#61574C] group-hover:text-[#2C2723] transition-colors">
              出生日期（公历）
            </span>
            <div className="flex items-center gap-1.5 text-base font-medium group-hover:text-[#8C6628] transition-colors">
              {formattedDateText ? (
                <span className="text-[#2C2723]">{formattedDateText}</span>
              ) : (
                <span className="text-[#9E9385] font-normal">请选择出生日期</span>
              )}
              <ChevronDown
                className={`w-4 h-4 text-[#8C6628] stroke-[2.2] transition-transform duration-200 ${
                  showDatePicker ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {/* Prompt if date not yet selected */}
          {dateError && !userProfile.birthDate && (
            <div className="flex items-center gap-1.5 text-xs text-[#B24B30] bg-[#FDF2F0] px-3 py-1.5 rounded-lg border border-[#F3C9BF]">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>请选择出生日期后继续</span>
            </div>
          )}

          {/* Wheel Date Selector when expanded */}
          {showDatePicker && (
            <div className="pt-2 border-t border-[#EDE6D9] space-y-3 animate-fadeIn">
              <WheelDatePicker
                year={tempYear}
                month={tempMonth}
                day={tempDay}
                onChange={(newY, newM, newD) => {
                  setTempYear(newY);
                  setTempMonth(newM);
                  setTempDay(newD);
                }}
              />
              <div className="flex justify-center pb-1">
                <button
                  type="button"
                  id="confirm-date-btn"
                  onClick={handleConfirmDate}
                  className="px-8 py-2 text-xs sm:text-sm font-medium bg-[#8C6628] hover:bg-[#75521B] active:scale-95 text-white rounded-xl transition-all shadow-2xs cursor-pointer"
                >
                  确定
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Card 2: Birth Time (expandable with full-width touch target) */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#E9E2D4] p-5 shadow-xs space-y-4">
          <button
            type="button"
            id="birth-time-picker-trigger"
            onClick={() => {
              setShowTimePicker(!showTimePicker);
              if (!showTimePicker) setShowDatePicker(false);
            }}
            className="w-full flex items-center justify-between cursor-pointer py-1 text-left select-none group"
          >
            <span className="text-base text-[#61574C] group-hover:text-[#2C2723] transition-colors">
              出生时间
            </span>
            <div className="flex items-center gap-1.5 text-base font-medium group-hover:text-[#8C6628] transition-colors">
              {userProfile.hasSpecificTime ? (
                <span className="text-[#2C2723]">
                  {String(userProfile.birthHour).padStart(2, '0')}:{String(userProfile.birthMinute).padStart(2, '0')}
                </span>
              ) : userProfile.isTimeUnknown ? (
                <span className="text-[#6B5E4F] font-normal bg-[#ECE4D5] px-2.5 py-0.5 rounded-full text-xs">
                  不知道出生时间
                </span>
              ) : (
                <span className="text-[#9E9385] font-normal">请选择出生时间</span>
              )}
              <ChevronDown
                className={`w-4 h-4 text-[#8C6628] stroke-[2.2] transition-transform duration-200 ${
                  showTimePicker ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {/* Wheel Time Selector when expanded */}
          {showTimePicker && (
            <div className="pt-2 border-t border-[#EDE6D9] space-y-3 animate-fadeIn">
              {/* Time Roller */}
              <WheelTimePicker
                hour={tempHour}
                minute={tempMinute}
                onChange={(newHour, newMinute) => {
                  setTempHour(newHour);
                  setTempMinute(newMinute);
                }}
              />

              {/* 2 Buttons Side-by-Side: Confirm is larger/prominent, Unknown is subtler */}
              <div className="flex items-center gap-2.5 pt-1">
                {/* Button 1: 不知道出生时间 (Subtle secondary style, less noticeable) */}
                <button
                  type="button"
                  id="unknown-time-btn"
                  onClick={handleUnknownTime}
                  className="flex-1 py-2 px-2.5 text-xs text-[#8A7C6C] bg-[#F2ECE1]/70 hover:bg-[#E8DFD0] hover:text-[#615445] border border-[#DDD3C2] rounded-xl transition-all active:scale-95 cursor-pointer text-center"
                >
                  不知道出生时间
                </button>

                {/* Button 2: 确定 (Larger, prominent primary button) */}
                <button
                  type="button"
                  id="confirm-time-btn"
                  onClick={handleConfirmTime}
                  className="flex-[1.35] py-2.5 px-5 text-sm font-medium bg-[#8C6628] hover:bg-[#785620] text-white rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer text-center tracking-wide"
                >
                  确定
                </button>
              </div>

              {/* Subtle helper text below buttons (Strictly 2 balanced lines) */}
              <div className="text-[10px] sm:text-[11px] text-[#998B7B] text-center pt-1 leading-[1.5] tracking-tight -mx-2.5 sm:mx-0">
                <p>
                  <span className="text-[#57493A] font-medium">温馨提示：</span>
                  出生时间用于更精准评测，可选接近时间，无需纠结分钟；
                </p>
                <p>
                  若不知道可点“不知道出生时间”，后续通过问答帮您辅助确认。
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Area (Position matches HomePage exactly) */}
      <div className="pt-6 space-y-4">
        {/* Next Button */}
        <button
          type="button"
          id="start-assessment-btn"
          onClick={handleNext}
          className="w-full py-3.5 bg-[#8C6628] hover:bg-[#785620] active:scale-[0.99] text-white font-medium text-base rounded-xl transition-all shadow-sm tracking-wider cursor-pointer text-center"
        >
          下一步
        </button>

        {/* Security & Privacy Statement (Matching HomePage position and style exactly, no extra sentence) */}
        <div className="flex flex-col items-center gap-1.5 text-center px-2 z-10 pb-1">
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
        </div>
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

              {/* 3 Guarantees */}
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
                我已知晓，放心继续
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

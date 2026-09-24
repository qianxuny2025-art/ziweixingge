import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  ChevronRight,
  HelpCircle,
  MessageSquare,
  Sparkles,
  LogOut,
  RotateCcw,
  User,
} from 'lucide-react';
import { PersonalityReport, PageView, UserProfile } from '../types';

interface ProfilePageProps {
  report: PersonalityReport;
  userProfile?: UserProfile;
  onNavigate: (page: PageView) => void;
  onClose?: () => void;
  onStartNewQuiz?: () => void;
  onLogout?: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  report,
  userProfile,
  onNavigate,
  onClose,
  onStartNewQuiz,
  onLogout,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [showFaqModal, setShowFaqModal] = useState<boolean>(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false);
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  const userId = 'XG8372';

  const userGenderText = userProfile?.gender === 'female' ? '女' : '男';
  const userBirthDateText = userProfile?.birthDate
    ? userProfile.birthDate.replace(/-/g, '.')
    : '1995.10.24';

  const handleCopyId = () => {
    navigator.clipboard?.writeText(userId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
      setFeedbackText('');
      setShowFeedbackModal(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-65px)] bg-[#F6F2EA] text-[#2A231C] relative justify-between">
      <div className="px-4 sm:px-5 space-y-5 pt-4 pb-6 flex-1">
        {/* User Profile Avatar Section */}
        <div className="flex flex-col items-center text-center space-y-2.5">
          {/* Avatar circle with glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#8C6628]/25 rounded-full blur-md" />
            <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#A67C33] to-[#785620] border-2 border-[#FAF5EB] shadow-md flex items-center justify-center text-white font-serif-cn text-xl font-bold relative z-10">
              破局
            </div>
          </div>

          {/* User ID Pill */}
          <button
            type="button"
            onClick={handleCopyId}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D5CABB] text-xs font-mono font-semibold text-[#453C32] hover:bg-white transition-all cursor-pointer shadow-2xs"
            title="点击复制ID"
          >
            <span>ID:</span>
            <span className="font-bold">{userId}</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-[#8C6628]" />
            )}
          </button>

          {/* History info */}
          <p className="text-xs text-[#8A7E70] font-sans">
            已测 3 次 · 最近 2026-09-17
          </p>
        </div>

        {/* Current Archetype Showcase Card */}
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#E8E0D1] p-5 shadow-xs space-y-3.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 rounded-md bg-[#F0E9DD] text-[#8C6628] text-xs font-semibold">
              主性格原型
            </span>
            <span className="px-2 py-0.5 rounded-md border border-[#E5DAC8] text-[#8C7E6D] text-xs">
              稀有复合型 ★★★
            </span>
          </div>

          <div>
            <h2 className="text-3xl font-serif-cn font-bold text-[#241F1A]">
              {report.name}
            </h2>
            <p className="text-xs sm:text-[13px] text-[#554A3E] leading-relaxed mt-1.5 font-serif-cn">
              "{report.summary}"
            </p>
          </div>

          {/* Hashtag tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="text-xs text-[#7A6D5E] bg-[#EFE8DA] px-2 py-0.5 rounded">
              #统筹大局
            </span>
            <span className="text-xs text-[#7A6D5E] bg-[#EFE8DA] px-2 py-0.5 rounded">
              #敢破敢立
            </span>
            <span className="text-xs text-[#7A6D5E] bg-[#EFE8DA] px-2 py-0.5 rounded">
              #结果说话
            </span>
          </div>

          <div className="h-px bg-[#EDE5D6] pt-1" />

          <button
            type="button"
            id="view-full-report-link"
            onClick={() => onNavigate('report')}
            className="w-full flex items-center justify-between text-xs font-semibold text-[#8C6628] hover:text-[#70501C] pt-0.5 cursor-pointer"
          >
            <span>查看该完整报告</span>
            <span className="text-sm">→</span>
          </button>
        </div>

        {/* Start New Quiz Button directly above 我的报告 */}
        <button
          type="button"
          id="profile-start-new-quiz-btn"
          onClick={onStartNewQuiz}
          className="w-full py-3.5 bg-[#8C6628] hover:bg-[#785620] active:scale-[0.99] text-white font-medium text-sm rounded-xl transition-all shadow-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#F6E6C5]" />
          <span>开始新测评</span>
        </button>

        {/* Section: 我的报告 */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#2A231C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6628]" />
              <span>我的报告</span>
            </div>
            <span className="text-[11px] text-[#8C7E6D]">共 3 份报告</span>
          </div>

          <div className="space-y-2">
            {/* Report 1 - Unlocked */}
            <div
              onClick={() => onNavigate('report')}
              className="bg-[#FAF7F2] hover:bg-white rounded-2xl border border-[#E8E0D1] p-3.5 flex items-center justify-between shadow-2xs transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#8C6628] text-white flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold font-serif-cn">破局</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2E2720]">
                    破局者
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#857868] mt-0.5">
                    <span className="font-medium text-[#5C5042]">{userGenderText} · {userBirthDateText}</span>
                    <span className="text-[#C5B9A9]">|</span>
                    <span>2026/09/17 16:45</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center pr-1">
                <ChevronRight className="w-4 h-4 text-[#B8AA98]" />
              </div>
            </div>

            {/* Report 2 */}
            <div
              onClick={() => onNavigate('report')}
              className="bg-[#FAF7F2] hover:bg-white rounded-2xl border border-[#E8E0D1] p-3.5 flex items-center justify-between shadow-2xs transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#E2D6C5] text-[#554A3E] flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold font-serif-cn">破局</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2E2720]">
                    破局者
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#857868] mt-0.5">
                    <span className="font-medium text-[#5C5042]">女 · 1998.03.15</span>
                    <span className="text-[#C5B9A9]">|</span>
                    <span>2026/08/16 10:12</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center pr-1">
                <ChevronRight className="w-4 h-4 text-[#B8AA98]" />
              </div>
            </div>

            {/* Report 3 - Pending Unlock */}
            <div
              onClick={() => onNavigate('unlock')}
              className="bg-[#FAF7F2] hover:bg-white rounded-2xl border border-[#E8E0D1] p-3.5 flex items-center justify-between shadow-2xs transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#E2D6C5] text-[#554A3E] flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold font-serif-cn">破局</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2E2720]">
                    破局者
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#857868] mt-0.5">
                    <span className="font-medium text-[#5C5042]">男 · 1992.11.08</span>
                    <span className="text-[#C5B9A9]">|</span>
                    <span>2026/05/20 09:30</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-[#FAF0DC] text-[#9C7026] text-xs font-medium">
                  待解锁
                </span>
                <ChevronRight className="w-4 h-4 text-[#B8AA98]" />
              </div>
            </div>
          </div>
        </div>

        {/* Section: 通用 GENERAL */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#2A231C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6628]" />
              <span>通用</span>
            </div>
            <span className="text-[10px] text-[#9C9081] font-sans">GENERAL</span>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl border border-[#E8E0D1] divide-y divide-[#EFE8DA] overflow-hidden shadow-2xs">
            <button
              type="button"
              id="profile-faq-btn"
              onClick={() => setShowFaqModal(true)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#F0E9DD] text-[#8C6628] flex items-center justify-center">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#2E2720]">常见问题</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#B8AA98]" />
            </button>

            <button
              type="button"
              id="profile-feedback-btn"
              onClick={() => setShowFeedbackModal(true)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#F0E9DD] text-[#8C6628] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-[#2E2720]">意见反馈</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#B8AA98]" />
            </button>
          </div>
        </div>

        {/* Action Button: 退出登录 */}
        <div className="pt-2 pb-4">
          <button
            type="button"
            id="profile-logout-btn"
            onClick={onLogout}
            className="w-full py-3.5 bg-white hover:bg-[#FAF6EF] active:scale-[0.99] text-[#A34343] border border-[#E8D6D6] font-medium text-sm rounded-xl transition-all shadow-2xs tracking-wider flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-[#A34343]" />
            <span>退出登录</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation Menu Bar */}
      <div className="w-full bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFC9] pt-2 pb-2 px-6 sm:px-10 flex flex-col items-center justify-between z-20 shrink-0 sticky bottom-0">
        <div className="w-full max-w-sm flex items-center justify-between px-10 sm:px-14">
          {/* Tab 1: 测评 (Inactive in profile page, clicking goes to home) */}
          <button
            type="button"
            id="profile-tab-quiz-btn"
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center justify-center gap-1.5 cursor-pointer py-1 px-3 group"
          >
            <div className="w-8 h-8 rounded-xl border border-[#9E9080] flex items-center justify-center text-[#8A7D6C] group-hover:border-[#8C6628] group-hover:text-[#8C6628] transition-all">
              <div className="flex flex-col gap-1 items-start justify-center w-3.5">
                <span className="w-3.5 h-[2px] bg-[#8A7D6C] group-hover:bg-[#8C6628] rounded-full transition-colors" />
                <span className="w-2.5 h-[2px] bg-[#8A7D6C] group-hover:bg-[#8C6628] rounded-full transition-colors" />
              </div>
            </div>
            <span className="text-xs font-medium text-[#8A7D6C] group-hover:text-[#8C6628] tracking-widest pl-0.5 transition-colors">
              测 评
            </span>
          </button>

          {/* Tab 2: 我的 (Active in profile page) */}
          <button
            type="button"
            id="profile-tab-profile-btn"
            className="flex flex-col items-center justify-center gap-1.5 cursor-pointer py-1 px-3"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="w-8 h-8 rounded-xl bg-[#8C6628] flex items-center justify-center text-white shadow-2xs">
                <User className="w-4 h-4 text-white" strokeWidth={2.2} />
              </div>
              {/* Badge 1 */}
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#8C6628] border border-white text-white text-[10px] font-bold flex items-center justify-center leading-none shadow-2xs">
                1
              </div>
            </div>
            <span className="text-xs font-bold text-[#2E2822] tracking-widest pl-0.5">
              我 的
            </span>
          </button>
        </div>

        {/* Bottom indicator bar */}
        <div className="w-32 h-1 bg-[#D0C5B5] rounded-full mt-2" />
      </div>

      {/* FAQ Modal */}
      {showFaqModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] border border-[#E3D9C8] rounded-3xl max-w-sm w-full p-5 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-[#EAE0CF]">
              <h3 className="font-serif-cn font-bold text-base text-[#2E2720]">常见问题解答</h3>
              <button
                type="button"
                onClick={() => setShowFaqModal(false)}
                className="text-[#8A7D6C] hover:text-[#2E2720] p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-[#554A3E] max-h-80 overflow-y-auto pr-1">
              <div>
                <p className="font-bold text-[#2E2720] mb-1">Q: 星格测评的基本原理是什么？</p>
                <p className="text-[#6E6152] leading-relaxed">
                  本测评融合了东方星图原型模型与现代心理认知维度，通过关键情境抉择与出生时空向量，解析独具特色的性格底色与处事张力。
                </p>
              </div>
              <div>
                <p className="font-bold text-[#2E2720] mb-1">Q: 解锁的完整报告可以永久查看吗？</p>
                <p className="text-[#6E6152] leading-relaxed">
                  是的。解锁后报告自动绑定至当前用户ID，随时可在「个人中心 - 我的报告」中随时查阅或保存高清长图。
                </p>
              </div>
              <div>
                <p className="font-bold text-[#2E2720] mb-1">Q: 隔一段时间重新测评结果会变吗？</p>
                <p className="text-[#6E6152] leading-relaxed">
                  性格的主导底色相对稳定，但随人生阅历变化，六维能量倾向会有微调。建议每季度复测一次观察成长。
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowFaqModal(false)}
              className="w-full py-2.5 bg-[#8C6628] text-white text-xs font-medium rounded-xl hover:bg-[#785620]"
            >
              我知道了
            </button>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] border border-[#E3D9C8] rounded-3xl max-w-sm w-full p-5 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-[#EAE0CF]">
              <h3 className="font-serif-cn font-bold text-base text-[#2E2720]">意见反馈</h3>
              <button
                type="button"
                onClick={() => setShowFeedbackModal(false)}
                className="text-[#8A7D6C] hover:text-[#2E2720] p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {feedbackSent ? (
              <div className="py-6 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <p className="text-sm font-bold text-[#2E2720]">感谢您的宝贵建议！</p>
                <p className="text-xs text-[#8C7E6D]">我们将持续优化星格测评体验。</p>
              </div>
            ) : (
              <form onSubmit={handleSendFeedback} className="space-y-3">
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="请写下您对题目、解析报告或界面的使用体验与建议..."
                  rows={4}
                  className="w-full p-3 bg-white border border-[#D5CABB] rounded-xl text-xs text-[#2E2720] placeholder:text-[#A69B8D] focus:outline-none focus:border-[#8C6628]"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#8C6628] hover:bg-[#785620] text-white text-xs font-medium rounded-xl transition-all shadow-xs"
                >
                  提交反馈
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

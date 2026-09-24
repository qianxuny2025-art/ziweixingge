import React, { useState } from 'react';
import { PageView, UserProfile } from './types';
import {
  DEFAULT_USER_PROFILE,
  QUIZ_QUESTIONS,
  THE_GAMECHANGER_REPORT,
} from './data/quizData';
import { WeChatHeader } from './components/WeChatHeader';
import { HomePage } from './components/HomePage';
import { InfoPage } from './components/InfoPage';
import { QuizPage } from './components/QuizPage';
import { AnalyzingPage } from './components/AnalyzingPage';
import { PreviewPage } from './components/PreviewPage';
import { UnlockPage } from './components/UnlockPage';
import { UnlockSuccessPage } from './components/UnlockSuccessPage';
import { ReportPage } from './components/ReportPage';
import { ProfilePage } from './components/ProfilePage';
import { SharePosterModal } from './components/SharePosterModal';
import { SharePosterPage } from './components/SharePosterPage';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [userProfile, setUserProfile] = useState<UserProfile>(DEFAULT_USER_PROFILE);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [isPhoneFrame, setIsPhoneFrame] = useState<boolean>(true);

  // Update profile field
  const handleUpdateProfile = (partial: Partial<UserProfile>) => {
    setUserProfile((prev) => ({ ...prev, ...partial }));
  };

  // Navigation handlers
  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCurrentPage('quiz');
  };

  const handleSkipTimeAndStart = () => {
    setUserProfile((prev) => ({ ...prev, hasSpecificTime: false }));
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCurrentPage('quiz');
  };

  const handleSelectOption = (optionId: string) => {
    const qId = QUIZ_QUESTIONS[currentQuestionIndex].id;
    setAnswers((prev) => ({ ...prev, [qId]: optionId }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentPage('analyzing');
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setCurrentPage('info');
    }
  };

  const handleSkipQuestion = () => {
    handleNextQuestion();
  };

  const handleBack = () => {
    if (currentPage === 'sharePoster') {
      setCurrentPage('report');
    } else if (currentPage === 'profile') {
      setCurrentPage('report');
    } else if (currentPage === 'unlockSuccess') {
      setCurrentPage('profile');
    } else if (currentPage === 'unlock') {
      setCurrentPage('preview');
    } else if (currentPage === 'preview') {
      setCurrentPage('quiz');
    } else if (currentPage === 'report') {
      setCurrentPage('profile');
    } else if (currentPage === 'analyzing') {
      setCurrentPage('quiz');
    } else if (currentPage === 'quiz') {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1);
      } else {
        setCurrentPage('info');
      }
    } else if (currentPage === 'info') {
      setCurrentPage('home');
    }
  };

  const handleRetest = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCurrentPage('home');
  };

  // Header title depending on page
  const getHeaderTitle = () => {
    switch (currentPage) {
      case 'home':
        return '星 格 · X I N G G E';
      case 'info':
        return '星 格 · X I N G G E';
      case 'quiz':
        return '答题';
      case 'analyzing':
        return '生成说明书';
      case 'preview':
        return '测评结果预览';
      case 'unlock':
        return '解锁说明书';
      case 'unlockSuccess':
        return '解锁成功';
      case 'report':
        return '星格评测报告';
      case 'sharePoster':
        return '分享效果图';
      case 'profile':
        return '个人中心';
      default:
        return '星 格 · X I N G G E';
    }
  };

  return (
    <div className="min-h-screen bg-[#EBE4D5] flex flex-col items-center justify-start py-0 sm:py-6 px-0 sm:px-4">
      {/* Top Demo Toolbar for switching views & toggling device frame */}
      <div className="w-full max-w-md mb-2 sm:mb-3 px-3 py-2 bg-[#FAF7F2]/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#DED4C3] shadow-xs flex items-center justify-between text-xs text-[#5C5042]">
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
          <span className="font-semibold text-[#8C6628] mr-0.5 hidden xs:inline shrink-0">
            页面:
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage('home')}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'home'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            首页
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('info')}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'info'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            输入
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentQuestionIndex(2);
              setCurrentPage('quiz');
            }}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'quiz'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            答题
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('analyzing')}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'analyzing'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            分析中
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('preview')}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'preview'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            预览(试读)
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('unlock')}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'unlock'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            解锁页
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('unlockSuccess')}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'unlockSuccess'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            已解锁
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('report')}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'report'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            完整报告
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('sharePoster')}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'sharePoster'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            分享海报
          </button>
          <button
            type="button"
            onClick={() => setCurrentPage('profile')}
            className={`px-2 py-1 rounded-md transition-all shrink-0 cursor-pointer ${
              currentPage === 'profile'
                ? 'bg-[#8C6628] text-white font-medium'
                : 'hover:bg-[#EDE5D6]'
            }`}
          >
            个人中心
          </button>
        </div>

        {/* Toggle mobile frame */}
        <button
          type="button"
          onClick={() => setIsPhoneFrame(!isPhoneFrame)}
          className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-[#D5CABB] text-[#554C42] hover:text-[#8C6628] transition-colors shrink-0 ml-2 cursor-pointer"
          title={isPhoneFrame ? '切换为全宽预览' : '切换为手机框架'}
        >
          {isPhoneFrame ? (
            <>
              <Monitor className="w-3.5 h-3.5" />
              <span>全屏</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span>手机框</span>
            </>
          )}
        </button>
      </div>

      {/* Main App Canvas / Mini-Program Frame */}
      <main
        className={`w-full bg-[#FAF7F2] transition-all duration-300 flex flex-col ${
          isPhoneFrame
            ? 'max-w-[440px] sm:rounded-[36px] sm:shadow-2xl sm:border-[8px] sm:border-[#38332C] sm:overflow-hidden min-h-screen sm:min-h-[840px] relative'
            : 'max-w-xl sm:rounded-2xl sm:shadow-lg sm:border border-[#D9CEBC] min-h-screen'
        }`}
      >
        {/* WeChat Mini-Program Header */}
        <WeChatHeader
          title={getHeaderTitle()}
          onBack={currentPage !== 'home' && currentPage !== 'profile' ? handleBack : undefined}
          showBack={currentPage !== 'home' && currentPage !== 'profile'}
          onShareClick={() => setShowShareModal(true)}
        />

        {/* Page Views */}
        <div className="flex-1 overflow-y-auto flex flex-col">
          {currentPage === 'home' && (
            <HomePage
              onStart={() => setCurrentPage('info')}
              onGoToProfile={() => setCurrentPage('profile')}
            />
          )}

          {currentPage === 'info' && (
            <InfoPage
              userProfile={userProfile}
              onUpdateProfile={handleUpdateProfile}
              onStartQuiz={handleStartQuiz}
              onSkipTimeAndStart={handleSkipTimeAndStart}
            />
          )}

          {currentPage === 'quiz' && (
            <QuizPage
              currentQuestion={QUIZ_QUESTIONS[currentQuestionIndex]}
              currentIndex={currentQuestionIndex}
              totalQuestions={QUIZ_QUESTIONS.length}
              selectedOptionId={
                answers[QUIZ_QUESTIONS[currentQuestionIndex].id] || null
              }
              onSelectOption={handleSelectOption}
              onNext={handleNextQuestion}
              onPrev={handlePrevQuestion}
              onSkip={handleSkipQuestion}
            />
          )}

          {currentPage === 'analyzing' && (
            <AnalyzingPage
              onComplete={() => setCurrentPage('preview')}
            />
          )}

          {currentPage === 'preview' && (
            <PreviewPage
              report={THE_GAMECHANGER_REPORT}
              onBack={() => setCurrentPage('quiz')}
              onUnlock={() => setCurrentPage('unlock')}
            />
          )}

          {currentPage === 'unlock' && (
            <UnlockPage
              archetypeName={THE_GAMECHANGER_REPORT.name}
              onBack={() => setCurrentPage('preview')}
              onUnlock={() => setCurrentPage('unlockSuccess')}
            />
          )}

          {currentPage === 'unlockSuccess' && (
            <UnlockSuccessPage
              archetypeName={THE_GAMECHANGER_REPORT.name}
              onViewReport={() => setCurrentPage('report')}
              onGoToProfile={() => setCurrentPage('profile')}
            />
          )}

          {currentPage === 'report' && (
            <ReportPage
              report={THE_GAMECHANGER_REPORT}
              userProfile={userProfile}
              onOpenShare={() => setCurrentPage('sharePoster')}
              onRetest={handleRetest}
              onGoToProfile={() => setCurrentPage('profile')}
            />
          )}

          {currentPage === 'sharePoster' && (
            <SharePosterPage
              report={THE_GAMECHANGER_REPORT}
              userProfile={userProfile}
              onBack={() => setCurrentPage('report')}
            />
          )}

          {currentPage === 'profile' && (
            <ProfilePage
              report={THE_GAMECHANGER_REPORT}
              userProfile={userProfile}
              onNavigate={(page) => setCurrentPage(page)}
              onClose={() => setCurrentPage('report')}
              onStartNewQuiz={handleRetest}
              onLogout={() => {
                setUserProfile(DEFAULT_USER_PROFILE);
                setAnswers({});
                setCurrentQuestionIndex(0);
                setCurrentPage('home');
              }}
            />
          )}
        </div>
      </main>

      {/* Share Poster Modal */}
      <SharePosterModal
        report={THE_GAMECHANGER_REPORT}
        userProfile={userProfile}
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </div>
  );
}

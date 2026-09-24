export type Gender = 'male' | 'female';

export interface UserProfile {
  gender: Gender;
  birthDate: string; // e.g. "1990-05-20" or ""
  birthHour: number; // 0-23
  birthMinute: number; // 0-59
  hasSpecificTime: boolean;
  isTimeUnknown?: boolean;
}

export interface QuizOption {
  id: string;
  text: string;
  traitDelta?: {
    dimension?: 'solitude' | 'intuition' | 'clarity' | 'distance' | 'internal';
    direction?: 1 | -1 | 0;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface RadarDimension {
  label: string;
  value: number; // 0 - 100
  lowLabel: string;
  highLabel: string;
}

export interface SpectrumBarItem {
  dimension: string;
  leftPercent: number;
  leftLabel: string;
  rightPercent: number;
  rightLabel: string;
  desc: string;
}

export type SpectrumBar = SpectrumBarItem;

export interface FusionOriginCard {
  char: string; // 稳, 破
  badge: string; // 底色 主心骨, 底色 开路人
  title: string;
  desc: string;
}

export interface PerspectiveEyeCard {
  role: string; // 朋友眼中, 同事眼中, 家人眼中
  iconType: 'friend' | 'colleague' | 'family';
  quote: string;
  sub: string;
}

export interface StrengthItem {
  id: string; // 01, 02, 03
  title: string;
  desc: string;
}

export interface GrowthAreaItem {
  iconType: 'hand' | 'clock' | 'refresh';
  title: string;
  tag: string;
  desc: string;
}

export interface SceneGuideItem {
  category: string; // 职场, 感情, 社交
  enCategory: string; // CAREER, LOVE, SOCIAL
  iconType: 'career' | 'love' | 'social';
  desc: string;
  tipPrefix: string;
  tipContent: string;
}

export interface PersonalityReport {
  archetypeId: string;
  name: string; // 破局者
  enName: string; // THE GAMECHANGER
  stars: string; // 天生的变革手 · 最敢开新局
  summary: string; // 一句话画像
  tags: string[]; // ['✦ 统筹大局', '✦ 敢破敢立', '✦ 结果说话']
  poeticQuotes: string[]; // ['更清晰的你', '遇见更好的选择']
  sampleUserTag: string; // 示例 示例用户 | 测试时间 2026-09-17
  
  coherenceRate?: number; // 92
  coherenceMin?: number; // 78
  coherenceMax?: number; // 96
  coherenceAnalysis?: string;

  makeup: {
    part1: { title: string; sub: string };
    part2: { title: string; sub: string };
    result: { title: string; sub: string };
    rarity: string; // ✦ 稀有度 ★★★ · 稀有复合型
  };

  radarDimensions: RadarDimension[];
  spectrumBars: SpectrumBarItem[];
  deepInsight: {
    para1: string;
    para2: string;
    highlight: string;
  };

  fusionOrigins: FusionOriginCard[];
  fusionSummary: string;

  perspectives: PerspectiveEyeCard[];
  perspectiveBottomNote: string;

  topStrengths: StrengthItem[];
  growthAreas: GrowthAreaItem[];
  sceneGuides: SceneGuideItem[];

  lastWords: {
    headline: string[];
    subtext: string;
    qrTitle: string;
    qrSub: string;
  };

  footerMeta: {
    brand: string;
    date: string;
    version: string;
    disclaimer: string;
  };
}

export type PageView =
  | 'home'
  | 'info'
  | 'quiz'
  | 'analyzing'
  | 'preview'
  | 'unlock'
  | 'unlockSuccess'
  | 'report'
  | 'profile'
  | 'sharePoster';

import { PersonalityReport, QuizQuestion, UserProfile } from '../types';

export const DEFAULT_USER_PROFILE: UserProfile = {
  gender: 'female',
  birthDate: '',
  birthHour: 12,
  birthMinute: 0,
  hasSpecificTime: false,
  isTimeUnknown: false,
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '面对一个突如其来的新项目，你通常的第一反应是——',
    options: [
      {
        id: '1a',
        text: '先看清全局脉络和风险，在心里把步骤推演一遍再动',
        traitDelta: { dimension: 'clarity', direction: 1 },
      },
      {
        id: '1b',
        text: '先抓一个切入点做起来，在具体的行动中逐渐摸索方向',
        traitDelta: { dimension: 'clarity', direction: -1 },
      },
      {
        id: '1c',
        text: '视项目情况而定，复杂就先推演，紧急就先着手推进',
        traitDelta: { dimension: 'clarity', direction: 0 },
      },
    ],
  },
  {
    id: 2,
    question: '做重大决定遇到纠结时，你更倾向于依赖——',
    options: [
      {
        id: '2a',
        text: '直觉和第一刹那的判断，事后再去寻找逻辑佐证',
        traitDelta: { dimension: 'intuition', direction: -1 },
      },
      {
        id: '2b',
        text: '严谨的事实推演与因果链条，一定要合乎底层逻辑',
        traitDelta: { dimension: 'intuition', direction: 1 },
      },
      {
        id: '2c',
        text: '综合直觉与理性分析，或结合信任朋友的意见平衡考量',
        traitDelta: { dimension: 'intuition', direction: 0 },
      },
    ],
  },
  {
    id: 3,
    question: '和人相处一下午，结束之后你更像——',
    options: [
      {
        id: '3a',
        text: '被充满了，还想再聊会儿',
        traitDelta: { dimension: 'solitude', direction: -1 },
      },
      {
        id: '3b',
        text: '被耗空了，需要自己待会儿',
        traitDelta: { dimension: 'solitude', direction: 1 },
      },
      {
        id: '3c',
        text: '视相处对象而定，合拍就精神，不合拍就想静静独处',
        traitDelta: { dimension: 'solitude', direction: 0 },
      },
    ],
  },
  {
    id: 4,
    question: '在人际交往中，你对亲疏界限的感知通常是——',
    options: [
      {
        id: '4a',
        text: '保持舒适得体的安全距离，不过多干涉也不过度分享',
        traitDelta: { dimension: 'distance', direction: 1 },
      },
      {
        id: '4b',
        text: '渴望建立深度亲密与共鸣，喜欢无话不说的紧密连接',
        traitDelta: { dimension: 'distance', direction: -1 },
      },
      {
        id: '4c',
        text: '顺其自然，不同圈子有不同的舒适相处界限',
        traitDelta: { dimension: 'distance', direction: 0 },
      },
    ],
  },
  {
    id: 5,
    question: '当手头的事情发生不可控的意外打断时，你的状态是——',
    options: [
      {
        id: '5a',
        text: '整口气容易散掉，重新聚起心力需要一段不短的时间',
        traitDelta: { dimension: 'internal', direction: 1 },
      },
      {
        id: '5b',
        text: '随时可以切换注意力，被打断后也能很快顺畅接回',
        traitDelta: { dimension: 'internal', direction: -1 },
      },
      {
        id: '5c',
        text: '会有点烦躁，但深呼吸调整后能快速理清次序继续',
        traitDelta: { dimension: 'internal', direction: 0 },
      },
    ],
  },
  {
    id: 6,
    question: '如果手头有几件难度不一的任务，你习惯的启动节奏是——',
    options: [
      {
        id: '6a',
        text: '趁着精力最充沛，先挑最硬核、最难啃的骨头拿下',
        traitDelta: { dimension: 'clarity', direction: 1 },
      },
      {
        id: '6b',
        text: '先做几件轻松容易的事顺顺手，慢慢进入专注状态',
        traitDelta: { dimension: 'clarity', direction: -1 },
      },
      {
        id: '6c',
        text: '按截止时间或轻重缓急灵活排期，不固定先难或先易',
        traitDelta: { dimension: 'clarity', direction: 0 },
      },
    ],
  },
  {
    id: 7,
    question: '在群体讨论中，当别人还在铺垫背景时，你通常——',
    options: [
      {
        id: '7a',
        text: '已经在脑海里看到了结论，甚至忍不住想帮对方推下一步',
        traitDelta: { dimension: 'intuition', direction: 1 },
      },
      {
        id: '7b',
        text: '耐心地听完细节，再根据大家表达的所有视角来综合考量',
        traitDelta: { dimension: 'intuition', direction: -1 },
      },
      {
        id: '7c',
        text: '边听边理清关键框架，在合适时机提出折中或建设性想法',
        traitDelta: { dimension: 'intuition', direction: 0 },
      },
    ],
  },
  {
    id: 8,
    question: '遇到不顺心的事过去之后，你的心理复盘往往是——',
    options: [
      {
        id: '8a',
        text: '在心里反复重演当时的细节与推导，不容易迅速翻篇',
        traitDelta: { dimension: 'internal', direction: 1 },
      },
      {
        id: '8b',
        text: '想明白核心教训之后就不再纠结，注意力迅速投向下一件事',
        traitDelta: { dimension: 'internal', direction: -1 },
      },
      {
        id: '8c',
        text: '偶尔还会闪过念头，但基本不影响当前正常的生活节奏',
        traitDelta: { dimension: 'internal', direction: 0 },
      },
    ],
  },
];

export const THE_GAMECHANGER_REPORT: PersonalityReport = {
  archetypeId: 'gamechanger',
  name: '破局者',
  enName: 'THE GAMECHANGER',
  stars: '天生的变革手 · 最敢开新局',
  summary: '既能坐镇大局，也敢亲手推翻重来——从乱到新，是你的主场。',
  tags: ['✦ 统筹大局', '✦ 敢破敢立', '✦ 结果说话'],
  poeticQuotes: ['更清晰的你', '遇见更好的选择'],
  sampleUserTag: '示例 示例用户 | 测试时间 2026-09-17',
  coherenceRate: 92,
  coherenceMin: 78,
  coherenceMax: 96,
  coherenceAnalysis:
    '你的答题倾向与性格底色高度一致——你是那种「自己怎么想、就怎么做」的人，不太需要靠猜来确认自己。',
  makeup: {
    part1: { title: '主心骨', sub: '主导原型' },
    part2: { title: '开路人', sub: '变革原型' },
    result: { title: '破局者', sub: '融合型' },
    rarity: '✦ 稀有度 ★★★ · 稀有复合型',
  },
  radarDimensions: [
    { label: '决策风格', value: 88, lowLabel: '先听别人的', highLabel: '自己拿主意' },
    { label: '执行节奏', value: 92, lowLabel: '想了再想', highLabel: '想了就干' },
    { label: '性格内外向', value: 66, lowLabel: '独处回血', highLabel: '聚会主场' },
    { label: '人际担当', value: 56, lowLabel: '各管各的', highLabel: '替人操心' },
    { label: '计划性', value: 74, lowLabel: '走一步看一步', highLabel: '攻略做满' },
    { label: '情绪调节', value: 90, lowLabel: '得缓一阵', highLabel: '当场翻篇' },
  ],
  spectrumBars: [
    {
      dimension: '决策风格',
      leftPercent: 12,
      leftLabel: '先听别人的',
      rightPercent: 88,
      rightLabel: '自己拿主意',
      desc: '拿主意从不拖，听完也是自己定。',
    },
    {
      dimension: '执行节奏',
      leftPercent: 8,
      leftLabel: '想了再想',
      rightPercent: 92,
      rightLabel: '想了就干',
      desc: '想到就干，手比脑子还快。',
    },
    {
      dimension: '性格内外向',
      leftPercent: 34,
      leftLabel: '独处回血',
      rightPercent: 66,
      rightLabel: '聚会主场',
      desc: '热闹可以，但比较费电。',
    },
    {
      dimension: '人际担当',
      leftPercent: 44,
      leftLabel: '各管各的',
      rightPercent: 56,
      rightLabel: '替人操心',
      desc: '各管各的，互不打扰。',
    },
    {
      dimension: '计划性',
      leftPercent: 26,
      leftLabel: '走一步看一步',
      rightPercent: 74,
      rightLabel: '攻略做满',
      desc: '大方向有数，细节随缘。',
    },
    {
      dimension: '情绪调节',
      leftPercent: 10,
      leftLabel: '得缓一阵',
      rightPercent: 90,
      rightLabel: '当场翻篇',
      desc: '烦心事当场翻篇，不过夜。',
    },
  ],
  deepInsight: {
    para1:
      '你身上同时住着两种力量：一种要把局面想清楚、拿得住；另一种受不了原地踏步，一旦认定方向不对，就敢亲手推翻重来。别人眼里的冒险，在你这里是“迟早要做的事”——你不是冲动，你只是比旁人更早看清了旧局的尽头。',
    para2:
      '你的成就感来自“从乱到新”：接手一个僵局，拆掉旧框架，搭出新秩序。你不是为了反对而反对——恰恰因为你比谁都清楚旧局的价值，才知道什么值得保留、什么必须推翻。',
    highlight: '✦ 和你共事过的人，常用两个词形容你：敢拍板，能兜底。',
  },
  fusionOrigins: [
    {
      char: '稳',
      badge: '底色 主心骨',
      title: '主心骨的底色：先看清，再掌局',
      desc: '你天然带着一种“定盘”的气质：进任何新环境，先花几分钟看清谁在影响谁、事往哪里走。拍板之前，你心里已经有完整的图——这份笃定，是你敢掀桌的底气来源。旁人看到的果断，其实都是谋定之后的动作。',
    },
    {
      char: '破',
      badge: '底色 开路人',
      title: '开路人的底色：不破，不快',
      desc: '变化不让你恐慌，反而让你兴奋。僵局、旧规矩、一眼望到头的日子，才是你真正的压力源。推倒重来的那一刻，你整个人是发亮的——那种“终于动了”的爽快感，是你生命力的开关。',
    },
  ],
  fusionSummary:
    '✦ 当「稳」与「破」合流，就成了破局者的独特配方：用主心骨的方式谋局，用开路人的方式破局 —— 先谋定，后掀桌，掀完还负责重建。这才是你完整的力量。',
  perspectives: [
    {
      role: '朋友眼中',
      iconType: 'friend',
      quote: '“敢下大决定的人”',
      sub: '每次人生转向，你都干脆利落',
    },
    {
      role: '同事眼中',
      iconType: 'colleague',
      quote: '“救火队长”',
      sub: '烂摊子到你手里，总能翻出新篇',
    },
    {
      role: '家人眼中',
      iconType: 'family',
      quote: '嘴上嫌你折腾',
      sub: '心里佩服你每次都折腾成了',
    },
  ],
  perspectiveBottomNote:
    '✦ 三种眼光拼在一起，是那个 把变化扛在肩上、把风险留给自己的你 。别人只看见你掀桌的痛快，没看见你兜底的辛苦。',
  topStrengths: [
    {
      id: '01',
      title: '变革型判断力',
      desc: '你能比别人还在犹豫时判断“这局该不该翻”，而且大多数时候你是对的——因为你看的不是情绪，是结构。该止损的局，你从不恋战。',
    },
    {
      id: '02',
      title: '破局执行力',
      desc: '从下定决心到动手，你的延迟极短。别人还在开会论证可行性，你已经开始做第一版了——行动本身，就是你说服世界的方式。',
    },
    {
      id: '03',
      title: '重建能力',
      desc: '你不是只管砸的——砸完之后搭新框架、定新规矩、带着人把新局跑起来。破与立在你这里是一个完整动作，这也是你区别于“莽”的地方。',
    },
  ],
  growthAreas: [
    {
      iconType: 'hand',
      title: '推翻的瘾',
      tag: '破局是手段',
      desc: '有时旧局还没坏透，你的手已经痒了。请提醒自己：破局是手段，不是习惯——不是每一局都需要你翻，守成也是一种能力。',
    },
    {
      iconType: 'clock',
      title: '对「慢」的不耐烦',
      tag: '留缓冲',
      desc: '团队里总有人需要更长的消化期，你的“马上”常常是别人的“突然”。给变化留一点缓冲，把为什么改讲在前面，阻力会小一半。',
    },
    {
      iconType: 'refresh',
      title: '事后回望太少',
      tag: '留复盘',
      desc: '你习惯翻篇就往前跑，很少回头解释“当时为什么那么改”。每次翻局后留下一句复盘，跟上的人会走得更快，你的方法也才能被复制。',
    },
  ],
  sceneGuides: [
    {
      category: '职场',
      enCategory: 'CAREER',
      iconType: 'career',
      desc: '你适合“从0到1”或“从乱到治”的位置：新业务操盘、转型项目、危机处理。你的最佳发力点是“先立靶再放箭”——把要推翻什么、建成什么讲清楚，追随者自然会来。',
      tipPrefix: '雷区提示：',
      tipContent: '变革节奏别一刀切，给关键的人留好位置，新局才站得稳。',
    },
    {
      category: '感情',
      enCategory: 'LOVE',
      iconType: 'love',
      desc: '你对关系也讲“新局”：定期制造新鲜感是你的天赋，和你在一起很难腻。但请记住，伴侣不是项目——不是所有分歧都要“重构”，有时候对方要的不是方案，是陪伴。',
      tipPrefix: '你的适配关键词是“被尊重”——',
      tipContent: '你需要一个能平视你、接得住你想法的人。',
    },
    {
      category: '社交',
      enCategory: 'SOCIAL',
      iconType: 'social',
      desc: '你是朋友圈里“拿主意的人”：去哪儿、吃什么、怎么玩，大家默认听你的。这份依赖是信任，也别让它变成惯性——把话语权偶尔分出去，让朋友也当一次主谋。',
      tipPrefix: '不妨每月留一场“不当主角”的聚会，',
      tipContent: '你会发现跟随也是一种放松。',
    },
  ],
  lastWords: {
    headline: [
      '你天生就懂：',
      '旧的不去，新的不来。',
      '这一次，也请允许——',
      '有些局面，不必由你来翻。',
    ],
    subtext:
      '破局是你的天赋，不是你的义务。愿你把开新局的勇气也用在自己身上，留一次“不动手、只享受”的机会给自己。',
    qrTitle: '扫码保存你的专属说明书',
    qrSub: '三个月后回来复测一次，看看哪些变了，哪些一直没变。',
  },
  footerMeta: {
    brand: '星格 XINGGE',
    date: '测试时间 2026-09-17',
    version: '题库版本 V1.0',
    disclaimer: '本报告描述性格倾向，不构成任何医疗或心理诊断建议',
  },
};

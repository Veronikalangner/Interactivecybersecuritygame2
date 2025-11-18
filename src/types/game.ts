export type CardType = 'swipe' | 'quiz' | 'info' | 'milestone';

export interface SwipeScenario {
  id: number;
  type: 'swipe';
  title: string;
  description: string;
  image: string;
  leftAction: {
    label: string;
    isCorrect: boolean;
    feedback: string;
    explanation: string;
  };
  rightAction: {
    label: string;
    isCorrect: boolean;
    feedback: string;
    explanation: string;
  };
  category: string;
  storyContext?: string;
}

export interface QuizScenario {
  id: number;
  type: 'quiz';
  title: string;
  question: string;
  image: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  category: string;
  storyContext?: string;
}

export interface InfoScenario {
  id: number;
  type: 'info';
  title: string;
  content: string;
  image: string;
  tip: string;
  category: string;
  storyContext?: string;
}

export interface MilestoneReward {
  id: number;
  type: 'milestone';
  title: string;
  description: string;
  badge: string;
  unlockedFeature: string;
  storyProgress: string;
}

export type Scenario = SwipeScenario | QuizScenario | InfoScenario | MilestoneReward;

export interface GameState {
  currentScenario: number;
  score: number;
  streak: number;
  completedScenarios: number[];
  wrongChoices: number[];
  badges: string[];
}

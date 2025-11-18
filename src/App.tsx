import { useState } from 'react';
import { StoryIntro } from './components/StoryIntro';
import { SwipeCard } from './components/SwipeCard';
import { QuizCard } from './components/QuizCard';
import { InfoCard } from './components/InfoCard';
import { MilestoneCard } from './components/MilestoneCard';
import { FeedbackModal } from './components/FeedbackModal';
import { CompletionScreen } from './components/CompletionScreen';
import { ProgressPath } from './components/ProgressPath';
import { GameStats } from './components/GameStats';
import { StoryContext } from './components/StoryContext';
import { scenarios } from './data/scenarios';
import { storyMilestones } from './data/story';
import { Scenario, SwipeScenario, QuizScenario, InfoScenario } from './types/game';

const imageUrls = [
  'https://images.unsplash.com/photo-1718279602896-6df6c34f61e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwd2lmaSUyMGxhcHRvcHxlbnwxfHx8fDE3NjM0NzAzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZWR1Y2F0aW9uJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYzNDcwNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1685381949388-bb0402fbe133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHBoaXNoaW5nfGVufDF8fHx8MTc2MzQ3MDMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1697382608786-bcf4c113b86e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzd29yZCUyMHNlY3VyaXR5JTIwbG9ja3xlbnwxfHx8fDE3NjM0NzA3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1587145820098-23e484e69816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2IlMjBkcml2ZXxlbnwxfHx8fDE3NjM0NzAzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1710770563074-6d9cc0d3e338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBlbmdpbmVlcmluZyUyMGhhY2tlcnxlbnwxfHx8fDE3NjM0NzA3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1651235732694-0d057ace2f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWNhdGlvbiUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MzQ3MDcyNXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MzQ3MDMzOXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1752572052070-469747903dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YWN5JTIwY29uY2VwdHxlbnwxfHx8fDE3NjM0NzA3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1727974290663-48ca35264028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYnJlYWNoJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYzMzk5ODExfDA&ixlib=rb-4.1.0&q=80&w=1080',
];

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([]);
  const [wrongChoices, setWrongChoices] = useState<number[]>([]);
  const [badges, setBadges] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showMilestone, setShowMilestone] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<{
    isCorrect: boolean;
    feedback: string;
    explanation: string;
  } | null>(null);

  const currentScenario = scenarios[currentScenarioIndex];
  const isGameComplete = currentScenarioIndex >= scenarios.length;

  // Check if we should show a milestone
  const milestoneToShow = storyMilestones.find(
    (m) => m.at === completedScenarios.length && showMilestone
  );

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    const scenario = currentScenario as SwipeScenario;
    const action = direction === 'left' ? scenario.leftAction : scenario.rightAction;
    const isCorrect = action.isCorrect;

    processAnswer(isCorrect, action.feedback, action.explanation);
  };

  const handleQuizAnswer = (isCorrect: boolean, explanation: string) => {
    const feedback = isCorrect ? 'Correct!' : 'Not quite!';
    processAnswer(isCorrect, feedback, explanation);
  };

  const handleInfoContinue = () => {
    // Info cards don't affect score, just continue
    setCompletedScenarios((prev) => [...prev, currentScenario.id]);
    checkForMilestone();
  };

  const processAnswer = (isCorrect: boolean, feedback: string, explanation: string) => {
    // Update score and streak
    if (isCorrect) {
      const points = 100 + streak * 10; // Bonus points for streaks
      setScore((prev) => prev + points);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
      setWrongChoices((prev) => [...prev, currentScenario.id]);
    }

    // Mark scenario as completed
    setCompletedScenarios((prev) => [...prev, currentScenario.id]);

    // Show feedback
    setCurrentFeedback({
      isCorrect,
      feedback,
      explanation,
    });
    setShowFeedback(true);
  };

  const checkForMilestone = () => {
    const milestone = storyMilestones.find((m) => m.at === completedScenarios.length + 1);
    if (milestone) {
      setShowMilestone(true);
      setBadges((prev) => [...prev, milestone.badge]);
    } else {
      setCurrentScenarioIndex((prev) => prev + 1);
    }
  };

  const handleFeedbackContinue = () => {
    setShowFeedback(false);
    setCurrentFeedback(null);
    checkForMilestone();
  };

  const handleMilestoneContinue = () => {
    setShowMilestone(false);
    setCurrentScenarioIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setGameStarted(false);
    setCurrentScenarioIndex(0);
    setScore(0);
    setStreak(0);
    setCompletedScenarios([]);
    setWrongChoices([]);
    setBadges([]);
    setShowFeedback(false);
    setShowMilestone(false);
    setCurrentFeedback(null);
  };

  if (!gameStarted) {
    return <StoryIntro onStart={handleStart} />;
  }

  if (isGameComplete) {
    return (
      <CompletionScreen
        score={score}
        totalScenarios={scenarios.length}
        correctAnswers={scenarios.length - wrongChoices.length}
        onRestart={handleRestart}
      />
    );
  }

  // Show milestone if needed
  if (milestoneToShow) {
    return (
      <MilestoneCard
        title={milestoneToShow.title}
        description={milestoneToShow.description}
        badge={milestoneToShow.badge}
        progress={milestoneToShow.progress}
        scenariosCompleted={completedScenarios.length}
        totalScenarios={scenarios.length}
        score={score}
        onContinue={handleMilestoneContinue}
      />
    );
  }

  const renderCard = () => {
    const imageUrl = imageUrls[currentScenarioIndex];

    switch (currentScenario.type) {
      case 'swipe':
        return (
          <SwipeCard
            key={currentScenario.id}
            scenario={currentScenario as SwipeScenario}
            onSwipe={handleSwipe}
            imageUrl={imageUrl}
          />
        );
      case 'quiz':
        return (
          <QuizCard
            key={currentScenario.id}
            scenario={currentScenario as QuizScenario}
            onAnswer={handleQuizAnswer}
            imageUrl={imageUrl}
          />
        );
      case 'info':
        return (
          <InfoCard
            key={currentScenario.id}
            scenario={currentScenario as InfoScenario}
            onContinue={handleInfoContinue}
            imageUrl={imageUrl}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <GameStats
          score={score}
          streak={streak}
          scenariosCompleted={completedScenarios.length}
          totalScenarios={scenarios.length}
        />

        <ProgressPath
          total={scenarios.length}
          current={currentScenario.id}
          completed={completedScenarios}
        />

        <div className="mt-8">
          {currentScenario.storyContext && (
            <StoryContext text={currentScenario.storyContext} />
          )}
          {renderCard()}
        </div>
      </div>

      {showFeedback && currentFeedback && (
        <FeedbackModal
          isCorrect={currentFeedback.isCorrect}
          feedback={currentFeedback.feedback}
          explanation={currentFeedback.explanation}
          score={score}
          streak={streak}
          onContinue={handleFeedbackContinue}
        />
      )}
    </div>
  );
}

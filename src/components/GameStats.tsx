import { Trophy, Flame, Target } from 'lucide-react';

interface GameStatsProps {
  score: number;
  streak: number;
  scenariosCompleted: number;
  totalScenarios: number;
}

export function GameStats({ score, streak, scenariosCompleted, totalScenarios }: GameStatsProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-900">{score}</span>
        </div>
      </div>

      {streak > 0 && (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-gray-900">{streak}</span>
          </div>
        </div>
      )}

      <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-purple-600" />
          <span className="text-gray-900">
            {scenariosCompleted}/{totalScenarios}
          </span>
        </div>
      </div>
    </div>
  );
}

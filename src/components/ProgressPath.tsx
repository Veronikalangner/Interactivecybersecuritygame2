import { CheckCircle, Circle, Lock } from 'lucide-react';

interface ProgressPathProps {
  total: number;
  current: number;
  completed: number[];
}

export function ProgressPath({ total, current, completed }: ProgressPathProps) {
  return (
    <div className="w-full bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700">Your Progress</span>
        <span className="text-purple-600">{completed.length}/{total}</span>
      </div>
      
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {Array.from({ length: total }, (_, i) => {
          const scenarioNum = i + 1;
          const isCompleted = completed.includes(scenarioNum);
          const isCurrent = scenarioNum === current;
          const isLocked = scenarioNum > current && !isCompleted;

          return (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isCurrent
                      ? 'bg-purple-600 text-white ring-4 ring-purple-200 scale-110'
                      : isLocked
                      ? 'bg-gray-200 text-gray-400'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : isLocked ? (
                    <Lock className="w-4 h-4" />
                  ) : (
                    <Circle className="w-4 h-4" />
                  )}
                </div>
                <span className="text-xs mt-1 text-gray-600">{scenarioNum}</span>
              </div>
              
              {i < total - 1 && (
                <div
                  className={`h-0.5 w-6 mx-1 ${
                    completed.includes(scenarioNum) ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

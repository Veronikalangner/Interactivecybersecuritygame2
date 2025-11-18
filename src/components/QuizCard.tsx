import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { QuizScenario } from '../types/game';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface QuizCardProps {
  scenario: QuizScenario;
  onAnswer: (isCorrect: boolean, explanation: string) => void;
  imageUrl: string;
}

export function QuizCard({ scenario, onAnswer, imageUrl }: QuizCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const option = scenario.options[selectedOption];
    setShowResult(true);
    
    setTimeout(() => {
      onAnswer(option.isCorrect, option.explanation);
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={scenario.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Quiz Challenge
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-gray-900 mb-2">{scenario.title}</h2>
            <p className="text-gray-700">
              {scenario.question}
            </p>
          </div>

          <div className="space-y-2">
            {scenario.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const showCorrect = showResult && option.isCorrect;
              const showWrong = showResult && isSelected && !option.isCorrect;

              return (
                <motion.button
                  key={index}
                  onClick={() => !showResult && setSelectedOption(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    showCorrect
                      ? 'bg-green-50 border-green-500'
                      : showWrong
                      ? 'bg-red-50 border-red-500'
                      : isSelected
                      ? 'bg-purple-50 border-purple-500'
                      : 'bg-gray-50 border-gray-200 hover:border-purple-300'
                  }`}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        showCorrect
                          ? 'bg-green-500 border-green-500'
                          : showWrong
                          ? 'bg-red-500 border-red-500'
                          : isSelected
                          ? 'bg-purple-500 border-purple-500'
                          : 'border-gray-300'
                      }`}
                    >
                      {showCorrect && <CheckCircle className="w-4 h-4 text-white" />}
                      {showWrong && <XCircle className="w-4 h-4 text-white" />}
                      {isSelected && !showResult && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`${
                          showCorrect
                            ? 'text-green-900'
                            : showWrong
                            ? 'text-red-900'
                            : 'text-gray-700'
                        }`}
                      >
                        {option.text}
                      </p>
                      {showResult && (showCorrect || showWrong) && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className={`text-sm mt-2 ${
                            showCorrect ? 'text-green-700' : 'text-red-700'
                          }`}
                        >
                          {option.explanation}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null || showResult}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
            size="lg"
          >
            {showResult ? 'Processing...' : 'Submit Answer'}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

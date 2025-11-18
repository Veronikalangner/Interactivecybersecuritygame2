import { motion } from 'motion/react';
import { CheckCircle, XCircle, Trophy, Flame, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface FeedbackModalProps {
  isCorrect: boolean;
  feedback: string;
  explanation: string;
  score: number;
  streak: number;
  onContinue: () => void;
}

export function FeedbackModal({
  isCorrect,
  feedback,
  explanation,
  score,
  streak,
  onContinue,
}: FeedbackModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onContinue}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className={`max-w-md w-full rounded-3xl p-8 shadow-2xl ${
          isCorrect
            ? 'bg-gradient-to-br from-green-500 to-emerald-600'
            : 'bg-gradient-to-br from-red-500 to-rose-600'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            {isCorrect ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: 'spring', damping: 10 }}
              >
                <CheckCircle className="w-20 h-20 text-white" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 10 }}
              >
                <XCircle className="w-20 h-20 text-white" />
              </motion.div>
            )}
          </div>

          <div>
            <h2 className="text-white mb-2">{feedback}</h2>
            <p className="text-white/90">{explanation}</p>
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <div className="flex items-center gap-2 text-white">
                <Trophy className="w-5 h-5" />
                <span className="text-xl">{score}</span>
              </div>
              <p className="text-white/80 text-xs mt-1">Score</p>
            </div>

            {streak > 1 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2"
              >
                <div className="flex items-center gap-2 text-white">
                  <Flame className="w-5 h-5" />
                  <span className="text-xl">{streak}</span>
                </div>
                <p className="text-white/80 text-xs mt-1">Streak!</p>
              </motion.div>
            )}
          </div>

          <Button
            onClick={onContinue}
            size="lg"
            className="w-full bg-white text-gray-900 hover:bg-white/90"
          >
            Continue Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

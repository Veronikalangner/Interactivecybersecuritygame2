import { motion } from 'motion/react';
import { Award, Star, Sparkles, ArrowRight, Trophy } from 'lucide-react';
import { Button } from './ui/button';

interface MilestoneCardProps {
  title: string;
  description: string;
  badge: string;
  progress: string;
  scenariosCompleted: number;
  totalScenarios: number;
  score: number;
  onContinue: () => void;
}

export function MilestoneCard({
  title,
  description,
  badge,
  progress,
  scenariosCompleted,
  totalScenarios,
  score,
  onContinue,
}: MilestoneCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-cyan-900/95 backdrop-blur-lg flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.5, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        className="max-w-lg w-full bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: '100%',
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                y: '-100%',
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          ))}
        </div>

        <div className="relative text-center space-y-6">
          {/* Badge Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 10, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full blur-xl opacity-50"
              />
              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-full">
                <Award className="w-16 h-16 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600">{description}</p>
          </motion.div>

          {/* Badge Earned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <h3 className="text-purple-900">Badge Earned</h3>
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-purple-700 text-xl">{badge}</p>
          </motion.div>

          {/* Progress Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-purple-50 rounded-xl p-4">
              <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl text-purple-900">{score}</div>
              <p className="text-purple-700 text-sm">Total Score</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl text-blue-900">{scenariosCompleted}/{totalScenarios}</div>
              <p className="text-blue-700 text-sm">Completed</p>
            </div>
          </motion.div>

          {/* Story Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-4"
          >
            <p className="text-cyan-900 italic">{progress}</p>
          </motion.div>

          {/* Continue Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <Button
              onClick={onContinue}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Continue Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

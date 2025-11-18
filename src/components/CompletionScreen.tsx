import { motion } from 'motion/react';
import { Trophy, Award, Target, TrendingUp, RotateCcw, Share2, Star } from 'lucide-react';
import { Button } from './ui/button';

interface CompletionScreenProps {
  score: number;
  totalScenarios: number;
  correctAnswers: number;
  onRestart: () => void;
}

export function CompletionScreen({
  score,
  totalScenarios,
  correctAnswers,
  onRestart,
}: CompletionScreenProps) {
  const percentage = Math.round((correctAnswers / totalScenarios) * 100);
  
  const getRank = () => {
    if (percentage >= 90) return { title: 'Cyber Guardian Master', color: 'from-yellow-400 to-orange-500', icon: Trophy };
    if (percentage >= 70) return { title: 'Digital Guardian', color: 'from-purple-400 to-pink-500', icon: Award };
    if (percentage >= 50) return { title: 'Cyber Initiate', color: 'from-blue-400 to-cyan-500', icon: Target };
    return { title: 'Digital Apprentice', color: 'from-gray-400 to-gray-500', icon: TrendingUp };
  };

  const rank = getRank();
  const RankIcon = rank.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <div className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ type: 'spring', damping: 10, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className={`bg-gradient-to-br ${rank.color} p-6 rounded-full relative`}>
              <RankIcon className="w-16 h-16 text-white" />
              {percentage >= 90 && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-4"
                >
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 absolute -top-2 left-1/2 -translate-x-1/2" />
                </motion.div>
              )}
            </div>
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-900 mb-2"
            >
              Quest Complete!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-transparent bg-clip-text bg-gradient-to-r ${rank.color} text-2xl`}
            >
              {rank.title}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6"
          >
            <p className="text-gray-700 italic">
              {percentage >= 90
                ? "You've mastered the arts of digital security! Alex is safe thanks to your guidance, and the Council welcomes you as a true Guardian. You're ready to protect yourself and others in the CyberVerse!"
                : percentage >= 70
                ? "Excellent work, Guardian! You've learned crucial security skills. Alex's accounts are secure, and you're well-prepared to face most digital threats!"
                : percentage >= 50
                ? "Well done, Initiate! You've grasped the fundamentals of cybersecurity. Keep practicing to become a true Guardian!"
                : "You've begun your journey into cybersecurity. Review the lessons and try again to strengthen your defenses!"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-4 py-6"
          >
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-4xl text-purple-600 mb-2">{score}</div>
              <p className="text-purple-900">Total Score</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-4xl text-blue-600 mb-2">{percentage}%</div>
              <p className="text-blue-900">Accuracy</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl">
              <Award className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
              <div className="text-4xl text-cyan-600 mb-2">
                {correctAnswers}/{totalScenarios}
              </div>
              <p className="text-cyan-900">Correct</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6 space-y-3"
          >
            <h3 className="text-gray-900">Guardian's Wisdom</h3>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">🛡️</span>
                <span>Always verify suspicious emails and messages before clicking links</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">🔐</span>
                <span>Use strong, unique passwords and enable two-factor authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">⚡</span>
                <span>Keep your software updated to protect against vulnerabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">🎯</span>
                <span>Think before you share personal information online</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-3"
          >
            <Button
              onClick={onRestart}
              size="lg"
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Restart Quest
            </Button>

            <Button
              onClick={() => {
                const text = `I just completed CyberSwipe Academy and earned the rank of ${rank.title}! 🛡️ Score: ${score} | Accuracy: ${percentage}%`;
                if (navigator.share) {
                  navigator.share({ text });
                } else {
                  navigator.clipboard.writeText(text);
                  alert('Results copied to clipboard!');
                }
              }}
              size="lg"
              variant="outline"
              className="flex-shrink-0"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

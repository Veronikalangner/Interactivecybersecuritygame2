import { Shield, Target, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface StoryIntroProps {
  onStart: () => void;
}

export function StoryIntro({ onStart }: StoryIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl relative z-10"
      >
        <div className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ type: 'spring', damping: 10, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-full">
              <Shield className="w-16 h-16 text-white" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-purple-600 mb-2">
              The Digital Awakening
            </h1>
            <p className="text-purple-700">CyberSwipe Academy</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6 text-left"
          >
            <div className="flex items-start gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-2">Your Story Begins...</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Welcome, Digital Guardian! You've just entered the <span className="text-purple-600">CyberVerse</span> - 
                    a world where every click, swipe, and tap shapes your digital destiny.
                  </p>
                  <p>
                    Your friend <span className="text-blue-600">Alex</span> just fell victim to a phishing scam 
                    and lost access to all their accounts. Now, you've been chosen by the <span className="text-purple-600">Council 
                    of Digital Guardians</span> to learn the ancient arts of cybersecurity.
                  </p>
                  <p>
                    Your journey begins in the everyday world, but the choices you make will determine whether 
                    you become a true Digital Guardian or just another victim of cybercrime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid md:grid-cols-3 gap-4 py-4"
          >
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="text-purple-900 mb-1">10 Challenges</h3>
              <p className="text-purple-700 text-sm">Swipes, quizzes & info snacks</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="text-blue-900 mb-1">Epic Story</h3>
              <p className="text-blue-700 text-sm">Follow your guardian path</p>
            </div>
            
            <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
              <Shield className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
              <h3 className="text-cyan-900 mb-1">Earn Badges</h3>
              <p className="text-cyan-700 text-sm">Unlock rewards & master security</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="space-y-4"
          >
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800">
                <span className="font-semibold">Your Mission:</span> Navigate through different challenges - 
                swipe on scenarios, answer quiz questions, and learn from info snacks. Earn badges 
                as you progress and become a Cyber Guardian Master!
              </p>
            </div>

            <Button 
              onClick={onStart}
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Begin Your Quest
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from 'motion/react';
import { Lightbulb, ArrowRight, BookOpen } from 'lucide-react';
import { InfoScenario } from '../types/game';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InfoCardProps {
  scenario: InfoScenario;
  onContinue: () => void;
  imageUrl: string;
}

export function InfoCard({ scenario, onContinue, imageUrl }: InfoCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-2xl overflow-hidden min-h-[500px]"
      >
        <div className="relative h-56 overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={scenario.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
          <div className="absolute top-4 left-4 bg-cyan-400 text-blue-900 px-3 py-1 rounded-full flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Info Snack</span>
          </div>
        </div>

        <div className="p-8 space-y-5 text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-white mb-3">{scenario.title}</h2>
            <p className="text-cyan-50 leading-relaxed">
              {scenario.content}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30"
          >
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
              <div>
                <p className="text-cyan-100 text-sm mb-1">Pro Tip</p>
                <p className="text-white">{scenario.tip}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={onContinue}
              size="lg"
              className="w-full bg-white text-blue-900 hover:bg-cyan-50"
            >
              Continue Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

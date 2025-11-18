import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

interface StoryContextProps {
  text: string;
}

export function StoryContext({ text }: StoryContextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md mx-auto mb-4"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-purple-200">
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <p className="text-gray-700 text-sm italic">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

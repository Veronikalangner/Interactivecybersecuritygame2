import { useState, useRef } from 'react';
import { motion, PanInfo } from 'motion/react';
import { ArrowLeft, ArrowRight, AlertCircle } from 'lucide-react';
import { Scenario } from '../types/game';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SwipeCardProps {
  scenario: Scenario;
  onSwipe: (direction: 'left' | 'right') => void;
  imageUrl: string;
}

export function SwipeCard({ scenario, onSwipe, imageUrl }: SwipeCardProps) {
  const [exitX, setExitX] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    
    if (Math.abs(info.offset.x) > threshold) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      setExitX(info.offset.x);
      setSwipeDirection(direction);
      
      setTimeout(() => {
        onSwipe(direction);
      }, 300);
    }
  };

  const handleButtonClick = (direction: 'left' | 'right') => {
    setExitX(direction === 'left' ? -300 : 300);
    setSwipeDirection(direction);
    
    setTimeout(() => {
      onSwipe(direction);
    }, 300);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <motion.div
        ref={cardRef}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={swipeDirection ? { x: exitX, opacity: 0, scale: 0.8 } : { x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={scenario.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
            {scenario.category}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-gray-900 mb-2">{scenario.title}</h2>
            <p className="text-gray-600">
              {scenario.description}
            </p>
          </div>

          <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl p-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm">
              Choose wisely! Your decision will affect your security score.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button
              onClick={() => handleButtonClick('left')}
              variant="outline"
              className="flex items-center gap-2 h-auto py-3 border-2 border-red-300 hover:bg-red-50 hover:border-red-400"
            >
              <ArrowLeft className="w-5 h-5 text-red-600" />
              <div className="text-left flex-1">
                <div className="text-red-600">{scenario.leftAction.label}</div>
              </div>
            </Button>

            <Button
              onClick={() => handleButtonClick('right')}
              variant="outline"
              className="flex items-center gap-2 h-auto py-3 border-2 border-green-300 hover:bg-green-50 hover:border-green-400"
            >
              <div className="text-left flex-1">
                <div className="text-green-600">{scenario.rightAction.label}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-green-600" />
            </Button>
          </div>

          <p className="text-center text-gray-400 text-sm">
            Swipe left or right, or tap a button
          </p>
        </div>
      </motion.div>
    </div>
  );
}

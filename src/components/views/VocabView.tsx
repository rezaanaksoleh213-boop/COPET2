import { useState } from 'react';
import { motion } from 'framer-motion';
import { vocabulary } from '../../data/vocabulary';
import { useGameEngine } from '../../hooks/useGameEngine';
import { BookOpen, ChevronRight, Search } from 'lucide-react';

export function VocabView() {
  const { setMode } = useGameEngine();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const term = vocabulary[currentIndex];

  const handleNext = () => {
    if (currentIndex < vocabulary.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 300);
    } else {
      setMode('home');
    }
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto py-10">
      <div className="flex items-center justify-between w-full mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <BookOpen className="text-indigo-400" /> Vocab Database
          </h2>
          <p className="text-slate-400 text-sm">Review terminology and concepts.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-mono text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
          {currentIndex + 1} / {vocabulary.length}
        </div>
      </div>

      <div className="w-full mb-8" style={{ perspective: 1200 }}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[400px]"
        >
          <motion.div
            className="w-full h-full relative cursor-pointer"
            variants={flipVariants}
            initial="front"
            animate={isFlipped ? "back" : "front"}
            transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front of Card */}
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_25px_rgba(34,211,238,0.1)] flex flex-col items-center justify-center overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] transition-colors duration-300" 
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500 via-indigo-500 to-cyan-500 opacity-50"></div>
              
              <span className="px-4 py-1.5 bg-slate-800/80 text-cyan-400 rounded-full text-xs font-mono mb-8 border border-cyan-500/30">
                {term.category}
              </span>
              
              <h3 className="text-5xl font-bold text-white mb-10 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] text-center">
                {term.word}
              </h3>
              
              <div className="flex items-center gap-2 text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-lg font-mono text-sm animate-pulse border border-cyan-500/20">
                <Search className="w-4 h-4" />
                Tap to Decrypt
              </div>
            </div>

            {/* Back of Card */}
            <div 
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md border border-indigo-500/40 rounded-3xl p-8 shadow-[0_0_35px_rgba(99,102,241,0.2)] flex flex-col justify-center overflow-hidden hover:border-indigo-400/60 hover:shadow-[0_0_45px_rgba(99,102,241,0.3)] transition-colors duration-300" 
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 opacity-50"></div>
              
              <h4 className="text-sm font-mono text-indigo-400 mb-3 uppercase tracking-wider text-center">Decrypted Meaning</h4>
              
              <p className="text-white text-2xl font-medium leading-relaxed mb-6 text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] scale-105">
                {term.indonesianMeaning}
              </p>
              
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-700/50 mt-auto">
                <span className="text-xs font-mono text-slate-400 uppercase block mb-2">Detected Usage:</span>
                <p className="text-base text-slate-300 italic">"{term.indonesianExample}"</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={handleNext}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)]"
      >
        {currentIndex < vocabulary.length - 1 ? 'Next Term' : 'Complete Review'} <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

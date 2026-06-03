import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface FeedbackDrawerProps {
  isOpen: boolean;
  isCorrect: boolean | null;
  explanation: string;
  clues: string[];
  onNext: () => void;
}

export function FeedbackDrawer({ isOpen, isCorrect, explanation, clues, onNext }: FeedbackDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 w-full z-50 bg-[#1e293b] border-t border-slate-700 rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.6)]"
        >
          <div className="max-w-4xl mx-auto p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                    <h3 className="text-2xl font-bold text-emerald-500">Correct Assessment!</h3>
                  </>
                ) : (
                  <>
                    <XCircle className="w-8 h-8 text-rose-500" />
                    <h3 className="text-2xl font-bold text-rose-500">Incorrect Assessment</h3>
                  </>
                )}
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">{explanation}</p>
              
              <div className="mb-6 md:mb-0">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Identifiers</h4>
                <div className="flex flex-wrap gap-2">
                  {clues.map((clue, idx) => (
                    <span key={idx} className="bg-slate-900 text-cyan-400 border border-cyan-900/60 px-3 py-1 text-xs rounded-full font-mono">
                      {clue}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-end justify-center md:justify-end md:ml-auto">
              <button 
                onClick={onNext}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-[0_0_15px_rgba(8,145,178,0.4)] hover:shadow-[0_0_25px_rgba(8,145,178,0.6)]"
              >
                Next Case <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

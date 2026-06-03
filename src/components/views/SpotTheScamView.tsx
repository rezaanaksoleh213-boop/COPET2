import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizScenarios } from '../../data/quizData';
import { useGameEngine } from '../../hooks/useGameEngine';
import { WhatsAppMockup } from '../ui/WhatsAppMockup';
import { EmailMockup } from '../ui/EmailMockup';
import { FeedbackDrawer } from '../ui/FeedbackDrawer';
import { ShieldAlert, ShieldCheck, Trophy } from 'lucide-react';

export function SpotTheScamView() {
  const { addPoints, incrementMastered, setMode } = useGameEngine();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  // Completed State
  if (currentIndex >= quizScenarios.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-700">
        <Trophy className="w-24 h-24 text-yellow-400 mb-6 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]" />
        <h2 className="text-4xl font-bold text-white mb-4">Module Completed!</h2>
        <p className="text-slate-400 mb-8 max-w-md">You have analyzed all active threats in this sector. Return to the dashboard for further training.</p>
        <button 
          onClick={() => setMode('home')} 
          className="bg-slate-800 text-white px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors shadow-lg"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const scenario = quizScenarios[currentIndex];

  const handleAnswer = (userThinksScam: boolean) => {
    setIsScanning(true);
    const correct = userThinksScam === scenario.isScam;
    
    setTimeout(() => {
      setIsScanning(false);
      setIsCorrect(correct);
      setFeedbackOpen(true);
      
      if (correct) {
        addPoints(100);
        incrementMastered();
      }
    }, 1500); // 1.5s delay for scanning animation
  };

  const handleNext = () => {
    setFeedbackOpen(false);
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setIsCorrect(null);
    }, 300); // Wait for drawer animation to close
  };

  return (
    <div className="relative pb-32">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Spot the Scam</h2>
          <p className="text-slate-400 text-sm">Analyze the communication below. Is it safe or a threat?</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-mono text-cyan-400 shadow-sm flex items-center justify-center h-fit">
          Case {currentIndex + 1} / {quizScenarios.length}
        </div>
      </div>

      {/* Mockup Display with framer-motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={scenario.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center mb-10 relative overflow-hidden rounded-3xl"
        >
          {scenario.platform === 'email' ? (
            <EmailMockup 
              senderName={scenario.senderName}
              senderAddress={scenario.senderAddress}
              subject={scenario.subject}
              content={scenario.content}
            />
          ) : (
            <WhatsAppMockup 
              senderName={scenario.senderName}
              message={scenario.content}
            />
          )}

          {/* Laser Scanner Animation */}
          {isScanning && (
            <motion.div 
              className="absolute left-0 right-0 z-50 pointer-events-none"
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              transition={{ duration: 1.5, ease: "linear" }}
            >
              <div className="h-1.5 bg-cyan-400 shadow-[0_0_20px_#22d3ee,0_0_40px_#22d3ee] w-full" />
              <div className="h-32 bg-linear-to-b from-cyan-400/30 to-transparent w-full" />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6">
        <button
          onClick={() => handleAnswer(false)}
          disabled={feedbackOpen || isScanning}
          className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-emerald-900 bg-emerald-900/20 hover:bg-emerald-900/40 hover:border-emerald-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group w-40"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="font-semibold text-emerald-400">Safe</span>
        </button>

        <button
          onClick={() => handleAnswer(true)}
          disabled={feedbackOpen || isScanning}
          className="flex flex-col items-center gap-2 p-6 rounded-2xl border border-rose-900 bg-rose-900/20 hover:bg-rose-900/40 hover:border-rose-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group w-40"
        >
          <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center group-hover:bg-rose-500/30">
            <ShieldAlert className="w-6 h-6 text-rose-400" />
          </div>
          <span className="font-semibold text-rose-400">Scam</span>
        </button>
      </div>

      <FeedbackDrawer
        isOpen={feedbackOpen}
        isCorrect={isCorrect}
        explanation={scenario.explanation}
        clues={scenario.clues}
        onNext={handleNext}
      />
    </div>
  );
}

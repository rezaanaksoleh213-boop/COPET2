import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { simulationBranch, type SimulationChoice } from '../../data/simulationData';
import { useGameEngine } from '../../hooks/useGameEngine';
import { WhatsAppMockup, type Message } from '../ui/WhatsAppMockup';
import { FeedbackDrawer } from '../ui/FeedbackDrawer';
import { GitBranch, Trophy, Globe2 } from 'lucide-react';

function ActionCard({ choice, onClick, disabled }: { choice: SimulationChoice, onClick: () => void, disabled: boolean }) {
  const [isTranslated, setIsTranslated] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={onClick}
        disabled={disabled}
        className="w-full text-left p-5 pr-12 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-emerald-500/50 transition-all text-slate-200 disabled:opacity-50 relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isTranslated ? 'id' : 'en'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {isTranslated && choice.idText ? choice.idText : choice.text}
          </motion.div>
        </AnimatePresence>
      </button>

      {choice.idText && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsTranslated(!isTranslated);
          }}
          disabled={disabled}
          className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors z-10 ${isTranslated ? 'text-cyan-400 bg-cyan-900/30' : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50'} disabled:opacity-50`}
          title="Translate"
        >
          <Globe2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export function SimulationView() {
  const { addPoints, incrementMastered, setMode } = useGameEngine();
  const [currentNodeId, setCurrentNodeId] = useState<string | null>('start');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<SimulationChoice | null>(null);
  
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentNodeId && simulationBranch[currentNodeId]) {
      const node = simulationBranch[currentNodeId];
      setChatHistory(prev => [...prev, { id: `scammer-${node.id}`, text: node.message, idText: node.idMessage, isUser: false }]);
    }
  }, [currentNodeId]);

  // Completed State
  if (!currentNodeId) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-700">
        <Trophy className="w-24 h-24 text-emerald-400 mb-6 drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]" />
        <h2 className="text-4xl font-bold text-white mb-4">Simulation Complete</h2>
        <p className="text-slate-400 mb-8 max-w-md">You've reached the end of this scenario. Analyze your decisions and return to base.</p>
        <button 
          onClick={() => setMode('home')} 
          className="bg-slate-800 text-white px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors shadow-lg"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const node = simulationBranch[currentNodeId];

  const handleChoiceClick = (choice: SimulationChoice) => {
    setSelectedChoice(choice);
    setChatHistory(prev => [...prev, { id: `user-${Date.now()}`, text: choice.text, idText: choice.idText, isUser: true }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      if (choice.result === 'neutral') {
        setCurrentNodeId(choice.nextNodeId);
      } else {
        setFeedbackOpen(true);
        if (choice.result === 'safe') {
          addPoints(150);
          incrementMastered();
        }
      }
    }, 1500);
  };

  const handleNext = () => {
    setFeedbackOpen(false);
    setTimeout(() => {
      setCurrentNodeId(selectedChoice?.nextNodeId || null);
      setSelectedChoice(null);
    }, 300);
  };

  return (
    <div className="relative pb-32">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <GitBranch className="text-emerald-400" /> Live Simulation
          </h2>
          <p className="text-slate-400 text-sm">Navigate the conversation carefully.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <WhatsAppMockup senderName={node.sender} messages={chatHistory} isTyping={isTyping} />
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col gap-4 mt-4 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={node.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-lg font-semibold text-slate-300 mb-2">Available Actions:</h3>
              {node.choices.map((choice, idx) => (
                <ActionCard 
                  key={idx} 
                  choice={choice} 
                  onClick={() => handleChoiceClick(choice)} 
                  disabled={feedbackOpen || isTyping} 
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <FeedbackDrawer
        isOpen={feedbackOpen}
        isCorrect={selectedChoice?.result === 'safe'}
        explanation={selectedChoice?.feedback || ''}
        clues={[]} // No clues for simulation feedback natively
        onNext={handleNext}
      />
    </div>
  );
}

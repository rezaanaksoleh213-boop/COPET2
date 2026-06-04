import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameEngine } from '../../hooks/useGameEngine';
import { quizData } from '../../data/quizData';
import { ShieldAlert, ArrowLeft, ChevronRight, Clock, AlertCircle, CheckCircle2, XCircle, Languages, Trophy, Unlock } from 'lucide-react';

export function SpotTheScamView() {
  const { setMode, addPoints, unlockAchievement, unlockAdvancedLevel } = useGameEngine();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  // STATE TRACKER BARU
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [pointsEarnedThisRound, setPointsEarnedThisRound] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [newAchievements, setNewAchievements] = useState<string[]>([]); // Cuma buat nampilin animasi popup akhir

  const [showTranslation, setShowTranslation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isTimeOut, setIsTimeOut] = useState(false);

  const question = quizData[currentIndex];
  const isLastQuestion = currentIndex === quizData.length - 1;

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered && !isQuizFinished) {
      const timerId = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !isAnswered) {
      setIsTimeOut(true);
      setIsAnswered(true);
      setSelectedAnswer(-1);
      setPointsEarnedThisRound(0);
    }
  }, [timeLeft, isAnswered, isQuizFinished]);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === question.correctAnswerIndex) {
      setCorrectAnswersCount(prev => prev + 1);
      
      // SISTEM SKOR: Poin Dasar (10) + Bonus Kecepatan (sisa waktu x 5)
      const speedBonus = timeLeft * 5;
      const totalPoints = 10 + speedBonus;
      
      setPointsEarnedThisRound(totalPoints);
      addPoints(totalPoints); 
    } else {
      setPointsEarnedThisRound(0);
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(15); 
      setIsTimeOut(false);
      setShowTranslation(false);
      setPointsEarnedThisRound(0);
    } else {
      calculateAchievements();
    }
  };

  const calculateAchievements = () => {
    setIsQuizFinished(true);
    const earned: string[] = [];
    
    // LOGIKA ACHIEVEMENT
    if (correctAnswersCount > 0) {
      unlockAchievement("SCAM SURVIVOR");
      earned.push("SCAM SURVIVOR");
    }
    
    if (correctAnswersCount === quizData.length) {
      unlockAchievement("SCAM HUNTER");
      earned.push("SCAM HUNTER");
      
      // Zero Tolerance kalau bisa jawab sempurna dan poin kecepatan tinggi (asumsi total poin besar)
      unlockAchievement("ZERO TOLERANCE");
      earned.push("ZERO TOLERANCE");
      
      // UNLOCK LEVEL BARU karena udah master!
      unlockAdvancedLevel();
    }
    
    setNewAchievements(earned);
  };

  const getDifficultyColor = (level: string) => {
    switch(level) {
      case 'Easy': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Medium': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Hard': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      case 'Expert': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
    }
  };

  // TAMPILAN JIKA KUIS SELESAI (MISSION REPORT)
  if (isQuizFinished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900/80 backdrop-blur-md border border-indigo-500/50 p-8 md:p-12 rounded-3xl w-full max-w-2xl text-center shadow-[0_0_50px_rgba(99,102,241,0.2)]"
        >
          <ShieldAlert className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-2 tracking-widest">MISSION REPORT</h2>
          <p className="text-slate-400 mb-8 font-mono">SCAM DETECTION EVALUATION COMPLETE</p>
          
          <div className="flex justify-center gap-8 mb-10">
            <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
              <div className="text-5xl font-bold text-emerald-400 mb-2">{correctAnswersCount}/{quizData.length}</div>
              <div className="text-xs text-slate-500 font-mono tracking-wider">ACCURACY</div>
            </div>
          </div>

          {newAchievements.length > 0 && (
            <div className="mb-10 text-left bg-slate-950/80 p-6 rounded-2xl border border-rose-500/30">
              <h3 className="text-rose-400 font-mono text-sm mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4" /> BADGES ACQUIRED
              </h3>
              <div className="flex flex-wrap gap-3">
                {newAchievements.map(ach => (
                  <span key={ach} className="bg-gradient-to-r from-rose-500/20 to-orange-500/20 border border-rose-500/50 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                    {ach}
                  </span>
                ))}
              </div>
            </div>
          )}

          {correctAnswersCount === quizData.length && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
              className="bg-cyan-500/20 border border-cyan-400 p-4 rounded-xl text-cyan-300 font-mono text-sm mb-8 flex items-center justify-center gap-3 animate-pulse"
            >
              <Unlock className="w-5 h-5" /> NEW SECURITY LEVEL UNLOCKED!
            </motion.div>
          )}

          <button
            onClick={() => setMode('home')}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg"
          >
            RETURN TO DASHBOARD
          </button>
        </motion.div>
      </div>
    );
  }

  // TAMPILAN KUIS NORMAL (Sama kayak sebelumnya, cuma ditambah Poin Didapat)
  return (
    <div className="min-h-screen p-6 md:p-12 relative flex flex-col items-center">
      {/* HEADER & NAVIGASI */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <button
          onClick={() => setMode('home')}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-indigo-400 border border-indigo-500/30 rounded-lg backdrop-blur-sm transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-mono text-sm">MENU UTAMA</span>
        </button>

        <div className="flex gap-4">
          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-mono text-indigo-400">
            Case: {currentIndex + 1} / {quizData.length}
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* JUDUL & LEVEL BADGE */}
        <div className="flex flex-col items-center mb-6 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="text-rose-400" /> Spot The Scam
          </h2>
          
          <div className="flex items-center justify-between w-full bg-slate-900/80 p-4 rounded-xl border border-slate-700/50">
            <span className={`px-3 py-1 rounded-full text-xs font-mono border ${getDifficultyColor(question.difficulty)}`}>
              THREAT LEVEL: {question.difficulty.toUpperCase()}
            </span>

            <div className={`flex items-center gap-2 font-mono text-lg font-bold ${timeLeft <= 5 ? 'text-rose-500 animate-pulse' : 'text-cyan-400'}`}>
              <Clock className="w-5 h-5" />
              00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </div>
          </div>
        </div>

        {/* AREA SKENARIO SOAL */}
        <div className="w-full bg-slate-800/40 border border-indigo-500/20 p-6 md:p-8 rounded-2xl mb-4 shadow-lg backdrop-blur-sm relative overflow-hidden flex flex-col items-start">
          {!isAnswered && (
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 15, ease: "linear" }}
              className={`absolute top-0 left-0 h-1 ${timeLeft <= 5 ? 'bg-rose-500' : 'bg-cyan-500'}`}
            />
          )}

          <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
            "{question.scenarioEn}"
          </p>

          <AnimatePresence>
            {showTranslation && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                className="text-slate-400 italic text-sm md:text-base mt-4 pt-4 border-t border-slate-700/50 w-full"
              >
                ID: "{question.scenarioId}"
              </motion.p>
            )}
          </AnimatePresence>

          <button 
            onClick={() => setShowTranslation(!showTranslation)}
            className="mt-6 px-4 py-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-lg text-xs font-mono flex items-center gap-2 hover:bg-indigo-500/20 transition-colors self-end"
          >
            <Languages className="w-4 h-4" />
            {showTranslation ? 'Sembunyikan Terjemahan' : 'Terjemahkan (ID)'}
          </button>
        </div>

        {/* PILIHAN JAWABAN */}
        <div className="w-full flex flex-col gap-3 mb-8">
          {question.optionsEn.map((optionEn, index) => {
            let btnClass = "bg-slate-900 border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800";
            
            if (isAnswered) {
              if (index === question.correctAnswerIndex) {
                btnClass = "bg-emerald-500/20 border-emerald-500 text-emerald-100"; 
              } else if (index === selectedAnswer) {
                btnClass = "bg-rose-500/20 border-rose-500 text-rose-100"; 
              } else {
                btnClass = "bg-slate-900 border-slate-800 text-slate-500 opacity-50"; 
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${btnClass}`}
              >
                <div className="flex flex-col gap-1 w-11/12">
                  <span className="text-base">{optionEn}</span>
                  <AnimatePresence>
                    {showTranslation && (
                      <motion.span 
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        className="text-xs text-slate-400/80 italic mt-1"
                      >
                        {question.optionsId[index]}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className="w-1/12 flex justify-end">
                  {isAnswered && index === question.correctAnswerIndex && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                  {isAnswered && index === selectedAnswer && index !== question.correctAnswerIndex && <XCircle className="w-5 h-5 text-rose-500" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* FEEDBACK LANGSUNG & TOMBOL NEXT */}
        {isAnswered && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className={`w-full p-6 rounded-2xl mb-8 border relative ${
              isTimeOut ? 'bg-amber-500/10 border-amber-500/30' : selectedAnswer === question.correctAnswerIndex ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'
            }`}
          >
            {/* BADGE POIN KECEPATAN (Muncul kalau jawab bener) */}
            {selectedAnswer === question.correctAnswerIndex && !isTimeOut && (
               <div className="absolute -top-4 right-6 bg-emerald-500 text-slate-900 font-bold px-3 py-1 rounded-full text-sm animate-bounce shadow-lg border-2 border-emerald-200">
                 +{pointsEarnedThisRound} PTS (Speed Bonus!)
               </div>
            )}

            <div className="flex items-start gap-3">
              <AlertCircle className={`w-6 h-6 shrink-0 mt-1 ${isTimeOut ? 'text-amber-500' : selectedAnswer === question.correctAnswerIndex ? 'text-emerald-500' : 'text-rose-500'}`} />
              <div className="flex flex-col gap-2 w-full">
                <h3 className={`text-lg font-bold ${isTimeOut ? 'text-amber-500' : selectedAnswer === question.correctAnswerIndex ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {isTimeOut ? "TIME'S UP!" : selectedAnswer === question.correctAnswerIndex ? "CORRECT ANALYSIS!" : "WARNING: YOU'VE BEEN SCAMMED!"}
                </h3>
                
                <p className="text-slate-200 leading-relaxed text-sm md:text-base">
                  {question.explanationEn}
                </p>
                
                {showTranslation && (
                  <p className="text-slate-400 italic leading-relaxed text-xs md:text-sm border-t border-slate-700/50 pt-2 mt-1">
                    ID: {question.explanationId}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full mt-6 flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg"
            >
              {isLastQuestion ? 'Selesaikan Misi & Lihat Hasil' : 'Next Case'} <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
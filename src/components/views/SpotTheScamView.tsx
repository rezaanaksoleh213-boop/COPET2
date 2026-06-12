import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameEngine } from '../../hooks/useGameEngine';
import { quizData } from '../../data/quizData';
import { 
  ShieldAlert, ArrowLeft, ChevronRight, Clock, AlertCircle, 
  CheckCircle2, XCircle, Languages, Trophy, ShieldCheck, Target,
  Camera, FileImage, Send, ExternalLink
} from 'lucide-react';

const DIFFICULTY_LEVELS = ['Easy', 'Medium', 'Hard', 'Expert'];

export function SpotTheScamView() {
  const { setMode, addPoints, unlockAchievement, unlockAdvancedLevel, saveScoreLog, recordMistake, getWeakestCategory, addQuizCorrectProgress } = useGameEngine();
  
  const [visitedIndices, setVisitedIndices] = useState<number[]>([0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDiffIndex, setCurrentDiffIndex] = useState(0); 
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [pointsEarnedThisRound, setPointsEarnedThisRound] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isTimeOut, setIsTimeOut] = useState(false);

  const [isReportingPhase, setIsReportingPhase] = useState(false);
  const [reportStep, setReportStep] = useState(1);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [newAchievements, setNewAchievements] = useState<string[]>([]); 

  const totalQuestionsToPlay = Math.min(4, quizData.length); 
  const isLastQuestion = visitedIndices.length >= totalQuestionsToPlay;
  const question = quizData[currentIndex] || quizData[0];

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered && !isQuizFinished && !isReportingPhase) {
      const timerId = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !isAnswered) {
      setIsTimeOut(true);
      setIsAnswered(true);
      setSelectedAnswer(-1);
      setPointsEarnedThisRound(0);
      recordMistake(question.category || 'General');
    }
  }, [timeLeft, isAnswered, isQuizFinished, isReportingPhase]);

  const findNextQuestion = (targetDiffIndex: number, currentVisited: number[]) => {
    const targetDifficulty = DIFFICULTY_LEVELS[targetDiffIndex];
    let nextIdx = quizData.findIndex((q, idx) => !currentVisited.includes(idx) && q.difficulty === targetDifficulty);
    
    if (nextIdx === -1) {
      nextIdx = quizData.findIndex((_, idx) => !currentVisited.includes(idx));
    }

    if (nextIdx !== -1) {
      setCurrentIndex(nextIdx);
      setVisitedIndices(prev => [...prev, nextIdx]);
    }
  };

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === question.correctAnswerIndex) {
      setCorrectAnswersCount(prev => prev + 1);
      const speedBonus = timeLeft * 5;
      const totalPoints = 10 + speedBonus;
      setPointsEarnedThisRound(totalPoints);
      addPoints(totalPoints); 
      
      // KODE INTEGRASI: Kirim progress jawaban benar ke misi harian di dashboard
      addQuizCorrectProgress(1);

      setCurrentDiffIndex(prev => Math.min(prev + 1, DIFFICULTY_LEVELS.length - 1));
    } else {
      setPointsEarnedThisRound(0);
      setCurrentDiffIndex(prev => Math.max(prev - 1, 0));
      recordMistake(question.category || 'General');
    }
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      findNextQuestion(currentDiffIndex, visitedIndices);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(15); 
      setIsTimeOut(false);
      setShowTranslation(false);
      setPointsEarnedThisRound(0);
    } else {
      setIsReportingPhase(true);
    }
  };

  const handleReportSubmit = (isCorrectChannel: boolean) => {
    if (isCorrectChannel) {
      addPoints(25);
    }
    setReportStep(3); 
  };

  const calculateAchievements = () => {
    setIsReportingPhase(false);
    setIsQuizFinished(true);
    const earned: string[] = [];
    let highestBadge = "MEMBER BARU"; 
    
    if (correctAnswersCount > 0) {
      unlockAchievement("SCAM SURVIVOR");
      earned.push("SCAM SURVIVOR");
      highestBadge = "SCAM SURVIVOR";
    }
    
    if (correctAnswersCount === totalQuestionsToPlay) {
      unlockAchievement("SCAM HUNTER");
      earned.push("SCAM HUNTER");
      highestBadge = "SCAM HUNTER";
      unlockAchievement("ZERO TOLERANCE");
      earned.push("ZERO TOLERANCE");
      highestBadge = "ZERO TOLERANCE";
      unlockAdvancedLevel();
    }
    
    setNewAchievements(earned);
    saveScoreLog(highestBadge);
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

  if (isQuizFinished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900/80 backdrop-blur-md border border-indigo-500/50 p-8 md:p-12 rounded-3xl w-full max-w-2xl text-center shadow-[0_0_50px_rgba(99,102,241,0.2)]"
        >
          <ShieldAlert className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-2 tracking-widest">MISSION REPORT</h2>
          <p className="text-slate-400 mb-8 font-mono">SCAM DETECTION EVALUATION COMPLETE</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{correctAnswersCount}/{totalQuestionsToPlay}</div>
              <div className="text-xs text-slate-500 font-mono tracking-wider">ACCURACY ACCUMULATED</div>
            </div>
            
            <div className="bg-rose-950/20 p-6 rounded-2xl border border-rose-500/30 flex flex-col items-center justify-center">
              <Target className="w-6 h-6 text-rose-400 mb-2" />
              <div className="text-[10px] text-slate-500 font-mono mb-1 uppercase tracking-wider">Rekomendasi Area Fokus:</div>
              <div className="text-lg font-bold text-rose-400 uppercase tracking-wide font-mono">
                {getWeakestCategory()}
              </div>
            </div>
          </div>

          {newAchievements.length > 0 && (
            <div className="mb-10 text-left bg-slate-950/80 p-6 rounded-2xl border border-rose-500/30">
              <h3 className="text-rose-400 font-mono text-sm mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4" /> BADGES UNLOCKED
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

          <button
            onClick={() => setMode('home')}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg tracking-wide font-mono"
          >
            RETURN TO DASHBOARD
          </button>
        </motion.div>
      </div>
    );
  }

  if (isReportingPhase) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 relative">
        <div className="w-full max-w-3xl flex justify-between items-center mb-6">
          <div className="text-cyan-400 font-mono text-sm font-bold flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> SCAM_REPORTER_STATION
          </div>
          <div className="bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs font-mono text-slate-500">
            Step: {reportStep}/3
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/80 border border-indigo-500/30 p-6 md:p-8 rounded-3xl w-full max-w-3xl shadow-2xl relative overflow-hidden"
        >
          {reportStep === 1 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2 font-mono">AMBIL BUKTI BERSALAH</h2>
              <p className="text-slate-400 mb-6 text-sm">Simulasi: Pelaku mengirimkan file berbahaya berkedok dokumen kurir ekspedisi. Amankan bukti screenshot sebelum memblokir!</p>
              
              <div className="bg-[#0b141a] border border-slate-800 rounded-2xl p-4 max-w-sm mx-auto text-left relative overflow-hidden shadow-2xl mb-8">
                <div className="bg-[#202c33] -m-4 mb-4 p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-xs font-bold text-white">J&T</div>
                  <div className="text-white text-sm font-bold">Kurir J&T Express</div>
                </div>
                <div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none text-sm w-[85%] mb-2">
                  Permisi pak/ibu.. benar dgn nama pemilik no ini? Ada paket..
                </div>
                <div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none text-sm w-[85%] border border-rose-500/40">
                  <div className="flex items-center gap-2 mb-2 bg-slate-800 p-2 rounded">
                    <FileImage className="text-rose-400 w-5 h-5 animate-pulse" />
                    <span className="font-mono text-xs text-rose-300">Lihat_Foto_Paket.apk</span>
                  </div>
                  Silahkan di cek detail foto paketnya disni ya agar jelas
                </div>
              </div>

              <button
                onClick={() => setReportStep(2)}
                className="group inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] font-mono text-sm"
              >
                <Camera className="w-5 h-5 group-active:scale-90 transition-transform" />
                AMBIL SCREENSHOT BUKTI
              </button>
            </div>
          )}

          {reportStep === 2 && (
            <div className="text-center">
              <div className="inline-block bg-emerald-500/10 text-emerald-400 p-3 rounded-full mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 font-mono">BUKTI BERHASIL DI-DUMP!</h2>
              <p className="text-slate-400 mb-8 text-sm">Ke infrastruktur aduan resmi mana nomor penipu siber ini harus lo laporkan?</p>

              <div className="grid gap-4 max-w-lg mx-auto text-left font-sans">
                <button onClick={() => handleReportSubmit(false)} className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700 p-4 rounded-xl transition-colors w-full">
                  <span className="block font-bold text-white">Share Massal di Sosial Media</span>
                  <span className="text-xs text-slate-400">Biar viral tanpa ada penutupan nomor resmi dari otoritas terkait.</span>
                </button>
                
                <button onClick={() => handleReportSubmit(true)} className="bg-slate-800/60 hover:bg-indigo-950/40 border border-slate-700 hover:border-indigo-500/50 p-4 rounded-xl transition-colors w-full">
                  <span className="block font-bold text-white flex items-center justify-between">
                    Portal Otoritas AduanNomor.id <ShieldCheck className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </span>
                  <span className="text-xs text-slate-400">Melaporkan nomor ke database aduan resmi bentukan Kominfo agar diblokir permanen.</span>
                </button>

                <button onClick={() => handleReportSubmit(false)} className="bg-slate-800/60 hover:bg-slate-800 border border-slate-700 p-4 rounded-xl transition-colors w-full">
                  <span className="block font-bold text-white">Abaikan & Hapus Chat</span>
                  <span className="text-xs text-slate-400">Mengamankan diri sendiri namun membiarkan penipu mencari korban lain.</span>
                </button>
              </div>
            </div>
          )}

          {reportStep === 3 && (
            <div className="text-center py-6">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block bg-emerald-500/20 text-emerald-400 p-4 rounded-full mb-6">
                <Send className="w-10 h-10" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2 font-mono">REPORT SECURED!</h2>
              <p className="text-slate-400 mb-6 text-sm">Tindakan tanggap lo berkontribusi menjaga keamanan ekosistem siber nasional.</p>
              
              <div className="inline-block bg-slate-950 border border-emerald-500/50 px-6 py-3 rounded-xl mb-8">
                <span className="text-emerald-400 font-bold font-mono text-sm md:text-base animate-pulse">+25 PTS (Anti-Scam Squad Bonus)</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center font-mono text-xs">
                <a 
                  href="https://aduannomor.id/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 px-6 py-3 rounded-xl font-bold transition-colors border border-slate-700"
                >
                  <ExternalLink className="w-4 h-4" /> KUNJUNGI ADUANNOMOR.ID
                </a>
                <button onClick={calculateAchievements} className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg">
                  LIHAT MISSION REPORT <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-12 relative flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <button onClick={() => setMode('home')} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-indigo-400 border border-indigo-500/30 rounded-lg backdrop-blur-sm transition-all">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-mono text-sm">ABORT MISSION</span>
        </button>
        <div className="flex gap-4">
          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-mono text-indigo-400">
            Misi Teruji: {visitedIndices.length} / {totalQuestionsToPlay}
          </div>
        </div>
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center">
        <div className="flex flex-col items-center mb-6 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-2 font-mono">
            <ShieldAlert className="text-rose-400" /> SPOT_THE_SCAM
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

        <div className="w-full bg-slate-800/40 border border-indigo-500/20 p-6 md:p-8 rounded-2xl mb-4 shadow-lg backdrop-blur-sm relative overflow-hidden flex flex-col items-start">
          {!isAnswered && (
            <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 15, ease: "linear" }} className={`absolute top-0 left-0 h-1 ${timeLeft <= 5 ? 'bg-rose-500' : 'bg-cyan-500'}`} />
          )}

          <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
            "{question.scenarioEn}"
          </p>

          <AnimatePresence>
            {showTranslation && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-slate-400 italic text-sm md:text-base mt-4 pt-4 border-t border-slate-700/50 w-full">
                ID: "{question.scenarioId}"
              </motion.p>
            )}
          </AnimatePresence>

          <button onClick={() => setShowTranslation(!showTranslation)} className="mt-6 px-4 py-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-lg text-xs font-mono flex items-center gap-2 hover:bg-indigo-500/20 transition-colors self-end">
            <Languages className="w-4 h-4" />
            {showTranslation ? 'Sembunyikan Terjemahan' : 'Terjemahkan (ID)'}
          </button>
        </div>

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
              <button key={index} onClick={() => handleSelect(index)} disabled={isAnswered} className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${btnClass}`}>
                <div className="flex flex-col gap-1 w-11/12">
                  <span className="text-base">{optionEn}</span>
                  <AnimatePresence>
                    {showTranslation && (
                      <motion.span initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs text-slate-400/80 italic mt-1">
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

        {isAnswered && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`w-full p-6 rounded-2xl mb-8 border relative ${isTimeOut ? 'bg-amber-500/10 border-amber-500/30' : selectedAnswer === question.correctAnswerIndex ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'}`}>
            {selectedAnswer === question.correctAnswerIndex && !isTimeOut && (
               <div className="absolute -top-4 right-6 bg-emerald-500 text-slate-900 font-bold px-3 py-1 rounded-full text-sm animate-bounce shadow-lg border-2 border-emerald-200">
                 +{pointsEarnedThisRound} PTS (Speed Bonus!)
               </div>
            )}
            <div className="flex items-start gap-3">
              <AlertCircle className={`w-6 h-6 shrink-0 mt-1 ${isTimeOut ? 'text-amber-500' : selectedAnswer === question.correctAnswerIndex ? 'text-emerald-500' : 'text-rose-500'}`} />
              <div className="flex flex-col gap-2 w-full">
                <h3 className={`text-lg font-bold ${isTimeOut ? 'text-amber-500' : selectedAnswer === question.correctAnswerIndex ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {isTimeOut ? "TIME'S UP!" : selectedAnswer === question.correctAnswerIndex ? "CORRECT ANALYSIS!" : "WARNING: ANALISIS CODES BREACHED!"}
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
            <button onClick={handleNext} className="w-full mt-6 flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg font-mono text-sm tracking-wide">
              {isLastQuestion ? 'PROSES EVALUASI & ADUAN' : 'NEXT CASE'} <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
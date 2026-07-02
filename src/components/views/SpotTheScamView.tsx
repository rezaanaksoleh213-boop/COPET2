import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameEngine } from '../../hooks/useGameEngine';
import { quizData } from '../../data/quizData';
import { 
  ShieldAlert, ArrowLeft, ChevronRight, Clock, AlertCircle, 
  CheckCircle2, XCircle, Languages, Trophy, ShieldCheck,
  Camera, FileImage, Send, ExternalLink, Activity, Mail, Smartphone
} from 'lucide-react';

const DIFFICULTY_LEVELS = ['Easy', 'Medium', 'Hard', 'Expert'];

// FITUR: Auditory Feedback (Tanpa file MP3, menggunakan Web Audio API)
const playSound = (type: 'correct' | 'wrong') => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  if (type === 'correct') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, ctx.currentTime); // Nada C5
    osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.1); // C6
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
  } else {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
  }
  
  osc.start();
  osc.stop(ctx.currentTime + 0.3);
};

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
  
  // States for Phase 2
  const [isReportingPhase, setIsReportingPhase] = useState(false);
  const [reportStep, setReportStep] = useState(1);
  const [evidenceClicked, setEvidenceClicked] = useState(false); 
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [newAchievements, setNewAchievements] = useState<string[]>([]); 

  const totalQuestionsToPlay = Math.min(15, quizData.length); 
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
      playSound('wrong');
      recordMistake(question.category || 'General');
    }
  }, [timeLeft, isAnswered, isQuizFinished, isReportingPhase]);

  const findNextQuestion = (targetDiffIndex: number, currentVisited: number[]) => {
    const targetDifficulty = DIFFICULTY_LEVELS[targetDiffIndex];
    let nextIdx = quizData.findIndex((q, idx) => !currentVisited.includes(idx) && q.difficulty === targetDifficulty);
    if (nextIdx === -1) nextIdx = quizData.findIndex((_, idx) => !currentVisited.includes(idx));
    
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
      playSound('correct');
      setCorrectAnswersCount(prev => prev + 1);
      const speedBonus = timeLeft * 5;
      const totalPoints = 10 + speedBonus;
      setPointsEarnedThisRound(totalPoints);
      addPoints(totalPoints);
      addQuizCorrectProgress(1);
      setCurrentDiffIndex(prev => Math.min(prev + 1, DIFFICULTY_LEVELS.length - 1));
    } else {
      playSound('wrong');
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
    if (isCorrectChannel) addPoints(25);
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
      default: return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    }
  };

  const renderScenarioVisual = (scenarioEn: string) => {
    const isEmail = scenarioEn.toLowerCase().includes('email');
    const isChat = scenarioEn.toLowerCase().includes('sms') || scenarioEn.toLowerCase().includes('whatsapp') || scenarioEn.toLowerCase().includes('chat');
    
    if (isEmail) {
      return (
        <div className="w-full bg-slate-900 border border-slate-700 rounded-lg overflow-hidden my-4 shadow-inner">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
            <Mail className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-mono text-slate-400">Incoming Mail</span>
          </div>
          <div className="p-4 bg-white text-slate-800 font-sans text-sm md:text-base leading-relaxed">
            {scenarioEn}
          </div>
        </div>
      );
    }
    
    if (isChat) {
      return (
        <div className="w-full max-w-sm mx-auto bg-slate-900 border-[6px] border-slate-800 rounded-3xl overflow-hidden my-4 shadow-inner flex flex-col relative h-[250px]">
          <div className="bg-emerald-600 px-4 py-3 flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">Unknown Sender</span>
          </div>
          <div className="flex-1 bg-[#efeae2] p-4 flex flex-col justify-center">
            <div className="bg-white text-slate-800 p-3 rounded-lg rounded-tl-none shadow-sm text-sm relative self-start max-w-[90%]">
              {scenarioEn}
              <span className="absolute bottom-1 right-2 text-[10px] text-slate-400">12:00</span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <p className="text-slate-200 text-lg md:text-xl leading-relaxed py-4 text-center font-medium">
        "{scenarioEn}"
      </p>
    );
  };

  if (isQuizFinished) {
    const weakestCategory = getWeakestCategory();
    const isPerfect = weakestCategory === "Aman (Secure)";

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900/80 backdrop-blur-md border border-teal-500/50 p-8 md:p-12 rounded-3xl w-full max-w-2xl text-center shadow-[0_0_50px_rgba(45,212,191,0.2)]"
        >
          <Activity className="w-20 h-20 text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-2 tracking-widest">CYBER DIAGNOSTIC REPORT</h2>
          <p className="text-slate-400 mb-8 font-mono">SCAM DETECTION PROFILER COMPLETE</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">{correctAnswersCount}/{totalQuestionsToPlay}</div>
              <div className="text-xs text-slate-500 font-mono tracking-wider">ACCURACY ACCUMULATED</div>
            </div>
            
            <div className={`p-6 rounded-2xl border flex flex-col items-center justify-center ${isPerfect ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-rose-950/20 border-rose-500/30'}`}>
              <div className="text-[10px] text-slate-500 font-mono mb-1 uppercase tracking-wider">AI Psychological Risk Profile:</div>
              {isPerfect ? (
                <div className="text-xl font-bold text-emerald-400 uppercase tracking-wide font-mono"> HIGHLY SECURE</div>
              ) : (
                <div className="text-xl font-bold text-rose-400 uppercase tracking-wide font-mono">
                  {weakestCategory}
                </div>
              )}
            </div>
          </div>

          {newAchievements.length > 0 && (
            <div className="mb-8 text-left bg-slate-950/80 p-5 rounded-xl border border-orange-500/30 shadow-inner">
              <h3 className="text-orange-400 font-mono text-xs mb-3 uppercase tracking-wider flex items-center gap-2">
                <Trophy className="w-4 h-4" /> Badges Unlocked This Session:
              </h3>
              <div className="flex flex-wrap gap-2">
                {newAchievements.map(ach => (
                  <span key={ach} className="bg-gradient-to-r from-orange-500/20 to-rose-500/20 border border-orange-500/40 text-orange-300 text-xs px-3 py-1.5 rounded font-mono font-bold shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                    {ach}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button onClick={() => setMode('home')} className="w-full bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg text-lg tracking-wide font-mono">
            RETURN TO DASHBOARD
          </button>
        </motion.div>
      </div>
    );
  }

  const isStressMode = timeLeft <= 5 && !isAnswered && !isTimeOut;

  if (isReportingPhase) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 relative">
        <div className="w-full max-w-3xl flex justify-between items-center mb-6">
          <div className="text-orange-500 font-mono text-sm font-bold flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> SCAM_REPORTER_STATION
          </div>
          <div className="bg-slate-900 border border-slate-800 px-3 py-1 rounded text-xs font-mono text-slate-500">
            Step: {reportStep}/3
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900/80 border border-teal-500/30 p-6 md:p-8 rounded-3xl w-full max-w-3xl shadow-2xl relative overflow-hidden">
          {reportStep === 1 && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2 font-mono">AMBIL BUKTI BERSALAH</h2>
              <p className="text-slate-400 mb-6 text-sm">Simulasi: Sentuh (klik) file lampiran berbahaya di bawah ini untuk menyorotinya sebagai barang bukti, lalu ambil screenshot!</p>
              <div className="bg-[#0b141a] border border-slate-800 rounded-2xl p-4 max-w-sm mx-auto text-left relative overflow-hidden shadow-2xl mb-8">
                <div className="bg-[#202c33] -m-4 mb-4 p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-xs font-bold text-white">J&T</div>
                  <div className="text-white text-sm font-bold">Kurir J&T Express</div>
                </div>
                <div className="bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none text-sm w-[85%] mb-2">
                  Permisi pak/ibu.. benar dgn nama pemilik no ini? Ada paket..
                </div>
                <div className={`bg-[#202c33] text-white p-3 rounded-lg rounded-tl-none text-sm w-[85%] border-2 transition-all cursor-pointer ${evidenceClicked ? 'border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]' : 'border-transparent hover:border-slate-500'}`} onClick={() => setEvidenceClicked(true)}>
                  <div className="flex items-center gap-2 mb-2 bg-slate-800 p-2 rounded">
                    <FileImage className={`w-5 h-5 ${evidenceClicked ? 'text-rose-500' : 'text-slate-400'}`} />
                    <span className={`font-mono text-xs ${evidenceClicked ? 'text-rose-300' : 'text-slate-300'}`}>Lihat_Foto_Paket.apk</span>
                  </div>
                  Silahkan di cek detail foto paketnya disni ya agar jelas
                </div>
                {!evidenceClicked && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/90 text-orange-400 px-4 py-2 text-xs font-mono rounded-full animate-pulse border border-orange-500/50">
                    KLIK FILE APK UNTUK MENYOROT!
                  </div>
                )}
              </div>
              <button onClick={() => setReportStep(2)} disabled={!evidenceClicked} className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all font-mono text-sm ${evidenceClicked ? 'bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]' : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'}`}>
                <Camera className="w-5 h-5 group-active:scale-90 transition-transform" /> AMBIL SCREENSHOT BUKTI
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
                <button onClick={() => handleReportSubmit(true)} className="bg-slate-800/60 hover:bg-teal-950/40 border border-slate-700 hover:border-teal-500/50 p-4 rounded-xl transition-colors w-full">
                  <span className="block font-bold text-white flex items-center justify-between">
                    Portal Otoritas AduanNomor.id <ShieldCheck className="w-4 h-4 text-orange-500 animate-pulse" />
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
              <div className="inline-block bg-slate-950 border border-emerald-500/50 px-6 py-3 rounded-xl mb-8">
                <span className="text-emerald-400 font-bold font-mono text-sm md:text-base animate-pulse">+25 PTS (Anti-Scam Squad Bonus)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center font-mono text-xs">
                <a href="https://aduannomor.id/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-orange-400 px-6 py-3 rounded-xl font-bold transition-colors border border-slate-700">
                  <ExternalLink className="w-4 h-4" /> KUNJUNGI ADUANNOMOR.ID
                </a>
                <button onClick={calculateAchievements} className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg">
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
      {/* SEKSI HEADER (PERBAIKAN FITUR: Menambahkan penunjuk progress kuis di sini) */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <button onClick={() => setMode('home')} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-teal-400 border border-teal-500/30 rounded-lg backdrop-blur-sm transition-all">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-mono text-sm">ABORT MISSION</span>
        </button>
        {/* FITUR PROGRESS DIKEMBALIKAN KE LAYAR */}
        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-mono text-teal-400">
          Misi Teruji: {visitedIndices.length} / {totalQuestionsToPlay}
        </div>
      </div>

      <motion.div 
        animate={isStressMode ? { x: [-3, 3, -3, 3, 0] } : {}}
        transition={{ repeat: Infinity, duration: 0.4 }}
        className={`w-full max-w-3xl flex flex-col items-center transition-all duration-300 ${isStressMode ? 'drop-shadow-[0_0_20px_rgba(244,63,94,0.4)]' : ''}`}
      >
        <div className="flex flex-col items-center mb-6 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-2 font-mono">
            <ShieldAlert className="text-rose-400" /> SPOT_THE_SCAM
          </h2>
          
          <div className={`flex items-center justify-between w-full p-4 rounded-xl border transition-colors duration-300 ${isStressMode ? 'bg-rose-950/40 border-rose-500/50' : 'bg-slate-900/80 border-slate-700/50'}`}>
            <span className={`px-3 py-1 rounded-full text-xs font-mono border ${getDifficultyColor(question.difficulty)}`}>
              THREAT LEVEL: {question.difficulty.toUpperCase()}
            </span>
            <div className={`flex items-center gap-2 font-mono text-lg font-bold ${isStressMode ? 'text-rose-500 animate-pulse' : 'text-orange-500'}`}>
              <Clock className="w-5 h-5" />
              00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
            </div>
          </div>
        </div>

        {/* MOCKUP RENDERER */}
        <div className="w-full mb-4 relative flex flex-col items-center justify-center">
          {!isAnswered && (
            <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 15, ease: "linear" }} className={`absolute -top-2 left-0 h-1 z-10 rounded-full ${timeLeft <= 5 ? 'bg-rose-500' : 'bg-orange-500'}`} />
          )}
          
          {renderScenarioVisual(question.scenarioEn)}
          
          <AnimatePresence>
            {showTranslation && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="w-full text-slate-400 italic text-sm md:text-base mt-2 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                Terjemahan: "{question.scenarioId}"
              </motion.div>
            )}
          </AnimatePresence>

          <button onClick={() => setShowTranslation(!showTranslation)} className="mt-4 px-4 py-2 bg-teal-500/10 text-teal-400 border border-teal-500/30 rounded-lg text-xs font-mono flex items-center gap-2 hover:bg-teal-500/20 transition-colors self-end z-10">
            <Languages className="w-4 h-4" /> {showTranslation ? 'Sembunyikan Terjemahan' : 'Terjemahkan (ID)'}
          </button>
        </div>

        <div className="w-full flex flex-col gap-3 mb-8">
          {question.optionsEn.map((optionEn, index) => {
            let btnClass = "bg-slate-900 border-slate-700 text-slate-300 hover:border-orange-500/50 hover:bg-slate-800";
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

        {/* FEEDBACK SLIDE-UP ANIMATION */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className={`w-full p-6 rounded-2xl mb-8 border relative ${isTimeOut ? 'bg-amber-500/10 border-amber-500/30' : selectedAnswer === question.correctAnswerIndex ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-rose-500/10 border-rose-500/30'}`}>
              {selectedAnswer === question.correctAnswerIndex && !isTimeOut && (
                <div className="absolute -top-3 right-6 bg-emerald-500 text-slate-950 font-mono font-bold px-3 py-1 rounded-full text-xs animate-bounce shadow-md">
                  +{pointsEarnedThisRound} PTS (Speed Bonus!)
                </div>
              )}
              <div className="flex items-start gap-3">
                <AlertCircle className={`w-6 h-6 shrink-0 mt-1 ${isTimeOut ? 'text-amber-500' : selectedAnswer === question.correctAnswerIndex ? 'text-emerald-500' : 'text-rose-500'}`} />
                <div className="flex flex-col gap-2 w-full">
                  <h3 className={`text-lg font-bold ${isTimeOut ? 'text-amber-500' : selectedAnswer === question.correctAnswerIndex ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {isTimeOut ? "TIME'S UP!" : selectedAnswer === question.correctAnswerIndex ? "CORRECT ANALYSIS!" : "WARNING: BREACH DETECTED!"}
                  </h3>
                  <p className="text-slate-200 leading-relaxed text-sm md:text-base">{question.explanationEn}</p>
                </div>
              </div>
              <button onClick={handleNext} className="w-full mt-6 flex justify-center items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg font-mono text-sm tracking-wide">
                {isLastQuestion ? 'PROSES EVALUASI & ADUAN' : 'NEXT CASE'} <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

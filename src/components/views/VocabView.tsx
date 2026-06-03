import { useState } from 'react';
import { motion } from 'framer-motion';
import { vocabulary } from '../../data/vocabulary'; // Pastikan path sesuai
import { useGameEngine } from '../../hooks/useGameEngine';
import { BookOpen, ChevronRight, ChevronLeft, Search, ArrowLeft, AlertTriangle } from 'lucide-react';

export function VocabView() {
  const { setMode } = useGameEngine();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const term = vocabulary[currentIndex];
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === vocabulary.length - 1;

  const handleNext = () => {
    if (!isLastItem) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 200);
    } else {
      setMode('home');
    }
  };

  const handlePrev = () => {
    if (!isFirstItem) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 200);
    }
  };

  // Fungsi sakti dari A.B.E buat nandain Language Cue otomatis (Versi TypeScript Anti Error)
  const highlightCue = (text: string, cue: string) => {
    if (!text) return "Contoh bahasa Inggris belum ada, Jott. Update database lo!";
    if (!cue) return text;

    // Pecah kalimat berdasarkan cue, trus bungkus cue pake span merah
    const parts = text.split(new RegExp(`(${cue})`, 'gi'));
    return parts.map((part: string, i: number) => 
      part.toLowerCase() === cue.toLowerCase() ? (
        <span key={i} className="text-rose-400 font-bold bg-rose-500/20 px-1.5 py-0.5 rounded border border-rose-500/30 animate-pulse">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative flex flex-col items-center">
      
      {/* 1. HEADER & TOMBOL BACK */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <button
          onClick={() => setMode('home')}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-indigo-400 border border-indigo-500/30 rounded-lg backdrop-blur-sm transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-mono text-sm">MENU UTAMA</span>
        </button>

        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-mono text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
          {currentIndex + 1} / {vocabulary.length}
        </div>
      </div>

      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-1 flex justify-center items-center gap-2">
            <BookOpen className="text-indigo-400" /> Vocab Database
          </h2>
          <p className="text-slate-400 text-sm">Review terminology and concepts.</p>
        </div>

        {/* 2. AREA KARTU KOSAKATA (FLIP CARD) */}
        <div className="w-full mb-10" style={{ perspective: 1200 }}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[450px]"
          >
            <motion.div
              className="w-full h-full relative cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => setIsFlipped(!isFlipped)}
              style={{ transformStyle: "preserve-3d" }} 
            >
              {/* SISI DEPAN */}
              <div 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_25px_rgba(34,211,238,0.1)] flex flex-col items-center justify-center overflow-hidden hover:border-cyan-400/50 transition-colors duration-300" 
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-cyan-500 opacity-50"></div>
                
                <span className="px-4 py-1.5 bg-slate-800/80 text-cyan-400 rounded-full text-xs font-mono mb-8 border border-cyan-500/30">
                  {term.category || "DATABASE"}
                </span>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-wide text-center">
                  {term.word}
                </h3>
                
                <div className="flex items-center gap-2 text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-lg font-mono text-sm animate-pulse border border-cyan-500/20">
                  <Search className="w-4 h-4" />
                  Tap to Decrypt
                </div>
              </div>

              {/* SISI BELAKANG */}
              <div 
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md border border-indigo-500/40 rounded-3xl p-6 md:p-8 shadow-[0_0_35px_rgba(99,102,241,0.2)] flex flex-col justify-between overflow-hidden transition-colors duration-300" 
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 opacity-50"></div>
                
                <div className="flex flex-col items-center mt-2">
                  <h4 className="text-xs font-mono text-indigo-400 mb-2 uppercase tracking-wider text-center">Decrypted Meaning</h4>
                  <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-4 text-center">
                    {term.indonesianMeaning}
                  </p>
                </div>
                
                <div className="flex flex-col gap-3 w-full mt-auto">
                  {/* CONTOH BAHASA INGGRIS (DENGAN HIGHLIGHT) */}
                  <div className="bg-slate-950/80 p-4 rounded-xl border border-rose-500/30">
                    <span className="text-[10px] md:text-xs font-mono text-rose-400 uppercase mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> Scam Drill (English):
                    </span>
                    <p className="text-sm md:text-base text-slate-300 italic leading-relaxed">
                      "{highlightCue(term.englishExample, term.languageCue)}"
                    </p>
                  </div>

                  {/* CONTOH BAHASA INDONESIA */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-700/50">
                    <span className="text-[10px] md:text-xs font-mono text-slate-400 uppercase block mb-1">
                      Konteks Kasus (ID):
                    </span>
                    <p className="text-xs md:text-sm text-slate-400 italic">
                      "{term.indonesianExample}"
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 3. KONTROL NAVIGASI */}
        <div className="flex gap-4 w-full justify-center">
          <button
            onClick={handlePrev}
            disabled={isFirstItem}
            className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
              isFirstItem 
                ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-800' 
                : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-600 shadow-md'
            }`}
          >
            <ChevronLeft className="w-5 h-5" /> Prev
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)]"
          >
            {isLastItem ? 'Selesai (Menu)' : 'Next Term'} <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
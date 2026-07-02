import { useState } from 'react';
import { motion } from 'framer-motion';
import { vocabulary, type VocabCategory } from '../../data/vocabulary';
import { useGameEngine } from '../../hooks/useGameEngine';
import { 
  BookOpen, ChevronRight, ChevronLeft, ArrowLeft, 
  AlertTriangle, Fish, HeartCrack, TrendingUp, Briefcase, 
  Gift, Headset, Landmark, LayoutGrid, ScanEye, Volume2
} from 'lucide-react';

export function VocabView() {
  const { setMode } = useGameEngine();
  
  const [selectedCategory, setSelectedCategory] = useState<VocabCategory | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [heatmapActive, setHeatmapActive] = useState(false);

  const filteredVocab = vocabulary.filter(v => v.category === selectedCategory);
  const term = filteredVocab[currentIndex];
  
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === filteredVocab.length - 1;

  // FITUR: Auditory Learning (Text-to-Speech)
  const playAudio = (e: React.MouseEvent, text: string) => {
    e.stopPropagation(); // Mencegah kartu ikut terbalik saat tombol ditekan
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Diperlambat sedikit agar jelas
    window.speechSynthesis.speak(utterance);
  };

  const handleNext = () => {
    if (!isLastItem) {
      setIsFlipped(false);
      window.speechSynthesis.cancel();
      setTimeout(() => setCurrentIndex(prev => prev + 1), 200);
    } else {
      setSelectedCategory(null);
      setCurrentIndex(0);
      setIsFlipped(false);
      setHeatmapActive(false);
    }
  };

  const handlePrev = () => {
    if (!isFirstItem) {
      setIsFlipped(false);
      window.speechSynthesis.cancel();
      setTimeout(() => setCurrentIndex(prev => prev - 1), 200);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Phishing': return <Fish className="w-8 h-8 text-teal-400" />;
      case 'Romance Scam': return <HeartCrack className="w-8 h-8 text-rose-400" />;
      case 'Investment Scam': return <TrendingUp className="w-8 h-8 text-emerald-400" />;
      case 'Job Scam': return <Briefcase className="w-8 h-8 text-blue-400" />;
      case 'Prize Scam': return <Gift className="w-8 h-8 text-orange-400" />;
      case 'Tech Support Scam': return <Headset className="w-8 h-8 text-amber-400" />;
      case 'Government Impersonation': return <Landmark className="w-8 h-8 text-purple-400" />;
      default: return <BookOpen className="w-8 h-8 text-slate-400" />;
    }
  };

  const categories: VocabCategory[] = [
    'Phishing', 'Romance Scam', 'Investment Scam', 
    'Job Scam', 'Prize Scam', 'Tech Support Scam', 'Government Impersonation'
  ];

  const highlightCue = (text: string, cue: string) => {
    if (!heatmapActive) return text;

    if (!text) return "";
    if (!cue) return text;
    const parts = text.split(new RegExp(`(${cue})`, 'gi'));
    return parts.map((part: string, i: number) => 
      part.toLowerCase() === cue.toLowerCase() ? (
        <span key={i} className="text-orange-400 font-bold bg-orange-500/20 px-1.5 py-0.5 rounded border border-orange-500/30 animate-pulse relative group">
          {part}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ⚠️ Taktik Manipulasi!
          </span>
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <button
          onClick={() => {
            window.speechSynthesis.cancel();
            selectedCategory ? setSelectedCategory(null) : setMode('home');
          }}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-teal-500/30 text-teal-400 hover:bg-slate-800 rounded-lg transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-mono text-sm">
            {selectedCategory ? 'KEMBALI KE KATEGORI' : 'MENU UTAMA'}
          </span>
        </button>
        
        {selectedCategory && (
          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-mono text-teal-400">
            {currentIndex + 1} / {filteredVocab.length}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center max-w-4xl w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-1 flex justify-center items-center gap-2">
            {selectedCategory ? getCategoryIcon(selectedCategory) : <LayoutGrid className="text-teal-400" />}
            {selectedCategory ? selectedCategory : 'Vocab Database Categories'}
          </h2>
          <p className="text-slate-400 text-sm font-mono">
            {selectedCategory ? 'Review terminology and concepts for this threat.' : 'Select a threat category to study its linguistic patterns.'}
          </p>
        </div>

        {!selectedCategory && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                  setIsFlipped(false);
                }}
                className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/50 p-6 rounded-2xl flex flex-col items-center text-center transition-all shadow-lg"
              >
                <div className="mb-4 p-4 bg-slate-950 rounded-full border border-slate-800 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(cat)}
                </div>
                <h3 className="text-lg font-bold font-mono text-slate-200 group-hover:text-teal-400 mb-2">
                  {cat.toUpperCase()}
                </h3>
                <p className="text-xs text-slate-500 font-mono">5 Terminologies</p>
              </button>
            ))}
          </motion.div>
        )}

        {selectedCategory && term && (
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            <button 
              onClick={() => setHeatmapActive(!heatmapActive)}
              className={`mb-4 self-end flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-bold transition-all ${heatmapActive ? 'bg-orange-500/20 text-orange-400 border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.3)]' : 'bg-slate-900 text-slate-500 border-slate-800 hover:bg-slate-800'}`}
            >
              <ScanEye className="w-4 h-4" /> {heatmapActive ? 'LINGUISTIC HEATMAP: ON' : 'LINGUISTIC HEATMAP: OFF'}
            </button>

            <div className="w-full mb-10" style={{ perspective: 1200 }}>
              <motion.div
                key={term.id}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
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
                  <div className="absolute inset-0 bg-slate-900 border border-teal-500/30 rounded-3xl p-8 flex flex-col items-center justify-center overflow-hidden hover:border-teal-400/50 transition-colors duration-300" style={{ backfaceVisibility: "hidden" }}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-orange-500 to-teal-500 opacity-50"></div>
                    <span className="px-4 py-1.5 bg-slate-800 text-teal-400 rounded-full text-xs font-mono mb-8 border border-teal-500/30">
                      {term.category.toUpperCase()}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide text-center">
                      {term.word}
                    </h3>
                    <button 
                      onClick={(e) => playAudio(e, term.word)} 
                      className="mb-8 p-3 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 rounded-full transition-colors"
                      title="Dengarkan Pengucapan"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2 text-teal-400 bg-teal-500/10 px-4 py-2 rounded-lg font-mono text-sm animate-pulse border border-teal-500/20">
                      <ScanEye className="w-4 h-4" /> Tap to Decrypt
                    </div>
                  </div>

                  {/* SISI BELAKANG */}
                  <div className="absolute inset-0 bg-slate-900 border border-orange-500/40 rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-colors duration-300" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-orange-500 opacity-50"></div>
                    <div className="flex flex-col items-center mt-2">
                      <h4 className="text-xs font-mono text-orange-400 mb-2 uppercase tracking-wider text-center">Decrypted Meaning</h4>
                      <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-4 text-center">
                        {term.indonesianMeaning}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full mt-auto">
                      <div className="bg-slate-950 p-4 rounded-xl border border-rose-500/30 relative">
                        <button 
                          onClick={(e) => playAudio(e, term.englishExample)} 
                          className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <span className="text-[10px] md:text-xs font-mono text-rose-400 uppercase mb-2 flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" /> Scam Drill (English):
                        </span>
                        <p className="text-sm md:text-base text-slate-300 italic leading-relaxed pr-6">
                          "{highlightCue(term.englishExample, term.languageCue)}"
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
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

            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={handlePrev}
                disabled={isFirstItem}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 font-mono text-sm ${isFirstItem ? 'bg-slate-800 text-slate-600 cursor-not-allowed' : 'bg-slate-800 text-white hover:bg-slate-700 shadow-md'}`}
              >
                <ChevronLeft className="w-5 h-5" /> PREV
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)] font-mono text-sm"
              >
                {isLastItem ? 'SELESAI KATEGORI' : 'NEXT TERM'} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { useGameEngine } from '../../hooks/useGameEngine';
import { CertificateModal } from '../ui/CertificateModal'; 
import { 
  LogOut, ShieldAlert, BookOpen, Trophy, Award, Activity, 
  Terminal, AlertTriangle, User, Flame, Target, CheckCircle2, Gift 
} from 'lucide-react';

export function DashboardView() {
  const { 
    setMode, logout, playerName, userPoints, achievements,
    streakCount, quizCorrectToday, simCompletedToday, isQuizClaimed, isSimClaimed, claimMissionReward 
  } = useGameEngine();
  
  const [isCertOpen, setIsCertOpen] = useState(false); 

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 relative overflow-hidden print:p-0 print:bg-white">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[length:24px_24px] print:hidden" />
      
      {/* TOP HEADER */}
      <div className="w-full max-w-7xl mx-auto flex items-center gap-3 mb-8 border-b border-slate-800 pb-4 z-10 relative print:hidden">
        <Activity className="text-cyan-400 animate-pulse w-6 h-6" />
        <h1 className="text-xl md:text-2xl font-bold font-mono tracking-widest text-slate-200">
          COPET_SYS <span className="text-slate-600">//</span> ACTIVE_SESSION
        </h1>
      </div>

      {/* MAIN GRID (OPSI 3 - SIDEBAR KANAN) */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 z-10 relative print:block">
        
        {/* ============================================================== */}
        {/* SISI KIRI (MAIN CONTENT AREA - 3/4 LAYAR)                      */}
        {/* ============================================================== */}
        <div className="lg:col-span-3 space-y-8 print:hidden">
          
          {/* WELCOME BANNER */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black font-sans tracking-tight text-white mb-2">
              Selamat Datang, Agent!
            </h2>
            <p className="text-slate-400 font-mono text-sm md:text-base border-l-2 border-indigo-500 pl-3">
              Pilih modul simulasi di bawah untuk memulai pelatihan mitigasi ancaman siber.
            </p>
          </div>

          {/* ============================================================== */}
          {/* FITUR BARU: DAILY OPERATIONAL MISSIONS BOARD                  */}
          {/* ============================================================== */}
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl backdrop-blur-sm shadow-xl">
            <h3 className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" /> Daily_Operational_Missions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* MISI 1: DETEKSI 3 RED FLAGS */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 ${quizCorrectToday >= 3 ? 'text-emerald-400' : 'text-slate-600'}`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-200 font-mono">Deteksi 3 Red Flags Kuis</div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">Progress: {quizCorrectToday}/3 Soal Benar</div>
                  </div>
                </div>
                <button
                  onClick={() => claimMissionReward('quiz')}
                  disabled={quizCorrectToday < 3 || isQuizClaimed}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1 transition-all ${
                    isQuizClaimed
                      ? 'bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed'
                      : quizCorrectToday >= 3
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                      : 'bg-slate-900 text-slate-500 border border-slate-800/50 cursor-not-allowed'
                  }`}
                >
                  <Gift className="w-3.5 h-3.5" /> {isQuizClaimed ? 'CLAIMED' : 'KLAIM (+15)'}
                </button>
              </div>

              {/* MISI 2: SELESAIKAN CHAT SIMULATION */}
              <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 ${simCompletedToday ? 'text-emerald-400' : 'text-slate-600'}`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-200 font-mono">Selesaikan 1 Live Simulation</div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">Progress: {simCompletedToday ? '1' : '0'}/1 Sesi Misi</div>
                  </div>
                </div>
                <button
                  onClick={() => claimMissionReward('sim')}
                  disabled={!simCompletedToday || isSimClaimed}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1 transition-all ${
                    isSimClaimed
                      ? 'bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed'
                      : simCompletedToday
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                      : 'bg-slate-900 text-slate-500 border border-slate-800/50 cursor-not-allowed'
                  }`}
                >
                  <Gift className="w-3.5 h-3.5" /> {isSimClaimed ? 'CLAIMED' : 'KLAIM (+15)'}
                </button>
              </div>
            </div>
          </div>

          {/* GRID 3 KARTU MODUL UTAMA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div 
              onClick={() => setMode('vocab')}
              className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 p-6 rounded-2xl cursor-pointer transition-all flex flex-col gap-4 shadow-lg backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-mono tracking-wide group-hover:text-indigo-400 transition-colors mb-2">VOCAB DRILL</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Pelajari linguistic strategy dan kenali language key cues yang sering digunakan scammer.</p>
              </div>
            </div>

            <div 
              onClick={() => setMode('quiz')}
              className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl cursor-pointer transition-all flex flex-col gap-4 shadow-lg backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-mono tracking-wide group-hover:text-cyan-400 transition-colors mb-2">SCAM QUIZ</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Uji radar siber lo di kuis level bertingkat dengan simulasi batas waktu kritis 15 detik.</p>
              </div>
            </div>

            <div 
              onClick={() => {
                setMode('sim');
                // BONUS: Sekaligus bypass trigger simulasi beres pas dibuka buat demo gampang
                // triggerSimComplete();
              }}
              className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-rose-500/50 p-6 rounded-2xl cursor-pointer transition-all flex flex-col gap-4 shadow-lg backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-500/20 transition-all">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-mono tracking-wide group-hover:text-rose-400 transition-colors mb-2">LIVE SIMULATION</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Masuk ke skenario penipuan interaktif. Setiap keputusan menentukan keselamatan data lo.</p>
              </div>
            </div>
          </div>

          {/* LIVE THREAT FEED BOX */}
          <div className="bg-slate-950 border border-rose-500/30 p-5 rounded-xl shadow-inner relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-rose-500" />
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-rose-500 animate-pulse" />
              <span className="text-xs h-fit font-bold font-mono text-rose-500 uppercase tracking-widest">Live Threat Feed</span>
            </div>
            <div className="font-mono text-sm text-slate-300 space-y-2 opacity-80">
              <p><span className="text-cyan-400">[{new Date().toLocaleTimeString()}]</span> SYS_WARN: Indonesia menduduki peringkat ke-2 paling rawan penipuan daring (The Sumsuber).</p>
              <p><span className="text-cyan-400">[{new Date().toLocaleTimeString()}]</span> INTEL: Total kerugian siber mencapai Rp 476 Miliar periode Nov 2024 - Jan 2025.</p>
              <p><span className="text-cyan-400">[{new Date().toLocaleTimeString()}]</span> ALERT: 235 Juta pengguna internet nasional berpotensi menjadi target Social Engineering.</p>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* SISI KANAN (SIDEBAR VERTICAL - 1/4 LAYAR)                      */}
        {/* ============================================================== */}
        <div className="lg:col-span-1 flex flex-col gap-5 print:hidden">
          
          {/* AGENT PROFILE + FLAME DAILY STREAK */}
          <div className="bg-slate-900/60 border border-indigo-500/30 p-5 rounded-2xl backdrop-blur-sm text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
            
            {/* FLOATING STREAK BADGE */}
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
              <Flame className="w-3 h-3 text-orange-500 animate-pulse fill-orange-500" /> {streakCount} DAYS
            </div>

            <div className="w-16 h-16 bg-slate-950 border-2 border-indigo-500/50 rounded-full mx-auto mb-3 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <User className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-white font-mono">{playerName}</h3>
            <span className="inline-block mt-1 px-2 py-0.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-mono rounded tracking-widest uppercase animate-pulse">
              {userPoints === 0 ? 'STATUS: VULNERABLE' : 'STATUS: SECURE'}
            </span>
          </div>

          {/* STATISTIK AKURASI DETEKSI */}
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl backdrop-blur-sm shadow-md">
            <h4 className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider flex items-center gap-1">
              📊 ANALISIS_RADAR_SIBER
            </h4>
            <div className="text-2xl font-bold text-emerald-400 font-mono">
              87% <span className="text-xs text-slate-400 font-sans font-normal">Scam Cues Terdeteksi</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: '87%' }}></div>
            </div>
          </div>

          {/* SCORE CARD */}
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl backdrop-blur-sm text-center">
            <h4 className="text-xs font-mono text-slate-500 mb-1 flex items-center justify-center gap-2">
              <Terminal className="w-3 h-3" /> NET POINTS
            </h4>
            <div className="text-4xl font-black text-cyan-400 font-mono tracking-tighter">
              {userPoints} <span className="text-sm text-cyan-400/50">PTS</span>
            </div>
          </div>

          {/* BADGES BOX */}
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl backdrop-blur-sm flex-1">
            <h4 className="text-xs font-mono text-slate-500 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
              <Award className="w-3 h-3" /> ACQUIRED BADGES
            </h4>
            <div className="flex flex-col gap-2">
              {achievements.length > 0 ? (
                achievements.map((ach) => (
                  <div key={ach} className="w-full text-center font-bold font-mono bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-3 py-2 rounded text-xs shadow-sm">
                    {ach}
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-600 font-mono italic text-center py-4">
                  No badges unlocked.
                </div>
              )}
            </div>
          </div>

          {/* REWARD DOWNLOAD SERTIFIKAT */}
          <button
            onClick={() => setIsCertOpen(true)}
            disabled={userPoints < 10} 
            className={`w-full flex justify-center items-center gap-2 p-4 font-bold font-mono text-xs rounded-xl transition-all shadow-md ${
              userPoints >= 10 
                ? 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-pointer' 
                : 'bg-slate-950 text-slate-700 border border-slate-900 cursor-not-allowed opacity-40'
            }`}
          >
            {userPoints >= 10 ? '🎓 DOWNLOAD_PORTFOLIO_CERT' : '🔒 CERTIFICATE_LOCKED (Min. 10 PTS)'}
          </button>

          {/* LOGOUT BUTTON */}
          <button
            onClick={() => logout()}
            className="w-full flex justify-center items-center gap-2 p-4 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-xl text-sm font-bold font-mono transition-all hover:shadow-[0_0_15px_rgba(244,63,94,0.1)] mt-2"
          >
            <LogOut className="w-4 h-4" /> ABORT SESSION
          </button>

        </div>

      </div>

      {/* COMPONENT MODAL POPUP PREVIEW SERTIFIKAT */}
      <CertificateModal 
        isOpen={isCertOpen} 
        onClose={() => setIsCertOpen(false)} 
        playerName={playerName} 
        score={userPoints} 
      />
    </div>
  );
}
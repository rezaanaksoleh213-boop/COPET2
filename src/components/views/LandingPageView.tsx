import { useGameEngine } from '../../hooks/useGameEngine';
import { ShieldCheck, ArrowRight, ShieldAlert, Globe, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export function LandingPageView() {
  const { setMode } = useGameEngine();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Animasi Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[length:32px_32px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl text-center z-10"
      >
        <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 px-4 py-1.5 rounded-full text-xs font-mono mb-6 animate-pulse">
          <ShieldAlert className="w-4 h-4" /> EMERGENCY_PROTOCOL_INITIALIZED
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter leading-none">
          CYBER LITERACY <br /> 
          <span className="text-cyan-400">FOUNDATION</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 font-mono mb-8 max-w-2xl mx-auto leading-relaxed">
          Waktunya membekali diri dengan sistem COPET: Counter Penipuan Terintegrasi.
        </p>

        {/* FITUR BARU: BOX KASUS INDONESIA BAHASA INGGRIS */}
        <div className="bg-rose-950/20 border border-rose-500/30 p-5 md:p-6 rounded-2xl mb-10 text-left backdrop-blur-sm shadow-[0_0_30px_rgba(244,63,94,0.1)]">
          <h2 className="text-rose-400 font-mono text-sm md:text-base font-bold mb-3 flex items-center gap-2 uppercase">
            <Activity className="w-5 h-5" /> Threat Intel: Indonesia Region
          </h2>
          <p className="text-slate-300 font-mono text-sm leading-relaxed border-l-2 border-rose-500 pl-4">
            "Indonesia currently ranks 2nd globally among countries most vulnerable to online scams. Over 235 million internet users in the region face daily threats from advanced Social Engineering tactics, including APK phishing disguised as logistics couriers. Total financial losses in 2024 alone reached an estimated Rp 476 Billion."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-left">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 shadow-lg">
            <Globe className="text-cyan-400 mb-2" />
            <div className="text-xl font-bold font-mono">235 Million</div>
            <div className="text-xs text-slate-500 font-mono">Vulnerable Users</div>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 shadow-lg">
            <ShieldAlert className="text-rose-500 mb-2" />
            <div className="text-xl font-bold font-mono">Rp 476 Billion</div>
            <div className="text-xs text-slate-500 font-mono">Lost to Scammers</div>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 shadow-lg">
            <ShieldCheck className="text-emerald-500 mb-2" />
            <div className="text-xl font-bold font-mono">30+ Drills</div>
            <div className="text-xs text-slate-500 font-mono">Security Vocabs</div>
          </div>
        </div>

        <button
          onClick={() => setMode('login')}
          className="group bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] flex items-center gap-3 mx-auto"
        >
          MULAI OPERASI <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
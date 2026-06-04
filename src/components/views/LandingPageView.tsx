import { motion } from 'framer-motion';
import { useGameEngine } from '../../hooks/useGameEngine';
import { ShieldAlert, Terminal, ChevronRight, AlertTriangle } from 'lucide-react';

export function LandingPageView() {
  const { setMode } = useGameEngine();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      
      {/* Background Effects (Biar nuansa hacker / cyber-nya dapet) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[100px] mix-blend-screen absolute ml-40 mt-40"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl z-10 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full mb-8">
          <AlertTriangle className="w-4 h-4 text-rose-400 animate-pulse" />
          <span className="text-xs font-mono text-rose-400 tracking-widest uppercase">Classified Training Module</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest mb-4 text-center drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
          PROJECT: <span className="text-cyan-400">COPET</span>
        </h1>
        
        <p className="font-mono text-cyan-500/80 tracking-widest text-sm md:text-base mb-12 text-center">
          CYBER OPERATIONS & PHISHING EVASION TRAINING
        </p>

        {/* Kotak Penjelasan Konteks yang DETAIL */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-10 w-full mb-12 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-slate-700/50 pb-4">
            <ShieldAlert className="text-indigo-400" /> System Context & Objective
          </h2>
          
          <div className="space-y-5 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              Selamat datang di <strong className="text-cyan-400">Project COPET</strong>. Sistem ini dirancang sebagai simulator imersif untuk melatih kepekaan Anda terhadap ancaman *Social Engineering* dan kejahatan siber modern.
            </p>
            <p>
              Di dunia nyata, penjahat siber tidak lagi hanya meretas sistem, mereka meretas <strong className="text-rose-400">psikologi manusia</strong>. Mereka memanfaatkan manipulasi emosi—seperti menciptakan rasa panik (urgensi), menawarkan hadiah palsu, atau menyamar sebagai otoritas resmi (spoofing)—untuk mencuri kredensial dan data sensitif Anda.
            </p>
            <div className="bg-slate-950/80 p-4 rounded-lg border border-indigo-500/20 font-mono text-xs md:text-sm text-indigo-300">
              <span className="block text-cyan-500 mb-2">&gt; MISSION DIRECTIVES:</span>
              <ul className="list-disc list-inside space-y-1 ml-2 text-slate-400">
                <li>Pelajari anatomi penipuan di <span className="text-white">Vocab Database</span>.</li>
                <li>Uji insting Anda dalam <span className="text-white">Spot The Scam Quiz</span>.</li>
                <li>Bertahan hidup dari skenario serangan di <span className="text-white">Live Simulation</span>.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tombol Masuk */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMode('home')}
          className="group relative flex items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        >
          <Terminal className="w-6 h-6" />
          INITIALIZE SYSTEM
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          
          {/* Efek scanline di tombol */}
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="w-full h-[2px] bg-white/50 opacity-0 group-hover:opacity-100 group-hover:animate-scanline"></div>
          </div>
        </motion.button>
        
        <p className="mt-6 text-xs text-slate-500 font-mono">
          Press to acknowledge and enter the dashboard.
        </p>

      </motion.div>
    </div>
  );
}
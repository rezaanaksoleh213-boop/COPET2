import { useState } from 'react';
import { useGameEngine } from '../../hooks/useGameEngine';
import { User, ShieldAlert, KeyRound } from 'lucide-react';

export function LoginView() {
  const { loginAs } = useGameEngine();
  const [agentName, setAgentName] = useState('');
  const [testSession, setTestSession] = useState<'Pre-Test' | 'Post-Test'>('Pre-Test'); // <-- FITUR 4

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[length:24px_24px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-2xl text-center z-10">
        <div className="inline-block bg-slate-900/80 border border-orange-500/30 text-teal-400 font-mono text-xs px-4 py-1.5 rounded-md mb-6 tracking-widest uppercase shadow-[0_0_15px_rgba(45,212,191,0.15)] backdrop-blur-sm">
          LIDM 2026 • INOVASI PEMBELAJARAN DIGITAL
        </div>
        
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-widest font-mono drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">
            PROJECT: CO<span className="text-orange-500">PET</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-slate-400 font-mono tracking-wide mb-2">
          Cyber Operations & Phishing Evasion Training
        </p>
        <p className="text-xs text-rose-500 font-mono tracking-widest uppercase mb-12 animate-pulse">
          [ RESTRICTED ACCESS • IDENTIFY YOURSELF ]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl mx-auto">
          
          {/* KOTAK USER */}
          <div className="bg-slate-900/60 border-2 border-slate-800 hover:border-orange-500/50 p-6 rounded-2xl shadow-lg transition-all backdrop-blur-sm flex flex-col justify-between">
            <div className="flex flex-col items-center gap-3 mb-6">
              <User className="w-8 h-8 text-orange-400" />
              <div className="text-center">
                <span className="block font-bold text-lg font-mono tracking-wider text-slate-300">USER OPERATION</span>
                <span className="text-xs font-mono text-slate-500">Access Dashboard & Training</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Enter Agent Name..." 
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700 text-teal-300 px-10 py-3 rounded-xl font-mono text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* FITUR 4: Toggle Pre/Post Test */}
              <div className="flex gap-2">
                <button 
                  onClick={() => setTestSession('Pre-Test')}
                  className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg border transition-all ${testSession === 'Pre-Test' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' : 'bg-slate-900 text-slate-500 border-slate-700 hover:bg-slate-800'}`}
                >
                  PRE-TEST
                </button>
                <button 
                  onClick={() => setTestSession('Post-Test')}
                  className={`flex-1 py-2 text-xs font-mono font-bold rounded-lg border transition-all ${testSession === 'Post-Test' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' : 'bg-slate-900 text-slate-500 border-slate-700 hover:bg-slate-800'}`}
                >
                  POST-TEST
                </button>
              </div>

              <button
                onClick={() => loginAs('user', agentName, testSession)}
                className="w-full bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-xl font-bold font-mono tracking-wide transition-all active:scale-95 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
              >
                INITIALIZE
              </button>
            </div>
          </div>

          {/* KOTAK ADMIN */}
          <div className="bg-slate-900/60 border-2 border-slate-800 hover:border-teal-500/50 p-6 rounded-2xl shadow-lg transition-all backdrop-blur-sm flex flex-col justify-between">
            <div className="flex flex-col items-center gap-3 mb-6">
              <ShieldAlert className="w-8 h-8 text-teal-400 animate-pulse" />
              <div className="text-center">
                <span className="block font-bold text-lg font-mono tracking-wider text-slate-300">SYSTEM ADMIN</span>
                <span className="text-xs font-mono text-slate-500">Access Restricted Logger</span>
              </div>
            </div>
            <div className="flex flex-col justify-end h-full">
              <button
                onClick={() => loginAs('admin')}
                className="w-full bg-teal-950/60 hover:bg-teal-900/80 border border-teal-500/50 text-teal-400 py-3 rounded-xl font-bold font-mono tracking-wide transition-all active:scale-95 mt-auto"
              >
                AUTHORIZE OVERRIDE
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

import { useGameEngine } from '../../hooks/useGameEngine';
import { Shield, Trophy, Activity } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { userPoints, masteredCount, setMode } = useGameEngine();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500/30 relative">
      {/* Cyber Dot-Matrix Background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [bg-size-[24px_24px]"></div>
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setMode('home')}
          >
            <Shield className="w-6 h-6 text-orange-500 group-hover:text-orange-400 transition-colors" />
            <h1 className="text-xl font-bold tracking-wider text-white" title="Counter Penipuan Terintegrasi">
              CO<span className="text-orange-500">PET</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-6 font-mono text-sm">
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(52,211,153,0.1)]">
              <Trophy className="w-4 h-4" />
              <span>{userPoints} PTS</span>
            </div>
            <div className="flex items-center gap-2 text-teal-400 bg-teal-400/10 px-3 py-1.5 rounded-full border border-teal-500/20 shadow-[0_0_10px_rgba(45,212,191,0.1)]">
              <Activity className="w-4 h-4" />
              <span>{masteredCount} MASTERED</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

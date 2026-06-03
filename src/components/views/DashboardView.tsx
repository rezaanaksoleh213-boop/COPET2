import { useGameEngine, type GameMode } from '../../hooks/useGameEngine';
import { BookOpen, AlertTriangle, GitBranch, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function DashboardView() {
  const { setMode } = useGameEngine();

  const menuItems = [
    {
      id: 'vocab',
      title: 'Vocab Database',
      description: 'Review common scam terminology and linguistic clues.',
      icon: BookOpen,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      hover: 'hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]',
    },
    {
      id: 'quiz',
      title: 'Spot the Scam',
      description: 'Analyze realistic emails and messages to identify threats.',
      icon: AlertTriangle,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
      hover: 'hover:border-indigo-400/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]',
    },
    {
      id: 'sim',
      title: 'Live Simulation',
      description: 'Engage in an interactive branching scenario.',
      icon: GitBranch,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      hover: 'hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]',
    }
  ];

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">System Dashboard</h2>
          <p className="text-slate-400">Select an active training module to begin analysis.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-500 font-mono text-sm bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
          <Terminal className="w-4 h-4 text-cyan-500" />
          <span>Status: <span className="text-emerald-500">Online</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setMode(item.id as GameMode)}
            className={`cursor-pointer rounded-xl p-6 border bg-slate-900/40 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] ${item.border} ${item.hover}`}
          >
            <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mb-4`}>
              <item.icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <h3 className="text-xl font-semibold text-slate-200 mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative cyber elements */}
      <div className="pt-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="text-center mt-6">
          <p className="font-mono text-xs text-slate-600 uppercase tracking-widest">
            COPET Protocol v1.0.4 // Unauthorized access prohibited
          </p>
        </div>
      </div>
    </motion.div>
  );
}

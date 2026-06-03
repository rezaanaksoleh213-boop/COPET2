import { useState, useEffect } from 'react';
import { useGameEngine } from '../../hooks/useGameEngine';
import { getAllScores } from '../../services/dbService';
import type { UserScore } from '../../services/dbService'; // Type-only import untuk mematuhi verbatimModuleSyntax

export function AdminView() {
  const { setMode } = useGameEngine();
  const [scores, setScores] = useState<UserScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      setIsLoading(true);
      try {
        const data = await getAllScores();
        setScores(data);
      } catch (error) {
        console.error("Gagal mengambil data nilai:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className="min-h-screen p-8 text-white relative flex flex-col items-center">
      
      {/* TOMBOL KEMBALI KE HOME */}
      <button
        onClick={() => setMode('home')}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 rounded-lg transition-all cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-mono text-sm">KEMBALI</span>
      </button>

      <div className="text-center mt-12 mb-8">
        <h2 className="text-3xl font-bold font-mono tracking-wider text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          [ CORE DATABASE CONTROL ]
        </h2>
        <p className="text-slate-400 text-sm font-mono mt-2">LOG AKTIVITAS & SKOR KOGNITIF SISWA</p>
      </div>

      {/* TABEL DATA */}
      <div className="w-full max-w-4xl bg-slate-900/80 border border-slate-700 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
        {isLoading ? (
          <div className="p-12 text-center font-mono text-cyan-400 animate-pulse">
            LOADING DATA SYSTEMS...
          </div>
        ) : scores.length === 0 ? (
          <div className="p-12 text-center font-mono text-slate-500">
            NO STUDENT DATA RECORDED YET.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-mono text-sm">
              <thead>
                <tr className="bg-slate-800 border-b border-slate-700 text-cyan-400">
                  <th className="p-4">Nama Operator</th>
                  <th className="p-4">Skor Kognitif</th>
                  <th className="p-4">Waktu Selesai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {scores.map((score, index) => (
                  <tr key={index} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 text-slate-200 font-bold">{score.playerName}</td>
                    <td className="p-4 text-yellow-400 font-bold">{score.score} PTS</td>
                    <td className="p-4 text-slate-400 text-xs">
                      {score.timestamp ? new Date(score.timestamp).toLocaleString('id-ID') : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
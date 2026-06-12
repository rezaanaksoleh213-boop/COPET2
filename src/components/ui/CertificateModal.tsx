import { Award, ShieldCheck, Download, X } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  playerName: string;
  score: number;
}

export function CertificateModal({ isOpen, onClose, playerName, score }: CertificateModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.print(); // Memicu dialog cetak PDF bawaan browser
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md print:p-0 print:bg-white">
      
      {/* CONTAINER UTAMA MODAL */}
      <div className="w-full max-w-4xl bg-slate-900 border border-indigo-500/30 rounded-3xl p-6 shadow-[0_0_50px_rgba(99,102,241,0.3)] relative print:border-0 print:shadow-none print:rounded-none print:bg-white print:max-w-none print:w-full print:h-full">
        
        {/* BUTTON ACTION (Sembunyi saat dicetak) */}
        <div className="flex justify-between items-center mb-6 print:hidden">
          <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
            <Award className="w-4 h-4" /> Certificate_Preview_Engine
          </h3>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-mono text-xs font-bold transition-all"
            >
              <Download className="w-4 h-4" /> DOWNLOAD_PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-xl transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TEMPLATE SERTIFIKAT (STYLING KHUSUS UNTUK PRINT LUARAN A4)    */}
        {/* ============================================================== */}
        <div className="w-full aspect-[1.414/1] bg-slate-950 border-4 border-double border-indigo-500/40 rounded-2xl p-8 md:p-12 flex flex-col justify-between items-center relative overflow-hidden print:border-slate-900 print:text-slate-900 print:bg-white print:m-0 print:rounded-none">
          
          {/* Cyber Decorations Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[length:20px_20px] print:hidden" />
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl print:hidden" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl print:hidden" />

          {/* HEADER SERTIFIKAT */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-xs md:text-sm tracking-widest mb-3 print:text-slate-800">
              <ShieldCheck className="w-5 h-5 text-indigo-400 print:text-slate-800" /> PROJECT COPET // CYBER OPERATIONS
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-sans tracking-wider text-white print:text-slate-950">
              SERTIFIKAT KELULUSAN
            </h1>
            <p className="text-[10px] md:text-xs font-mono text-slate-500 tracking-widest uppercase mt-1">
              Certificate Number: CPT-{Date.now().toString().slice(-6)}
            </p>
          </div>

          {/* CONTENT ISI */}
          <div className="text-center my-4 space-y-4">
            <p className="text-sm md:text-base font-mono text-slate-400 print:text-slate-700">
              Dengan ini menyatakan kesuksesan otentikasi kepada peserta:
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 border-b border-slate-800 pb-2 inline-block px-8 print:text-slate-950 print:bg-none print:border-slate-400">
              {playerName}
            </h2>
            <p className="text-xs md:text-sm text-slate-400 font-sans max-w-xl mx-auto leading-relaxed print:text-slate-700">
              Telah menyelesaikan seluruh rangkaian modul pelatihan siber <span className="text-white font-bold print:text-slate-900">Counter Penipuan Terintegrasi (COPET) v2.0</span>, meliputi analisis strategi linguistik manipulasi, deteksi indikator kunci penipuan daring, serta pengujian taktik manipulasi psikologis dengan hasil skor evaluasi akhir:
            </p>
            <div className="inline-block bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-xl font-mono text-sm text-indigo-300 font-bold print:border-slate-400 print:text-slate-900">
              FINAL EVALUATION: {score} NET_POINTS
            </div>
          </div>

          {/* FOOTER TANDATANGAN */}
          <div className="w-full flex justify-between items-end border-t border-slate-900 pt-4 print:border-slate-300">
            <div className="text-left font-mono text-[10px] text-slate-500 print:text-slate-500">
              <p>Platform Status: VERIFIED</p>
              <p>Curriculum Framework: ADDIE METHOD</p>
            </div>
            <div className="text-center font-mono">
              <div className="text-xs text-slate-400 border-b border-slate-800 pb-1 px-4 mb-1 print:text-slate-800 print:border-slate-400">
                A.B.E Cyber Intelligence
              </div>
              <div className="text-[9px] text-slate-600 uppercase tracking-wider">
                Sistem Evaluator Otomatis
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
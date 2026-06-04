# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
---

## 🚀 Laporan Implementasi Fitur & Gamifikasi Sistem (Changelog Pengembang)

Aplikasi COPET telah dikembangkan menggunakan metode **ADDIE** (*Analysis, Design, Development, Implementation, Evaluation*) untuk membekali siswa SMA ke atas dalam menghadapi taktik manipulasi bahasa (*linguistic manipulation*) oleh scammer daring . Berikut adalah keselarasan fitur yang telah selesai diimplementasikan berdasarkan rancangan proposal:

### 📑 1. Advanced Vocabulary Drill & Linguistic Strategy (Tugas 3)
- **Implementasi Teori:** Berdasarkan 8 Strategi Linguistik Penipuan (Pradesi & Marlianingsih, 2025) pada proposal, fitur *Flashcard* pada `VocabView.tsx` telah diperluas.
- **Dynamic Highlights & Cues:** Sistem secara otomatis mendeteksi dan memberi tanda (*highlight* merah berkedip) pada bagian kalimat penipuan (*Language Key Cues*) untuk mengenali kategori:
  - *Urgency Cues* (contoh kata: *Urgent action required*, *Immediately*, *Locked in 24 hours*).
  - *Authority Cues* (contoh kata: *Verify your account*, *Official department*).
  - *Emotional Manipulation & Vague Promises* (contoh kata: *Congratulations*, *Guaranteed return*).

### 🛬 2. Classified Landing Page & Literasi Konteks (Tugas 4)
- **Contextual Awareness:** Berdasarkan data kerugian siber nasional, halaman utama (`LandingPageView.tsx`) menyajikan pengenalan operasional dan edukasi *Social Engineering* secara mendalam untuk meningkatkan kesadaran literasi digital pengguna sebelum masuk ke Dashboard.

### 📈 3. Level Kuis Bertingkat (Tugas 5)
- **Threat Levels:** Menu kuis (`SpotTheScamView.tsx`) dikembangkan secara dinamis dengan membagi studi kasus ke dalam tingkatan level adaptif: `EASY` ➔ `MEDIUM` ➔ `HARD` ➔ `EXPERT` untuk menyesuaikan kurikulum pengajaran interaktif.

### 🎮 4. Interaksi Gamifikasi Lanjutan (Tugas 6)
- **Speed & Accuracy Multiplier:** Menambahkan real-time countdown *Timer 15 Detik* untuk mereplikasi tekanan psikologis penipuan nyata. Skor akhir dikalkulasi melalui ketepatan jawaban dikombinasikan dengan bonus sisa waktu berpikir (**Poin Dasar 10 PTS + Sisa Waktu × 5 PTS**).
- **Badge Achievement System:** Menyediakan penghargaan piala virtual guna memicu motivasi belajar:
  - 🏅 *SCAM SURVIVOR*: Berhasil mendeteksi ancaman minimal 1 kali dengan benar.
  - 🏅 *SCAM HUNTER*: Menjawab seluruh kasus kuis dengan akurasi 100% sempurna.
  - 🏅 *ZERO TOLERANCE*: Penghargaan deteksi 100% benar dengan batas efisiensi waktu tertinggi.
- **Security Mastery Lock:** Mengunci akses modul level lanjutan (*Advanced Level Lock*) sebelum pengguna mencapai indikator *mastery* penuh pada database kosakata dan kuis dasar.

### ↩️ 5. Global Navigation & Core Usability (Tugas 2)
- **Tombol Kembali Utama:** Implementasi tombol navigasi "MENU UTAMA" yang konsisten di seluruh views untuk mempermudah pergerakan alur belajar pengguna sesuai standar UI/UX modern.

### 📊 6. Admin Panel Scoreboard (Tugas 1)
- **User Score Tracking:** Menambahkan panel khusus admin (`AdminView.tsx`) untuk memantau data hasil pengujian skor akhir pengguna, mempermudah evaluasi efektivitas platform (analisis *pre-test* & *post-test*) sesuai metodologi evaluasi produk.
---
export interface SimulationChoice {
  text: string;
  idText: string;
  nextNodeId: string | null;
  result: 'safe' | 'scam' | 'neutral';
  feedback?: string;
}

export interface SimulationNode {
  id: string;
  message: string;
  idMessage: string;
  sender: string;
  choices: SimulationChoice[];
}

export const simulationBranch: Record<string, SimulationNode> = {
  'start': {
    id: 'start',
    sender: 'Unknown Number (+44 7911 123456)',
    message: 'Hello! I am a recruiter from Global Tech. We found your profile and would like to offer you a remote part-time job. You can earn $200-$500 a day just by rating products online. Are you interested?',
    idMessage: 'Halo! Saya perekrut dari Global Tech. Kami menemukan profil Anda dan ingin menawarkan pekerjaan paruh waktu jarak jauh. Anda bisa mendapatkan $200-$500 sehari hanya dengan memberi peringkat produk secara online. Apakah Anda tertarik?',
    choices: [
      {
        text: 'Ignore and block the number.',
        idText: 'Abaikan dan blokir nomor tersebut.',
        nextNodeId: null,
        result: 'safe',
        feedback: 'Excellent! Unsolicited job offers from unknown numbers, especially those promising high pay for little work, are almost always task scams.'
      },
      {
        text: 'Reply: "Yes, I am interested. What are the details?"',
        idText: 'Balas: "Ya, saya tertarik. Apa detailnya?"',
        nextNodeId: 'node_2',
        result: 'neutral'
      }
    ]
  },
  'node_2': {
    id: 'node_2',
    sender: 'Unknown Number (+44 7911 123456)',
    message: 'Great! The job is simple. You just need to register on our platform and complete 30 product ratings. Before we start, I need to register your payment account. Please provide your full name, bank account number, and date of birth.',
    idMessage: 'Bagus! Pekerjaannya sederhana. Anda hanya perlu mendaftar di platform kami dan menyelesaikan 30 penilaian produk. Sebelum kita mulai, saya perlu mendaftarkan akun pembayaran Anda. Mohon berikan nama lengkap, nomor rekening bank, dan tanggal lahir Anda.',
    choices: [
      {
        text: 'Provide the requested details.',
        idText: 'Berikan detail yang diminta.',
        nextNodeId: null,
        result: 'scam',
        feedback: 'You\'ve been scammed! You should never provide sensitive banking or personal information to an unverified contact over chat. This could lead to identity theft or financial loss.'
      },
      {
        text: 'Ask for a company website or official email first.',
        idText: 'Minta situs web perusahaan atau email resmi terlebih dahulu.',
        nextNodeId: 'node_3',
        result: 'neutral'
      },
      {
        text: 'Stop responding and block.',
        idText: 'Berhenti merespons dan blokir.',
        nextNodeId: null,
        result: 'safe',
        feedback: 'Good call. Asking for sensitive personal and banking info upfront over WhatsApp is a major red flag. Blocking is the safest move.'
      }
    ]
  },
  'node_3': {
    id: 'node_3',
    sender: 'Unknown Number (+44 7911 123456)',
    message: 'Our official website is under maintenance, but you can trust me. Many people are already earning. Just click this link to register your account directly: http://global-tech-jobs-portal.vip/register',
    idMessage: 'Situs web resmi kami sedang dalam perbaikan, tetapi Anda bisa mempercayai saya. Banyak orang sudah mendapatkan penghasilan. Klik saja tautan ini untuk mendaftarkan akun Anda secara langsung: http://global-tech-jobs-portal.vip/register',
    choices: [
      {
        text: 'Click the link to check it out.',
        idText: 'Klik tautan untuk memeriksanya.',
        nextNodeId: null,
        result: 'scam',
        feedback: 'You clicked a phishing link! The domain is suspicious (.vip) and the recruiter gave a poor excuse for not having a real website. The link likely leads to a fake login page designed to steal your data.'
      },
      {
        text: 'Realize it\'s a scam and block the sender.',
        idText: 'Sadar bahwa itu penipuan dan blokir pengirim.',
        nextNodeId: null,
        result: 'safe',
        feedback: 'Perfect! The combination of a broken website excuse and a shady link (.vip domain) confirms this is a scam. You successfully avoided the trap.'
      }
    ]
  }
};

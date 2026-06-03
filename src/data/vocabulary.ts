export interface VocabularyItem {
  id: string;
  word: string;
  definition: string;
  englishExample: string; // Udah gue ubah dari 'example' biar klop
  languageCue: string;    // Properti baru buat nandain kata kunci penipuan
  indonesianMeaning: string;
  indonesianExample: string;
  category: 'Scam Tactic' | 'Security Concept' | 'Language Clue';
}

export const vocabulary: VocabularyItem[] = [
  {
    id: 'v1',
    word: 'Phishing',
    definition: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity in electronic communication.',
    englishExample: 'The email looked like it was from my bank, but it was a phishing scam.',
    languageCue: 'from my bank',
    indonesianMeaning: 'Upaya penipuan untuk mendapatkan informasi sensitif dengan menyamar sebagai pihak tepercaya dalam komunikasi elektronik.',
    indonesianExample: 'Email itu terlihat seperti dari bank saya, tapi ternyata itu adalah penipuan phishing.',
    category: 'Scam Tactic'
  },
  {
    id: 'v2',
    word: 'Urgency',
    definition: 'Creating a false sense of time pressure to force the victim into making a quick, unthinking decision.',
    englishExample: 'The message used urgency, claiming my account would be locked in 24 hours.',
    languageCue: 'locked in 24 hours',
    indonesianMeaning: 'Menciptakan tekanan waktu palsu untuk memaksa korban mengambil keputusan cepat tanpa berpikir panjang.',
    indonesianExample: 'Pesan tersebut menggunakan urgensi, mengklaim akun saya akan dikunci dalam 24 jam.',
    category: 'Language Clue'
  },
  {
    id: 'v3',
    word: 'Spoofing',
    definition: 'Falsifying data to disguise an unknown source as a known, trusted source (e.g., faking an email address).',
    englishExample: 'The sender address was a classic case of spoofing; the display name said Apple, but the email was completely random.',
    languageCue: 'email was completely random',
    indonesianMeaning: 'Memalsukan data untuk menyamarkan sumber yang tidak dikenal sebagai sumber yang tepercaya (misal, memalsukan alamat email).',
    indonesianExample: 'Alamat pengirim adalah kasus spoofing klasik; nama tampilan mengatakan Apple, tapi email aslinya benar-benar acak.',
    category: 'Scam Tactic'
  },
  {
    id: 'v4',
    word: 'Credentials',
    definition: 'Information used to verify identity, such as passwords, PINs, or security questions.',
    englishExample: 'Never share your login credentials with anyone over chat.',
    languageCue: 'share your login credentials',
    indonesianMeaning: 'Informasi yang digunakan untuk memverifikasi identitas, seperti kata sandi, PIN, atau pertanyaan keamanan.',
    indonesianExample: 'Jangan pernah membagikan kredensial login Anda kepada siapapun melalui chat.',
    category: 'Security Concept'
  },
  {
    id: 'v5',
    word: 'Suspicious',
    definition: 'Causing a feeling that something is wrong or illegal.',
    englishExample: 'The grammar mistakes in the official email made it look highly suspicious.',
    languageCue: 'grammar mistakes',
    indonesianMeaning: 'Menimbulkan perasaan bahwa ada sesuatu yang salah atau mencurigakan.',
    indonesianExample: 'Kesalahan tata bahasa di email resmi itu membuatnya terlihat sangat mencurigakan.',
    category: 'Language Clue'
  },
  {
    id: 'v6',
    word: 'Legitimate',
    definition: 'Conforming to the law or to rules; genuine and real.',
    englishExample: 'Always verify that a website is legitimate before entering your credit card details.',
    languageCue: 'entering your credit card',
    indonesianMeaning: 'Sesuai dengan hukum atau aturan; asli dan sah.',
    indonesianExample: 'Selalu verifikasi bahwa sebuah situs web itu sah sebelum memasukkan detail kartu kredit Anda.',
    category: 'Security Concept'
  },
  {
    id: 'v7',
    word: 'Malware',
    definition: 'Software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system.',
    englishExample: 'Opening the suspicious attachment installed malware on his laptop.',
    languageCue: 'suspicious attachment',
    indonesianMeaning: 'Perangkat lunak yang dirancang khusus untuk mengganggu, merusak, atau mendapatkan akses tidak sah ke sistem komputer.',
    indonesianExample: 'Membuka lampiran mencurigakan itu menginstal malware di laptopnya.',
    category: 'Scam Tactic'
  },
  {
    id: 'v8',
    word: 'Verify',
    definition: 'Make sure or demonstrate that something is true, accurate, or justified.',
    englishExample: 'Please verify the sender\'s email address by hovering over their name.',
    languageCue: 'hovering over their name',
    indonesianMeaning: 'Memastikan atau menunjukkan bahwa sesuatu itu benar, akurat, atau dapat dibenarkan.',
    indonesianExample: 'Harap verifikasi alamat email pengirim dengan mengarahkan kursor ke atas nama mereka.',
    category: 'Security Concept'
  },
  {
    id: 'v9',
    word: 'Generic Greeting',
    definition: 'Using non-specific terms like "Dear Customer" instead of your actual name, often a sign of mass-phishing.',
    englishExample: 'The email started with a generic greeting, which was the first red flag.',
    languageCue: 'generic greeting',
    indonesianMeaning: 'Menggunakan istilah tidak spesifik seperti "Pelanggan Yth" alih-alih nama asli Anda, sering kali merupakan tanda penipuan massal.',
    indonesianExample: 'Email itu dimulai dengan sapaan generik, yang merupakan tanda bahaya pertama.',
    category: 'Language Clue'
  },
  {
    id: 'v10',
    word: 'Social Engineering',
    definition: 'The use of deception to manipulate individuals into divulging confidential or personal information.',
    englishExample: 'The scammer used social engineering to convince the employee to reset the system password.',
    languageCue: 'reset the system password',
    indonesianMeaning: 'Penggunaan penipuan untuk memanipulasi individu agar memberikan informasi rahasia atau pribadi.',
    indonesianExample: 'Penipu tersebut menggunakan rekayasa sosial untuk meyakinkan karyawan agar mereset kata sandi sistem.',
    category: 'Scam Tactic'
  }
];
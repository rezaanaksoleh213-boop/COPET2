export interface VocabularyItem {
  id: string;
  word: string;
  definition: string;
  englishExample: string;
  languageCue: string;
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
  },
  {
    id: 'v11',
    word: 'Smishing',
    definition: 'Phishing attacks conducted via SMS or text messages.',
    englishExample: 'The smishing text asked me to click a link to claim a package.',
    languageCue: 'click a link to claim a package',
    indonesianMeaning: 'Serangan phishing yang dilakukan melalui SMS atau pesan teks singkat.',
    indonesianExample: 'Teks smishing itu meminta saya mengklik tautan untuk mengklaim paket.',
    category: 'Scam Tactic'
  },
  {
    id: 'v12',
    word: 'Vishing',
    definition: 'Voice phishing, where scammers use phone calls to trick victims into providing sensitive data.',
    englishExample: 'I received a vishing call from someone claiming to be the tax office.',
    languageCue: 'claiming to be the tax office',
    indonesianMeaning: 'Phishing suara, di mana penipu menggunakan panggilan telepon untuk mengelabui korban agar memberikan data sensitif.',
    indonesianExample: 'Saya menerima panggilan vishing dari seseorang yang mengaku dari kantor pajak.',
    category: 'Scam Tactic'
  },
  {
    id: 'v13',
    word: 'Ransomware',
    definition: 'A type of malicious software designed to block access to a computer system until a sum of money is paid.',
    englishExample: 'The ransomware locked all my files and demanded bitcoin to unlock them.',
    languageCue: 'demanded bitcoin',
    indonesianMeaning: 'Jenis perangkat lunak berbahaya yang dirancang untuk memblokir akses ke sistem komputer sampai sejumlah uang dibayarkan.',
    indonesianExample: 'Ransomware itu mengunci semua file saya dan menuntut bitcoin untuk membukanya.',
    category: 'Scam Tactic'
  },
  {
    id: 'v14',
    word: 'Ponzi Scheme',
    definition: 'A form of fraud that lures investors and pays profits to earlier investors with funds from more recent investors.',
    englishExample: 'The promised 50% daily return was just a classic Ponzi scheme.',
    languageCue: '50% daily return',
    indonesianMeaning: 'Bentuk penipuan yang memikat investor dan membayar keuntungan kepada investor lama dengan dana dari investor yang lebih baru.',
    indonesianExample: 'Janji keuntungan 50% per hari itu hanyalah skema Ponzi klasik.',
    category: 'Scam Tactic'
  },
  {
    id: 'v15',
    word: 'Romance Scam',
    definition: 'A deceptive scheme where a scammer feigns romantic interest to gain the victim\'s affection and eventually, money.',
    englishExample: 'After two weeks of chatting, the romance scammer asked for money for a flight.',
    languageCue: 'asked for money for a flight',
    indonesianMeaning: 'Skema penipuan di mana penipu memalsukan ketertarikan romantis untuk memikat kasih sayang korban dan pada akhirnya, uang mereka.',
    indonesianExample: 'Setelah dua minggu mengobrol, penipu asmara itu meminta uang untuk tiket penerbangan.',
    category: 'Scam Tactic'
  },
  {
    id: 'v16',
    word: 'Two-Factor Authentication (2FA)',
    definition: 'A security process in which users provide two different authentication factors to verify themselves.',
    englishExample: 'Always enable 2FA to protect your social media accounts from unauthorized access.',
    languageCue: 'enable 2FA',
    indonesianMeaning: 'Proses keamanan di mana pengguna memberikan dua faktor otentikasi yang berbeda untuk memverifikasi diri mereka sendiri.',
    indonesianExample: 'Selalu aktifkan 2FA untuk melindungi akun media sosial Anda dari akses tidak sah.',
    category: 'Security Concept'
  },
  {
    id: 'v17',
    word: 'Impersonation',
    definition: 'The act of pretending to be another person or organization for the purpose of entertainment or fraud.',
    englishExample: 'The hacker used impersonation to pretend to be the company CEO in an email.',
    languageCue: 'pretend to be the company CEO',
    indonesianMeaning: 'Tindakan berpura-pura menjadi orang atau entitas lain untuk tujuan hiburan atau penipuan.',
    indonesianExample: 'Peretas menggunakan penyamaran untuk berpura-pura menjadi CEO perusahaan dalam sebuah email.',
    category: 'Scam Tactic'
  },
  {
    id: 'v18',
    word: 'OTP (One-Time Password)',
    definition: 'A password that is valid for only one login session or transaction, on a computer system or other digital device.',
    englishExample: 'Never share your OTP with anyone calling you on the phone.',
    languageCue: 'share your OTP',
    indonesianMeaning: 'Kata sandi yang hanya berlaku untuk satu sesi login atau transaksi, pada sistem komputer atau perangkat digital lainnya.',
    indonesianExample: 'Jangan pernah membagikan OTP Anda kepada siapa pun yang menelepon Anda di telepon.',
    category: 'Security Concept'
  },
  {
    id: 'v19',
    word: 'Advance-Fee Scam',
    definition: 'A scam where the victim is asked to pay money upfront in order to receive a larger sum later.',
    englishExample: 'I was asked to pay a clearance fee to get the million-dollar prize.',
    languageCue: 'pay a clearance fee',
    indonesianMeaning: 'Penipuan di mana korban diminta membayar uang di muka untuk menerima jumlah yang lebih besar di kemudian hari.',
    indonesianExample: 'Saya diminta membayar biaya administrasi/pencairan untuk mendapatkan hadiah jutaan dolar.',
    category: 'Scam Tactic'
  },
  {
    id: 'v20',
    word: 'Malicious Link',
    definition: 'A web link designed to download malware or direct users to a compromised or fake website.',
    englishExample: 'The email contained a malicious link disguised as a PDF invoice download.',
    languageCue: 'disguised as a PDF invoice',
    indonesianMeaning: 'Tautan web yang dirancang untuk mengunduh perangkat lunak berbahaya atau mengarahkan pengguna ke situs web palsu.',
    indonesianExample: 'Email tersebut berisi tautan berbahaya yang disamarkan sebagai unduhan faktur PDF.',
    category: 'Scam Tactic'
  },
  {
    id: 'v21',
    word: 'Threatening Language',
    definition: 'Words used by scammers to intimidate victims into acting immediately out of fear.',
    englishExample: 'The message used threatening language, saying my bank account would be permanently deleted.',
    languageCue: 'permanently deleted',
    indonesianMeaning: 'Kata-kata yang digunakan oleh penipu untuk mengintimidasi korban agar segera bertindak karena ketakutan.',
    indonesianExample: 'Pesan itu menggunakan bahasa yang mengancam, mengatakan rekening bank saya akan dihapus secara permanen.',
    category: 'Language Clue'
  },
  {
    id: 'v22',
    word: 'Too Good To Be True',
    definition: 'Offers or claims that are so seemingly advantageous that they are almost certainly fake.',
    englishExample: 'The free iPhone 15 offer from an unknown account was just too good to be true.',
    languageCue: 'free iPhone 15 offer',
    indonesianMeaning: 'Penawaran atau klaim yang tampaknya sangat menguntungkan sehingga hampir pasti merupakan palsu.',
    indonesianExample: 'Tawaran iPhone 15 gratis dari akun tak dikenal itu terlalu bagus untuk menjadi kenyataan.',
    category: 'Language Clue'
  },
  {
    id: 'v23',
    word: 'Identity Theft',
    definition: 'The fraudulent practice of using another person\'s name and personal information to obtain credit, loans, etc.',
    englishExample: 'He became a victim of identity theft after submitting his ID card photo to a fake loan app.',
    languageCue: 'submitting his ID card photo',
    indonesianMeaning: 'Praktik penipuan menggunakan nama dan informasi pribadi orang lain untuk mendapatkan kredit, pinjaman, dll.',
    indonesianExample: 'Dia menjadi korban pencurian identitas setelah mengirimkan foto KTP-nya ke aplikasi pinjaman palsu.',
    category: 'Scam Tactic'
  },
  {
    id: 'v24',
    word: 'Baiting',
    definition: 'A scam tactic that uses a false promise to lure a victim into a trap that steals their personal information.',
    englishExample: 'The scammer used baiting by offering free movie downloads to get my credit card details.',
    languageCue: 'offering free movie downloads',
    indonesianMeaning: 'Taktik penipuan yang menggunakan janji palsu untuk memancing korban ke dalam perangkap guna mencuri informasi pribadi mereka.',
    indonesianExample: 'Penipu menggunakan umpan dengan menawarkan unduhan film gratis untuk mendapatkan detail kartu kredit saya.',
    category: 'Scam Tactic'
  },
  {
    id: 'v25',
    word: 'Typosquatting',
    definition: 'Registering a domain name that is a misspelled version of a popular website to trick users into visiting it.',
    englishExample: 'I didn\'t realize it was a typosquatting site because it looked exactly like paypal.com.',
    languageCue: 'looked exactly like',
    indonesianMeaning: 'Mendaftarkan nama domain yang merupakan versi salah ketik dari situs web populer untuk menipu pengguna agar mengunjunginya.',
    indonesianExample: 'Saya tidak menyadari itu situs typosquatting karena tampilannya terlihat persis seperti paypal.com.',
    category: 'Scam Tactic'
  }
];

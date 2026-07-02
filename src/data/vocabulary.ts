export type VocabCategory = 
  | 'Phishing' 
  | 'Romance Scam' 
  | 'Investment Scam' 
  | 'Job Scam' 
  | 'Prize Scam' 
  | 'Tech Support Scam' 
  | 'Government Impersonation';

export interface VocabularyItem {
  id: string;
  word: string;
  definition: string;
  englishExample: string;
  languageCue: string;
  indonesianMeaning: string;
  indonesianExample: string;
  category: VocabCategory;
}

export const vocabulary: VocabularyItem[] = [
  // --- 1. PHISHING ---
  {
    id: 'ph1', word: 'Phishing', category: 'Phishing',
    definition: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity.',
    englishExample: 'The email looked like it was from my bank, but it was a phishing scam.',
    languageCue: 'from my bank',
    indonesianMeaning: 'Upaya penipuan untuk mendapatkan informasi sensitif dengan menyamar sebagai pihak tepercaya.',
    indonesianExample: 'Email itu terlihat seperti dari bank saya, tapi ternyata itu adalah penipuan phishing.'
  },
  {
    id: 'ph2', word: 'Spoofing', category: 'Phishing',
    definition: 'Falsifying data to disguise an unknown source as a known, trusted source.',
    englishExample: 'The sender address used spoofing; it said Apple, but the email was random.',
    languageCue: 'email was random',
    indonesianMeaning: 'Memalsukan data untuk menyamarkan sumber yang tidak dikenal sebagai sumber yang tepercaya.',
    indonesianExample: 'Alamat pengirim menggunakan spoofing; namanya Apple, tapi email aslinya acak.'
  },
  {
    id: 'ph3', word: 'Malicious Link', category: 'Phishing',
    definition: 'A web link designed to direct users to a compromised or fake website.',
    englishExample: 'The SMS contained a malicious link disguised as a package tracker.',
    languageCue: 'disguised as a package tracker',
    indonesianMeaning: 'Tautan web yang dirancang untuk mengarahkan pengguna ke situs web palsu atau berbahaya.',
    indonesianExample: 'SMS tersebut berisi tautan berbahaya yang disamarkan sebagai pelacak paket.'
  },
  {
    id: 'ph4', word: 'Generic Greeting', category: 'Phishing',
    definition: 'Using non-specific terms like "Dear Customer" instead of your actual name.',
    englishExample: 'The warning email started with a generic greeting, which was a red flag.',
    languageCue: 'generic greeting',
    indonesianMeaning: 'Menggunakan istilah tidak spesifik seperti "Pelanggan Yth" alih-alih nama asli Anda.',
    indonesianExample: 'Email peringatan itu dimulai dengan sapaan generik, yang merupakan tanda bahaya.'
  },
  {
    id: 'ph5', word: 'Typosquatting', category: 'Phishing',
    definition: 'Registering a domain name that is a misspelled version of a popular website.',
    englishExample: 'I was tricked by typosquatting because the URL was netfiix.com instead of netflix.',
    languageCue: 'netfiix.com',
    indonesianMeaning: 'Mendaftarkan nama domain yang salah ketik dari situs populer untuk menipu pengguna.',
    indonesianExample: 'Saya tertipu typosquatting karena URL-nya netfiix.com, bukan netflix.'
  },

  // --- 2. ROMANCE SCAM ---
  {
    id: 'rs1', word: 'Romance Scam', category: 'Romance Scam',
    definition: 'A scheme where a scammer feigns romantic interest to gain affection and money.',
    englishExample: 'After two weeks of chatting, the romance scammer asked for money.',
    languageCue: 'asked for money',
    indonesianMeaning: 'Penipuan di mana pelaku memalsukan ketertarikan romantis untuk mendapatkan uang.',
    indonesianExample: 'Setelah dua minggu mengobrol, penipu asmara itu meminta uang.'
  },
  {
    id: 'rs2', word: 'Love Bombing', category: 'Romance Scam',
    definition: 'Overwhelming someone with signs of affection to manipulate them.',
    englishExample: 'He used love bombing by declaring you are his soulmate on the second day.',
    languageCue: 'you are his soulmate',
    indonesianMeaning: 'Menghujani seseorang dengan kasih sayang berlebihan untuk memanipulasi mereka.',
    indonesianExample: 'Dia menggunakan love bombing dengan menyatakan Anda belahan jiwanya di hari kedua.'
  },
  {
    id: 'rs3', word: 'Catfishing', category: 'Romance Scam',
    definition: 'Creating a fictional persona or fake identity on a social network.',
    englishExample: 'She discovered he was catfishing when his photos turned out to be from a model.',
    languageCue: 'photos turned out to be from a model',
    indonesianMeaning: 'Membuat persona atau identitas palsu di jejaring sosial.',
    indonesianExample: 'Dia menyadari pria itu catfishing saat tahu fotonya adalah milik seorang model.'
  },
  {
    id: 'rs4', word: 'Fake Emergency', category: 'Romance Scam',
    definition: 'A fabricated crisis used to create urgency and ask for immediate financial help.',
    englishExample: 'He claimed he was in a hospital abroad and needed money for a fake emergency.',
    languageCue: 'in a hospital abroad',
    indonesianMeaning: 'Krisis rekayasa yang digunakan untuk menciptakan urgensi dan meminta bantuan finansial.',
    indonesianExample: 'Dia mengklaim berada di rumah sakit luar negeri dan butuh uang untuk keadaan darurat palsu.'
  },
  {
    id: 'rs5', word: 'Sweetheart Swindle', category: 'Romance Scam',
    definition: 'Another term for romance scam, focusing on exploiting emotional vulnerability.',
    englishExample: 'The sweetheart swindle left her brokenhearted and heavily in debt.',
    languageCue: 'heavily in debt',
    indonesianMeaning: 'Istilah lain untuk penipuan asmara, berfokus pada eksploitasi kerentanan emosional.',
    indonesianExample: 'Penipuan asmara itu meninggalkannya patah hati dan terlilit utang besar.'
  },

  // --- 3. INVESTMENT SCAM ---
  {
    id: 'is1', word: 'Ponzi Scheme', category: 'Investment Scam',
    definition: 'Paying profits to earlier investors with funds from more recent investors.',
    englishExample: 'The promised 50% daily return was just a classic Ponzi scheme.',
    languageCue: '50% daily return',
    indonesianMeaning: 'Membayar keuntungan kepada investor lama dengan dana dari investor yang lebih baru.',
    indonesianExample: 'Janji keuntungan 50% per hari itu hanyalah skema Ponzi klasik.'
  },
  {
    id: 'is2', word: 'Guaranteed Returns', category: 'Investment Scam',
    definition: 'A false promise that an investment has absolutely no risk of losing money.',
    englishExample: 'They lured victims by offering guaranteed returns of 100% in a week.',
    languageCue: 'guaranteed returns',
    indonesianMeaning: 'Janji palsu bahwa sebuah investasi sama sekali tidak memiliki risiko kerugian.',
    indonesianExample: 'Mereka memikat korban dengan menawarkan keuntungan pasti 100% dalam seminggu.'
  },
  {
    id: 'is3', word: 'Pump and Dump', category: 'Investment Scam',
    definition: 'Artificially inflating the price of an owned asset through false recommendations.',
    englishExample: 'The crypto token was a pump and dump scheme promoted by fake influencers.',
    languageCue: 'promoted by fake influencers',
    indonesianMeaning: 'Secara artifisial melambungkan harga aset yang dimiliki melalui rekomendasi palsu.',
    indonesianExample: 'Token kripto itu adalah skema pump and dump yang dipromosikan influencer palsu.'
  },
  {
    id: 'is4', word: 'Unregulated Broker', category: 'Investment Scam',
    definition: 'A financial platform operating without a license from a recognized authority.',
    englishExample: 'He lost his savings after trading on an unregulated broker platform.',
    languageCue: 'unregulated broker',
    indonesianMeaning: 'Platform keuangan yang beroperasi tanpa lisensi dari otoritas yang diakui.',
    indonesianExample: 'Dia kehilangan tabungannya setelah berdagang di platform broker ilegal.'
  },
  {
    id: 'is5', word: 'Pig Butchering', category: 'Investment Scam',
    definition: 'Building a long-term relationship before convincing the victim to invest in fake crypto.',
    englishExample: 'The pig butchering scam took months of chatting before asking her to invest.',
    languageCue: 'months of chatting',
    indonesianMeaning: 'Membangun hubungan jangka panjang sebelum meyakinkan korban untuk berinvestasi kripto palsu.',
    indonesianExample: 'Penipuan pig butchering memakan waktu berbulan-bulan obrolan sebelum memintanya berinvestasi.'
  },

  // --- 4. JOB SCAM ---
  {
    id: 'js1', word: 'Task Scam', category: 'Job Scam',
    definition: 'A scam where victims are paid for initial simple tasks but must pay to access bigger tasks.',
    englishExample: 'The job started by liking videos, but the task scam later required a deposit.',
    languageCue: 'required a deposit',
    indonesianMeaning: 'Penipuan di mana korban dibayar untuk tugas awal tapi harus membayar untuk tugas lebih besar.',
    indonesianExample: 'Pekerjaan dimulai dengan menyukai video, tapi penipuan tugas itu lalu meminta deposit.'
  },
  {
    id: 'js2', word: 'Advance-Fee', category: 'Job Scam',
    definition: 'Asking the victim to pay money upfront in order to secure a job or receive a larger sum.',
    englishExample: 'They asked for an advance-fee for uniform processing before starting the job.',
    languageCue: 'uniform processing',
    indonesianMeaning: 'Meminta korban membayar uang di muka untuk mengamankan pekerjaan atau hadiah.',
    indonesianExample: 'Mereka meminta biaya di muka untuk pemrosesan seragam sebelum mulai bekerja.'
  },
  {
    id: 'js3', word: 'Fake Recruiter', category: 'Job Scam',
    definition: 'Someone impersonating a hiring manager from a legitimate company to steal data or money.',
    englishExample: 'The fake recruiter contacted me on Telegram offering a remote job.',
    languageCue: 'contacted me on Telegram',
    indonesianMeaning: 'Seseorang yang menyamar sebagai manajer HRD perusahaan resmi untuk mencuri data/uang.',
    indonesianExample: 'Perekrut palsu itu menghubungi saya di Telegram menawarkan pekerjaan jarak jauh.'
  },
  {
    id: 'js4', word: 'Unsolicited Offer', category: 'Job Scam',
    definition: 'A job offer sent out of nowhere without the victim ever applying.',
    englishExample: 'I received an unsolicited offer for a high-paying job I never applied for.',
    languageCue: 'never applied for',
    indonesianMeaning: 'Tawaran pekerjaan yang dikirim tiba-tiba tanpa korban pernah melamarnya.',
    indonesianExample: 'Saya menerima tawaran pekerjaan bergaji tinggi yang tidak pernah saya lamar.'
  },
  {
    id: 'js5', word: 'Money Mule', category: 'Job Scam',
    definition: 'Someone who transfers illegally acquired money on behalf of others, often unknowingly.',
    englishExample: 'The job was just receiving funds and transferring them, making him a money mule.',
    languageCue: 'receiving funds and transferring',
    indonesianMeaning: 'Seseorang yang mentransfer uang ilegal atas nama orang lain, seringkali tanpa sadar.',
    indonesianExample: 'Pekerjaannya hanya menerima dana dan mentransfernya, menjadikannya bagal uang.'
  },

  // --- 5. PRIZE SCAM ---
  {
    id: 'pz1', word: 'Too Good To Be True', category: 'Prize Scam',
    definition: 'Offers or claims that are so seemingly advantageous that they are almost certainly fake.',
    englishExample: 'Winning a free car without entering a contest is too good to be true.',
    languageCue: 'without entering a contest',
    indonesianMeaning: 'Penawaran atau klaim yang tampaknya sangat menguntungkan sehingga hampir pasti palsu.',
    indonesianExample: 'Memenangkan mobil gratis tanpa mengikuti undian itu terlalu bagus untuk jadi kenyataan.'
  },
  {
    id: 'pz2', word: 'Customs Fee Scam', category: 'Prize Scam',
    definition: 'Victims are told they won a prize but must pay a fake customs or tax fee to receive it.',
    englishExample: 'I won a smartphone but they asked me to pay the customs fee first.',
    languageCue: 'pay the customs fee',
    indonesianMeaning: 'Korban diberitahu memenangkan hadiah tetapi harus membayar biaya cukai/pajak palsu.',
    indonesianExample: 'Saya memenangkan ponsel pintar tetapi mereka meminta saya membayar biaya cukai dulu.'
  },
  {
    id: 'pz3', word: 'Lottery Scam', category: 'Prize Scam',
    definition: 'A message claiming you have won a massive lottery you never bought a ticket for.',
    englishExample: 'The SMS claimed I won the national lottery scam of 1 billion rupiah.',
    languageCue: 'won the national lottery',
    indonesianMeaning: 'Pesan yang mengklaim Anda memenangkan undian besar yang tidak pernah Anda ikuti.',
    indonesianExample: 'SMS itu mengklaim saya menang penipuan undian nasional sebesar 1 miliar rupiah.'
  },
  {
    id: 'pz4', word: 'Claim Deadline', category: 'Prize Scam',
    definition: 'Creating artificial urgency by saying a prize will expire if not claimed immediately.',
    englishExample: 'The email stated I had a 2-hour claim deadline to receive the prize.',
    languageCue: '2-hour claim deadline',
    indonesianMeaning: 'Menciptakan urgensi buatan dengan mengatakan hadiah akan hangus jika tidak segera diklaim.',
    indonesianExample: 'Email itu menyatakan saya punya batas waktu klaim 2 jam untuk menerima hadiah.'
  },
  {
    id: 'pz5', word: 'Overpayment Scam', category: 'Prize Scam',
    definition: 'Sending a fake check for a prize/item, overpaying, and asking for the difference back.',
    englishExample: 'They sent a fake check for the prize and asked me to return the overpayment.',
    languageCue: 'return the overpayment',
    indonesianMeaning: 'Mengirim cek palsu berlebih, lalu meminta korban mengembalikan selisihnya.',
    indonesianExample: 'Mereka mengirim cek palsu untuk hadiah dan meminta saya mengembalikan kelebihannya.'
  },

  // --- 6. TECH SUPPORT SCAM ---
  {
    id: 'ts1', word: 'Pop-up Warning', category: 'Tech Support Scam',
    definition: 'A fake alert on a browser claiming the computer is infected with viruses.',
    englishExample: 'A loud pop-up warning suddenly appeared, telling me to call Microsoft.',
    languageCue: 'call Microsoft',
    indonesianMeaning: 'Peringatan palsu di browser yang mengklaim komputer terinfeksi virus.',
    indonesianExample: 'Peringatan pop-up yang bising tiba-tiba muncul, menyuruh saya menelepon Microsoft.'
  },
  {
    id: 'ts2', word: 'Remote Access', category: 'Tech Support Scam',
    definition: 'Allowing a third party to control your computer over the internet.',
    englishExample: 'The fake technician asked for remote access to fix the non-existent virus.',
    languageCue: 'asked for remote access',
    indonesianMeaning: 'Mengizinkan pihak ketiga untuk mengontrol komputer Anda melalui internet.',
    indonesianExample: 'Teknisi palsu itu meminta akses jarak jauh untuk memperbaiki virus yang tidak ada.'
  },
  {
    id: 'ts3', word: 'Gift Card Payment', category: 'Tech Support Scam',
    definition: 'Scammers requesting payment for services using untraceable gift cards (like Google Play).',
    englishExample: 'The tech support said I must pay for the antivirus using a gift card payment.',
    languageCue: 'using a gift card',
    indonesianMeaning: 'Penipu meminta pembayaran layanan menggunakan kartu hadiah yang tidak dapat dilacak.',
    indonesianExample: 'Dukungan teknis mengatakan saya harus membayar antivirus menggunakan kartu hadiah.'
  },
  {
    id: 'ts4', word: 'Scareware', category: 'Tech Support Scam',
    definition: 'Malicious software that tricks users into believing their computer is infected.',
    englishExample: 'The scareware locked my browser and demanded I buy their fake security tool.',
    languageCue: 'demanded I buy',
    indonesianMeaning: 'Perangkat lunak jahat yang menipu pengguna agar percaya komputer mereka terinfeksi.',
    indonesianExample: 'Scareware itu mengunci browser saya dan menuntut saya membeli alat keamanan palsu.'
  },
  {
    id: 'ts5', word: 'Event Viewer Trick', category: 'Tech Support Scam',
    definition: 'Scammers showing normal system logs to convince victims their PC has critical errors.',
    englishExample: 'He used the event viewer trick to show me harmless errors and cause panic.',
    languageCue: 'show me harmless errors',
    indonesianMeaning: 'Penipu menunjukkan log sistem normal untuk meyakinkan korban komputernya rusak.',
    indonesianExample: 'Dia menggunakan trik event viewer untuk menunjukkan error biasa dan membuat panik.'
  },

  // --- 7. GOVERNMENT IMPERSONATION ---
  {
    id: 'gi1', word: 'Tax Refund Scam', category: 'Government Impersonation',
    definition: 'A fake notification claiming the victim is owed money by the tax department.',
    englishExample: 'The email claimed I was eligible for a tax refund if I clicked the link.',
    languageCue: 'eligible for a tax refund',
    indonesianMeaning: 'Pemberitahuan palsu yang mengklaim korban berhak atas uang dari departemen pajak.',
    indonesianExample: 'Email itu mengklaim saya berhak atas pengembalian pajak jika mengklik tautan.'
  },
  {
    id: 'gi2', word: 'Arrest Warrant', category: 'Government Impersonation',
    definition: 'A scam call threatening the victim with immediate arrest for unpaid fines.',
    englishExample: 'The fake police officer threatened me with an arrest warrant over the phone.',
    languageCue: 'threatened me with an arrest',
    indonesianMeaning: 'Panggilan penipuan yang mengancam korban dengan penangkapan segera karena denda.',
    indonesianExample: 'Polisi palsu itu mengancam saya dengan surat perintah penangkapan melalui telepon.'
  },
  {
    id: 'gi3', word: 'Fake Official', category: 'Government Impersonation',
    definition: 'A scammer pretending to be a representative from a government agency.',
    englishExample: 'The fake official demanded my ID number to verify my citizenship status.',
    languageCue: 'demanded my ID number',
    indonesianMeaning: 'Penipu yang berpura-pura menjadi perwakilan dari instansi pemerintah.',
    indonesianExample: 'Pejabat palsu itu meminta nomor KTP untuk memverifikasi status kewarganegaraan saya.'
  },
  {
    id: 'gi4', word: 'Wire Transfer Demand', category: 'Government Impersonation',
    definition: 'Urging victims to wire money immediately to a "safe account" managed by the state.',
    englishExample: 'They issued a wire transfer demand to secure my money from money launderers.',
    languageCue: 'wire transfer demand',
    indonesianMeaning: 'Mendesak korban segera mengirim uang ke "rekening aman" yang dikelola negara.',
    indonesianExample: 'Mereka mengeluarkan tuntutan transfer kawat untuk mengamankan uang saya dari pencucian uang.'
  },
  {
    id: 'gi5', word: 'Subpoena Threat', category: 'Government Impersonation',
    definition: 'A fake legal document sent via email to scare someone into paying a penalty.',
    englishExample: 'I received a subpoena threat via WhatsApp from someone claiming to be a judge.',
    languageCue: 'subpoena threat via WhatsApp',
    indonesianMeaning: 'Dokumen hukum palsu yang dikirim via email untuk menakuti korban agar membayar denda.',
    indonesianExample: 'Saya menerima ancaman panggilan pengadilan via WhatsApp dari orang yang mengaku hakim.'
  }
];

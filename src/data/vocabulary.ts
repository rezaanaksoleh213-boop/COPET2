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
  // ==========================================
  // 1. PHISHING (10 Kosakata)
  // ==========================================
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
  {
    id: 'ph6', word: 'Spear Phishing', category: 'Phishing',
    definition: 'A targeted phishing attack using personalized information to trick a specific individual.',
    englishExample: 'The spear phishing email specifically mentioned my recent purchase at the university cafe.',
    languageCue: 'specifically mentioned my recent purchase',
    indonesianMeaning: 'Serangan phishing yang ditargetkan menggunakan informasi pribadi untuk menipu individu tertentu.',
    indonesianExample: 'Email spear phishing itu secara spesifik menyebutkan pembelian terakhir saya di kafe kampus.'
  },
  {
    id: 'ph7', word: 'Whaling', category: 'Phishing',
    definition: 'A highly targeted phishing attack aimed at senior executives or high-profile targets.',
    englishExample: 'The CEO received a whaling email asking to authorize an immediate wire transfer.',
    languageCue: 'asking to authorize an immediate wire',
    indonesianMeaning: 'Serangan phishing sangat tertarget yang ditujukan pada eksekutif senior atau target berprofil tinggi.',
    indonesianExample: 'CEO menerima email whaling yang meminta otorisasi transfer kawat segera.'
  },
  {
    id: 'ph8', word: 'Smishing', category: 'Phishing',
    definition: 'Phishing attacks conducted via SMS or text messaging systems.',
    englishExample: 'I got a smishing text claiming my package was detained at customs.',
    languageCue: 'detained at customs',
    indonesianMeaning: 'Serangan phishing yang dilakukan melalui SMS atau sistem pesan teks.',
    indonesianExample: 'Saya mendapat pesan teks smishing yang mengklaim paket saya ditahan di bea cukai.'
  },
  {
    id: 'ph9', word: 'Vishing', category: 'Phishing',
    definition: 'Voice phishing; manipulating victims over a phone call to reveal personal data.',
    englishExample: 'The vishing caller pretended to be from my bank’s fraud department.',
    languageCue: 'pretended to be from my bank',
    indonesianMeaning: 'Voice phishing; memanipulasi korban melalui panggilan telepon untuk mengungkap data pribadi.',
    indonesianExample: 'Penelepon vishing itu berpura-pura dari departemen penipuan bank saya.'
  },
  {
    id: 'ph10', word: 'Pharming', category: 'Phishing',
    definition: 'Redirecting users to a fake website even if they typed the correct URL.',
    englishExample: 'Because of pharming, I typed google.com but landed on a fake login page.',
    languageCue: 'landed on a fake login',
    indonesianMeaning: 'Mengarahkan pengguna ke situs web palsu meskipun mereka mengetik URL yang benar.',
    indonesianExample: 'Karena pharming, saya mengetik google.com tapi mendarat di halaman login palsu.'
  },

  // ==========================================
  // 2. ROMANCE SCAM (10 Kosakata)
  // ==========================================
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
  {
    id: 'rs6', word: 'Sextortion', category: 'Romance Scam',
    definition: 'Threatening to expose intimate images to extort money from the victim.',
    englishExample: 'The scammer demanded $500, threatening sextortion by sending her photos to her family.',
    languageCue: 'sending her photos to her family',
    indonesianMeaning: 'Mengancam akan menyebarkan gambar intim untuk memeras uang dari korban.',
    indonesianExample: 'Penipu meminta $500, mengancam sekstorsi dengan mengirim fotonya ke keluarganya.'
  },
  {
    id: 'rs7', word: 'Military Scam', category: 'Romance Scam',
    definition: 'A scammer pretending to be a soldier deployed overseas to evoke sympathy.',
    englishExample: 'He ran a military scam, claiming he needed funds to fly home from deployment.',
    languageCue: 'fly home from deployment',
    indonesianMeaning: 'Penipu yang berpura-pura menjadi tentara di luar negeri untuk membangkitkan simpati.',
    indonesianExample: 'Dia menjalankan penipuan militer, mengklaim butuh dana untuk pulang dari tugas.'
  },
  {
    id: 'rs8', word: 'Gift Parcel Scam', category: 'Romance Scam',
    definition: 'Claiming to send an expensive gift that requires the victim to pay fake customs fees.',
    englishExample: 'My online boyfriend said he sent jewelry, but I had to pay a parcel scam fee.',
    languageCue: 'had to pay a parcel scam fee',
    indonesianMeaning: 'Mengklaim mengirim hadiah mahal yang mengharuskan korban membayar biaya bea cukai palsu.',
    indonesianExample: 'Pacar online saya bilang dia mengirim perhiasan, tapi saya harus membayar biaya paket penipuan.'
  },
  {
    id: 'rs9', word: 'Isolation', category: 'Romance Scam',
    definition: 'A manipulation tactic to cut the victim off from supportive friends and family.',
    englishExample: 'He used isolation, telling her that only he truly understood her.',
    languageCue: 'only he truly understood her',
    indonesianMeaning: 'Taktik manipulasi untuk memisahkan korban dari teman dan keluarga yang mendukung.',
    indonesianExample: 'Dia menggunakan isolasi, mengatakan kepadanya bahwa hanya dia yang benar-benar memahaminya.'
  },
  {
    id: 'rs10', word: 'Sob Story', category: 'Romance Scam',
    definition: 'A fabricated sad story designed to elicit pity and financial support.',
    englishExample: 'She always had a new sob story about her sick mother needing surgery.',
    languageCue: 'sick mother needing surgery',
    indonesianMeaning: 'Kisah sedih rekayasa yang dirancang untuk memancing rasa kasihan dan dukungan finansial.',
    indonesianExample: 'Dia selalu punya kisah sedih baru tentang ibunya yang sakit dan butuh operasi.'
  },

  // ==========================================
  // 3. INVESTMENT SCAM (10 Kosakata)
  // ==========================================
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
  {
    id: 'is6', word: 'Rug Pull', category: 'Investment Scam',
    definition: 'When developers abandon a crypto project and run away with investors\' funds.',
    englishExample: 'The new coin suffered a rug pull, and its value dropped to zero instantly.',
    languageCue: 'dropped to zero instantly',
    indonesianMeaning: 'Ketika pengembang meninggalkan proyek kripto dan kabur membawa dana investor.',
    indonesianExample: 'Koin baru itu mengalami rug pull, dan nilainya turun menjadi nol seketika.'
  },
  {
    id: 'is7', word: 'HYIP', category: 'Investment Scam',
    definition: 'High-Yield Investment Program; a scam promising unsustainably high return rates.',
    englishExample: 'The HYIP promised a 10% weekly return but collapsed after a month.',
    languageCue: '10% weekly return',
    indonesianMeaning: 'High-Yield Investment Program; penipuan yang menjanjikan tingkat pengembalian yang tidak masuk akal tingginya.',
    indonesianExample: 'HYIP menjanjikan pengembalian mingguan 10% tetapi runtuh setelah sebulan.'
  },
  {
    id: 'is8', word: 'Boiler Room', category: 'Investment Scam',
    definition: 'An operation using high-pressure sales tactics to sell questionable investments.',
    englishExample: 'The broker used boiler room tactics, shouting that I must buy the stocks today.',
    languageCue: 'must buy the stocks today',
    indonesianMeaning: 'Operasi yang menggunakan taktik penjualan bertekanan tinggi untuk menjual investasi meragukan.',
    indonesianExample: 'Pialang itu menggunakan taktik boiler room, berteriak bahwa saya harus membeli saham hari ini.'
  },
  {
    id: 'is9', word: 'Fake Testimonials', category: 'Investment Scam',
    definition: 'Fabricated reviews or endorsements to build false trust in an investment.',
    englishExample: 'The website was full of fake testimonials from "millionaires".',
    languageCue: 'testimonials from "millionaires"',
    indonesianMeaning: 'Ulasan atau dukungan palsu untuk membangun kepercayaan palsu pada sebuah investasi.',
    indonesianExample: 'Situs web tersebut penuh dengan testimoni palsu dari "jutawan".'
  },
  {
    id: 'is10', word: 'Phantom Riches', category: 'Investment Scam',
    definition: 'Dangling the prospect of immense wealth to distract victims from the risks.',
    englishExample: 'They sold phantom riches, claiming I could retire in just one year.',
    languageCue: 'retire in just one year',
    indonesianMeaning: 'Mengiming-imingi prospek kekayaan luar biasa untuk mengalihkan perhatian korban dari risiko.',
    indonesianExample: 'Mereka menjual janji kekayaan semu, mengklaim saya bisa pensiun hanya dalam satu tahun.'
  },

  // ==========================================
  // 4. JOB SCAM (10 Kosakata)
  // ==========================================
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
  {
    id: 'js6', word: 'Reshipping Scam', category: 'Job Scam',
    definition: 'A scam involving receiving stolen goods and mailing them to another address.',
    englishExample: 'He thought he was an inspector, but it was just a reshipping scam.',
    languageCue: 'reshipping scam',
    indonesianMeaning: 'Penipuan yang melibatkan penerimaan barang curian dan mengirimkannya ke alamat lain.',
    indonesianExample: 'Dia pikir dia adalah inspektur barang, tapi itu hanyalah penipuan pengiriman ulang.'
  },
  {
    id: 'js7', word: 'Equipment Fee', category: 'Job Scam',
    definition: 'Demanding the employee pay upfront for a laptop or home office gear from a "preferred vendor".',
    englishExample: 'The company sent a bad check and told me to pay the equipment fee from it.',
    languageCue: 'pay the equipment fee',
    indonesianMeaning: 'Menuntut karyawan membayar di muka untuk laptop atau perlengkapan kantor dari "vendor khusus".',
    indonesianExample: 'Perusahaan mengirim cek palsu dan menyuruh saya membayar biaya perlengkapan darinya.'
  },
  {
    id: 'js8', word: 'Text-Based Interview', category: 'Job Scam',
    definition: 'Conducting professional job interviews solely via instant messaging to hide the scammer\'s identity.',
    englishExample: 'The hiring process was highly suspicious because it was just a text-based interview on Signal.',
    languageCue: 'text-based interview on Signal',
    indonesianMeaning: 'Melakukan wawancara kerja hanya melalui pesan instan untuk menyembunyikan identitas penipu.',
    indonesianExample: 'Proses rekrutmen sangat mencurigakan karena hanya berupa wawancara via teks di Signal.'
  },
  {
    id: 'js9', word: 'Pyramid Scheme', category: 'Job Scam',
    definition: 'A business model recruiting members via a promise of payments for enrolling others, not real sales.',
    englishExample: 'The job required me to recruit five friends, revealing it as a pyramid scheme.',
    languageCue: 'recruit five friends',
    indonesianMeaning: 'Model bisnis yang merekrut anggota melalui janji pembayaran jika mengajak orang lain, bukan penjualan nyata.',
    indonesianExample: 'Pekerjaan itu mengharuskan saya merekrut lima teman, yang menunjukkannya sebagai skema piramida.'
  },
  {
    id: 'js10', word: 'Phony Background Check', category: 'Job Scam',
    definition: 'Charging the applicant a fee to process a fake criminal background screening.',
    englishExample: 'They promised me the job but I had to pay $40 for a phony background check.',
    languageCue: 'pay $40 for a phony background',
    indonesianMeaning: 'Mengenakan biaya kepada pelamar untuk memproses pemeriksaan latar belakang kriminal palsu.',
    indonesianExample: 'Mereka menjanjikan saya pekerjaan itu tapi saya harus membayar $40 untuk pemeriksaan latar belakang palsu.'
  },

  // ==========================================
  // 5. PRIZE SCAM (10 Kosakata)
  // ==========================================
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
  {
    id: 'pz6', word: 'Sweepstakes Fraud', category: 'Prize Scam',
    definition: 'A scam informing the victim they won a contest to harvest their financial data.',
    englishExample: 'The sweepstakes fraud required my bank details to deposit the fictional winnings.',
    languageCue: 'required my bank details to deposit',
    indonesianMeaning: 'Penipuan yang memberitahu korban menang kontes guna memanen data keuangan mereka.',
    indonesianExample: 'Penipuan undian itu membutuhkan detail bank saya untuk menyetorkan kemenangan fiktif tersebut.'
  },
  {
    id: 'pz7', word: 'Tax Remittance', category: 'Prize Scam',
    definition: 'Scammers demanding that income taxes on a prize be paid directly to them upfront.',
    englishExample: 'I was asked to send a tax remittance via crypto before receiving the gold.',
    languageCue: 'send a tax remittance via crypto',
    indonesianMeaning: 'Penipu menuntut agar pajak penghasilan atas hadiah dibayarkan langsung kepada mereka di muka.',
    indonesianExample: 'Saya diminta mengirim pembayaran pajak via kripto sebelum menerima emas.'
  },
  {
    id: 'pz8', word: 'Free Vacation Scam', category: 'Prize Scam',
    definition: 'Offering a free trip that actually involves hidden booking fees and timeshare presentations.',
    englishExample: 'The free vacation scam forced me to pay $300 in unexpected port fees.',
    languageCue: 'pay $300 in unexpected',
    indonesianMeaning: 'Menawarkan perjalanan gratis yang sebenarnya melibatkan biaya tersembunyi.',
    indonesianExample: 'Penipuan liburan gratis memaksa saya membayar $300 untuk biaya pelabuhan tak terduga.'
  },
  {
    id: 'pz9', word: 'Mystery Shopper Scam', category: 'Prize Scam',
    definition: 'Combining a fake job and prize, asking the victim to deposit a bad check and buy gift cards.',
    englishExample: 'The mystery shopper scam told me to evaluate a store by buying Apple gift cards.',
    languageCue: 'buying Apple gift cards',
    indonesianMeaning: 'Menggabungkan pekerjaan palsu dan hadiah, meminta korban menyetorkan cek palsu dan membeli kartu hadiah.',
    indonesianExample: 'Penipuan pembelanja misterius menyuruh saya mengevaluasi toko dengan membeli kartu hadiah Apple.'
  },
  {
    id: 'pz10', word: 'Verification Fee', category: 'Prize Scam',
    definition: 'A small upfront charge scammers ask for to "prove your identity" before releasing a prize.',
    englishExample: 'They demanded a $10 verification fee just to prove my account was active.',
    languageCue: 'fee just to prove my account',
    indonesianMeaning: 'Biaya kecil di muka yang diminta penipu untuk "membuktikan identitas Anda" sebelum mencairkan hadiah.',
    indonesianExample: 'Mereka menuntut biaya verifikasi $10 hanya untuk membuktikan akun saya aktif.'
  },

  // ==========================================
  // 6. TECH SUPPORT SCAM (10 Kosakata)
  // ==========================================
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
  {
    id: 'ts6', word: 'Fake BSOD', category: 'Tech Support Scam',
    definition: 'A webpage designed to look like a Windows Blue Screen of Death to scare the user.',
    englishExample: 'The fake BSOD froze my screen and instructed me to call a toll-free number.',
    languageCue: 'call a toll-free number',
    indonesianMeaning: 'Halaman web yang dirancang menyerupai Blue Screen of Death Windows untuk menakuti pengguna.',
    indonesianExample: 'BSOD palsu membekukan layar saya dan menginstruksikan saya menelepon nomor bebas pulsa.'
  },
  {
    id: 'ts7', word: 'Rogue Antivirus', category: 'Tech Support Scam',
    definition: 'Malware disguised as an antivirus program that demands payment to remove fake threats.',
    englishExample: 'The rogue antivirus ran a scan and found 100 fake threats demanding payment.',
    languageCue: 'found 100 fake threats',
    indonesianMeaning: 'Malware yang disamarkan sebagai program antivirus yang menuntut pembayaran untuk ancaman palsu.',
    indonesianExample: 'Antivirus palsu menjalankan pemindaian dan menemukan 100 ancaman palsu yang menuntut pembayaran.'
  },
  {
    id: 'ts8', word: 'Cold Call Support', category: 'Tech Support Scam',
    definition: 'Unexpected phone calls from scammers claiming your computer is sending error signals.',
    englishExample: 'I received a cold call support from someone claiming my router was hacked.',
    languageCue: 'claiming my router was hacked',
    indonesianMeaning: 'Panggilan telepon tak terduga dari penipu yang mengklaim komputer Anda mengirimkan sinyal error.',
    indonesianExample: 'Saya menerima panggilan telepon tak terduga dari seseorang yang mengklaim router saya diretas.'
  },
  {
    id: 'ts9', word: 'Refund Scam', category: 'Tech Support Scam',
    definition: 'Scammers claim to refund you, manipulate the screen to show an overpayment, and demand it back.',
    englishExample: 'The refund scammer added an extra zero on my screen and cried that he would be fired.',
    languageCue: 'cried that he would be fired',
    indonesianMeaning: 'Penipu mengklaim mengembalikan uang, memanipulasi layar seolah kelebihan bayar, lalu memintanya kembali.',
    indonesianExample: 'Penipu pengembalian dana menambahkan angka nol ekstra di layar saya dan menangis bahwa dia akan dipecat.'
  },
  {
    id: 'ts10', word: 'Black Screen Trick', category: 'Tech Support Scam',
    definition: 'Using remote software to turn the victim\'s screen black while the scammer accesses bank accounts.',
    englishExample: 'He used the black screen trick so I couldn\'t see him transferring my money.',
    languageCue: 'couldn\'t see him transferring',
    indonesianMeaning: 'Menggunakan perangkat lunak jarak jauh untuk menghitamkan layar korban saat penipu mengakses rekening bank.',
    indonesianExample: 'Dia menggunakan trik layar hitam sehingga saya tidak bisa melihatnya mentransfer uang saya.'
  },

  // ==========================================
  // 7. GOVERNMENT IMPERSONATION (10 Kosakata)
  // ==========================================
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
  },
  {
    id: 'gi6', word: 'NIK Suspension', category: 'Government Impersonation',
    definition: 'A threat claiming your National Identity Number (NIK) will be blocked due to illegal activities.',
    englishExample: 'The automated call said my NIK suspension was imminent unless I pressed 1.',
    languageCue: 'suspension was imminent unless I pressed 1',
    indonesianMeaning: 'Ancaman yang mengklaim NIK Anda akan diblokir karena aktivitas ilegal.',
    indonesianExample: 'Panggilan otomatis itu mengatakan pemblokiran NIK saya sudah dekat kecuali saya menekan tombol 1.'
  },
  {
    id: 'gi7', word: 'Fake Court Notice', category: 'Government Impersonation',
    definition: 'Bogus emails claiming you missed a jury duty or must appear in court, carrying a malware payload.',
    englishExample: 'The fake court notice asked me to download the case details attached in the email.',
    languageCue: 'download the case details attached',
    indonesianMeaning: 'Email palsu yang mengklaim Anda harus hadir di pengadilan, biasanya membawa muatan malware.',
    indonesianExample: 'Pemberitahuan pengadilan palsu meminta saya mengunduh detail kasus yang dilampirkan.'
  },
  {
    id: 'gi8', word: 'Customs Impersonation', category: 'Government Impersonation',
    definition: 'Scammers posing as customs officers holding a package until you pay a clearance fee.',
    englishExample: 'The customs impersonation scammer showed a fake badge to legitimize the package fee.',
    languageCue: 'showed a fake badge',
    indonesianMeaning: 'Penipu menyamar sebagai petugas bea cukai yang menahan paket sampai Anda membayar biaya izin.',
    indonesianExample: 'Penipu bea cukai menunjukkan lencana palsu untuk melegitimasi biaya paket.'
  },
  {
    id: 'gi9', word: 'Government Grant Scam', category: 'Government Impersonation',
    definition: 'Claiming the victim is eligible for a free government grant, but must pay a processing fee.',
    englishExample: 'They told me I won a $5,000 grant, but the government grant scam required a $200 processing fee.',
    languageCue: 'required a $200 processing fee',
    indonesianMeaning: 'Mengklaim korban berhak atas dana hibah pemerintah, tetapi harus membayar biaya pemrosesan.',
    indonesianExample: 'Mereka bilang saya memenangkan dana bantuan $5.000, tapi penipuan hibah itu mengharuskan biaya administrasi $200.'
  },
  {
    id: 'gi10', word: 'Phony Traffic Ticket', category: 'Government Impersonation',
    definition: 'A fake SMS or email claiming you were caught speeding and must pay a fine via a specific link.',
    englishExample: 'I don\'t even own a car, so I knew the phony traffic ticket SMS was a scam.',
    languageCue: 'phony traffic ticket SMS',
    indonesianMeaning: 'SMS atau email palsu yang mengklaim Anda tertangkap mengebut dan harus membayar denda melalui tautan.',
    indonesianExample: 'Saya bahkan tidak punya mobil, jadi saya tahu SMS tiket tilang lalu lintas palsu itu adalah penipuan.'
  }
];

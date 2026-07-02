export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard' | 'Expert';

export interface QuizQuestion {
  id: string;
  difficulty: DifficultyLevel;
  scenarioEn: string;
  scenarioId: string;
  optionsEn: string[];
  optionsId: string[];
  correctAnswerIndex: number;
  explanationEn: string;
  explanationId: string;
  category: 'Phishing' | 'Romance Scam' | 'Investment Scam' | 'Job Scam' | 'Prize Scam' | 'Tech Support Scam' | 'Government Impersonation';
}

export const quizData: QuizQuestion[] = [
  // --- 1. PHISHING ---
  {
    id: 'q1',
    difficulty: 'Easy',
    scenarioEn: 'You receive an SMS: "Congratulations! Your account has been selected for a free reward. Click the link to secure your data: http://shopee-hadiah-resmi.com". What do you do?',
    scenarioId: 'Anda menerima SMS: "Selamat! Akun Anda terpilih untuk hadiah gratis. Klik link untuk mengamankan data Anda: http://shopee-hadiah-resmi.com". Apa yang Anda lakukan?',
    optionsEn: [
      'Click the link because I frequently shop online.',
      'Ignore and block the number because it is a phishing link.',
      'Reply to the SMS to ask if it is true.',
      'Forward it to all friends.'
    ],
    optionsId: [
      'Klik link tersebut karena saya memang sering belanja online.',
      'Abaikan dan blokir nomor tersebut karena itu link phishing.',
      'Balas SMS untuk menanyakan kebenarannya.',
      'Teruskan ke semua teman.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Scammers use fake look-alike links (phishing) disguised as well-known brands to harvest credentials.',
    explanationId: 'Penipu menggunakan link palsu yang mirip (phishing) berkedok merek terkenal untuk mencuri kredensial.',
    category: 'Phishing'
  },
  {
    id: 'q2',
    difficulty: 'Hard',
    scenarioEn: 'An email from "IT Department" states your institutional mailbox is full. It provides a login update link: "http://unsyiah-webmail-update.weebly.com" to upgrade storage.',
    scenarioId: 'Email dari "Departemen IT" menyatakan kotak surat institusi Anda penuh. Menyediakan tautan pembaruan login: "http://unsyiah-webmail-update.weebly.com" untuk menambah penyimpanan.',
    optionsEn: [
      'Click the link and log in so you do not lose your files.',
      'Reply to the email with your password to let them fix it.',
      'Ignore it because official domains do not use free hosting subdomains like Weebly.',
      'Forward it to all classmates.'
    ],
    optionsId: [
      'Klik tautan dan masuk agar tugas-tugas Anda tidak hilang.',
      'Balas email beserta kata sandi agar mereka bisa memperbaikinya.',
      'Abaikan karena domain resmi tidak menggunakan subdomain hosting gratis seperti Weebly.',
      'Teruskan ke semua teman sekelas.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Phishers use generic platforms to host fake credential harvesters. Real campuses use their official domains.',
    explanationId: 'Pelaku phishing menggunakan platform gratis untuk membuat halaman login palsu. Kampus asli menggunakan domain resmi.',
    category: 'Phishing'
  },

  // --- 2. ROMANCE SCAM ---
  {
    id: 'q3',
    difficulty: 'Medium',
    scenarioEn: 'Someone you met on a dating app a week ago suddenly showers you with declarations of love and asks for money to buy an urgent plane ticket to visit you.',
    scenarioId: 'Seseorang yang Anda kenal di aplikasi kencan seminggu yang lalu tiba-tiba menghujani Anda dengan pernyataan cinta dan meminta uang untuk membeli tiket pesawat darurat.',
    optionsEn: [
      'Send the money because you are deeply touched by their affection.',
      'Offer to buy the ticket yourself directly from the airline.',
      'Refuse, block the contact, and report the profile for a romance scam.',
      'Ask them to borrow money from their family first.'
    ],
    optionsId: [
      'Kirim uangnya karena Anda sangat tersentuh dengan kasih sayangnya.',
      'Tawarkan untuk membelikan tiket sendiri langsung dari maskapai.',
      'Tolak, blokir kontak, dan laporkan profil atas penipuan asmara.',
      'Minta mereka untuk meminjam uang dari keluarganya terlebih dahulu.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Romance scammers deploy love bombing to break down logical resistance before manufacturing a fake emergency.',
    explanationId: 'Penipu asmara menggunakan love bombing untuk melumpuhkan logika korban sebelum membuat keadaan darurat palsu.',
    category: 'Romance Scam'
  },
  {
    id: 'q4',
    difficulty: 'Expert',
    scenarioEn: 'An attractive internet friend requests intimate photos from you, and later threatens to leak them to your family unless you wire a specific amount of cash.',
    scenarioId: 'Teman internet yang menarik meminta foto intim dari Anda, dan kemudian mengancam akan menyebarkannya ke keluarga Anda kecuali Anda mengirimkan sejumlah uang.',
    optionsEn: [
      'Pay them immediately so your family never finds out.',
      'Argue with them to convince them to stop.',
      'Never pay; preserve the evidence, block them, and contact cyber police authorities.',
      'Deactivate all your accounts and ignore it.'
    ],
    optionsId: [
      'Bayar segera agar keluarga Anda tidak pernah tahu.',
      'Berdebat dengan mereka untuk meyakinkan mereka agar berhenti.',
      'Jangan pernah bayar; amankan bukti obrolan, blokir, dan hubungi pihak polisi siber.',
      'Nonaktifkan semua akun Anda dan abaikan saja.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'This is sextortion. Paying extortionists never guarantees safety; it only invites more aggressive financial demands.',
    explanationId: 'Ini adalah sekstorsi. Membayar pemeras tidak menjamin keamanan; itu hanya memicu tuntutan finansial yang lebih besar.',
    category: 'Romance Scam'
  },

  // --- 3. INVESTMENT SCAM ---
  {
    id: 'q5',
    difficulty: 'Medium',
    scenarioEn: 'You are added to a Telegram channel promising 500% daily guaranteed returns on automated crypto trading by converting cash into their system ledger.',
    scenarioId: 'Anda dimasukkan ke grup Telegram yang menjanjikan keuntungan pasti 500% per hari dari perdagangan kripto dengan mengubah uang tunai ke sistem mereka.',
    optionsEn: [
      'Invest a tiny amount to see if the ledger operates correctly.',
      'Ask other members in the channel to verify their screenshots.',
      'Report the channel for malicious fraud and exit immediately.',
      'Observe the trades for a few days.'
    ],
    optionsId: [
      'Investasikan nominal kecil untuk melihat apakah sistem beroperasi dengan benar.',
      'Tanya anggota lain di grup untuk memverifikasi tangkapan layar mereka.',
      'Laporkan grup atas penipuan berbahaya dan segera keluar.',
      'Amati perdagangan selama beberapa hari.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Guaranteed massive returns with zero risk are foundational characteristics of financial Ponzi schemes.',
    explanationId: 'Keuntungan besar yang dijamin pasti tanpa risiko adalah karakteristik mendasar dari skema Ponzi.',
    category: 'Investment Scam'
  },
  {
    id: 'q6',
    difficulty: 'Hard',
    scenarioEn: 'A verified social media page claims a new token is backed by billionaires and urges everyone to buy before the price skyrockets in the next hour.',
    scenarioId: 'Halaman media sosial terverifikasi mengklaim token baru didukung oleh miliarder dan mendesak semua orang untuk membeli sebelum harganya melonjak dalam satu jam ke depan.',
    optionsEn: [
      'Buy immediately to ensure you do not miss the profit wave.',
      'Research the whitepaper on official regulatory sites to spot pump-and-dump signs.',
      'Message the admin to ask for premium investment tips.',
      'Share the post with family.'
    ],
    optionsId: [
      'Beli segera agar tidak ketinggalan gelombang keuntungan.',
      'Riset berkas whitepaper di situs regulasi resmi untuk mencari tanda pump-and-dump.',
      'Kirim pesan ke admin untuk meminta tips investasi premium.',
      'Bagikan postingan tersebut ke keluarga.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Scammers execute pump-and-dump schemes by generating artificial hype, then selling off assets when victims inflate the price.',
    explanationId: 'Penipu menjalankan skema pump-and-dump dengan membuat sensasi palsu, lalu menjual aset mereka saat korban melambungkan harganya.',
    category: 'Investment Scam'
  },

  // --- 4. JOB SCAM ---
  {
    id: 'q7',
    difficulty: 'Easy',
    scenarioEn: 'An influencer ad offers $500 a day for simply liking online video tasks. However, you must pay a $50 administrative activation deposit first.',
    scenarioId: 'Iklan influencer menawarkan $500 sehari hanya untuk menyukai tugas video online. Namun, Anda harus membayar deposit aktivasi administrasi $50 terlebih dahulu.',
    optionsEn: [
      'Pay the $50 because the daily salary will return it quickly.',
      'Ignore it; legitimate jobs never require upfront employee deposits.',
      'Ask if you can pay the activation fee out of your first paycheck.',
      'Invite friends to join to get a referral fee.'
    ],
    optionsId: [
      'Bayar $50 karena gaji harian akan mengembalikannya dengan cepat.',
      'Abaikan; pekerjaan yang sah tidak pernah meminta deposit karyawan di muka.',
      'Tanya apakah Anda bisa membayar biaya aktivasi dari gaji pertama Anda.',
      'Ajak teman bergabung untuk mendapatkan komisi bonus.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Advance-fee task scams trick job seekers into paying setup costs for non-existent virtual employment rewards.',
    explanationId: 'Penipuan lowongan kerja berkedok tugas meminta korban membayar biaya di muka untuk pekerjaan fiktif.',
    category: 'Job Scam'
  },
  {
    id: 'q8',
    difficulty: 'Hard',
    scenarioEn: 'A remote company recruiter on Telegram hires you instantly without an interview and asks you to receive company funds into your personal bank account and wire it to their vendor.',
    scenarioId: 'Perekrut perusahaan jarak jauh di Telegram mempekerjakan Anda secara instan tanpa wawancara dan meminta Anda menerima dana perusahaan ke rekening pribadi lalu mentransfernya ke vendor mereka.',
    optionsEn: [
      'Process the transfer to demonstrate your excellent performance.',
      'Refuse and report; they are using you as an unwitting Money Mule to launder stolen money.',
      'Keep a small fee for yourself as a commission.',
      'Ask for official employment contracts first.'
    ],
    optionsId: [
      'Proses transfer untuk menunjukkan kinerja Anda yang luar biasa.',
      'Tolak dan laporkan; mereka memanfaatkan Anda sebagai Money Mule untuk mencuci uang curian.',
      'Simpan sebagian kecil dana sebagai komisi kerja Anda.',
      'Minta kontrak kerja resmi terlebih dahulu.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Scammers recruit money mules to move illegal funds, shifting the legal liability and criminal tracks onto the victim account.',
    explanationId: 'Penipu merekrut money mule untuk memindahkan dana ilegal, memindahkan tanggung jawab pidana ke rekening korban.',
    category: 'Job Scam'
  },

  // --- 5. PRIZE SCAM ---
  {
    id: 'q9',
    difficulty: 'Easy',
    scenarioEn: 'You win a brand new car from a national lucky draw contest that you never entered. The agent states you must wire a 1% customs clearance fee to claim it.',
    scenarioId: 'Anda memenangkan mobil baru dari undian nasional yang tidak pernah Anda ikuti. Agen menyatakan Anda harus mentransfer biaya bea cukai 1% untuk mengklaimnya.',
    optionsEn: [
      'Pay the fee immediately since 1% is tiny compared to a car.',
      'Recognize the advance-fee prize scam pattern and block the contact.',
      'Negotiate to subtract the 1% fee from the car value.',
      'Call relatives to borrow the registration cash.'
    ],
    optionsId: [
      'Bayar biaya segera karena 1% sangat kecil dibanding nilai sebuah mobil.',
      'Kenali pola penipuan hadiah dengan biaya di muka ini lalu blokir nomornya.',
      'Negosiasi agar biaya 1% tersebut dipotong dari nilai mobil saja.',
      'Telepon kerabat untuk meminjam uang pendaftaran tersebut.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'If an award requires upfront cash deposits under the guise of taxes or clearance fees, it is a guaranteed fraud scheme.',
    explanationId: 'Jika hadiah mewajibkan deposit tunai di muka dengan dalih pajak atau biaya administrasi, itu dipastikan penipuan.',
    category: 'Prize Scam'
  },
  {
    id: 'q10',
    difficulty: 'Medium',
    scenarioEn: 'An email states you won a $10,000 corporate giveaway, but warns you have a strict 2-hour claim deadline before the prize is reassigned.',
    scenarioId: 'Sebuah email menyatakan Anda memenangkan giveaway $10.000, tetapi memperingatkan adanya batas waktu klaim 2 jam sebelum hadiah dialihkan.',
    optionsEn: [
      'Hurry up and fill in your credit card details immediately.',
      'Ignore the artificial urgency designed to bypass critical thinking.',
      'Forward the coupon to friends to check its legitimacy.',
      'Reply asking for a deadline extension.'
    ],
    optionsId: [
      'Buru-buru mengisi detail kartu kredit Anda segera.',
      'Abaikan desakan waktu buatan yang dirancang untuk merusak logika berpikir kritis Anda.',
      'Teruskan kupon ke teman untuk mengecek keabsahannya.',
      'Balas email meminta perpanjangan batas waktu.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Artificial scarcity and urgent deadlines compress decision times, forcing emotional mistakes before verification can occur.',
    explanationId: 'Desakan waktu buatan mempersempit waktu berpikir, memaksa korban berbuat salah sebelum sempat melakukan verifikasi.',
    category: 'Prize Scam'
  },

  // --- 6. TECH SUPPORT SCAM ---
  {
    id: 'q11',
    difficulty: 'Medium',
    scenarioEn: 'A browser pop-up warning screams: "WINDOWS INFECTED WITH 5 VIRUS! Call security support at 1-800-SAFE immediately to prevent asset deletion!"',
    scenarioId: 'Pop-up browser berbunyi: "WINDOWS TERINFEKSI 5 VIRUS! Hubungi dukungan keamanan di 1-800-SAFE segera untuk mencegah penghapusan aset!"',
    optionsEn: [
      'Call the line to get active software assistance.',
      'Download the recommended cleaner tool extension immediately.',
      'Close the browser process and run a verified local offline virus scan.',
      'Restart the system and call the number.'
    ],
    optionsId: [
      'Hubungi nomor tersebut untuk mendapatkan bantuan perangkat lunak aktif.',
      'Unduh ekstensi pembersih yang disarankan segera.',
      'Tutup proses browser dan jalankan pemindaian virus lokal offline yang terverifikasi.',
      'Nyalakan ulang sistem lalu hubungi nomor telepon tersebut.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Tech support scams use scareware pop-ups to induce panic, pushing users to grant dangerous remote desktop control rights.',
    explanationId: 'Penipuan tech support menggunakan pop-up menakutkan (scareware) untuk memaksa pengguna memberikan akses remote desktop yang berbahaya.',
    category: 'Tech Support Scam'
  },
  {
    id: 'q12',
    difficulty: 'Expert',
    scenarioEn: 'A helpdesk engineer on the phone directs you to open the Windows Event Viewer log screen, pointing at common yellow warnings to prove your system hardware is corrupted.',
    scenarioId: 'Seorang teknisi helpdesk via telepon mengarahkan Anda membuka log Windows Event Viewer, menunjuk pesan peringatan kuning biasa untuk membuktikan hardware Anda rusak.',
    optionsEn: [
      'Purchase the software fix tool license they recommend.',
      'Hang up; normal operational system warnings are manipulated by scammers to simulate system failures.',
      'Grant them remote access to clear the log entries.',
      'Provide your computer password for automatic debugging.'
    ],
    optionsId: [
      'Beli lisensi alat perbaikan perangkat lunak yang mereka rekomendasikan.',
      'Tutup telepon; log sistem operasional normal dimanipulasi oleh penipu untuk mensimulasikan kerusakan.',
      'Berikan mereka akses jarak jauh untuk membersihkan entri log tersebut.',
      'Berikan kata sandi komputer Anda untuk proses debugging otomatis.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Scammers deploy the Event Viewer trick to present normal operational error histories as proof of a critical structural breach.',
    explanationId: 'Penipu menggunakan trik Event Viewer untuk memanipulasi riwayat log normal sebagai bukti kerusakan fatal.',
    category: 'Tech Support Scam'
  },

  // --- 7. GOVERNMENT IMPERSONATION ---
  {
    id: 'q13',
    difficulty: 'Medium',
    scenarioEn: 'You receive an urgent call from someone claiming to be a tax officer, demanding an immediate wire transfer to a state account due to a critical tax evasion penalty.',
    scenarioId: 'Anda menerima telepon darurat dari seseorang yang mengaku petugas pajak, menuntut transfer segera ke rekening negara karena denda pajak.',
    optionsEn: [
      'Comply immediately to avoid heavy penalties or police lockups.',
      'Hang up and verify directly through the official state tax domain office portal.',
      'Argue with the agent and give your national security numbers.',
      'Ask for a payment installment agreement.'
    ],
    optionsId: [
      'Patuhi segera untuk menghindari denda berat atau penahanan polisi.',
      'Tutup telepon dan verifikasi langsung melalui portal domain resmi kantor pajak negara.',
      'Berdebat dengan agen tersebut dan memberikan nomor identitas nasional Anda.',
      'Minta perjanjian cicilan pembayaran.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Official legal or revenue authorities communicate through formal written mail, never demanding immediate telephone cryptocurrency or banking wire actions.',
    explanationId: 'Otoritas hukum resmi berkomunikasi melalui surat tertulis formal, tidak pernah menuntut tindakan transfer bank instan via telepon.',
    category: 'Government Impersonation'
  },
  {
    id: 'q14',
    difficulty: 'Hard',
    scenarioEn: 'An unknown chat profile sends an arrest warrant document with official police headers, stating you are implicated in money laundering and must relocate funds to a verification bunker account.',
    scenarioId: 'Profil chat tak dikenal mengirim dokumen surat penangkapan berlogo kepolisian resmi, menyatakan Anda terlibat pencucian uang dan harus memindahkan dana ke rekening verifikasi.',
    optionsEn: [
      'Transfer funds swiftly to clear your record with investigators.',
      'Ignore it; law enforcement does not issue legal process notices or asset verification setups via instant messaging networks.',
      'Reply to the chat requesting a digital meeting session.',
      'Send photos of your local bank books to prove compliance.'
    ],
    optionsId: [
      'Transfer dana dengan cepat untuk membersihkan nama Anda di mata penyelidik.',
      'Abaikan; penegak hukum tidak menerbitkan surat perintah atau verifikasi aset melalui aplikasi pesan instan.',
      'Balas chat tersebut meminta sesi pertemuan digital.',
      'Kirim foto buku tabungan lokal Anda untuk membuktikan kepatuhan.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Scammers forge official headers and legal terminology to trigger institutional fear, making victims bypass normal transaction verification protocols.',
    explanationId: 'Penipu memalsukan kop surat dan bahasa hukum untuk memicu rasa takut, membuat korban melewati protokol verifikasi transaksi normal.',
    category: 'Government Impersonation'
  },
  {
    id: 'q15',
    difficulty: 'Expert',
    scenarioEn: 'You receive an urgent message from a high-ranking judge profile on WhatsApp stating a legal subpoena has been issued against your assets and demands immediate cash escrow processing.',
    scenarioId: 'Anda menerima pesan mendesak dari profil hakim tinggi di WhatsApp yang menyatakan panggilan pengadilan telah diterbitkan terhadap aset Anda dan menuntut proses jaminan tunai.',
    optionsEn: [
      'Process the payment immediately out of institutional respect.',
      'Block the profile; real courts never coordinate escrow instructions or asset legal updates via personal instant messengers.',
      'Send your bank statements for analysis.',
      'Ask a friend to finance the escrow setup.'
    ],
    optionsId: [
      'Proses pembayaran segera demi menghormati institusi hukum.',
      'Blokir profil tersebut; pengadilan asli tidak pernah mengatur instruksi jaminan atau pembaruan hukum aset via aplikasi chat pribadi.',
      'Kirim rekening koran bank Anda untuk dianalisis.',
      'Minta teman untuk mendanai biaya jaminan tersebut.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Judicial entities follow strict, physical legal service architectures and never employ digital chat environments to negotiate asset security bonds.',
    explanationId: 'Entitas peradilan mengikuti prosedur hukum fisik yang ketat dan tidak pernah menggunakan media chat digital untuk menegosiasikan jaminan aset.',
    category: 'Government Impersonation'
  }
];

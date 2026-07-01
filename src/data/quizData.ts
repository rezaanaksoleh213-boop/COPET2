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
  category?: string;
}

export const quizData: QuizQuestion[] = [
  {
    id: 'q1',
    difficulty: 'Easy',
    scenarioEn: 'You receive an SMS: "Congratulations! Your number has won Rp100 Million from Shopee. Click the following link to claim: http://shopee-hadiah-resmi.com". What do you do?',
    scenarioId: 'Anda menerima SMS: "Selamat! Nomor Anda memenangkan Rp100 Juta dari Shopee. Klik link berikut untuk klaim: http://shopee-hadiah-resmi.com". Apa yang Anda lakukan?',
    optionsEn: [
      'Click the link because I frequently shop at Shopee.',
      'Ignore and block the number because it is a scam.',
      'Reply to the SMS to ask if it is true.',
      'Share it with the family group so they can be happy too.'
    ],
    optionsId: [
      'Klik link tersebut karena saya memang sering belanja di Shopee.',
      'Abaikan dan blokir nomor tersebut karena itu penipuan.',
      'Balas SMS untuk menanyakan kebenarannya.',
      'Sebarkan ke grup keluarga biar mereka ikutan senang.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Scammers often use the lure of large prizes with fake links (phishing) to steal your data.',
    explanationId: 'Scammer sering menggunakan iming-iming hadiah besar dengan link palsu (phishing) untuk mencuri data Anda.',
    category: 'Greed / Iming-iming'
  },
  {
    id: 'q2',
    difficulty: 'Medium',
    scenarioEn: 'Someone calls claiming to be from Bank BCA, stating there are suspicious transactions on your account and asks for the OTP code just sent via SMS to block it.',
    scenarioId: 'Seseorang menelpon mengaku dari Bank BCA, mengatakan ada transaksi mencurigakan di rekening Anda dan meminta kode OTP yang baru saja dikirim via SMS untuk memblokirnya.',
    optionsEn: [
      'Give the OTP because they are an official bank employee trying to help.',
      'Hang up and immediately contact HaloBCA from the official number.',
      'Give half of the OTP code to test them.',
      'Get angry at the caller.'
    ],
    optionsId: [
      'Berikan OTP tersebut karena dia orang bank resmi yang mau membantu.',
      'Tutup telepon dan segera hubungi HaloBCA dari nomor resmi.',
      'Berikan setengah dari kode OTP untuk mengetes.',
      'Marah-marah kepada penelepon.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Real bank officials NEVER ask for your OTP code, PIN, or Password for any reason.',
    explanationId: 'Pihak bank asli TIDAK PERNAH meminta kode OTP, PIN, atau Password Anda dengan alasan apapun.',
    category: 'Authority / Otoritas Palsu'
  },
  {
    id: 'q3',
    difficulty: 'Hard',
    scenarioEn: 'You receive an email from "HRD Company X" (your target company) with a PDF attachment named "Form_Interview.exe".',
    scenarioId: 'Anda mendapat email dari "HRD Perusahaan X" (perusahaan incaran Anda) dengan lampiran PDF bernama "Form_Interview.exe".',
    optionsEn: [
      'Immediately open the attachment so you do not miss the interview schedule.',
      'Forward the email to a friend to have it checked.',
      'Be suspicious because a PDF file cannot have a .exe extension, and delete it.',
      'Reply to the email and ask for a different file format.'
    ],
    optionsId: [
      'Segera buka lampiran tersebut agar tidak ketinggalan jadwal interview.',
      'Forward email tersebut ke teman untuk dicek.',
      'Curiga karena file PDF tidak mungkin berekstensi .exe, lalu menghapusnya.',
      'Balas email tersebut dan minta format file lain.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Files with a .exe extension disguised as documents are usually Malware/Trojans ready to infect your device.',
    explanationId: 'File berekstensi .exe yang disamarkan sebagai dokumen biasanya adalah Malware/Trojan yang siap menginfeksi perangkat Anda.',
    category: 'Urgency / Desakan Waktu'
  },
  {
    id: 'q4',
    difficulty: 'Expert',
    scenarioEn: 'Your friend chats you on WhatsApp using a new number. Their writing style is very similar. They urgently ask to borrow money and provide a bank account under someone else\'s name.',
    scenarioId: 'Teman Anda menge-chat di WhatsApp menggunakan nomor barunya. Gaya bahasanya sangat mirip. Ia meminta pinjaman uang mendesak dan memberikan nomor rekening bernama orang lain.',
    optionsEn: [
      'Transfer immediately out of pity since the writing style is so similar.',
      'Call them on their old or new number, ask for a video call to confirm.',
      'Ignore it because you do not have money right now.',
      'Transfer a small amount just in case.'
    ],
    optionsId: [
      'Langsung transfer karena kasihan dan gaya bahasanya sangat mirip.',
      'Telepon dia ke nomor lama atau nomor baru tersebut, suruh dia video call untuk konfirmasi.',
      'Abaikan saja karena Anda sedang tidak punya uang.',
      'Transfer sebagian kecil saja untuk berjaga-jaga.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Social Engineering and Account Takeover techniques can mimic writing styles. Always verify via voice or video before transferring money to an unknown account.',
    explanationId: 'Teknik Social Engineering dan Account Takeover bisa meniru gaya bahasa. Selalu verifikasi via suara atau video sebelum mentransfer uang ke rekening tak dikenal.',
    category: 'Emotion / Manipulasi Emosi'
  },
  {
    id: 'q5',
    difficulty: 'Medium',
    scenarioEn: 'You are added to a Telegram group promising 500% daily returns on crypto investments by transferring funds to an "admin" account.',
    scenarioId: 'Anda dimasukkan ke grup Telegram yang menjanjikan keuntungan kripto 500% per hari dengan mentransfer dana ke rekening "admin".',
    optionsEn: [
      'Invest a small amount to see if it works.',
      'Ask the group members for proof of their profits.',
      'Report the group for spam and leave immediately.',
      'Wait and observe the group for a few days.'
    ],
    optionsId: [
      'Investasikan nominal kecil untuk melihat apakah itu berhasil.',
      'Tanya anggota grup tentang bukti keuntungan mereka.',
      'Laporkan grup tersebut sebagai spam dan segera keluar.',
      'Tunggu dan amati grup tersebut selama beberapa hari.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Unrealistic guaranteed returns are classic signs of a Ponzi scheme or investment scam. Testimonials are often fake accounts.',
    explanationId: 'Keuntungan pasti yang tidak masuk akal adalah tanda klasik skema Ponzi atau penipuan investasi. Testimoni seringkali berasal dari akun palsu.',
    category: 'Greed / Iming-iming'
  },
  {
    id: 'q6',
    difficulty: 'Hard',
    scenarioEn: 'You receive an automated call from someone claiming to be the Police, stating your identity was used for money laundering and offering to "secure" your funds.',
    scenarioId: 'Anda menerima telepon otomatis dari seseorang yang mengaku Polisi, menyatakan identitas Anda digunakan untuk pencucian uang dan menawarkan bantuan untuk "mengamankan" dana Anda.',
    optionsEn: [
      'Follow their instructions to transfer your money to their "safe account".',
      'Argue with them to prove your innocence.',
      'Hang up immediately; authorities do not ask to move your funds over a phone call.',
      'Provide your ID details so they can verify you are not the suspect.'
    ],
    optionsId: [
      'Ikuti instruksi mereka untuk mentransfer uang ke "rekening aman" mereka.',
      'Berdiam argumen untuk membuktikan Anda tidak bersalah.',
      'Tutup telepon segera; otoritas resmi tidak akan meminta memindahkan dana via telepon.',
      'Berikan detail KTP agar mereka bisa memverifikasi Anda bukan tersangka.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Scammers impersonate law enforcement to induce panic. Real police will never ask you to transfer money to a "safe account".',
    explanationId: 'Penipu menyamar sebagai penegak hukum untuk memicu kepanikan. Polisi asli tidak akan pernah meminta Anda mentransfer uang ke "rekening aman".',
    category: 'Authority / Otoritas Palsu'
  },
  {
    id: 'q7',
    difficulty: 'Easy',
    scenarioEn: 'A courier sends a WhatsApp message: "Please check the photo of your package" along with a file named "LIHAT_FOTO_PAKET.APK".',
    scenarioId: 'Seorang kurir mengirim pesan WhatsApp: "Tolong cek foto paket Anda" disertai dengan file bernama "LIHAT_FOTO_PAKET.APK".',
    optionsEn: [
      'Download and install the APK to see the package photo.',
      'Ignore the file, delete the chat, and block the sender.',
      'Ask the courier to send it via email instead.',
      'Open the file quickly and uninstall it right after.'
    ],
    optionsId: [
      'Unduh dan instal APK untuk melihat foto paket.',
      'Abaikan file tersebut, hapus obrolan, dan blokir pengirim.',
      'Minta kurir untuk mengirimkannya melalui email saja.',
      'Buka file tersebut dengan cepat dan langsung copot pemasangannya.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'APK files are Android applications, not photos. Installing them allows scammers to steal SMS OTPs and empty your bank account.',
    explanationId: 'File APK adalah aplikasi Android, bukan foto. Menginstalnya memungkinkan penipu mencuri SMS OTP dan menguras rekening bank Anda.',
    category: 'Urgency / Desakan Waktu'
  },
  {
    id: 'q8',
    difficulty: 'Medium',
    scenarioEn: 'Someone you met on a dating app a month ago suddenly asks for money to buy a flight ticket to visit you.',
    scenarioId: 'Seseorang yang Anda kenal di aplikasi kencan sebulan yang lalu tiba-tiba meminta uang untuk membeli tiket pesawat agar bisa mengunjungi Anda.',
    optionsEn: [
      'Send the money because you really want to meet them.',
      'Offer to buy the ticket yourself directly from the airline.',
      'Refuse, block the contact, and report their profile for romance scamming.',
      'Ask them to borrow money from their family first.'
    ],
    optionsId: [
      'Kirim uangnya karena Anda sangat ingin bertemu dengannya.',
      'Tawarkan untuk membelikan tiket sendiri langsung dari maskapai.',
      'Tolak, blokir kontak, dan laporkan profil mereka atas penipuan asmara.',
      'Minta mereka untuk meminjam uang dari keluarganya terlebih dahulu.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Romance scammers build emotional connections before creating fake emergencies to ask for money. Never send money to someone you have not met in person.',
    explanationId: 'Pelaku romance scam membangun ikatan emosional sebelum membuat keadaan darurat palsu untuk meminta uang. Jangan pernah kirim uang ke orang yang belum pernah ditemui langsung.',
    category: 'Emotion / Manipulasi Emosi'
  },
  {
    id: 'q9',
    difficulty: 'Hard',
    scenarioEn: 'You get an email from "Tax_Office_Support@gmail.com" threatening to freeze your assets if you do not pay a penalty via a provided crypto wallet.',
    scenarioId: 'Anda mendapat email dari "Tax_Office_Support@gmail.com" yang mengancam akan membekukan aset Anda jika tidak membayar denda melalui dompet kripto yang disediakan.',
    optionsEn: [
      'Pay immediately to avoid having your assets frozen.',
      'Check the sender\'s email domain; official government emails do not use @gmail.com.',
      'Reply with a screenshot of your tax returns to prove you paid.',
      'Forward the email to your accountant to handle the payment.'
    ],
    optionsId: [
      'Bayar segera untuk menghindari pembekuan aset Anda.',
      'Periksa domain email pengirim; email resmi pemerintah tidak menggunakan @gmail.com.',
      'Balas dengan tangkapan layar SPT Anda untuk membuktikan Anda sudah membayar.',
      'Teruskan email ke akuntan Anda untuk mengurus pembayarannya.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Official government institutions use specific domains (e.g., .go.id or .gov) and never request payments via cryptocurrency.',
    explanationId: 'Institusi pemerintah resmi menggunakan domain spesifik (misal, .go.id) dan tidak pernah meminta pembayaran melalui mata uang kripto.',
    category: 'Authority / Otoritas Palsu'
  },
  {
    id: 'q10',
    difficulty: 'Easy',
    scenarioEn: 'An ad on social media offers $500 a day for watching videos. You just need to pay a $50 "registration fee" first.',
    scenarioId: 'Sebuah iklan di media sosial menawarkan bayaran $500 sehari untuk menonton video. Anda hanya perlu membayar "biaya pendaftaran" sebesar $50 terlebih dahulu.',
    optionsEn: [
      'Pay the $50 because you will make it back easily.',
      'Share the ad with friends so you can all make money.',
      'Recognize it as an advance-fee scam and report the ad.',
      'Ask the advertiser if you can pay the fee from your first paycheck.'
    ],
    optionsId: [
      'Bayar $50 karena modalnya akan cepat kembali.',
      'Bagikan iklan ke teman-teman agar kalian semua bisa menghasilkan uang.',
      'Sadar bahwa itu adalah penipuan berkedok biaya di muka dan laporkan iklannya.',
      'Tanya pemasang iklan apakah Anda bisa membayar biaya dari gaji pertama.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Legitimate jobs will never ask you to pay your own money to start working. This is a classic advance-fee task scam.',
    explanationId: 'Pekerjaan yang sah tidak akan pernah meminta Anda membayar uang untuk mulai bekerja. Ini adalah penipuan tugas berkedok biaya di muka.',
    category: 'Greed / Iming-iming'
  },
  {
    id: 'q11',
    difficulty: 'Medium',
    scenarioEn: 'A pop-up on a website flashes: "WARNING! Your computer is infected with 5 viruses. Call Apple Support at 1-800-XXX-XXXX immediately!"',
    scenarioId: 'Sebuah pop-up di situs web berkedip: "PERINGATAN! Komputer Anda terinfeksi 5 virus. Segera hubungi Dukungan Apple di 1-800-XXX-XXXX!"',
    optionsEn: [
      'Call the number to get help removing the viruses.',
      'Click the pop-up to download the recommended antivirus.',
      'Close the browser tab and run a scan with your actual installed antivirus.',
      'Restart the computer and call the number later.'
    ],
    optionsId: [
      'Hubungi nomor tersebut untuk mendapatkan bantuan menghapus virus.',
      'Klik pop-up untuk mengunduh antivirus yang disarankan.',
      'Tutup tab browser dan jalankan pemindaian dengan antivirus asli yang terinstal.',
      'Nyalakan ulang komputer dan hubungi nomor itu nanti.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Tech support scams use scary pop-ups. Real OS warnings do not ask you to call a toll-free number.',
    explanationId: 'Penipuan dukungan teknis menggunakan pop-up yang menakutkan. Peringatan OS asli tidak akan menyuruh Anda menelepon nomor bebas pulsa.',
    category: 'Urgency / Desakan Waktu'
  },
  {
    id: 'q12',
    difficulty: 'Expert',
    scenarioEn: 'You tweet a complaint about a delayed flight. An account named "@CS_Airlines_Care" replies asking for your booking reference and passport photo via DM.',
    scenarioId: 'Anda mencuit keluhan tentang penundaan penerbangan di Twitter. Akun bernama "@CS_Airlines_Care" membalas dan meminta kode booking serta foto paspor via DM.',
    optionsEn: [
      'Send the details via DM so they can process your refund quickly.',
      'Check the account for a verified badge and past tweet history before interacting.',
      'Post the details publicly to shame the airline into acting faster.',
      'Reply to the tweet and ask them to call you instead.'
    ],
    optionsId: [
      'Kirim detail via DM agar mereka bisa memproses pengembalian dana dengan cepat.',
      'Periksa akun tersebut apakah memiliki lencana terverifikasi dan riwayat cuitan sebelum berinteraksi.',
      'Posting detail secara publik untuk mempermalukan maskapai agar bertindak lebih cepat.',
      'Balas cuitan dan minta mereka menelepon Anda saja.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'Scammers monitor complaints to impersonate customer service. Always verify the authenticity of the account before sharing personal data.',
    explanationId: 'Penipu memantau keluhan untuk menyamar sebagai layanan pelanggan. Selalu verifikasi keaslian akun sebelum membagikan data pribadi.',
    category: 'Authority / Otoritas Palsu'
  },
  {
    id: 'q13',
    difficulty: 'Expert',
    scenarioEn: 'You receive an urgent late-night call from someone sounding exactly like your sibling, crying, saying they caused an accident and need bail money sent immediately.',
    scenarioId: 'Anda menerima telepon darurat larut malam dari seseorang yang suaranya persis seperti saudara Anda, menangis, mengatakan ia menabrak orang dan butuh uang jaminan segera.',
    optionsEn: [
      'Transfer the money immediately to get them out of trouble.',
      'Stay on the line, but use another phone to call your sibling\'s actual number or parents.',
      'Start crying and apologize that you have no money.',
      'Ask the police officer on the phone to give you a discount on the bail.'
    ],
    optionsId: [
      'Langsung transfer uang untuk mengeluarkan mereka dari masalah.',
      'Tetap di telepon, tapi gunakan ponsel lain untuk menelepon nomor asli saudara atau orang tua Anda.',
      'Ikut menangis dan minta maaf karena Anda tidak punya uang.',
      'Minta polisi di telepon untuk memberi Anda diskon uang jaminan.'
    ],
    correctAnswerIndex: 1,
    explanationEn: 'AI voice cloning makes "grandparent scams" very realistic. Always verify the emergency by calling the person directly on their known number.',
    explanationId: 'Kloning suara AI membuat penipuan kedaruratan sangat realistis. Selalu verifikasi keadaan darurat dengan menelepon orang tersebut langsung di nomor yang dikenal.',
    category: 'Emotion / Manipulasi Emosi'
  },
  {
    id: 'q14',
    difficulty: 'Hard',
    scenarioEn: 'An email from "IT Department" states your university email quota is full. It provides a link: "http://unsyiah-webmail-update.weebly.com" to upgrade storage.',
    scenarioId: 'Email dari "Departemen IT" menyatakan kuota email universitas Anda penuh. Tersedia tautan: "http://unsyiah-webmail-update.weebly.com" untuk menambah penyimpanan.',
    optionsEn: [
      'Click the link and log in so you do not lose your assignments.',
      'Reply to the email with your password to let them upgrade it manually.',
      'Ignore it because official university systems do not use free hosting subdomains like Weebly.',
      'Forward it to all your classmates to warn them about the quota.'
    ],
    optionsId: [
      'Klik tautan dan masuk agar tugas-tugas Anda tidak hilang.',
      'Balas email beserta kata sandi agar mereka bisa mengupgradenya secara manual.',
      'Abaikan karena sistem resmi universitas tidak menggunakan subdomain hosting gratis seperti Weebly.',
      'Teruskan ke semua teman sekelas untuk memperingatkan mereka tentang kuota.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Phishers often disguise attacks as IT alerts. The URL uses a free website builder (.weebly.com) instead of an official .ac.id domain.',
    explanationId: 'Pelaku phising sering menyamarkan serangan sebagai peringatan IT. URL tersebut menggunakan pembuat situs web gratis (.weebly.com) alih-alih domain resmi kampus.',
    category: 'Authority / Otoritas Palsu'
  },
  {
    id: 'q15',
    difficulty: 'Easy',
    scenarioEn: 'An influencer you follow on Instagram posts a story: "I am giving away 5 iPhone 15s! Just pay $10 for shipping at this link to claim yours!"',
    scenarioId: 'Influencer yang Anda ikuti di Instagram memposting story: "Saya membagikan 5 iPhone 15! Cukup bayar $10 untuk ongkir di link ini untuk mengklaim milikmu!"',
    optionsEn: [
      'Pay the $10 shipping fee; it is a great deal for a new phone.',
      'Send a DM to thank the influencer for their generosity.',
      'Assume the influencer\'s account was hacked and report the story as a scam.',
      'Tag your friends in the comments so they can win too.'
    ],
    optionsId: [
      'Bayar ongkos kirim $10; ini kesepakatan bagus untuk ponsel baru.',
      'Kirim DM untuk berterima kasih kepada influencer atas kemurahan hatinya.',
      'Berasumsi bahwa akun influencer telah diretas dan laporkan story tersebut sebagai penipuan.',
      'Tandai teman Anda di kolom komentar agar mereka juga bisa menang.'
    ],
    correctAnswerIndex: 2,
    explanationEn: 'Account takeovers are common. Legitimate giveaways never require you to pay upfront shipping fees via suspicious external links.',
    explanationId: 'Peretasan akun sering terjadi. Giveaway yang sah tidak pernah mengharuskan Anda membayar ongkos kirim di muka melalui tautan eksternal yang mencurigakan.',
    category: 'Greed / Iming-iming'
  }
];

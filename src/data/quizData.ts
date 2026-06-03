export type PlatformType = 'email' | 'whatsapp';

export interface QuizScenario {
  id: string;
  platform: PlatformType;
  senderName: string;
  senderAddress?: string; // For emails
  subject?: string; // For emails
  content: string;
  isScam: boolean;
  explanation: string;
  clues: string[];
}

export const quizScenarios: QuizScenario[] = [
  {
    id: 'q1',
    platform: 'email',
    senderName: 'PayPaI Support', // Notice the capital 'I' instead of 'l'
    senderAddress: 'security@paypal-update-info.com',
    subject: 'URGENT: Your account has been limited',
    content: 'Dear Customer,\n\nWe noticed unusual activity on your account. To prevent immediate suspension, please click the link below to verify your identity within 24 hours.\n\n[Verify Account Now]',
    isScam: true,
    explanation: 'This is a classic phishing email. It uses a generic greeting ("Dear Customer"), artificial urgency ("immediate suspension", "within 24 hours"), a spoofed sender name (PayPaI with a capital I), and a fake domain (paypal-update-info.com).',
    clues: ['Generic Greeting', 'Urgency', 'Fake Domain', 'Spoofed Name']
  },
  {
    id: 'q2',
    platform: 'whatsapp',
    senderName: '+62 812-3456-7890',
    content: 'Hi Mom, I dropped my phone in the toilet and this is my new temporary number. I urgently need to pay a bill but my banking app is locked on the old phone. Can you transfer 500k to this virtual account? 8090123456.',
    isScam: true,
    explanation: 'This is the "Hey Mom/Dad" scam. Scammers impersonate family members using unknown numbers, create an emergency (broken phone), and ask for immediate financial help.',
    clues: ['Unknown Number', 'Urgent Request for Money', 'Impersonation']
  },
  {
    id: 'q3',
    platform: 'email',
    senderName: 'Spotify',
    senderAddress: 'no-reply@spotify.com',
    subject: 'Your receipt for Spotify Premium',
    content: 'Hi Alex,\n\nThanks for your purchase. Your subscription for Spotify Premium has been renewed. Total: $9.99.\n\nIf you have any questions, visit our help center.',
    isScam: false,
    explanation: 'This is a legitimate receipt. It uses the user\'s actual name, comes from the official domain (@spotify.com), and does not ask for personal information or use threatening urgency.',
    clues: ['Official Domain', 'Personalized Greeting', 'No Urgent Demands']
  },
  {
    id: 'q4',
    platform: 'email',
    senderName: 'HR Department',
    senderAddress: 'hr@yourcompany-portal.net',
    subject: 'Action Required: Updated Employee Handbook',
    content: 'Hello Team,\n\nPlease review the updated Employee Handbook for 2026 attached to this email. You must sign the acknowledgment page by EOD today.\n\nAttachment: Employee_Handbook_2026.pdf.exe',
    isScam: true,
    explanation: 'This is a malware distribution scam. The sender domain is suspicious (likely not the real company domain), it creates false urgency ("by EOD today"), and the attachment has a double extension (.pdf.exe) which means it is an executable malware file, not a PDF.',
    clues: ['Suspicious Domain', 'Urgency', 'Dangerous Attachment (.exe)']
  },
  {
    id: 'q5',
    platform: 'whatsapp',
    senderName: 'Shopee Promo',
    content: '🎉 CONGRATULATIONS! 🎉\nYour number has been selected to win Rp 10.000.000 from the Shopee Mega Cashback Promo! 💰\n\nClick this link to claim your prize before it expires: http://shopee-claim-prize.vip/winner\n\nDo not share this code: 9942',
    isScam: true,
    explanation: 'This is a prize scam. Legitimate companies do not randomly select phone numbers for huge cash prizes. The link is a fake domain (not shopee.co.id), and it uses excessive emojis and false urgency.',
    clues: ['Too Good to Be True', 'Fake Link', 'Unsolicited Prize']
  }
];

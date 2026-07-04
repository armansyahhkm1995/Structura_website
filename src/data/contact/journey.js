import {
  ClipboardCheck,
  Handshake,
  ClipboardList,
  MessageCircle,
  HardHat,
} from "lucide-react";

export const steps = [
  {
    title: "Hubungi Kami",
    desc: "Hubungi kami melalui WhatsApp untuk menceritakan rencana pembangunan Anda. Belum memiliki gambar, RAB, atau dokumen lengkap pun tidak masalah.",
    icon: MessageCircle,
  },
  {
    title: "Diskusi Kebutuhan Proyek",
    desc: "Kami akan memahami kebutuhan Anda, seperti fungsi bangunan, lokasi, target anggaran, preferensi desain, serta kendala yang sedang dihadapi.",
    icon: ClipboardList,
  },
  {
    title: "Rekomendasi Solusi & Penawaran",
    desc: "Berdasarkan hasil diskusi, kami akan merekomendasikan layanan yang paling sesuai beserta ruang lingkup pekerjaan, estimasi waktu, dan penawaran biaya secara transparan.",
    icon: ClipboardCheck,
  },
  {
    title: "Mulai Kolaborasi",
    desc: "Setelah ruang lingkup pekerjaan disepakati, kami mulai mengerjakan proyek sesuai tahapan yang telah direncanakan dan selalu menginformasikan perkembangan pekerjaan secara berkala.",
    icon: Handshake,
  },
];

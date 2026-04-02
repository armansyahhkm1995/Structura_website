import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: "faq-1",
      question: "Apakah layanan ini cocok untuk proyek saya?",
      answer:
        "Layanan kami dirancang untuk berbagai tipe proyek, mulai dari rumah tinggal, bangunan komersial kecil hingga menengah, hingga infrastruktur skala ringan. Jika proyek Anda membutuhkan kejelasan biaya sebelum pembangunan dimulai, maka layanan ini sangat relevan.",
    },
    {
      id: "faq-2",
      question: "Apakah saya harus sudah punya gambar desain?",
      answer:
        "Tidak harus. Jika sudah ada gambar, kami bisa langsung menyusun RAB dan BOQ yang lebih akurat. Jika belum, kami tetap dapat membantu membuat estimasi biaya awal berbasis asumsi yang realistis.",
    },
    {
      id: "faq-3",
      question: "Apa perbedaan RAB dari Structura dengan dari kontraktor?",
      answer:
        "RAB dari kontraktor biasanya disusun untuk kebutuhan pelaksanaan proyek mereka. Sementara dari Structura disusun secara independen, lebih transparan, dan fokus pada kontrol biaya Anda sebagai pemilik proyek.",
    },
    {
      id: "faq-4",
      question: "Seberapa akurat estimasi biaya yang diberikan?",
      answer:
        "Akurasi bergantung pada data yang tersedia. Namun kami menyusun estimasi dengan pendekatan profesional melalui breakdown pekerjaan detail, analisis harga satuan, dan penyesuaian kondisi proyek.",
    },
    {
      id: "faq-5",
      question: "Berapa lama proses pengerjaannya?",
      answer:
        "Umumnya proyek rumah memakan waktu 3–7 hari kerja, komersial kecil 5–10 hari kerja, dan infrastruktur ringan menyesuaikan scope proyek.",
    },
    {
      id: "faq-6",
      question:
        "Apakah saya tetap perlu kontraktor jika sudah punya RAB & BOQ?",
      answer:
        "Ya. RAB & BOQ berfungsi sebagai acuan biaya, alat kontrol, dan dasar evaluasi penawaran kontraktor agar Anda tidak bergantung sepenuhnya.",
    },
    {
      id: "faq-7",
      question: "Apakah bisa membantu revisi atau optimasi biaya?",
      answer:
        "Bisa. Kami memberikan rekomendasi efisiensi, alternatif material, serta insight untuk mengoptimalkan anggaran tanpa mengorbankan kualitas.",
    },
    {
      id: "faq-8",
      question: "Bagaimana jika di tengah jalan ada perubahan desain?",
      answer:
        "Kami dapat membantu menyesuaikan RAB & BOQ serta menghitung dampak biaya dari perubahan tersebut agar tetap terkontrol.",
    },
    {
      id: "faq-9",
      question: "Berapa biaya layanan ini?",
      answer:
        "Biaya tergantung tipe proyek, luas, dan kompleksitas. Namun secara umum jauh lebih kecil dibanding potensi kerugian akibat salah perencanaan biaya.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Pertanyaan yang Sering{" "}
            <span className="text-primary">Diajukan</span>
          </h1>
          <p className="text-gray-600">
            Beberapa hal yang mungkin masih Anda pertimbangkan sebelum memulai.
          </p>
        </div>

        {/* GRID FIXED (NO SHIFT BUG) */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {faqs
              .filter((_, i) => i % 2 === 0)
              .map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  openId={openId}
                  setOpenId={setOpenId}
                />
              ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {faqs
              .filter((_, i) => i % 2 !== 0)
              .map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  openId={openId}
                  setOpenId={setOpenId}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================================================== */
/* FAQ ITEM */
/* ===================================================== */

function FAQItem({ faq, openId, setOpenId }) {
  const isOpen = openId === faq.id;

  return (
    <motion.div
      layout
      onClick={() => setOpenId(isOpen ? null : faq.id)}
      className={`bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer ${
        isOpen ? "border-primary/40 bg-primary/5" : ""
      }`}
    >
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium text-gray-900">{faq.question}</h3>

        {/* ICON */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </div>

      {/* ANSWER */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-sm mt-4 leading-relaxed text-left">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { MapPin, FileText, Layers, DollarSign } from "lucide-react";
import { whatsappLink } from "../utils/whatsapp";
import FinalCTA from "../components/sections/FinalCTA";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-4xl mx-auto px-6 text-left md:text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold mb-6 leading-tight"
          >
            <strong>
              Konsultasikan Rencana Proyek Anda
              <em className="text-primary"> dengan Lebih Terarah</em>
            </strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 max-w-2xl mx-auto md:pl-50"
          >
            Dapatkan gambaran biaya, potensi risiko, dan insight profesional
            sebelum Anda memulai pembangunan.
          </motion.p>
        </div>
      </section>

      {/* ================= MAP + INFO ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-stretch">
            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border shadow-sm"
            >
              <iframe
                src="https://www.google.com/maps?q=-6.9424084,107.6614363&z=17&output=embed"
                className="w-full h-full min-h-[400px]"
                loading="lazy"
              />
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-2xl font-semibold mb-4 text-left">
                Lokasi & Konsultasi
              </h1>

              <p className="text-gray-600 mb-6 text-left pb-4">
                Kami melayani konsultasi secara online maupun offline. Anda
                dapat mengunjungi lokasi kami atau langsung berdiskusi melalui
                WhatsApp.
              </p>

              <div className="flex items-center gap-3 text-gray-700 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Margahayu Raya, Bandung, Jawa Barat</span>
              </div>

              <a
                href="https://www.google.com/maps/place/Jupiter+Vape/@-6.9423841,107.6614829"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >
                Buka di Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PREPARATION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl font-semibold mb-4">
              Agar Konsultasi Lebih{" "}
              <span className="text-primary">Optimal</span>
            </h1>
            <p className="text-gray-600">
              Semakin lengkap data yang Anda miliki, semakin akurat analisis
              yang dapat kami berikan.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Gambar / Denah",
                desc: "Denah, layout, atau gambar desain awal proyek Anda.",
                icon: FileText,
              },
              {
                title: "Referensi Bangunan",
                desc: "Contoh bangunan atau style yang ingin Anda capai.",
                icon: Layers,
              },
              {
                title: "Kebutuhan & Luas",
                desc: "Fungsi ruang dan estimasi luas bangunan.",
                icon: Layers,
              },
              {
                title: "Spesifikasi Kualitas",
                desc: "Basic, standard, atau premium sesuai target Anda.",
                icon: FileText,
              },
              {
                title: "Target Anggaran",
                desc: "Estimasi budget awal jika sudah tersedia.",
                icon: DollarSign,
              },
              {
                title: "Catatan Tambahan",
                desc: "Hal khusus yang ingin Anda capai dalam proyek.",
                icon: FileText,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* ICON */}
                  <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
                    <Icon className="w-5 h-5 text-gray-700 transition-colors duration-300" />
                  </div>

                  <h3 className="font-semibold mb-2 text-gray-900 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <FinalCTA />
    </div>
  );
}

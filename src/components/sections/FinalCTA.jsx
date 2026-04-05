import { whatsappLink } from "../../utils/whatsapp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-left md:text-center">
        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-6 !text-white"
        >
          Rencanakan Proyek Anda dengan Lebih Terarah—Sebelum Terlambat
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 mb-10 max-w-2xl mx-auto md:pl-50 pb-6"
        >
          Dapatkan gambaran biaya yang jelas, hindari pembengkakan anggaran, dan
          ambil keputusan proyek dengan lebih percaya diri sejak awal.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* PRIMARY */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition text-center"
          >
            Konsultasikan Proyek Anda Sekarang
          </a>

          {/* SECONDARY */}
          <button
            onClick={() => navigate("/portfolio")}
            className="border border-white/40 px-8 py-4 rounded-xl text-white hover:bg-white/10 transition text-center"
          >
            Lihat Portfolio kami
          </button>
        </motion.div>
      </div>
    </section>
  );
}

import { whatsappLink } from "../../../utils/whatsapp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { compro } from "../../../utils/ComproStructura";

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
          Mari Wujudkan Pembangunan yang Sesuai Anggaran, Tanpa Mengorbankan
          Kualitas
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 mb-10 max-w-2xl mx-auto md:pl-50 pb-6"
        >
          Kami siap membantu Anda merencanakan pembangunan dengan lebih percaya
          diri melalui desain yang matang, anggaran yang realistis, dan
          pendampingan yang transparan sejak awal hingga proyek berjalan.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            {/* PRIMARY */}
            <a
              href={compro}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition text-center"
            >
              Unduh Compro Kami
            </a>

            {/* SECONDARY */}

            <button
              onClick={() => navigate("/Portfolio")}
              className="px-6 py-3 rounded-lg border border-gray-300 text-white hover:bg-gray-100 transition"
            >
              Lihat Portofolio Kami
            </button>
          </div>
        </motion.div>
        {/* Trust indicator */}
        <div className="mt-10 mb-10 text-center md:pl-25 mx-auto flex gap-5 text-sm text-white/80">
          <span>Konsultasi awal tanpa biaya</span>
          <span>Tanpa kewajiban menggunakan layanan</span>
          <span>Diskusi langsung melalui WhatsApp</span>
        </div>
      </div>
    </section>
  );
}

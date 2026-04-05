import { motion } from "framer-motion";

export default function ServiceHeroSection() {
  return (
    <div>
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
              Perencanaan Biaya Konstruksi yang
              <em className="text-primary"> Terstruktur & Terukur</em>
            </strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 max-w-2xl mx-auto md:pl-50"
          >
            Kami membantu Anda memahami, merencanakan, dan mengontrol biaya
            proyek secara menyeluruh—mulai dari estimasi awal hingga analisis
            detail— sehingga setiap keputusan yang diambil memiliki dasar yang
            jelas.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

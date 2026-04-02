import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="py-28 relative overflow-hidden">
        {/* subtle background */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-5xl mx-auto px-6 text-left md:text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold leading-tight mb-6 "
          >
            <strong>
              Membantu Anda Merencanakan Biaya Pembangunan{" "}
              <em className="text-primary">dengan Lebih Terukur</em>
            </strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed md:pl-50"
          >
            Structura adalah konsultan biaya konstruksi yang berfokus pada
            perencanaan dan analisis biaya sebelum proyek dimulai—agar Anda
            dapat mengambil keputusan dengan lebih percaya diri.
          </motion.p>
        </div>
      </section>

      {/* ================= WHY STRUCTURA ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Mengapa <span className="text-primary">Structura</span>
            </h1>
            <p className="text-gray-600">
              Banyak proyek mengalami masalah bukan karena konstruksi—tetapi
              karena perencanaan biaya yang tidak tepat sejak awal.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Fokus Sebelum Konstruksi",
                desc: "Kami bekerja di tahap awal untuk memastikan biaya proyek sudah jelas sebelum pembangunan dimulai.",
              },
              {
                title: "Independent & Objektif",
                desc: "Tidak terikat kontraktor, seluruh analisis difokuskan untuk kepentingan Anda sebagai pemilik proyek.",
              },
              {
                title: "Berbasis Data & Struktur",
                desc: "Pendekatan kami menggunakan perhitungan sistematis, bukan estimasi kasar.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Pendekatan <span className="text-primary">Kami</span>
            </h1>
            <p className="text-gray-600">
              Kami tidak hanya memberikan angka—kami membantu Anda memahami dan
              mengontrol biaya proyek secara menyeluruh.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Objective & Independent",
                desc: "Analisis biaya dilakukan tanpa bias terhadap pihak pelaksana.",
              },
              {
                title: "Pre-Construction Focus",
                desc: "Seluruh proses difokuskan sebelum proyek dimulai untuk menghindari risiko di lapangan.",
              },
              {
                title: "Structured Cost Analysis",
                desc: "Menggunakan breakdown BOQ dan RAB yang detail dan terukur.",
              },
              {
                title: "Decision-Oriented",
                desc: "Output kami membantu Anda mengambil keputusan, bukan sekadar memberikan angka.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import story_image from "../../../assets/portfolio/awang_sabrang_tenggarong/awang_sabrang_1.webp";
import { highlights } from "../../../data/about/highlights";

export default function Story() {
  return (
    <section id="story" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={story_image}
              alt="Perjalanan Structura sebagai jasa arsitek Bandung dan konsultan konstruksi"
              className="w-full h-full object-cover rounded-xl shadow-sm relative hidden md:flex items-stretch"
            />
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-left text-primary font-medium">Cerita Kami</p>

            <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-left">
              Sebagian Besar Masalah Pembangunan
              <span className="text-primary">
                {" "}
                Dapat Dicegah Sejak Tahap Perencanaan.
              </span>
            </h1>

            <div className="space-y-6 text-gray-600 leading-8">
              <p className="text-gray-600 text-left">
                Selama lebih dari tiga dekade terlibat dalam berbagai proyek
                rumah tinggal, bangunan komersial, hingga infrastruktur sipil,
                kami melihat pola yang sama terus berulang. Pembengkakan biaya,
                perubahan pekerjaan, keterlambatan proyek, hingga konflik di
                lapangan sering kali dianggap sebagai masalah pelaksanaan.
              </p>

              <p className="text-gray-600 text-left">
                Dari pengalaman tersebut kami menyadari bahwa akar permasalahan
                justru muncul jauh sebelum pembangunan dimulai, yaitu ketika
                keputusan penting dibuat tanpa perencanaan yang matang,
                informasi yang jelas, dan dokumen yang memadai. Melalui
                Structura, kami membantu owner mengambil keputusan sejak tahap
                desain, perencanaan struktur, penyusunan RAB, hingga
                pendampingan pembangunan agar proyek berjalan lebih aman,
                efisien, dan sesuai anggaran.
              </p>
            </div>
          </motion.div>
        </div>

        {/* HIGHLIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-4xl font-bold text-primary text-left mb-4">
                {item.number}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed text-left">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

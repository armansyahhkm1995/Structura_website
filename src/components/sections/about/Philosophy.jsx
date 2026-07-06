import { motion } from "framer-motion";
import { philosophies } from "../../../data/about/philosophies";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-medium text-left md:text-center">
            Filosofi kami
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-left md:text-center">
            Kami Percaya Bahwa Bangunan yang Baik
            <span className="text-primary">
              {" "}
              Dimulai dari Keputusan yang Tepat.
            </span>
          </h1>

          <p className="text-gray-600 leading-relaxed text-left md:text-center">
            Sebagai <strong>jasa arsitek Bandung</strong> dan konsultan
            konstruksi, kami percaya bahwa setiap keputusan dalam proses desain,
            perencanaan, maupun pembangunan harus membantu owner membangun
            sesuai anggaran tanpa mengorbankan kualitas, keselamatan, dan
            kenyamanan.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-8">
          {philosophies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl border p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-left text-xl font-semibold text-primary mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-left leading-8">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CLOSING */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-20 text-center"
        >
          <blockquote className="italic text-xl text-gray-700 leading-relaxed text-left md:text-center">
            "Bagi kami, desain yang baik bukan hanya menghasilkan bangunan yang
            indah, tetapi juga keputusan yang tepat sejak awal agar pembangunan
            berjalan aman, efisien, dan sesuai anggaran."
          </blockquote>

          <p className="mt-6 font-medium text-primary text-left md:text-center">
            — Structura
          </p>
        </motion.div>
      </div>
    </section>
  );
}

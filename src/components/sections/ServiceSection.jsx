import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ServiceSection({
  title,
  desc,
  points,
  image,
  reverse,
}) {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE (LEFT kalau reverse) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`order-1 ${reverse ? "md:order-1" : "md:order-2"}`}
          >
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <img
                src={image}
                alt={title}
                className="w-full h-[380px] object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`order-2 ${
              reverse ? "md:order-2" : "md:order-1"
            } text-left`}
          >
            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              {title}
            </h1>

            {/* DESC */}
            <p className="text-gray-600 leading-relaxed mb-8 max-w-x">{desc}</p>

            {/* POINTS */}
            <div className="space-y-4 mb-8 pt-6">
              {points.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-blue-100">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-gray-700">{p}</p>
                </div>
              ))}
            </div>

            {/* INSIGHT */}
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 text-sm text-gray-700 shadow-sm">
              <span className="font-medium text-gray-900">
                Digunakan untuk:
              </span>{" "}
              membantu Anda memahami struktur biaya secara menyeluruh dan
              mengambil keputusan dengan lebih terarah sejak awal proyek.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

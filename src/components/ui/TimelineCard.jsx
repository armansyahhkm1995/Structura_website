import { motion } from "framer-motion";

export default function TimelineCard({ step, number, align, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative bg-white border rounded-2xl p-6 shadow-sm 
  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
    align === "right" ? "text-right" : "text-left"
  }`}
    >
      {/* NUMBER */}
      <div className="absolute -top-4 left-6 md:left-auto md:right-6 bg-white px-3 py-1 text-xs font-semibold text-gray-500 border rounded-full shadow-sm">
        {number}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>

      {/* DESC */}
      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
    </motion.div>
  );
}

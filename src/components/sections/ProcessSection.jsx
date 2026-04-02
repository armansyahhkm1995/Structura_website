import { motion } from "framer-motion";
import { MessageCircle, Calculator, FileText, Lightbulb } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "Konsultasi Awal",
      desc: "Kami memahami kebutuhan proyek Anda, mulai dari tipe bangunan, lokasi, hingga target anggaran yang diinginkan.",
      icon: MessageCircle,
    },
    {
      title: "Analisis & Perhitungan",
      desc: "Tim kami melakukan analisis mendalam dan menyusun estimasi biaya berdasarkan data dan pendekatan yang terstruktur.",
      icon: Calculator,
    },
    {
      title: "Penyusunan BOQ & RAB",
      desc: "Kami menyusun dokumen BOQ dan RAB lengkap yang transparan, detail, dan dapat digunakan sebagai acuan proyek.",
      icon: FileText,
    },
    {
      title: "Diskusi & Rekomendasi",
      desc: "Kami membahas hasil bersama Anda dan memberikan insight efisiensi serta potensi risiko sebelum proyek dimulai.",
      icon: Lightbulb,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-left md:text-center mb-20">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Proses yang{" "}
            <span className="text-primary">Sederhana & Terarah</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-left md:text-center md:-translate-x-2 md:pl-50">
            Kami merancang proses yang jelas dan efisien agar Anda dapat
            memahami setiap langkah tanpa kerumitan.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* LINE (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gray-200" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              const number = `0${i + 1}`;

              return (
                <div
                  key={i}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* LEFT */}
                  <div
                    className={`hidden md:block w-1/2 ${isLeft ? "pr-8" : ""}`}
                  >
                    {isLeft && (
                      <TimelineCard
                        step={step}
                        number={number}
                        align="right"
                        index={i}
                      />
                    )}
                  </div>

                  {/* CENTER ICON */}
                  <div className="hidden md:flex relative z-10 items-center justify-center w-12 h-12 rounded-full bg-white border shadow-sm">
                    <Icon className="w-5 h-5 text-gray-700" />
                  </div>

                  {/* RIGHT */}
                  <div
                    className={`hidden md:block w-1/2 ${!isLeft ? "pl-8" : ""}`}
                  >
                    {!isLeft && (
                      <TimelineCard
                        step={step}
                        number={number}
                        align="left"
                        index={i}
                      />
                    )}
                  </div>

                  {/* MOBILE */}
                  <div className="md:hidden w-full">
                    <TimelineCard
                      step={step}
                      number={number}
                      align="left"
                      index={i}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================= */
/* CARD */
/* ============================= */

function TimelineCard({ step, number, align, index }) {
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

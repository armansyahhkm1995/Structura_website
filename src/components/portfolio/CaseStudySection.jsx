import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudySection({ data }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom max-w-6xl">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Studi Kasus
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <div className="card card-padding">
                  <strong>Kondisi Awal</strong>
                  <p className="text-sm mt-2">{data[index].initial}</p>
                </div>

                <div className="card card-padding">
                  <strong>Tantangan</strong>
                  <p className="text-sm mt-2">{data[index].challenge}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="card card-padding">
                  <strong>Pendekatan</strong>
                  <p className="text-sm mt-2">{data[index].approach}</p>
                </div>

                <div className="card card-padding">
                  <strong>Hasil</strong>
                  <p className="text-sm mt-2">{data[index].result}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-0 top-1/2">
            ‹
          </button>
          <button onClick={next} className="absolute right-0 top-1/2">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Lightbox({ project, onClose, onNext, onPrev }) {
  const [imgIndex, setImgIndex] = useState(0);

  if (!project) return null;

  const nextImg = () =>
    setImgIndex((prev) => (prev + 1) % project.images.length);

  const prevImg = () =>
    setImgIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="bg-white rounded-xl w-[90%] max-w-6xl p-6 grid md:grid-cols-2 gap-6 relative">
          {/* IMAGE */}
          <div className="relative">
            <img
              src={project.images[imgIndex]}
              className="rounded-lg w-full h-[400px] object-cover"
            />

            <button
              onClick={prevImg}
              className="absolute left-2 top-1/2 text-white"
            >
              ‹
            </button>
            <button
              onClick={nextImg}
              className="absolute right-2 top-1/2 text-white"
            >
              ›
            </button>
          </div>

          {/* DETAIL */}
          <div>
            <h2 className="text-xl font-semibold mb-4">{project.name}</h2>

            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Jenis:</strong> {project.type}
              </p>
              <p>
                <strong>Lokasi:</strong> {project.location}
              </p>
              <p>
                <strong>Luas:</strong> {project.area}
              </p>
              <p>
                <strong>Scope:</strong> {project.scope}
              </p>
            </div>
          </div>

          {/* CLOSE */}
          <button onClick={onClose} className="absolute top-4 right-4 text-xl">
            ✕
          </button>

          {/* PROJECT NAV */}
          <button
            onClick={onPrev}
            className="absolute left-4 text-white text-2xl"
          >
            ‹
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 text-white text-2xl"
          >
            ›
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

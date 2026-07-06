import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FinalCTA from "../components/sections/about/FinalCTA";
import { data } from "../data/portfolios";
import SEO from "../components/ui/SEO";
import { portfolioSEO } from "../data/seo/portfolioSEO";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("infrastruktur");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const projects = data[activeTab] || [];

  return (
    <>
      <SEO {...portfolioSEO} />
      <div className="bg-white">
        {/* HERO */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-semibold mb-6 text-left md:text-center"
            >
              <strong className="text-black">
                Portofolio Proyek
                <em className="text-primary"> Perencanaan Biaya</em>
              </strong>
            </motion.h1>

            <p className="text-gray-600 max-w-2xl md:pl-25 text-left md:text-center">
              Bagaimana kami membantu klien memahami dan mengontrol biaya proyek
              sebelum pembangunan dimulai.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {projects.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="group"
                // onClick={() => setSelectedIndex(i)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    className="w-full h-[280px] object-cover"
                  />

                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 p-5 text-white space-y-4">
                    {/* TITLE */}
                    <h3 className="text-lg font-semibold leading-snug text-left">
                      {item.title}
                    </h3>

                    {/* SUBTITLE */}
                    <p className="text-sm text-white/80 leading-relaxed text-left pb-4">
                      {item.subtitle}
                    </p>

                    {/* BADGES (REPLACE META TEXT) */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {[item.location, item.size, item.value, item.year].map(
                        (info, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
                          >
                            {info}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </div>
    </>
  );
}

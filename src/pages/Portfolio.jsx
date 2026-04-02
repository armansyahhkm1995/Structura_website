import { useState } from "react";
import { motion } from "framer-motion";
import FinalCTA from "../components/sections/FinalCTA";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("rumah");

  const tabs = [
    { id: "rumah", label: "Rumah" },
    { id: "komersial", label: "Komersial" },
    { id: "infrastruktur", label: "Infrastruktur" },
  ];

  return (
    <div className="bg-white">
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
            Portofolio Proyek
            <span className="text-primary"> Perencanaan Biaya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 max-w-2xl mx-auto md:pl-50"
          >
            Bagaimana kami membantu klien memahami dan mengontrol biaya proyek
            sebelum pembangunan dimulai.
          </motion.p>
        </div>
      </section>

      {/* TABS */}
      <section className="pb-10">
        <div className="flex justify-center">
          <div className="flex gap-2 bg-gray-100 p-2 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-lg text-sm transition ${
                  activeTab === tab.id
                    ? "bg-white shadow text-primary font-medium"
                    : "text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <PortfolioGrid type={activeTab} />
        </div>
      </section>

      {/* CASE STUDY */}
      <CaseStudy />

      {/* CTA */}
      <FinalCTA />
    </div>
  );
}

/* ================= GRID ================= */
function PortfolioGrid({ type }) {
  const data = {
    rumah: [
      {
        title: "Rumah Tipe 36",
        location: "Bandung",
        image: "/assets/portfolio/rumah1.webp",
      },
      {
        title: "Rumah Tipe 60",
        location: "Jakarta",
        image: "/assets/portfolio/rumah2.webp",
      },
      {
        title: "Rumah Tipe 120",
        location: "Bekasi",
        image: "/assets/portfolio/rumah3.webp",
      },
    ],
    komersial: [
      {
        title: "Cafe Modern",
        location: "Bandung",
        image: "/assets/portfolio/cafe.webp",
      },
      {
        title: "Ruko 3 Lantai",
        location: "Jakarta",
        image: "/assets/portfolio/ruko.webp",
      },
    ],
    infrastruktur: [
      {
        title: "Drainase",
        location: "Bandung",
        image: "/assets/portfolio/drainase.webp",
      },
      {
        title: "Jalan Lingkungan",
        location: "Bogor",
        image: "/assets/portfolio/jalan.webp",
      },
    ],
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {data[type].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img src={item.image} className="w-full h-[260px] object-cover" />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm">{item.location}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ================= CASE STUDY ================= */
function CaseStudy() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <img src="/assets/portfolio/case-study.webp" className="rounded-2xl" />

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Studi Kasus Rumah Tinggal
          </h2>

          <p className="text-gray-600 mb-3">
            Klien belum mengetahui total biaya proyek secara jelas.
          </p>

          <p className="text-gray-600 mb-3">
            Kami menyusun RAB dan BOQ secara detail berdasarkan desain.
          </p>

          <p className="text-gray-600">
            Hasilnya, klien mendapatkan kontrol biaya yang lebih baik sejak
            awal.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= DELIVERABLE ================= */
function DeliverablesPreview() {
  const items = [
    "/assets/docs/rab.webp",
    "/assets/docs/boq.webp",
    "/assets/docs/analysis.webp",
  ];

  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Output yang Kami Berikan
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((img, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }}>
              <img
                src={img}
                className="rounded-2xl w-full h-[220px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

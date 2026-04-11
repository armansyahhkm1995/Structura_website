import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import home_type_21 from "../../assets/rumah/home_type_21.webp";
import home_type_36 from "../../assets/rumah/home_type_36.webp";
import home_type_45 from "../../assets/rumah/home_type_45.webp";
import home_type_54 from "../../assets/rumah/home_type_54.webp";
import home_type_60 from "../../assets/rumah/home_type_60.webp";
import home_type_70 from "../../assets/rumah/home_type_70+.webp";
import home_type_120 from "../../assets/rumah/home_type_120+.webp";

import ruko from "../../assets/komersial/ruko.webp";
import cafe from "../../assets/komersial/cafe.webp";
import gudang from "../../assets/komersial/gudang.webp";
import kantor from "../../assets/komersial/kantor.webp";
import restoran from "../../assets/komersial/restoran.webp";
import minimarket from "../../assets/komersial/minimarket.webp";
import bengkel from "../../assets/komersial/bengkel.webp";

import jembatan from "../../assets/infra/jembatan.webp";
import jalan from "../../assets/infra/jalan.webp";
import drainase from "../../assets/infra/drainase.webp";
import septic_tank from "../../assets/infra/septic_tank.webp";
import sumur_bor from "../../assets/infra/sumur_bor.webp";
import talud from "../../assets/infra/talud.webp";
import gorong_gorong from "../../assets/infra/gorong_gorong.webp";
import kanopi_baja from "../../assets/infra/kanopi_baja.webp";

export default function ProjectTypes() {
  const [activeTab, setActiveTab] = useState("rumah");
  const navigate = useNavigate();

  const tabs = [
    { id: "rumah", label: "Rumah" },
    { id: "komersial", label: "Komersial" },
    { id: "infrastruktur", label: "Infrastruktur" },
  ];

  const CTA_CONFIG = {
    rumah: {
      label: "Hitung Estimasi Rumah Anda",
      type: "rumah",
    },
    komersial: {
      label: "Hitung Estimasi Proyek Komersial Anda",
      type: "komersial",
    },
    infrastruktur: {
      label: "Hitung Estimasi Infrastruktur Anda",
      type: "infrastruktur",
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Tipe Proyek yang <span className="text-primary">Kami Tangani</span>
          </h1>
          <p className="text-gray-600">
            Pilih kategori proyek Anda dan lihat berbagai tipe yang bisa kami
            bantu.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-gray-100 p-2 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-lg text-sm transition ${
                  activeTab === tab.id
                    ? "bg-white shadow text-primary font-medium"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div>
          {activeTab === "rumah" && <RumahGrid />}
          {activeTab === "komersial" && <KomersialGrid />}
          {activeTab === "infrastruktur" && <InfraGrid />}
        </div>

        {/* ✅ CTA DINAMIS */}
        {/* <div className="mt-12 text-center">
          <button
            onClick={() =>
              navigate(`/calculator?type=${CTA_CONFIG[activeTab].type}`)
            }
            className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-lg"
          >
            {CTA_CONFIG[activeTab].label}
          </button>
        </div> */}
      </div>
    </section>
  );
}

/* ===================================================== */
/* 🏡 RUMAH GRID (ASYMMETRIC BENTO) */
/* ===================================================== */

function RumahGrid() {
  const items = [
    {
      title: "Tipe 36",
      src: home_type_36,
      className: "col-span-2 row-span-2",
    },
    {
      title: "Tipe 21",
      src: home_type_21,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Tipe 45",
      src: home_type_45,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Tipe 54",
      src: home_type_54,
      className: "col-span-1 row-span-2",
    },
    {
      title: "Tipe 60",
      src: home_type_60,
      className: "col-span-1 row-span-2",
    },
    {
      title: "Tipe 70+",
      src: home_type_70,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Tipe 120+",
      src: home_type_120,
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-4 auto-rows-[180px] gap-4">
        {items.map((item, i) => (
          <BentoItem key={i} item={item} />
        ))}
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-4 md:hidden">
        {items.slice(0, 3).map((item, i) => (
          <BentoItemMobile key={i} item={item} />
        ))}
      </div>
    </>
  );
}

/* ===================================================== */
/* 🏢 KOMERSIAL GRID (HORIZONTAL STYLE) */
/* ===================================================== */

function KomersialGrid() {
  const items = [
    {
      title: "Ruko",
      src: ruko,
      className: "col-span-2 row-span-2",
    },
    {
      title: "Cafe",
      src: cafe,
      className: "col-span-2 row-span-2",
    },
    {
      title: "Gudang",
      src: gudang,
      className: "col-span-1 row-span-1",
    },
    {
      title: "kantor",
      src: kantor,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Restoran",
      src: restoran,
      className: "col-span-1 row-span-2",
    },
    {
      title: "Minimarket",
      src: minimarket,
      className: "col-span-1 row-span-2",
    },
    {
      title: "Workshop",
      src: bengkel,
      className: "col-span-2 row-span-1",
    },
  ];

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-4 auto-rows-[180px] gap-4">
        {items.map((item, i) => (
          <BentoItem key={i} item={item} />
        ))}
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-4 md:hidden">
        {items.slice(0, 3).map((item, i) => (
          <BentoItemMobile key={i} item={item} />
        ))}
      </div>
    </>
  );
}

/* ===================================================== */
/* 🏗️ INFRA GRID (VERTICAL DOMINANT) */
/* ===================================================== */

function InfraGrid() {
  const items = [
    {
      title: "Jembatan",
      src: jembatan,
      className: "col-span-2 row-span-2",
    },
    {
      title: "Jalan",
      src: jalan,
      className: "col-span-2 row-span-1",
    },
    {
      title: "Drainase",
      src: drainase,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Septic Tank",
      src: septic_tank,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Sumur Bor",
      src: sumur_bor,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Talud",
      src: talud,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Gorong-gorong",
      src: gorong_gorong,
      className: "col-span-1 row-span-1",
    },
    {
      title: "Kanopi",
      src: kanopi_baja,
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-4 auto-rows-[180px] gap-4">
        {items.map((item, i) => (
          <BentoItem key={i} item={item} />
        ))}
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-4 md:hidden">
        {items.slice(0, 3).map((item, i) => (
          <BentoItemMobile key={i} item={item} />
        ))}
      </div>
    </>
  );
}

/* ===================================================== */
/* 🧩 BENTO ITEM */
/* ===================================================== */

function BentoItem({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.className}`}
    >
      {/* IMAGE */}
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

      {/* TEXT */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>
    </motion.div>
  );
}

function BentoItemMobile({ item }) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="relative h-48 w-full overflow-hidden rounded-xl"
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* text */}
      <div className="absolute bottom-3 left-4 text-white">
        <h3 className="text-base font-medium">{item.title}</h3>
      </div>
    </motion.div>
  );
}

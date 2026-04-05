import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FinalCTA from "../components/sections/FinalCTA";
import uin_sunan_gunung_djati from "../assets/portfolio/uin_sunan_gunung_djati/uin_sunan_gunung_djati.webp";
import uin_groundbreaking from "../assets/portfolio/uin_sunan_gunung_djati/uin_groubdbreaking.webp";
import uin_construction_1 from "../assets/portfolio/uin_sunan_gunung_djati/uin_construction_1.webp";
import uin_construction_2 from "../assets/portfolio/uin_sunan_gunung_djati/uin_construction_2.webp";
import uin_construction_3 from "../assets/portfolio/uin_sunan_gunung_djati/uin_construction_3.webp";
import uin_construction_4 from "../assets/portfolio/uin_sunan_gunung_djati/uin_construction_4.webp";
import uin_construction_5 from "../assets/portfolio/uin_sunan_gunung_djati/uin_construction_5.webp";
import awang_sabrang_1 from "../assets/portfolio/awang_sabrang_tenggarong/awang_sabrang_1.webp";
import awang_sabrang_2 from "../assets/portfolio/awang_sabrang_tenggarong/awang_sabrang_2.webp";
import awang_sabrang_3 from "../assets/portfolio/awang_sabrang_tenggarong/awang_sabrang_3.webp";
import awang_sabrang_4 from "../assets/portfolio/awang_sabrang_tenggarong/awang_sabrang_4.webp";
import awang_sabrang_5 from "../assets/portfolio/awang_sabrang_tenggarong/awang_sabrang_5.webp";
import awang_sabrang_6 from "../assets/portfolio/awang_sabrang_tenggarong/awang_sabrang_6.webp";
import awang_sabrang_7 from "../assets/portfolio/awang_sabrang_tenggarong/awang_sabrang_7.webp";
import awang_sabrang_8 from "../assets/portfolio/awang_sabrang_tenggarong/awang_sabrang_8.webp";
import preservasi_jalan_palu_1 from "../assets/portfolio/preservasi_jalan_palu/preservasi_jalan_palu_1.webp";
import preservasi_jalan_palu_2 from "../assets/portfolio/preservasi_jalan_palu/preservasi_jalan_palu_2.webp";
import preservasi_jalan_palu_3 from "../assets/portfolio/preservasi_jalan_palu/preservasi_jalan_palu_3.webp";
import preservasi_jalan_palu_4 from "../assets/portfolio/preservasi_jalan_palu/preservasi_jalan_palu_4.webp";
import preservasi_jalan_palu_5 from "../assets/portfolio/preservasi_jalan_palu/preservasi_jalan_palu_5.webp";
import preservasi_jalan_palu_6 from "../assets/portfolio/preservasi_jalan_palu/preservasi_jalan_palu_6.webp";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("infrastruktur");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const tabs = [
    { id: "rumah", label: "Rumah" },
    { id: "komersial", label: "Komersial" },
    { id: "infrastruktur", label: "Infrastruktur" },
  ];

  const data = {
    infrastruktur: [
      {
        // ================= UIN Sunan Gunung Djati Bandung =================

        title: "Mengelola Estimasi Proyek Kampus ±18,6 Miliar",
        subtitle:
          "Gedung Kuliah Bersama Kampus II - UIN Sunan Gunung Djati Bandung",
        location: "Bandung - Jawa Barat",
        size: "2.752 m²",
        type: "Gedung Pendidikan",
        value: "Rp 18,65 Miliar",
        year: "2019",
        image: uin_sunan_gunung_djati,
        images: [
          uin_sunan_gunung_djati,
          uin_groundbreaking,
          uin_construction_1,
          uin_construction_2,
          uin_construction_3,
          uin_construction_4,
          uin_construction_5,
        ],
        badge: ["High Complexity", "Government Project"],

        overview:
          "Proyek pembangunan gedung kuliah bersama ini merupakan bagian dari pengembangan fasilitas pendidikan skala besar dengan kompleksitas tinggi, mencakup berbagai disiplin pekerjaan mulai dari struktur hingga sistem mekanikal dan elektrikal.",

        keywords: [
          "Gedung kuliah multi lantai",
          "Auditorium",
          "Lobby & fasilitas umum",
          "Infrastruktur pendukung",
        ],

        value:
          "Perencanaan biaya yang akurat menjadi fondasi utama keberhasilan proyek konstruksi skala besar.",

        context: [
          "Dalam proyek ini, perencanaan biaya tidak hanya berhenti pada estimasi kasar, tetapi dilakukan secara menyeluruh hingga ke level detail untuk memastikan setiap komponen pekerjaan dapat terukur dengan jelas.",
        ],

        scope: [
          "Penyusunan RAB (Rencana Anggaran Biaya)",
          "Penyusunan BOQ (Bill of Quantity)",
          "Cost planning & cost breakdown",
          "Analisis TKDN (Tingkat Komponen Dalam Negeri)",
        ],

        approach: [
          "Perhitungan berbasis volume (quantity take-off)",
          "Breakdown biaya: material, tenaga kerja, peralatan",
          "Pengelompokan pekerjaan: struktur, arsitektur, MEP, interior, site development",
        ],

        challenge_introduction: [
          "Dengan kompleksitas lintas disiplin dan ratusan komponen pekerjaan, proyek ini menuntut pendekatan perencanaan biaya yang terstruktur dan terintegrasi untuk menjaga akurasi serta konsistensi antar sistem konstruksi.",
        ],

        challenge: [
          "Proyek multi-disiplin dengan kompleksitas tinggi",
          "Ratusan item pekerjaan dalam BOQ",
          "Integrasi antar sistem konstruksi",
          "Standar tinggi proyek institusi",
        ],

        solution: [
          "Penyusunan BOQ hingga level detail",
          "Strukturisasi biaya per kategori",
          "Sinkronisasi antar disiplin",
          "Perhitungan TKDN untuk compliance",
        ],

        challenge_insight: [
          "Pendekatan ini memungkinkan kontrol biaya yang lebih presisi sejak tahap awal, sehingga potensi risiko pembengkakan biaya dapat diminimalkan.",
        ],

        impact_introduction: [
          "Hasil dari perencanaan biaya yang terstruktur ini memberikan dampak signifikan terhadap keberhasilan proyek, baik dari sisi finansial maupun pengambilan keputusan.",
        ],

        impact: [
          "Estimasi biaya tersusun ± Rp 18,65 Miliar",
          "Struktur biaya lengkap & terperinci",
          "Mendukung proses tender dan pengadaan",
        ],

        client_impact: [
          "Dengan struktur biaya yang jelas dan detail, klien dapat mengambil keputusan dengan lebih percaya diri, serta meminimalkan risiko overbudget selama proyek berjalan.",
        ],
      },

      // ================= Pelebaran Jalan Awang Sabrang - Tenggarong =================

      {
        title: "Perencanaan Teknis & Estimasi Jalan dengan Risiko Longsor",
        subtitle:
          "Pelebaran Jalan Awang Sabrang - Tenggarong, Kutai Kartanegara",
        location: "Tenggarong - Kalimantan",
        size: "± 248 m",
        type: "Infrastruktur Jalan",
        value: "—", // isi nanti kalau ada
        year: "2023",

        // 👉 sementara pakai 1 gambar dulu (nanti bisa kamu replace)
        image: awang_sabrang_1,
        images: [
          awang_sabrang_1,
          awang_sabrang_2,
          awang_sabrang_3,
          awang_sabrang_4,
          awang_sabrang_5,
          awang_sabrang_6,
          awang_sabrang_7,
          awang_sabrang_8,
        ],

        badge: ["Government Project", "High Technical"],

        overview:
          "Proyek ini merupakan bagian dari program peningkatan infrastruktur jalan di Tenggarong yang tidak hanya berfokus pada pelebaran jalan, tetapi juga penanganan kondisi tanah yang berpotensi longsor. Perencanaan dilakukan secara detail untuk memastikan stabilitas, keamanan, dan keberlanjutan struktur jalan.",

        keywords: [
          "Pelebaran jalan",
          "Mini pile",
          "Drainase",
          "Penanganan longsor",
        ],

        value:
          "Dalam proyek jalan dengan kondisi tanah tidak stabil, perencanaan biaya dan teknis yang presisi menjadi kunci utama untuk menjaga keamanan dan efisiensi proyek.",

        context: [
          "Pada proyek ini, perencanaan tidak hanya berfokus pada estimasi biaya, tetapi juga pada pemahaman kondisi lapangan yang dinamis seperti potensi longsor dan perbedaan elevasi. Setiap perhitungan dilakukan secara detail berbasis segmentasi lokasi (STA) untuk memastikan solusi teknis yang diambil selaras dengan kebutuhan stabilitas dan keamanan jalan.",
        ],

        scope: [
          "Penyusunan RAB (Rencana Anggaran Biaya)",
          "Penyusunan BOQ berbasis segmentasi STA",
          "Analisis volume pekerjaan tanah (cut & fill)",
          "Perencanaan struktur penahan tanah (mini pile)",
          "Perencanaan drainase & box culvert",
        ],

        approach: [
          "Quantity take-off berbasis gambar teknis (layout & cross section)",
          "Analisis per STA (00+000 – 00+248)",
          "Breakdown biaya: material, tenaga kerja, peralatan",
          "Pengelompokan pekerjaan: perkerasan, struktur, drainase",
        ],

        challenge_introduction: [
          "Dengan kondisi tanah yang berpotensi longsor serta variasi elevasi di sepanjang trase jalan, proyek ini menuntut pendekatan perencanaan yang tidak hanya berfokus pada pelebaran jalan, tetapi juga pada integrasi antara stabilitas struktur dan efisiensi biaya.",
        ],

        challenge: [
          "Kondisi tanah dengan potensi longsor",
          "Perbedaan elevasi existing vs rencana",
          "Banyak utilitas eksisting (listrik, jembatan kecil)",
          "Integrasi pelebaran jalan dengan struktur penahan",
        ],

        solution: [
          "Analisis cross section detail setiap STA",
          "Penggunaan mini pile untuk stabilisasi tanah",
          "Penyesuaian elevasi jalan secara bertahap",
          "Integrasi sistem drainase untuk mengurangi tekanan air",
        ],

        challenge_insight: [
          "Dengan mengintegrasikan analisis teknis dan perhitungan biaya secara detail per segmen, proyek ini mampu mengontrol risiko longsor sekaligus menjaga efisiensi biaya secara presisi sejak tahap awal perencanaan.",
        ],

        impact_introduction: [
          "Perencanaan yang mengintegrasikan aspek teknis dan biaya secara detail ini memberikan dampak langsung terhadap peningkatan stabilitas struktur, pengurangan risiko longsor, serta memastikan efisiensi proyek tetap terjaga sesuai kondisi lapangan.",
        ],

        impact: [
          "Perencanaan teknis lengkap (layout & cross section)",
          "Estimasi biaya berbasis kondisi lapangan",
          "Mengurangi risiko longsor & kegagalan struktur",
        ],

        client_impact: [
          "Dengan pendekatan yang menggabungkan perencanaan teknis dan biaya secara detail, klien memperoleh kontrol yang lebih baik terhadap risiko lapangan, khususnya terkait stabilitas tanah, sekaligus memastikan efisiensi proyek tetap terjaga tanpa mengorbankan keamanan struktur.",
        ],
      },

      // ================= Preservasi Jalan - Palu =================

      {
        title:
          "Menjaga Performa Infrastruktur Jalan melalui Perencanaan Preservasi",
        subtitle: "Preservasi Jalan Nasional – Palu, Sulawesi Tengah",
        location: "Palu, Sulawesi Tengah",
        size: "± 163 KM",
        type: "Multi-segmen jalan",
        value: "—", // isi nanti kalau ada
        year: "2024",

        // 👉 sementara pakai 1 gambar dulu (nanti bisa kamu replace)
        image: preservasi_jalan_palu_1,
        images: [
          preservasi_jalan_palu_1,
          preservasi_jalan_palu_2,
          preservasi_jalan_palu_3,
          preservasi_jalan_palu_4,
          preservasi_jalan_palu_5,
          preservasi_jalan_palu_6,
        ],

        badge: ["Government Project", "Infrastructure Maintenance"],

        overview:
          "Proyek ini berfokus pada kegiatan preservasi jalan untuk menjaga kondisi dan performa infrastruktur yang sudah ada agar tetap optimal dalam melayani mobilitas masyarakat. Berbeda dengan proyek pembangunan baru, preservasi jalan menuntut pemahaman yang mendalam terhadap kondisi existing serta strategi penanganan yang tepat agar umur layanan jalan dapat diperpanjang secara efisien.",

        keywords: [
          "Preservasi jalan",
          "Mini pile",
          "Drainase",
          "Penanganan longsor",
        ],

        value:
          "Dalam proyek preservasi, keberhasilan tidak diukur dari pembangunan baru, tetapi dari seberapa efektif mempertahankan dan meningkatkan performa infrastruktur dengan sumber daya yang terbatas.",

        context: [
          "Berbeda dengan proyek pembangunan baru, perencanaan pada proyek ini dilakukan berbasis kondisi existing jalan. Pendekatan segmentasi dan penentuan metode penanganan (treatment) digunakan untuk memastikan setiap perhitungan biaya selaras dengan tingkat kerusakan, sehingga menghasilkan alokasi anggaran yang lebih tepat dan efisien.",
        ],

        scope: [
          "Penyusunan RAB preservasi jalan",
          "Penyusunan BOQ berbasis kondisi existing",
          "Analisis tingkat kerusakan jalan",
          "Perencanaan metode penanganan (treatment)",
          "Estimasi biaya berbasis prioritas perbaikan",
        ],

        approach: [
          "Condition-Based Assessment",
          "Segmentasi penanganan",
          "Breakdown biaya berbasis treatment",
          "Pengelompokan pekerjaan: perkerasan, struktur, drainase",
        ],

        challenge_introduction: [
          "Proyek preservasi jalan menghadirkan tantangan dalam menentukan strategi penanganan yang tepat berdasarkan kondisi existing yang bervariasi, sehingga diperlukan pendekatan yang mampu mengintegrasikan analisis teknis dengan efisiensi biaya secara optimal.",
        ],

        challenge: [
          "Variasi tingkat kerusakan jalan di tiap segmen",
          "Keterbatasan anggaran untuk penanganan menyeluruh",
          "Kebutuhan menentukan prioritas perbaikan",
          "Ketidakpastian kondisi lapangan (hidden damage)",
        ],

        solution: [
          "Analisis kondisi jalan secara segmentasi",
          "Penentuan metode penanganan berdasarkan jenis kerusakan",
          "Prioritisasi pekerjaan berdasarkan urgensi",
          "Penyusunan BOQ berbasis kebutuhan aktual lapangan",
        ],

        challenge_insight: [
          "Pendekatan berbasis kondisi ini memungkinkan alokasi anggaran yang lebih tepat sasaran, sehingga setiap intervensi yang dilakukan memberikan dampak maksimal terhadap peningkatan performa jalan.",
        ],

        impact_introduction: [
          "Perencanaan preservasi yang berbasis kondisi lapangan ini memberikan dampak signifikan terhadap efisiensi penggunaan anggaran serta peningkatan kualitas layanan infrastruktur jalan secara berkelanjutan.",
        ],

        impact: [
          "Strategi preservasi berbasis kondisi existing",
          "Estimasi biaya yang lebih efisien dan terarah",
          "Peningkatan performa jalan tanpa rekonstruksi total",
        ],

        client_impact: [
          "Klien memperoleh strategi penanganan yang lebih efektif dan efisien, sehingga anggaran yang tersedia dapat dimanfaatkan secara optimal untuk memberikan dampak perbaikan yang maksimal pada kondisi jalan.",
        ],
      },
    ],
  };

  const projects = data[activeTab] || [];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            Portofolio Proyek
            <span className="text-primary"> Perencanaan Biaya</span>
          </motion.h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
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
              className="cursor-pointer group"
              onClick={() => setSelectedIndex(i)}
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
                    {[item.location, item.size, item.type].map((info, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
                      >
                        {info}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <ProjectModal
            project={projects[selectedIndex]}
            projects={projects}
            index={selectedIndex}
            setIndex={setSelectedIndex}
            onClose={() => setSelectedIndex(null)}
          />
        )}
      </AnimatePresence>

      <FinalCTA />
    </div>
  );
}

/* ================= MODAL ================= */
function ProjectModal({ project, onClose, projects, index, setIndex }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImage, setCurrentImage] = useState(0);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "scope", label: "Scope & Approach" },
    { id: "challenge", label: "Challenge & Solution" },
    { id: "impact", label: "Impact" },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-4xl rounded-2xl relative max-h-[90vh] flex flex-col"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        {/* IMAGE */}
        <div className="relative">
          <img
            src={project.images[currentImage]}
            className="w-full h-[260px] object-cover"
          />

          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === 0 ? project.images.length - 1 : prev - 1,
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === project.images.length - 1 ? 0 : prev + 1,
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full"
          >
            ›
          </button>

          <div className="absolute bottom-3 w-full flex justify-center gap-2">
            {project.images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentImage === i ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 space-y-6 overflow-y-auto">
          <h2 className="text-2xl font-semibold leading-snug">
            {project.title}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed pb-4">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 pt-1 justify-center pb-4">
            {[project.location, project.size, project.type].map((info, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-gray-50 border"
              >
                {info}
              </span>
            ))}
          </div>

          {/* tabs */}
          <div className="flex gap-6 border-b justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 text-sm ${
                  activeTab === tab.id
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-sm text-gray-600 leading-relaxed space-y-6">
            {activeTab === "overview" && (
              <div className="space-y-5">
                {/* Story */}
                <p className="leading-relaxed text-left pb-4">
                  {project.overview}
                </p>

                {/* Mini Cards */}

                <p className="font-medium text-gray-800 mb-2 pb-4 text-left">
                  Kata kunci
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.keywords.map((item, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 border rounded-xl p-4 text-sm leading-relaxed text-left md:text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Closing Insight */}
                <p className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 text-sm text-gray-700 shadow-sm text-left">
                  {project.value}
                </p>
              </div>
            )}

            {activeTab === "scope" && (
              <div className="space-y-6">
                {/* Context */}
                <p className="space-y-5 text-left pb-4">{project.context}</p>

                {/* Scope */}
                <div>
                  <p className="font-medium text-gray-800 mb-2 pb-4 text-left">
                    Ruang Lingkup Pekerjaan
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.scope.map((item, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border rounded-xl p-4 leading-relaxed  text-left md:text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Approach */}
                <div>
                  <p className="font-medium text-gray-800 mb-2  pb-4 text-left">
                    Pendekatan yang Digunakan
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.approach.map((item, i) => (
                      <div
                        key={i}
                        className="bg-white border rounded-xl p-4 shadow-sm leading-relaxed  text-left md:text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value */}
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 text-sm text-gray-700 shadow-sm text-left">
                  {project.value}
                </div>
              </div>
            )}

            {activeTab === "challenge" && (
              <div className="space-y-6 text-left">
                <p className="leading-relaxed text-left pb-4">
                  {project.challenge_introduction}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Challenge */}
                  <div>
                    <p className="font-medium text-gray-800 mb-2 pb-2">
                      Tantangan
                    </p>
                    <div className="space-y-2">
                      {project.challenge.map((item, i) => (
                        <div
                          key={i}
                          className="bg-red-50 border border-red-100 rounded-xl p-4 text-sm leading-relaxed"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Solusi</p>
                    <div className="space-y-2">
                      {project.solution.map((item, i) => (
                        <div
                          key={i}
                          className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm leading-relaxed"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Insight */}
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 text-sm text-gray-700 shadow-sm text-left">
                  {project.challenge_insight}
                </div>
              </div>
            )}

            {activeTab === "impact" && (
              <div className="space-y-6">
                {/* Context */}
                <p className="text-left pb-4">{project.impact_introduction}</p>

                {/* Results */}
                <div>
                  <p className="font-medium text-gray-800 mb-2 pb-4 text-left">
                    Hasil Utama
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.impact.map((item, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 border rounded-xl p-3  text-left md:text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value */}
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-5 text-sm text-gray-700 shadow-sm text-left">
                  <p className="font-medium text-gray-800 mb-1">
                    Dampak untuk Klien
                  </p>
                  <p>{project.client_impact}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* NAV PROJECT */}
        <button
          onClick={() =>
            setIndex(index === 0 ? projects.length - 1 : index - 1)
          }
          className="absolute left-[-50px] top-1/2 bg-white px-3 py-2 rounded-full shadow"
        >
          ←
        </button>

        <button
          onClick={() =>
            setIndex(index === projects.length - 1 ? 0 : index + 1)
          }
          className="absolute right-[-50px] top-1/2 bg-white px-3 py-2 rounded-full shadow"
        >
          →
        </button>
      </motion.div>
    </motion.div>
  );
}

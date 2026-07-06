import { whatsappLink } from "../../../utils/whatsapp";
import hero_section_image from "../../../assets/hero_section_image.webp";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-screen flex items-center bg-white pt-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-left">
            <strong className="text-black">
              Bangun Rumah Sesuai Anggaran{" "}
              <em className="text-primary">
                Tanpa Mengorbankan Keselamatan, Kualitas dan Kenyamanan
              </em>
            </strong>
          </h1>

          <p className="text-gray-600 mb-8 max-w-lg text-left">
            Structura adalah <strong>jasa arsitek Bandung</strong> yang membantu
            Anda merencanakan pembangunan rumah, bangunan komersial, hingga
            berbagai proyek konstruksi sipil melalui desain arsitektur,
            perhitungan struktur, penyusunan RAB, pengurusan PBG, dan
            pendampingan pembangunan. Kami membantu Anda mengambil keputusan
            yang tepat agar proyek lebih aman, efisien, dan sesuai anggaran
            tanpa mengorbankan kualitas maupun kenyamanan.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            {/* PRIMARY */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Mulai Konsultasi Gratis
            </a>

            {/* SECONDARY */}
            <button
              onClick={() => navigate("/Portfolio")}
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Lihat Portofolio Kami
            </button>
          </div>

          {/* Trust indicator */}
          <div className="mt-10 flex flex-wrap gap-5 text-sm text-gray-600">
            <span>Rumah Tinggal</span>
            <span>Ruko & Komersial</span>
            <span>Gedung</span>
            <span>Jalan & Jembatan</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden md:flex items-stretch h-full">
          <img
            src={hero_section_image}
            alt="Tim Structura Arsitek Bandung merencanakan pembangunan rumah"
            className="w-full h-full object-cover rounded-xl shadow-sm"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
        </div>
      </div>
    </section>
  );
}

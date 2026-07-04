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
              Setiap Pembangunan yang Baik Selalu Dimulai dari{" "}
              <em className="text-primary">Perencanaan yang Baik.</em>
            </strong>
          </h1>

          <p className="text-gray-600 mb-8 max-w-lg text-left">
            Structura hadir untuk membantu owner merencanakan rumah dan bangunan
            dengan lebih terarah melalui desain, perencanaan anggaran, dokumen
            teknis, serta pendampingan. Kami percaya bahwa keputusan yang tepat
            sejak awal akan menghasilkan pembangunan yang lebih efisien, aman,
            berkualitas, dan sesuai anggaran.
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
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden md:flex items-stretch h-full">
          <img
            src={hero_section_image}
            alt="Cost Planning"
            className="w-full h-full object-cover rounded-xl shadow-sm"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
        </div>
      </div>
    </section>
  );
}

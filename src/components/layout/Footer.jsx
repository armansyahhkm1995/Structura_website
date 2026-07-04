import { Phone, MapPin } from "lucide-react";
import LogoWhite from "../../assets/scc_logo_white.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { whatsappLink } from "../../utils/whatsapp";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2 pb-4">
              <img
                src={LogoWhite}
                alt="Structura Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white text-left">
              Structura membantu owner merencanakan pembangunan rumah dan
              bangunan sejak tahap awal melalui desain, perencanaan anggaran,
              dokumen teknis, serta pendampingan agar proyek berjalan lebih
              terarah, sesuai anggaran, tanpa mengorbankan kualitas,
              keselamatan, dan kenyamanan.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h3 className="text-white font-medium mb-6 text-left md:text-center">
              Menu
            </h3>
            <div className="flex flex-col gap-3 text-sm text-left md:text-center">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-medium"
                    : "text-white hover:text-blue-500"
                }
              >
                Portofolio Kami
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-medium"
                    : "text-white hover:text-blue-500"
                }
              >
                Tentang Kami
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-medium"
                    : "text-white hover:text-blue-500"
                }
              >
                Kontak Kami
              </NavLink>
            </div>
          </div>

          {/* SERVICE */}
          <div>
            <h3 className="text-white font-medium mb-6 text-left md:text-center">
              Layanan Kami
            </h3>
            <ul className="text-left space-y-3 text-sm">
              <li className="text-left md:text-center text-white">
                Rumah Tinggal
              </li>
              <li className="text-left md:text-center text-white">Renovasi</li>
              <li className="text-left md:text-center text-white">
                Bangunan Komersial
              </li>
              <li className="text-left md:text-center text-white">
                Bangunan Sipil & Infrastruktur
              </li>
              <li className="text-left md:text-center text-white">
                Pendampingan & Perizinan
              </li>
            </ul>
          </div>

          {/* CONTACT + CTA */}
          <div>
            <h3 className="text-white font-medium mb-6 text-left">
              Konsultasikan Proyek Anda
            </h3>

            <p className="text-sm text-white mb-4 text-left pb-6">
              Siap Memulai Proyek Anda? Diskusikan kebutuhan pembangunan Anda
              bersama tim Structura.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +6285974785490
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bandung, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between text-white">
          <p>© {new Date().getFullYear()} Structura. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Sesuai Anggaran. Tanpa Mengorbankan Kualitas.
          </p>
        </div>
      </div>
    </footer>
  );
}

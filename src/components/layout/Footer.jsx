import { Mail, Phone, MapPin } from "lucide-react";
import LogoWhite from "../../assets/scc_logo_white.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
              Cost & Construction Consulting yang membantu Anda merencanakan
              biaya proyek dengan lebih terukur, transparan, dan terkendali
              sejak awal.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-white font-medium mb-4 text-left md:text-center">
              Navigasi
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="text-left md:text-center">
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li className="text-left md:text-center">
                <a
                  onClick={() => navigate("/calculator")}
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li className="text-left md:text-center">
                <a href="#projects" className="hover:text-white transition">
                  Project Types
                </a>
              </li>
              <li className="text-left md:text-center">
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-medium mb-4 text-left md:text-center">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition text-left md:text-center">
                Cost Planning
              </li>
              <li className="hover:text-white transition text-left md:text-center">
                BOQ Development
              </li>
              <li className="hover:text-white transition text-left md:text-center">
                Cost Advisory
              </li>
            </ul>
          </div>

          {/* CONTACT + CTA */}
          <div>
            <h3 className="text-white font-medium mb-4 text-left">
              Konsultasikan Proyek Anda
            </h3>

            <p className="text-sm text-gray-400 mb-4 text-left pb-6">
              Diskusikan kebutuhan proyek Anda bersama kami untuk mendapatkan
              perencanaan biaya yang lebih jelas dan terarah.
            </p>

            {/* CTA */}
            {/* <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-gray-900 text-sm font-medium px-5 py-3 rounded-lg hover:bg-gray-200 transition mb-6 text-left"
            >
              Hubungi via WhatsApp
            </a> */}

            {/* CONTACT INFO */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 8xx xxxx xxxx</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>email@structura.id</span>
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

          <p className="mt-2 md:mt-0">Built with clarity & precision.</p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import LogoBlack from "../../assets/scc_logo_black.webp";
import { whatsappLink } from "../../utils/whatsapp";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={LogoBlack} alt="Structura Logo" className="h-8 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Calculator
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-700 hover:text-gray-900"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            Konsultasikan Proyek
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden px-6 overflow-hidden transition-all duration-300 ease-in-out border-t ${
          isOpen
            ? "max-h-96 opacity-100 py-6 translate-y-0"
            : "max-h-0 opacity-0 py-0 -translate-y-2"
        }`}
      >
        <div className="space-y-4">
          <NavLink
            to="/calculator"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block ${
                isActive ? "text-blue-500 font-medium" : "text-gray-700"
              }`
            }
          >
            Calculator
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block ${
                isActive ? "text-blue-500 font-medium" : "text-gray-700"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block ${
                isActive ? "text-blue-500 font-medium" : "text-gray-700"
              }`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block ${
                isActive ? "text-blue-500 font-medium" : "text-gray-700"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block ${
                isActive ? "text-blue-500 font-medium" : "text-gray-700"
              }`
            }
          >
            Contact
          </NavLink>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-500 text-white py-2 rounded-lg"
          >
            Konsultasikan Proyek
          </a>
        </div>
      </div>
    </nav>
  );
}

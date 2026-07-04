import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { deliverables } from "../../../data/home/deliverables";

export default function Deliverables() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-left md:text-center">
          {/* HEADER */}
          <div className="text-left md:text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              <strong className="text-black">
                Kami Mendampingi Setiap Tahap{" "}
              </strong>
              <em className="text-primary">Pembangunan Anda.</em>
            </h1>

            <p className="text-gray-600">
              Mulai dari perencanaan pembangunan, penyusunan anggaran, hingga
              pendampingan selama proyek berjalan agar setiap keputusan lebih
              terarah dan sesuai anggaran.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {deliverables.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                key={index}
                to={service.link}
                className="group rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary transition text-left">
                  {service.title}
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600 text-left">
                  {service.desc}
                </p>

                <ul className="mt-4 space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-primary">✓</span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

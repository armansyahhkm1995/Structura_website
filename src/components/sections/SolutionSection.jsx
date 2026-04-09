import { Link } from "react-router-dom";
import { solutions } from "../../data/solutions";

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-left md:text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Perencanaan Biaya yang Tepat Membuat{" "}
            <span className="text-primary">
              Proyek Lebih Terkendali Sejak Awal
            </span>
          </h1>

          <p className="text-gray-600">
            Dengan pendekatan yang terstruktur, Anda dapat memahami kebutuhan
            biaya secara lebih akurat, mengambil keputusan berbasis data, dan
            menjaga proyek tetap dalam kontrol.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className="group block border rounded-2xl overflow-hidden bg-white hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

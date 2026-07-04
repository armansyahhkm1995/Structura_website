import { preparation } from "../../../data/contact/preparation";

export default function Preparation() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mt-20 max-w-7xl mx-auto px-6">
        <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            <strong className="text-black">Yang Sebaiknya Anda </strong>
            <em className="text-primary">Siapkan</em>
          </h1>
          <p className="text-gray-600">
            Tidak semua data harus sudah tersedia. Semakin lengkap informasi
            yang Anda miliki, semakin mudah kami memahami kebutuhan dan
            memberikan rekomendasi yang lebih akurat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {preparation.map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* TITLE */}
              <h2 className="text-left font-semibold mb-2 text-gray-900">
                <strong className="text-black">{item.title}</strong>
              </h2>

              {/* DESC */}
              <p className="text-left text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

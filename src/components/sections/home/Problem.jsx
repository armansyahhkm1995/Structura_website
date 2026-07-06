import problem_section_image from "../../../assets/problem_section_image.webp";
import { problems } from "../../../data/home/problems";
import { consequences } from "../../../data/home/consequences";

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER 1 */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <h1 className=" text-3xl md:text-4xl font-semibold mb-4">
            <strong className="text-black">
              Sebagian Besar Masalah Pembangunan Rumah Tidak Terjadi di
              Lapangan—
            </strong>
            <em className="text-primary"> Tapi di Perencanaan Awal</em>
          </h1>

          <p className="text-gray-600 text-left md:text-center">
            Sebelum pembangunan dimulai, setiap keputusan mulai dari
            <strong> desain rumah</strong>,
            <strong> perhitungan struktur</strong>,
            <strong> penyusunan RAB</strong>, hingga
            <strong> pengurusan PBG</strong>
            akan memengaruhi biaya, kualitas, dan kelancaran proyek. Tanpa
            perencanaan yang tepat, keputusan-keputusan tersebut dapat
            menyebabkan pembengkakan biaya, penurunan kualitas, hingga hasil
            akhir yang tidak sesuai harapan.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* LEFT IMAGE */}
          <div className="hidden md:block h-full">
            <img
              src={problem_section_image}
              alt="Perencanaan pembangunan rumah dan konstruksi sebelum proyek dimulai"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* RIGHT LIST */}
          <div className="flex flex-col justify-between h-full">
            {problems.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-6 py-6 border-b border-gray-300"
              >
                {/* TEXT */}
                <div>
                  <h3 className="text-left text-lg font-medium text-gray-600 leading-relaxed">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONSEQUENCE */}
        <div className="mt-20">
          <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              <strong className="text-black">Dampaknya pada proyek </strong>
              <em className="text-primary">Anda</em>
            </h1>
            <p className="text-gray-600">
              Kesalahan pada tahap perencanaan, mulai dari desain, struktur,
              anggaran, hingga perizinan, dapat menimbulkan berbagai risiko yang
              saling memengaruhi selama proses pembangunan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consequences.map((item, i) => (
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

        {/* BRIDGE */}
        <div className="text-left md:text-center max-w-3xl mx-auto mt-10">
          <p className="text-gray-500">
            Sebagian besar risiko pembangunan sebenarnya dapat diantisipasi
            melalui perencanaan yang matang sejak awal, sebelum pekerjaan
            konstruksi dimulai.
          </p>
        </div>
      </div>
    </section>
  );
}

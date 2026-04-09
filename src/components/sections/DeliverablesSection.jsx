import { items } from "../../data/deliverables";

export default function WhatYouGet() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Apa yang Anda <span className="text-primary">Dapatkan</span>
          </h1>
          <p className="text-gray-600">
            Output yang jelas dan dapat langsung digunakan untuk membantu Anda
            mengontrol proyek dengan lebih terarah.
          </p>
        </div>

        {/* GRID */}
        <div className="space-y-6">
          {/* TOP */}
          <div className="grid md:grid-cols-3 gap-6">
            {items.slice(0, 3).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

          {/* BOTTOM */}
          <div className="grid md:grid-cols-2 gap-6 md:max-w-3xl mx-auto">
            {items.slice(3, 5).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item }) {
  const Icon = item.icon;

  return (
    <div className="group bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]">
      {/* ICON */}
      <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
        <Icon className="w-5 h-5 text-gray-700 transition-colors duration-300 group-hover:text-blue-600" />
      </div>

      {/* TITLE */}
      <h2 className="text-lg font-semibold mb-2 text-gray-900 transition-colors duration-300 group-hover:!text-blue-600">
        {item.title}
      </h2>

      {/* DESC */}
      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
    </div>
  );
}

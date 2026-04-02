import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Bandung",
      comment:
        "Saya jadi tahu total biaya dari awal. Sangat membantu sebelum mulai bangun rumah.",
      rating: 5,
    },
    {
      name: "Rina Putri",
      location: "Jakarta",
      comment:
        "Detail BOQ-nya sangat jelas. Jadi lebih percaya diri saat diskusi dengan kontraktor.",
      rating: 5,
    },
    {
      name: "Agus Setiawan",
      location: "Bekasi",
      comment:
        "Biaya jadi lebih terkontrol dan tidak overbudget seperti pengalaman sebelumnya.",
      rating: 5,
    },
    {
      name: "Dewi Lestari",
      location: "Depok",
      comment:
        "Insight yang diberikan sangat membantu dalam memilih material yang efisien.",
      rating: 5,
    },
    {
      name: "Fajar Nugroho",
      location: "Bogor",
      comment:
        "Prosesnya jelas dan komunikatif. Saya jadi paham alur biaya proyek.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Apa Kata <span className="text-primary">Klien Kami</span>
          </h1>
          <p className="text-gray-600">
            Pengalaman nyata dari klien yang telah merencanakan proyeknya dengan
            lebih terarah.
          </p>
        </div>
      </div>

      {/* ROWS */}
      <div className="space-y-6">
        <MarqueeRow items={testimonials} direction="right" />
        <MarqueeRow items={testimonials} direction="left" />
        <MarqueeRow items={testimonials} direction="right" />
      </div>
    </section>
  );
}

/* ========================= */
/* ROW COMPONENT */
/* ========================= */

function MarqueeRow({ items, direction }) {
  const controls = useAnimation();

  const duration = 30; // makin besar makin lambat

  useEffect(() => {
    controls.start({
      x: direction === "right" ? ["-50%", "0%"] : ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    });
  }, [controls, direction]);

  const handleHoverStart = () => {
    controls.stop();
    controls.start({
      x: direction === "right" ? ["-50%", "0%"] : ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: duration * 2, // slowdown
        ease: "linear",
      },
    });
  };

  const handleHoverEnd = () => {
    controls.stop();
    controls.start({
      x: direction === "right" ? ["-50%", "0%"] : ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    });
  };

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div animate={controls} className="flex gap-6 w-max">
        {[...items, ...items].map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

/* ========================= */
/* CARD */
/* ========================= */

function TestimonialCard({ item }) {
  return (
    <div className="min-w-[280px] max-w-[320px] bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 content-between">
      {/* STARS */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* COMMENT */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4 text-left italic">
        "{item.comment}"
      </p>

      {/* USER */}
      <div>
        <h4 className="font-semibold text-gray-900 text-sm text-left">
          {item.name}
        </h4>
        <p className="text-xs text-gray-500 text-left">{item.location}</p>
      </div>
    </div>
  );
}

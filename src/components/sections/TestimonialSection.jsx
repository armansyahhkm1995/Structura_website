import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import MarqueeRow from "../ui/MarqueeRow";
import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialSection() {
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

/* ========================= */
/* CARD */
/* ========================= */

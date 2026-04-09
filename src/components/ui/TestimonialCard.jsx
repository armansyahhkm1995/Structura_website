import { Star } from "lucide-react";

export default function TestimonialCard({ item }) {
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

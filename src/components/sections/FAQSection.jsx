import { faqs } from "../../data/faq";
import FAQItem from "../ui/FAQItem";
import useFAQ from "../hooks/useFAQ";

export default function FAQSection() {
  const { openId, toggleFAQ } = useFAQ();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Pertanyaan yang Sering{" "}
            <span className="text-primary">Diajukan</span>
          </h1>
          <p className="text-gray-600">
            Beberapa hal yang mungkin masih Anda pertimbangkan sebelum memulai.
          </p>
        </div>

        {/* GRID FIXED (NO SHIFT BUG) */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {faqs
              .filter((_, i) => i % 2 === 0)
              .map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  openId={openId}
                  toggleFAQ={toggleFAQ}
                />
              ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {faqs
              .filter((_, i) => i % 2 !== 0)
              .map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  openId={openId}
                  toggleFAQ={toggleFAQ}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

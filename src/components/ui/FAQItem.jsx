import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ faq, openId, setOpenId }) {
  const isOpen = openId === faq.id;

  return (
    <motion.div
      layout
      onClick={() => setOpenId(isOpen ? null : faq.id)}
      className={`bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer ${
        isOpen ? "border-primary/40 bg-primary/5" : ""
      }`}
    >
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium text-gray-900">{faq.question}</h3>

        {/* ICON */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </div>

      {/* ANSWER */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-sm mt-4 leading-relaxed text-left">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

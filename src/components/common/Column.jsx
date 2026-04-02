import { motion } from "framer-motion";
import TestimonialCard from "../ui/TestimonialCard";

export default function Column({ items, direction = "up", delay = 0 }) {
  return (
    <div className="overflow-hidden h-[500px]">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: direction === "up" ? -300 : 300 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "linear",
          delay: delay,
        }}
        className="space-y-4"
      >
        {[...items, ...items].map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

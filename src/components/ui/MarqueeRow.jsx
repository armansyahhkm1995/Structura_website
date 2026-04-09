import { motion } from "framer-motion";
import TestimonialCard from "../ui/TestimonialCard";
import useMarquee from "../hooks/useMarquee";

export default function MarqueeRow({ items, direction }) {
  const { controls, handleHoverStart, handleHoverEnd } = useMarquee(direction);

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

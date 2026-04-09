import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import TestimonialCard from "../ui/TestimonialCard";

export default function MarqueeRow({ items, direction }) {
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

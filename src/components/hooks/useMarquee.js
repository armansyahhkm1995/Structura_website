import { useEffect } from "react";
import { useAnimation } from "framer-motion";

export default function useMarquee(direction, duration = 30) {
  const controls = useAnimation();

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

  return { controls, handleHoverStart, handleHoverEnd };
}

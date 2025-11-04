import { motion } from "framer-motion";
import React from "react";
import { useMemo } from "react";

export const MinimalStarfield = React.memo(() => {
  const stars = useMemo(
    () =>
      Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-black via-[#0e001b] to-black">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            backgroundColor: "white",
            boxShadow: `0 0 ${star.size * 2}px white`,
          }}
        />
      ))}
    </div>
  );
});

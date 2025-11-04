import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export const LoadingHeader = () => {
  const phrases = [
    "Explorando el universo...",
    "Investigando galaxias...",
    "Definiendo estaciones...",
    "Analizando constelaciones...",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 mb-3">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="text-[#54ED4C] w-8 h-8" />
      </motion.div>

      <div className="h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-white text- font-bold tracking-wide"
          >
            {phrases[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

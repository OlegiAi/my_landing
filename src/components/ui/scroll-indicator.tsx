"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("work-reality");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToNext}
      className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        className="flex items-center justify-center"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:scale-110 transition-transform"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.div>
    </motion.button>
  );
}

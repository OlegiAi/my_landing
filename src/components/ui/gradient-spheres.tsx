"use client";

import { motion } from "framer-motion";

export function GradientSpheres() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sphere 1 - Top Left */}
      <motion.div
        className="absolute top-0 left-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 rounded-full opacity-40 dark:opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(156, 163, 175, 0.6) 0%, rgba(156, 163, 175, 0) 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sphere 2 - Top Right */}
      <motion.div
        className="absolute top-20 right-0 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 rounded-full opacity-35 dark:opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(107, 114, 128, 0.5) 0%, rgba(107, 114, 128, 0) 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sphere 3 - Bottom Center */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-72 md:w-[500px] h-48 sm:h-72 md:h-[500px] rounded-full opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(156, 163, 175, 0.5) 0%, rgba(156, 163, 175, 0) 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

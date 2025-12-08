"use client";

import { motion } from "framer-motion";

export function FloatingAILogos() {
  const logos = [
    { name: "Claude", position: { top: "20%", left: "5%" } },
    { name: "Perplexity", position: { top: "40%", left: "8%" } },
    { name: "Midjourney", position: { top: "65%", left: "6%" } },
    { name: "Sonnet", position: { top: "25%", right: "6%" } },
    { name: "ChatGPT", position: { top: "45%", right: "4%" } },
    { name: "NanoBanano", position: { top: "70%", right: "8%" } },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map((logo, index) => (
        <motion.div
          key={`${logo.name}-${index}`}
          className="absolute text-muted-foreground/30 font-semibold text-lg select-none"
          style={{
            ...logo.position,
            filter: "blur(1px)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.9, 1.1, 0.9],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8 + index * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          {logo.name}
        </motion.div>
      ))}
    </div>
  );
}

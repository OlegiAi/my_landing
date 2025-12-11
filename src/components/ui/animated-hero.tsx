"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientSpheres } from "@/components/ui/gradient-spheres";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { FloatingAILogos } from "@/components/ui/floating-ai-logos";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["посты", "сторис", "лендинги", "сценарии reals", "картинки", "анализ ЦА", "кастдевы"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div id="hero" className="w-full relative h-screen flex items-center justify-center">
      <GradientSpheres />
      <FloatingAILogos />
      <div className="container mx-auto px-4">
        <div className="relative flex gap-8 items-center justify-center flex-col z-10">
          <div>
            <Button variant="secondary" size="sm">
              Практикум по нейросетям
            </Button>
          </div>
          <div className="flex gap-4 flex-col items-center w-full">
            <h1 className="text-5xl md:text-7xl max-w-2xl mx-auto tracking-tighter text-center font-regular">
              <span className="whitespace-nowrap font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">Делегируй ИИ</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl mx-auto text-center">
              Делай 80% работы с контент-маркетингом через нейросети и экономь 2-4 часа каждый день, создав команду из нужных тебе ИИ-сотрудников
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="text-lg px-10"
              onClick={() => {
                const element = document.querySelector('#program');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Посмотреть программу
            </Button>
          </div>
          <div className="flex justify-center mt-8">
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };

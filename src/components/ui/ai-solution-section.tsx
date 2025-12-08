'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AISolutionSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center max-w-7xl mx-auto">
          {/* Левая часть - Картинка */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-start items-start order-2 lg:order-1"
          >
            <Image
              src="/расслаблен.jpg"
              alt="Расслабленный персонаж"
              width={400}
              height={400}
              className="w-full max-w-xs lg:max-w-sm object-contain"
              priority
            />
          </motion.div>

          {/* Правая часть - Текст */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left order-1 lg:order-2"
          >
            {/* Заголовок */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              <span className="text-white">Отдай свою работу </span>
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                нейросетям
              </span>
            </motion.h2>

            {/* Подзаголовок */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12"
            >
              Войди в число тех, кто делегирует ИИ задачи по контенту и маркетингу. Ускорь свою работу в 5 раз и сделай себе ИИ-сотрудников, которые будут выполнять 80% задач по контенту и маркетингу.
            </motion.p>

            {/* CTA плашка */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 hover:bg-white/10 transition-all inline-block"
            >
              <p className="text-gray-200 font-medium text-base">
                Все это ты получишь на практикуме по нейросетям
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

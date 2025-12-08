'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AISolutionSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="container mx-auto px-4 py-20 relative z-10">
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
              Войди в{' '}
              <span className="text-white font-bold">20%</span> тех, кто делегирует ИИ задачи по контенту и маркетингу.{' '}
              <span className="text-gray-200 font-semibold">
                Ускорь свою работу в 5 раз
              </span>{' '}
              и сделай себе ИИ-сотрудников, которые будут выполнять{' '}
              <span className="text-white font-bold">80% задач</span>.
            </motion.p>

            {/* Декоративные элементы */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { text: 'Ускорь работу в 5 раз' },
                { text: 'ИИ-сотрудники' },
                { text: 'Автоматизация 80% задач' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-all"
                >
                  <p className="text-gray-300 font-medium text-sm">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

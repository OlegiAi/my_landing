'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ContentFactorySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center max-w-7xl mx-auto">
          {/* Левая часть - Текст */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Заголовок */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              <span className="text-white">Главный результат — </span>
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                контент-завод
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
              У тебя будет свои ИИ-сотрудники, которые будут превращать один пост в разные форматы контента. Либо же работать отдельно по нужному тебе формату — тебе нужно лишь поставить задачу и дать контекст своего проекта.
            </motion.p>
          </motion.div>

          {/* Правая часть - Картинка */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end items-start"
          >
            {/* Декоративный фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-3xl" />

            {/* Контейнер с рамкой */}
            <motion.div
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all"
            >
              <Image
                src="/проекты.png"
                alt="Проекты"
                width={500}
                height={500}
                className="w-full max-w-md lg:max-w-lg object-contain rounded-2xl"
                priority
              />

              {/* Декоративные элементы по углам */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

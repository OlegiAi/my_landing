'use client';

import { motion } from 'framer-motion';

export function WorkRealitySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Заголовок */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            <span className="text-white">Как выглядит работа </span>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              80% людей
            </span>
            <span className="text-white"> в онлайне</span>
          </motion.h2>

          {/* Подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 leading-relaxed"
          >
            Каждый день бесконечные задачи по контенту и маркетингу.{' '}
            <span className="text-gray-200 font-semibold">
              Нужно что-то придумывать и делать самому
            </span>{' '}
            или платить{' '}
            <span className="text-white font-bold">30-100к</span>, чтобы делали за тебя.
          </motion.p>

          {/* Декоративные элементы */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { text: 'Контент каждый день' },
              { text: 'Большие расходы' },
              { text: 'Нет времени на рост' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <p className="text-gray-300 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

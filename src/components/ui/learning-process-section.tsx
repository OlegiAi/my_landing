'use client';

import { motion } from 'framer-motion';

export function LearningProcessSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Заголовок */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white text-center mb-16"
          >
            Как проходит обучение
          </motion.h2>

          {/* Формат */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
              Формат:{' '}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                текстовый практикум в Notion
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: '📚', text: 'Все материалы структурированы по блокам' },
                { icon: '⚡', text: 'Готовые инструкции «скопировал-вставил»' },
                { icon: '🔗', text: 'Ссылки на нейросети и примеры промптов' },
                { icon: '🔄', text: 'Возвращаешься к нужному разделу в любой момент' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                    className="text-5xl mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed text-center"
            >
              Для работы нужна подписка на нейросеть Claude, но все применимо и к другим ИИ, где есть функция проектов
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

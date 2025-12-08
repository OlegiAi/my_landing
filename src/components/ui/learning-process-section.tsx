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
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Формат:{' '}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Текстовый воркшоп в Notion
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Все материалы структурированы по блокам',
                'Готовые инструкции "скопировал-вставил-использовал"',
                'Ссылки на нейросети и примеры промптов',
                'Изучаешь в своем темпе, возвращаешься к нужному разделу в любой момент',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-gray-400 text-xl mt-1">•</span>
                  <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Основная нейросеть */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Основная нейросеть:{' '}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Claude
              </span>
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              В 90% используем Claude — он пишет в разы живее ChatGPT, без шаблонных оборотов типа
              "важно отметить" и "погружаясь в мир".
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

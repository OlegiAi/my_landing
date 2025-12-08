'use client';

import { motion } from 'framer-motion';

const icons = {
  blocks: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  copy: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  link: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  refresh: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
    </svg>
  ),
};

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
                { icon: icons.blocks, text: 'Все материалы структурированы по блокам' },
                { icon: icons.copy, text: 'Готовые инструкции «скопировал-вставил»' },
                { icon: icons.link, text: 'Ссылки на нейросети и примеры промптов' },
                { icon: icons.refresh, text: 'Возвращаешься к нужному разделу в любой момент' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-white/20 transition-all cursor-pointer group"
                >
                  <motion.div
                    className="text-gray-400 group-hover:text-white transition-colors duration-300 mb-6"
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
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

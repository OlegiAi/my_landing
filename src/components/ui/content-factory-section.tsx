'use client';

import { motion } from 'framer-motion';

const floatingItems = [
  { text: 'Посты', delay: 0, duration: 20, x: '-20%', y: '10%' },
  { text: 'Рилсы', delay: 2, duration: 25, x: '80%', y: '20%' },
  { text: 'Сторис', delay: 4, duration: 22, x: '-10%', y: '70%' },
  { text: 'Сценарии', delay: 1, duration: 24, x: '85%', y: '75%' },
  { text: 'Лендинги', delay: 3, duration: 23, x: '10%', y: '85%' },
  { text: 'Статьи', delay: 5, duration: 21, x: '90%', y: '40%' },
];

export function ContentFactorySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Floating content pills */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-gray-400 text-sm font-medium pointer-events-none"
          initial={{ x: item.x, y: item.y, opacity: 0 }}
          animate={{
            x: [item.x, `calc(${item.x} + 30px)`, item.x],
            y: [item.y, `calc(${item.y} - 40px)`, item.y],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Заголовок */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-12"
          >
            <span className="text-white">Главный результат — </span>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              свои ИИ-сотрудники
            </span>
          </motion.h2>

          {/* Список результатов */}
          <div className="space-y-6">
            {[
              'Научишься их создавать и обучать под любую работу с контент-маркетингом',
              'Сможешь из одного поста делать разные форматы контента за 2 минуты',
              'Узнаешь принципы работы и фишки, применимые везде',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-white bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent flex-shrink-0">
                    {index + 1}.
                  </span>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-left">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

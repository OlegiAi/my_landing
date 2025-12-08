'use client';

import { motion } from 'framer-motion';

const floatingItemsData = [
  // Left side items
  { text: 'Посты', side: 'left', startY: 100, endY: 300, duration: 15, delay: 0 },
  { text: 'Рилсы', side: 'left', startY: 400, endY: 200, duration: 18, delay: 2 },
  { text: 'Сторис', side: 'left', startY: 600, endY: 450, duration: 16, delay: 4 },

  // Right side items
  { text: 'Сценарии', side: 'right', startY: 150, endY: 350, duration: 17, delay: 1 },
  { text: 'Лендинги', side: 'right', startY: 450, endY: 250, duration: 19, delay: 3 },
  { text: 'Статьи', side: 'right', startY: 550, endY: 400, duration: 16, delay: 5 },
];

export function ContentFactorySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Floating content pills */}
      {floatingItemsData.map((item, index) => (
        <motion.div
          key={index}
          className="absolute bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full px-8 py-4 text-gray-500 text-base font-medium pointer-events-none whitespace-nowrap"
          style={{
            [item.side]: '-200px',
          }}
          initial={{
            y: item.startY,
            opacity: 0,
            x: 0
          }}
          animate={{
            x: item.side === 'left' ? [-50, 50, -50] : [50, -50, 50],
            y: [item.startY, item.endY, item.startY],
            opacity: [0, 0.6, 0],
            rotate: [0, 5, -5, 0],
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

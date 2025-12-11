'use client';

import { motion } from 'framer-motion';

const floatingItemsData = [
  // Left side items
  { text: 'Посты', side: 'left', startY: '20%', endY: '30%', duration: 15, delay: 0 },
  { text: 'Рилсы', side: 'left', startY: '45%', endY: '35%', duration: 18, delay: 2 },
  { text: 'Сторис', side: 'left', startY: '65%', endY: '55%', duration: 16, delay: 4 },

  // Right side items
  { text: 'Сценарии', side: 'right', startY: '25%', endY: '35%', duration: 17, delay: 1 },
  { text: 'Лендинги', side: 'right', startY: '50%', endY: '40%', duration: 19, delay: 3 },
  { text: 'Статьи', side: 'right', startY: '70%', endY: '60%', duration: 16, delay: 5 },
];

export function ContentFactorySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-muted/30 overflow-hidden">

      {/* Floating content pills */}
      {floatingItemsData.map((item, index) => (
        <motion.div
          key={index}
          className="absolute bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full px-8 py-4 text-gray-400 text-base font-medium pointer-events-none whitespace-nowrap hidden lg:block"
          style={{
            [item.side]: '5%',
            top: item.startY,
          }}
          initial={{
            opacity: 0,
            x: 0
          }}
          animate={{
            x: item.side === 'left' ? [-30, 30, -30] : [30, -30, 30],
            top: [item.startY, item.endY, item.startY],
            opacity: [0, 0.7, 0],
            rotate: [0, 3, -3, 0],
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
            <span className="text-white">Главный результат —<br /> </span>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              свои ИИ-сотрудники
            </span>
          </motion.h2>

          {/* Список результатов */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:bg-neutral-900/60 hover:border-neutral-700/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-left mb-6">
                    Научишься их создавать и обучать под любую задачу с контент-маркетингом. И дальше останется только ставить задачи в чате и давать немного правок.
                  </p>
                  <p className="text-base text-gray-400 italic mb-4">
                    Пример, как выглядит ИИ-сотрудник
                  </p>
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="/пример ии сотрудника.png"
                      alt="Пример ИИ-сотрудника в Claude Projects"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

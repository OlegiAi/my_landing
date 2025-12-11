"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

export function BeforeAfterSection() {
  const beforePoints = [
    "Придумываешь идеи контента и пишешь тексты по 2-4 часа",
    "Нанимаешь подрядчиков за 30-100к в месяц, тратишь время и нервы на работу с ними",
    "Нерегулярно ведешь соцсети, выгораешь от контента",
    "Неделю собираешь тексты для сайта, продающую статью или воронку",
    "ChatGPT выдает шаблонные тексты с оборотами «Это не просто текст. Это реальный... Без сторис. Без найма. Просто сделал миллион»"
  ];

  const afterPoints = [
    "Генерируешь контент-план на 30 дней за 10 минут и пишешь пост за 5 минут",
    "Тратишь всего 2000₽ за нейросеть и получаешь сразу 2-5 ИИ-сотрудников",
    "Придумываешь идеи вместе с ИИ и получаешь тексты в нужном стиле с продающими смыслами",
    "За 1-2 часа создаешь все тексты для длинного контента (статьи, воронки, сценарии)",
    "Получаешь живые тексты, почти неотличимые от написанных людьми"
  ];

  return (
    <div id="results" className="w-full relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          Как изменится твоя жизнь<br />после практикума
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {/* ДО практикума */}
          <div className="relative rounded-lg p-[2px] flex">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <div className="relative bg-muted/50 rounded-lg p-8 border border-border shadow-lg shadow-gray-500/10 hover:shadow-xl hover:shadow-gray-400/10 transition-all duration-300 flex flex-col w-full">
              <h3 className="text-2xl font-semibold mb-6 text-muted-foreground">
                ДО практикума:
              </h3>
              <ul className="space-y-4 flex-1">
                {beforePoints.map((point, index) => (
                  <li key={index} className="flex items-start text-muted-foreground">
                    <span className="mr-3 mt-1 text-destructive flex-shrink-0">✗</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ПОСЛЕ практикума */}
          <div className="relative rounded-lg p-[2px] flex">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <div className="relative bg-primary/5 rounded-lg p-8 border-2 border-primary/20 shadow-lg shadow-gray-500/10 hover:shadow-xl hover:shadow-gray-400/10 transition-all duration-300 flex flex-col w-full">
              <h3 className="text-2xl font-semibold mb-6">
                ПОСЛЕ практикума:
              </h3>
              <ul className="space-y-4 flex-1">
                {afterPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1 text-green-600 flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

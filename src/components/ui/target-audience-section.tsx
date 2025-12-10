"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

export function TargetAudienceSection() {
  const audiences = [
    {
      title: "1. Копирайтер / SMM-щик / Маркетолог",
      needs: [
        "Писать контент быстрее, чтобы брать больше проектов",
        "Генерировать живые тексты без шаблонов",
        "Увеличить заработок, экономя время на рутине"
      ],
      result: "Поймешь, как глубинно обучать нейросети и получать живые тексты, почти неотличимые от написанных людьми. Сможешь брать в 2-3 раза больше проектов, экономя время на создании контента."
    },
    {
      title: "2. Эксперт / Владелец онлайн-школы / Бизнес",
      needs: [
        "Регулярно вести соцсети, но нет времени",
        "Создавать тексты для воронок, сайтов, рассылок",
        "Не платить 50-100к подрядчикам"
      ],
      result: "Создашь своих ИИ-сотрудников под разные задачи. Не нужно будет нанимать штат — один человек с нейросетями заменит 2-5 специалистов. Сэкономишь 100-300к рублей в месяц на зарплатах."
    },
    {
      title: "3. Фрилансер / Предприниматель",
      needs: [
        "Продвигаться в интернете, но нет навыков контента",
        "Быстро создавать тексты для своих проектов",
        "Не выгорать от регулярности"
      ],
      result: "Получишь готовые решения для любых контент-задач. От постов до лендингов. Просто выбираешь задачу — и получаешь инструкцию + промпты. Сможешь вести проекты сам без найма дорогих специалистов."
    },
    {
      title: "4. Новичок в нейросетях",
      needs: [
        "Разобраться с ИИ с нуля",
        "Научиться создавать качественный контент",
        "Понять, как это вообще работает"
      ],
      result: "70% моих учеников никогда не работали с ИИ. Все объясняю с нуля. Весь практикум построен по принципу \"скопировал-вставил-получил результат\". ИИ интуитивно понятны — справится даже технический ноль."
    }
  ];

  return (
    <div id="for-whom" className="w-full bg-muted/30">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          Для кого этот практикум
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div key={index} className="relative rounded-lg p-[2px]">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative bg-background rounded-lg p-8 shadow-md shadow-gray-500/5 border border-border hover:shadow-lg hover:shadow-gray-400/10 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold mb-6">
                  {audience.title}
                </h3>

                <div className="mb-6">
                  <p className="font-semibold mb-3 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                    Тебе нужно:
                  </p>
                  <ul className="space-y-2">
                    {audience.needs.map((need, needIndex) => (
                      <li key={needIndex} className="text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-3 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                    После практикума:
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function ProgramSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "1 модуль. Углубленное обучение",
      content: (
        <div className="space-y-6 pt-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">1.</span>
              <div>
                <h4 className="font-semibold mb-1">Создание проекта и углубленное обучение</h4>
                <p className="text-sm text-muted-foreground">
                  Научишься создавать собственный проект в Claude и обучать нейросеть под конкретную задачу. Это основа — без неё ИИ будет выдавать шаблоны.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">2.</span>
              <div>
                <h4 className="font-semibold mb-1">Анализ целевой аудитории и интервью (кастдевы)</h4>
                <p className="text-sm text-muted-foreground">
                  Получишь готовые промпты для анализа ЦА через нейросеть. Результат совпадает с реальными интервью, но экономишь неделю времени.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">3.</span>
              <div>
                <h4 className="font-semibold mb-1">Распаковка экспертности</h4>
                <p className="text-sm text-muted-foreground">
                  ИИ вытащит из твоей головы всю экспертность, структурирует её и упакует в контент. Больше не нужно мучиться вопросом &ldquo;о чем писать&rdquo;.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">4.</span>
              <div>
                <h4 className="font-semibold mb-1">Общие советы и рекомендации</h4>
                <p className="text-sm text-muted-foreground">
                  Лучшие практики из 6 месяцев работы: какие ошибки не делать, как проверять качество текстов, как дообучать ИИ по ходу работы.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 mt-6">
            <h4 className="font-semibold text-lg mb-3">
              Бонус: реальный убийца ChatGPT — нейросеть Perplexity
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Секретный инструмент для исследований и анализа. Работает как поисковик + ИИ одновременно. Находит актуальную информацию и сразу даёт готовый ответ.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2 модуль. Делаем контент разных форматов",
      content: (
        <div className="space-y-6 pt-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">1.</span>
              <div>
                <h4 className="font-semibold mb-1">Посты для соцсетей</h4>
                <p className="text-sm text-muted-foreground">
                  Генерация постов в твоём стиле за 10-15 минут. Получишь промпты для разных форматов: экспертные, продающие, вовлекающие, сторителлинг.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">2.</span>
              <div>
                <h4 className="font-semibold mb-1">Создание контент-плана</h4>
                <p className="text-sm text-muted-foreground">
                  Контент-план на 30 дней за 10 минут. ИИ предложит темы, форматы и распределит их по дням с учётом твоих целей.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">3.</span>
              <div>
                <h4 className="font-semibold mb-1">Сценарии для сторис как у топов рынка</h4>
                <p className="text-sm text-muted-foreground">
                  Структура и тексты для сторис, которые вовлекают и продают. Как у экспертов с миллионными охватами.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">4.</span>
              <div>
                <h4 className="font-semibold mb-1">Сценарии коротких видео (reels)</h4>
                <p className="text-sm text-muted-foreground">
                  Готовые сценарии для Reels/Shorts с хуками, удержанием внимания и призывами к действию. Подходит даже если не умеешь в видео.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">5.</span>
              <div>
                <h4 className="font-semibold mb-1">Сценарии для видео на YouTube</h4>
                <p className="text-sm text-muted-foreground">
                  Полноценные сценарии для длинных роликов: структура, тайминг, что говорить в каждой части, как удерживать до конца.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">6.</span>
              <div>
                <h4 className="font-semibold mb-1">Картинки в GPT и Sora</h4>
                <p className="text-sm text-muted-foreground">
                  Промпты для генерации визуала под твой контент. От иллюстраций для постов до обложек курсов.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">7.</span>
              <div>
                <h4 className="font-semibold mb-1">Работа в Gamma, создание сайта</h4>
                <p className="text-sm text-muted-foreground">
                  Создание лендингов и презентаций через ИИ. Gamma + нейросети = готовый сайт за пару часов без кодинга.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">8.</span>
              <div>
                <h4 className="font-semibold mb-1">Личные помощники на каждый день в ChatGPT / Claude Sonnet</h4>
                <p className="text-sm text-muted-foreground">
                  Настройка персональных ИИ-ассистентов для разных задач: один для контента, второй для продаж, третий для аналитики.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-lg font-semibold text-muted-foreground flex-shrink-0">9.</span>
              <div>
                <h4 className="font-semibold mb-1">Тексты для сайтов (инфобиз)</h4>
                <p className="text-sm text-muted-foreground">
                  Лендинги, продающие страницы, воронки — всё для инфобизнеса. Промпты дают структуру + тексты, которые конвертят.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "3 модуль. Пример, как выглядит обучение проекта",
      content: (
        <div className="space-y-6 pt-6">
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Как я делаю все по шагам (на примере постов для фитнес-тренера)
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Здесь ты увидишь весь процесс от А до Я на живом примере:
            </p>
            <ul className="space-y-3">
              <li className="text-muted-foreground flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Как создаю проект для фитнес-тренера с нуля</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Какие файлы загружаю для обучения (примеры постов, стиль, экспертность)</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Какие промпты использую для настройки ИИ</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Как тестирую результат и дообучаю, если что-то не так</span>
              </li>
              <li className="text-muted-foreground flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span>Как получаю готовые посты, которые выглядят живыми</span>
              </li>
            </ul>
          </div>

          <div className="bg-accent/50 rounded-lg p-6 border border-border">
            <p className="leading-relaxed">
              Это пошаговый разбор, чтобы ты точно понял механику и смог повторить для своей ниши.
            </p>
            <p className="leading-relaxed mt-3">
              После этого примера сможешь создать проект под любую задачу: для себя, для клиента, для другой ниши — принцип один и тот же.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="program" className="w-full">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          ПРОГРАММА ПРАКТИКУМА
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Что будет внутри:
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Табы */}
          <div className="flex flex-col md:flex-row gap-3 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 px-6 py-4 text-left font-semibold text-base md:text-lg rounded-lg border-2 transition-all duration-300 ${
                  activeTab === index
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Контент активного таба */}
          <div className="relative rounded-lg p-[2px]">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <div className="relative min-h-[400px] rounded-lg border border-border bg-card p-6 md:p-8 shadow-lg shadow-gray-500/10 hover:shadow-xl hover:shadow-gray-400/20 transition-all duration-300">
              {tabs[activeTab].content}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector('#pricing-info');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Узнать стоимость
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

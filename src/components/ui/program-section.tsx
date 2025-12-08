"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function ProgramSection() {
  return (
    <div id="program" className="w-full">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          ПРОГРАММА ПРАКТИКУМА
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Что будет внутри:
        </p>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline">
                1. Обязательная подготовка в углубленном обучении
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <div className="space-y-6 pt-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-start gap-2">
                      <span>🔧</span>
                      <span>Создание проекта и углубленное обучение</span>
                    </h4>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      Научишься создавать собственный проект в Claude и обучать нейросеть под конкретную задачу. Это основа — без неё ИИ будет выдавать шаблоны.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-start gap-2">
                      <span>👥</span>
                      <span>Анализ целевой аудитории и интервью (кастдевы)</span>
                    </h4>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      Получишь готовые промпты для анализа ЦА через нейросеть. Результат совпадает с реальными интервью, но экономишь неделю времени.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-start gap-2">
                      <span>🤓</span>
                      <span>Распаковка экспертности</span>
                    </h4>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      ИИ вытащит из твоей головы всю экспертность, структурирует её и упакует в контент. Больше не нужно мучиться вопросом "о чем писать".
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-start gap-2">
                      <span>💡</span>
                      <span>Общие советы и рекомендации</span>
                    </h4>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      Лучшие практики из 6 месяцев работы: какие ошибки не делать, как проверять качество текстов, как дообучать ИИ по ходу работы.
                    </p>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h4 className="font-semibold text-lg flex items-start gap-2 mb-3">
                      <span>🎁</span>
                      <span>Бонус: реальный убийца ChatGPT (не кликбейт) нейросеть Perplexity</span>
                    </h4>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      Секретный инструмент для исследований и анализа. Работает как поисковик + ИИ одновременно. Находит актуальную информацию и сразу даёт готовый ответ.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline">
                2. Рекомендации и материалы по каждой задаче
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <div className="space-y-4 pt-4">
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-2xl">📝</span>
                      <div>
                        <h4 className="font-semibold mb-1">Посты для соцсетей</h4>
                        <p className="text-sm text-muted-foreground">
                          Генерация постов в твоём стиле за 10-15 минут. Получишь промпты для разных форматов: экспертные, продающие, вовлекающие, сторителлинг.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-2xl">📊</span>
                      <div>
                        <h4 className="font-semibold mb-1">Создание контент-плана</h4>
                        <p className="text-sm text-muted-foreground">
                          Контент-план на 30 дней за час. ИИ предложит темы, форматы и распределит их по дням с учётом твоих целей.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-2xl">📱</span>
                      <div>
                        <h4 className="font-semibold mb-1">Сценарии для сторис как у топов рынка</h4>
                        <p className="text-sm text-muted-foreground">
                          Структура и тексты для сторис, которые вовлекают и продают. Как у экспертов с миллионными охватами.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-2xl">🎬</span>
                      <div>
                        <h4 className="font-semibold mb-1">Сценарии коротких видео (reels)</h4>
                        <p className="text-sm text-muted-foreground">
                          Готовые сценарии для Reels/Shorts с хуками, удержанием внимания и призывами к действию. Подходит даже если не умеешь в видео.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-2xl">📺</span>
                      <div>
                        <h4 className="font-semibold mb-1">Сценарии для видео на YouTube</h4>
                        <p className="text-sm text-muted-foreground">
                          Полноценные сценарии для длинных роликов: структура, тайминг, что говорить в каждой части, как удерживать до конца.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-2xl">🖼️</span>
                      <div>
                        <h4 className="font-semibold mb-1">Картинки в GPT и Sora</h4>
                        <p className="text-sm text-muted-foreground">
                          Промпты для генерации визуала под твой контент. От иллюстраций для постов до обложек курсов.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-2xl">✏️</span>
                      <div>
                        <h4 className="font-semibold mb-1">Работа в Gamma, создание сайта</h4>
                        <p className="text-sm text-muted-foreground">
                          Создание лендингов и презентаций через ИИ. Gamma + нейросети = готовый сайт за пару часов без кодинга.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-2xl">👤</span>
                      <div>
                        <h4 className="font-semibold mb-1">Личные помощники на каждый день в ChatGPT / Claude Sonnet</h4>
                        <p className="text-sm text-muted-foreground">
                          Настройка персональных ИИ-ассистентов для разных задач: один для контента, второй для продаж, третий для аналитики.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <span className="text-2xl">💻</span>
                      <div>
                        <h4 className="font-semibold mb-1">Тексты для сайтов (инфобиз)</h4>
                        <p className="text-sm text-muted-foreground">
                          Лендинги, продающие страницы, воронки — всё для инфобизнеса. Промпты дают структуру + тексты, которые конвертят.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline">
                3. Пример, как выглядит обучение проекта
              </AccordionTrigger>
              <AccordionContent className="text-base">
                <div className="space-y-6 pt-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-start gap-2">
                      <span>📋</span>
                      <span>Как я делаю все по шагам (на примере постов для фитнес-тренера)</span>
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Здесь ты увидишь весь процесс от А до Я на живом примере:
                    </p>
                    <ul className="space-y-3 ml-7">
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-center mt-12">
            <Button size="lg">
              Узнать стоимость
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

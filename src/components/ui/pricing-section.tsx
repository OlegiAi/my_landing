"use client";

import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function PricingSection() {
  const standardPricing = [
    { service: "15 постов", price: "15 000 ₽" },
    { service: "Тексты на сайт (1 шт)", price: "15 000 ₽" },
    { service: "15 сценариев Reels", price: "20 000 ₽" },
    { service: "3 статьи", price: "18 000 ₽" },
    { service: "4 сценария для YouTube", price: "12 000 ₽" },
  ];

  const aiPricing = [
    { service: "15 постов", time: "30 минут" },
    { service: "Тексты на сайт (1 шт)", time: "2 часа" },
    { service: "15 сценариев Reels", time: "1 час 15 минут" },
    { service: "3 статьи", time: "1 час" },
    { service: "4 сценария для YouTube", time: "40 минут" },
  ];

  const includedItems = [
    "Бессрочный доступ",
    "Авторские фишки и инструкции",
    "Доступ к обновлениям практикума",
  ];

  return (
    <div id="pricing" className="w-full bg-muted/30">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-8 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          Выбери свой путь
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Сравните затраты на делегирование и работу с нейросетями
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Стандартный путь */}
          <div className="relative rounded-lg p-[2px] h-full">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <div className="relative bg-background rounded-lg p-8 shadow-lg shadow-gray-500/10 border border-border hover:shadow-xl hover:shadow-gray-400/20 transition-all duration-300 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Стандартный путь
              </h3>

              <div className="space-y-4 mb-6">
                {standardPricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">{item.service}</span>
                    <span className="font-semibold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t-2 border-border">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Итого в месяц:</span>
                  <span className="text-2xl font-bold text-primary">80 000 ₽</span>
                </div>
              </div>
            </div>
          </div>

          {/* С нейросетями */}
          <div className="relative rounded-lg p-[2px] h-full">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <div className="relative bg-primary/5 rounded-lg p-8 shadow-lg shadow-gray-500/10 border-2 border-primary/20 hover:shadow-xl hover:shadow-gray-400/20 transition-all duration-300 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                С нейросетями
              </h3>

              <div className="space-y-4 mb-6">
                {aiPricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-muted-foreground">{item.service}</span>
                    <span className="font-semibold text-lg">{item.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t-2 border-border">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-muted-foreground">Оплата Claude Sonnet Pro</span>
                  <span className="font-semibold text-lg">20 $</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Итого в месяц:</span>
                  <span className="text-2xl font-bold text-primary">2 000 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

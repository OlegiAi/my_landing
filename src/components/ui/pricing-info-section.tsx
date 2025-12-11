"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function PricingInfoSection() {
  const includedItems = [
    "3 модуля практикума в Notion",
    "Бессрочный доступ к обучению",
    "Авторские фишки и инструкции",
    "Доступ к обновлениям практикума",
    "Материалы сразу после оплаты",
  ];

  return (
    <div id="pricing-info" className="w-full bg-muted/30">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-center max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            Стоимость практикума
          </h2>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Инвестиция в навык, который окупится за первый месяц работы
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-lg p-[2px]">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
            />
            <div className="relative bg-background rounded-lg p-8 shadow-lg shadow-gray-500/10 border border-border hover:shadow-xl hover:shadow-gray-400/20 transition-all duration-300">
              {/* Included Items */}
              <div className="space-y-4 mb-8">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mb-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-xl font-semibold text-muted-foreground line-through mb-2">
                    80 000 ₽
                  </p>
                  <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                    6 900 ₽
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full text-lg"
              >
                Оплатить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

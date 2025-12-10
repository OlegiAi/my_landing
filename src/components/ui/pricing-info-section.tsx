"use client";

import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingInfoSection() {
  const includedItems = [
    "3 модуля практикума в Notion",
    "Бессрочный доступ к обучению",
    "Авторские фишки и инструкции",
    "Доступ к обновлениям практикума",
    "Материалы сразу после оплаты",
  ];

  return (
    <div id="pricing-info" className="w-full">
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
        <div className="max-w-md mx-auto">
          <div className="relative group">
            <div
              className={cn(
                "absolute inset-0 bg-white dark:bg-zinc-900",
                "border-2 border-zinc-900 dark:border-white",
                "rounded-lg shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white",
                "transition-all duration-300",
                "group-hover:shadow-[8px_8px_0px_0px]",
                "group-hover:translate-x-[-4px]",
                "group-hover:translate-y-[-4px]"
              )}
            />

            <div className="relative p-8">
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full mb-4",
                    "flex items-center justify-center",
                    "border-2 border-zinc-900 dark:border-white",
                    "text-amber-500"
                  )}
                >
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                  Практикум по нейросетям
                </h3>
              </div>

              {/* Included Items */}
              <div className="space-y-3 mb-6">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full border-2 border-zinc-900
                      dark:border-white flex items-center justify-center flex-shrink-0"
                    >
                      <Check className="w-3 h-3 text-zinc-900 dark:text-white" />
                    </div>
                    <span className="text-zinc-900 dark:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mb-6 pt-4 border-t-2 border-zinc-900 dark:border-white">
                <div className="text-center mb-4">
                  <p className="text-2xl font-semibold text-zinc-500 dark:text-zinc-400 line-through mb-2">
                    80 000 ₽
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-amber-500">
                    6 900 ₽
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className={cn(
                  "w-full h-12 text-lg relative",
                  "border-2 border-zinc-900 dark:border-white",
                  "transition-all duration-300",
                  "shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white",
                  "hover:shadow-[6px_6px_0px_0px]",
                  "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                  "bg-amber-400 text-zinc-900",
                  "hover:bg-amber-300",
                  "active:bg-amber-400"
                )}
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

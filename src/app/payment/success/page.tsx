"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const TELEGRAM_LINK = "https://t.me/+W6bgyHKtAKZkMzcy";

export default function PaymentSuccessPage() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = TELEGRAM_LINK;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleTelegramClick = () => {
    window.location.href = TELEGRAM_LINK;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
          <Check className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold">Оплата прошла успешно!</h1>

        <p className="text-muted-foreground text-lg">
          Спасибо за покупку! Сейчас вы будете перенаправлены в Telegram канал с доступом к практикуму.
        </p>

        <div className="text-sm text-muted-foreground">
          Автоматический переход через {countdown} сек...
        </div>

        <div className="space-y-3 pt-4">
          <Button onClick={handleTelegramClick} size="lg" className="w-full">
            Перейти в Telegram сейчас
          </Button>
        </div>
      </div>
    </div>
  );
}

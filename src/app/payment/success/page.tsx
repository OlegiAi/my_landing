"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
          <Check className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold">Оплата прошла успешно!</h1>

        <p className="text-muted-foreground text-lg">
          Спасибо за покупку! Доступ к практикуму отправлен на вашу почту.
        </p>

        <div className="space-y-3 pt-4">
          <Button asChild size="lg" className="w-full">
            <Link href="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

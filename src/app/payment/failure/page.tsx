"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function PaymentFailurePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
          <X className="w-10 h-10 text-red-500" />
        </div>

        <h1 className="text-3xl font-bold">Оплата не прошла</h1>

        <p className="text-muted-foreground text-lg">
          К сожалению, при оплате произошла ошибка. Попробуйте еще раз или свяжитесь с поддержкой.
        </p>

        <div className="space-y-3 pt-4">
          <Button asChild size="lg" className="w-full">
            <Link href="/#pricing-info">Попробовать снова</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

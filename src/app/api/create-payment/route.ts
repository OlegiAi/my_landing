import { NextResponse } from "next/server";
import { YooCheckout } from "@a2seven/yoo-checkout";
import { v4 as uuidv4 } from "uuid";

// Разрешенные суммы платежей (защита от мошенничества)
const ALLOWED_AMOUNTS = ["6900.00", "1.00"]; // 1.00 для тестирования
const MAX_DESCRIPTION_LENGTH = 200;

export async function POST(request: Request) {
  try {
    const { amount, description } = await request.json();

    // Валидация суммы
    if (!amount || !ALLOWED_AMOUNTS.includes(amount.toString())) {
      return NextResponse.json(
        { error: "Invalid payment amount" },
        { status: 400 }
      );
    }

    // Валидация описания
    if (description && description.length > MAX_DESCRIPTION_LENGTH) {
      return NextResponse.json(
        { error: "Description too long" },
        { status: 400 }
      );
    }

    // Проверка переменных окружения
    if (!process.env.YOOKASSA_SHOP_ID || !process.env.YOOKASSA_SECRET_KEY) {
      return NextResponse.json(
        { error: "ЮKassa credentials not configured" },
        { status: 500 }
      );
    }

    // Инициализация ЮKassa
    const checkout = new YooCheckout({
      shopId: process.env.YOOKASSA_SHOP_ID,
      secretKey: process.env.YOOKASSA_SECRET_KEY,
    });

    // Создание платежа
    const payment = await checkout.createPayment({
      amount: {
        value: amount.toString(),
        currency: "RUB",
      },
      confirmation: {
        type: "redirect",
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
      },
      capture: true,
      description: description || "Оплата практикума",
    }, uuidv4());

    return NextResponse.json({
      confirmationUrl: payment.confirmation?.confirmation_url,
      paymentId: payment.id,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create payment" },
      { status: 500 }
    );
  }
}

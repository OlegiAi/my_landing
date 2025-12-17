import { NextResponse } from "next/server";
import crypto from "crypto";

// Проверка подписи от ЮKassa для безопасности
function verifySignature(body: string, signature: string | null): boolean {
  if (!signature || !process.env.YOOKASSA_SECRET_KEY) {
    return false;
  }

  const hmac = crypto
    .createHmac("sha256", process.env.YOOKASSA_SECRET_KEY)
    .update(body)
    .digest("hex");

  return hmac === signature;
}

export async function POST(request: Request) {
  try {
    // Читаем тело запроса
    const body = await request.text();
    const signature = request.headers.get("x-yookassa-signature");

    // Проверяем подпись (безопасность)
    if (!verifySignature(body, signature)) {
      console.error("❌ Invalid webhook signature");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 403 }
      );
    }

    // Парсим данные
    const data = JSON.parse(body);
    const { event, object: payment } = data;

    console.log("📥 Webhook received:", {
      event,
      paymentId: payment.id,
      amount: payment.amount?.value,
      status: payment.status,
    });

    // Обрабатываем события
    switch (event) {
      case "payment.succeeded":
        // ✅ Платеж успешно завершен
        console.log("✅ Payment succeeded:", {
          id: payment.id,
          amount: payment.amount?.value,
          currency: payment.amount?.currency,
          description: payment.description,
          metadata: payment.metadata,
        });

        // Здесь можно:
        // - Сохранить данные в базу данных
        // - Отправить email с доступом
        // - Обновить статус заказа
        // - Отправить уведомление в Telegram

        break;

      case "payment.waiting_for_capture":
        // ⏳ Платеж ожидает подтверждения
        console.log("⏳ Payment waiting for capture:", payment.id);
        break;

      case "payment.canceled":
        // ❌ Платеж отменен
        console.log("❌ Payment canceled:", {
          id: payment.id,
          cancellation_details: payment.cancellation_details,
        });
        break;

      case "refund.succeeded":
        // 💰 Возврат средств успешно завершен
        console.log("💰 Refund succeeded:", {
          id: payment.id,
          amount: payment.amount?.value,
        });
        break;

      default:
        console.log("ℹ️ Unknown event:", event);
    }

    // Отвечаем ЮKassa что получили уведомление
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

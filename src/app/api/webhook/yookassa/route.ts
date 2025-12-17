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

// Отправка уведомления в Telegram
async function sendTelegramNotification(payment: {
  id: string;
  amount?: { value: string; currency: string };
  created_at?: string;
  status: string;
}): Promise<void> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error("❌ Telegram credentials not configured");
    return;
  }

  const date = payment.created_at
    ? new Date(payment.created_at).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "не указано";

  const message = `💰 НОВАЯ ОПЛАТА!

Сумма: ${payment.amount?.value} ${payment.amount?.currency}
ID платежа: ${payment.id.substring(0, 8)}...
Время: ${date}
Статус: ${payment.status === "succeeded" ? "✅ Успешно" : payment.status}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      console.error("❌ Failed to send Telegram notification");
    } else {
      console.log("✅ Telegram notification sent");
    }
  } catch (error) {
    console.error("❌ Telegram notification error:", error);
  }
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

        // Отправляем уведомление в Telegram
        await sendTelegramNotification(payment);

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

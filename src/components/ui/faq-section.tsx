"use client";

export function FAQSection() {
  const faqs = [
    {
      question: "Подойдет ли новичкам?",
      answer: "Да, 70% учеников никогда не работали с ИИ. Все объясняю с нуля."
    },
    {
      question: "Работает ли в моей нише?",
      answer: "Да. Методики универсальны: от салонов красоты до IT-компаний."
    },
    {
      question: "А если я технический ноль?",
      answer: "Весь воркшоп построен по принципу «скопировал-вставил-получил результат». К тому же все ИИ интуитивно понятны."
    }
  ];

  return (
    <div id="faq" className="w-full relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent text-balance">
          Ответы на вопросы
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-muted/30 rounded-lg p-4 sm:p-6 md:p-8 border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">❓</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

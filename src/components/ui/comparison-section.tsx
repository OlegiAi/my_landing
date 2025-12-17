"use client";

export function ComparisonSection() {
  return (
    <div className="w-full bg-muted/30">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
          Работа БЕЗ нейросетей VS С нейросетями
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Почувствуй разницу
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* БЕЗ нейросетей */}
          <div className="relative">
            <div className="bg-destructive/10 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-destructive/30 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Старый способ
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-sm aspect-square flex items-center justify-center bg-background/50 rounded-xl relative overflow-hidden">
                  <div className="text-9xl animate-typing">💻</div>
                  <div className="absolute bottom-8 text-6xl animate-typing-hands">⌨️</div>
                </div>

                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold">Без нейросетей</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-destructive flex items-center justify-center gap-2">
                      <span>⏰</span>
                      <span>2-4 часа на пост</span>
                    </p>
                    <p className="text-muted-foreground">Постоянно печатаешь и думаешь</p>
                    <p className="text-muted-foreground">Выгораешь от рутины</p>
                    <p className="text-muted-foreground">Нанимаешь подрядчиков за 50-80к</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* С нейросетями */}
          <div className="relative">
            <div className="bg-primary/10 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-primary/30 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Новый способ
              </div>

              <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-sm aspect-square flex items-center justify-center bg-background/50 rounded-xl relative overflow-hidden">
                  <div className="text-9xl animate-relaxed">🧘</div>
                  <div className="absolute top-12 right-12 text-6xl animate-sparkle">✨</div>
                </div>

                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold">С нейросетями</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-primary flex items-center justify-center gap-2">
                      <span>⚡</span>
                      <span>15 минут на пост</span>
                    </p>
                    <p className="text-muted-foreground">Просто направляешь ИИ</p>
                    <p className="text-muted-foreground">Работаешь с удовольствием</p>
                    <p className="text-muted-foreground">Платишь 2000₽ за нейросеть</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Итоговый вывод */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8">
            <p className="text-2xl font-semibold mb-4">
              Экономь до 16 часов в неделю на контенте
            </p>
            <p className="text-lg text-muted-foreground">
              Это почти 2 полных рабочих дня, которые ты можешь потратить на развитие бизнеса, клиентов или просто отдых
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

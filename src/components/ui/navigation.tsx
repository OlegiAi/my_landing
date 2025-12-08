"use client";

import { Button } from "@/components/ui/button";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("for-whom")}
            >
              Для кого
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("program")}
            >
              Программа
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("results")}
            >
              Результаты
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

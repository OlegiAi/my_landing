"use client";

import { Send, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-muted-foreground mb-8">
          Этот сайт сделан с нуля через Claude Code
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <a
            href="https://t.me/neo_olegi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium"
          >
            <Send className="w-5 h-5" />
            Телеграм канал
          </a>
          <a
            href="https://www.youtube.com/@neo_olegi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium"
          >
            <Youtube className="w-5 h-5" />
            YouTube канал
          </a>
          <a
            href="https://t.me/olejlen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 text-lg font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            Задать вопрос
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}

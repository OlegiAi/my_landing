"use client";

import { MinimalNavBar } from "@/components/ui/minimal-navbar";
import { Home, Users, BookOpen, Trophy } from "lucide-react";

const navItems = [
  {
    name: "Главная",
    url: "#hero",
    icon: Home,
  },
  {
    name: "Для кого",
    url: "#for-whom",
    icon: Users,
  },
  {
    name: "Программа",
    url: "#program",
    icon: BookOpen,
  },
  {
    name: "Результат",
    url: "#result",
    icon: Trophy,
  },
];

export function Navigation() {
  return <MinimalNavBar items={navItems} defaultActive="Главная" />;
}

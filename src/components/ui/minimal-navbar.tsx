"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function MinimalNavBar({ items, defaultActive = "Home" }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-3 left-0 right-0 z-[9999]">
      <div className="flex justify-center">
        <motion.div
          className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-lg py-1.5 px-2 rounded-full shadow-lg relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            const isHovered = hoveredTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab(item.name)
                  // Smooth scroll to section
                  const element = document.querySelector(item.url)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-xs md:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                  "text-white/70 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    layoutId="active-pill"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    <div className="absolute inset-0 bg-white/10 rounded-full" />
                  </motion.div>
                )}

                <motion.span
                  className="hidden md:inline relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
                <motion.span
                  className="md:hidden relative z-10"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </motion.span>

                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>
              </Link>
            )
          })}

          {/* Кнопка "Узнать стоимость" */}
          <motion.a
            href="#pricing-info"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#pricing-info')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="relative cursor-pointer text-xs md:text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 text-white/80 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/5 ml-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="hidden md:inline">Узнать стоимость</span>
            <span className="md:hidden">💰</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

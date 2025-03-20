"use client"

import { Moon, Sun } from "lucide-react"
import { useSettings } from "@/hooks/use-settings"

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useSettings()

  return (
    <button
      onMouseDown={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#444444] transition-colors"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun size={16} className="text-gray-600 dark:text-[#B0B0B0]" />
      ) : (
        <Moon size={16} className="text-gray-600 dark:text-[#B0B0B0]" />
      )}
    </button>
  )
} 
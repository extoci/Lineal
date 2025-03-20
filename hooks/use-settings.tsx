"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface SettingsContextType {
  showSuggestions: boolean
  setShowSuggestions: (value: boolean) => void
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const SettingsContext = createContext<SettingsContextType>({
  showSuggestions: false,
  setShowSuggestions: () => {},
  darkMode: false,
  setDarkMode: () => {},
})

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedSettings = localStorage.getItem("meta-probe-settings")
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings)
        if (typeof settings.showSuggestions === "boolean") {
          setShowSuggestions(settings.showSuggestions)
        }
        if (typeof settings.darkMode === "boolean") {
          setDarkMode(settings.darkMode)
        }
      } catch (error) {
        console.error("Failed to parse settings:", error)
      }
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const updateShowSuggestions = (value: boolean) => {
    setShowSuggestions(value)
    saveSettings({ showSuggestions: value, darkMode })
  }

  const updateDarkMode = (value: boolean) => {
    setDarkMode(value)
    saveSettings({ showSuggestions, darkMode: value })
  }

  const saveSettings = (settings: { showSuggestions: boolean; darkMode: boolean }) => {
    localStorage.setItem("meta-probe-settings", JSON.stringify(settings))
  }

  return (
    <SettingsContext.Provider
      value={{
        showSuggestions,
        setShowSuggestions: updateShowSuggestions,
        darkMode,
        setDarkMode: updateDarkMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  return useContext(SettingsContext)
}


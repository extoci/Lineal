import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import MetaChecker from "@/components/meta-checker"
import SettingsDropdown from "@/components/settings-dropdown"
import DarkModeToggle from "@/components/dark-mode-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-[#121212] dark:text-[#E0E0E0] font-mono">
      <header className="w-full p-4 flex justify-between items-center max-w-3xl mx-auto backdrop-blur-sm bg-white/80 dark:bg-[#121212]/90 sticky top-0 z-10">
        <div className="font-bold text-xl">line.al</div>
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <SettingsDropdown />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-start pt-8 p-4 max-w-3xl mx-auto w-full">
        <div className="w-full mb-12 text-center">
          <div className="text-xs text-gray-500 dark:text-[#888888] mb-1">SYSTEM</div>
          <h1 className="text-2xl font-bold mb-1 dark:text-[#E0E0E0]">metadata</h1>
          <p className="text-gray-500 dark:text-[#B0B0B0] text-sm">Web Metadata Discovery & Analysis</p>
        </div>

        <MetaChecker />
      </main>

      <footer className="w-full p-4 max-w-3xl mx-auto border-t border-gray-100 dark:border-[#444444] mt-8">
        <div className="flex items-center text-xs text-gray-500 dark:text-[#888888] justify-between">
          <div className="flex items-center">
            <span>Hosted on</span>
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center hover:text-gray-800 dark:hover:text-[#E0E0E0] transition-colors"
            >
              <svg height="14" viewBox="0 0 76 65" fill="currentColor">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              <span className="ml-1">Vercel</span>
            </Link>
          </div>

          <Link href="https://github.com/dancer/lineal" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1.5 text-xs h-auto py-1 px-2 dark:text-[#B0B0B0] dark:hover:text-[#E0E0E0] dark:hover:bg-[#444444] transition-colors"
            >
              <Github size={14} />
              <span>Star on GitHub</span>
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  )
}


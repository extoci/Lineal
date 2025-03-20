"use client"

import { useState } from "react"
import { ArrowRight, Copy, Check } from "lucide-react"

export default function LocalhostOption() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-gray-600 dark:text-[#b0b0b0] hover:text-gray-900 dark:hover:text-[#e0e0e0] flex items-center transition-colors"
      >
        localhost <ArrowRight size={14} className={`ml-1 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
      </button>

      {isExpanded && (
        <div className="mt-3 ml-4 space-y-3">
          <p className="text-xs text-gray-500 dark:text-[#888888]">
            Share your localhost with us for testing using Cloudflare Tunnel:
          </p>

          <div className="bg-gray-50 dark:bg-[#1c1c1c] p-3 rounded-md text-xs font-mono">
            <p className="mb-2 text-gray-900 dark:text-[#e0e0e0]">1. Install Cloudflare Tunnel:</p>
            <div className="relative">
              <code className="block bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-[#e0e0e0] p-2 rounded border border-gray-200 dark:border-[#444444]">
                npm install -g cloudflared
              </code>
              <button
                onClick={() => handleCopy("npm install -g cloudflared")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-[#888888] hover:text-gray-700 dark:hover:text-[#b0b0b0]"
                aria-label="Copy command"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            <p className="mt-3 mb-2 text-gray-900 dark:text-[#e0e0e0]">2. Start your local server (e.g., on port 3000)</p>

            <p className="mt-3 mb-2 text-gray-900 dark:text-[#e0e0e0]">3. Run this command after starting your local server:</p>
            <div className="relative">
              <code className="block bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-[#e0e0e0] p-2 rounded border border-gray-200 dark:border-[#444444]">
                cloudflared tunnel --url http://localhost:3000
              </code>
              <button
                onClick={() => handleCopy("cloudflared tunnel --url http://localhost:3000")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-[#888888] hover:text-gray-700 dark:hover:text-[#b0b0b0]"
                aria-label="Copy command"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            <p className="mt-3 mb-2 text-gray-900 dark:text-[#e0e0e0]">4. Copy the https URL from the output and share it with us</p>
          </div>

          <div className="text-xs text-gray-500 dark:text-[#888888] mt-2">
            <strong className="text-gray-700 dark:text-[#b0b0b0]">Note:</strong> This tunnel temporarily exposes your localhost to the internet. Only share the URL
            with our team and close the tunnel when testing is complete.
          </div>
        </div>
      )}
    </div>
  )
}


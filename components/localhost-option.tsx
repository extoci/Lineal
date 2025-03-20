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
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center transition-colors"
      >
        localhost <ArrowRight size={14} className={`ml-1 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
      </button>

      {isExpanded && (
        <div className="mt-3 ml-4 space-y-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Share your localhost with us for testing using Cloudflare Tunnel:
          </p>

          <div className="bg-gray-50 dark:bg-black p-3 rounded-md text-xs font-mono">
            <p className="mb-2">1. Install Cloudflare Tunnel:</p>
            <div className="relative">
              <code className="block bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-200 p-2 rounded">
                npm install -g cloudflared
              </code>
              <button
                onClick={() => handleCopy("cloudflared")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Copy command"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            <p className="mt-3 mb-2">2. Start your local server (e.g., on port 3000)</p>

            <p className="mt-3 mb-2">3. Run this command after starting your local server:</p>
            <div className="relative">
              <code className="block bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-200 p-2 rounded">
                cloudflared tunnel --url http://localhost:3000
              </code>
              <button
                onClick={() => handleCopy("cloudflared tunnel --url http://localhost:3000")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Copy command"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            <p className="mt-3 mb-2">4. Copy the https URL from the output and share it with us</p>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            <strong>Note:</strong> This tunnel temporarily exposes your localhost to the internet. Only share the URL
            with our team and close the tunnel when testing is complete.
          </div>
        </div>
      )}
    </div>
  )
}


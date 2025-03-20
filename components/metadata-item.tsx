import type React from "react"
interface MetadataItemProps {
  label: string
  value?: string
  isImage?: boolean
  children?: React.ReactNode
  characterCount?: boolean
}

export default function MetadataItem({
  label,
  value,
  isImage = false,
  children,
  characterCount = false,
}: MetadataItemProps) {
  if (!value && !children) return null

  return (
    <div className="group rounded-md -mx-2 p-2 hover:bg-gray-50 dark:hover:bg-[#181818] transition-colors">
      <div className="flex flex-col sm:flex-row">
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 w-full sm:w-32 mb-1 sm:mb-0 sm:pt-0.5">
          {label}
        </div>
        <div className="flex-1 break-words">
          {isImage ? (
            <div>
              <a href={value} target="_blank" rel="noopener noreferrer" className="inline-block mt-1">
                <img
                  src={value || "/placeholder.svg"}
                  alt={label}
                  className="max-h-32 max-w-full border border-gray-100 dark:border-gray-800 rounded-md hover:opacity-90 transition-opacity shadow-sm"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = "none"
                    const parent = e.currentTarget.parentNode?.parentNode as HTMLElement
                    if (parent) {
                      const errorMsg = document.createElement("span")
                      errorMsg.textContent = "Image preview unavailable"
                      errorMsg.className =
                        "text-gray-500 dark:text-gray-400 text-sm font-mono bg-gray-50 dark:bg-gray-900/40 px-2 py-1 rounded border border-gray-200 dark:border-gray-800/60"
                      parent.appendChild(errorMsg)
                    }
                  }}
                />
              </a>
              {/* URL display removed as requested */}
            </div>
          ) : (
            <div>
              {value ? (
                <div className="text-sm dark:text-gray-300">{value}</div>
              ) : (
                <span className="font-mono text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded border border-amber-100 dark:border-amber-900/30 text-sm">
                  Not specified
                </span>
              )}
              {characterCount && value && (
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{value.length} characters</div>
              )}
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


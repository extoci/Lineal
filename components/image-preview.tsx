interface ImagePreviewProps {
  title: string
  url: string
}

export default function ImagePreview({ title, url }: ImagePreviewProps) {
  const isFavicon = title.toLowerCase().includes("favicon")

  return (
    <div className="bg-white dark:bg-[#111111] rounded-lg border border-gray-100 dark:border-[#222222] overflow-hidden p-4">
      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">{title}</div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block">
        <img
          src={url || "/placeholder.svg"}
          alt={title}
          className={`${isFavicon ? "h-12 w-12 object-contain" : "max-h-48 max-w-full object-cover"} border border-gray-100 dark:border-[#222222] rounded-md hover:opacity-90 transition-opacity shadow-sm`}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            if (isFavicon && url.includes("//")) {
              const domain = url.split("//")[1].split("/")[0]
              const imgElement = e.target as HTMLImageElement;
              imgElement.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
              imgElement.onerror = () => {
                imgElement.style.display = "none"
                const parent = imgElement.parentElement;
                if (parent) {
                  const errorMsg = document.createElement("span")
                  errorMsg.textContent = "Image preview unavailable"
                  errorMsg.className =
                    "text-gray-500 dark:text-gray-400 text-sm font-mono bg-gray-50 dark:bg-[#181818] px-2 py-1 rounded border border-gray-200 dark:border-[#222222]"
                  parent.appendChild(errorMsg)
                }
              }
            } else {
              const imgElement = e.target as HTMLImageElement;
              imgElement.style.display = "none"
              const parent = imgElement.parentElement;
              if (parent) {
                const errorMsg = document.createElement("span")
                errorMsg.textContent = "Image preview unavailable"
                errorMsg.className =
                  "text-gray-500 dark:text-gray-400 text-sm font-mono bg-gray-50 dark:bg-[#181818] px-2 py-1 rounded border border-gray-200 dark:border-[#222222]"
                parent.appendChild(errorMsg)
              }
            }
          }}
        />
      </a>
      {/* URL display removed as requested */}
    </div>
  )
}


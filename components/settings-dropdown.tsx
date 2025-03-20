"use client";

import { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/hooks/use-settings";

export default function SettingsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { showSuggestions, setShowSuggestions } = useSettings();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onMouseDown={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#444444] transition-colors"
        aria-label="Settings"
      >
        <Settings size={16} className="text-gray-600 dark:text-[#B0B0B0]" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#444444] rounded-md shadow-lg z-50 p-3 text-left">
          <div className="text-sm font-medium mb-3 dark:text-[#E0E0E0]">
            Settings
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label
                  htmlFor="suggestions"
                  className="text-sm font-medium dark:text-[#B0B0B0]"
                >
                  Show Suggestions
                </Label>
              </div>
              <Switch
                id="suggestions"
                checked={showSuggestions}
                onCheckedChange={setShowSuggestions}
                className="data-[state=checked]:bg-[#444444]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

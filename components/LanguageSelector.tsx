"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import BRIcon from "@/assets/icons/br.svg";

import { type Locale, locales, localeNames } from "../lib/i18n";

interface LanguageSelectorProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
  isDarkMode: boolean;
}

export function LanguageSelector({
  currentLocale = "en",
  onLocaleChange,
  isDarkMode,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
          isDarkMode
            ? "text-gray-300 hover:text-white hover:bg-gray-800 bg-transparent border-0"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 bg-transparent border-0"
        }`}
        aria-label={`Select language - Current: ${localeNames[currentLocale]}`}
      >
        <img src={"/icons/" + currentLocale + ".svg"} alt="Flag" />
        <ChevronDown className="h-3 w-3" />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg z-20 ${
              isDarkMode
                ? "bg-gray-900 border border-gray-800"
                : "bg-white border border-gray-200"
            }`}
          >
            <div className="py-1">
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => {
                    onLocaleChange(locale);
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-4 py-2 text-sm transition-colors duration-200 ${
                    currentLocale === locale
                      ? isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-900"
                      : isDarkMode
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  title={localeNames[locale]}
                >
                  <img src={"/icons/" + locale + ".svg"} alt="Flag" />
                  <span>{localeNames[locale]}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

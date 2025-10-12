import React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function TogleThemeButton() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      className="relative w-8.5 h-8.5"
      onClick={() =>
        document.startViewTransition(() =>
          setTheme(theme === "dark" ? "light" : "dark")
        )
      }
    >
      <Image
        className="relative invert brightness-1 scale-0 dark:scale-100"
        width={34}
        height={34}
        alt="dark theme"
        src="icons/moon.svg"
        loading="lazy"
      ></Image>

      <Image
        className="absolute top-0 scale-100 dark:scale-0"
        width={34}
        height={34}
        alt="white theme"
        src="icons/sun.svg"
        loading="lazy"
      ></Image>
    </button>
  )
}

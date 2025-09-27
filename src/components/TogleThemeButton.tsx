import React from "react"
import Image from "next/image"
import { useTheme } from "@/features/ThemeProvider"

export default function TogleThemeButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className="" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Image
          className="invert brightness-1"
          width={35}
          height={35}
          alt="dark theme"
          src="icons/moon.svg"
        ></Image>
      ) : (
        <Image
          width={35}
          height={35}
          alt="white theme"
          src="icons/sun.svg"
        ></Image>
      )}
    </button>
  )
}

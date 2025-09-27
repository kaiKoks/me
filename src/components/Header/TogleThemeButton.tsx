import React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function TogleThemeButton() {
  const { theme, setTheme } = useTheme()
  console.log(theme)
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Image
          className="invert brightness-1"
          width={35}
          height={35}
          alt="dark theme"
          src="icons/moon.svg"
          loading="lazy"
        ></Image>
      ) : (
        <Image
          width={35}
          height={35}
          alt="white theme"
          src="icons/sun.svg"
          loading="lazy"
        ></Image>
      )}
    </button>
  )
}

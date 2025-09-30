"use client"
import React from "react"
import Links from "./Links"
import dynamic from "next/dynamic"

const TogleThemeButton = dynamic(() => import("./TogleThemeButton"), {
  ssr: false,
  loading() {
    return (
      <div className="w-8.5 h-8.5 "></div>
    )
  },
})

export default function Header() {
  return (
    <header className="flex justify-end gap-4 mt-3 mr-2 items-center">
      <Links />
      <div className="w-px h-8 bg-gray-400 dark:bg-gray-600"></div>
      <TogleThemeButton />
    </header>
  )
}

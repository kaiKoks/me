"use client"
import React from "react"
import Links from "./Links"
import dynamic from "next/dynamic"

const TogleThemeButton = dynamic(() => import("./TogleThemeButton"), {
  ssr: false,
  loading() {
    return (
      <div className="w-6 h-6 border-3 border-slate-600 border-t-transparent  rounded-full animate-spin"></div>
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

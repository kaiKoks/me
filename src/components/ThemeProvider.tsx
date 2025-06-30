'use client'
import React, { createContext, useState } from "react"

type Theme = 'light' | 'dark'

interface ThemeContexType {
    theme: Theme,
    toggleTheme: () => void
}
const ThemeContex = createContext<ThemeContexType | undefined>(undefined)


export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark')
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    return (
        <ThemeContex.Provider value={{ theme, toggleTheme }}>{children}</ThemeContex.Provider>
    )
}

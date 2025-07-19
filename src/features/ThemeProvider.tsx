'use client'
import React, { createContext, use, useContext, useEffect, useState } from "react"

type Theme = 'light' | 'dark'

interface ThemeContexType {
    theme: Theme,
    toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContexType | undefined>(undefined)

export const useTheme = () => {
    const context = use(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context

}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark')
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            localStorage.theme = 'light';
        }
        else {
            setTheme('dark')
            localStorage.theme = 'dark';
        }
    }
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')

        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }, [theme])

    useEffect(() => {
        const savedTheme = localStorage.theme as Theme | null
        if (savedTheme) {
            setTheme(savedTheme)
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light')
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

'use client'
import React, { createContext, useEffect, useState } from "react"
import TogleThemeButton from "./TogleThemeButton"

type Theme = 'light' | 'dark'

interface ThemeContexType {
    theme: Theme,
    toggleTheme: () => void
}
const ThemeContex = createContext<ThemeContexType | undefined>(undefined)


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
        console.log(savedTheme)
        if (savedTheme) {
            setTheme(savedTheme)
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light')
        }
    }, [])

    return (
        <ThemeContex.Provider value={{ theme, toggleTheme }}>
            <TogleThemeButton toggleTheme={toggleTheme} theme={theme} />
            {children}
        </ThemeContex.Provider>
    )
}

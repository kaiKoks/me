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
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    useEffect(() => {
        console.log('changed')
        if (theme === 'dark') {
            document.documentElement.classList.add('dark'); 
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])
    return (
        <ThemeContex.Provider value={{ theme, toggleTheme }}>
            <TogleThemeButton toggleTheme={toggleTheme} theme={theme} />
            {children}
        </ThemeContex.Provider>
    )
}

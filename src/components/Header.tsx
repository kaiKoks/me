"use client"
import React from 'react'
import Links from './Links'
import TogleThemeButton from './TogleThemeButton'
import { useTheme } from '../features/ThemeProvider'

export default function Header() {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className='flex justify-end gap-4 mt-3 mr-2 items-center'>
            <Links />
            <div className='w-px h-8 bg-gray-400 dark:bg-gray-600'></div>
            <TogleThemeButton toggleTheme={toggleTheme} theme={theme} />

        </header>
    )
}

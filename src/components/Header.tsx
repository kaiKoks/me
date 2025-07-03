"use client"

import React, { useContext } from 'react'
import Links from './Links'
import TogleThemeButton from './TogleThemeButton'
import { useTheme } from './ThemeProvider'

export default function Header() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className='flex justify-end gap-4 mt-3 mr-2'>
            <Links />
            <TogleThemeButton toggleTheme={toggleTheme} theme={theme} />

        </div>
    )
}

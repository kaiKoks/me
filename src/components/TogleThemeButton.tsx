import React from 'react'


export default function TogleThemeButton({ toggleTheme, theme }: { toggleTheme: () => void, theme: 'light' | 'dark' }) {
    return (
        <button className='absolute right-5 top-5' onClick={toggleTheme}>
            {theme === 'dark' ?
                <img className='w-10 h-10 invert brightness-1' src="moon.svg"></img>
                :
                <img className='w-10 h-10' src="sun.svg"></img>
            }
        </button>
    )
}

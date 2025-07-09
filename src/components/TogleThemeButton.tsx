import React from 'react'
import Image from 'next/image'

export default function TogleThemeButton({ toggleTheme, theme }: { toggleTheme: () => void, theme: 'light' | 'dark' }) {

    return (
        <button className='' onClick={toggleTheme}>
            {theme === 'dark' ?
                <Image className='invert brightness-1' width={35} height={35} alt='dark theme' src="moon.svg"></Image>
                :
                <Image width={35} height={35} alt='white theme' src="sun.svg"></Image>
            }
        </button>
    )
}

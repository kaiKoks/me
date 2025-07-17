import React from 'react'
import Image from 'next/image'

export default function Links() {
    return (
        <div className="flex justify-center md:justify-start gap-2">
            <a
                href="https://t.me/KayKoks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-neutral-900 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors duration-200"
                aria-label="Telegram"
            >
                <Image src="icons/tg.svg" width={28} height={28} alt="Telegram" />
            </a>
            <a
                href="https://github.com/kaiKoks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-neutral-900 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors duration-200"
                aria-label="GitHub"
            >
                <Image src="icons/github.svg" width={28} height={28} className="dark:invert" alt="GitHub" />
            </a>
        </div>
    )
}

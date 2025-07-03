import React from 'react'

export default function Links() {
    return (
        <div className="flex justify-center md:justify-start gap-2">
            <a
                href="https://t.me/KayKoks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Telegram"
            >
                <img src="icons/tg.svg" className="w-8 h-8" alt="Telegram" />
            </a>
            <a
                href="https://github.com/kaiKoks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="GitHub"
            >
                <img src="icons/github.svg" className="w-8 h-8 dark:invert" alt="GitHub" />
            </a>
        </div>
    )
}

import React from 'react'
import Image from 'next/image'
export default function Song({ song }) {
    return (
        <a href={song.songUrl} target='_blank' className='block group min-w-80 w-fit mx-auto'>
            <div className='bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-950 dark:to-neutral-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-3 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600'>
                {/* header */}
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-75"></div>
                        <div className="w-1 h-1 bg-red-300 rounded-full animate-pulse delay-150"></div>
                    </div>
                    <p className="text-red-500 font-medium text-sm uppercase tracking-wide">Now Playing</p>
                    <Image src='/music.png' alt={song.title} width={15} height={15}></Image>
                </div>

                <div className="flex items-center  gap-4">
                    {/* Album Art */}
                    <div className="relative flex-shrink-0">
                        <div
                            style={{ backgroundImage: `url(${song.albumImageUrl})` }}
                            className="bg-cover bg-center bg-no-repeat rounded-xl w-25 h-25 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                        </div>
                    </div>

                    {/* Song Info */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-2xl leading-tight mb-1  group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                            {song.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                            {song.artist}
                        </p>

                        {/* Subtle link indicator */}
                        <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs text-gray-500 dark:text-gray-400">Listen on Spotify</span>
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* waves animation */}
                <div className="flex items-center justify-center gap-1 mt-2 opacity-70 ">
                    <div className="w-0.5 h-3 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-dance"></div>
                    <div className="w-0.5 h-4 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-dance delay-75"></div>
                    <div className="w-0.5 h-2 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-dance delay-150"></div>
                    <div className="w-0.5 h-5 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-dance delay-225"></div>
                    <div className="w-0.5 h-3 bg-gradient-to-t from-green-400 to-green-600 rounded-full animate-dance delay-300"></div>
                </div>
            </div>
        </a>
    )
}

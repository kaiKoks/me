import React from 'react'

export default function NothingPlaying() {
  return (
    <div className="block">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 w-80">
                    {/* Not Playing Header */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">Not Playing</p>
                        <img src='music.png' className='w-4 h-4 grayscale-100'></img>

                    </div>

                    {/* Placeholder Content */}
                    <div className="flex items-center gap-4">
                        {/* Placeholder Album Art */}
                        <div className="relative flex-shrink-0">
                            <div className="bg-gray-200 dark:bg-gray-700 rounded-xl  w-25 h-25 shadow-md flex items-center justify-center">
                                <img src='music.png' className='w-4 h-4 grayscale-100'></img>

                            </div>
                        </div>

                        {/* Placeholder Song Info */}
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-500 text-2xl leading-tight mb-1">
                                No song playing
                            </div>
                            <div className="text-gray-500 text-xl">Nothing playing right now</div>

                        </div>
                    </div>

                    {/* Static sound waves */}
                    <div className="flex items-center justify-center gap-1 mt-4 opacity-30">
                        <div className="w-0.5 h-2 bg-gray-700 dark:bg-gray-400 rounded-full"></div>
                        <div className="w-0.5 h-2 bg-gray-700 dark:bg-gray-400 rounded-full"></div>
                        <div className="w-0.5 h-2 bg-gray-700 dark:bg-gray-400  rounded-full"></div>
                        <div className="w-0.5 h-2 bg-gray-700 dark:bg-gray-400 rounded-full"></div>
                        <div className="w-0.5 h-2 bg-gray-700 dark:bg-gray-400  rounded-full"></div>
                    </div>
                </div>
            </div>
  )
}

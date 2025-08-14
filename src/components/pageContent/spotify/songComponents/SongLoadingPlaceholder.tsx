import React from "react";

export default function SongLoadingPlaceholder() {
  return (
    <div className="flex justify-center mx-auto">
      <div className=" w-80 h-55 bg-gray-50/70 dark:bg-neutral-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-neutral-800">
        {/* Loading Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-150"></div>
          </div>
          <p className="text-blue-500 font-medium text-sm uppercase tracking-wide">
            Loading
          </p>
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading Content */}
        <div className="flex items-center gap-4">
          {/* Loading Album Art */}
          <div className="relative flex-shrink-0">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-xl  w-25 h-25 shadow-md animate-pulse"></div>
          </div>

          {/* Loading Song Info */}
          <div className="flex-1 min-w-0 space-y-2">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
          </div>
        </div>

        {/* Loading sound waves */}
        <div className="flex items-center justify-center gap-1 mt-2 opacity-70">
          <div className="w-0.5 h-3 bg-blue-400 rounded-full animate-dance"></div>
          <div className="w-0.5 h-4 bg-blue-400 rounded-full animate-dance delay-75"></div>
          <div className="w-0.5 h-2 bg-blue-400 rounded-full animate-dance delay-150"></div>
          <div className="w-0.5 h-5 bg-blue-400 rounded-full animate-dance delay-225"></div>
          <div className="w-0.5 h-3 bg-blue-400 rounded-full animate-dance delay-300"></div>
        </div>
      </div>
    </div>
  );
}

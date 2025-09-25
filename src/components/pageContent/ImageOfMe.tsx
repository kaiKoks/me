"use client"
import React, { useState } from "react"
import Image from "next/image"
export default function ImageOfMe() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="w-40 h-40 shrink-0 relative rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center ring-2 ring-gray-800 dark:ring-gray-300 ">
      <Image
        src="/images/me.png"
        sizes="160"
        fill
        alt="me"
        priority={true}
        onLoad={() => setIsLoaded(true)}
        className={`${
          isLoaded ? "opacity-100" : "opacity-0"
        } rounded-full object-cover brightness-120 contrast-95 object-[50%_5%] shadow-xl text-center transition-opacity duration-100`}
      ></Image>
    </div>
  )
}

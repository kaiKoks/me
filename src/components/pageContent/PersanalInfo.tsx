import React from "react"
import ImageOfMe from "./ImageOfMe"
import Image from "next/image"
export default function PersanalInfo() {
  return (
    <section className="mb-6 px-2 flex justify-center gap-2">
      <ImageOfMe />

      <div className="flex gap-3 items-center justify-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-1">Илья Черемисин</h1>
          <h2 className="text-3xl md:text-5xl opacity-50">
            {" "}
            Frontend разработчик
          </h2>

          <div className="flex items-center mb-1">
            <Image
              src="icons/location.svg"
              alt="location"
              priority={true}
              width={15}
              height={15}
              className=" inline mr-1 brightness-50 dark:brightness-100 dark:opacity-50"
            ></Image>
            <h3 className="opacity-50 text-lg">Барнаул, Россия</h3>
          </div>
          <h4 className="text-sm opacity-50 mb-2">cheremisin.ilya@gmail.com</h4>
        </div>
      </div>
    </section>
  )
}

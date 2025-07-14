import Github from "@/components/Github";
import SpotifyPlayingNow from "@/components/SpotifyPlayingNow";
import TechStackIcons from "@/components/TechStackIcons";
import Image from 'next/image'

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] flex flex-col items-center text-xl transition-all duration-300">
      <div className="container mx-auto py-3 max-w-3xl ">

        <section className="mb-6 px-2">
          <div className="flex gap-3 text-3xl md:text-5xl items-center justify-center">
            <div className="w-40 h-40 shrink-0 relative rounded-full">
              <Image src='/me.png' fill alt="me" priority={true} className="rounded-full   object-cover object-[50%_5%] brightness-120 contrast-95 shadow-xl ring-2 ring-gray-800 dark:ring-gray-300 text-center"></Image>
            </div>
            <div>
              <h1 className="font-bold mb-1">Ilya</h1>
              <p className="opacity-50"> Frontend developer</p>
              <div className="flex items-center mb-1">
                <Image src='/location.svg' alt="location" priority={true} width={15} height={15} className=" inline mr-1 brightness-50 dark:brightness-100 dark:opacity-50"></Image>
                <p className="opacity-50 text-lg">
                  Barnaul, Russia
                </p>

              </div>
              <p className="text-sm opacity-50 mb-2">
                cheremisin.ilya@gmail.com
              </p>

            </div>
          </div>
        </section>


        <section className=" text-2xl md:text-3xl font-semibold text-center mb-6 ">
          <h2 className='mb-4'>Tech stack</h2>
          <TechStackIcons></TechStackIcons>
        </section>
        <section className="mb-6">
          <Github></Github>
        </section>
        <div className="rounded-4xl max-w-[90vw] my-3 justify-center mx-auto">
          <SpotifyPlayingNow />
        </div>
      </div>
    </div>
  );
}

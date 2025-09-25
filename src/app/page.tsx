import Github from "@/components/pageContent/Github"
import ImageOfMe from "@/components/pageContent/ImageOfMe"
import SpotifyPlayingNow from "@/components/pageContent/spotify/SpotifyPlayingNow"
import TechStackIcons from "@/components/pageContent/TechStackIcons"
import Image from "next/image"

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] flex flex-col items-center text-xl transition-all duration-300">
      <div className="container mx-auto py-3 max-w-3xl ">
        <section className="mb-6 px-2 flex justify-center gap-2">
          <ImageOfMe />

          <div className="flex gap-3 items-center justify-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-1">Ilya</h1>
              <h2 className="text-3xl md:text-5xl opacity-50">
                {" "}
                Frontend developer
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
                <h3 className="opacity-50 text-lg">Barnaul, Russia</h3>
              </div>
              <h4 className="text-sm opacity-50 mb-2">
                cheremisin.ilya@gmail.com
              </h4>
            </div>
          </div>
        </section>

        <section className=" text-2xl md:text-3xl font-semibold text-center mb-6 ">
          <h2 className="mb-4">Tech stack</h2>
          <TechStackIcons></TechStackIcons>
        </section>
        <section className="mb-6 ">
          <Github></Github>
        </section>
        <div className="rounded-4xl max-w-[90vw] my-3 justify-center mx-auto">
          <SpotifyPlayingNow />
        </div>
      </div>
    </div>
  )
}

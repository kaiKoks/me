import Github from "@/components/pageContent/Github"
import PersanalInfo from "@/components/pageContent/PersanalInfo"
import SpotifyPlayingNow from "@/components/pageContent/spotify/SpotifyPlayingNow"
import TechStackIcons from "@/components/pageContent/TechStackIcons"

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] flex flex-col items-center text-xl">
      <div className="container mx-auto pb-3 max-w-3xl ">
        <PersanalInfo />

        <TechStackIcons />
        <section className="mb-3">
          <Github></Github>
        </section>
        <div className="rounded-4xl max-w-[90vw] my-3 justify-center mx-auto">
          <SpotifyPlayingNow />
        </div>
      </div>
    </div>
  )
}

import SpotifyPlayingNow from "@/components/SpotifyPlayingNow";
import TechStackIcons from "@/components/TechStackIcons";
import TechStack from "@/components/TechStackIcons";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] flex flex-col items-center p-10 text-xl transition-all duration-300 min-h-screen">
      <div className="container mx-auto  py-12 max-w-3xl">

        <section className="mb-10 ">
          <div className="flex gap-3 text-5xl items-center justify-center">
            <img src='me.png' className="w-35 h-35 rounded-full object-cover object-[50%_5%] brightness-120 contrast-95 shadow-xl shrink-0 ring-2 ring-gray-800 dark:ring-gray-300"></img>
            <div>
              <h1 className="font-bold mb-1">Ilya</h1>
              <p className="opacity-50"> Frontend developer</p>
              <div className="flex items-center">
                <img src='location.svg' className="w-5 h-5 inline mr-1 brightness-50 dark:brightness-100 dark:opacity-50"></img>
                <p className="opacity-50 text-lg">
                  Barnaul, Russia
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className=" text-2xl md:text-3xl font-semibold mb-6 text-center ">
          <h2 className='mb-4'>Tech stack</h2>
          <TechStackIcons></TechStackIcons>
        </div>
        <div className="rounded-4xl max-w-[90vw] py-10 ">
          <SpotifyPlayingNow />
        </div>
      </div>
    </div>
  );
}

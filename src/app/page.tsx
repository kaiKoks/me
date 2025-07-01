import SpotifyPlayingNow from "@/components/SpotifyPlayingNow";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col items-center p-10 text-4xl">
        <p>hi</p>
        <div className="rounded-4xl m-4  max-w-[90vw]">
          <SpotifyPlayingNow/>
        </div>
    </div>
  );
}

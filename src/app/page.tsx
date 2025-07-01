import SpotifyPlayingNow from "@/components/SpotifyPlayingNow";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col items-center p-10 text-4xl">
        <p>hi</p>
        <div className="rounded-4xl p-5 m-4 border-3 border-neutral-900 dark:border-neutral-100 border-dashed">
          <SpotifyPlayingNow/>
        </div>
    </div>
  );
}

import { ImageResponse } from "next/og"
// App router includes @vercel/og.
// No need to install it.
import { join } from "node:path"
import { readFile } from "node:fs/promises"

export async function GET() {
  const tgLogoData = await readFile(
    join(process.cwd(), "public/icons/tg.svg"),
    "base64"
  )
  const tgLogoSrc = `data:image/svg+xml;base64,${tgLogoData}`
  const geistSans = await readFile(
    join(process.cwd(), "public/fonts/Geist-Regular.ttf")
  )
  return new ImageResponse(
    (
      <div tw="h-full w-full flex items-center justify-center bg-[#050505f1]">
        <div tw="flex flex-col items-start p-15 bg-zinc-900/80 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/10 max-w-4xl">
          <div tw="flex flex-col justify-center">
            <div tw="flex flex-col mb-6">
              <h1 tw="text-5xl font-bold text-white m-0 mb-2">
                Ilya Cheremisin
              </h1>
              <p tw="text-2xl text-zinc-400 m-0 font-normal">
                Frontend Developer
              </p>
            </div>
            <div tw="flex flex-col gap-4">
              <div tw="flex items-center gap-3">
                <img 
                  src={tgLogoSrc}
                  height={20}
                  width={20}
                />
                <span tw="text-xl text-white font-medium ml-2">@kaykoks</span>
              </div>

              <div tw="flex items-center gap-3">
                <span tw="text-lg">✉️</span>
                <span tw="text-xl text-white font-medium ml-2">
                  cheremisin.ilya@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: geistSans,
          weight: 400,
          style: "normal",
        },
      ],
    }
  )
}

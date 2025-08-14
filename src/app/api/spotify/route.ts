import getNowPlaying from "@/components/pageContent/spotify/utils/nowPlaying"; // Путь к вашей функции

export async function GET() {
  try {
    const data = await getNowPlaying();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ body: { isNothingPlaying: true } }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

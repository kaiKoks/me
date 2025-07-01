import getNowPlaying from '@/utils/nowPlaying'; // Путь к вашей функции

export async function GET() {
  try {
    const data = await getNowPlaying();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ body: { isPlaying: false } }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
const redirect_uri = "http://http://127.0.0.1:3000/"
const token_endpoint = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async () => {
    const { access_token } = await fetch(token_endpoint, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token,
            redirect_uri,
            client_id,
            client_secret,
        })
    }).then(res => res.json());

    return {
        body: access_token
    }
};
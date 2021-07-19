export const addSongToPlaylist = (song_id, playlist_id) => (
    $.ajax({
        url: '/api/playlist_songs/',
        method: "POST",
        data: { playlist_song: {song_id, playlist_id} }
    })
)

export const removeSongFromPlaylist = (playlistSongId) => (
    $.ajax({
        url: `/api/playlist_songs/${playlistSongId}`,
        method: "DELETE"
    })
)

export const fetchPlaylists = () => (
    $.ajax({
        url: '/api/playlists/'
    })
)

export const fetchPlaylist = (playlistId) => (
    $.ajax({
        url: `/api/playlists/${playlistId}`
    })
)

export const createPlaylist = () => (
    $.ajax({
        method: 'POST',
        url: '/api/playlists/'
    })
)
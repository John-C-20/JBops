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

export const createPlaylist = (data) => (
    $.ajax({
        method: 'POST',
        url: '/api/playlists/',
        data
    })
)

export const patchPlaylist = (playlistId, data) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/playlists/${playlistId}`,
        data 
    })
)

export const deletePlaylist = (playlistId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/playlists/${playlistId}`
    })
)
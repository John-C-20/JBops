class Api::SearchesController < ApplicationController

    def index
        @playlists = Playlist.select('*').where("upper(playlists.playlist_name) LIKE upper('%#{params[:title]}%')") || []
        @songs = Song.select('*').where("upper(songs.song_title) LIKE upper('%#{params[:title]}%')") || []
        @albums = Album.select('*').where("upper(albums.album_title) LIKE upper('%#{params[:title]}%')") || []
        @artists = Artist.select('*').where("upper(artists.name) LIKE upper('%#{params[:title]}%')") || []
        render :index
    end
end

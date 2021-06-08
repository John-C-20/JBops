class Api::SearchesController < ApplicationController

    def index
        if params[:title] != ''
    
        @playlists = Playlist.select('*').where("upper(playlists.playlist_name) LIKE upper('%#{params[:title]}%')") || []
        @songs = Song.select('*').where("upper(songs.song_title) LIKE upper('%#{params[:title]}%')") || []
        @albums = Album.select('*').where("upper(albums.album_title) LIKE upper('%#{params[:title]}%')") || []
        @artists = Artist.select('*').where("upper(artists.name) LIKE upper('%#{params[:title]}%')") || []

        else 

        @playlists = []
        @songs = []
        @albums = [] 
        @artists = []

        end
        render :index
    end
end

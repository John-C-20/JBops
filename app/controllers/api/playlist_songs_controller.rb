class Api::PlaylistSongsController < ApplicationController
    def create
        @playlist_song = PlaylistSong.create(playlist_song_params)
    end

    def index 
        @playlist_song = PlaylistSong.select('*').where("playlist_id = '#{params[:playlistId]}' AND song_id = '#{params[:songId]}'")
        render :json => @playlist_song 

    end

    def destroy
        @playlist_song = PlaylistSong.find(params[:id])
        @playlist_song.delete
    end

    private 

    def playlist_song_params 
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end
end
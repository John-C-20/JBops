class Api::PlaylistSongsController < ApplicationController
    def create
        @playlist_song = PlaylistSong.create(playlist_song_params)
    end

    def destroy
    end

    private 

    def playlist_song_params 
        params.require(:playlist_song).permit(:playlist_id, :song_id)
    end
end
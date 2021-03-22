class Api::PlaylistsController < ApplicationController
    def index
        @playlists = Playlist.all 
        render :index 
    end

    def show
    end
end

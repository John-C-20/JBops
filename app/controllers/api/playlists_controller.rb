class Api::PlaylistsController < ApplicationController
    def create
        @playlist = Playlist.new(playlist_params)

        if @playlist.save
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422 
        end
    end

    def user_index
        @playlists 
    end

    def index
        @playlists = Playlist.all 
        render :index 
    end

    def show
        @playlist = Playlist.find(params[:id])
        render :show
    end

    private

    def playlist_params
        params.require(:playlist).permit(:playlist_name, :user_id)
    end

end

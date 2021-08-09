require 'open-uri'


class Api::PlaylistsController < ApplicationController
    def create
        @playlist = Playlist.new(playlist_params)
        @playlist.playlist_artwork.attach(io: URI.open("https://jbops-seeds.s3.amazonaws.com/New+Playlist.png"), filename: "New Playlist.png")


        if @playlist.save
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422 
        end
    end

    def index
        @playlists = Playlist.all
        render :index 
    end

    def show
        @playlist = Playlist.find(params[:id])
        render :show
    end

    def update 
        @playlist = Playlist.find(params[:id])
        @playlist.update(playlist_params)

        if @playlist.save
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def destroy 
        @playlist = Playlist.find(params[:id])
        if @playlist.delete
            render :show
        else
            render json: @playlist.errors.full_messages, status: 422
        end

    end
    private

    def playlist_params
        params.require(:playlist).permit(:playlist_name, :user_id)
    end

end

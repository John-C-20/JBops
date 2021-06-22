class Api::GenresController < ApplicationController
    def show
        @songs = Song.where(genre: params[:id]).order("id asc")
        render :show 
    end
end
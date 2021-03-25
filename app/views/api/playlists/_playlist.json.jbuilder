json.extract! playlist, :id, :playlist_name, :user_id
json.songs do 
    playlist.songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :song_title

            json.album do 
                json.extract! song.album, :album_title, :album_year, :id, :artwork 
            end
        
            json.artist song.artist.name
        end
    end
end
json.artUrl url_for(playlist.playlist_artwork)
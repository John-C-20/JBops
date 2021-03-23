@playlists.each do |playlist| 
    json.set! playlist.id do 
        json.extract! playlist, :id, :playlist_name, :user_id 
        json.songs do 
            playlist.songs.each do |song|
                json.set! song.id do
                    json.extract! song, :id, :song_title, :album_id
                end
            end
        end
        json.artUrl url_for(playlist.playlist_artwork)
    end
end
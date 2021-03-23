@playlists.each do |playlist| 
    json.set! playlist.id do 
        json.extract! playlist, :id, :playlist_name, :user_id, :playlist_songs
        json.artUrl url_for(playlist.playlist_artwork)
    end
end
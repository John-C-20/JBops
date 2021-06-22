@songs.each do |song|
    json.set! "song_#{song.id}" do 
        json.extract! song, :id, :song_title, :album_id

        json.album do
            json.extract! song.album, :album_title, :album_year
            json.artwork url_for(song.album.artwork)
        end

        json.artist do 
            json.extract! song.artist, :name, :bio
        end

        json.playlists do 
            song.playlists.each do |playlist| 
                json.set! playlist.id do
                    json.extract! playlist, :id, :playlist_name
                end
            end
        end

        json.set! :type, 'song'

        json.musicUrl url_for(song.musicUrl)
    end
end
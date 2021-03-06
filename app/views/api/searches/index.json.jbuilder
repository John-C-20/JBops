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

@artists.each do |artist|
    json.set! "artist_#{artist.id}" do
        json.extract! artist, :id, :name, :bio

        json.set! :type, 'artist' 
    end
end

@albums.each do |album|
    json.set! "album_#{album.id}" do 
        json.extract! album, :id, :album_title, :artist_id, :album_year
    
        json.set! :type, 'album'
    
        json.artwork url_for(album.artwork)
    end
end

@playlists.each do |playlist| 
    json.set! "playlist_#{playlist.id}" do         
        json.extract! playlist, :id, :playlist_name, :user_id
        json.songs do 
            playlist.songs.each do |song|
                json.set! song.id do
                    json.extract! song, :id, :song_title

                    json.musicUrl url_for(song.musicUrl)

                    json.album do 
                        json.extract! song.album, :album_title, :album_year, :id 
                        json.artwork url_for(song.album.artwork) 
                    end
                
                    json.artist song.artist.name
                end
            end
        end

        json.set! :type, 'playlist'
    
        json.artUrl url_for(playlist.playlist_artwork)
    end
end


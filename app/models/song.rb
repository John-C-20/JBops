class Song < ApplicationRecord
    validates :song_title, :album_id, null: false 

    has_many :playlistings,
    foreign_key: :song_id,
    class_name: :PlaylistSong


    has_many :playlists, 
    through: :playlistings,
    source: :playlist
    
    
end

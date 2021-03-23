class Song < ApplicationRecord
    validates :song_title, :album_id, null: false 

    has_one_attached :musicUrl

    has_many :playlistings,
    foreign_key: :song_id,
    class_name: :PlaylistSong


    has_many :playlists, 
    through: :playlistings,
    source: :playlist
    
    belongs_to :album,
    foreign_key: :album_id,
    class_name: :Album

    has_one :artist,
    through: :album,
    source: :artist
    
end

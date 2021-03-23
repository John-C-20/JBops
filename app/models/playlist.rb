class Playlist < ApplicationRecord
    validates :playlist_name, :user_id, presence: true 

    has_one_attached :playlist_artwork

    has_many :playlist_songs,
    foreign_key: :playlist_id, 
    class_name: :PlaylistSong

    has_many :songs, 
    through: :playlist_songs,
    source: :song
end

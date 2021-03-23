class Album < ApplicationRecord
    validates :album_title, :artist_id, :album_year, presence: true 

    has_many :songs,
    foreign_key: :album_id,
    class_name: :Song

    belongs_to :artist, 
    foreign_key: :artist_id,
    class_name: :Artist 
end

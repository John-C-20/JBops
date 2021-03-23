class Artist < ApplicationRecord
    validates :name, presence: true 

    has_many :albums,
    foreign_key: :artist,
    class_name: :Album 

    has_many :songs,
    through: :albums,
    source: :songs

end

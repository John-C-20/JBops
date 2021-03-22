class Playlist < ApplicationRecord
    validates :playlist_name, :user_id, :artwork_url, presence: true 

    has_one_attached :playlist_artwork

end

class Playlist < ApplicationRecord
    validates :playlist_name, presence: true 
    validates :user_id, presence: true 

    has_one_attached :playlist_artwork

end

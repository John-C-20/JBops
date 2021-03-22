class AddPlaylistArtwork < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :artwork_url, :string, null: false 
  end
end

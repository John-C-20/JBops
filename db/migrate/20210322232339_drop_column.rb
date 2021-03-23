class DropColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlists, :artwork_url
  end
end

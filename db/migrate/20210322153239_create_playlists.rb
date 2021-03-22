class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :playlist_name, null: false
      t.integer :user_id, null: false 
      t.timestamps
      t.index :user_id 
    end
  end
end

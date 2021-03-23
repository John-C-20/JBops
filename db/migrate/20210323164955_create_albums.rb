class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :album_title, null: false 
      t.integer :artist_id, null: false 
      t.integer :album_year, null: false 
      t.timestamps
    end
  end
end

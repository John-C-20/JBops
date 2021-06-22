class ChangeGenreDefault < ActiveRecord::Migration[5.2]
  def change
    change_column :songs, :genre, :string, :default => 'pop'
  end
end

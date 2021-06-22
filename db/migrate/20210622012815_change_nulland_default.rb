class ChangeNullandDefault < ActiveRecord::Migration[5.2]
  def change
    change_column_default(:songs, :genre, nil)
    change_column_null(:songs, :genre, false)
  end
end

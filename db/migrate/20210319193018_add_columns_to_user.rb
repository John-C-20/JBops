class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :dob_month, :string, null: false  
    add_column :users, :dob_day, :string, null: false  
    add_column :users, :dob_year, :string, null: false  
  end
end

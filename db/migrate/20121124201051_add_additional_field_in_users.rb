class AddAdditionalFieldInUsers < ActiveRecord::Migration
  def up
    add_column :users, :name, :string
    add_column :users, :country, :string
    add_column :users, :zip, :string
    add_column :users, :image, :string
  end

  def down
    remove_column :users, :name
    remove_column :users, :country
    remove_column :users, :zip
    remove_column :users, :image
  end
end

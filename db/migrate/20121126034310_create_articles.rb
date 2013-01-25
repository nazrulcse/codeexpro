class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.text :sub_content
      t.integer :user_id
      t.string :url
      t.boolean :is_internal

      t.timestamps
    end
  end
end

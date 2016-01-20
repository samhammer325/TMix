class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :name
      t.boolean :random
      t.integer :user_id
      t.integer :author_id

      t.timestamps null: false
    end
  end
end

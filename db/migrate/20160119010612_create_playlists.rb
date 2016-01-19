class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :name
      t.integer :rating
      t.boolean :random
      t.integer :user_id

      t.timestamps null: false
    end
  end
end

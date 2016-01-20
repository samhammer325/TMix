class Playlist < ActiveRecord::Base
  has_many :songs
  has_many :ratings
  has_many :users, through :ratings
end

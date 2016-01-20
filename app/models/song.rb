class Song < ActiveRecord::Base
  belongs_to :playlist
  belongs_to :user
ends

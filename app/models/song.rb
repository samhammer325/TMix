class Song < ActiveRecord::Base
  belongs_to :mixtape
  belongs_to :user
end

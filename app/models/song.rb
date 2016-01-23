class Song < ActiveRecord::Base
  belongs_to :playlist
  belongs_to :user
  #TODO: do we need to add user_id field or remove belongs_to :user?
end

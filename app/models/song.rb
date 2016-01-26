class Song < ActiveRecord::Base
  belongs_to :mixtape
  belongs_to :user
<<<<<<< HEAD
  #TODO: do we need to add user_id field or remove belongs_to :user?
=======
>>>>>>> spencer
end

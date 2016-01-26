class Rating < ActiveRecord::Base
	belongs_to :user
<<<<<<< HEAD
	belongs_to :playlist
=======
	belongs_to :mixtape

	validates_presence_of :user
	validates_presence_of :mixtape
>>>>>>> spencer
end

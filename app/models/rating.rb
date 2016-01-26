class Rating < ActiveRecord::Base
	belongs_to :user
	belongs_to :playlist
	belongs_to :mixtape

	validates_presence_of :user
	validates_presence_of :mixtape

end

class Rating < ActiveRecord::Base
	belongs_to :user
	belongs_to :playlist

	validates_presence_of :user
	validates_presence_of :playlist
end

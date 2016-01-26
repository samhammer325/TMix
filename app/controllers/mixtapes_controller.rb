class MixtapesController < ApplicationController

	def index
  	 @mixtapes = Mixtape.all
  	 render json: @mixtapes
  end

  def users_mixtapes
  	 @mixtapes = Mixtape.all
  	   # binding.pry
  	   # render json: @mixtapes

  end

end

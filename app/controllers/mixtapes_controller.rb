class MixtapesController < ApplicationController

	def index
  	 @mixtapes = Mixtape.all
  	 render json: @mixtapes
  end

  def calculate_average_rating
    @mixtapes = Mixtape.all

    # @mixtapes.each do |mixtape|
      
    # end

  end

  # TODO: change the name to this function
  def users_mixtapes
  	 search_terms = params[:search_term]

  	if search_terms == 'all'
  		@mixtapes = Mixtape.all
    elsif search_terms = 'users'
      @mixtapes = Mixtape.where(user_id: current_user.id)
      # @mixtapes = Mixtape.where(user_id: 2)
  	end
  	# binding.pry
     calculate_average_rating
  end

end

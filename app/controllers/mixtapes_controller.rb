class MixtapesController < ApplicationController

	def index
  	 # @mixtapes = Mixtape.all
  	 # render json: @mixtapes
		 @songs = @mixtape.songs
  end

	def create
		mixtape_name = params[:name]
		mixtape_category = params[:category]
		@mixtape = Mixtape.new
		@mixtape.user_id = current_user.id
		@mixtape.author_id = current_user.id
		@mixtape.name = mixtape_name
		@mixtape.category = mixtape_category
		@mixtape.save

		render json: @mixtape
	end

  def calculate_average_rating
    @mixtapes = Mixtape.all

    # @mixtapes.each do |mixtape|

    # end

  end

  def find_single_mixtape
    mixtape_id =  params[:mixtape_id]
    @mixtape = Mixtape.find(mixtape_id)
      # binding.pry
    # render json: @mixtape

  end

# not using below when player component is being used, but the code can be helpful
	def show_mixtape
		@mixtape = Mixtape.find(params[:id])
		@songs = @mixtape.songs
		# binding.pry
		@songs.each do |song|
			name = song.name.split(' ').join('%20')
			artist = song.artist.split(' ').join('%20')
			binding.pry

			"http://api.dar.fm/playlist.php?q=#{artist}%20#{name}&partner_token=1234567890"
		end
		render json: [@songs]
	end

  # TODO: change the name to this function
  def users_mixtapes
  	 search_terms = params[:search_term]
     # binding.pry
  	if search_terms == 'all'
  		@mixtapes = Mixtape.all
    elsif search_terms == 'users'
      @mixtapes = Mixtape.where(user_id: current_user.id)
    elsif search_terms == 'highest_rated'
       @mixtapes.sort! {|a,b| a.average_rating <=> b.average_rating}
    end

  end

	private

	def mixtape_params
		params.require(:mixtape).permit(:name, :category, :author_id, :random, :user_id)
	end
end

class MixtapesController < ApplicationController

	def index
  end

  def show
    @mixtape = Mixtape.find(params[:id])
    @songs = @mixtape.songs
    
    url_prefix = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chld=H&chl='

    profile_url = request.original_url

    @qr = url_prefix + profile_url

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

  def find_single_mixtape
    mixtape_id =  params[:mixtape_id]
    @mixtape = Mixtape.find(mixtape_id)
	end

  def users_mixtapes
  	 search_terms = params[:search_term]
     # binding.pry
  	if search_terms == 'all'
  		@mixtapes = Mixtape.all
    elsif search_terms == 'users'
      @mixtapes = Mixtape.where(user_id: current_user.id).order(created_at: :desc)
    elsif search_terms == 'highest_rated'
       @mixtapes.sort! {|a,b| a.average_rating <=> b.average_rating}
    end
  end

  def destroy
  	mixtape = Mixtape.find(params[:id])
		mixtape.destroy
		head :ok
  end

	private

		def mixtape_params
			params.require(:mixtape).permit(:name, :category, :author_id, :random, :user_id)
		end
end

class SearchController < ApplicationController
  def index
    artists = 
    binding.pry
    render json: artists
    # @home = Song.all
  end
end

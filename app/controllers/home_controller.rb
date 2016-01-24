class HomeController < ApplicationController
  def index
    @search_term = params[:artist]
  end

  def getSearchResults
    # render 'index'
  end
end

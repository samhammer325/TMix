class HomeController < ApplicationController
  def index
  	@home = Song.all
  end
end

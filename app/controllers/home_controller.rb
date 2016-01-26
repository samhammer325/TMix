class HomeController < ApplicationController
  def index
  	@home = Song.all


  end

  def play
    @station = params[:station]
    render "index"

  end




end

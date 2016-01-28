class SongController < ApplicationController
  def index
  end

  def create
    @song = Song.new
  end

  private

    def song_params
      params.require(:song).permit(:name, :artist, :mixtape_id)
    end
end
